<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\Spacing' ) ) {
	/**
	 * Class Color_Picker
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Spacing extends Input_Group {

		/**
		 * Field's Custom Wrap Class.
		 *
		 * @return string
		 */
		protected function field_wrap_class() {
			return 'wponion-element-input_group';
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

			$button = wpo_field( 'button', array(
				'id'          => 'showcasebutton',
				'button_type' => 'button',
				'class'       => 'button button-secondary',
			) )->horizontal( true );

			if ( false === $this->data( 'all' ) ) {
				$fields[] = $button;
			}

			$is_all_hidden  = ( empty( $this->value( 'all' ) ) ) ? 'hidden' : '';
			$is_rest_hidden = ( empty( $this->value( 'all' ) ) ) ? '' : 'hidden';
			if ( empty( $this->value( 'all' ) ) ) {
				$this->value['showcasebutton'] = '<i class="wpoic-collapse"></i>';
			} else {
				$this->value['showcasebutton'] = '<i class="wpoic-expand"></i>';
			}

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
						$fields[ $slug ]['wrap_class'] = wponion_html_class( $fields[ $slug ]['wrap_class'], 'wponion-spacing-input wponion-spacing-input-' . $slug . ' ' . $is_rest_hidden );
					}
				}
			}

			if ( false !== $this->data( 'all' ) ) {
				$is_all_hidden = '';
			}

			$defaults                    = array(
				'prefix'      => isset( $icons['all'] ) ? $icons['all'] : false,
				'placeholder' => __( 'All', 'wponion' ),
				'type'        => 'number',
			);
			$fields['all']               = ( true === $this->data( 'all' ) ) ? $defaults : $this->handle_args( 'placeholder', $this->data( 'all' ), $defaults );
			$fields['all']['wrap_class'] = ( isset( $fields['all']['wrap_class'] ) ) ? $fields['all']['wrap_class'] : array();
			$fields['all']['wrap_class'] = wponion_html_class( $fields['all']['wrap_class'], 'wponion-spacing-input wponion-spacing-input-all ' . $is_all_hidden );

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
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
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
		protected function field_default() {
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
}
