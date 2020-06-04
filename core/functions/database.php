<?php

use WPOnion\Registry\Options;
use WPOnion\DB\Query;
use WPOnion\DB\WP_DB;

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_module_db_type' ) ) {
	/**
	 * Converts Module Type into save type.
	 *
	 * @param $module
	 *
	 * @return mixed|void
	 * @since 1.5
	 */
	function wponion_module_db_type( $module ) {
		$return = 'options';
		switch ( $module ) {
			case 'dashboard_widgets':
				$return = ( wponion_is_network( true ) ) ? 'network_options' : 'options';
				break;
			case 'settings':
			case 'wc_settings':
				$return = 'options';
				break;
			case 'network_settings':
			case 'network_dashboard_widgets':
				$return = 'network_options';
				break;
			case 'post_meta':
			case 'wc_product':
			case 'metabox':
			case 'nav_menu':
			case 'media_fields':
				$return = 'post';
				break;
			case 'taxonomy':
			case 'term':
				$return = 'term';
				break;
			case 'user_profile':
				$return = 'user';
				break;
		}
		return apply_filters( 'wponion/module_db_type', $return, $module );
	}
}

if ( ! function_exists( 'wponion_query_module' ) ) {
	/**
	 * WPOnion Query Module's Info.
	 * This function checks and returns proper class name.
	 *
	 * @param string $request_type Set true to return all modules name or set alias to return all alias details
	 *
	 * @return string|bool
	 *
	 * @since 1.4.6
	 */
	function wponion_query_module( $request_type ) {
		$class   = '\WPOnion\DB\Query_Types\\';
		$alias   = apply_filters( 'wponion/query/modules/alias', array(
			'post'       => array( 'posts', 'pages', 'page' ),
			'taxonomies' => array( 'categories', 'category', 'tag', 'tags', 'term', 'terms', 'taxonomy' ),
			'layouts'    => array(
				'body_layouts',
				'body_layout',
				'header_layout',
				'header_layouts',
				'sidebar_layout',
				'sidebar_layouts',
			),
		) );
		$modules = apply_filters( 'wponion/query/modules', array(
			'post'            => $class . 'Custom_Post_Types',
			'taxonomies'      => $class . 'Taxonomies',
			'users'           => $class . 'Users',
			'menus'           => $class . 'Menus',
			'post_types'      => $class . 'Post_Types',
			'image_sizes'     => $class . 'Image_Sizes',
			'user_roles'      => $class . 'User_Roles',
			'capabilities'    => $class . 'Capabilities',
			'menu_location'   => $class . 'Menu_Location',
			'currency'        => $class . 'Currency',
			'currency_symbol' => $class . 'Currency_Symbol',
			'layouts'         => $class . 'Layouts',
			'sidebars'        => $class . 'Sidebars',
			'wc_products'     => $class . 'WC_Products',
			'wc_customers'    => $class . 'WC_Customers',
		) );

		if ( 'alias' === $request_type ) {
			return $alias;
		}

		if ( true === $request_type ) {
			return $modules;
		}

		foreach ( $alias as $id => $clone ) {
			if ( in_array( $request_type, $clone ) ) {
				$request_type = $id;
				break;
			}
		}

		return ( isset( $modules[ $request_type ] ) ) ? $modules[ $request_type ] : false;
	}
}

if ( ! function_exists( 'wponion_query' ) ) {
	/**
	 * Returns a static instance of \WPOnion\DB\Query
	 *
	 * @param string $unique
	 * @param string $module
	 *
	 * @return \WPOnion\DB\Query|mixed
	 */
	function wponion_query( $unique = null, $module = null ) {
		return new Query( $unique, $module );
	}
}

if ( ! function_exists( 'wponion_wp_db' ) ) {
	/**
	 * Returns an active instance of WPOnion_Localize_API.
	 *
	 * @return bool|\WPOnion\DB\WP_DB
	 */
	function wponion_wp_db() {
		$instance = wponion_core_registry( 'wpdb-api' );
		return ( ! wponion_is_instance( $instance, 'wpdb' ) ) ? wponion_core_registry( new WP_DB(), 'wpdb-api' ) : $instance;
	}
}

/**
 * Site's Option Updater.
 */
if ( ! function_exists( 'wponion_update_option' ) ) {
	/**
	 * Custom Wrapper For update_option & update_site_option.
	 *
	 * @param string $option
	 * @param mixed  $value
	 * @param bool   $autoload
	 * @param bool   $force_local
	 *
	 * @return bool
	 */
	function wponion_update_option( $option, $value, $autoload = false, $force_local = false ) {
		return ( is_network_admin() && is_multisite() && false === $force_local ) ? update_site_option( $option, $value ) : update_option( $option, $value, $autoload );
	}
}

