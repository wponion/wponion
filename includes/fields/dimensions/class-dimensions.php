<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Dimensions
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Dimensions extends Input_Group {
	/**
	 * Field's Custom Wrap Class.
	 *
	 * @return string
	 */
	protected function wrap_class() {
		return ' wponion-element-spacing wponion-element-input_group';
	}

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$fields = array();
		$icons  = $this->default_icons();
		$titles = $this->default_title();
		$unit   = $this->option( 'unit' );

		if ( false === $this->option( 'all' ) ) {
			foreach ( $this->field_slugs() as $slug ) {
				if ( false !== $this->option( $slug ) ) {
					$defaults                      = array(
						'type'        => 'number',
						'prefix'      => isset( $icons[ $slug ] ) ? $icons[ $slug ] : false,
						'placeholder' => isset( $titles[ $slug ] ) ? $titles[ $slug ] : false,
					);
					$fields[ $slug ]               = ( true === $this->option( $slug ) ) ? $defaults : $this->handle_args( 'placeholder', $this->option( $slug ), $defaults );
					$fields[ $slug ]['wrap_class'] = ( isset( $fields[ $slug ]['wrap_class'] ) ) ? $fields[ $slug ]['wrap_class'] : array();
					$fields[ $slug ]['wrap_class'] = wponion_html_class( $fields[ $slug ]['wrap_class'], 'wponion-spacing-input wponion-spacing-input-' . $slug );
				}
			}
		}

		if ( false !== $unit ) {
			$_arg           = array(
				'type'    => 'select',
				'options' => $this->option( 'unit_options' ),
			);
			$fields['unit'] = ( true === $unit ) ? $_arg : $this->parse_args( $unit, $_arg );
		}

		$this->set_option( 'fields', $fields );
		return parent::output();
	}

	/**
	 * Returns Default Icons.
	 *
	 * @return array
	 */
	protected function default_icons() {
		return $this->default_title();
	}

	/**
	 * Returns Default Title.
	 *
	 * @return array
	 */
	protected function default_title() {
		return array(
			'height' => __( 'Height', 'wponion' ),
			'width'  => __( 'Width', 'wponion' ),
		);
	}

	/**
	 * @return array
	 */
	protected function field_slugs() {
		return array_keys( $this->default_title() );
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'width'        => true,
			'height'       => true,
			'unit'         => true,
			'unit_options' => wponion_internal_options_data( 'css-units' ),
			'icons'        => $this->default_icons(),
		);
	}
}
