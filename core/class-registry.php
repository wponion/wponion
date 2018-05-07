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

if ( ! class_exists( 'WPOnion_Registry' ) ) {
	/**
	 * Class WPOnion_Registery
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class WPOnion_Registery {
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
		 * @static
		 */
		public function add( $type = 'settings', \WPOnion_Abstract $instance ) {
			if ( ! isset( $this->registry[ $type ] ) ) {
				$this->registry[ $type ] = array();
			}

			$key = $this->get_id( $instance );

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

		/**
		 * @param $instance
		 *
		 * @return mixed
		 */
		abstract function get_id( $instance );
	}
}

if ( ! class_exists( 'WPOnion_Feature_Registry' ) ) {
	/**
	 * Class WPOnion_Feature_Registry
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_Feature_Registry extends WPOnion_Registery {
		/**
		 * @param $feature
		 *
		 * @return mixed
		 */
		public function get_id( $feature ) {
			return $feature->plugin_id();
		}

	}
}

if ( ! class_exists( 'WPOnion_Settings_Registry' ) ) {
	/**
	 * Class WPOnion_Settings_Registry
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_Settings_Registry extends WPOnion_Registery {
		/**
		 * @param $feature
		 *
		 * @return mixed
		 */
		public function get_id( $feature ) {
			return $feature->plugin_id();
		}
	}
}