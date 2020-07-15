<?php

namespace WPOnion\DB;

use WPOnion\DB\Storage\Network_Options;
use WPOnion\DB\Storage\Options;
use WPOnion\DB\Storage\Post;
use WPOnion\DB\Storage\Term;
use WPOnion\DB\Storage\User;

defined( 'ABSPATH' ) || exit;

/**
 * Class WP_DB
 *
 * @package WPOnion\DB
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class WP_DB {
	/**
	 * @param $return
	 *
	 * @return bool
	 */
	protected function is_get( $return ) {
		return ( 'get' === $return );
	}

	/**
	 * @param string          $module_db
	 * @param string          $unique
	 * @param bool|string|int $id
	 *
	 * @return array|bool|int|mixed|\WP_Error|\WPOnion\DB\Option
	 */
	public function get( $module_db, $unique, $id = false ) {
		return $this->get_set( $module_db, $unique, $id, false, 'get' );
	}

	/**
	 * @param string          $module_db
	 * @param string          $unique
	 * @param bool|string|int $id
	 * @param mixed           $values
	 *
	 * @return array|bool|int|mixed|\WP_Error|\WPOnion\DB\Option
	 */
	public function set( $module_db, $unique, $id = false, $values = false ) {
		return $this->get_set( $module_db, $unique, $id, $values, 'set' );
	}

	/**
	 * @param string          $module_db
	 * @param string          $unique
	 * @param bool|string|int $id
	 * @param mixed           $values
	 * @param string          $mode
	 *
	 * @return array|bool|int|mixed|\WP_Error|\WPOnion\DB\Option
	 */
	public function get_set( $module_db, $unique, $id = false, $values = false, $mode = 'get' ) {
		$db_type = wponion_module_db_type( $module_db );
		$is_get  = $this->is_get( $mode );

		if ( $is_get ) {
			$values = ( wpo_is_option( $values ) ) ? $values->get() : $values;
		}

		switch ( $db_type ) {
			case 'options':
			case 'network_options':
				$db     = ( 'options' === $db_type ) ? new Options() : new Network_Options();
				$return = ( $is_get ) ? $db->get( $unique, false ) : $db->update( $unique, $values, false );
				break;
			case 'post':
			case 'term':
			case 'user':
				if ( 'post' === $db_type ) {
					$db = new Post();
				} elseif ( 'term' === $db_type ) {
					$db = new Term();
				} elseif ( 'user' === $db_type ) {
					$db = new User();
				}

				$return = ( $is_get ) ? $db->get( $id, $unique, true ) : $db->update( $id, $unique, $values );
				break;
			default:
				$hook   = ( $is_get ) ? "wponion/${module_db}/db/get" : "wponion/${module_db}/db/update";
				$return = apply_filters( $hook, false, $unique, $id, $values, $db_type );
				break;
		}
		return $return;
	}
}
