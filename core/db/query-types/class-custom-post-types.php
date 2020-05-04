<?php

namespace WPOnion\DB\Query_Types;

use WP_Query;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\DB\Query_Types\Custom_Post_Types' ) ) {
	/**
	 * Trait Custom_Post_Types
	 *
	 * @package WPOnion\DB\Query_Types
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.4.5.4
	 */
	class Custom_Post_Types extends WP_Query_Base {
		/**
		 * @param array $query_args
		 *
		 * @return array
		 */
		public function setup_query_args( $query_args ) {
			if ( ! isset( $query_args['post_type'] ) ) {
				$query_args['post_type'] = ( in_array( $this->query->type, array(
					'posts',
					'post',
				), true ) ) ? 'post' : 'page';
			}
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
			$query = new WP_Query( $query_args );
			return $query->posts;
		}

		/**
		 * @param array|object $values WP Query Result.
		 *
		 * @return string
		 */
		public function default_key( $values ) {
			return ( isset( $values->ID ) ) ? $values->ID : false;
		}

		/**
		 * @param array|object $values WP Query Result.
		 *
		 * @return string
		 */
		public function default_label( $values ) {
			return ( isset( $values->post_title ) ) ? $values->post_title : false;
		}
	}
}
