<?php

namespace WPOnion\DB\Query_Types;

defined( 'ABSPATH' ) || exit;

/**
 * Class Post_Types
 *
 * @package WPOnion\DB\Query_Types
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.4.6
 */
class Post_Types extends WP_Query_Base {
	/**
	 * @param array $query_args
	 *
	 * @return array
	 */
	public function setup_query_args( $query_args ) {
		$query_args = wp_parse_args( $query_args, array(
			'public'              => true,
			'exclude_from_search' => false,
		) );
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
		$post_types = get_post_types( $query_args, 'names', 'and' );
		ksort( $post_types );
		return array_keys( $post_types );
	}

	/**
	 * @param array|object $values WP Query Result.
	 * @param array|object $key WP Query Result key.
	 *
	 * @return string
	 */
	public function default_key( $values, $key ) {
		return $values;
	}

	/**
	 * @param string|array|object $values WP Query Result.
	 * @param array|object        $key WP Query Result key.
	 *
	 * @return string
	 */
	public function default_label( $values, $key ) {
		global $wp_post_types;
		return ( isset( $wp_post_types[ $values ]->labels->menu_name ) ) ? $wp_post_types[ $values ]->labels->menu_name : ucfirst( $values );
	}
}
