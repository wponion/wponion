<?php

namespace WPOnion\DB\Save_Handler\Fields;

defined( 'ABSPATH' ) || exit;

/**
 * Trait Modal
 *
 * @package WPOnion\DB\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
trait Modal {
	/**
	 * Handles Modal Field
	 *
	 * @param      $field
	 * @param bool $parent_field
	 */
	protected function field_modal( $field, $parent_field = false ) {
		if ( false === wponion_valid_user_input_field( $field ) || ( false !== $parent_field && false === wponion_valid_user_input_field( $parent_field ) ) ) {
			return;
		}

		if ( ! wponion_valid_field( $field ) ) {
			return;
		}

		if ( false === $this->is_valid_field( $field ) ) {
			return;
		}

		$modal_type = ( isset( $field['modal_type'] ) && ! empty( $field['modal_type'] ) ) ? $field['modal_type'] : 'swal';
		$field      = ( wponion_is_array( $parent_field ) ) ? $this->field_path( $field, $parent_field ) : $this->field_path( $field );

		if ( wponion_is_unarrayed( $field ) ) {
			$field['field_path'][] = $field['id'];
		}

		$this->{'modal_' . $modal_type . '_handle'}( $field );
	}

	/**
	 * Handles SWAL Modal field.
	 *
	 * @param \WPO\Fields\Modal|array $field
	 */
	public function modal_swal_handle( $field ) {
		if ( ! empty( $field['fields'] ) && is_array( $field['fields'] ) ) {
			$this->nested_field_loop( $field );
		}
	}

	/**
	 * Handles WP Modal Field.
	 *
	 * @param \WPO\Fields\Modal|array $field
	 */
	public function modal_wp_handle( $field ) {
		/* @var \WPO\Builder|\WPO\Container|array $builder */
		$builder = $field['fields'];
		if ( wpo_is_container( $builder ) ) {
			$this->modal_wp_render_containers( $builder, $field );
		} elseif ( wpo_is( $builder ) ) {
			foreach ( $builder->containers() as $container ) {
				$this->modal_wp_render_containers( $container, $field );
			}
		} elseif ( wponion_is_array( $builder ) && ! empty( $builder ) ) {
			foreach ( $builder as $_field ) {
				$_field = $this->field_path( $_field, $field );
				$this->handle_single_field( $_field );
			}
		}
	}

	/**
	 * Renders WP Modal Containers.
	 *
	 * @param \WPO\Container|\WPO\Builder $builder
	 * @param bool                        $modal_field
	 */
	protected function modal_wp_render_containers( $builder, $modal_field = false ) {
		if ( $builder->has_containers() ) {
			foreach ( $builder->containers() as $container ) {
				$this->modal_wp_render_containers( $container, $modal_field );
			}
		} elseif ( $builder->has_fields() ) {
			foreach ( $builder->fields() as $field ) {
				$this->handle_single_field( $this->field_path( $field, $modal_field ) );
			}
		}
	}
}
