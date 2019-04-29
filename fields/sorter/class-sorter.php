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
	/**
	 * Class Sorter
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Sorter extends \WPOnion\Field {
		protected function output() {
			echo $this->before();
			$value = $this->get_element_values();

			$wrap_class = ( ! empty( $value['enabled'] ) && ! empty( $value['disabled'] ) ) ? 'col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6' : 'col-xs-12 col-sm-12 col-md-6';

			echo '<div class="row">';
			if ( false !== $value['enabled'] && is_array( $value['enabled'] ) ) {
				echo '<div class="wponion-modules ' . $wrap_class . '">';
				if ( ! empty( $this->field ['enabled_title'] ) ) {
					echo $this->sub_field( array(
						'type'    => 'subheading',
						'content' => $this->field ['enabled_title'],
					), null, null );
				}
				echo '<ul class="wponion-enabled">';
				if ( ! empty( $value ['enabled'] ) ) {
					foreach ( $value ['enabled'] as $id => $_name ) {
						echo '<li><input type="hidden" name="' . $this->name( '[enabled][' . $id . ']' ) . '" value="' . $_name . '"/><label>' . $_name . '</label></li>';
					}
				}
				echo '</ul></div>';
			}

			if ( false !== $value['disabled'] && is_array( $value['disabled'] ) ) {
				echo '<div class="wponion-modules ' . $wrap_class . '">';
				if ( ! empty( $this->field ['disabled_title'] ) ) {
					echo $this->sub_field( array(
						'type'    => 'subheading',
						'content' => $this->field ['disabled_title'],
					), null, null );
				}
				echo '<ul class="wponion-disabled">';
				if ( ! empty( $value ['disabled'] ) ) {
					foreach ( $value ['disabled'] as $id => $_name ) {
						echo '<li><input type="hidden" name="' . $this->name( '[disabled][' . $id . ']' ) . '" value="' . $_name . '"/><label>' . $_name . '</label></li>';
					}
				}
				echo '</ul> </div>';
			}
			echo '</div>';
			//echo '<div class="clear"></div>';
			echo $this->after();
		}

		/**
		 * @return array|mixed|string
		 */
		public function get_element_values() {
			$defaults = $this->data( 'options' );
			if ( empty( $this->value() ) ) {
				return $defaults;
			}
			$saved = wp_parse_args( $this->value(), array(
				'enabled'  => array(),
				'disabled' => array(),
			) );
			if ( isset( $defaults['enabled'] ) && is_array( $defaults['enabled'] ) ) {
				foreach ( $defaults['enabled'] as $i => $val ) {
					if ( isset( $saved['enabled'][ $i ] ) === false && isset( $saved['disabled'][ $i ] ) === false ) {
						$saved['disabled'][ $i ] = $val;
					}
				}
			} else {
				$saved['enabled'] = false;
			}

			if ( isset( $defaults['disabled'] ) && is_array( $defaults['disabled'] ) ) {
				foreach ( $defaults['disabled'] as $i => $val ) {
					if ( isset( $saved['enabled'][ $i ] ) === false && isset( $saved['disabled'][ $i ] ) === false ) {
						$saved['disabled'][ $i ] = $val;
					}
				}
			} else {
				$saved['disabled'] = false;
			}
			return $saved;
		}

		protected function field_default() {
			return array(
				'options'        => array(),
				'enabled_title'  => __( 'Enabled Modules', 'wponion' ),
				'disabled_title' => __( 'Disabled Modules', 'wponion' ),
			);
		}

		public function field_assets() {
			wp_enqueue_script( 'jquery-ui-sortable' );
		}
	}
}