if ( ! function_exists( 'wponion_get_option' ) ) {
	/**
	 * Custom Wrapper for get_option / get_site_option.
	 *
	 * @param string     $option_name
	 * @param bool|mixed $default
	 * @param bool       $force_local
	 *
	 * @return mixed
	 */
	function wponion_get_option( $option_name, $default = false, $force_local = false ) {
		return ( is_multisite() && is_network_admin() && false === $force_local ) ? get_site_option( $option_name, $default ) : get_option( $option_name, $default );
	}
}

/**
 * Taxonomy Module
 */
if ( ! function_exists( 'wponion_get_term_meta' ) ) {
	/**
	 * Returns Terms Meta Info.
	 *
	 * @param string $term_id
	 * @param string $unique
	 *
	 * @return mixed
	 */
	function wponion_get_term_meta( $term_id = '', $unique = '' ) {
		return ( function_exists( 'get_term_meta' ) ) ? get_term_meta( $term_id, $unique, true ) : get_option( 'wponion_' . wponion_hash_string( $term_id . '_' . $unique ), true );
	}
}

if ( ! function_exists( 'wponion_update_term_meta' ) ) {
	/**
	 * Updates Term Meta.
	 *
	 * @param string $term_id
	 * @param string $unique
	 * @param array  $values
	 *
	 * @return bool|int|\WP_Error
	 */
	function wponion_update_term_meta( $term_id = '', $unique = '', $values = array() ) {
		return ( function_exists( 'update_term_meta' ) ) ? update_term_meta( $term_id, $unique, $values ) : update_option( 'wponion_' . wponion_hash_string( $term_id . '_' . $unique ), $values );
	}
}

if ( ! function_exists( 'wponion_delete_term_meta' ) ) {
	/**
	 * Deletes a Term Meta.
	 *
	 * @param string $term_id
	 * @param string $unique
	 *
	 * @return bool
	 */
	function wponion_delete_term_meta( $term_id = '', $unique = '' ) {
		return ( function_exists( 'delete_term_meta' ) ) ? delete_term_meta( $term_id, $unique ) : delete_option( 'wponion_' . wponion_hash_string( $term_id . '_' . $unique ) );
	}
}

/**
 * Options Handler
 * Simple Functions used to fetch values from DB
 */

if ( ! function_exists( 'wpo_settings' ) ) {
	/**
	 * Fetches Saved WPOnion Settings.
	 *
	 * @param string      $unique
	 * @param string|bool $key
	 * @param bool|mixed  $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_settings( $unique, $key = false, $default = false ) {
		return Options::settings( $unique, $key, $default );
	}
}

if ( ! function_exists( 'wpo_network_settings' ) ) {
	/**
	 * Fetches Saved WPOnion Settings.
	 *
	 * @param string      $unique
	 * @param string|bool $key
	 * @param mixed       $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_network_settings( $unique, $key = false, $default = false ) {
		return Options::network_settings( $unique, $key, $default );
	}
}

if ( ! function_exists( 'wpo_post_meta' ) ) {
	/**
	 * Fetches Saved WPOnion Settings.
	 *
	 * @param string          $unique
	 * @param string|int|bool $post_id
	 * @param bool|string     $key
	 * @param mixed           $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_post_meta( $unique, $post_id = false, $key = false, $default = false ) {
		return Options::post_meta( $unique, $post_id, $key, $default );
	}
}

if ( ! function_exists( 'wpo_user_meta' ) ) {
	/**
	 * Fetches Saved WPOnion Settings.
	 *
	 * @param string          $unique
	 * @param string|int|bool $user_id
	 * @param bool|string     $key
	 * @param mixed           $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_user_meta( $unique, $user_id = false, $key = false, $default = false ) {
		return Options::user_meta( $unique, $user_id, $key, $default );
	}
}

if ( ! function_exists( 'wpo_term_meta' ) ) {
	/**
	 * Fetches Saved WPOnion Settings.
	 *
	 * @param string          $unique
	 * @param string|int|bool $term_id
	 * @param bool|string     $key
	 * @param mixed           $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_term_meta( $unique, $term_id = false, $key = false, $default = false ) {
		return Options::term_meta( $unique, $term_id, $key, $default );
	}
}
