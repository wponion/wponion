<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\Dimensions' ) ) {
	/**
	 * Class Dimensions
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Dimensions extends Input_Group {

		/**
		 * Field's Custom Wrap Class.
		 *
		 * @return string
		 */
		protected function field_wrap_class() {
			return ' wponion-element-spacing wponion-element-input_group' . parent::field_wrap_class();
		}

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			$fields = array();
			$icons  = $this->default_icons();
			$titles = $this->default_title();

			if ( false === $this->data( 'all' ) ) {
				foreach ( $this->field_slugs() as $slug ) {
					if ( false !== $this->data( $slug ) ) {
						$defaults                      = array(
							'type'        => 'number',
							'prefix'      => isset( $icons[ $slug ] ) ? $icons[ $slug ] : false,
							'placeholder' => isset( $titles[ $slug ] ) ? $titles[ $slug ] : false,
						);
						$fields[ $slug ]               = ( true === $this->data( $slug ) ) ? $defaults : $this->handle_args( 'placeholder', $this->data( $slug ), $defaults );
						$fields[ $slug ]['wrap_class'] = ( isset( $fields[ $slug ]['wrap_class'] ) ) ? $fields[ $slug ]['wrap_class'] : array();
						$fields[ $slug ]['wrap_class'] = wponion_html_class( $fields[ $slug ]['wrap_class'], 'wponion-spacing-input wponion-spacing-input-' . $slug );
					}
				}
			}

			if ( false !== $this->data( 'unit' ) ) {
				if ( true === $this->data( 'unit' ) ) {
					$fields['unit'] = array(
						'type'    => 'select',
						'options' => $this->data( 'unit_options' ),
					);
				} else {
					$fields['unit'] = $this->parse_args( $this->data( 'unit' ), array(
						'options' => $this->data( 'unit_options' ),
						'type'    => 'select',
					) );
				}
			}

			$this->field['fields'] = $fields;
			echo parent::output();
		}

		/**
		 * Returns Default Icons.
		 *
		 * @return array
		 */
		protected function default_icons() {
			return array(
				'height' => __( 'Height', 'wponion' ),
				'width'  => __( 'Width', 'wponion' ),
			);
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
			return array( 'width', 'height' );
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'width'        => true,
				'height'       => true,
				'unit'         => true,
				'unit_options' => array(
					'px' => 'px',
					'%'  => '%',
					'em' => 'em',
				),
				'icons'        => $this->default_icons(),
			);
		}
	}
}
