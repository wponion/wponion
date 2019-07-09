<?php

namespace WPOnion;

use Exception;
use Varunsridharan\PHP\Autoloader;
use WPOnion\Integrations\Page_Builders\Elementor;
use function wponion_admin_notices;
use function wponion_register_field;
use function wponion_register_ui_field;

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
		 * Stores Vendor Related Libs Inside WPOnion.
		 *
		 * @var array
		 * @access
		 * @static
		 */
		private static $vendor_libs = array();

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
		 * @static
		 */
		public static function init() {
			self::setup_remaps();
			self::$vendor_libs = array( 'Parsedown' => wponion()->path( 'core/vendors/erusev/parsedown.php' ) );
			add_action( 'wponion_loaded', array( __CLASS__, 'on_wponion_loaded' ), -1 );
			self::load_required_files();
		}

		/**
		 * @static
		 */
		public static function load_required_files() {
			if ( file_exists( wponion()->path( 'vendor/autoload.php' ) ) ) {
				require_once wponion()->path( 'vendor/autoload.php' );
			}

			self::init_autoloader();

			require_once wponion()->path( 'core/helpers/base.php' );
			require_once wponion()->path( 'core/class-themes.php' );
			require_once wponion()->path( 'core/class-assets.php' );
			require_once wponion()->path( 'core/class-shortcodes.php' );
			require_once wponion()->path( 'core/class-core-ajax.php' );

			do_action( 'wponion_core_loaded' );

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
			wponion_admin_notices();

			if ( is_admin() && file_exists( WP_CONTENT_DIR . '/plugins/wponion/wponion.php' ) ) {
				wponion_plugin_links( WPONION_FILE )
					->action_link( 'docs', '<a href="https://docs.wponion.com">' . __( 'Documentation', 'wponion' ) . '</a>' )
					->action_link( 'demo', __( 'Demo', 'wponion' ), 'https://wponion.com/demo' )
					->row_link( __( 'Support', 'wponion' ), 'https://github.com/wponion' )
					->row_link( __( 'Homepage', 'wponion' ), 'https://wponion.com' )
					->row_link( __( 'Rate the plugin ★★★★★', 'wponion' ), 'https://wordpress.org/support/plugin/wponion/reviews/#new-post' );
			}

			self::register_core_fields();

			do_action( 'wponion_integrations_before_loaded' );
			if ( wp_is_plugin_active( 'elementor/elementor.php' ) ) {
				if ( is_version_gte( 'php', '7.0' ) ) {
					Elementor::init();
				} else {
					wponion_error_admin_notice( __( 'WPOnion Elementor Integration Requires PHP Version 7.0 or Greater' ) );
				}
			}
			do_action( 'wponion_integrations_loaded' );

			do_action( 'wponion_init' );
		}

		/**
		 * Inits Autoloader.
		 *
		 * @static
		 */
		public static function init_autoloader() {
			try {
				spl_autoload_register( array( __CLASS__, 'vendor_loader' ) );
			} catch ( Exception $exception ) {
				foreach ( self::$vendor_libs as $class ) {
					include $class;
				}
			}

			self::$field_autoloader = new Autoloader( 'WPOnion\Field', wponion()->path( 'fields/' ), array( 'prepend' => true ) );

			self::$module_fields_autoloader = new Autoloader( 'WPOnion\Module_Fields', wponion()->path( 'module-fields/' ), array( 'prepend' => true ) );

			self::$core_autoloader = new Autoloader( 'WPOnion', wponion()->path( 'core/' ), array(
				'exclude' => array( 'WPOnion\Field', 'WPOnion\Module_Fields' ),
			) );

			self::$builder_autoloader = new Autoloader( 'WPO', wponion()->path( 'builder/' ), array(
				'exclude' => array( 'WPOnion' ),
				'prepend' => true,
			) );

			self::$core_autoloader->map( 'WPOnion\Bridge', wponion()->path( 'core/abstract/class-bridge.php' ) );
			self::$core_autoloader->map( 'WPOnion\Bridge\Module', wponion()->path( 'core/abstract/class-module.php' ) );
			self::$core_autoloader->map( 'WPOnion\Bridge\Module_DB_Cache', wponion()->path( 'core/abstract/class-module-db-cache.php' ) );
			self::$core_autoloader->map( 'WPOnion\Bridge\Module_DB', wponion()->path( 'core/abstract/class-module-db.php' ) );
			self::$core_autoloader->map( 'WPOnion\Bridge\Ajax', wponion()->path( 'core/abstract/class-ajax.php' ) );
			self::$core_autoloader->map( 'WPOnion\Theme_API', wponion()->path( 'core/abstract/class-theme-api.php' ) );
			self::$core_autoloader->map( 'WPOnion\Addon', wponion()->path( 'core/abstract/class-addon.php' ) );
			self::$core_autoloader->map( 'WPOnion\Addon_Field', wponion()->path( 'core/abstract/class-addon-field.php' ) );

			//Remap Field & Field Cloner.
			self::$field_autoloader->map( 'WPOnion\Field', wponion()->path( 'core/abstract/class-field.php' ) );
		}

		/**
		 * Loads Vendor Files.
		 *
		 * @param $class
		 *
		 * @static
		 */
		public static function vendor_loader( $class ) {
			if ( isset( self::$vendor_libs[ $class ] ) ) {
				include_once self::$vendor_libs[ $class ];
			}
		}

		/**
		 * Registers Field.
		 *
		 * @static
		 */
		public static function register_core_fields() {
			wponion_register_field( 'clone', 'all' );
			wponion_register_field( 'accordion', 'all' );
			wponion_register_field( 'background', 'all' );
			wponion_register_field( 'button', 'all' );
			wponion_register_field( 'checkbox', 'all' );
			wponion_register_field( 'color_picker', 'all' );
			wponion_register_field( 'date_picker', 'all' );
			wponion_register_field( 'time_picker', 'all' );
			wponion_register_field( 'fieldset', 'all' );
			wponion_register_field( 'font_picker', 'all' );
			wponion_register_field( 'gallery', 'all' );
			wponion_register_field( 'group', 'all' );
			wponion_register_field( 'hidden', 'all' );
			wponion_register_field( 'icon_picker', 'all' );
			wponion_register_field( 'image', 'all' );
			wponion_register_field( 'image_select', 'all' );
			wponion_register_field( 'key_value', 'all' );
			wponion_register_field( 'oembed', 'all' );
			wponion_register_field( 'radio', 'all' );
			wponion_register_field( 'select', 'all' );
			wponion_register_field( 'sorter', 'all' );
			wponion_register_field( 'switcher', 'all' );
			wponion_register_field( 'tab', 'all' );
			wponion_register_field( 'text', 'all' );
			wponion_register_field( 'textarea', 'all' );
			wponion_register_field( 'typography', 'all' );
			wponion_register_field( 'upload', 'all' );
			wponion_register_field( 'wp_editor', 'all' );
			wponion_register_field( 'wp_link', 'all' );
			wponion_register_field( 'color_group', 'all' );
			wponion_register_field( 'link_color', 'all' );
			wponion_register_field( 'input_group', 'all' );
			wponion_register_field( 'spacing', 'all' );
			wponion_register_field( 'dimensions', 'all' );
			wponion_register_field( 'button_set', 'all' );
			wponion_register_field( 'metabox', 'all' );
			wponion_register_field( 'modal', 'all' );
			wponion_register_field( 'spinner', 'all' );
			wponion_register_field( 'range_slider', 'all' );
			wponion_register_field( 'code_editor', 'all' );
			wponion_register_field( 'wp_list_table', 'all' );

			/**
			 * Registers UI Field.
			 */
			wponion_register_ui_field( 'divider', 'all' );
			wponion_register_ui_field( 'content', 'all' );
			wponion_register_ui_field( 'heading', 'all' );
			wponion_register_ui_field( 'iframe', 'all' );
			wponion_register_ui_field( 'jambo_content', 'all' );
			wponion_register_ui_field( 'notice', 'all' );
			wponion_register_ui_field( 'subheading', 'all' );
			wponion_register_ui_field( 'wp_notice', 'all' );
			wponion_register_ui_field( 'faq', 'all' );
			wponion_register_ui_field( 'import_export', 'all' );
			wponion_register_ui_field( 'options_object', 'all' );

			/**
			 * Field Alias
			 */

			/* Content Field Alias */
			wponion_register_ui_field( 'content_markdown', 'all' );
			wponion_register_ui_field( 'markdown', 'all' );

			/* WP Notice Fiedl Alias */
			wponion_register_ui_field( 'wp_notice_success', 'all' );
			wponion_register_ui_field( 'wp_notice_warning', 'all' );
			wponion_register_ui_field( 'wp_notice_error', 'all' );
			wponion_register_ui_field( 'wp_notice_info', 'all' );

			/* Notice Field Alias */
			wponion_register_ui_field( 'notice_danger', 'all' );
			wponion_register_ui_field( 'notice_dark', 'all' );
			wponion_register_ui_field( 'notice_info', 'all' );
			wponion_register_ui_field( 'notice_light', 'all' );
			wponion_register_ui_field( 'notice_primary', 'all' );
			wponion_register_ui_field( 'notice_secondary', 'all' );
			wponion_register_ui_field( 'notice_success', 'all' );
			wponion_register_ui_field( 'notice_warning', 'all' );

			do_action( 'wponion_core_fields_registered' );
		}

		/**
		 * Setups Remaps.
		 *
		 * @static
		 */
		private static function setup_remaps() {
			$notice              = '\WPO\Fields\Notice';
			$wpnotice            = '\WPO\Fields\WP_Notice';
			$customizer_checkbox = '\WPOnion\Module_Fields\Customizer\Checkbox';
			/* WPO Builder Remaps */
			self::$remaps['\WPO\Fields\notice_danger']     = $notice;
			self::$remaps['\WPO\Fields\notice_dark']       = $notice;
			self::$remaps['\WPO\Fields\notice_light']      = $notice;
			self::$remaps['\WPO\Fields\notice_primary']    = $notice;
			self::$remaps['\WPO\Fields\notice_info']       = $notice;
			self::$remaps['\WPO\Fields\notice_secondary']  = $notice;
			self::$remaps['\WPO\Fields\notice_success']    = $notice;
			self::$remaps['\WPO\Fields\notice_warning']    = $notice;
			self::$remaps['\WPO\Fields\WP_Notice_Error']   = $wpnotice;
			self::$remaps['\WPO\Fields\WP_Notice_Warning'] = $wpnotice;
			self::$remaps['\WPO\Fields\WP_Notice_Success'] = $wpnotice;
			self::$remaps['\WPO\Fields\WP_Notice_Info']    = $wpnotice;
			self::$remaps['\WPO\Fields\Markdown']          = '\WPO\Fields\Content';
			self::$remaps['\WPO\Fields\content_markdown']  = '\WPO\Fields\Content';
			self::$remaps['\WPO\Fields\Time_Picker']       = '\WPO\Fields\Date_Picker';

			/* Customizer Module Fields. */
			self::$remaps['\WPOnion\Module_Fields\Customizer\radio']        = $customizer_checkbox;
			self::$remaps['\WPOnion\Module_Fields\Customizer\input_group']  = $customizer_checkbox;
			self::$remaps['\WPOnion\Module_Fields\Customizer\fieldset']     = $customizer_checkbox;
			self::$remaps['\WPOnion\Module_Fields\Customizer\accordion']    = $customizer_checkbox;
			self::$remaps['\WPOnion\Module_Fields\Customizer\group']        = $customizer_checkbox;
			self::$remaps['\WPOnion\Module_Fields\Customizer\color_picker'] = '\WPOnion\Module_Fields\Customizer\Button_Set';
			self::$remaps['\WPOnion\Module_Fields\Customizer\image_select'] = '\WPOnion\Module_Fields\Customizer\Button_Set';

			/* WP Notice Remaps. */
			self::$remaps['\WPOnion\Field\wp_notice_success'] = '\WPOnion\Field\WP_Notice';
			self::$remaps['\WPOnion\Field\wp_notice_warning'] = '\WPOnion\Field\WP_Notice';
			self::$remaps['\WPOnion\Field\wp_notice_error']   = '\WPOnion\Field\WP_Notice';
			self::$remaps['\WPOnion\Field\wp_notice_info']    = '\WPOnion\Field\WP_Notice';

			/* General Notice. */
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
