<?php
/**
 *
 * Initial version created 30-05-2018 / 04:42 PM
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

if ( ! class_exists( '\WPOnion\Value\color_picker' ) ) {
	/**
	 * Class color_picker
	 *
	 * @package WPOnion\Value
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class color_picker extends \WPOnion\Bridge\Value {

		/**
		 * returns as css background string.
		 *
		 * @return string
		 */
		public function background() {
			return $this->css( 'background' );
		}

		/**
		 * Returns as css color string.
		 *
		 * @return string
		 */
		public function color() {
			return $this->css( 'color' );
		}

		/**
		 * @param bool $dir
		 *
		 * @return string
		 */
		public function border_color( $dir = false ) {
			$dir = ( false === $dir ) ? 'border-color' : 'border-' . $dir . '-color';
			return $this->css( $dir );
		}

		/**
		 * Returns a css sting
		 *
		 * @param $type
		 *
		 * @return string
		 */
		public function css( $type ) {
			return $type . ':' . $this->value . ';';
		}

		/**
		 * Generates CSS string for border.
		 *
		 * @param string $width
		 * @param string $type
		 *
		 * @return string
		 */
		public function border( $width = '', $type = 'solid' ) {
			return 'border:' . $width . ' ' . $type . ' ' . $this->value . ';';
		}
	}
}
