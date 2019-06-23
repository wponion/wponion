<?php

namespace WPO\Fields;

use WPO\Field;
use WPO\Helper\Container\Functions as Container_Functions;
use WPO\Helper\Field\Nested_Fields;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPO\Fields\WPO_List_Table' ) ) {
	/**
	 * Class WP_List_Table
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_List_Table extends Nested_Fields {
		/**
		 * Sub Containers
		 *
		 * @var array
		 * @access
		 */
		protected $containers = array();

		/**
		 * Loads Required Container_Functions.
		 *
		 * @see \WPO\Helper\Container\Functions
		 */
		use Container_Functions;

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
			$this['settings'] = $settings;
			return $this;
		}

		/**
		 * Stores Data
		 *
		 * @param $data
		 *
		 * @return $this
		 */
		public function data( $data ) {
			$this['data'] = $data;
			return $this;
		}

		public function get_field( $key = false ) {
			$status = parent::get_field( $key );
			if ( false === $status ) {
				$key = explode( '/', $key );
				array_shift( $key );
				$key = implode( '/', $key );
				return parent::get_field( $key );
			}
		}
	}
}
