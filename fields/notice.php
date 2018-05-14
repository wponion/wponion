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

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Field_notice' ) ) {
	/**
	 * Class WPOnion_Field_Notice
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_Field_Notice extends WPOnion_Field_heading {

		protected function field_default() {
			return array(
				'content'     => false,
				'notice_type' => 'success',
			);
		}

		public function handle_field_args( $data = array() ) {
			if ( false === $data['wrap_class'] ) {
				$data['wrap_class'] = ' alert alert-' . $data['notice_type'];
			} else {
				$data['wrap_class'] .= ' alert alert-' . $data['notice_type'];
			}
			return $data;
		}
	}
}