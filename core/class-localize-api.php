<?php
/**
 *
 * Initial version created 15-05-2018 / 10:30 AM
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

if ( ! class_exists( 'WPOnion_Localize_API' ) ) {
	/**
	 * Class WPOnion_Localize_API
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_Localize_API extends WPOnion_Abstract {
		/**
		 * js_args
		 *
		 * @var array
		 */
		private $js_args = array();

		private $scripts_check = array( 'wponion-plugins', 'wponion-core', 'wponion-fields' );

		/**
		 * WPOnion_Localize_API constructor.
		 */
		public function __construct() {
			$this->add_action( 'admin_footer', 'render_js_args' );
			if ( defined( 'WPONION_FRONTEND' ) && true === WPONION_FRONTEND ) {
				$this->add_action( 'wp_footer', 'render_js_args' );
			}
		}

		/**
		 * @param string $object_id
		 * @param array  $args
		 * @param bool   $merge
		 */
		public function add( $object_id = '', $args = array(), $merge = true ) {
			if ( true === $merge && isset( $this->js_args[ $object_id ] ) ) {
				$this->js_args[ $object_id ] = $this->parse_args( $args, $this->js_args[ $object_id ] );
			} else {
				$this->js_args[ $object_id ] = $args;
			}
		}

		/**
		 * Renders JS Args.
		 */
		public function render_js_args() {
			foreach ( $this->scripts_check as $script ) {
				if ( true === wp_script_is( $script ) && false === wp_script_is( $script, 'done' ) ) {
					return $this->localize_script( $script );
				}
			}
			return $this->print_js_data();
		}

		/**
		 * Uses WP-Script-API To Localize script.
		 *
		 * @param string $handle
		 *
		 * @return bool
		 */
		private function localize_script( $handle = '' ) {
			foreach ( $this->js_args as $key => $value ) {
				wp_localize_script( $handle, $key, $value );
			}
			return true;
		}

		/**
		 * Outputs Raw HTML of js info.
		 */
		private function print_js_data() {
			$h = "<script type='text/javascript' id='wponion_field_js_vars'>\n"; // CDATA and type='text/javascript' is not needed for HTML 5

			$h .= "/* <![CDATA[ */\n";
			foreach ( $this->js_args as $key => $value ) {
				$h .= wponion_js_vars( $key, $value, false );
			}

			$h .= "/* ]]> */\n";
			$h .= "</script>\n";
			echo $h;
			return true;
		}
	}
}
