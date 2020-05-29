<?php

namespace WPOnion\DB\Query_Types;

defined( 'ABSPATH' ) || exit;

/**
 * Class Image_Sizes
 *
 * @package WPOnion\DB\Query_Types
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.4.6
 */
class Image_Sizes extends WP_Query_Base {
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
		return wp_get_additional_image_sizes();
	}

	/**
	 * @param array|object $values WP Query Result.
	 * @param array|object $key WP Query Result key.
	 *
	 * @return string
	 */
	public function default_key( $values, $key ) {
		return $key;
	}

	/**
	 * @param string|array|object $values WP Query Result.
	 * @param array|object        $key WP Query Result key.
	 *
	 * @return string
	 */
	public function default_label( $values, $key ) {
		return sprintf( '%s - %s x %s', $key, $values['width'], $values['height'] );
	}
}
