<?php

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Upload' ) ) {
	/**
	 * Class upload
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Upload extends \WPOnion\Field {

		protected function output() {
			echo $this->before();
			echo '<input type="text" name="' . $this->name() . '" value="' . $this->value() . '"/>';
			echo $this->sub_field( $this->handle_args( 'label', $this->data( 'button' ), array(
				'type'       => 'button',
				'label'      => __( 'Upload', 'wponion' ),
				'only_field' => true,
				'class'      => 'button button-secondary',
			) ), false, $this->unique() );
			echo $this->after();
		}

		/**
		 * @return mixed
		 */
		protected function field_default() {
			return array(
				'settings' => array(),
				'button'   => __( 'Upload', 'wponion' ),
			);
		}

		protected function js_field_args() {
			return array(
				'settings' => $this->parse_args( $this->data( 'settings' ), array(
					'upload_type'  => 'image',
					'frame_title'  => __( 'Upload', 'wponion' ),
					'insert_title' => __( 'Use', 'wponion' ),
				) ),
			);
		}

		public function field_assets() {
			wp_enqueue_media();
		}
	}
}
