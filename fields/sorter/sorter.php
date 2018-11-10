<?php
/**
 *
 * Project : wponion
 * Date : 10-11-2018
 * Time : 05:03 PM
 * File : sorter.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Sorter' ) ) {
	class Sorter extends \WPOnion\Field {
		protected function output() {
			echo $this->before();
			$value = $this->get_element_values();
			echo '<div class="wponion-modules"> <h3>' . $this->field ['enabled_title'] . '</h3>';
			echo '<ul class="wponion-enabled">';
			if ( ! empty( $value ['enabled'] ) ) {
				foreach ( $value ['enabled'] as $id => $_name ) {
					echo '<li><input type="hidden" name="' . $this->name( '[enabled][' . $id . ']' ) . '" value="' . $_name . '"/><label>' . $_name . '</label></li>';
				}
			}
			echo '</ul></div>';

			echo '<div class="wponion-modules"> <h3>' . $this->field ['disabled_title'] . '</h3>';
			echo '<ul class="wponion-disabled">';
			if ( ! empty( $value ['disabled'] ) ) {
				foreach ( $value ['disabled'] as $id => $_name ) {
					echo '<li><input type="hidden" name="' . $this->name( '[disabled][' . $id . ']' ) . '" value="' . $_name . '"/><label>' . $_name . '</label></li>';
				}
			}
			echo '</ul> </div>';
			//echo '<div class="clear"></div>';
			echo $this->after();
		}

		/**
		 * @return array|mixed|string
		 */
		public function get_element_values() {
			$defaults = $this->data( 'default' );
			if ( empty( $this->value() ) ) {
				return $defaults;
			}
			$saved = $this->value();
			foreach ( $defaults['enabled'] as $i => $val ) {
				if ( isset( $saved['enabled'][ $i ] ) === false && isset( $saved['disabled'][ $i ] ) === false ) {
					$saved['disabled'][ $i ] = $val;
				}
			}
			foreach ( $defaults['disabled'] as $i => $val ) {
				if ( isset( $saved['enabled'][ $i ] ) === false && isset( $saved['disabled'][ $i ] ) === false ) {
					$saved['disabled'][ $i ] = $val;
				}
			}
			return $saved;
		}

		protected function field_default() {
			return array(
				'enabled'        => array(),
				'disabled'       => array(),
				'enabled_title'  => __( 'Enabled Modules' ),
				'disabled_title' => __( 'Disabled Modules' ),
			);
		}

		public function field_assets() {
			wp_enqueue_script( 'jquery-ui-sortable' );
		}
	}
}

