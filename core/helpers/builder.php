<?php

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! function_exists( 'wponion_builder' ) ) {
	/**
	 * Returns A New Builder Instance.
	 *
	 * @return \WPO\Builder
	 */
	function wponion_builder() {
		return new WPO\Builder();
	}
}

if ( ! function_exists( 'wponion_field_builder' ) ) {
	/**
	 * Returns A New Field Builder Instance.
	 *
	 * @param string $type
	 * @param bool   $id
	 * @param bool   $title
	 * @param array  $args
	 *
	 * @return false|\WPO\Accordion|\WPO\Background|\WPO\Button_Set|\WPO\Checkbox|\WPO\Color_Group|\WPO\Color_Picker|\WPO\Content|\WPO\Date_Picker|\WPO\Dimensions|\WPO\Field|\WPO\Fieldset|\WPO\Font_Picker|\WPO\Gallery|\WPO\Group|\WPO\Heading|\WPO\Icon_Picker|\WPO\Iframe|\WPO\Image|\WPO\Image_Select|\WPO\Input_Group|\WPO\Jambo_Content|\WPO\Key_Value|\WPO\Link_Color|\WPO\Notice|\WPO\Oembed|\WPO\Radio|\WPO\Select|\WPO\Sorter|\WPO\Spacing|\WPO\Subheading|\WPO\Switcher|\WPO\Text|\WPO\Textarea|\WPO\Typography|\WPO\Upload|\WPO\WP_Editor|\WPO\WP_Link|\WPO\WP_Notice
	 */
	function wponion_field_builder( $type = '', $id = false, $title = false, $args = array() ) {
		return WPO\Field::create( $type, $id, $title, $args );
	}
}
if ( ! function_exists( 'wponion_is_container' ) ) {
	/**
	 * Checks if given instance is  a \WPO\Container.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_is_container( $instance ) {
		return wponion_is_builder( $instance, 'container' );
	}
}

if ( ! function_exists( 'wponion_is_builder' ) ) {
	/**
	 * Checks if given builder is a instance of any in below
	 *
	 * @param        $builder
	 * @param string $type
	 *
	 * @return bool
	 * @see \WPO\Builder
	 * @see \WPO\Container
	 * @see \WPO\Field
	 */
	function wponion_is_builder( $builder, $type = 'builder' ) {
		switch ( strtolower( $type ) ) {
			case 'builder':
			case 'build':
				return ( $builder instanceof \WPO\Builder );
				break;
			case 'container':
			case 'page':
			case 'section':
				return ( $builder instanceof \WPO\Container );
				break;
			case 'field':
				return ( $builder instanceof \WPO\Field );
				break;
		}
		return false;
	}
}
