<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}


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
		if ( is_network_admin() && is_multisite() && false === $force_local ) {
			return update_site_option( $option, $value );
		} else {
			return update_option( $option, $value, $autoload );
		}
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
		if ( is_multisite() && is_network_admin() && false === $force_local ) {
			return get_site_option( $option_name, $default );
		}
		return get_option( $option_name, $default );
	}
}

if ( ! function_exists( 'wponion_get_set_db' ) ) {
	/**
	 * @param string     $module_db Which module to work
	 * @param string     $unique DB Unique Slug.
	 * @param string|int $id Post / User / Term ID
	 * @param bool|mixed $values
	 * @param string     $mode --> Get / False
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wponion_get_set_db( $module_db, $unique, $id, $values = false, $mode = 'get' ) {
		$return = null;

		switch ( $module_db ) {
			case 'dashboard_widget':
				$return = ( 'get' === $mode ) ? wponion_get_option( $unique ) : wponion_update_option( $unique, $values );
				break;
			case 'settings':
			case 'wc_settings':
				$return = ( 'get' === $mode ) ? wpo_settings( $unique ) : update_option( $unique, $values );
				break;
			case 'network_settings':
				$return = ( 'get' === $mode ) ? wpo_network_settings( $unique ) : update_site_option( $unique, $values );
				break;
			case 'post_meta':
			case 'wc_product':
			case 'metabox':
			case 'nav_menu':
			case 'media_fields':
				$return = ( 'get' === $mode ) ? wpo_post_meta( $id, $unique ) : update_post_meta( $id, $unique, $values );
				break;
			case 'taxonomy':
			case 'term':
				$return = ( 'get' === $mode ) ? wpo_term_meta( $id, $unique ) : wponion_update_term_meta( $id, $unique, $values );
				break;
			case 'user_profile':
				$return = ( 'get' === $mode ) ? wpo_user_meta( $id, $unique ) : update_user_meta( $id, $unique, $values );
				break;
		}
		return $return;
	}
}

if ( ! function_exists( 'wponion_get_db' ) ) {
	/**
	 * @param      $module_db
	 * @param bool $unique
	 * @param bool $id
	 *
	 * @return array|bool|mixed|\WPOnion\DB\Option|null
	 */
	function wponion_get_db( $module_db, $unique = false, $id = false ) {
		return wponion_get_set_db( $module_db, $unique, $id );
	}
}

if ( ! function_exists( 'wponion_update_db' ) ) {
	/**
	 * Updates Options in Database.
	 *
	 * @param string          $module_db DB update module type.
	 * @param string          $unique update unqiue key.
	 * @param mixed           $values update values.
	 * @param string|int|bool $id extra argument to pass (Post ID,Term ID,User ID)
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wponion_update_db( $module_db, $unique, $values, $id ) {
		return wponion_get_set_db( $module_db, $unique, $id, $values, 'save' );
	}
}

if ( ! function_exists( 'wpo_settings' ) ) {
	/**
	 * Featches & Returns Saved WPOnion Settings.
	 *
	 * @param string      $unique
	 * @param string|bool $option_key
	 * @param bool|mixed  $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_settings( $unique, $option_key = false, $default = false ) {
		return \WPOnion\DB\Options::settings( $unique, $option_key, $default );
	}
}

if ( ! function_exists( 'wpo_network_settings' ) ) {
	/**
	 * Featches & Returns Saved WPOnion Settings.
	 *
	 * @param string      $unique
	 * @param string|bool $option_key
	 * @param bool|mixed  $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_network_settings( $unique, $option_key = false, $default = false ) {
		return \WPOnion\DB\Options::network_settings( $unique, $option_key, $default );
	}
}

if ( ! function_exists( 'wpo_post_meta' ) ) {
	/**
	 * Featches & Returns Saved WPOnion Settings.
	 *
	 * @param string|int  $post_id
	 * @param string      $unique
	 * @param bool|string $option_key
	 * @param bool|mixed  $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_post_meta( $post_id, $unique, $option_key = false, $default = false ) {
		return \WPOnion\DB\Options::post_meta( $post_id, $unique, $option_key, $default );
	}
}

if ( ! function_exists( 'wpo_user_meta' ) ) {
	/**
	 * Featches & Returns Saved WPOnion Settings.
	 *
	 * @param string|int  $post_id
	 * @param string      $unique
	 * @param bool|string $option_key
	 * @param bool|mixed  $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_user_meta( $post_id, $unique, $option_key = false, $default = false ) {
		return \WPOnion\DB\Options::user_meta( $post_id, $unique, $option_key, $default );
	}
}

if ( ! function_exists( 'wpo_term_meta' ) ) {
	/**
	 * Featches & Returns Saved WPOnion Settings.
	 *
	 * @param string|int  $post_id
	 * @param string      $unique
	 * @param bool|string $option_key
	 * @param bool|mixed  $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_term_meta( $post_id, $unique, $option_key = false, $default = false ) {
		return \WPOnion\DB\Options::term_meta( $post_id, $unique, $option_key, $default );
	}
}
