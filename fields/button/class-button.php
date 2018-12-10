<?php
/**
 *
 * Initial version created 21-05-2018 / 02:47 PM
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

if ( ! class_exists( '\WPOnion\Field\Button' ) ) {
	/**
	 * Class Button
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Button extends \WPOnion\Field {
		/**
		 * Final HTML Output
		 */
		protected function output() {
			echo $this->before();
			$label = ( false !== $this->has( 'label' ) ) ? $this->data( 'label' ) : $this->value();
			echo '<button ' . $this->attributes() . ' >' . $label . '</button>';
			echo $this->after();
		}

		/**
		 * Modified Fields Args based on current config.
		 *
		 * @param array $data
		 *
		 * @return array
		 */
		public function handle_field_args( $data = array() ) {
			if ( false !== $data['button_type'] ) {
				$data['attributes']['type'] = $data['button_type'];
			}
			return $data;
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'button_type' => 'button',
				'label'       => false,
			);
		}

		/**
		 * Loads the required plugins assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			wp_enqueue_script( 'underscore' );
			wp_enqueue_media();
			//wp_enqueue_style( 'media-views' );
		}
	}
}
