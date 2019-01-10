<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Integrations\Page_Builders;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Integrations\Page_Builders\Visual_Composer' ) ) {
	/**
	 * Class Visual_Composer
	 *
	 * @package WPOnion\Integrations\Page_Builders
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	final class Visual_Composer {
		/**
		 * Stores Field Types.
		 *
		 * @var array
		 * @access
		 * @static
		 */
		protected static $integrated_fields = array();

		/**
		 * Field Prefix.
		 *
		 * @var string
		 * @access
		 * @static
		 */
		private static $param_prefix = 'wponion_';

		/**
		 * @var bool
		 * @access
		 * @static
		 */
		private static $is_wponion_used = false;

		/**
		 * Inits Base Class.
		 *
		 * @static
		 */
		public static function init() {
			self::$integrated_fields = wponion_field_types()::get( 'visual_composer' );
			self::register_fields();
			add_action( 'vc_edit_form_fields_after_render', array( __CLASS__, 'is_wponion_used' ) );
		}

		public static function register_fields() {
			foreach ( self::$integrated_fields as $field ) {
				vc_add_shortcode_param( self::$param_prefix . $field, array( __CLASS__, 'render_field' ), false );
			}
		}

		/**
		 * @param $field_args
		 * @param $value
		 * @param $type
		 *
		 * @static
		 * @return string
		 */
		public static function render_field( $field_args, $value, $type ) {
			self::$is_wponion_used = true;
			$class                 = wponion_module_html_class( 'visual_composer' );
			$field_type            = self::field_type( $field_args['type'] );
			$output                = '<div class="' . $class . ' wponion-visual_composer-field-' . $field_type . '">';
			$output                = $output . self::render( $field_args, $value, $field_args['type'] );
			$output                = $output . '</div>';
			return $output;
		}

		/**
		 * Renders HTML output for a field.
		 *
		 * @param $field_args
		 * @param $value
		 * @param $type
		 *
		 * @static
		 * @return string
		 */
		public static function render( $field_args, $value, $type ) {
			$class = self::get_class( self::field_type( $type ) );
			if ( false === $class ) {
				/* translators: Added Field Type. */
				return '<p>' . sprintf( __( 'Visual Composer Integration For WPOnion Field (%s) Not Found' ), $type ) . '</p>';
			}

			$field_args['type'] = self::field_type( $type );
			$instance           = new $class( $field_args, $value );
			return $instance->output();
		}

		/**
		 * @param $type
		 *
		 * @static
		 * @return \WPOnion\Field
		 */
		public static function get_class( $type ) {
			$class = wponion_get_field_class( $type, 'Visual_Composer' );
			if ( false === $class ) {
				$class = wponion_get_field_class( 'Base', 'Visual_Composer' );
			}
			return $class;
		}

		/**
		 * Returns A Proper Field Type.
		 *
		 * @param $type
		 *
		 * @static
		 * @return mixed
		 */
		public static function field_type( $type ) {
			return str_replace( self::$param_prefix, '', $type );
		}

		/**
		 * Validates if Field Type is WPOnion's Core Field.
		 *
		 * @param $type
		 *
		 * @static
		 * @return bool
		 */
		public static function is_wponion( $type ) {
			return ( false !== strpos( $type, self::$param_prefix ) );
		}

		public static function is_wponion_used() {
			if ( true === self::$is_wponion_used ) {
				echo '<script type="text/javascript">wponion_visual_composer_init()</script>';
			}
		}
	}
}
