<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Cloner
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Cloner extends Field {
	/**
	 * orginal_field
	 *
	 * @var array
	 */
	protected $orginal_field = array();

	/**
	 * WPOnion_Field constructor.
	 *
	 * @param array        $field
	 * @param array        $value
	 * @param string|array $unique
	 */
	public function __construct( $field = array(), $value = array(), $unique = array() ) {
		$this->orginal_field = $field;
		parent::__construct( $field, $value, $unique );
	}

	/**
	 * @var null
	 */
	protected $actual_type = null;

	/**
	 * Field's Custom Wrap Class.
	 *
	 * @return string
	 */
	protected function wrap_class() {
		return 'wponion-has-nested-fields';
	}

	/**
	 * Handles Fields Wrapper.
	 */
	protected function wrapper() {
		$this->actual_type = $this->option( 'type' );
		$this->set_option( 'type', 'clone' );
		$html = parent::wrapper();
		$this->set_option( 'type', $this->actual_type );
		return $html;
	}

	/**
	 * Renders HTML for clone button.
	 *
	 * @param string $type
	 *
	 * @return string
	 */
	protected function clone_btn( $type = 'add' ) {
		if ( 'add' === $type ) {
			return $this->sub_field( $this->handle_args( 'label', $this->option( 'clone/add_button' ), array(
				'class'       => array( 'button', 'button-primary' ),
				'type'        => 'button',
				'attributes'  => array(
					'data-wponion-jsid'      => $this->js_field_id(),
					'data-wponion-clone-add' => 'yes',
				),
				'only_field'  => true,
				'button_type' => 'button',
				// translators: 1. Add Icon
				'label'       => sprintf( __( 'Add %s ', 'wponion' ), wponion_icon( 'wpoic-plus-circle' ) ),
			) ), null, null );

		}

		return wponion_icon( '  wpoic-delete wponion-remove' );
	}

	/**
	 * Renders Single Element HTML.
	 *
	 * @param $value
	 * @param $extra_unique
	 *
	 * @return string
	 */
	protected function clone_single_element( $value, $extra_unique ) {
		//$sort   = $this->option( 'clone' );
		$return = '<div class="wponion-field-clone" data-wponion-jsid="' . $this->js_field_id() . '">';
		//if ( false !== $sort['sort'] ) {
		//$return .= '<div class="wponion-field-clone-sorter">' . wponion_icon( $this->option( 'clone' )['sort'] ) . '</div>';
		//}
		$args                    = $this->get_clone_attrs();
		$args['value']           = $value;
		$args['fieldset_column'] = 'wpo-col-xs-12';
		$args['name']            = $this->unique( $this->field_id() . '/' . $extra_unique . '/' );
		$return                  .= '<div class="wponion-clone-action">';
		$return                  .= '<div class="cloner-sort">' . wponion_icon( $this->option( 'clone/sort' ) ) . '</div>';
		$return                  .= '<div class="cloner-remove">' . $this->clone_btn( 'delete' ) . '</div>';
		$return                  .= '</div>';
		$return                  .= '<div class="wponion-clone-content">';
		$return                  .= $this->sub_field( $args, $value, $this->unique( $this->field_id() . '/' . $extra_unique . '/' ) );
		$return                  .= '</div>';
		$return                  .= '</div>';
		return $return;
	}

	/**
	 * Handles Cloneable Fields.
	 *
	 * @return string
	 */
	protected function _clone_fields() {
		$values = $this->value();
		$count  = ( empty( $values ) ) ? 0 : count( $values );
		$return = '<div class="wponion-clone-wrap" data-wponion-clone-count="' . $count . '" data-wponion-jsid="' . $this->js_field_id() . '">';

		if ( wponion_is_array( $values ) ) {
			foreach ( $values as $value_id => $value ) {
				$return .= $this->clone_single_element( $value, $value_id );
			}
		}
		$this->localize_field( array( 'clone_template' => $this->clone_single_element( null, '{wponionCloneID}' ) ) );
		$return .= '</div>';
		$return .= '<div class="wponion-clone-actions">' . $this->clone_btn() . '</div> ';
		return $return;
	}

	/**
	 * Generates Final HTML Output.
	 *
	 * @return mixed|void
	 */
	protected function output() {
		$this->set_option( 'type', $this->actual_type );
		return $this->before() . $this->_clone_fields() . $this->after();
	}

	/**
	 * Returns Cloneable Attrs.
	 *
	 * @return array
	 */
	public function get_clone_attrs() {
		$field             = $this->orginal_field;
		$field['in_clone'] = true;
		$remove            = array(
			'title',
			'help',
			'desc',
			'desc_field',
			'before_title',
			'after_title',
			'before',
			'after',
			'placeholder',
			'default',
			'dependency',
			'wrap_attributes',
			'clone_settings',
		);

		foreach ( $remove as $k ) {
			unset( $field[ $k ] );
		}

		return $field;
	}

	/**
	 * Checks & Updat fields args based on field config.
	 */
	protected function handle_arguments() {
		$defaults = array(
			'animations'  => array(
				'show' => false,
				'hide' => false,
			),
			'sort'        => true,
			'toast_error' => false,
			'error_msg'   => null,
			'limit'       => null,
			'add_button'  => sprintf( __( 'Add %s ', 'wponion' ), wponion_icon( 'wpoic-plus-circle' ) ),
		);
		$clone    = $this->option( 'clone' );

		if ( ! wponion_is_array( $clone ) ) {
			$clone = ( is_array( $this->option( 'clone_settings' ) ) ) ? $this->option( 'clone_settings' ) : array();
		}

		$clone = $this->parse_args( $clone, $defaults );

		if ( null === $clone['error_msg'] ) {
			/* translators: Adds Max Count */
			$clone['error_msg'] = sprintf( __( 'You Cannot Add More Than %s', 'wponion' ), $clone['limit'] );
		}

		$clone['error_msg'] = $this->handle_args( 'content', $clone['error_msg'], array( 'type' => 'notice_danger' ), array( 'only_field' => true ) );
		$clone['error_msg'] = wponion_add_element( $clone['error_msg'], false, false );

		if ( true === $clone['sort'] ) {
			$clone['sort'] = 'wpoic-menu';
		}

		$this->set_option( 'clone', $clone );
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
		if ( false !== $this->option( 'clone/sort' ) ) {
			wp_enqueue_script( 'jquery-ui-sortable' );
		}
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array();
	}

	/**
	 * Returns A JS Args.
	 *
	 * @return array
	 */
	protected function js_args() {
		return array(
			'clone' => array(
				'animations'  => $this->option( 'clone/animations' ),
				'add_button'  => $this->option( 'clone/add_button' ),
				'sort'        => $this->option( 'clone/sort' ),
				'limit'       => $this->option( 'clone/limit' ),
				'error_msg'   => $this->option( 'clone/error_msg' ),
				'toast_error' => $this->option( 'clone/toast_error' ),
			),
		);
	}
}
