<?php

namespace WPOnion;

use WPOnion\Traits\Class_Options;
use WPOnion\Traits\Hooks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( '\WPOnion\Bridge' ) ) {
	/**
	 * Class Bridge
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	abstract class Bridge {
		use Class_Options;
		use Hooks;

		/**
		 * Returns a default array.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array();
		}

		/**
		 * Checks And handles data.
		 *
		 * @param array  $data
		 * @param array  $defaults
		 * @param string $save_with
		 *
		 * @return array
		 */
		protected function handle_data( $data = array(), $defaults = array(), $save_with = '' ) {
			if ( true === $data ) {
				return $data;
			} elseif ( is_array( $data ) ) {
				return $this->parse_args( $data, $defaults );
			} elseif ( false !== $data && isset( $defaults[ $save_with ] ) ) {
				$defaults[ $save_with ] = $data;
			}
			return $defaults;
		}
	}
}
