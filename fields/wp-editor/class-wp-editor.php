<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\WP_Editor' ) ) {
	/**
	 * Class WP_Editor
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_Editor extends Field {
		/**
		 * @var null
		 * @access
		 * @static
		 */
		private static $assets = null;

		/**
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			$settings = ( $this->has( 'settings' ) ) ? $this->data( 'settings' ) : array();
			$settings = $this->parse_args( $settings, array(
				'textarea_rows' => 10,
				'textarea_name' => $this->name(),
			) );
			$elem_id  = ( true === $this->data( 'in_group' ) ) ? $this->field_id() . $this->data( 'group_count' ) : $this->field_id();

			if ( null === self::$assets ) {
				$this->catch_output( 'start' );
				wp_print_styles( 'editor-buttons' );
				self::$assets = $this->catch_output( 'stop' );
				$class        = array( __CLASS__, 'load_editor_style' );

				if ( ! has_action( 'admin_footer', $class ) ) {
					add_action( 'admin_footer', $class );
				}
				if ( ! has_action( 'wp_footer', $class ) ) {
					add_action( 'wp_footer', $class );
				}
			}

			wp_editor( $this->value(), $elem_id, $settings );
			wponion_localize()->add( $this->js_field_id(), array(
				'wpeditor_id' => $elem_id,
			) );
			echo $this->after();
		}

		/**
		 * @static
		 */
		public static function load_editor_style() {
			echo self::$assets;
			wp_print_styles( 'editor-buttons' );
		}

		/**
		 * @return mixed|void
		 */
		public function field_assets() {
		}

		/**
		 * @return mixed
		 */
		protected function field_default() {
			return array(
				'settings'    => array(),
				'in_group'    => false,
				'group_count' => false,
			);
		}
	}
}
