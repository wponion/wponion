<?php

namespace WPOnion\DB\Query_Types;

use WP_Query;

defined( 'ABSPATH' ) || exit;

/**
 * Trait Custom_Post_Types
 *
 * @package WPOnion\DB\Query_Types
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.4.6
 */
class Custom_Post_Types extends WP_Query_Base {
	/**
	 * @param array $query_args
	 *
	 * @return array
	 */
	public function setup_query_args( $query_args ) {
		//if ( ! isset( $query_args['posts_per_page'] ) ) {
		//	$query_args['posts_per_page'] = 20;
		//}
		return $query_args;
	}

	/**
	 * Fetches Results From Database.
	 *
	 * @param array $query_args
	 *
	 * @return array|mixed
	 */
	public function get_results( $query_args ) {
		if ( in_array( $this->query->type, array( 'page', 'pages' ) ) ) {
			return get_pages( $query_args );
		}

		if ( in_array( $this->query->type, array( 'post', 'posts' ) ) ) {
			return get_posts( $query_args );
		}
		$query = new WP_Query( $query_args );
		return $query->posts;
	}

	/**
	 * @param array|object $values WP Query Result.
	 * @param array|object $key WP Query Result key.
	 *
	 * @return string
	 */
	public function default_key( $values, $key ) {
		return ( isset( $values->ID ) ) ? $values->ID : false;
	}

	/**
	 * @param array|object $values WP Query Result.
	 * @param array|object $key WP Query Result key.
	 *
	 * @return string
	 */
	public function default_label( $values, $key ) {
		return ( isset( $values->post_title ) ) ? $values->post_title : false;
	}
}
