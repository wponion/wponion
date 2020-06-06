<?php

namespace WPOnion\Modules\Admin;

defined( 'ABSPATH' ) || exit;

/**
 * Class Page_Actions
 *
 * @package WPOnion\Modules\Admin
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Page_Actions {
	/**
	 * @var array
	 */
	protected static $output = array();

	/**
	 * Stores Button Informations.
	 *
	 * @var array
	 */
	protected static $post_types = array();

	/**
	 * Stores Button Informations.
	 *
	 * @var array
	 */
	protected static $screen_ids = array();

	/**
	 * Stores Button Informations.
	 *
	 * @var array
	 */
	protected static $taxonomy = array();

	/**
	 * Inits Class.
	 *
	 * @uses validate_current_post_type
	 */
	public static function init() {
		add_action( 'admin_footer', array( __CLASS__, 'validate_current_post_type' ) );
	}

	/**
	 * Validates
	 */
	public static function validate_current_post_type() {
		$current_screen = get_current_screen();
		$taxonomy       = isset( $current_screen->taxonomy ) ? $current_screen->taxonomy : false;
		$post_type      = isset( $current_screen->post_type ) ? $current_screen->post_type : false;
		$id             = isset( $current_screen->id ) ? $current_screen->id : false;

		if ( false !== $taxonomy && isset( self::$taxonomy[ $taxonomy ] ) ) {
			self::generate_buttons( self::$taxonomy[ $taxonomy ] );
			self::$taxonomy[ $taxonomy ] = array();
		}
		if ( false !== $id && isset( self::$screen_ids[ $id ] ) ) {
			self::generate_buttons( self::$screen_ids[ $id ] );
			self::$screen_ids[ $id ] = array();
		}

		if ( false !== $post_type && isset( self::$post_types[ $post_type ] ) ) {
			self::generate_buttons( self::$post_types[ $post_type ] );
			self::$post_types[ $post_type ] = array();
		}

		if ( ! empty( self::$output ) ) {
			wponion_localize()->add( 'wponion_page_actions', implode( ' ', self::$output ) );
			wponion_load_core_assets();
		}
	}

	/**
	 * @param $data
	 *
	 * @return array
	 */
	protected static function generate_buttons( $data ) {
		$output = array();
		if ( is_array( $data ) ) {
			foreach ( $data as $buttons ) {
				if ( is_string( $buttons ) ) {
					self::$output[] = $buttons;
				} elseif ( is_array( $buttons ) && ( isset( $buttons['label'] ) ) ) {
					$button  = wp_parse_args( $buttons, array(
						'tag'     => 'a',
						'class'   => 'page-title-action',
						'label'   => false,
						'tooltip' => false,
					) );
					$label   = isset( $button['label'] ) ? $button['label'] : false;
					$tag     = isset( $button['tag'] ) ? $button['tag'] : false;
					$tooltip = isset( $button['tooltip'] ) ? $button['tooltip'] : false;
					unset( $button['label'] );
					unset( $button['tag'] );
					unset( $button['tooltip'] );

					$button = '<' . $tag . ' ' . wponion_array_to_html_attributes( $button ) . '>' . $label . '</' . $tag . '>';
					if ( false !== $tooltip ) {
						$button = wponion_tooltip( $tooltip, $button );
					}
					self::$output[] = $button;
				} else {
					self::generate_buttons( $buttons );
				}
			}
		}
		return $output;
	}

	/**
	 * Adds A Button To Storage.
	 *
	 * @param $post_type
	 * @param $buttons
	 */
	public static function add( $post_type, $buttons ) {
		if ( is_array( $post_type ) ) {
			if ( isset( $post_type['taxonomy'] ) ) {
				if ( ! isset( self::$taxonomy[ $post_type['taxonomy'] ] ) ) {
					self::$taxonomy[ $post_type['taxonomy'] ] = array();
				}
				self::$taxonomy[ $post_type['taxonomy'] ][] = $buttons;
			}

			if ( isset( $post_type['screen_ids'] ) ) {
				if ( ! isset( self::$screen_ids[ $post_type['screen_ids'] ] ) ) {
					self::$screen_ids[ $post_type['screen_ids'] ] = array();
				}
				self::$screen_ids[ $post_type['screen_ids'] ][] = $buttons;
			}

			if ( isset( $post_type['post_types'] ) ) {
				if ( ! isset( self::$post_types[ $post_type['post_types'] ] ) ) {
					self::$post_types[ $post_type['post_types'] ] = array();
				}
				self::$post_types[ $post_type['post_types'] ][] = $buttons;
			}
		} else {
			self::$post_types[ $post_type ][] = $buttons;
		}

	}
}

Page_Actions::init();

