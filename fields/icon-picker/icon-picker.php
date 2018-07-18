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
	/**
	 * Class icon_picker
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class icon_picker extends \WPOnion\Field {
		/**
		 * Final HTML Output;
		 *
		 * @return mixed;
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

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'add_button'    => __( 'Add Icon' ),
				'remove_button' => __( 'Remove Icon' ),
				'show_input'    => true,
				'icon_tooltip'  => array(
					'placement' => 'bottom',
					'arrow'     => true,
				),
				'enabled'       => 'DashIcons',
				'disabled'      => false,
			);
		}

		/**
		 * Loads the required plugins assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			// TODO: Implement field_assets() method.
		}
	}
}
