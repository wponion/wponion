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
		 * Fires Basic Setup Hook.
		 *
		 * @static
		 */
		public static function init() {
			self::load_required_files();
			add_action( 'wponion_loaded', array( __CLASS__, 'on_wponion_loaded' ), 1 );
		}

		/**
		 * Loads Basic Files To Support WPOnion.
		 *
		 * @hook wponion_loaded
		 * @static
		 */
		public static function load_required_files() {
			if ( file_exists( WPONION_PATH . 'vendor/autoload.php' ) ) {
				require_once WPONION_PATH . 'vendor/autoload.php';
			}

			require_once WPONION_PATH . 'core/class-autoloader.php';
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
		 * Registers Field.
		 *
		 * @static
		 */
		public static function register_core_fields() {
			\wponion_register_field( 'accordion', '\WPOnion\Field\Accordion' );
			\wponion_register_field( 'background', '\WPOnion\Field\Background' );
			\wponion_register_field( 'button', '\WPOnion\Field\Button' );
			\wponion_register_field( 'checkbox', '\WPOnion\Field\Checkbox' );
			\wponion_register_field( 'color-palette', '\WPOnion\Field\Color_Palette' );
			\wponion_register_field( 'color-picker', '\WPOnion\Field\Color_Picker' );
			\wponion_register_field( 'date-picker', '\WPOnion\Field\Date_Picker' );
			\wponion_register_field( 'fieldset', '\WPOnion\Field\Fieldset' );
			\wponion_register_field( 'font-picker', '\WPOnion\Field\Font_Picker' );
			\wponion_register_field( 'gallery', '\WPOnion\Field\Gallery' );
			\wponion_register_field( 'google-maps', '\WPOnion\Field\Google_Maps' );
			\wponion_register_field( 'group', '\WPOnion\Field\Group' );
			\wponion_register_field( 'hidden', '\WPOnion\Field\Hidden' );
			\wponion_register_field( 'icon-picker', '\WPOnion\Field\Icon_Picker' );
			\wponion_register_field( 'image', '\WPOnion\Field\Image' );
			\wponion_register_field( 'image-select', '\WPOnion\Field\Image_Select' );
			\wponion_register_field( 'key-value', '\WPOnion\Field\Key_Value' );
			\wponion_register_field( 'oembed', '\WPOnion\Field\Oembed' );
			\wponion_register_field( 'radio', '\WPOnion\Field\Radio' );
			\wponion_register_field( 'select', '\WPOnion\Field\Select' );
			\wponion_register_field( 'sorter', '\WPOnion\Field\Sorter' );
			\wponion_register_field( 'switcher', '\WPOnion\Field\Switcher' );
			\wponion_register_field( 'tab', '\WPOnion\Field\Tab' );
			\wponion_register_field( 'text', '\WPOnion\Field\Text' );
			\wponion_register_field( 'textarea', '\WPOnion\Field\Textarea' );
			\wponion_register_field( 'typography', '\WPOnion\Field\Typography' );
			\wponion_register_field( 'upload', '\WPOnion\Field\Upload' );
			\wponion_register_field( 'wp-editor', '\WPOnion\Field\WP_Editor' );
			\wponion_register_field( 'wp-link', '\WPOnion\Field\WP_Link' );

			/**
			 * Registers UI Field.
			 */
			\wponion_register_ui_field( 'content', '\WPOnion\Field\content' );
			\wponion_register_ui_field( 'heading', '\WPOnion\Field\heading' );
			\wponion_register_ui_field( 'iframe', '\WPOnion\Field\iframe' );
			\wponion_register_ui_field( 'jambo-content', '\WPOnion\Field\Jambo_Content' );
			\wponion_register_ui_field( 'notice', '\WPOnion\Field\notice' );
			\wponion_register_ui_field( 'notice-danger', '\WPOnion\Field\Notice_Danger' );
			\wponion_register_ui_field( 'notice-dark', '\WPOnion\Field\Notice_Dark' );
			\wponion_register_ui_field( 'notice-info', '\WPOnion\Field\Notice_Info' );
			\wponion_register_ui_field( 'notice-light', '\WPOnion\Field\Notice_Light' );
			\wponion_register_ui_field( 'notice-primary', '\WPOnion\Field\Notice_Primary' );
			\wponion_register_ui_field( 'notice-secondary', '\WPOnion\Field\Notice_Secondary' );
			\wponion_register_ui_field( 'notice-success', '\WPOnion\Field\Notice_Success' );
			\wponion_register_ui_field( 'notice-warning', '\WPOnion\Field\Notice_Warning' );
			\wponion_register_ui_field( 'subheading', '\WPOnion\Field\Notice_Subheading' );
			\wponion_register_ui_field( 'wp-error-notice', '\WPOnion\Field\WP_Error_Notice' );
			\wponion_register_ui_field( 'wp-info-notice', '\WPOnion\Field\WP_Info_Notice' );
			\wponion_register_ui_field( 'wp-list-table', '\WPOnion\Field\WP_List_Table' );
			\wponion_register_ui_field( 'wp-notice', '\WPOnion\Field\WP_Notice' );
			\wponion_register_ui_field( 'wp-success-notice', '\WPOnion\Field\WP_Success_Notice' );
			\wponion_register_ui_field( 'wp-warning-notice', '\WPOnion\Field\WP_Warning_Notice' );

			do_action( 'wponion_core_fields_registered' );
		}
	}
}

Setup::init();
