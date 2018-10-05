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

namespace WPOnion\JS;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Localize_API' ) ) {
	/**
	 * Class Localize_API
	 *
	 * @package WPOnion\JS
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Localize_API extends \WPOnion\Bridge {
		/**
		 * js_args
		 *
		 * @var array
		 */
		private $js_args = array();

		/**
		 * core_data
		 *
		 * @var bool
		 */
		private static $core_data = false;

		/**
		 * scripts_check
		 *
		 * @var array
		 */
		private $scripts_check = array( 'wponion-plugins', 'wponion-core', 'wponion-fields' );

		/**
		 * WPOnion_Localize_API constructor.
		 */
		public function __construct() {
			$this->add_action( 'admin_footer', 'render_js_args' );
			$this->add_action( 'customize_controls_print_footer_scripts', 'render_js_args', 9999999999999 );
			$this->add_action( 'wponion_metabox_ajax_render', 'render_js_args' );
			$this->add_action( 'wponion_module_woocommerce_ajax_variation_fields', 'render_js_args' );
			if ( defined( 'WPONION_FRONTEND' ) && true === WPONION_FRONTEND ) {
				$this->add_action( 'wp_footer', 'render_js_args' );
			}

			$js_notice = __( ' %5$s this debug data is only visible when %1$sWP_DEBUG%2$s or %1$sWPONION_FIELD_DEBUG%2$s is defined %3$sstrue%4$s ' );
			$js_notice = $js_notice . __( ' %5$s %3$sPHP Args:%4$s is the array which is passed to the framework in php ' );
			$js_notice = $js_notice . __( '%5$s %3$sJS Args:%4$s is the array which is used by the JS plugins in this framework. for each plugin it shows the plugin name and its array passed to it' );
			$js_notice = sprintf( $js_notice, '<code>', '</code>', '<strong>', '</strong>', '<br/>' );


			if ( false === self::$core_data ) {
				$this->js_args['wponion_core'] = array(
					'ajaxurl'         => admin_url( 'admin-ajax.php' ),
					'ajax_action'     => 'wponion-ajax',
					'ajax_action_key' => 'wponion-ajax',
					'ajax_url'        => admin_url( 'admin-ajax.php?action=wponion-ajax' ),
					'debug'           => ( true === defined( 'WP_DEBUG' ) || true === defined( 'SCRIPT_DEBUG' ) ) ? true : false,
					'debug_notice'    => $js_notice,
				);
				$this->text( 'get_json_output', __( 'Get Json Output' ) );
				$this->text( 'global_json_output', __( 'Global WPOnion JSON Output' ) );
				$this->text( 'unmodified_debug', __( 'PHP Args' ) );
				$this->text( 'modified_debug', __( 'JS Args' ) );
				$this->text( 'unknown_ajax_error', __( 'Unknown Error Occured. Please Try Again.' ) );
				$this->text( 'click_to_view_debug_info', __( 'Click To View Field Debug Info' ) );
				self::$core_data = true;
			}

		}

		/**
		 * Adds a given object to array based on the ID.
		 *
		 * @param string $object_id
		 * @param array  $args
		 * @param bool   $merge
		 */
		public function add( $object_id = '', $args = array(), $merge = true ) {
			$args = $this->handle_js_function( $args );
			if ( true === $merge && isset( $this->js_args[ $object_id ] ) ) {
				$this->js_args[ $object_id ] = $this->parse_args( $args, $this->js_args[ $object_id ] );
			} else {
				$this->js_args[ $object_id ] = $args;
			}
		}

		/**
		 * Converts Javascript Function into array.
		 *
		 * @param $args
		 *
		 * @return mixed
		 */
		protected function handle_js_function( $args ) {
			foreach ( $args as $i => $ar ) {
				if ( is_array( $ar ) ) {
					$args[ $i ] = $this->handle_js_function( $ar );
				} elseif ( is_string( $ar ) ) {
					$re = '/\bfunction[ ]{0,1}(\(((?>[^()]+|(?-2))*)\))(\{((?>[^{}]+|(?-2))*)\})/';
					/*'/\bfunction(\(((?>[^()]+|(?-2))*)\))(\{((?>[^{}]+|(?-2))*)\})/';*/
					preg_match_all( $re, $ar, $matches, PREG_SET_ORDER, 0 );

					if ( is_array( $matches ) && ! empty( array_filter( $matches ) ) ) {
						$args[ $i ] = array(
							'wponion_js_args'     => false,
							'wponion_js_contents' => false,
						);

						if ( isset( $matches[0][2] ) ) {
							$args[ $i ]['wponion_js_args'] = ( empty( $matches[0][2] ) ) ? false : $matches[0][2];
						}

						if ( isset( $matches[0][4] ) ) {
							$args[ $i ]['wponion_js_contents'] = ( empty( $matches[0][4] ) ) ? false : $matches[0][4];
						}
					}
				}
			}
			return $args;
		}

		/**
		 * Custom Text which will be used in JS.
		 *
		 * @param string $key
		 * @param string $value
		 *
		 * @return $this
		 */
		public function text( $key = '', $value = '' ) {
			if ( ! isset( $this->js_args['wponion_i18n'] ) ) {
				$this->js_args['wponion_i18n'] = array();
			}

			$this->js_args['wponion_i18n'][ $key ] = $value;
			return $this;
		}

		/**
		 * Renders JS Args.
		 */
		public function render_js_args() {
			if ( defined( 'WPONION_ADD_FONT_DATA' ) && true === WPONION_ADD_FONT_DATA ) {
				$this->add( 'wponion_websafe_fonts', wponion_websafe_fonts() );
				$this->add( 'wponion_gfonts', wponion_google_fonts_data() );
			}

			if ( wponion_is_debug() ) {
				$this->add( 'wponion_defined_vars', array_keys( $this->js_args ) );
			}

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
				$key = str_replace( '-', '_', $key );
				wp_localize_script( $handle, $key, $value );
			}
			return true;
		}

		/**
		 * Clears JS Args.
		 *
		 * @return $this
		 */
		public function clear() {
			$this->js_args = array();
			return $this;
		}


		/**
		 * @return array
		 */
		public function get_js_args() {
			return $this->js_args;
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
