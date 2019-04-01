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

if ( ! class_exists( '\WPOnion\Field\Visual_Composer\Checkbox' ) ) {
	/**
	 * Class Base
	 *
	 * @package WPOnion\Field\Visual_Composer
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Checkbox extends Base {
		/**
		 * @param mixed $return
		 *
		 * @return string
		 */
		public function extra_class( $return ) {
			return ( ! isset( $return['options'] ) ) ? $this->vc_extra_class : '';
		}

		/**
		 * @param array $return
		 *
		 * @return array|mixed|string
		 */
		public function value( $return = array() ) {
			if ( ! isset( $return['options'] ) ) {
				return wponion_validate_bool_val( $this->value );
			}
			$m_data = ( $this->is_encoded( $this->value ) ) ? $this->decode( $this->value ) : false;
			if ( wponion_is_array( $m_data ) ) {
				if ( ! empty( array_filter( $m_data ) ) ) {
					$m_data = wponion_validate_bool_val( $m_data );
				}
			}
			return $m_data;
		}
	}
}
