<?php

namespace WPOnion\Registry;

use WPOnion\Bridge;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Registry\Fields' ) ) {
	/**
	 * Class Fields
	 *
	 * @package WPOnion\Registry
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Fields {
		/**
		 * Stores all instance data.
		 *
		 * @var array
		 */
		private $registry = array();

		/**
		 * @param string          $instance_id
		 * @param \WPOnion\Bridge $instance
		 *
		 * @return bool
		 */
		public function add( $instance_id, Bridge &$instance ) {
			if ( ! isset( $this->registry[ $instance_id ] ) ) {
				$this->registry[ $instance_id ] = $instance;
				return true;
			}
			return false;
		}

		/**
		 * Check and returns an instance.
		 *
		 * @param string $instance_id
		 *
		 * @return bool
		 */
		public function get( $instance_id = 'settings' ) {
			if ( isset( $this->registry[ $instance_id ] ) ) {
				return $this->registry[ $instance_id ];
			}
			return false;
		}
	}
}
