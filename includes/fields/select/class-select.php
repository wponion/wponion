<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Select
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Select extends Field {
	/**
	 * select_framework
	 *
	 * @var null
	 */
	protected $select_framework = null;

	/**
	 * Generates Final HTML Output.
	 *
	 * @return string
	 */
	protected function output() {
		$options      = $this->option( 'options' );
		$options_html = $this->option( 'options_html' );

		if ( true === $this->option( 'ajax' ) && ! empty( $this->value ) && wponion_is_callable( $options ) ) {
			$options = wponion_callback( $options, array( $this ) );
		} elseif ( ! $this->option( 'ajax' ) && wponion_is_callable( $options ) ) {
			$options = wponion_callback( $options, array( $this ) );
		}

		$options = ( wponion_is_array( $options ) ) ? $options : array_filter( $this->element_data( $options ) );
		$attr    = $this->attributes( array(
			'name'  => ( true === $this->has( 'multiple' ) ) ? $this->name( '[]' ) : $this->name(),
			'class' => array( 'form-control wponion-select-control' ),
		) );

		$element = '';
		if ( $options_html && ! empty( $options_html ) ) {
			$element .= $options_html;
		} else {
			$element .= ( true === $this->option( 'empty_option' ) ) ? '<option value=""></option>' : '';
			foreach ( $options as $key => $option ) {
				if ( wponion_is_array( $option ) && ! isset( $option['label'] ) ) {
					$element .= "<optgroup label=\"${key}\">";
					foreach ( $option as $k => $v ) {
						$element .= $this->option_tag( $this->handle_options( $k, $v, array(), false ) );
					}
					$element .= '</optgroup>';
				} else {
					$element .= $this->option_tag( $this->handle_options( $key, $option, array(), false ) );
				}
			}
		}

		$this->html( wponion_input_group_html( $this->option( 'prefix' ), $this->option( 'surfix' ), "<select ${attr}>${element}</select>" ) );

		if ( ! $this->select_framework && $this->option( 'ajax' ) ) {
			$this->html( wponion_add_element( array(
				'type'    => 'wp_notice_error',
				'before'  => '<br/>',
				'large'   => true,
				'alt'     => true,
				'content' => __( 'Ajax Search Will Not Work In Select Field If Not Javascript Select Framework Used Such As <code>Select2</code> / <code>Chosen</code> / <code>Selectize</code>', 'wponion' ),
			) ) );
		}

		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * Handles Option array.
	 *
	 * @param $data
	 *
	 * @return string
	 */
	protected function option_tag( $data ) {
		$data['attributes']['value'] = $data['key'];
		$attr                        = wponion_array_to_html_attributes( $data['attributes'] );
		$label                       = $data['label'];
		$checked                     = $this->checked( $this->value(), $data['key'], 'selected' );
		return "<option ${attr} ${checked}>${label}</option>";
	}

	/**
	 * Checks & Updat fields args based on field config.
	 */
	protected function handle_arguments() {
		if ( $this->option( 'multiple' ) ) {
			$this->set_option( 'attributes/multiple', 'multiple' );
		}

		$this->set_option_default( 'attributes/class', array() );
		$this->select_framework = wponion_validate_select_framework( $this->settings );
		$class                  = wponion_html_class( $this->option( 'attributes/class' ), wponion_select_classes( $this->select_framework ), false );
		$this->set_option( 'attributes/class', $class );
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
		return array(
			'options'      => array(),
			'multiple'     => false,
			'empty_option' => false,
			'ajax'         => false,
			'prefix'       => '',
			'surfix'       => '',
		);
	}

	/**
	 * @return array
	 */
	protected function js_args() {
		return array(
			$this->select_framework => ( wponion_is_array( $this->option( $this->select_framework ) ) ) ? $this->option( $this->select_framework ) : array(),
			'ajax'                  => ( true === $this->option( 'ajax' ) ) ? array(
				'query_args'  => ( is_array( $this->option( 'query_args' ) ) && ! empty( $this->option( 'query_args' ) ) ) ? $this->option( 'query_args' ) : array(),
				'option_type' => ( ! empty( $this->option( 'options' ) ) ) ? $this->option( 'options' ) : false,
			) : false,
		);
	}

	/**
	 * Handles Fields Assets.
	 *
	 * @return mixed|void
	 */
	public function assets() {
		wponion_load_asset( $this->select_framework );
	}
}
