<?php

if ( ! function_exists( 'wpo_builder' ) ) {
	/**
	 * Creates A New Builder Instance
	 *
	 * @return \WPO\Builder
	 * @uses \wponion_builder()
	 *
	 */
	function wpo_builder() {
		return wponion_builder();
	}
}

if ( ! function_exists( 'wpo_container' ) ) {
	/**
	 * @param bool $slug
	 * @param bool $title
	 * @param bool $icon
	 *
	 * @return \WPO\Container
	 */
	function wpo_container( $slug = false, $title = false, $icon = false ) {
		return wponion_container_builder( $slug, $title, $icon );
	}
}

if ( ! function_exists( 'wpo_field' ) ) {
	/**
	 * @param bool  $type
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 *
	 * @return false|\WPO\Field|\WPO\Fields\Accordion|\WPO\Fields\Background|\WPO\Fields\Button_Set|\WPO\Fields\Checkbox|\WPO\Fields\Color_Group|\WPO\Fields\Color_Picker|\WPO\Fields\Content|\WPO\Fields\Date_Picker|\WPO\Fields\Dimensions|\WPO\Fields\Fieldset|\WPO\Fields\Font_Picker|\WPO\Fields\Gallery|\WPO\Fields\Group|\WPO\Fields\Heading|\WPO\Fields\Icon_Picker|\WPO\Fields\Iframe|\WPO\Fields\Image|\WPO\Fields\Image_Select|\WPO\Fields\Input_Group|\WPO\Fields\Jambo_Content|\WPO\Fields\Key_Value|\WPO\Fields\Link_Color|\WPO\Fields\Notice|\WPO\Fields\Oembed|\WPO\Fields\Radio|\WPO\Fields\Select|\WPO\Fields\Sorter|\WPO\Fields\Spacing|\WPO\Fields\Subheading|\WPO\Fields\Switcher|\WPO\Fields\Text|\WPO\Fields\Textarea|\WPO\Fields\Typography|\WPO\Fields\Upload|\WPO\Fields\WP_Editor|\WPO\Fields\WP_Link|\WPO\Fields\WP_Notice
	 */
	function wpo_field( $type = false, $id = false, $title = false, $args = array() ) {
		return wponion_field_builder( $type, $id, $title, $args );
	}
}

if ( ! function_exists( 'wpo_is' ) ) {
	/**
	 * @param bool   $instance
	 * @param string $type
	 *
	 * @return bool
	 */
	function wpo_is( $instance = false, $type = 'builder' ) {
		return wponion_is_builder( $instance, $type );
	}
}

if ( ! function_exists( 'wpo_is_field' ) ) {
	/**
	 * @param bool $instance
	 *
	 * @return bool
	 */
	function wpo_is_field( $instance = false ) {
		return wpo_is( $instance, 'field' );
	}
}

if ( ! function_exists( 'wpo_is' ) ) {
	/**
	 * @param bool $instance
	 *
	 * @return bool|mixed
	 */
	function wpo_is_container( $instance = false ) {
		return wpo_is( $instance, 'container' );
	}
}

if ( ! function_exists( 'wpo_help' ) ) {
	/**
	 * @param null  $content
	 * @param array $args
	 * @param bool  $element
	 * @param bool  $localize
	 *
	 * @return array|string|\WPOnion\Util
	 * @uses \wponion_tooltip()
	 */
	function wpo_help( $content = null, $args = array(), $element = false, $localize = true ) {
		return wponion_tooltip( $content, $args, $element, $localize );
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
		return wpo_help( $content, $args, $element, $localize );
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
