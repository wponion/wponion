<?php
/**
 *
 * Initial version created 14-05-2018 / 10:31 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Registry;
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Registry\Core' ) ) {
	/**
	 * Class Core
	 *
	 * @package WPOnion\Registry
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Core implements Common {
		/**
		 * Stores All Instances
		 *
		 * @var array
		 */
		protected $registry = array();

		/**
		 * Adds An Instance To Array.
		 *
		 * @param string          $type
		 * @param \WPOnion\Bridge $instance
		 *
		 * @return mixed|void
		 */
		public function add( $type, \WPOnion\Bridge &$instance ) {
			if ( ! isset( $this->registry[ $type ] ) ) {
				$this->registry[ $type ] = array();
			}

			$key = get_class( $instance );

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
		 * @return object|bool|\WPOnion
		 * @static
		 */
		public function get( $type, $key ) {
			return ( isset( $this->registry[ $type ][ $key ] ) ) ? $this->registry[ $type ][ $key ] : false;
		}
	}
}
