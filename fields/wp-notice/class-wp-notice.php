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

		protected $notice_type = 'success';

		public function handle_field_args( $data = array() ) {
			$data['type']            = 'wp_notice';
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

			$notice_class = 'notice inline ';
			$notice_class = $notice_class . ' notice-' . $this->data( 'notice_type' );

			$notice_class .= ( true === $this->data( 'large' ) ) ? ' notice-large ' : ' ';
			$notice_class .= ( true === $this->data( 'alt' ) ) ? ' notice-alt ' : ' ';
			echo '<div class="' . $notice_class . '" ' . $auto_close . '>';
			echo $this->data( 'content' );
			if ( true === $this->data( 'close' ) && false === $this->data( 'autoclose' ) ) {
				echo '<a class="wponion-remove dashicons" data-tippy="' . __( 'Hide' ) . '"></a>';
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
				'large'       => false,
				'alt'         => false,
			), parent::field_default() );
		}
	}
}
