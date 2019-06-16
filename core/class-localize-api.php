<?php

namespace WPOnion;

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
	class Localize_API extends Bridge {
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
		private $scripts_check = array( 'wponion-plugins', 'wponion-core' );

		/**
		 * WPOnion_Localize_API constructor.
		 */
		public function __construct() {
			$this->add_action( 'admin_footer', 'render_js_args' );
			$this->add_action( 'customize_controls_print_footer_scripts', 'render_js_args', 9999999999999 );
			$this->add_action( 'wponion_metabox_ajax_render', 'render_js_args' );
			$this->add_action( 'wponion_module_woocommerce_ajax_variation_fields', 'render_js_args' );
			$this->add_action( 'wp_footer', 'render_js_args' );
			$this->js_args['wponion_core'] = array();
		}

		/**
		 * Adds a given object to array based on the ID.
		 *
		 * @param string $object_id
		 * @param array  $args
		 * @param bool   $merge
		 * @param bool   $convert_js_funcion
		 *
		 * @return self
		 */
		public function add( $object_id = '', $args = array(), $merge = true, $convert_js_funcion = true ) {
			if ( true === $convert_js_funcion ) {
				$args = $this->handle_js_function( $args );
			}
			if ( true === $merge && isset( $this->js_args[ $object_id ] ) ) {
				$this->js_args[ $object_id ] = $this->parse_args( $args, $this->js_args[ $object_id ] );
			} else {
				$this->js_args[ $object_id ] = $args;
			}
			return $this;
		}

		/**
		 * Returns An Existing Array.
		 *
		 * @param string $object_id
		 * @param bool   $default
		 *
		 * @return bool|mixed
		 */
		public function get( $object_id = '', $default = false ) {
			return ( isset( $this->js_args[ $object_id ] ) ) ? $this->js_args[ $object_id ] : $default;
		}

		/**
		 * Converts Javascript Function into array.
		 *
		 * @param $args
		 *
		 * @return mixed
		 */
		protected function handle_js_function( $args ) {
			if ( empty( $args ) || ! is_array( $args ) ) {
				return $args;
			}
			foreach ( $args as $i => $ar ) {
				if ( wponion_is_array( $ar ) ) {
					$args[ $i ] = $this->handle_js_function( $ar );
				} elseif ( is_string( $ar ) ) {
					$re = '/\bfunction[ ]{0,1}(\(((?>[^()]+|(?-2))*)\))(.|)(\{((?>[^{}]+|(?-2))*)\})/';
					preg_match_all( $re, $ar, $matches, PREG_SET_ORDER, 0 );

					if ( wponion_is_array( $matches ) && ! empty( array_filter( $matches ) ) ) {
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
			if ( ! isset( $this->js_args['wponion_il8n'] ) ) {
				$this->js_args['wponion_il8n'] = array();
			}
			$this->js_args['wponion_il8n'][ $key ] = $value;
			return $this;
		}

		/**
		 * Appens Data To Existing.
		 */
		protected function append_data() {
			if ( ! wponion_is_ajax() || ( wp_script_is( 'wponion-core', 'registered' ) ) ) {
				/* translators: */
				$js_notice = PHP_EOL . __( 'This debug data is only visible when `WP_DEBUG` or `WPONION_FIELD_DEBUG` is defined `true` ', 'wponion' );
				$js_notice = $js_notice . PHP_EOL . PHP_EOL . __( '**PHP Args:** is the array which is passed to the framework in php ', 'wponion' );
				$js_notice = $js_notice . PHP_EOL . PHP_EOL . __( '**JS Args:** is the array which is used by the JS plugins in this framework. for each plugin it shows the plugin name and its array passed to it', 'wponion' );
				$js_notice = sprintf( wponion_markdown( $js_notice ), '<br/>' );
				if ( false === self::$core_data && false === wponion_is_ajax( 'heartbeat' ) ) {
					$this->js_args['wponion_core']['ajaxurl']         = admin_url( 'admin-ajax.php' );
					$this->js_args['wponion_core']['ajax_action']     = 'wponion-ajax';
					$this->js_args['wponion_core']['ajax_action_key'] = 'wponion-ajax';
					$this->js_args['wponion_core']['ajax_url']        = admin_url( 'admin-ajax.php?action=wponion-ajax' );
					$this->js_args['wponion_core']['debug']           = ( true === defined( 'WP_DEBUG' ) || true === defined( 'SCRIPT_DEBUG' ) ) ? true : false;
					$this->js_args['wponion_core']['debug_notice']    = $js_notice;
					$this->text( 'get_json_output', __( 'As JSON', 'wponion' ) );
					$this->text( 'global_json_output', __( 'Global WPOnion JSON Output', 'wponion' ) );
					$this->text( 'unmodified_debug', __( 'PHP Args', 'wponion' ) );
					$this->text( 'modified_debug', __( 'JS Args', 'wponion' ) );
					$this->text( 'unknown_ajax_error', __( 'Unknown Error. Try Again', 'wponion' ) );
					$this->text( 'click_to_view_debug_info', __( 'Click To View Field Debug Info', 'wponion' ) );
					$this->text( 'validation_summary', __( 'Please correct the errors highlighted below and try again.', 'wponion' ) );
					$this->text( 'delete', __( 'Delete', 'wponion' ) );
					$this->text( 'processing', __( 'Processing ...', 'wponion' ) );
					$this->text( 'restore', __( 'Restore', 'wponion' ) );
					$this->text( 'settings_saved', __( 'Settings Updated', 'wponion' ) );
					$this->text( 'email_sent', __( 'Email Sent', 'wponion' ) );
					$this->text( 'copied', __( 'Copied', 'wponion' ) );
					$this->text( 'copy_now', __( 'Click To Copy', 'wponion' ) );
					$this->text( 'success', __( 'Success', 'wponion' ) );
					$this->modal_template();
					self::$core_data = true;
				}
			}

			if ( defined( 'WPONION_ADD_FONT_DATA' ) && true === WPONION_ADD_FONT_DATA ) {
				$this->add( 'wponion_websafe_fonts', wponion_websafe_fonts(), true, false );
				$this->add( 'wponion_gfonts', wponion_google_fonts_data(), true, false );
			}
		}

		/**
		 * Returns Arguments As Array.
		 *
		 * @return array
		 */
		public function as_array() {
			$this->append_data();
			return array_filter( $this->js_args );
		}

		/**
		 * @param bool $return
		 *
		 * @return bool
		 */
		public function render_js_args( $return = false ) {
			$this->append_data();

			if ( defined( 'DOING_AJAX' ) && true === DOING_AJAX ) {
				return $this->print_js_data( $return );
			}

			foreach ( $this->scripts_check as $script ) {
				if ( true === wp_script_is( $script ) && false === wp_script_is( $script, 'done' ) ) {
					return $this->localize_script( $script );
				}
			}
			if ( wp_script_is( 'wponion-core' ) && wp_script_is( 'wponion-core', 'done' ) ) {
				$this->print_js_data( false );
			}
		}

		/**
		 * Uses WP-Script-API To Localize script.
		 *
		 * @param string $handle
		 *
		 * @return bool
		 */
		private function localize_script( $handle = '' ) {
			foreach ( array_filter( $this->js_args ) as $key => $value ) {
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
		 *
		 * @param bool $return
		 *
		 * @return string
		 */
		private function print_js_data( $return = false ) {
			$h = "<script type='text/javascript' id='wponion_field_js_vars'>\n /* <![CDATA[ */\n"; // CDATA and type='text/javascript' is not needed for HTML 5

			foreach ( array_filter( $this->js_args ) as $key => $value ) {
				$h .= wponion_js_vars( $key, $value, false );
			}

			$h .= "/* ]]> */\n </script>\n";
			if ( false === $return ) {
				echo $h;
			}
			return $h;
		}

		/**
		 * Handles Modal Template.
		 */
		private function modal_template() {
			$extra                         = array(
				'modal' => array(
					'html'             => include wponion()->tpl( 'wponion-modal-html.php' ),
					'frame_menu_item'  => '<a href="{{ data.url }}" class="media-menu-item">{{ data.name }}</a>',
					'router_menu_item' => '<a href="{{ data.url }}" class="media-menu-item">{{ data.name }}</a>',
					'page_content'     => '<div id="{{data.id}}" class="hidden wponion-modal-{{data.id}} wponion-modal-content"><div class="media-frame-title"><h1>{{data.title}}</h1></div><div class="media-frame-router"> <div class="media-router"></div> </div> <div class="media-frame-content"><div class="media-content"></div><div class="media-sidebar"></div></div></div>',
					'section_content'  => '<div id="{{data.id}}" class="hidden wponion-modal-{{data.id}} wponion-modal-content wponion-section-modal-content"><div class="media-content"></div><div class="media-sidebar"></div></div>',
				),
			);
			$this->js_args['wponion_core'] = wponion_parse_args( $this->js_args['wponion_core'], $extra );
		}
	}
}
