<?php
/**
 *
 * Project : wponion
 * Date : 17-11-2018
 * Time : 06:45 AM
 * File : quick_edit.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules\Edits;

use WPO\Builder;
use WPOnion\Bridge\Module;
use WPOnion\DB\Data_Validator_Sanitizer;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Edits\Quick' ) ) {
	/**
	 * Class Quick
	 *
	 * @package WPOnion\Modules\Edits
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Quick extends Module {
		/**
		 * module
		 *
		 * @var string
		 */
		protected $module = 'quick_edit';

		/**
		 * Quick_Edit constructor.
		 *
		 * @param array             $settings
		 * @param \WPO\Builder|null $fields
		 */
		public function __construct( $settings = array(), Builder $fields = null ) {
			parent::__construct( $fields, $settings );
			$this->init();
			if ( wponion_is_array( $this->option( 'column' ) ) ) {
				$col = $this->option( 'column' );
				if ( ! isset( $col['post_type'] ) ) {
					$col['post_type'] = $this->option( 'post_type' );
				}
				$instance = wponion_admin_columns( $col );
				$this->set_option( 'column', $instance->slug() );
			}
		}

		/**
		 * Returns A Proper Hook Name.
		 *
		 * @param        $post_type
		 * @param string $surfix
		 * @param string $prefix
		 * @param string $middle
		 *
		 * @return string
		 */
		public function get_hook_name( $post_type, $surfix = 'custom_column', $prefix = 'manage_', $middle = '_posts_' ) {
			return $prefix . $post_type . $middle . $surfix;
		}

		/**
		 * Handles On Init.
		 *
		 * @return mixed|void
		 */
		public function on_init() {
			if ( false !== $this->option( 'post_type' ) && ! wponion_is_array( $this->option( 'post_type' ) ) ) {
				$this->set_option( 'post_type', array( $this->option( 'post_type' ) ) );
			}

			if ( wponion_is_array( $this->option( 'post_type' ) ) ) {
				foreach ( $this->option( 'post_type' ) as $post_type ) {
					$this->add_filter( $this->get_hook_name( $post_type ), 'render_hidden_data', 31, 2 );
				}
			}

			$this->add_action( 'quick_edit_custom_box', 'render_quick_edit' );
			$this->add_action( 'save_post', 'save_data' );
		}

		/**
		 * Saves Data in DB.
		 *
		 * @param $post_id
		 */
		public function save_data( $post_id ) {
			if ( isset( $_POST['action'] ) && 'inline-save' === $_POST['action'] || 'bulk_edit' === $this->module() ) {
				if ( isset( $_POST[ $this->unique ] ) ) {
					$this->db_values = $this->get_values( $post_id );
					$instance        = new Data_Validator_Sanitizer( array(
						'module'       => &$this,
						'unique'       => $this->unique(),
						'fields'       => $this->fields,
						'user_values'  => $_POST[ $this->unique ],
						'retain_value' => true,
						'db_values'    => $this->db_values,
					) );
					$instance->run();

					$this->db_values = $instance->get_values();
					if ( false === $this->option( 'save' ) ) {
						update_post_meta( $post_id, $this->unique(), $this->db_values );
					} elseif ( wponion_is_callable( $this->option( 'save' ) ) ) {
						wponion_callback( $this->option( 'save' ), array( $this->db_values, $post_id ) );
					}
				}
			}
		}

		/**
		 * Returns Database Values of the settings.
		 *
		 * @return array|mixed
		 */
		protected function get_db_values() {
			return $this->db_values;
		}

		/**
		 * Renders Quick Edit.
		 *
		 * @param $column
		 */
		public function render_quick_edit( $column ) {
			$this->db_values = array();
			//var_dump( $this->option( 'column' ) );
			if ( $column === $this->option( 'column' ) ) {
				wponion_load_core_assets();
				$this->render_quick_edit_html();
			}
		}

		/**
		 * Renders Quick Edit HTML for each row.
		 */
		public function render_quick_edit_html() {
			echo '<fieldset class="wponion-quick-edit-fieldset ' . $this->option( 'wrap_class' ) . '">';
			echo '<div data-wponion-jsid="' . $this->unique . '" class="' . $this->wrap_class() . '">';
			/* @var $field \WPO\Field */
			foreach ( $this->fields->fields() as $field ) {
				$field['__no_instance'] = true;
				echo $this->render_field( $field );
			}
			echo '</div>';
			echo '</fieldset>';
		}

		/**
		 * Retrives Values And Return's It.
		 *
		 * @param $post_id
		 *
		 * @return array
		 */
		public function get_values( $post_id ) {
			$_values = $this->option( 'values' );
			if ( false === $_values ) {
				$values = get_post_meta( $post_id, $this->unique, true );
			} elseif ( wponion_is_callable( $_values ) ) {
				$values = wponion_callback( $_values, array( $post_id, get_post_type( $post_id ) ) );
			} else {
				$values = $_values;
			}
			$values = ( empty( $values ) ) ? array() : $values;
			return $values;
		}

		/**
		 * Generate Quick Edit Values.
		 *
		 * @param $column
		 * @param $id
		 */
		public function render_hidden_data( $column, $id ) {
			if ( $column === $this->option( 'column' ) ) {
				$this->db_values = $this->get_values( $id );

				$this->catch_output( 'start' );
				echo $this->render_quick_edit_html();
				$html = $this->catch_output( 'stop' );

				wponion_localize()->add( $this->unique . '_' . $id, array(
					'html'   => $html,
					'values' => $this->db_values,
				) );

				$this->db_values = array();

				if ( defined( 'DOING_AJAX' ) && true === DOING_AJAX ) {
					wponion_localize()->render_js_args();
				}
			}
		}

		/**
		 * @return array
		 */
		protected function defaults() {
			return $this->parse_args( parent::defaults(), array(
				'post_type'  => false,
				'column'     => false,
				'values'     => false,
				'save'       => false,
				'wrap_class' => '',
			) );
		}
	}
}
