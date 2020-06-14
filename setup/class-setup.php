<?php

namespace WPOnion;

defined( 'ABSPATH' ) || exit;

use Exception;
use Varunsridharan\PHP\Autoloader;
use WPOnion\Deprecation\Actions;
use WPOnion\Deprecation\Filters;
use WPOnion\Integrations\Page_Builders\Elementor;


if ( ! class_exists( '\WPOnion\Setup' ) ) {
	/**
	 * Class Setup
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	final class Setup extends Addons {
		/**
		 * Stores Vendor Related Libs Inside WPOnion.
		 *
		 * @var array
		 */
		private static $vendor_libs = array();

		/**
		 * Stores Remaps Class.
		 *
		 * @var array
		 */
		private static $remaps = array();

		/**
		 * @uses on_wponion_loaded
		 */
		public static function init() {
			self::$vendor_libs = array(
				'Parsedown' => wponion()->path( 'includes/libraries/parsedown.php' ),
			);

			add_action( 'wponion/loaded', array( __CLASS__, 'on_wponion_loaded' ), -99999 );

			self::load_composer_vendor();
			self::init_autoloader();
			self::load_deprecated_handlers();
			self::load_required_files();
		}

		/**
		 * Loads Vendor Folder if prepacked.
		 *
		 * @since 1.5
		 */
		protected static function load_composer_vendor() {
			if ( file_exists( wponion()->path( 'vendor/autoload.php' ) ) ) {
				require_once wponion()->path( 'vendor/autoload.php' );
			}
		}

		/**
		 * Load Deprecated Handlers For
		 * 1. Filters
		 * 2. Actions
		 * 3. Functions
		 * 4. Function Arguments.
		 * 5. Files.
		 *
		 * @since 1.5
		 */
		protected static function load_deprecated_handlers() {
			require wponion()->path( 'core/deprecation/functions.php' );
			require wponion()->path( 'core/deprecation/deprecated-functions.php' );
			Actions::instance();
			Filters::instance();
		}

		/**
		 *
		 */
		public static function load_required_files() {
			require_once wponion()->path( 'core/functions/index.php' );
			require_once wponion()->path( 'core/class-themes.php' );
			require_once wponion()->path( 'core/class-assets.php' );
			require_once wponion()->path( 'core/class-shortcodes.php' );
			require_once wponion()->path( 'core/class-core-ajax.php' );

			do_action( 'wponion/core/loaded' );

			do_action( 'wponion/addon/before/load' );

			self::load_addons();

			do_action( 'wponion/addon/after/loaded' );

			do_action( 'wponion/loaded' );
		}

		/**
		 * @hook wponion_init
		 */
		public static function on_wponion_loaded() {
			self::setup_remaps();

			if ( is_admin() || wponion_is_ajax() ) {
				wponion_admin_notices();
			}

			if ( defined( 'WPONION_PLUGIN_FILE' ) && is_admin() && wp_is_plugin_active( WPONION_PLUGIN_FILE ) ) {
				wponion_plugin_links( WPONION_PLUGIN_FILE )
					->row_link( '<a href="https://docs.wponion.com">' . __( '📚 Documentation', 'wponion' ) . '</a>' )
					->row_link( __( '🔍 Demo', 'wponion' ), 'https://wponion.com/demo' )
					->row_link( __( '💬 Slack Community', 'wponion' ), 'https://wordpress.org/support/plugin/wponion/reviews/#new-post' );
			}

			self::register_core_fields();

			do_action( 'wponion/integrations/before/load' );

			if ( wp_is_plugin_active( 'elementor/elementor.php' ) ) {
				if ( is_version_gte( 'php', '7.0' ) ) {
					Elementor::init();
				} else {
					wponion_error_admin_notice( __( 'WPOnion Elementor Integration Requires PHP Version 7.0 or Greater', 'wponion' ) );
				}
			}

			do_action( 'wponion/integrations/after/loaded' );

			do_action( 'wponion/init' );
		}

		/**
		 * Inits Autoloader.
		 */
		public static function init_autoloader() {
			$classmap = wponion()->path( 'wponion-classmaps.php' );
			try {
				spl_autoload_register( array( __CLASS__, 'vendor_loader' ) );
			} catch ( Exception $exception ) {
				foreach ( self::$vendor_libs as $class ) {
					include $class;
				}
			}

			new Autoloader( 'WPOnion\Theme\\', wponion()->path( 'includes/' ), array(
				'classmap' => $classmap,
			) );

			new Autoloader( 'WPOnion\Field\\', wponion()->path( 'includes/' ), array(
				'classmap' => $classmap,
			) );

			new Autoloader( 'WPOnion\Module_Fields\\', wponion()->path( 'includes/' ), array(
				'classmap' => $classmap,
			) );

			new Autoloader( 'WPOnion\libraries\\', wponion()->path( 'includes/' ), array(
				'classmap' => $classmap,
			) );

			new Autoloader( 'WPOnion\Integrations\\', wponion()->path( 'includes/' ), array(
				'classmap' => $classmap,
			) );

			new Autoloader( 'WPOnion\\', wponion()->path( 'core/' ), array(
				'classmap' => $classmap,
				'exclude'  => array( 'WPOnion\Field\\', 'WPOnion\Module_Fields\\', 'WPOnion\libraries\\', 'WPO\\' ),
			) );

			new Autoloader( 'WPO\\', wponion()->path( 'includes/' ), array(
				'classmap' => $classmap,
				'exclude'  => array( 'WPOnion\\' ),
				'prepend'  => false,
			) );
		}

		/**
		 * Loads Vendor Files.
		 *
		 * @param $class
		 */
		public static function vendor_loader( $class ) {
			if ( isset( self::$vendor_libs[ $class ] ) ) {
				include_once self::$vendor_libs[ $class ];
			}
		}

		/**
		 * Registers Field.
		 */
		public static function register_core_fields() {
			wponion_register_field( 'clone', 'all' );
			wponion_register_field( 'accordion', 'all' );
			wponion_register_field( 'background', 'all' );
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
			wponion_register_field( 'spinner', 'all' );
			wponion_register_field( 'range_slider', 'all' );
			wponion_register_field( 'code_editor', 'all' );
			wponion_register_field( 'visual_editor', 'all' );
			wponion_register_field( 'visual_button_editor', 'all' );
			wponion_register_field( 'css_shadow', 'all' );
			wponion_register_field( 'number', 'all' );
			wponion_register_field( 'css_unit', 'all' );

			// Registers UI Field.
			wponion_register_ui_field( 'divider', 'all' );
			wponion_register_ui_field( 'button', 'all' );
			wponion_register_ui_field( 'content', 'all' );
			wponion_register_ui_field( 'wp_list_table', 'all' );
			wponion_register_ui_field( 'modal', 'all' );
			wponion_register_ui_field( 'heading', 'all' );
			wponion_register_ui_field( 'iframe', 'all' );
			wponion_register_ui_field( 'jambo_content', 'all' );
			wponion_register_ui_field( 'notice', 'all' );
			wponion_register_ui_field( 'subheading', 'all' );
			wponion_register_ui_field( 'wp_notice', 'all' );
			wponion_register_ui_field( 'faq', 'all' );
			wponion_register_ui_field( 'import_export', 'all' );
			wponion_register_ui_field( 'options_object', 'all' );

			/** Field Alias **/

			// Content Field Alias
			wponion_register_ui_field( 'content_markdown', 'all' );
			wponion_register_ui_field( 'markdown', 'all' );

			// WP Notice Fiedl Alias
			wponion_register_ui_field( 'wp_notice_success', 'all' );
			wponion_register_ui_field( 'wp_notice_warning', 'all' );
			wponion_register_ui_field( 'wp_notice_error', 'all' );
			wponion_register_ui_field( 'wp_notice_info', 'all' );

			// Notice Field Alias
			wponion_register_ui_field( 'notice_danger', 'all' );
			wponion_register_ui_field( 'notice_dark', 'all' );
			wponion_register_ui_field( 'notice_info', 'all' );
			wponion_register_ui_field( 'notice_light', 'all' );
			wponion_register_ui_field( 'notice_primary', 'all' );
			wponion_register_ui_field( 'notice_secondary', 'all' );
			wponion_register_ui_field( 'notice_success', 'all' );
			wponion_register_ui_field( 'notice_warning', 'all' );

			do_action( 'wponion/core/fields/registered' );
		}

		/**
		 * Setups Remaps.
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

			self::$remaps = apply_filters( 'wponion/field_class/alias', self::$remaps );

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
		 * @return bool|mixed
		 */
		public static function remap( $class, $default = false ) {
			return ( isset( self::$remaps[ strtolower( $class ) ] ) ) ? self::$remaps[ strtolower( $class ) ] : $default;
		}
	}
}

Setup::init();
