<?php

use WPOnion\Bridge;
use WPOnion\DB\Query;
use WPOnion\Registry\Holder;

defined( 'ABSPATH' ) || exit;

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
	 * @return bool
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

if ( ! function_exists( 'wponion_query_module' ) ) {
	/**
	 * WPOnion Query Module's Info.
	 * This function checks and returns proper class name.
	 *
	 * @param string $request_type Set true to return all modules name or set alias to return all alias details
	 *
	 * @return string|bool
	 *
	 * @since 1.4.5.4
	 */
	function wponion_query_module( $request_type ) {
		$alias   = apply_filters( 'wponion_query_modules_alias', array(
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
		$modules = apply_filters( 'wponion_query_modules', array(
			'post'            => '\WPOnion\DB\Query_Types\Custom_Post_Types',
			'taxonomies'      => '\WPOnion\DB\Query_Types\Taxonomies',
			'users'           => '\WPOnion\DB\Query_Types\Users',
			'menus'           => '\WPOnion\DB\Query_Types\Menus',
			'post_types'      => '\WPOnion\DB\Query_Types\Post_Types',
			'image_sizes'     => '\WPOnion\DB\Query_Types\Image_Sizes',
			'user_roles'      => '\WPOnion\DB\Query_Types\User_Roles',
			'capabilities'    => '\WPOnion\DB\Query_Types\Capabilities',
			'menu_location'   => '\WPOnion\DB\Query_Types\Menu_Location',
			'currency'        => '\WPOnion\DB\Query_Types\Currency',
			'currency_symbol' => '\WPOnion\DB\Query_Types\Currency_Symbol',
			'layouts'         => '\WPOnion\DB\Query_Types\Layouts',
			'sidebars'        => '\WPOnion\DB\Query_Types\Sidebars',
			'wc_products'     => '\WPOnion\DB\Query_Types\WC_Products',
			'wc_customers'    => '\WPOnion\DB\Query_Types\WC_Customers',
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
