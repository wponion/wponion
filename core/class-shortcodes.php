<?php
/**
 *
 * Initial version created 18-05-2018 / 06:26 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Shortcodes' ) ) {
	/**
	 * Class Shortcodes
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Shortcodes extends Bridge {
		/**
		 * Shortcodes constructor.
		 */
		public function __construct() {
			add_shortcode( 'wpo_tooltip', array( &$this, 'tooltip' ) );
		}

		/**
		 * Generates WPOnion ToolTip Via Shortcode
		 *
		 * @param $args
		 * @param $content
		 *
		 * @return array|string
		 */
		public function tooltip( $args, $content ) {
			$args = empty( $args ) ? array() : $args;
			if ( isset( $args['content'] ) ) {
				$args['element'] = '<span>' . $content . '</span>';
				return wponion_tooltip( $args, );
			}
			return $content;
		}
	}
}
return new Shortcodes;
