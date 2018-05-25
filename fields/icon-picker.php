<?php
/**
 *
 * Initial version created 18-05-2018 / 05:55 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\icon_picker' ) ) {
	class icon_picker extends \WPOnion\Field {

		protected function output() {
			echo $this->before();

			echo $this->render_input();
			echo $this->render_value();
			echo $this->render_buttons();

			echo $this->after();
		}

		protected function render_input() {
			return $this->sub_field( array(
				'type'       => 'text',
				'only_field' => true,
				'class'      => ( $this->has( 'show_input' ) ) ? 'wponion-icon-picker-input' : 'wponion-icon-picker-input hidden',
			), $this->value(), $this->name() );
		}

		protected function render_value() {
			return '<span class="wponion-icon-preview">' . wponion_icon( $this->value() ) . '</span>';
		}


		protected function js_field_args() {
			$tooltip = $this->data( 'icon_tooltip' );
			$tooltip = ( false === $tooltip ) ? 'false' : $tooltip;

			return array(
				'popup_tooltip' => $tooltip,
			);
		}

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
				'label'       => __( 'Add Icon' ),
			) ), null, null );

			$html .= $this->sub_field( $this->handle_args( 'label', $this->data( 'remove_button' ), array(
				'class'       => array( 'button button-secondary' ),
				'type'        => 'button',
				'attributes'  => array(
					'data-wponion-jsid'              => $this->js_field_id(),
					'data-wponion-iconpicker-remove' => 'yes',
				),
				'only_field'  => true,
				'button_type' => 'button',
				'label'       => __( 'Remove Icon' ),
			) ), null, null );

			return $html;
		}

		protected function field_default() {
			return array(
				'add_button'    => __( 'Add Icon' ),
				'remove_button' => __( 'Remove Icon' ),
				'show_input'    => true,
				'icon_tooltip'  => array(
					'placement' => 'bottom',
					'arrow'     => true,
				),
			);
		}

		public function field_assets() {
			// TODO: Implement field_assets() method.
		}
	}
}
