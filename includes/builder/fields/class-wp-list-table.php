<?php

namespace WPO\Fields;

use WPO\Helper\Field\Nested_Fields;

defined( 'ABSPATH' ) || exit;

/**
 * Class WP_List_Table
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class WP_List_Table extends Nested_Fields {
	/**
	 * WP_List_Table constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'wp_list_table', $id, $title, $args );
	}

	/**
	 * @param $settings
	 *
	 * @return $this
	 */
	public function settings( $settings ) {
		return $this->__set( 'settings', $settings );
	}

	/**
	 * Stores Data
	 *
	 * @param $data
	 *
	 * @return $this
	 */
	public function data( $data ) {
		return $this->__set( 'data', $data );
	}

	/**
	 * @param bool $key
	 *
	 * @return array|\WPO\Container|\WPO\Field
	 */
	public function get_field( $key = false ) {
		$status = parent::get_field( $key );
		if ( false === $status ) {
			$key = explode( '/', $key );
			array_shift( $key );
			$key = implode( '/', $key );
			return parent::get_field( $key );
		}
		return $status;
	}
}
