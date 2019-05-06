<?php
/**
 *
 * Initial version created 28-06-2018 / 11:21 AM
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

if ( ! class_exists( '\WPOnion\DB\Metabox_Save_Handler' ) ) {
	/**
	 * Class Save_Handler
	 *
	 * @package WPOnion\DB\Settings
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Metabox_Save_Handler extends \WPOnion\DB\Save_Handler {
		/**
		 * Runs custom loop to work with Settings fields array.
		 */
		public function run() {
			/**
			 * @var \WPOnion\Modules\Metabox\Metabox $settings
			 * @var \WPO\Container           $container
			 * @var \WPO\Container           $sub_container
			 */
			$settings = $this->args['settings'];
			if ( $this->fields->has_fields() ) {
				$this->field_loop( $this->fields );
			} else {
				foreach ( $this->fields->get() as $container ) {
					if ( $settings->valid_option( $container ) ) {
						if ( $container->has_containers() ) {
							foreach ( $container->containers() as $sub_container ) {
								if ( ! $settings->valid_option( $sub_container ) ) {
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
				}
			}
		}
	}
}
