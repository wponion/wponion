<?php

namespace WPOnion\Bridge\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Dependency
 *
 * @package WPOnion\Bridge\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Dependency extends Debug {
	/**
	 * Handles Field Dependency
	 */
	protected function register_dependency() {
		$dependency = $this->option( 'dependency/rules' );
		if ( wponion_is_array( $dependency ) && ! empty( array_filter( $dependency ) ) ) {
			/**
			 * @var \WPO\Helper\Dependency\Builder $group
			 */
			foreach ( $dependency as $group_key => $group ) {
				if ( wpo_is( $group, 'dependency_builder' ) ) {
					$rules = $group->get();

					foreach ( $rules as $rule_key => $rule ) {
						$field_id = $rule_key;
						if ( 0 === strpos( $rule_key, '../' ) ) {
							$uniques                  = explode( '/', $this->unique() );
							$uniques                  = array_reverse( $uniques );
							$base_unique              = $this->base_unique();
							$rule_key_info            = pathinfo( $rule_key );
							$rule_key_info['dirname'] = explode( '/', $rule_key_info['dirname'] );
							$field_id                 = $rule_key_info['basename'];

							if ( ! empty( $rule_key_info['dirname'] ) && is_array( $rule_key_info['dirname'] ) ) {
								$total_paths = count( array_filter( $rule_key_info['dirname'] ) );
								foreach ( $uniques as $ukey => $unique ) {
									if ( $ukey === $total_paths && $unique !== $base_unique ) {
										$field_id = $unique . '_' . $field_id;
									}
								}
							}
						} elseif ( ! empty( $this->option( 'sub' ) ) ) {
							$field_id = $this->option( 'sub' ) . '_' . $rule_key;
						}

						if ( $field_id !== $rule_key ) {
							$rules[ $field_id ] = $rules[ $rule_key ];
							unset( $rules[ $rule_key ] );
						}
					}
					$dependency[ $group_key ] = $rules;
				}
			}

			if ( ! empty( $dependency ) ) {
				wponion_localize()->add( $this->js_field_id(), array(
					'dependency' => array(
						'rules'    => $dependency,
						'settings' => $this->option( 'dependency/settings' ),
					),
				), true, true );
			}
		}
	}

	/**
	 * Returns An Actual Depend ID
	 *
	 * @return bool|mixed|string
	 */
	protected function depend_id() {
		$key = ( ! empty( $this->field_id() ) ) ? $this->field_id() : $this->js_field_id();
		$key = ( ! empty( $this->option( 'sub' ) ) ) ? $this->option( 'sub' ) . '_' . $key : $key;
		return ( empty( $key ) ) ? $this->field_id() : $key;
	}
}
