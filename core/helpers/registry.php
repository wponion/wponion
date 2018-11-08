<?php
/**
 *
 * Initial version created 08-05-2018 / 06:15 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
if ( ! defined( 'ABSPATH' ) ) {
	die;
}


if ( ! function_exists( 'wponion_get_registry' ) ) {
	/**
	 * Get the registry by type.
	 * Always return the same instance of the registry.
	 *
	 * @param string $type
	 * @param string $class
	 *
	 * @return mixed
	 */
	function wponion_get_registry( $type = '', $class = '' ) {
		static $data = array();

		if ( ! isset( $data[ $type ] ) ) {
			$data[ $type ] = new $class;
		}
		return $data[ $type ];
	}
}

if ( ! function_exists( 'wponion_registry' ) ) {
	/**
	 * Get the registry by type.
	 * Always return the same instance of the registry.
	 *
	 * @param string $type
	 * @param null   $class
	 *
	 * @return $class
	 */

	function wponion_registry( $type = '', $class = null ) {
		switch ( $type ) {
			case 'settings':
			case 'modules':
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
		return wponion_get_registry( $type, $class );
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
	function wponion_get_registry_instance( $module = 'settings', &$instance, $registry_type = 'core' ) {
		if ( $instance instanceof \WPOnion\Bridge ) {
			$_registry = wponion_registry( $registry_type );
			$_registry->add( $module, $instance );
		} elseif ( is_string( $instance ) ) {
			return wponion_registry( $registry_type )->get( $module, $instance );
		}
		return true;
	}
}

if ( ! function_exists( 'wponion_settings_registry' ) ) {
	/**
	 * Creates & Returns an static instance for settings module.
	 *
	 * @param $instance
	 *
	 * @return bool|mixed
	 */
	function wponion_settings_registry( &$instance ) {
		return wponion_get_registry_instance( 'settings', $instance, 'settings' );
	}
}

if ( ! function_exists( 'wponion_metabox_registry' ) ) {
	/**
	 * Creates & Returns an static instance for metabox module.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_metabox_registry( &$instance ) {
		return wponion_get_registry_instance( 'metabox', $instance, 'settings' );
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
		return wponion_get_registry_instance( 'taxonomy', $instance, 'settings' );
	}
}

if ( ! function_exists( 'wponion_user_profile_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_user_profile_registry( &$instance ) {
		return wponion_get_registry_instance( 'user_profile', $instance, 'settings' );
	}
}

if ( ! function_exists( 'wponion_screen_options_registry' ) ) {
	/**
	 * Creates & Returns an static Instance for screen options module.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_screen_options_registry( &$instance ) {
		return wponion_get_registry_instance( 'screen_options', $instance, 'settings' );
	}
}

if ( ! function_exists( 'wponion_woocommerce_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_woocommerce_registry( &$instance ) {
		return wponion_get_registry_instance( 'woocommerce', $instance, 'settings' );
	}
}

if ( ! function_exists( 'wponion_help_tabs_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_help_tabs_registry( &$instance ) {
		return wponion_get_registry_instance( 'help_tabs', $instance, 'settings' );
	}
}

if ( ! function_exists( 'wponion_admin_page_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_admin_page_registry( &$instance ) {
		return wponion_get_registry_instance( 'admin_page', $instance, 'settings' );
	}
}

if ( ! function_exists( 'wponion_help_tabs_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_help_tabs_registry( &$instance ) {
		return wponion_get_registry_instance( 'help_tabs', $instance, 'settings' );
	}
}

if ( ! function_exists( 'wponion_value_registry' ) ) {
	/**
	 * Creates & Returns an static instance for module's value API.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_value_registry( &$instance ) {
		return wponion_get_registry_instance( 'module_values', $instance, 'settings' );
	}
}

if ( ! function_exists( 'wponion_dashboard_registry' ) ) {
	/**
	 * Creates & Returns an static instance for dashboard widgets module.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_dashboard_registry( &$instance ) {
		return wponion_get_registry_instance( 'dashboard_widgets', $instance, 'settings' );
	}
}

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

if ( ! function_exists( 'wponion_async' ) ) {
	/**
	 * Creates an instance of Async_Request
	 *
	 * @return bool|\WPOnion\Async_Request
	 */
	function wponion_async() {
		static $instance = false;

		if ( false === $instance ) {
			$instance = new WPOnion\Async_Request();
		}
		return $instance;
	}
}

if ( ! function_exists( 'wponion_query' ) ) {
	/**
	 * Returns a static instance of \WPOnion\DB\Query
	 *
	 * @return \WPOnion\DB\Query|mixed
	 */
	function wponion_query() {
		$class     = 'WPOnion\DB\Query';
		$_instance = wponion_core_registry( $class );
		if ( false === $_instance ) {
			$_instance = new $class();
			wponion_core_registry( $_instance );
		}
		return $_instance;
	}
}
