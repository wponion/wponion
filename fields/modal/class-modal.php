<?php
/**
 *
 * Initial version created 12-05-2018 / 07:05 PM
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

use WPOnion\Field;
use WPOnion\Modules\Metabox\Core;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Modal' ) ) {
	/**
	 * Class Modal
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Modal extends Field {
		/**
		 * Final HTML Output
		 */
		public function output() {
			echo $this->before();
			$btn = $this->handle_args( 'label', $this->data( 'button' ), array( 'class' => 'button button-secondary' ), array(
				'type'       => 'button',
				'only_field' => true,
			) );
			echo $this->sub_field( $btn, null, null );
			echo '<div class="wponion-modal-hidden-data"></div>';
			if ( 'swal' === $this->data( 'modal_type' ) ) {
				$this->swal();
			} else {
				$this->wp();
			}

			echo $this->after();
		}

		public function swal() {
			$output = '<div class=" wponion-modal-html wponion-modal-field wponion-on-modal">';
			$this->catch_output( 'start' );
			if ( ! empty( $this->data( 'fields' ) ) && is_array( $this->data( 'fields' ) ) ) {
				foreach ( $this->data( 'fields' ) as $field ) {
					echo $this->sub_field( $field, wponion_get_field_value( $field, $this->value() ), $this->name() );
				}
			}
			$html   = $this->catch_output( 'stop' );
			$output .= $html . '</div>';

			echo $output;
		}

		public function wp() {

		}

		public function field_assets() {
			wp_enqueue_script( 'underscore' );
			wp_enqueue_media();
			wp_enqueue_style( 'media-views' );
		}

		/**
		 * @return array
		 */
		protected function js_field_args() {
			return array(
				'modal_type'   => $this->data( 'modal_type' ),
				'modal_config' => $this->data( 'modal_config' ),
				'modal_html'   => $this->field['modal_html'],
			);
		}

		/**
		 * Final HTML Output;
		 *
		 * @return mixed;
		 */
		protected function field_default() {
			return array(
				'fields'       => array(),
				'modal_config' => array(),
				'modal_type'   => 'wp', // SWAL / WP.
				'button'       => __( 'Open Modal' ),
			);
		}
	}
}
