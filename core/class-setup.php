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

namespace WPOnion;

use Varunsridharan\PHP\Autoloader;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Setup' ) ) {
	/**
	 * Class Setup
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	final class Setup extends Addons {
		/**
		 * @var bool
		 * @access
		 * @static
		 */
		private static $core_autoloader = false;

		/**
		 * @var bool
		 * @access
		 * @static
		 */
		private static $field_autoloader = false;

		/**
		 * @var bool
		 * @access
		 * @static
		 */
		private static $module_fields_autoloader = false;

		/**
		 * @var bool
		 * @access
		 * @static
		 */
		private static $builder_autoloader = false;

		/**
		 * Stores Remaps Class.
		 *
		 * @var array
		 * @access
		 * @static
		 */
		private static $remaps = array();

		/**
		 * Fires Basic Setup Hook.
		 *
		 * @static
		 * @throws \Exception
		 */
		public static function init() {
			self::setup_remaps();
			add_action( 'wponion_loaded', array( __CLASS__, 'on_wponion_loaded' ), 1 );
			self::load_required_files();
		}

		/**
		 * @static
		 * @throws \Exception
		 */
		public static function load_required_files() {
			if ( file_exists( WPONION_PATH . 'vendor/autoload.php' ) ) {
				require_once WPONION_PATH . 'vendor/autoload.php';
			}

			self::init_autoloader();

			require_once WPONION_PATH . 'core/helpers/base.php';

			require_once WPONION_PATH . 'core/class-themes.php';
			require_once WPONION_PATH . 'core/class-assets.php';
			require_once WPONION_PATH . 'core/class-core-ajax.php';

			/**
			 * This Hook Fires Before Integrations Files Loads.
			 */
			do_action( 'wponion_core_loaded' );

			do_action( 'wponion_integrations_loaded' );

			do_action( 'wponion_before_addons_load' );
			self::load_addons();
			do_action( 'wponion_after_addons_load' );

			do_action( 'wponion_loaded' );
		}

		/**
		 * @hook wponion_init
		 * @static
		 */
		public static function on_wponion_loaded() {
			\wponion_admin_notices();
			self::register_core_fields();

			if ( wp_is_plugin_active( 'js_composer/js_composer.php' ) ) {
				Integrations\Page_Builders\Visual_Composer::init();
			}

			if ( wp_is_plugin_active( 'elementor/elementor.php' ) ) {
				Integrations\Page_Builders\Elementor::init();
			}

			do_action( 'wponion_init' );
		}

		/**
		 * Inits Autoloader.
		 *
		 * @static
		 * @throws \Exception
		 */
		public static function init_autoloader() {
			self::$field_autoloader = new Autoloader( 'WPOnion\Field', WPONION_PATH . 'fields/', array(
				'prepend' => true,
			) );

			self::$module_fields_autoloader = new Autoloader( 'WPOnion\Module_Fields', WPONION_PATH . 'module_fields/', array(
				'prepend' => true,
			) );

			self::$core_autoloader = new Autoloader( 'WPOnion', WPONION_PATH . 'core/', array(
				'exclude' => array( 'WPOnion\Field', 'WPOnion\Module_Fields' ),
			) );

			self::$builder_autoloader = new Autoloader( 'WPO', WPONION_PATH . 'builder/', array(
				'exclude' => array( 'WPOnion' ),
				'prepend' => true,
			) );

			new Autoloader( 'WPO', WPONION_PATH . 'builder/fields/', array(), false );

			self::$core_autoloader->map( 'WPOnion\Bridge', WPONION_PATH . '/core/abstract/class-bridge.php' );
			self::$core_autoloader->map( 'WPOnion\Bridge\Module', WPONION_PATH . '/core/abstract/class-module.php' );
			self::$core_autoloader->map( 'WPOnion\Theme_API', WPONION_PATH . '/core/abstract/class-theme-api.php' );

			//Remap Field & Field Cloner.
			self::$field_autoloader->map( 'WPOnion\Field\Cloner', WPONION_PATH . '/core/class-field-cloner.php' );
			self::$field_autoloader->map( 'WPOnion\Field', WPONION_PATH . '/core/abstract/class-field.php' );
		}

		/**
		 * Registers Field.
		 *
		 * @static
		 */
		public static function register_core_fields() {
			\wponion_register_field( 'clone', 'all' );
			\wponion_register_field( 'accordion', 'all' );
			\wponion_register_field( 'background', 'all' );
			\wponion_register_field( 'button', 'all' );
			\wponion_register_field( 'checkbox', 'all' );
			\wponion_register_field( 'color_palette', 'all' );
			\wponion_register_field( 'color_picker', 'all' );
			\wponion_register_field( 'date_picker', 'all' );
			\wponion_register_field( 'fieldset', 'all' );
			\wponion_register_field( 'font_picker', 'all' );
			\wponion_register_field( 'gallery', 'all' );
			\wponion_register_field( 'google_maps', 'all' );
			\wponion_register_field( 'group', 'all' );
			\wponion_register_field( 'hidden', 'all' );
			\wponion_register_field( 'icon_picker', 'all' );
			\wponion_register_field( 'image', 'all' );
			\wponion_register_field( 'image_select', 'all' );
			\wponion_register_field( 'key_value', 'all' );
			\wponion_register_field( 'oembed', 'all' );
			\wponion_register_field( 'radio', 'all' );
			\wponion_register_field( 'select', 'all' );
			\wponion_register_field( 'sorter', 'all' );
			\wponion_register_field( 'switcher', 'all' );
			\wponion_register_field( 'tab', 'all' );
			\wponion_register_field( 'text', 'all' );
			\wponion_register_field( 'textarea', 'all' );
			\wponion_register_field( 'typography', 'all' );
			\wponion_register_field( 'upload', 'all' );
			\wponion_register_field( 'wp_editor', 'all' );
			\wponion_register_field( 'wp_link', 'all' );
			\wponion_register_field( 'color_group', 'all' );
			\wponion_register_field( 'link_color', 'all' );
			\wponion_register_field( 'input_group', 'all' );
			\wponion_register_field( 'spacing', 'all' );
			\wponion_register_field( 'dimensions', 'all' );
			\wponion_register_field( 'button_set', 'all' );

			/**
			 * Registers UI Field.
			 */
			\wponion_register_ui_field( 'divider', 'all' );
			\wponion_register_ui_field( 'content', 'all' );
			\wponion_register_ui_field( 'heading', 'all' );
			\wponion_register_ui_field( 'iframe', 'all' );
			\wponion_register_ui_field( 'jambo_content', 'all' );
			\wponion_register_ui_field( 'notice', 'all' );
			\wponion_register_ui_field( 'notice_danger', 'all' );
			\wponion_register_ui_field( 'notice_dark', 'all' );
			\wponion_register_ui_field( 'notice_info', 'all' );
			\wponion_register_ui_field( 'notice_light', 'all' );
			\wponion_register_ui_field( 'notice_primary', 'all' );
			\wponion_register_ui_field( 'notice_secondary', 'all' );
			\wponion_register_ui_field( 'notice_success', 'all' );
			\wponion_register_ui_field( 'notice_warning', 'all' );
			\wponion_register_ui_field( 'subheading', 'all' );
			\wponion_register_ui_field( 'wp_list_table', 'all' );
			\wponion_register_ui_field( 'wp_notice', 'all' );
			\wponion_register_ui_field( 'wp_notice_success', 'all' );
			\wponion_register_ui_field( 'wp_notice_warning', 'all' );
			\wponion_register_ui_field( 'wp_notice_error', 'all' );
			\wponion_register_ui_field( 'wp_notice_info', 'all' );
			\wponion_register_ui_field( 'change_log', 'all' );

			do_action( 'wponion_core_fields_registered' );
		}

		private static function setup_remaps() {
			/**
			 * WPO Builder Remaps
			 */
			self::$remaps['\WPO\notice_danger']     = '\WPO\Notice';
			self::$remaps['\WPO\notice_dark']       = '\WPO\Notice';
			self::$remaps['\WPO\notice_light']      = '\WPO\Notice';
			self::$remaps['\WPO\notice_primary']    = '\WPO\Notice';
			self::$remaps['\WPO\notice_info']       = '\WPO\Notice';
			self::$remaps['\WPO\notice_secondary']  = '\WPO\Notice';
			self::$remaps['\WPO\notice_success']    = '\WPO\Notice';
			self::$remaps['\WPO\notice_warning']    = '\WPO\Notice';
			self::$remaps['\WPO\WP_Notice_Error']   = '\WPO\WP_Notice';
			self::$remaps['\WPO\WP_Notice_Warning'] = '\WPO\WP_Notice';
			self::$remaps['\WPO\WP_Notice_Success'] = '\WPO\WP_Notice';
			self::$remaps['\WPO\WP_Notice_Info']    = '\WPO\WP_Notice';

			/**
			 * Customizer Module Fields.
			 */
			self::$remaps['\WPOnion\Module_Fields\Customizer\radio']        = '\WPOnion\Module_Fields\Customizer\Checkbox';
			self::$remaps['\WPOnion\Module_Fields\Customizer\input_group']  = '\WPOnion\Module_Fields\Customizer\Checkbox';
			self::$remaps['\WPOnion\Module_Fields\Customizer\fieldset']     = '\WPOnion\Module_Fields\Customizer\Checkbox';
			self::$remaps['\WPOnion\Module_Fields\Customizer\accordion']    = '\WPOnion\Module_Fields\Customizer\Checkbox';
			self::$remaps['\WPOnion\Module_Fields\Customizer\group']        = '\WPOnion\Module_Fields\Customizer\Checkbox';
			self::$remaps['\WPOnion\Module_Fields\Customizer\color_picker'] = '\WPOnion\Module_Fields\Customizer\Button_Set';
			self::$remaps['\WPOnion\Module_Fields\Customizer\image_select'] = '\WPOnion\Module_Fields\Customizer\Button_Set';

			/**
			 * WP Notice Remaps.
			 */
			self::$remaps['\WPOnion\Field\wp_notice_success'] = '\WPOnion\Field\WP_Notice';
			self::$remaps['\WPOnion\Field\wp_notice_warning'] = '\WPOnion\Field\WP_Notice';
			self::$remaps['\WPOnion\Field\wp_notice_error']   = '\WPOnion\Field\WP_Notice';
			self::$remaps['\WPOnion\Field\wp_notice_info']    = '\WPOnion\Field\WP_Notice';

			/**
			 * General Notice.
			 */
			self::$remaps['\WPOnion\Field\Notice_Warning']   = '\WPOnion\Field\Notice';
			self::$remaps['\WPOnion\Field\Notice_Primary']   = '\WPOnion\Field\Notice';
			self::$remaps['\WPOnion\Field\Notice_Secondary'] = '\WPOnion\Field\Notice';
			self::$remaps['\WPOnion\Field\Notice_Success']   = '\WPOnion\Field\Notice';
			self::$remaps['\WPOnion\Field\Notice_Dark']      = '\WPOnion\Field\Notice';
			self::$remaps['\WPOnion\Field\Notice_Info']      = '\WPOnion\Field\Notice';
			self::$remaps['\WPOnion\Field\Notice_Light']     = '\WPOnion\Field\Notice';
			self::$remaps['\WPOnion\Field\Notice_Danger']    = '\WPOnion\Field\Notice';

			self::$remaps = apply_filters( 'wponion_field_class_remaps', self::$remaps );

			foreach ( self::$remaps as $key => $val ) {
				self::$remaps[ strtolower( $key ) ] = strtolower( $val );
			}
		}

		/**
		 * Returns Remaps Class if Exists.
		 *
		 * @param $class
		 * @param $default
		 *
		 * @static
		 * @return bool|mixed
		 */
		public static function remap( $class, $default = false ) {
			return ( isset( self::$remaps[ strtolower( $class ) ] ) ) ? self::$remaps[ strtolower( $class ) ] : $default;
		}
	}
}

Setup::init();
