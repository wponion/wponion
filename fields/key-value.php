<?php
/**
 *
 * Initial version created 23-05-2018 / 06:23 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Field_key_value' ) ) {
	class WPOnion_Field_key_value extends WPOnion_Field {

		protected function key_value( $name = '', $key = '', $value = '' ) {
			echo '<div class="wponion-keyvalue-field">';
			echo $this->sub_field( $this->handle_args( 'placeholder', $this->data( 'key_input' ), array(
				'id'         => 'key',
				'type'       => 'text',
				'prefix'     => __( 'Key' ),
				'only_field' => true,
			) ), $key, $name );

			echo $this->sub_field( $this->handle_args( 'placeholder', $this->data( 'value_input' ), array(
				'id'         => 'value',
				'type'       => 'text',
				'prefix'     => __( 'Value' ),
				'only_field' => true,
			) ), $value, $name );

			echo $this->sub_field( $this->handle_args( 'label', $this->data( 'remove_button' ), array(
				'type'       => 'button',
				'label'      => '-',
				'only_field' => true,
				'attributes' => array( 'data-wponion-keyvalue-remove' => 'yes' ),
				'class'      => 'button button-secondary',
			) ), null, null );

			echo '</div>';
		}

		protected function output() {
			echo $this->before();

			echo '<div class="wponion-keyvalue_wrap" data-wponion-clone-count="' . count( $this->value() ) . '">';
			if ( is_array( $this->value() ) ) {
				foreach ( $this->value() as $i => $value ) {
					echo $this->key_value( $this->name( '[' . $i . ']' ), $value['key'], $value['value'] );
				}
			}
			echo '</div>';

			$this->catch_output( 'start' );
			echo $this->key_value( $this->name( '[{wponionCloneID}]' ) );
			$template = $this->catch_output( 'stop' );
			$this->localize_field( array( 'html_template' => $template ) );

			echo $this->sub_field( $this->handle_args( 'label', $this->data( 'add_button' ), array(
				'type'       => 'button',
				'label'      => __( 'Add +' ),
				'attributes' => array( 'data-wponion-keyvalue-add' => 'yes' ),
				'only_field' => true,
				'class'      => 'button button-primary',
			) ), null, null );

			echo $this->after();
		}

		protected function field_default() {
			return array(
				'add_button'    => __( 'Add +' ),
				'remove_button' => __( '-' ),
				'key_input'     => array(),
				'value_input'   => array(),
			);
		}

		public function field_assets() {
			wp_enqueue_script( 'wponion-cloner' );
		}
	}
}