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
	final class Setup {
		/**
		 * Stores Autoloader Instance.
		 *
		 * @var bool
		 * @access
		 */
		private static $core_autoloader = false;

		/**
		 * Stores Autoloader Instance.
		 *
		 * @var bool
		 * @access
		 */
		private static $field_autoloader = false;

		/**
		 * Fires Basic Setup Hook.
		 *
		 * @static
		 * @throws \Exception
		 */
		public static function init() {
			add_action( 'wponion_loaded', array( __CLASS__, 'on_wponion_loaded' ), 1 );
			self::load_required_files();
		}

		/**
		 * Loads Basic Files To Support WPOnion.
		 *
		 * @hook wponion_loaded
		 * @static
		 * @throws \Exception
		 */
		public static function load_required_files() {
			if ( file_exists( WPONION_PATH . 'vendor/autoload.php' ) ) {
				require_once WPONION_PATH . 'vendor/autoload.php';
			}

			self::init_autoloader();

			require_once WPONION_PATH . 'core/helpers/base.php';

			require_once WPONION_PATH . 'core/registry/class-common.php';
			require_once WPONION_PATH . 'core/registry/class-core.php';
			require_once WPONION_PATH . 'core/registry/class-modules.php';
			require_once WPONION_PATH . 'core/registry/class-field-types.php';
			require_once WPONION_PATH . 'core/registry/class-fields.php';
			require_once WPONION_PATH . 'core/registry/class-field-error.php';

			require_once WPONION_PATH . 'core/class-themes.php';
			require_once WPONION_PATH . 'core/class-assets.php';
			require_once WPONION_PATH . 'core/class-icons.php';
			require_once WPONION_PATH . 'core/class-core-ajax.php';

			/**
			 * This Hook Fires Before Integrations Files Loads.
			 */
			do_action( 'wponion_core_loaded' );

			if ( wp_is_plugin_active( 'js_composer/js_composer.php' ) ) {
				require_once WPONION_PATH . 'core/integrations/page-builders/class-visual-composer.php';
			}

			do_action( 'wponion_integrations_loaded' );

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

			do_action( 'wponion_init' );
		}

		/**
		 * Inits Autoloader.
		 *
		 * @static
		 * @throws \Exception
		 */
		public static function init_autoloader() {
			self::$field_autoloader = new \Varunsridharan\PHP\Autoloader( 'WPOnion\Field', WPONION_PATH . 'fields/', array(), true );
			self::$core_autoloader  = new \Varunsridharan\PHP\Autoloader( 'WPOnion', WPONION_PATH . 'core/', array(
				'exclude' => 'WPOnion\Field',
			) );

			self::$core_autoloader->add( 'WPOnion\Bridge', WPONION_PATH . '/core/abstract/class-bridge.php' );
			self::$core_autoloader->add( 'WPOnion\Bridge\Module', WPONION_PATH . '/core/abstract/class-module.php' );
			self::$core_autoloader->add( 'WPOnion\Theme_API', WPONION_PATH . '/core/abstract/class-theme-api.php' );
			self::$field_autoloader->add( 'WPOnion\Field\Cloner', WPONION_PATH . '/core/class-field-cloner.php' );
			self::$field_autoloader->add( 'WPOnion\Field', WPONION_PATH . '/core/abstract/class-field.php' );
		}

		/**
		 * Registers Field.
		 *
		 * @static
		 */
		public static function register_core_fields() {
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

			/**
			 * Registers UI Field.
			 */
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
			\wponion_register_ui_field( 'wp_error_notice', 'all' );
			\wponion_register_ui_field( 'wp_info_notice', 'all' );
			\wponion_register_ui_field( 'wp_list_table', 'all' );
			\wponion_register_ui_field( 'wp_notice', 'all' );
			\wponion_register_ui_field( 'wp_success_notice', 'all' );
			\wponion_register_ui_field( 'wp_warning_notice', 'all' );

			do_action( 'wponion_core_fields_registered' );
		}
	}
}

Setup::init();
