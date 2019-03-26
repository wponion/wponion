<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPO;

if ( ! class_exists( 'WPO\Switcher' ) ) {
	/**
	 * Class Switcher
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Switcher extends Checkbox_Radio {
		/**
		 * @var string
		 * @access
		 */
		protected $type = 'switcher';

		/**
		 * @param null $label
		 *
		 * @return $this
		 */
		public function set_on( $label = null ) {
			$this['on'] = $label;
			return $this;
		}

		/**
		 * @param null $label
		 *
		 * @return $this
		 */
		public function set_off( $label = null ) {
			$this['off'] = $label;
			return $this;
		}

		/**
		 * For Style List Please Refer
		 * https://hunzaboy.github.io/CSS-Checkbox-Library/
		 *
		 * @see https://hunzaboy.github.io/CSS-Checkbox-Library/
		 *
		 * @param string $style
		 *
		 * @return $this
		 */
		public function set_switch_style( $style = 'style-8' ) {
			$this['switch_style'] = $style;
			return $this;
		}

		/**
		 * @param $size
		 *
		 * @return $this
		 */
		public function set_switch_size( $size ) {
			$this['switch_size'] = $size;
			return $this;
		}

		public function defaults() {
			return array(
				'switch_style' => 'style-8',
				'switch_size'  => '',
				'label'        => false,
				'on'           => __( 'ON', 'wponion' ),
				'off'          => __( 'OFF', 'wponion' ),
			);
		}
	}
}
