<?php

namespace WPOnion\DB;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\DB\WC_Settings_Save_Handler' ) ) {
	/**
	 * Class WC_Settings_Save_Handler
	 *
	 * @package WPOnion\DB
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WC_Settings_Save_Handler extends Data_Validator_Sanitizer {
		/**
		 * Runs custom loop to work with Settings fields array.
		 */
		public function run() {
			/**
			 * @var \WPOnion\Modules\Settings\Settings $settings
			 * @var \WPO\Container                     $container
			 * @var \WPO\Container                     $sub_container
			 */
			if ( $this->fields->has_fields() ) {
				$this->field_loop( $this->fields );
			} else {
				foreach ( $this->fields->get() as $container ) {
					if ( ! empty( $this->args['current_tab'] ) && $container->name() !== $this->args['current_tab'] ) {
						continue;
					}

					if ( $container->has_containers() ) {
						foreach ( $container->containers() as $sub_container ) {
							if ( ! empty( $this->args['current_section'] ) && $sub_container->name() !== $this->args['current_section'] ) {
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
				$this->return_values = $this->array_merge( $this->return_values, $this->db_values );
			}
		}

		/**
		 * @param array $new_values
		 * @param array $old_values
		 *
		 * @return array
		 */
		public function array_merge( $new_values = array(), $old_values = array() ) {
			foreach ( $old_values as $key => $value ) {
				if ( ! isset( $new_values[ $key ] ) ) {
					$new_values[ $key ] = $old_values[ $key ];
				}
			}
			return $new_values;
		}
	}
}
