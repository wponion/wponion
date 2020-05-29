<?php

namespace WPOnion\DB\Save_Handler;

defined( 'ABSPATH' ) || exit;

/**
 * Class WC_Product_Metabox
 *
 * @package WPOnion\DB\Save_Handler
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class WC_Product_Metabox extends Base {
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
		$module = $this->module();
		$fields = ( wpo_is_container( $section ) || wpo_is( $section, 'builder' ) ) ? $section->fields() : $section['fields'];
		foreach ( $fields as $field ) {
			if ( 'only' === $module->is_variation( $field ) && false === $this->is_variation ) {
				continue;
			}
			if ( wponion_valid_field( $field ) && false === wponion_valid_user_input_field( $field ) ) {
				continue;
			}

			$this->handle_single_field( $this->field_path( $field ) );
			$this->go_nested( $field );
		}
	}

	/**
	 * Runs custom loop to work with Settings fields array.
	 *
	 * @param bool $is_variation
	 */
	public function run( $is_variation = false ) {
		$this->is_variation = $is_variation;
		$module             = $this->module();
		if ( false === $is_variation ) {
			foreach ( $this->fields->get() as $page ) {
				if ( 'only' === $module->is_variation( $page ) && false === $this->is_variation ) {
					continue;
				}
				$this->field_loop( $page );
			}
		} else {
			foreach ( $this->fields as $field ) {
				$builder = wponion_builder();
				$builder->set_fields( $field );
				$this->field_loop( $builder );
			}
		}
	}
}
