<?php
/**
 *
 * Initial version created 05-07-2018 / 12:08 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\DB;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\DB\WooCommerce_Save_Handler' ) ) {
	/**
	 * Class Save_Handler
	 *
	 * @package WPOnion\DB\Settings
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WooCommerce_Save_Handler extends \WPOnion\DB\Save_Handler {
		/**
		 * is_variation
		 *
		 * @var bool
		 */
		protected $is_variation = false;

		/**
		 * Runs A Field.Inner Loop.
		 *
		 * @param $section
		 */
		protected function field_loop( $section ) {
			foreach ( $section['fields'] as $field ) {
				if ( 'only' === $this->args['settings']->is_variation( $field ) && false === $this->is_variation ) {
					continue;
				}
				if ( _wponion_valid_field( $field ) && false === wponion_valid_user_input_field( $field ) ) {
					continue;
				}

				$field['error_id'] = sanitize_key( $this->unique . $field['id'] );
				$this->save_value( $this->handle_field( $field, $this->user_options( $field ), $this->db_options( $field ) ), $field );
				if ( isset( $field['fields'] ) ) {
					$this->nested_field_loop( $field );
				}
			}
		}

		/**
		 * Runs custom loop to work with Settings fields array.
		 *
		 * @param bool $is_variation
		 */
		public function run( $is_variation = false ) {
			$this->is_variation = $is_variation;

			if ( false === $is_variation ) {
				foreach ( $this->fields as $page ) {
					if ( 'only' === $this->args['settings']->is_variation( $page ) && false === $this->is_variation ) {
						continue;
					}
					$this->field_loop( $page, $is_variation );
				}
			} else {
				foreach ( $this->fields as $field ) {
					$this->field_loop( array( 'fields' => $field ) );
				}
			}
		}
	}
}
