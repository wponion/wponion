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
	 * @return false|\WPO\Fields\Accordion|\WPO\Fields\Background|\WPO\Fields\Button_Set|\WPO\Fields\Checkbox|\WPO\Fields\Color_Group|\WPO\Fields\Color_Picker|\WPO\Fields\Content|\WPO\Fields\Date_Picker|\WPO\Fields\Dimensions|\WPO\Field|\WPO\Fields\Fieldset|\WPO\Fields\Font_Picker|\WPO\Fields\Gallery|\WPO\Fields\Group|\WPO\Fields\Heading|\WPO\Fields\Icon_Picker|\WPO\Fields\Iframe|\WPO\Fields\Image|\WPO\Fields\Image_Select|\WPO\Fields\Input_Group|\WPO\Fields\Jambo_Content|\WPO\Fields\Key_Value|\WPO\Fields\Link_Color|\WPO\Fields\Notice|\WPO\Fields\Oembed|\WPO\Fields\Radio|\WPO\Fields\Select|\WPO\Fields\Sorter|\WPO\Fields\Spacing|\WPO\Fields\Subheading|\WPO\Fields\Switcher|\WPO\Fields\Text|\WPO\Fields\Textarea|\WPO\Fields\Typography|\WPO\Fields\Upload|\WPO\Fields\WP_Editor|\WPO\Fields\WP_Link|\WPO\Fields\WP_Notice
	 */
	function wponion_field_builder( $type = '', $id = false, $title = false, $args = array() ) {
		return WPO\Field::create( $type, $id, $title, $args );
	}
}
if ( ! function_exists( 'wponion_is_container' ) ) {
	/**
	 * Checks if given instance is  a \WPO\Fields\Container.
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
