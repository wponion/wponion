<?php
/**
 *
 * Initial version created 09-07-2018 / 10:28 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\WP_Editor' ) ) {
	/**
	 * Class WP_Editor
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_Editor extends \WPOnion\Field {
		/**
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			$settings = ( $this->has( 'settings' ) ) ? $this->data( 'settings' ) : array();
			$settings = $this->parse_args( $settings, array(
				'textarea_rows' => 10,
				'textarea_name' => $this->name(),
			) );
			wp_editor( $this->value(), $this->field_id(), $settings );
			echo $this->after();
		}

		/**
		 * @return mixed|void
		 */
		public function field_assets() {
			// TODO: Implement field_assets() method.
		}

		/**
		 * @return mixed|void
		 */
		protected function field_default() {
			return array( 'settings' => array() );
		}
	}
}