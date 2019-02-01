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

if ( ! class_exists( 'WPO\Divider' ) ) {
	/**
	 * Class Divider
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Divider extends Field {
		/**
		 * Dimensions constructor.
		 *
		 * @param bool $style
		 */
		public function __construct( $style = false ) {
			parent::__construct( 'divider', false, false, array(
				'hr_style' => $style,
			) );
		}

		/**
		 * @param $hr_style
		 *
		 * @return $this
		 */
		public function set_hr_style( $hr_style ) {
			$this['hr_style'] = $hr_style;
			return $this;
		}

		/**
		 * @return array
		 */
		protected function defaults() {
			return array(
				'hr_style' => '15',
			);
		}
	}
}
