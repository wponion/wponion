<?php

use WPOnion\Registry\Field_Error;
use WPOnion\Registry\Storage;

defined( 'ABSPATH' ) || exit;

/**
 * Registry Handlers
 */
if ( ! function_exists( 'wponion_registry' ) ) {
	/**
	 * Get the registry by type.
	 * Always return the same instance of the registry.
	 *
	 * @param string|\WPOnion\Bridge $instance
	 * @param string|bool            $id
	 *
	 * @return mixed
	 */
	function wponion_registry( $instance, $id = false ) {
		if ( is_string( $instance ) && empty( $id ) ) {
			return Storage::get( $instance );
		}

		if ( is_string( $instance ) && is_string( $id ) && Storage::has( trim( $id, '/' ) . '/' . $instance ) ) {
			return Storage::get( trim( $id, '/' ) . '/' . $instance );
		}
		return Storage::add( $instance, $id );
	}
}

/**
 * Core / Theme Registry
 */
if ( ! function_exists( 'wponion_core_registry' ) ) {
	/**
	 * Creates an static instance for core classes.
	 *
	 * @param      $instance
	 * @param null $key
	 *
	 * @return mixed
	 */
	function wponion_core_registry( $instance, $key = null ) {
		return wponion_registry( $instance, 'core/' . $key );
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
	function wponion_theme_registry( $instance ) {
		return wponion_registry( $instance, 'themes' );
	}
}

if ( ! function_exists( 'wponion_field_error_registry' ) ) {
	/**
	 * Returns an active instance of WPOnion_Localize_API.
	 *
	 * @param string $instance_id
	 *
	 * @return \WPOnion\Registry\Field_Error
	 */
	function wponion_field_error_registry( $instance_id ) {
		$instance = wponion_core_registry( $instance_id );
		return ( ! wponion_is_instance( $instance, 'field_error' ) ) ? wponion_core_registry( new Field_Error(), $instance_id ) : $instance;
	}
}

/**
 * Modules Registry
 */
if ( ! function_exists( 'wponion_widget_registry' ) ) {
	/**
	 * Creates & Returns an static instance for widgets module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Widgets\Dashboard
	 */
	function wponion_widget_registry( $instance ) {
		return wponion_registry( $instance, 'module/widget' );
	}
}

if ( ! function_exists( 'wponion_wp_pointers_registry' ) ) {
	/**
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin\Pointers
	 */
	function wponion_wp_pointers_registry( $instance ) {
		return wponion_registry( $instance, 'module/wp_pointers' );
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
	function wponion_wc_product_registry( $instance ) {
		return wponion_registry( $instance, 'module/wc_product' );
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
	function wponion_wc_settings_registry( $instance ) {
		return wponion_registry( $instance, 'module/wc_settings' );
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
	function wponion_user_profile_registry( $instance ) {
		return wponion_registry( $instance, 'module/user_profile' );
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
	function wponion_taxonomy_registry( $instance ) {
		return wponion_registry( $instance, 'module/taxonomy' );
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
	function wponion_settings_registry( $instance ) {
		return wponion_registry( $instance, 'module/settings' );
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
	function wponion_network_settings_registry( $instance ) {
		return wponion_registry( $instance, 'module/network_settings' );
	}
}

if ( ! function_exists( 'wponion_nav_menu_registry' ) ) {
	/**
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin\Nav_Menu
	 */
	function wponion_nav_menu_registry( $instance ) {
		return wponion_registry( $instance, 'module/nav_menu' );
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
	function wponion_metabox_registry( $instance ) {
		return wponion_registry( $instance, 'module/metabox' );
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
	function wponion_media_fields_registry( $instance ) {
		return wponion_registry( $instance, 'module/media_fields' );
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
	function wponion_help_tabs_registry( $instance ) {
		return wponion_registry( $instance, 'module/help_tabs' );
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
	function wponion_dashboard_widgets_registry( $instance ) {
		return wponion_registry( $instance, 'module/dashboard_widgets' );
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
	function wponion_admin_page_registry( $instance ) {
		return wponion_registry( $instance, 'module/admin_page' );
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
	function wponion_admin_columns_registry( $instance ) {
		return wponion_registry( $instance, 'module/admin_columns' );
	}
}

if ( ! function_exists( 'wponion_admin_notices_registry' ) ) {
	/**
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_admin_notices_registry( $instance ) {
		return wponion_registry( $instance, 'module/admin_notices' );
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
	function wponion_bulk_edit_registry( $instance ) {
		return wponion_registry( $instance, 'module/bulk_edit' );
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
	function wponion_quick_edit_registry( $instance ) {
		return wponion_registry( $instance, 'module/quick_edit' );
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
	function wponion_customizer_registry( $instance ) {
		return wponion_registry( $instance, 'module/customizer' );
	}
}
