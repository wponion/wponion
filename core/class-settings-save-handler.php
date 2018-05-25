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

namespace WPOnion\DB\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\DB\Settings\Save_Handler' ) ) {
	/**
	 * Class Save_Handler
	 *
	 * @package WPOnion\DB\Settings
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Save_Handler extends \WPOnion\DB\Save_Handler {
		/**
		 * Runs custom loop to work with Settings fields array.
		 */
		public function run() {
			foreach ( $this->fields as $option ) {
				if ( ! $this->args['settings']->valid_option( $option, false, false ) ) {
					continue;
				}

				if ( isset( $option['sections'] ) ) {
					foreach ( $option['sections'] as $section ) {
						if ( ! $this->args['settings']->valid_option( $section, false, false ) ) {
							continue;
						}

						if ( ! isset( $section['fields'] ) ) {
							continue;
						}

						$this->field_loop( $section );
					}
				} elseif ( isset( $option['fields'] ) ) {
					$this->field_loop( $option );
				}
			}
		}
	}
}
