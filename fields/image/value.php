<?php
/**
 *
 * Initial version created 30-05-2018 / 06:36 PM
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

if ( ! class_exists( '\WPOnion\Value\image' ) ) {
	/**
	 * Class image
	 *
	 * @package WPOnion\Value
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class image extends \WPOnion\Bridge\Value {

		/**
		 * Returns WP Image ID.
		 *
		 * @return mixed
		 */
		public function image_id() {
			return $this->value();
		}

		/**
		 * Returns image url.
		 *
		 * @param string $size
		 * @param bool   $icon
		 * @param bool   $only_url
		 *
		 * @return array|bool|false
		 */
		public function src( $size = 'thumbnail', $icon = false, $only_url = true ) {
			$callback = ( true === $only_url ) ? 'wp_get_attachment_image_url' : 'wp_get_attachment_image_src';
			return $callback( $this->value(), $size, $icon );
		}

		/**
		 * @param string $size
		 * @param bool   $icon
		 * @param array  $attr
		 *
		 * @return string
		 */
		public function get_image( $size = '', $icon = false, $attr = array() ) {
			return wp_get_attachment_image( $this->value(), $size, $icon, $attr );
		}

	}
}