<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! function_exists( 'wponion_timer' ) ) {
	/**
	 * @param string $key Unique Timer Key.
	 * @param bool   $stop true / false
	 * @param int    $precision
	 *
	 * @return bool|string
	 */
	function wponion_timer( $key = '', $stop = false, $precision = 3 ) {
		return ( false === $stop ) ? \WPOnion\Helper::timer_start( $key ) : \WPOnion\Helper::timer_stop( $key, $precision );
	}
}

if ( ! function_exists( 'wponion_icon' ) ) {
	/**
	 * Checks and returns icon html + load the required icon font.
	 *
	 * @param        $icon
	 * @param string $xtra_attrs
	 *
	 * @return string
	 */
	function wponion_icon( $icon, $xtra_attrs = '' ) {
		return ( ! empty( $icon ) ) ? '<i class="' . $icon . ' wponion-icon" ' . wponion_array_to_html_attributes( $xtra_attrs ) . '> </i>' : '';
	}
}

if ( ! function_exists( 'wponion_tooltip' ) ) {
	/**
	 * @param bool  $content
	 * @param array $args
	 * @param bool  $element
	 * @param bool  $localize
	 *
	 * @return array|string||\WPOnion\Utils\Util
	 */
	function wponion_tooltip( $content = false, $args = array(), $element = false, $localize = true ) {
		if ( is_array( $content ) && ! empty( $args ) && is_string( $args ) ) {
			$element = $args;
			$args    = $content;
			$content = ( isset( $args['content'] ) ) ? $args['content'] : null;
		} elseif ( is_array( $content ) && empty( $args ) ) {
			$args    = $content;
			$content = ( isset( $args['content'] ) ) ? $args['content'] : null;
			$element = ( isset( $args['element'] ) ) ? $args['element'] : null;
		} elseif ( is_string( $content ) && is_array( $args ) ) {
			if ( isset( $args['element'] ) ) {
				$element = $args['element'];
			}
		} elseif ( is_string( $content ) && is_string( $args ) ) {
			$element = $args;
			$args    = array();
		}
		unset( $args['content'] );
		unset( $args['element'] );
		$instance = new \WPOnion\Utils\Util( $element, false );
		return $instance->tooltip( $content, $args, $localize );
	}
}

if ( ! function_exists( 'wponion_tooltip_faq' ) ) {
	/**
	 * Creates FAQ View in Tooltip.
	 *
	 * @param bool  $content
	 * @param array $args
	 * @param bool  $element
	 * @param bool  $localize
	 *
	 * @return array|string
	 */
	function wponion_tooltip_faq( $content = false, $args = array(), $element = false, $localize = true ) {
		$args = ( ! is_array( $args ) ) ? array() : $args;

		$args['interactive'] = true;
		$args['theme']       = 'light-border dropdown';
		$args['trigger']     = 'click';
		return wponion_tooltip( $content, $args, $element, $localize );
	}
}

if ( ! function_exists( 'wponion_inline_ajax' ) ) {
	/**
	 * @param array  $args
	 * @param string $element
	 *
	 * @return string|\WPOnion\Utils\Util
	 */
	function wponion_inline_ajax( $args = array(), $element = '' ) {
		$instance = new \WPOnion\Utils\Util( $element, false );
		return $instance->inline_ajax( $args );
	}
}

if ( ! function_exists( 'wponion_image_popup' ) ) {
	/**
	 * @param string      $image_src
	 * @param bool|string $full_size
	 * @param bool|string $element
	 *
	 * @return string|bool|\WPOnion\Utils\Util
	 */
	function wponion_image_popup( $image_src = '', $full_size = false, $element = false ) {
		$instance = new \WPOnion\Utils\Util( $element );
		return $instance->image_popup( $image_src, $full_size, $element );
	}
}
