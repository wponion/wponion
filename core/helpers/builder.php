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

if ( ! function_exists( 'wpo_container' ) ) {
	/**
	 * @param bool $slug
	 * @param bool $title
	 * @param bool $icon
	 *
	 * @return \WPO\Container
	 */
	function wpo_container( $slug = false, $title = false, $icon = false ) {
		return new \WPO\Container( $slug, $title, $icon );
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
		return WPO\Field::create( $type, $id, $title, $args );
	}
}
