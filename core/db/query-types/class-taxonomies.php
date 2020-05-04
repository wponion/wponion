<?php

namespace WPOnion\DB\Query_Types;


use WP_Query;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\DB\Query_Types\Taxonomies' ) ) {
	/**
	 * Class Taxonomies
	 *
	 * @package WPOnion\DB\Query_Types
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.4.5.4
	 */
	class Taxonomies extends WP_Query_Base {
		/**
		 * @param array $query_args
		 *
		 * @return array
		 */
		public function setup_query_args( $query_args ) {
			if ( ! isset( $query_args['taxonomy'] ) ) {
				$query_args['taxonomy'] = ( in_array( $this->query->type, array(
					'tags',
					'tag',
				), true ) ) ? 'post_tag' : 'category';
			}

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
			return get_terms( $query_args );
		}

		/**
		 * @param array|object $values WP Query Result.
		 *
		 * @return string
		 */
		public function default_key( $values ) {
			return ( isset( $values->term_id ) ) ? $values->term_id : false;
		}

		/**
		 * @param array|object $values WP Query Result.
		 *
		 * @return string
		 */
		public function default_label( $values ) {
			return ( isset( $values->name ) ) ? $values->name : false;
		}
	}
}
