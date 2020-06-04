<?php

namespace WPOnion\Bridge\Field;

use \WPOnion\Registry\Field_Types;

defined( 'ABSPATH' ) || exit;

/**
 * Class Wrapper
 *
 * @package WPOnion\Bridge\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Wrapper extends Value {
	/**
	 * Generates Final Field Wrap HTML Class.
	 *
	 * @return string
	 * @since 1.5
	 * @internal
	 */
	protected function _wrap_class() {
		$user_class = $this->option( 'wrap_class' );
		$type       = $this->option( 'type' );
		$defaults   = array(
			'wponion-element',
			'wponion-element-' . $type,
			'wponion-field-' . $type,
			'wponion-element-type-' . $type,
			'wponion-field-type-' . $type,
			( $this->has_errors() ) ? ' wponion-element-has-error ' : '',
			( $this->option( 'pseudo' ) ) ? ' wponion-pseudo-field ' : '',
			( $this->option( 'debug' ) ) ? 'wponion-field-debug' : '',
			( $this->option( 'js_validate' ) ) ? 'wponion-js-validate' : '',
			( $this->option( 'horizontal' ) ) ? 'horizontal' : '',
			( Field_Types::design_exists( $this->element_type() ) ) ? 'ui-field wponion-ui-field' : '',
			( ! $this->option( 'title' ) ) ? 'wponion-element-no-title wponion-field-no-title' : '',
			( ! empty( $this->option( 'fields' ) ) ) ? 'wponion-has-nested-fields' : '',
			( false !== $this->option( 'dependency' ) ) ? 'wponion-has-dependency' : '',
			( false !== $this->option( 'badge' ) ) ? 'wponion-has-badge' : '',
			( false !== $this->option( 'wrap_tooltip' ) ) ? 'wponion-has-wrap-tooltip wponion-wrap-tooltip' : '',
		);
		$wrap_class = wponion_html_class( $user_class, wponion_html_class( $this->wrap_class(), $defaults, false ) );
		$wrap_class .= ( false === wponion_has_column_class( $wrap_class ) ) ? ' wpo-col-xs-12' : '';
		return $wrap_class;
	}

	/**
	 * Generates Final Wrap HTML Attributes.
	 *
	 * @return string
	 * @since 1.5
	 * @internal
	 */
	protected function _wrap_attributes() {
		$defaults = array(
			'data-wponion-jsid'       => $this->js_field_id(),
			'data-wponion-field-type' => $this->option( 'type' ),
			'class'                   => $this->_wrap_class(),
			'id'                      => $this->wrap_id(),
		);

		if ( false !== $this->option( 'wrap_tooltip' ) ) {
			$tooltip  = $this->tooltip_data( $this->option( 'wrap_tooltip' ), array(), 'wrap_tooltip' );
			$defaults = $this->parse_args( $tooltip['attr'], $defaults );
		}

		$wrap_attr = $this->parse_args( $this->wrap_attributes(), $defaults );
		$wrap_attr = $this->parse_args( $this->option( 'wrap_attributes', array() ), $wrap_attr );
		//var_dump( $wrap_attr );
		$this->set_option( 'wrap_attributes', $wrap_attr );
		return $this->option( 'wrap_attributes' );
	}

	/**
	 * Provides a hook able function for fields.
	 *
	 * @return string|array
	 * @since 1.5
	 */
	public function wrap_attributes() {
		return array();
	}

	/**
	 * Provides a hook able function for fields.
	 *
	 * @return string|array
	 * @since 1.5
	 */
	protected function wrap_class() {
		return '';
	}

	/**
	 * Returns A Valid Wrap ID.
	 *
	 * @return string
	 */
	protected function wrap_id() {
		if ( ! empty( $this->option( 'wrap_attributes/id' ) ) ) {
			return $this->option( 'wrap_attributes/id' );
		}
		return ( ! empty( $this->option( 'wrap_id' ) ) ) ? $this->option( 'wrap_id' ) : $this->js_field_id();
	}
}
