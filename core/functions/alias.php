<?php
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wpo_builder' ) ) {
	/**
	 * Alias Function
	 *
	 * @return \WPO\Builder
	 */
	function wpo_builder() {
		return wponion_builder();
	}
}

if ( ! function_exists( 'wpo_is' ) ) {
	/**
	 * @param        $instance
	 * @param string $type [builder|field|container|page|section|option]
	 *
	 * @return bool
	 */
	function wpo_is( $instance = false, $type = 'builder' ) {
		return wponion_is_instance( $instance, $type );
	}
}

if ( ! function_exists( 'wpo_is_option' ) ) {
	/**
	 * @param bool|\WPOnion\DB\Option $instance
	 *
	 * @return bool
	 */
	function wpo_is_option( $instance ) {
		return wpo_is( $instance, 'option' );
	}
}

if ( ! function_exists( 'wpo_is_field' ) ) {
	/**
	 * @param bool|\WPO\Field $instance
	 *
	 * @return bool
	 */
	function wpo_is_field( $instance = false ) {
		return wpo_is( $instance, 'field' );
	}
}

if ( ! function_exists( 'wpo_is_container' ) ) {
	/**
	 * @param bool|\WPO\Container $instance
	 *
	 * @return bool|mixed
	 */
	function wpo_is_container( $instance = false ) {
		return wpo_is( $instance, 'container' );
	}
}

if ( ! function_exists( 'wpo_container' ) ) {
	/**
	 * @param bool|string $slug
	 * @param bool|string $title
	 * @param bool|string $icon
	 *
	 * @return \WPO\Container
	 */
	function wpo_container( $slug = false, $title = false, $icon = false ) {
		return wponion_builder_container( $slug, $title, $icon );
	}
}

if ( ! function_exists( 'wpo_field' ) ) {
	/**
	 * @param bool|string|array $type
	 * @param bool|string|array $id
	 * @param bool|string|array $title
	 * @param array             $args
	 *
	 * @return false|\WPO\Field
	 */
	function wpo_field( $type = false, $id = false, $title = false, $args = array() ) {
		return wponion_builder_field( $type, $id, $title, $args );
	}
}

if ( ! function_exists( 'wpo_tooltip' ) ) {
	/**
	 * @param null  $content
	 * @param array $args
	 * @param bool  $element
	 * @param bool  $localize
	 *
	 * @return array|string|\WPOnion\Util
	 */
	function wpo_tooltip( $content = null, $args = array(), $element = false, $localize = true ) {
		return wponion_tooltip( $content, $args, $element, $localize );
	}
}

if ( ! function_exists( 'wpo_icon' ) ) {
	/**
	 * @param       $icon
	 * @param array $attrs
	 *
	 * @return string
	 * @uses \wponion_icon()
	 */
	function wpo_icon( $icon, $attrs = array() ) {
		return wponion_icon( $icon, $attrs );
	}
}

if ( ! function_exists( 'wpo_ajax' ) ) {
	/**
	 * @param array       $args
	 * @param bool|string $element
	 *
	 * @return string|\WPOnion\Util
	 * @uses \wponion_inline_ajax()
	 */
	function wpo_ajax( $args = array(), $element = false ) {
		return wponion_inline_ajax( $args, $element );
	}
}

if ( ! function_exists( 'wpo_image' ) ) {
	/**
	 * @param bool|string $src
	 * @param bool|string $full_src
	 * @param bool|string $element
	 *
	 * @return bool|string|\WPOnion\Util
	 * @uses \wponion_image_popup()
	 */
	function wpo_image( $src = false, $full_src = false, $element = false ) {
		return wponion_image_popup( $src, $full_src, $element );
	}
}
