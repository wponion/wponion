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

if ( ! class_exists( '\WPOnion\Field\Input_Group' ) ) {
	/**
	 * Class Color_Picker
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Input_Group extends Field {

		/**
		 * Final HTML Output
		 */
		protected function output() {
			echo $this->before();
			if ( wponion_is_array( $this->data( 'fields' ) ) ) {
				echo '<div class=" row">';
				foreach ( $this->data( 'fields' ) as $id => $data ) {
					$field_id   = ( $data instanceof \WPO\Field ) ? wponion_field_id( $data ) : false;
					$field_id   = ( true === is_numeric( $id ) && false === $field_id ) ? wponion_hash_array( $data ) : $id;
					$field_args = $this->handle_args( 'title', $data, array(
						'type'       => 'text',
						'horizontal' => true,
						'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
						'id'         => $field_id,
					) );

					if ( empty( $field_args['id'] ) ) {
						$field_args['id'] = $field_id;
					}

					echo $this->sub_field( $field_args, $this->value( $field_args['id'] ), $this->name() );
				}
				echo '</div>';
			}
			echo $this->after();
		}

		public function field_assets() {
			// TODO: Implement field_assets() method.
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'fields' => array(),
			);
		}
	}
}
