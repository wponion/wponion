<?php
/**
 *
 * Initial version created 20-05-2018 / 09:24 AM
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

if ( ! class_exists( '\WPOnion\Field\fieldset' ) ) {
	/**
	 * Class fieldset
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class fieldset extends \WPOnion\Field {
		/**
		 * Creates / inits its sub fields.
		 */
		protected function init_subfields() {
			if ( $this->has( 'fields' ) ) {
				foreach ( $this->data( 'fields' ) as $field_id => $field ) {
					$this->field['fields'][ $field_id ] = $this->sub_field( $field, _wponion_get_field_value( $field, $this->value() ), $this->name(), true );
				}
			}
		}

		/**
		 * Final HTML Output;
		 *
		 * @return mixed;
		 */
		protected function output() {
			echo '<div class="wponion-fieldset-wrap">';

			if ( $this->has( 'fields' ) ) {
				if ( $this->has( 'heading' ) ) {
					echo wponion_add_element( array(
						'type'    => 'subheading',
						'content' => $this->data( 'heading' ),
					) );
				}

				foreach ( $this->data( 'fields' ) as $field ) {
					echo $this->sub_field( $field, _wponion_get_field_value( $field, $this->value() ), $this->name(), false );
				}
			}

			echo '</div>';
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'fields'   => array(),
				'heading'  => null,
				'un_array' => false,
			);
		}

		/**
		 * Loads the required plugins assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			// TODO: Implement field_assets() method.
		}
	}
}

