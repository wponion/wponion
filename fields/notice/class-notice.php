<?php

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}


if ( ! class_exists( '\WPOnion\Field\Notice' ) ) {
	/**
	 * Class WPOnion_Field_Notice
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Notice extends Heading {
		/**
		 * @var string
		 * @access
		 */
		protected $notice_type = 'success';

		/**
		 * @param array $data
		 *
		 * @return array
		 */
		public function handle_field_args( $data = array() ) {
			if ( isset( $data['type'] ) && ! empty( $data['type'] ) && 'notice' !== $data['type'] ) {
				$this->notice_type   = str_replace( 'notice_', '', $data['type'] );
				$data['notice_type'] = $this->notice_type;
			}

			$data['type']            = 'notice';
			$data['wrap_attributes'] = ( isset( $data['wrap_attribtues'] ) ) ? $data['wrap_attribtues'] : array();

			if ( false !== $data['autoclose'] ) {
				$data['wrap_attributes']['data-autoclose'] = intval( $data['autoclose'] );
			}
			return $data;
		}

		/**
		 * Final HTML Output
		 */
		public function output() {
			echo $this->before();
			$auto_close = ( false === $this->data( 'autoclose' ) ) ? '' : ' data-autoclose="' . intval( $this->data( 'autoclose' ) ) . '" ';
			echo '<div class="alert alert-' . $this->data( 'notice_type' ) . '" ' . $auto_close . '>';
			$content = $this->data( 'content' );
			$content = str_replace( array(
				'[count]',
				'[counter]',
			), '<span class="wpo-counter">' . intval( $this->data( 'autoclose' ) / 1000 ) . '</span>', $content );
			echo $content;

			if ( true === $this->data( 'close' ) && false === $this->data( 'autoclose' ) ) {
				echo '<a class="wponion-remove dashicons" data-tippy="' . __( 'Hide', 'wponion' ) . '"></a>';
			}
			echo '</div>';
			echo $this->after();
		}

		/**
		 * Final HTML Output;
		 *
		 * @return mixed;
		 */
		protected function field_default() {
			return $this->parse_args( array(
				'notice_type' => $this->notice_type,
				'autoclose'   => false,
				'close'       => true,
			), parent::field_default() );
		}
	}
}
