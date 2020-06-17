<?php

namespace WPOnion\DB\Query_Types;

use Exception;

defined( 'ABSPATH' ) || exit;

/**
 * Class WC_Products
 *
 * @package WPOnion\DB\Query_Types
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.4.6
 */
class WC_Products extends WP_Query_Base {

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
		$query_args                       = wponion_parse_args( $query_args, array(
			'limit'              => 30,
			'include'            => array(),
			'exclude'            => array(),
			'exclude_type'       => false,
			'include_variations' => true,
			'display_stock'      => false,
		) );
		$query_args['include_variations'] = wponion_is_bool_val( $query_args['include_variations'] );
		$query_args['display_stock']      = wponion_is_bool_val( $query_args['display_stock'] );
		$query_args['include']            = ( isset( $query_args['post__in'] ) && ! empty( $query_args['post__in'] ) ) ? $query_args['post__in'] : $query_args['include'];
		$query_args['exclude']            = ( isset( $query_args['post__not_in'] ) && ! empty( $query_args['post__not_in'] ) ) ? $query_args['post__not_in'] : $query_args['exclude'];
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
			$term          = isset( $query_args['s'] ) ? (string) wc_clean( wp_unslash( $query_args['s'] ) ) : '';
			$exclude_types = array();

			if ( isset( $query_args['exclude_type'] ) && ! empty( $query_args['exclude_type'] ) ) {
				$exclude_types = wp_unslash( $query_args['exclude_type'] );
				if ( ! is_array( $exclude_types ) ) {
					$exclude_types = explode( ',', $exclude_types );
				}

				foreach ( $exclude_types as &$exclude_type ) {
					$exclude_type = strtolower( trim( $exclude_type ) );
				}
				$exclude_types = array_intersect( array_merge( array( 'variation' ), array_keys( wc_get_product_types() ) ), $exclude_types );
			}

			/**
			 * @var \WC_Product_Data_Store_CPT $data_store
			 */
			$data_store      = \WC_Data_Store::load( 'product' );
			$ids             = $data_store->search_products( $term, '', (bool) $query_args['include_variations'], false, $query_args['limit'], $query_args['include'], $query_args['exclude'] );
			$product_objects = array_filter( array_map( 'wc_get_product', $ids ), 'wc_products_array_filter_readable' );

			foreach ( $product_objects as $product_object ) {
				$formatted_name = $product_object->get_formatted_name();

				if ( in_array( $product_object->get_type(), $exclude_types, true ) ) {
					continue;
				}

				if ( $product_object->managing_stock() && true === $query_args['display_stock'] ) {
					$stock_amount = $product_object->get_stock_quantity();
					/* Translators: %d stock amount */
					$formatted_name .= ' &ndash; ' . sprintf( __( 'Stock: %d', 'woocommerce', 'wponion' ), wc_format_stock_quantity_for_display( $stock_amount, $product_object ) );
				}

				$result[ $product_object->get_id() ] = rawurldecode( $formatted_name );
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
		return ( isset( $values->ID ) ) ? $values->ID : false;
	}

	/**
	 * @param array|object $values WP Query Result.
	 * @param array|object $key WP Query Result key.
	 *
	 * @return string
	 */
	public function default_label( $values, $key ) {
		return ( isset( $values->user_login ) ) ? $values->user_login : false;
	}
}
