<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Sorter
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Sorter extends Field {
	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$value      = $this->get_element_values();
		$wrap_class = ( ! empty( $value['enabled'] ) && ! empty( $value['disabled'] ) ) ? 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-6 wpo-col-lg-6 wpo-col-xl-6' : 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-6';

		$this->html( '<div class="wpo-row">' );

		if ( false !== $value['enabled'] && is_array( $value['enabled'] ) ) {
			$this->html( "<div class=\"wponion-modules ${wrap_class}\">" );
			if ( ! empty( $this->option( 'enabled_title' ) ) ) {
				$this->html( $this->sub_field( array(
					'type'    => 'subheading',
					'content' => $this->option( 'enabled_title' ),
				), null, null ) );
			}

			$this->html( '<ul class="wponion-enabled">' );
			if ( ! empty( $value ['enabled'] ) ) {
				foreach ( $value ['enabled'] as $id => $_name ) {
					$name = $this->name( "[enabled][${id}]" );
					$this->html( "<li><input type=\"hidden\" name=\"${name}\" value=\"${_name}\"/><label>${_name}</label></li>" );
				}
			}
			$this->html( '</ul></div>' );
		}

		if ( false !== $value['disabled'] && is_array( $value['disabled'] ) ) {
			$this->html( "<div class=\"wponion-modules  ${wrap_class}\">" );
			if ( ! empty( $this->option( 'disabled_title' ) ) ) {
				$this->html( $this->sub_field( array(
					'type'    => 'subheading',
					'content' => $this->option( 'disabled_title' ),
				), null, null ) );
			}

			$this->html( '<ul class="wponion-disabled">' );
			if ( ! empty( $value ['disabled'] ) ) {
				foreach ( $value ['disabled'] as $id => $_name ) {
					$name = $this->name( "[disabled][${id}]" );
					$this->html( "<li><input type=\"hidden\" name=\"${name}\" value=\"${_name}\"/><label>${_name}</label></li>" );
				}
			}
			$this->html( '</ul> </div>' );
		}

		$this->html( '</div>' );

		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * @return array|mixed|string
	 */
	public function get_element_values() {
		$defaults = $this->option( 'options' );
		if ( empty( $this->value() ) ) {
			return $defaults;
		}
		$saved = wp_parse_args( $this->value(), array(
			'enabled'  => array(),
			'disabled' => array(),
		) );
		if ( isset( $defaults['enabled'] ) && is_array( $defaults['enabled'] ) ) {
			foreach ( $defaults['enabled'] as $i => $val ) {
				if ( isset( $saved['enabled'][ $i ] ) === false && isset( $saved['disabled'][ $i ] ) === false ) {
					$saved['disabled'][ $i ] = $val;
				}
			}
		} else {
			$saved['enabled'] = false;
		}

		if ( isset( $defaults['disabled'] ) && is_array( $defaults['disabled'] ) ) {
			foreach ( $defaults['disabled'] as $i => $val ) {
				if ( isset( $saved['enabled'][ $i ] ) === false && isset( $saved['disabled'][ $i ] ) === false ) {
					$saved['disabled'][ $i ] = $val;
				}
			}
		} else {
			$saved['disabled'] = false;
		}
		return $saved;
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'options'        => array(),
			'enabled_title'  => __( 'Enabled Modules', 'wponion' ),
			'disabled_title' => __( 'Disabled Modules', 'wponion' ),
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
		wp_enqueue_script( 'jquery-ui-sortable' );
	}
}

