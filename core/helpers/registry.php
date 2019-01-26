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
		return \WPOnion\Registry\Holder::registry( $type, $class );
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
		if ( $instance instanceof \WPOnion\Bridge ) {
			$_registry = wponion_registry( $registry_type );
			$_registry->add( $module, $instance );
		} elseif ( is_string( $instance ) ) {
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
		return wponion_get_registry_instance( 'widget', $instance, 'settings' );
	}
}

if ( ! function_exists( 'wponion_field_builder_registry' ) ) {
	/**
	 * Returns An Active Instance.
	 *
	 * @param $instance
	 *
	 * @return \WPO\Field|bool
	 */
	function wponion_field_builder_registry( &$instance ) {
		return wponion_get_registry_instance( 'field_builder', $instance, 'settings' );
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

if ( ! function_exists( 'wponion_field_types' ) ) {
	/**
	 * @return string|\WPOnion\Registry\Field_Types
	 */
	function wponion_field_types() {
		return '\WPOnion\Registry\Field_Types';
	}
}
