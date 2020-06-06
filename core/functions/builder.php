<?php

use WPO\Builder;
use WPO\Container;
use WPO\Field;

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_builder' ) ) {
	/**
	 * Returns Builder Instance.
	 *
	 * @return \WPO\Builder
	 */
	function wponion_builder() {
		return new Builder();
	}
}

if ( ! function_exists( 'wponion_builder_container' ) ) {
	/**
	 * @param bool|string $slug
	 * @param bool|string $title
	 * @param bool|string $icon
	 *
	 * @return \WPO\Container
	 */
	function wponion_builder_container( $slug = false, $title = false, $icon = false ) {
		return new Container( $slug, $title, $icon );
	}
}

if ( ! function_exists( 'wponion_builder_field' ) ) {
	/**
	 * @param bool|string|array $type
	 * @param bool|string|array $id
	 * @param bool|string|array $title
	 * @param array             $args
	 *
	 * @return false|\WPO\Field
	 */
	function wponion_builder_field( $type = false, $id = false, $title = false, $args = array() ) {
		return Field::create( $type, $id, $title, $args );
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
