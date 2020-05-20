<?php

namespace WPOnion\Traits\Internal;

defined( 'ABSPATH' ) || exit;

if ( ! trait_exists( '\WPOnion\Traits\Internal\Fields_Handler' ) ) {
	/**
	 * Trait Fields
	 *
	 * @package WPOnion\Traits\Internal
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since {NEWVERSION}
	 */
	trait Fields_Handler {
		/**
		 * Fields
		 *
		 * @var string|array|\WPO\Builder
		 */
		protected $fields = array();

		/**
		 * @var bool
		 * @since {NEWVERSION}
		 */
		protected $fields_called = false;

		/**
		 * Returns Fields.
		 *
		 * @return array|\WPO\Builder
		 */
		public function fields() {
			if ( ! wponion_is_array( $this->fields ) && wponion_is_callable( $this->fields ) && false === $this->fields_called ) {
				$this->fields        = wponion_callback( $this->fields );
				$this->fields_called = true;
			}
			return $this->fields;
		}

		/**
		 * Handles Field's Default Value For Each Module.
		 */
		protected function get_defaults() {
			/**
			 * @var $options \WPO\Container
			 */
			foreach ( $this->fields->get() as $options ) {
				if ( $this->valid_field( $options ) ) {
					$this->get_fields_defaults_value( $options );
				} elseif ( false !== $this->valid_option( $options ) ) {
					if ( $options->has_fields() ) {
						foreach ( $options->fields() as $field ) {
							$this->get_fields_defaults_value( $field );
						}
					} elseif ( $options->has_containers() ) {
						foreach ( $options->containers() as $containers ) {
							/* @var $containers \WPO\Container */
							if ( ! $containers->has_fields() ) {
								continue;
							}
							if ( false !== $this->valid_option( $containers ) ) {
								foreach ( $containers->fields() as $field ) {
									$this->get_fields_defaults_value( $field );
								}
							}
						}
					}
				}
			}
		}

		/**
		 * Renders / Creates An First Instance based on the $is_init_field variable value.
		 *
		 * @param array $field
		 * @param bool  $hash
		 * @param bool  $is_init_field
		 *
		 * @return mixed
		 * @uses \wponion_field()
		 *
		 * @uses \wponion_add_element()
		 */
		public function render_field( $field = array(), $hash = false, $is_init_field = false ) {
			$callback = ( false === $is_init_field ) ? 'wponion_add_element' : 'wponion_field';
			return $callback( $field, wponion_get_field_value( $field, $this->get_db_values() ), array(
				'module' => $this->module(),
				'unique' => $this->field_unique(),
				'base'   => $this->field_base_unique(),
				'hash'   => $hash,
			) );
		}

		/**
		 * Creates A Error Registry
		 *
		 * @used in Widgets Module.
		 *
		 * @param $errors
		 */
		protected function init_error_registry( $errors ) {
			$instance = wponion_registry( sanitize_title( $this->module() . '_' . $this->unique() . '_errors' ), '\WPOnion\Registry\Field_Error' );
			$instance->set( $errors );
		}
	}
}
