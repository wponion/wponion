<?php

namespace WPOnion\DB\Query_Types;

defined( 'ABSPATH' ) || exit;

/**
 * Class Sidebars
 *
 * @package WPOnion\DB\Query_Types
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.4.6
 */
class Sidebars extends WP_Query_Base {
	/**
	 * @var bool
	 */
	protected $is_customizable = false;

	/**
	 * @param array $query_args
	 *
	 * @return array
	 */
	public function setup_query_args( $query_args ) {
		return $query_args;
	}

	/**
	 * Fetches Results From Database.
	 *
	 * @param $query_args
	 *
	 * @return array
	 */
	public function get_results( $query_args ) {
		global $wp_registered_sidebars;
		if ( ! empty( $wp_registered_sidebars ) ) {
			return wp_list_pluck( $wp_registered_sidebars, 'name', 'id' );
		}
		return array();
	}

	/**
	 * @param array|object $values WP Query Result.
	 * @param array|object $key WP Query Result key.
	 *
	 * @return string
	 */
	public function default_key( $values, $key ) {
		return false;
	}

	/**
	 * @param array|object $values WP Query Result.
	 * @param array|object $key WP Query Result key.
	 *
	 * @return string
	 */
	public function default_label( $values, $key ) {
		return false;
	}
}
