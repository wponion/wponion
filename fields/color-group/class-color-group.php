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

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Color_Group' ) ) {
	/**
	 * Class Color_Picker
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Color_Group extends Field {

		/**
		 * Final HTML Output
		 */
		protected function output() {
			echo $this->before();
			if ( wponion_is_array( $this->data( 'options' ) ) ) {
				foreach ( $this->data( 'options' ) as $slug => $option ) {
					$field_args = $this->handle_args( 'title', $option, array(
						'rgba' => $this->data( 'rgba' ),
					), array(
						'id'   => $slug,
						'type' => 'color_picker',
					) );

					if ( isset( $field_args['label'] ) ) {
						$title               = $field_args['label'];
						$field_args['title'] = $title;
						unset( $field_args['label'] );
					}

					echo $this->sub_field( $field_args, $this->value( $slug ), $this->name() );
				}
			}
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
				'rgba'    => true,
				'options' => array(),
			);
		}
	}
}
