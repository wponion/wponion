<?php

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}


if ( ! class_exists( '\WPOnion\Field\WP_Notice' ) ) {
	/**
	 * Class WPOnion_Field_Notice
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_Notice extends Heading {
		/**
		 * Notice Type.
		 *
		 * @var string
		 * @access
		 */
		protected $notice_type = 'success';

		/**
		 * Checks & Updat fields args based on field config.
		 *
		 * @param array $data
		 *
		 * @return array
		 */
		protected function handle_field_args( $data = array() ) {
			if ( isset( $data['type'] ) && ! empty( $data['type'] ) && 'wp_notice' !== $data['type'] ) {
				$this->notice_type   = str_replace( 'wp_notice_', '', $data['type'] );
				$data['notice_type'] = $this->notice_type;
			}

			$data['type']            = 'wp_notice';
			$data['wrap_attributes'] = ( isset( $data['wrap_attribtues'] ) ) ? $data['wrap_attribtues'] : array();

			if ( false !== $data['autoclose'] ) {
				$data['wrap_attributes']['data-autoclose'] = intval( $data['autoclose'] );
			}
			return $data;
		}

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			$auto_close = ( false === $this->data( 'autoclose' ) ) ? '' : ' data-autoclose="' . intval( $this->data( 'autoclose' ) ) . '" ';

			$notice_class = 'notice inline ';
			$notice_class = $notice_class . ' notice-' . $this->data( 'notice_type' );

			$notice_class .= ( true === $this->data( 'large' ) ) ? ' notice-large ' : ' ';
			$notice_class .= ( true === $this->data( 'alt' ) ) ? ' notice-alt ' : ' ';
			echo '<div class="' . $notice_class . '" ' . $auto_close . '>';
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
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return $this->parse_args( array(
				'notice_type' => $this->notice_type,
				'autoclose'   => false,
				'close'       => true,
				'large'       => false,
				'alt'         => false,
			), parent::field_default() );
		}
	}
}
