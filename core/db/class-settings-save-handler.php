<?php
/**
 *
 * Initial version created 14-05-2018 / 03:43 PM
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

if ( ! class_exists( '\WPOnion\DB\Settings_Save_Handler' ) ) {
	/**
	 * Class Save_Handler
	 *
	 * @package WPOnion\DB\Settings
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Settings_Save_Handler extends \WPOnion\DB\Save_Handler {
		/**
		 * Runs custom loop to work with Settings fields array.
		 */
		public function run() {
			foreach ( $this->fields as $option ) {
				if ( ! $this->args['settings']->valid_option( $option, false, true ) ) {
					continue;
				}

				if ( $option->has_sections() ) {
					foreach ( $option->sections() as $section ) {
						if ( ! $this->args['settings']->valid_option( $section, true, true ) ) {
							continue;
						}

						if ( ! $section->has_fields() ) {
							continue;
						}

						$this->field_loop( $section );
					}
				} elseif ( $option->has_fields() ) {
					$this->field_loop( $option );
				}
			}

			if ( false === $this->args['settings']->is_single_page() || 'only_submenu' === $this->args['settings']->is_single_page() ) {
				$this->return_values = $this->array_merge( $this->return_values, $this->db_values );
			}
		}
	}
}
