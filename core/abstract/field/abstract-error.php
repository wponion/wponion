<?php

namespace WPOnion\Bridge\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Error
 *
 * @package WPOnion\Bridge\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Error extends Dependency {
	/**
	 * Returns Field Errors.
	 *
	 * @return array|false
	 */
	protected function get_errors() {
		if ( null === $this->errors ) {
			$this->errors   = false;
			$error_instance = wponion_field_error_registry( sanitize_title( $this->module() . '_' . $this->base_unique() . '_errors' ) );
			if ( $error_instance ) {
				$id           = str_replace( array( '[', ']' ), array( '/', '' ), $this->name() );
				$this->errors = $error_instance->get( $id );
				$this->debug( __( 'Field Errors', 'wponion' ), $this->errors );
			}
		}
		return $this->errors;
	}

	/**
	 * Returns True if has errors.
	 *
	 * @return bool
	 */
	protected function has_errors() {
		return ( wponion_is_array( $this->get_errors() ) );
	}

	/**
	 * Renders Field Errors.
	 *
	 * @return string
	 */
	protected function field_error() {
		$html   = '';
		$errors = $this->get_errors();
		if ( false !== $errors && isset( $errors['message'] ) ) {
			foreach ( $errors['message'] as $message ) {
				$html .= '<li>' . $message . '</li>';
			}
			$html = '<div class="wponion-field-errors invalid-feedback"><ul>' . $html . '</ul></div>';
		}
		return $html;
	}
}
