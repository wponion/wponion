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
	class Settings_Save_Handler extends Save_Handler {
		/**
		 * Runs custom loop to work with Settings fields array.
		 */
		public function run() {
			/**
			 * @var \WPOnion\Modules\Settings\Settings $settings
			 * @var \WPO\Container            $container
			 * @var \WPO\Container            $sub_container
			 */
			$settings = $this->args['settings'];

			if ( $this->fields->has_fields() ) {
				$this->field_loop( $this->fields );
			} else {
				foreach ( $this->fields->get() as $container ) {
					if ( ! $settings->valid_option( $container, false, true ) ) {
						continue;
					}

					if ( $container->has_containers() ) {
						foreach ( $container->containers() as $sub_container ) {
							if ( ! $settings->valid_option( $sub_container, true, true ) ) {
								continue;
							}

							if ( ! $sub_container->has_fields() ) {
								continue;
							}

							$this->field_loop( $sub_container );
						}
					} elseif ( $container->has_fields() ) {
						$this->field_loop( $container );
					}
				}
				if ( false === $settings->is_single_page() || 'only_submenu' === $settings->is_single_page() ) {
					$this->return_values = $this->array_merge( $this->return_values, $this->db_values );
				}
			}
		}
	}
}
