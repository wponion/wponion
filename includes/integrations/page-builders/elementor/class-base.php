<?php

namespace WPOnion\Integrations\Page_Builders\Elementor;

defined( 'ABSPATH' ) || exit;

use Elementor\Controls_Manager;
use Elementor\Core\DynamicTags\Data_Tag;

/**
 * Class Base
 *
 * @package WPOnion\Integrations\Page_Builders\Elementor
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
trait Base {
	/**
	 * @var string
	 */
	public static $wpo_title = false;

	/**
	 * @var bool
	 */
	public static $wpo_slug = false;

	/**
	 * @var \WPOnion\Modules\Metabox\Metabox|\WPOnion\Modules\Admin\Taxonomy|\WPOnion\Modules\Settings\Settings
	 */
	public static $wpo_instance = null;

	/**
	 * Stores Field ID & Its Type.
	 *
	 * @var array
	 */
	protected $wpo_ids = array();

	/**
	 * Stores WPO Values.
	 *
	 * @var array
	 */
	protected $wpo_values = false;

	/**
	 * Stores All Field Types => ids
	 *
	 * @var array
	 */
	protected $wpo_types_ids = array();


	/**
	 * @return string
	 */
	public function get_panel_template_setting_key() {
		return 'key';
	}

	/**
	 * Shows Extra Options Once The insance is selected.
	 *
	 * @return bool
	 */
	public function is_settings_required() {
		return true;
	}

	/**
	 * Registers Custom Control.
	 */
	protected function _register_controls() {
		$this->add_control( 'key', array(
			'label'  => __( 'Field', 'wponion' ),
			'type'   => Controls_Manager::SELECT,
			'groups' => $this->get_option_groups(),
		) );
	}

	/**
	 * @param $field
	 *
	 * @return bool
	 */
	protected function is_supported( $field ) {
		$fields = array( 'text', 'textarea', 'color_picker', 'wp_editor', 'icon_picker' );

		if ( $this instanceof Data_Tag ) {
			$fields = array( 'image_select', 'image', 'upload', 'oembed' );
		}

		return in_array( wponion_get_field_type( $field, false ), $fields, true );
	}

	/**
	 * @param \WPO\Container|\WPO\Builder $pages
	 *
	 * @return array
	 */
	protected function extract_fields( $pages ) {
		$return = array();
		if ( $pages->has_fields() ) {
			foreach ( $pages->fields() as $field ) {
				if ( false === $this->is_supported( $field ) ) {
					continue;
				}
				$id                   = wponion_field_id( $field );
				$type                 = wponion_get_field_type( $field );
				$return[ $id ]        = $field['title'];
				$this->wpo_ids[ $id ] = $type;
				if ( ! isset( $this->wpo_types_ids[ $type ] ) ) {
					$this->wpo_types_ids[ $type ] = array();
				}
				$this->wpo_types_ids[ $type ][] = $id;
			}
		}
		return $return;
	}

	/**
	 * @return array
	 */
	protected function get_option_groups() {
		$return = array();
		$fields = self::$wpo_instance->fields();

		/**
		 * @var \WPO\Container $container
		 * @var \WPO\Container $subcontainer
		 */

		if ( $fields->has_fields() ) {
			$return = $this->extract_fields( $fields );
		} elseif ( $fields->has_containers() ) {
			foreach ( $fields->containers() as $container ) {
				if ( $container->has_containers() ) {
					foreach ( $container->containers() as $subcontainer ) {
						$return[] = array(
							'label'   => $container->title() . ' - ' . $subcontainer->title(),
							'options' => $this->extract_fields( $subcontainer ),
						);
					}
				} elseif ( $container->has_fields() ) {
					$return[] = array(
						'label'   => $container->title(),
						'options' => $this->extract_fields( $container ),
					);
				}
			}
		}
		return $return;
	}

	/**
	 * @param bool $return
	 *
	 * @return bool
	 */
	protected function render( $return = false ) {
		$key = $this->get_settings( 'key' );
		if ( isset( $this->wpo_ids[ $key ] ) ) {
			$values = $this->get_db_value();
			if ( isset( $values[ $key ] ) ) {
				$value = $values[ $key ];
				$type  = $this->wpo_ids[ $key ];

				if ( method_exists( $this, 'field_' . $type ) ) {
					$value = $this->{'field_' . $type}( $value );
				}

				if ( ! empty( $value ) && false === $return ) {
					echo $value;
				}
				return $value;
			}
		}
		return false;
	}

	/**
	 * Returns A Title.
	 *
	 * @return string|void
	 */
	public function get_title() {
		return ( ! empty( self::$wpo_title ) ) ? self::$wpo_title : __( 'WPOnion Field', 'wponion' );
	}

	/**
	 * Returns A Name. (Slug)
	 *
	 * @return bool|string
	 */
	public function get_name() {
		return ( ! empty( self::$wpo_slug ) ) ? self::$wpo_slug : sanitize_title( $this->get_title() );
	}
}
