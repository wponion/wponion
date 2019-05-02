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

if ( ! interface_exists( '\WPOnion\Registry\Common' ) ) {
	/**
	 * Interface Common
	 *
	 * @package WPOnion\Registry
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	interface Common {
		/**
		 * Stores Instance of a give feature.
		 *
		 * @param string          $feature_type
		 * @param \WPOnion\Bridge $instance
		 *
		 * @return mixed
		 */
		public function add( $feature_type, \WPOnion\Bridge &$instance );

		/**
		 * Get And Returns An Instance of a give key.
		 *
		 * @param string $feature_type
		 * @param mixed  $extra
		 *
		 * @return mixed
		 */
		public function get( $feature_type, $extra );
	}
}
