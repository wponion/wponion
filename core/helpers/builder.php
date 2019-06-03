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

if ( ! function_exists( 'wponion_container_builder' ) ) {
	/**
	 * Creates WPOnion Container Builder Instance.
	 *
	 * @param bool $slug
	 * @param bool $title
	 * @param bool $icon
	 *
	 * @return \WPO\Container
	 */
	function wponion_container_builder( $slug = false, $title = false, $icon = false ) {
		return new \WPO\Container( $slug, $title, $icon );
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
	 * @return false|\WPO\Field
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
	 * @todo remove
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
