<?php

namespace WPOnion\Registry;

use WPOnion\Bridge;

defined( 'ABSPATH' ) || exit;

if ( ! interface_exists( '\WPOnion\Registry\Common' ) ) {
	/**
	 * Interface Common
	 *
	 * @package WPOnion\Registry
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	interface Common {
		/**
		 * Stores Instance of a give feature.
		 *
		 * @param string          $type
		 * @param \WPOnion\Bridge $instance
		 *
		 * @return mixed
		 */
		public function add( $type, Bridge &$instance );

		/**
		 * Get And Returns An Instance of a give key.
		 *
		 * @param string $type
		 * @param mixed  $extra
		 *
		 * @return mixed
		 */
		public function get( $type, $extra );
	}
}
