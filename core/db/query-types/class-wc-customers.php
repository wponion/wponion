<?php

namespace WPOnion\DB\Query_Types;

use Exception;

defined( 'ABSPATH' ) || exit;

/**
 * Class WC_Customers
 *
 * @package WPOnion\DB\Query_Types
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.4.6
 */
class WC_Customers extends WP_Query_Base {

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
		$query_args = wponion_parse_args( $query_args, array(
			'exclude' => array(),
			'limit'   => 10,
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
		$result = array();
		try {
			$term = isset( $query_args['s'] ) ? (string) wc_clean( wp_unslash( $query_args['s'] ) ) : '';
			$ids  = array();

			if ( is_numeric( $term ) ) {
				$customer = new \WC_Customer( intval( $term ) );
				if ( 0 !== $customer->get_id() ) {
					$ids = array( $customer->get_id() );
				}
			}

			if ( empty( $ids ) ) {
				$data_store          = \WC_Data_Store::load( 'customer' );
				$query_args['limit'] = ( 3 > strlen( $term ) ) ? 20 : $query_args['limit'];
				$ids                 = $data_store->search_customers( $term, $query_args['limit'] );
			}

			if ( is_array( $query_args['exclude'] ) && ! empty( $query_args['exclude'] ) ) {
				$ids = array_diff( $ids, array_map( 'absint', (array) wp_unslash( $query_args['exclude'] ) ) );
			}

			foreach ( $ids as $id ) {
				$cust = new \WC_Customer( $id );
				/* translators: $1: customer name, $2 customer id, $3: customer email */
				$label         = esc_html__( '%1$s (#%2$s &ndash; %3$s)', 'woocommerce', 'wponion' );
				$result[ $id ] = sprintf( $label, $cust->get_first_name() . ' ' . $cust->get_last_name(), $cust->get_id(), $cust->get_email() );
			}
		} catch ( Exception $exception ) {

		}
		return $result;
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
