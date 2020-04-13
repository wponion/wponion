<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Icon_Picker' ) ) {
	/**
	 * Class Icon_Picker
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Icon_Picker extends Field {

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			echo $this->render_input();
			echo $this->render_value();
			echo $this->render_buttons();
			echo $this->after();
		}

		/**
		 * Renders It Sub Field INPUT.
		 *
		 * @return mixed
		 */
		protected function render_input() {
			return $this->sub_field( array(
				'type'       => 'text',
				'only_field' => true,
				'class'      => ( $this->has( 'show_input' ) ) ? 'wponion-icon-picker-input' : 'wponion-icon-picker-input hidden',
			), $this->value(), $this->name() );
		}

		/**
		 * Renders Icon HTML.
		 *
		 * @return string
		 */
		protected function render_value() {
			return '<span class="wponion-icon-preview">' . wponion_icon( $this->value() ) . '</span>';
		}

		/**
		 * Returns all required values to use in js.
		 *
		 * @return array
		 */
		protected function js_field_args() {
			$tooltip = ( false === $this->data( 'icon_tooltip' ) ) ? 'false' : $this->data( 'icon_tooltip' );
			return array(
				'popup_tooltip' => $tooltip,
				'enabled'       => $this->data( 'enabled' ),
				'disabled'      => $this->data( 'disabled' ),
				'group_icons'   => $this->data( 'group_icons' ),
			);
		}

		/**
		 * Renders IT Subfield buttons.
		 *
		 * @return mixed|string
		 */
		protected function render_buttons() {
			$html = $this->sub_field( $this->handle_args( 'label', $this->data( 'add_button' ), array(
				'class'       => array( 'button', 'button-primary' ),
				'type'        => 'button',
				'attributes'  => array(
					'data-wponion-jsid'           => $this->js_field_id(),
					'data-wponion-iconpicker-add' => 'yes',
				),
				'only_field'  => true,
				'button_type' => 'button',
				'label'       => __( 'Add Icon', 'wponion' ),
			) ), false, $this->unique() );

			$html .= $this->sub_field( $this->handle_args( 'label', $this->data( 'remove_button' ), array(
				'class'       => array( 'button button-secondary' ),
				'type'        => 'button',
				'attributes'  => array(
					'data-wponion-jsid'              => $this->js_field_id(),
					'data-wponion-iconpicker-remove' => 'yes',
				),
				'only_field'  => true,
				'button_type' => 'button',
				'label'       => __( 'Remove Icon', 'wponion' ),
			) ), false, $this->unique() );

			return $html;
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'add_button'    => __( 'Add Icon', 'wponion' ),
				'remove_button' => __( 'Remove Icon', 'wponion' ),
				'show_input'    => true,
				'icon_tooltip'  => array(
					'placement' => 'bottom',
					'arrow'     => true,
				),
				'enabled'       => true,
				'disabled'      => false,
				'group_icons'   => false,
			);
		}

		/**
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
		}
	}
}
