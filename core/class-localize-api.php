<?php

namespace WPOnion;

use WPOnion\libraries\CSS_Parser;

defined( 'ABSPATH' ) || exit;

/**
 * Class Localize_API
 *
 * @package WPOnion\JS
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Localize_API extends Bridge {
	/**
	 * Stores CSS Args.
	 *
	 * @var array
	 */
	private $css_args = array();

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
	 * @var string
	 */
	private $scripts_check = 'wponion-core';

	/**
	 * WPOnion_Localize_API constructor.
	 */
	public function __construct() {
		$this->add_action( 'admin_footer', 'render_css_js_args' );
		$this->add_action( 'customize_controls_print_footer_scripts', 'render_css_js_args', 9999999999999 );
		$this->add_action( 'wp_footer', 'render_css_js_args' );
		$this->add_action( 'before_wp_tiny_mce', 'copy_wpeditor_args' );
		$this->add_action( 'quicktags_settings', 'copy_quicktags_settings', 9999, 2 );
		$this->js_args['wponion_core'] = array();
		$this->js_args['wponion_il8n'] = array();
	}

	/**
	 * Save QuickTags Settings.
	 *
	 * @param $settings
	 * @param $editor_id
	 *
	 * @return mixed
	 */
	public function copy_quicktags_settings( $settings, $editor_id ) {
		$this->save_wpeditor_quicktags_settings( $editor_id, $settings, 'wponion_wp_quick_tags' );
		return $settings;
	}

	/**
	 * Moves Args.
	 *
	 * @param $args
	 */
	public function copy_wpeditor_args( $args ) {
		if ( ! empty( $args ) && is_array( $args ) ) {
			foreach ( $args as $key => $val ) {
				$this->save_wpeditor_quicktags_settings( $key, $val );
			}
		}
		$this->render_css_js_args();
	}

	/**
	 * Saves Args.
	 *
	 * @param        $editor_id
	 * @param        $args
	 * @param string $type
	 */
	private function save_wpeditor_quicktags_settings( $editor_id, $args, $type = 'wponion_wp_editor' ) {
		if ( 0 === strpos( $editor_id, 'wpeditor_' ) ) {
			foreach ( $args as $key => $val ) {
				$decoded = json_decode( wponion_fix_json_string( $val ), true );
				if ( ! empty( $decoded ) ) {
					$args[ $key ] = $decoded;
				}
			}
			$this->add( $type, array( $editor_id => $args ), true, true );
		}
	}

	/**
	 * Adds a given object to array based on the ID.
	 *
	 * @param string $object_id
	 * @param array  $args
	 * @param bool   $merge
	 * @param bool   $convert_js_funcion
	 *
	 * @return $this
	 */
	public function add( $object_id = '', $args = array(), $merge = true, $convert_js_funcion = true ) {
		$arg                         = ( true === $convert_js_funcion ) ? $this->handle_js_function( $args ) : $args;
		$this->js_args[ $object_id ] = ( true === $merge && isset( $this->js_args[ $object_id ] ) ) ? $this->parse_args( $arg, $this->js_args[ $object_id ] ) : $arg;
		return $this;
	}

	/**
	 * Stores CSS Informations.
	 *
	 * @param string $object_id object id
	 * @param string $css css source code.
	 * @param bool   $compile set true to compile nested css.
	 *
	 * @return $this
	 */
	public function css( $object_id, $css, $compile = true ) {
		if ( ! isset( $this->css_args[ $object_id ] ) ) {
			$this->css_args[ $object_id ] = array();
		}

		$this->css_args[ $object_id ][] = ( true === $compile ) ? CSS_Parser::parse( $css ) : $css;
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
		$this->js_args['wponion_il8n'][ $key ] = $value;
		return $this;
	}

	/**
	 * Appens Data To Existing.
	 */
	protected function append_data() {
		if ( wp_script_is( 'wponion-core' ) && ! wponion_is_ajax() ) {
			/* translators: */
			$js_notice = PHP_EOL . __( 'This debug data is only visible when `WP_DEBUG` or `WPONION_FIELD_DEBUG` is defined `true` ', 'wponion' );
			$js_notice = $js_notice . PHP_EOL . PHP_EOL . __( '**PHP Args:** is the array which is passed to the framework in php ', 'wponion' );
			$js_notice = $js_notice . PHP_EOL . PHP_EOL . __( '**JS Args:** is the array which is used by the JS plugins in this framework. for each plugin it shows the plugin name and its array passed to it', 'wponion' );
			$js_notice = sprintf( wponion_markdown( $js_notice ), '<br/>' );

			if ( false === self::$core_data && ! wponion_is_ajax() ) {
				$this->js_args['wponion_core']['ajaxurl']         = admin_url( 'admin-ajax.php' );
				$this->js_args['wponion_core']['ajax_action']     = 'wponion-ajax';
				$this->js_args['wponion_core']['ajax_action_key'] = 'wponion-ajax';
				$this->js_args['wponion_core']['ajax_url']        = admin_url( 'admin-ajax.php?action=wponion-ajax' );
				$this->js_args['wponion_core']['debug']           = wponion_is_debug();
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

		if ( wponion_is_defined( 'WPONION_ADD_FONT_DATA', true ) ) {
			$this->add( 'wponion_websafe_fonts', wponion_websafe_fonts(), true, false );
			$this->add( 'wponion_gfonts', wponion_google_fonts_data(), true, false );
		}

		if ( wponion_is_debug() ) {
			$this->add( 'wponion_js_variables', array_keys( $this->js_args ), false, false );
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
	 * Renders CSS / JS Arguments an simple alternative to wp_add_inline_style() && wp_add_inline_script()
	 *
	 * @param bool $return
	 *
	 * @return bool|string
	 */
	public function render_css_js_args( $return = false ) {
		$this->append_data();

		if ( wponion_is_defined( 'DOING_AJAX', true ) ) {
			$return = $this->print_js_data( $return ) . ' ' . $this->print_css_data();
			$this->clear();
			return $return;
		}

		echo $this->print_css_data();

		if ( wp_script_is( $this->scripts_check ) ) {
			if ( false === wp_script_is( $this->scripts_check, 'done' ) ) {
				$this->localize_script( $this->scripts_check );
			} else {
				$this->print_js_data( false );
			}
		}

		$this->clear();
		return false;
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
			wp_localize_script( $handle, str_replace( '-', '_', $key ), $value );
		}
		return true;
	}

	/**
	 * Clears JS & CSS Args.
	 *
	 * @return $this
	 */
	public function clear() {
		$this->js_args  = array();
		$this->css_args = array();
		return $this;
	}

	/**
	 * Returns All JS Args.
	 *
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
	 * Outputs Raw HTML of js info.
	 *
	 * @return string
	 */
	private function print_css_data() {
		if ( ! empty( $this->css_args ) ) {
			foreach ( $this->css_args as $module => $css_codes ) {
				if ( ! empty( $this->css_args[ $module ] ) ) {
					$this->css_args[ $module ] = ( is_array( $css_codes ) ) ? implode( ' ', $css_codes ) : $css_codes;
					$this->css_args[ $module ] = sprintf( "<style id='wponion-%s-inline-css'>\n%s\n</style>\n", esc_attr( $module ), $this->css_args[ $module ] );
				}
			}
		}

		return implode( ' ', array_filter( $this->css_args ) );
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
				'page_content'     => '<div id="{{data.id}}" class="hidden wponion-modal-{{data.id}} wponion-modal-content"><div class="media-frame-title"><h1>{{data.title}}</h1></div><div class="media-frame-router"> <div class="media-router"></div> </div> <div class="media-frame-content"><div class="media-content wponion-framework"></div><div class="media-sidebar"></div></div></div>',
				'section_content'  => '<div id="{{data.id}}" class="hidden wponion-modal-{{data.id}} wponion-modal-content wponion-section-modal-content"><div class="media-content wponion-framework"></div><div class="media-sidebar"></div></div>',
			),
		);
		$this->js_args['wponion_core'] = wponion_parse_args( $this->js_args['wponion_core'], $extra );
	}
}
