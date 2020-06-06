<?php

namespace WPOnion\DB\Query_Types;

defined( 'ABSPATH' ) || exit;

/**
 * Class Layouts
 *
 * @package WPOnion\DB\Query_Types
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.4.6
 */
class Layouts extends WP_Query_Base {
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
			'size'    => '125',
			'exclude' => array(),
		) );

		$query_args['exclude'] = ( ! is_array( $query_args['exclude'] ) ) ? array() : $query_args['exclude'];
		$query_args['layout']  = str_replace( array( '_layouts', '_layout' ), '', $this->query->type );
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
		return wponion_layouts_field_option( $query_args['layout'], $query_args['size'], $query_args['exclude'] );
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
