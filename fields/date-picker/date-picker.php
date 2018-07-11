<?php
/**
 *
 * Initial version created 11-07-2018 / 07:15 AM
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

if ( ! class_exists( '\WPOnion\Field\date_picker' ) ) {
	class date_picker extends \WPOnion\Field {
		/**
		 * Final HTML Output;
		 *
		 * @return mixed;
		 */
		protected function output() {
			echo $this->before();
			if ( $this->has( 'range' ) && true === $this->data( 'range' ) ) {
				$date = $this->data( 'date' );

				if ( false === $date ) {
					$date = __( 'From Date' );
				}

				echo $this->sub_field( $this->handle_args( 'title', $date, array(
					'id'         => 'from',
					'type'       => 'text',
					'title'      => __( 'From Date' ),
					'horizontal' => true,
					'attributes' => array( 'data-wponion-datepicker-from-date' => true, ),
				) ), $this->value( 'from' ), $this->name() );
				echo $this->sub_field( $this->handle_args( 'title', $this->data( 'to_date' ), array(
					'id'         => 'to',
					'type'       => 'text',
					'title'      => __( 'To Date' ),
					'horizontal' => true,
					'attributes' => array( 'data-wponion-datepicker-to-date' => true, ),
				) ), $this->value( 'to' ), $this->name() );
			} else {
				echo $this->sub_field( $this->handle_args( 'placeholder', $this->data( 'date' ), array(
					'id'         => $this->field_id(),
					'type'       => 'text',
					'prefix'     => '<i class="dashicons dashicons-calendar"></i>',
					'only_field' => true,
				) ), $this->value(), $this->unique() );
			}

			echo $this->after();
		}

		protected function field_wrap_class() {
			return ( $this->has( 'range' ) && true === $this->data( 'range' ) ) ? ' wponion-datepicker-range ' : '';
		}

		/**
		 * Loads the required plugins assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			$settings          = ( $this->has( 'settings' ) ) ? $this->data( 'settings' ) : array();
			$settings['theme'] = $this->data( 'theme' );
			$settings['range'] = $this->data( 'range' );
			wponion_localize()->add( $this->js_field_id(), array(
				'settings' => $settings,
			) );
			wponion_load_asset( 'wponion-datepicker' );
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'range'    => false,
				'settings' => array(),
				'theme'    => 'default',
				'date'     => false,
				'to_date'  => __( 'Till Date' ),
			);
		}
	}
}