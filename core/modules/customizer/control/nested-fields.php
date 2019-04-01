<?php
/**
 *
 * Initial version created 12-06-2018 / 04:21 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules\Customizer\Control;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Customizer\Control\Nested_Fields' ) ) {
	/**
	 * Class nested_fields
	 *
	 * @package WPOnion\Modules\Customize_Control
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Nested_Fields extends \WPOnion\Modules\Customizer\Control {
		/**
		 * @return array
		 */
		protected function field() {
			return $this->handle_subfields( parent::field() );
		}

		/**
		 * @param $fields
		 *
		 * @return array
		 */
		protected function handle_subfields( $fields ) {
			if ( isset( $fields['fields'] ) ) {

			} elseif ( wponion_is_array( $fields ) ) {
				foreach ( $fields['fields'] as $id => $field ) {
					if ( ! isset( $fields[ $id ]['attributes'] ) ) {
						$fields['fields'][ $id ]['attributes'] = array();
					}
					$fields['fields'][ $id ]['attributes']['data-customize-setting-link'] = $this->settings['default']->id;
				}
			}
			return $fields;
		}

	}
}
