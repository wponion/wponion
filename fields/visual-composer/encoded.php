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

namespace WPOnion\Field\Visual_Composer;

if ( ! class_exists( '\WPOnion\Field\Visual_Composer\Encoded' ) ) {
	/**
	 * Class Base
	 *
	 * @package WPOnion\Field\Visual_Composer
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Encoded extends Base {
		/**
		 * @param array $return
		 *
		 * @return array|mixed|string
		 */
		public function value( $return = array() ) {
			return ( $this->is_encoded( $this->value ) ) ? $this->decode( $this->value ) : false;
		}
	}
}
