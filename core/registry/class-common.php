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
		public function add( $feature_type, Bridge &$instance );

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
