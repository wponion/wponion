<?php

namespace WPOnion\DB\Query_Types;

defined( 'ABSPATH' ) || exit;

/**
 * Class Taxonomies
 *
 * @package WPOnion\DB\Query_Types
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.4.6
 */
class Taxonomies extends WP_Query_Base {
	/**
	 * @param array $query_args
	 *
	 * @return array
	 */
	public function setup_query_args( $query_args ) {
		if ( ! empty( $query_args['s'] ) ) {
			$query_args['search'] = $query_args['s'];
			unset( $query_args['s'] );
		}

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
		if ( in_array( $this->query->type, array( 'tags', 'tag' ) ) ) {
			return get_tags( $query_args );
		}

		if ( in_array( $this->query->type, array( 'categories', 'category' ) ) ) {
			return get_categories( $query_args );
		}

		if ( in_array( $this->query->type, array( 'terms', 'term' ) ) ) {
			return get_terms( $query_args );
		}

		return get_taxonomies( $query_args, 'objects' );
	}

	/**
	 * @param array|object $values WP Query Result.
	 * @param array|object $key WP Query Result key.
	 *
	 * @return string
	 */
	public function default_key( $values, $key ) {
		if ( in_array( $this->query->type, array( 'taxonomies', 'taxonomy' ) ) ) {
			return ( isset( $values->name ) ) ? $values->name : false;
		}
		return ( isset( $values->term_id ) ) ? $values->term_id : false;
	}

	/**
	 * @param array|object $values WP Query Result.
	 * @param array|object $key WP Query Result key.
	 *
	 * @return string
	 */
	public function default_label( $values, $key ) {
		if ( in_array( $this->query->type, array( 'taxonomies', 'taxonomy' ) ) ) {
			return ( isset( $values->label ) ) ? $values->label : false;
		}
		return ( isset( $values->name ) ) ? $values->name : false;
	}
}
