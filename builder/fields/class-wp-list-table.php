<?php

namespace WPO\Fields;

use WPO\Field;

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
	class WP_List_Table extends Field {
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
	}
}
