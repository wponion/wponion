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

if ( ! function_exists( 'wponion_is' ) ) {
	/**
	 * Checks if given builder is a instance of any in below
	 *
	 * @param bool|\WPO\Container|\WPO\Builder|\WPO\Field|\WPOnion\DB\Option $builder
	 * @param string                                                         $type
	 *
	 * @return bool
	 */
	function wponion_is( $builder, $type = 'builder' ) {
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
			case 'option':
				return ( $builder instanceof \WPOnion\DB\Option );
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

if ( ! function_exists( 'wponion_builder_export' ) ) {
	/**
	 * @param \WPO\Field|\WPO\Container|\WPO\Builder $instance
	 *
	 * @return string
	 */
	function wponion_builder_export( $instance ) {
		return base64_encode( serialize( $instance ) );
	}
}

if ( ! function_exists( 'wponion_builder_import' ) ) {
	/**
	 * @param string $instance
	 *
	 * @return \WPO\Field|\WPO\Container|\WPO\Builder|bool
	 */
	function wponion_builder_import( $instance ) {
		$instance = unserialize( base64_decode( $instance ) );
		if ( wpo_is( $instance ) || wpo_is_field( $instance ) || wpo_is_container( $instance ) ) {
			return $instance;
		}
		return false;
	}
}
