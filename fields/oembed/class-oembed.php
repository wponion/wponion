<?php
/**
 *
 * Project : wponion
 * Date : 15-11-2018
 * Time : 06:48 AM
 * File : oembed.php
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

if ( ! class_exists( '\WPOnion\Field\OEmbed' ) ) {
	/**
	 * Class OEmbed
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class OEmbed extends Text {

		protected function after() {
			echo '<div class="wponion-oembed-preview" data-wponion-jsid="' . $this->js_field_id() . '"></div>';
			return parent::after();
		}

		public function handle_field_args( $field_data = array() ) {
			$field_data              = parent::handle_field_args( $field_data );
			$field_data['text_type'] = 'text';
			return $field_data;
		}

		protected function js_field_args() {
			return array( 'nopreview' => wponion()->url( 'assets/img/no-preview.jpg' ) );
		}

		protected function field_default() {
			return $this->parse_args( array(
				'oembed_width'  => '500px',
				'oembed_height' => '500px',
			), parent::field_default() );
		}
	}
}
