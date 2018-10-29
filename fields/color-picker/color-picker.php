<?php
/**
 *
 * Initial version created 28-05-2018 / 10:57 AM
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

if ( ! class_exists( '\WPOnion\Field\color_picker' ) ) {
	class color_picker extends \WPOnion\Field {
		/**
		 * Final HTML Output;
		 *
		 * @return mixed;
		 */
		protected function output() {
			echo $this->before();

			$attributes = array(
				'type'       => 'text',
				'name'       => $this->name(),
				'data-alpha' => $this->has( 'rgba' ),
				'value'      => $this->value(),
			);


			echo '<input ' . $this->attributes( $attributes ) . '/>';
			echo $this->after();
		}

		/**
		 * Loads the required plugins assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			wponion_load_asset( 'wponion-colorpicker' );
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'rgba' => true,
			);
		}
	}
}
