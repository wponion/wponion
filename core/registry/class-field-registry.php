<?php
/**
 *
 * Initial version created 14-05-2018 / 10:33 AM
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

if ( ! class_exists( 'WPOnion_Field_Registry' ) ) {
	/**
	 * Class WPOnion_Field_Registry
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_Field_Registry {
		private $registry = array();

		/**
		 * @param string            $instance_id
		 * @param \WPOnion_Abstract $instance
		 *
		 * @return bool
		 */
		public function add( $instance_id = 'settings', \WPOnion_Abstract &$instance ) {
			if ( ! isset( $this->registry[ $instance_id ] ) ) {
				$this->registry[ $instance_id ] = $instance;
				return true;
			}
			return false;
		}

		/**
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