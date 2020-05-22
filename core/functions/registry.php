<?php

use WPOnion\Bridge;
use WPOnion\Registry\Holder;

defined( 'ABSPATH' ) || exit;

/**
 * Registry Handlers
 */
if ( ! function_exists( 'wponion_registry' ) ) {
	/**
	 * Get the registry by type.
	 * Always return the same instance of the registry.
	 *
	 * @param string $type
	 * @param null   $class
	 *
	 * @return mixed
	 */
	function wponion_registry( $type = '', $class = null ) {
		switch ( $type ) {
			case 'module':
			case 'theme':
				$class = '\WPOnion\Registry\Modules';
				break;
			case 'core':
				$class = '\WPOnion\Registry\Core';
				break;
			case 'field':
			case 'settings_fields':
				$class = '\WPOnion\Registry\Fields';
				break;
		}
		return Holder::registry( $type, $class );
	}
}

if ( ! function_exists( 'wponion_get_registry_instance' ) ) {
	/**
	 * Adds An Instance To / Retrives An Instance.
	 *
	 * @param string $module
	 * @param        $instance
	 * @param string $registry_type
	 *
	 * @return bool
	 */
	function wponion_get_registry_instance( $module, &$instance, $registry_type = 'core' ) {
		if ( $instance instanceof Bridge ) {
			$_registry = wponion_registry( $registry_type );
			$_registry->add( $module, $instance );
		} elseif ( is_string( $instance ) ) {
			if ( 'all' === $instance ) {
				return wponion_registry( $registry_type )->get_all( $module );
			}
			return wponion_registry( $registry_type )->get( $module, $instance );
		}
		return true;
	}
}

if ( ! function_exists( 'wponion_widget_registry' ) ) {
	/**
	 * Creates & Returns an static instance for widgets module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Widgets\Dashboard
	 */
	function wponion_widget_registry( &$instance ) {
		return wponion_get_registry_instance( 'widget', $instance, 'module' );
	}
}

/**
 * Core / Theme Registry
 */
if ( ! function_exists( 'wponion_core_registry' ) ) {
	/**
	 * Creates an static instance for core classes.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_core_registry( &$instance ) {
		return wponion_get_registry_instance( 'core', $instance );
	}
}

if ( ! function_exists( 'wponion_theme_registry' ) ) {
	/**
	 * Creates An static instance for themes class.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_theme_registry( &$instance ) {
		return wponion_get_registry_instance( 'theme', $instance, 'theme' );
	}
}

/**
 * Modules Registry
 */
if ( ! function_exists( 'wponion_wp_pointers_registry' ) ) {
	/**
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin\Pointers
	 */
	function wponion_wp_pointers_registry( &$instance ) {
		return wponion_get_registry_instance( 'wp_pointers', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_wc_product_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\WooCommerce\Product
	 */
	function wponion_wc_product_registry( &$instance ) {
		return wponion_get_registry_instance( 'wc_product', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_wc_settings_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\WooCommerce\Product
	 */
	function wponion_wc_settings_registry( &$instance ) {
		return wponion_get_registry_instance( 'wc_settings', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_user_profile_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin\User_Profile
	 */
	function wponion_user_profile_registry( &$instance ) {
		return wponion_get_registry_instance( 'user_profile', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_taxonomy_registry' ) ) {
	/**
	 * Creates & Returns an static instance for metabox module.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_taxonomy_registry( &$instance ) {
		return wponion_get_registry_instance( 'taxonomy', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_settings_registry' ) ) {
	/**
	 * Creates & Returns an static instance for settings module.
	 *
	 * @param $instance
	 *
	 * @return bool|mixed|\WPOnion\Modules\Settings\Settings
	 */
	function wponion_settings_registry( &$instance ) {
		return wponion_get_registry_instance( 'settings', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_network_settings_registry' ) ) {
	/**
	 * Creates & Returns an static instance for settings module.
	 *
	 * @param $instance
	 *
	 * @return bool|mixed|\WPOnion\Modules\Settings\Settings
	 */
	function wponion_network_settings_registry( &$instance ) {
		return wponion_get_registry_instance( 'network_settings', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_nav_menu_registry' ) ) {
	/**
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin\Nav_Menu
	 */
	function wponion_nav_menu_registry( &$instance ) {
		return wponion_get_registry_instance( 'nav_menu', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_metabox_registry' ) ) {
	/**
	 * Returns Active Metabox instance.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Metabox\Metabox
	 */
	function wponion_metabox_registry( &$instance ) {
		return wponion_get_registry_instance( 'metabox', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_media_fields_registry' ) ) {
	/**
	 * Creates & Returns an static instance for widgets module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin\Media_Fields
	 */
	function wponion_media_fields_registry( &$instance ) {
		return wponion_get_registry_instance( 'media_fields', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_help_tabs_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin\Help_Tabs
	 */
	function wponion_help_tabs_registry( &$instance ) {
		return wponion_get_registry_instance( 'help_tabs', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_dashboard_widgets_registry' ) ) {
	/**
	 * Creates & Returns an static instance for dashboard widgets module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Widgets\Dashboard
	 */
	function wponion_dashboard_widgets_registry( &$instance ) {
		return wponion_get_registry_instance( 'dashboard_widgets', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_admin_page_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin\Page
	 */
	function wponion_admin_page_registry( &$instance ) {
		return wponion_get_registry_instance( 'admin_page', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_admin_columns_registry' ) ) {
	/**
	 * Creates & Returns an static instance for widgets module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin\Columns
	 */
	function wponion_admin_columns_registry( &$instance ) {
		return wponion_get_registry_instance( 'admin_columns', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_admin_notices_registry' ) ) {
	/**
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_admin_notices_registry( &$instance ) {
		return wponion_get_registry_instance( 'admin_notices', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_bulk_edit_registry' ) ) {
	/**
	 * Creates & Returns an static instance for widgets module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin\Edits\Bulk
	 */
	function wponion_bulk_edit_registry( &$instance ) {
		return wponion_get_registry_instance( 'bulk_edit', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_quick_edit_registry' ) ) {
	/**
	 * Creates & Returns an static instance for widgets module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin\Edits\Quick
	 */
	function wponion_quick_edit_registry( &$instance ) {
		return wponion_get_registry_instance( 'quick_edit', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_customizer_registry' ) ) {
	/**
	 * Returns Active customizer instance.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\customizer
	 */
	function wponion_customizer_registry( &$instance ) {
		return wponion_get_registry_instance( 'customizer', $instance, 'module' );
	}
}
