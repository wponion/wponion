<?php
/**
 *
 * Initial version created 07-05-2018 / 07:44 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! interface_exists( 'WPOnion_Registry_Interface' ) ) {
	interface WPOnion_Registry_Interface {
		/**
		 * Stores Instance of a give feature.
		 *
		 * @param string            $feature_type
		 * @param \WPOnion_Abstract $instance
		 *
		 * @return mixed
		 */
		public function add( $feature_type = 'settings', \WPOnion_Abstract &$instance );

		/**
		 * Get And Returns An Instance of a give key.
		 *
		 * @param string $feature_type
		 * @param        $plugin_id
		 *
		 * @return mixed
		 */
		public function get( $feature_type = 'settings', $plugin_id );
	}
}


if ( ! class_exists( 'WPOnion_Registry' ) ) {
	/**
	 * Class WPOnion_Feature_Registry
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_Registry implements WPOnion_Registry_Interface {
		/**
		 * Stores All Instances
		 *
		 * @var array
		 */
		protected $registry = array();

		/**
		 * Adds An Instance To Array.
		 *
		 * @param string            $type
		 * @param \WPOnion_Abstract $instance
		 *
		 * @return mixed|void
		 */
		public function add( $type = 'settings', \WPOnion_Abstract &$instance ) {
			if ( ! isset( $this->registry[ $type ] ) ) {
				$this->registry[ $type ] = array();
			}

			$key = $instance->plugin_id();

			if ( ! isset( $registry[ $type ][ $key ] ) ) {
				$this->registry[ $type ][ $key ] = $instance;
			}
		}

		/**
		 * Returns An Instance.
		 *
		 * @param string $type
		 * @param        $key
		 *
		 * @return bool
		 * @static
		 */
		public function get( $type = 'settings', $key ) {
			if ( isset( $this->registry[ $type ][ $key ] ) ) {
				return $this->registry[ $type ][ $key ];
			}
			return false;
		}
	}
}
