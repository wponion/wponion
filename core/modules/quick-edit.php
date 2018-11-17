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

namespace WPOnion\Modules;
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Quick_Edit' ) ) {
	/**
	 * Class Quick_Edit
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Quick_Edit extends \WPOnion\Bridge\Module {
		/**
		 * module
		 *
		 * @var string
		 */
		protected $module = 'quick_edit';

		/**
		 * Quick_Edit constructor.
		 *
		 * @param array $settings
		 * @param array $fields
		 */
		public function __construct( $settings = array(), $fields = array() ) {
			parent::__construct( $fields, $settings );
			$this->init();
			if ( is_array( $this->option( 'column' ) ) ) {
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
			if ( false !== $this->option( 'post_type' ) && ! is_array( $this->option( 'post_type' ) ) ) {
				$this->set_option( 'post_type', array( $this->option( 'post_type' ) ) );
			}

			if ( is_array( $this->option( 'post_type' ) ) ) {
				foreach ( $this->option( 'post_type' ) as $post_type ) {
					$this->add_filter( $this->get_hook_name( $post_type ), 'render_hidden_data', 31, 2 );
				}
			}

			$this->add_action( 'quick_edit_custom_box', 'render_quick_edit', 10, 2 );
		}

		/**
		 * Returns Database Values of the settings.
		 *
		 * @return array|mixed
		 */
		protected function get_db_values() {
			return array();
		}

		/**
		 * Renders Quick Edit.
		 *
		 * @param $column
		 * @param $post_type
		 */
		public function render_quick_edit( $column, $post_type ) {
			if ( $column === $this->option( 'column' ) ) {
				wponion_load_core_assets();
				echo '<fieldset class="inline-edit-col-left">';
				echo '<div data-wponion-jsid="' . $this->unique . '" class="' . $this->wrap_class() . '">';
				foreach ( $this->fields as $field ) {
					echo $this->render_field( $field );
				}
				echo '</div>';
				echo '</fieldset>';
			}
		}

		/**
		 * Generate Quick Edit Values.
		 *
		 * @param $column
		 * @param $post_id
		 */
		public function render_hidden_data( $column, $post_id ) {
			$_values = $this->option( 'values' );
			if ( $column === $this->option( 'column' ) ) {
				if ( false === $_values ) {
					$values = get_post_meta( $post_id, $this->unique, true );
				} elseif ( wponion_is_callable( $_values ) ) {
					$values = wponion_callback( $_values, array( $post_id, get_post_type( $post_id ) ) );
				} else {
					$values = $_values;
				}
				$values = ( empty( $values ) ) ? array() : $values;
				wponion_localize()->add( $this->unique . '_' . $post_id, $values );
			}
		}

		/**
		 * Returns A Proper Wrap Class.
		 *
		 * @param string $extra_class
		 * @param bool   $bootstrap
		 *
		 * @return array|string
		 */
		public function wrap_class( $extra_class = '', $bootstrap = true ) {
			return $this->default_wrap_class( $bootstrap );
		}

		/**
		 * @return array
		 */
		protected function defaults() {
			return $this->parse_args( parent::defaults(), array(
				'post_type' => false,
				'column'    => false,
				'values'    => false,
				'save'      => false,
			) );
		}
	}
}
