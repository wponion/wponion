<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Color_Picker
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Spacing extends Input_Group {
	/**
	 * Field's Custom Wrap Class.
	 *
	 * @return string
	 */
	protected function wrap_class() {
		return 'wponion-element-input_group';
	}

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$fields = array();
		$icons  = $this->default_icons();
		$titles = $this->default_title();
		$button = wpo_field( 'button', array(
			'id'          => 'showcasebutton',
			'button_type' => 'button',
			'class'       => 'button button-secondary',
		) )->horizontal( true );

		if ( false === $this->option( 'all' ) ) {
			$fields[] = $button;
		}

		$is_all_hidden  = ( empty( $this->value( 'all' ) ) ) ? 'hidden' : '';
		$is_rest_hidden = ( empty( $this->value( 'all' ) ) ) ? '' : 'hidden';

		if ( empty( $this->value( 'all' ) ) ) {
			$this->value['showcasebutton'] = '<i class="wpoic-collapse"></i>';
		} else {
			$this->value['showcasebutton'] = '<i class="wpoic-expand"></i>';
		}

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
					$fields[ $slug ]['wrap_class'] = wponion_html_class( $fields[ $slug ]['wrap_class'], 'wponion-spacing-input wponion-spacing-input-' . $slug . ' ' . $is_rest_hidden );
				}
			}
		}

		if ( false !== $this->option( 'all' ) ) {
			$is_all_hidden = '';
		}

		$defaults                    = array(
			'prefix'      => isset( $icons['all'] ) ? $icons['all'] : false,
			'placeholder' => __( 'All', 'wponion' ),
			'type'        => 'number',
		);
		$fields['all']               = ( true === $this->option( 'all' ) ) ? $defaults : $this->handle_args( 'placeholder', $this->option( 'all' ), $defaults );
		$fields['all']['wrap_class'] = ( isset( $fields['all']['wrap_class'] ) ) ? $fields['all']['wrap_class'] : array();
		$fields['all']['wrap_class'] = wponion_html_class( $fields['all']['wrap_class'], 'wponion-spacing-input wponion-spacing-input-all ' . $is_all_hidden );

		if ( false !== $this->option( 'unit' ) ) {
			if ( true === $this->option( 'unit' ) ) {
				$fields['unit'] = array(
					'type'    => 'select',
					'options' => $this->option( 'unit_options' ),
				);
			} else {
				$fields['unit'] = $this->parse_args( $this->option( 'unit' ), array(
					'options' => $this->option( 'unit_options' ),
					'type'    => 'select',
				) );
			}
		}

		$this->set_option( 'fields', $fields );
		return parent::output();
	}

	/**
	 * Returns Proper Field Slugs.
	 *
	 * @return array
	 */
	protected function field_slugs() {
		return array( 'top', 'bottom', 'left', 'right' );
	}

	/**
	 * Returns Default Title.
	 *
	 * @return array
	 */
	protected function default_title() {
		return array(
			'top'    => __( 'Top', 'wponion' ),
			'bottom' => __( 'Bottom', 'wponion' ),
			'left'   => __( 'Left', 'wponion' ),
			'right'  => __( 'Right', 'wponion' ),
			'unit'   => __( 'Unit', 'wponion' ),
		);
	}

	/**
	 * Returns Default Icons.
	 *
	 * @return array
	 */
	protected function default_icons() {
		return array(
			'top'    => '<i class="wpoic-arrow-up"></i>',
			'bottom' => '<i class="wpoic-arrow-down"></i>',
			'left'   => '<i class="wpoic-arrow-left"></i>',
			'right'  => '<i class="wpoic-arrow-right"></i>',
			'all'    => '<i class="wpoic-all-direction"></i>',
		);
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
		return array(
			'top'          => true,
			'bottom'       => true,
			'left'         => true,
			'right'        => true,
			'unit'         => true,
			'unit_options' => wponion_internal_options_data( 'css-units' ),
			'all'          => false,
			'icons'        => $this->default_icons(),
		);
	}
}
