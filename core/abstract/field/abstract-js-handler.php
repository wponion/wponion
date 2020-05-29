<?php

namespace WPOnion\Bridge\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class JS_Handler
 *
 * @package WPOnion\Bridge\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class JS_Handler extends Error {
	/**
	 * Generates A New JS Field ID.
	 */
	protected function js_field_id() {
		if ( ! isset( $this->js_field_id ) ) {
			$key               = wponion_js_obj_name( 'wponion', 'field', $this->unid() . '_' . $this->unique() . '_' . uniqid( time() ) );
			$this->js_field_id = sanitize_key( str_replace( array( '-', '_' ), '', $key ) );
		}
		return $this->js_field_id;
	}

	/**
	 * Handles JS Values For A Element.
	 *
	 * @param null $data
	 * @param bool $js_convert
	 */
	protected function localize_field( $data = null, $js_convert = true ) {
		$js_id     = $this->js_field_id();
		$localizer = wponion_localize();
		if ( null === $data ) {
			$data        = $this->js_args();
			$path        = explode( '/', $this->unique( $this->field_id() ) );
			$new_path    = array();
			$js_validate = $this->option( 'js_validate' );

			if ( ! empty( $data ) ) {
				$localizer->add( $js_id, $data );
			}

			if ( true === $this->option( 'debug' ) ) {
				$localizer->add( $js_id, array( 'debug_info' => $this->debug( true ) ), true, false );
			}

			if ( ! empty( $js_validate ) ) {
				$localizer->add( $js_id, array( 'js_validate' => $js_validate ) );
			}

			if ( ! empty( $path ) ) {
				$current = current( $path );
				foreach ( $path as $id ) {
					$new_path[] = $id;
					if ( $current === $id ) {
						$new_path[] = $this->option( 'builder_path' );
					}
				}
			}

			$data       = array(
				'field_id'     => $this->field_id(),
				'module'       => $this->module(),
				'unique'       => $this->unique(),
				'field_path'   => implode( '/', array_filter( $new_path ) ),
				'builder_path' => $this->option( 'builder_path' ),
			);
			$js_convert = false;
		}
		$localizer->add( $js_id, $data, true, $js_convert );
	}
}
