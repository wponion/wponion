<?php
/**
 *
 * Initial version created 21-05-2018 / 04:38 PM
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

if ( ! class_exists( 'WPOnion_Field_accordion' ) ) {
	class WPOnion_Field_accordion extends WPOnion_Field {

		protected function init_subfields() {
			if ( $this->has( 'fields' ) ) {
				foreach ( $this->data( 'fields' ) as $field_id => $field ) {
					$this->field[ $field_id ] = $this->sub_field( $field, _wponion_get_field_value( $field, $this->get_value() ), $this->name(), true );
				}
			}
		}

		protected function output() {
			echo $this->before();
			echo '<div class="wponion-accordion-wrap">';
			echo '<h4 class="wponion-accordion-title">' . $this->data( 'accordion_title' ) . '</h4>';
			echo '<div class="wponion-accordion-content">';
			foreach ( $this->data( 'fields' ) as $field_id => $field ) {
				echo $this->sub_field( $field, _wponion_get_field_value( $field, $this->get_value() ), $this->name(), false );
			}
			echo '</div>';
			echo '</div>';

			echo $this->after();
		}

		protected function field_default() {
			return array(
				'fields'          => array(),
				'accordion_title' => __( 'Accordion' ),
				'un_array'        => false,
				'is_open'         => false,
			);
		}

		public function field_assets() {
			wp_enqueue_script( 'jquery-ui-accordion' );
		}
	}
}