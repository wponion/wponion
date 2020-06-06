<?php

namespace WPOnion\DB\Query_Types;

/**
 * Class WP_Query
 *
 * @package WPOnion\DB\Query_Types
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.4.6
 */
abstract class WP_Query_Base {
	/**
	 * Stores WP_Query Instance.
	 *
	 * @var \WPOnion\DB\Query
	 */
	protected $query = false;

	/**
	 * @var bool
	 */
	protected $is_customizable = true;

	/**
	 * WP_Query constructor.
	 *
	 * @param $wp_query
	 */
	public function __construct( $wp_query ) {
		$this->query = $wp_query;
	}

	/**
	 * Returns True / False Based On Current WP Result.
	 *
	 * @return bool
	 */
	public function is_customizable() {
		return $this->is_customizable;
	}

	/**
	 * @param array $query_args An Array of Query Args.
	 *
	 * @return mixed
	 */
	abstract public function setup_query_args( $query_args );

	/**
	 * @param array $query_args An Array of Query Args.
	 *
	 * @return mixed
	 */
	abstract public function get_results( $query_args );

	/**
	 * @param array $values WP Query Result.
	 * @param array $key WP Query Result Key.
	 *
	 * @return string
	 */
	abstract public function default_key( $values, $key );

	/**
	 * @param array $values WP Query Result.
	 * @param array $key WP Query Result Key.
	 *
	 * @return string
	 */
	abstract public function default_label( $values, $key );

}
