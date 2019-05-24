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

if ( ! function_exists( 'wponion_tooltip' ) ) {
	/**
	 * @param bool  $content
	 * @param array $args
	 * @param bool  $element
	 * @param bool  $localize
	 *
	 * @return array|string
	 */
	function wponion_tooltip( $content = false, $args = array(), $element = false, $localize = true ) {
		if ( is_array( $content ) && ! empty( $args ) && is_string( $args ) ) {
			if ( false === isset( $content['content'] ) || isset( $content['content'] ) && empty( $content['content'] ) ) {
				$_content = $args;
				$args     = $content;
				$content  = $_content;
			} else {
				$element = $args;
				$args    = $content;
				$content = null;
			}
		} elseif ( is_array( $content ) && empty( $args ) ) {
			$args    = $content;
			$content = null;
		}

		$args        = wp_parse_args( $args, array(
			'content'     => $content,
			'image'       => false,
			'arrow'       => true,
			'arrowType'   => 'round',
			'js_field_id' => false,
			'element'     => $element,
			'placement'   => 'top',
		) );
		$js_field_id = $args['js_field_id'];
		$element     = $args['element'];
		unset( $args['js_field_id'] );
		unset( $args['element'] );

		if ( false === $args['image'] && true === wponion_is_url( $args['content'] ) ) {
			$args['image']   = $args['content'];
			$args['content'] = false;
		}

		$attr = array( 'wponion-help' => 'wponion-help' );

		if ( false !== $localize ) {
			$localize = ( true === $localize ) ? 'wponion-help' : $localize;
			$localize = ( false !== $element ) ? md5( $element ) : $localize;
			if ( empty( $js_field_id ) ) {
				$js_field_id = 'wpo' . wponion_hash_string( $element . microtime( true ) );
			}
			$attr['data-wponion-tooltip-id'] = $localize;
			wponion_localize()->add( $js_field_id, array( $localize => $args ) );
		} else {
			$attr['data-tippy'] = $args['content'];
		}

		if ( false === $element ) {
			return array(
				'attr' => $attr,
				'data' => $args,
			);
		}
		$attr['data-wponion-jsid'] = $js_field_id;
		preg_match_all( '/^(.?)<[a-z][a-z0-9]*?\b/s', $element, $matches, PREG_SET_ORDER, 0 );
		if ( isset( $matches[0][0] ) ) {
			return str_replace( $matches[0][0], $matches[0][0] . ' ' . wponion_array_to_html_attributes( $attr ) . ' ', $element );
		}
		return $element;
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
		if ( ! is_array( $args ) ) {
			$args = array();
		}

		$args['interactive'] = true;
		$args['theme']       = 'light-border dropdown';
		$args['trigger']     = 'click';

		return wponion_tooltip( $content, $args, $element, $localize );
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
		return ( ! empty( $icon ) ) ? '<i class="' . $icon . ' wponion-icon" ' . $xtra_attrs . '> </i>' : '';
	}
}

if ( ! function_exists( 'wponion_inline_ajax' ) ) {
	/**
	 * @param array  $args
	 * @param string $element
	 *
	 * @return string
	 */
	function wponion_inline_ajax( $args = array(), $element = '' ) {
		$args = wp_parse_args( $args, array(
			'method'      => 'post',
			'url'         => admin_url( 'admin-ajax.php' ),
			'part_url'    => false,
			'data'        => array(),
			'success'     => false,
			'error'       => false,
			'always'      => false,
			'js_field_id' => false,
			'element'     => $element,
		) );

		$element   = $args['element'];
		$jsid      = $args['js_field_id'];
		$jsid      = ( empty( $jsid ) ) ? 'wpo' . wponion_hash_string( wponion_hash_array( $args ) . microtime( true ) ) : $jsid;
		$unique_id = 'wpoajax' . $jsid;
		unset( $args['button'] );
		unset( $args['js_field_id'] );
		wponion_localize()->add( $unique_id, array( 'inline_ajax' => $args ) );
		if ( ! empty( $element ) ) {
			$element = preg_replace( '/<a (.+?)>/i', "<a $1 data-wponion-inline-ajax='" . $unique_id . "'>", $element );
			return preg_replace( '/<button (.+?)>/i', "<button $1  data-wponion-inline-ajax='" . $unique_id . "'>", $element );
		}
		return $unique_id;
	}
}
