<?php
/**
 *
 * Initial version created 30-05-2018 / 04:58 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Value;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Value\font_picker' ) ) {
	/**
	 * Class font_picker
	 *
	 * @package WPOnion\Value
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class font_picker extends \WPOnion\Bridge\Value {
		/**
		 * Returns Font Details.
		 *
		 * @return bool
		 */
		public function font() {
			return ( isset( $this->value['font'] ) ) ? $this->value['font'] : false;
		}

		/**
		 * Returns Font Variant Type.
		 *
		 * @return bool
		 */
		public function variant() {
			return ( isset( $this->value['variant'] ) ) ? $this->value['variant'] : false;
		}

		/**
		 * Returns Font CSS.
		 *
		 * @return string
		 */
		public function font_css() {
			return 'font-family:"' . $this->font() . '";';
		}

		/**
		 * Returns Font Variant CSS
		 *
		 * @return string
		 */
		public function variant_css() {
			$data   = wponion_extract_font_variant( $this->variant() );
			$return = '';
			if ( ! empty( $data['weight'] ) ) {
				$return .= 'font-weight:' . $data['weight'] . ';';
			}
			if ( ! empty( $data['style'] ) ) {
				$return .= 'font-style:' . $data['style'] . ';';
			}
			return $return;
		}

		/**
		 * Returns Both CSS.
		 *
		 * @return string
		 */
		public function css() {
			return $this->font_css() . ' ' . $this->variant_css();
		}
	}
}