<?php

namespace WPOnion\Bridge\Field;

use WPOnion\libraries\CSS_Parser;

defined( 'ABSPATH' ) || exit;

/**
 * Class Submodules
 *
 * @package WPOnion\Bridge\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Submodules extends JS_Handler {
	/**
	 * Compiles And Add CSS Code To WPonion localize.
	 */
	protected function field_custom_css() {
		$css = $this->option( 'css' );
		if ( ! empty( $css ) ) {
			$css = CSS_Parser::parse( $css, 'div[data-wponion-jsid="' . $this->js_field_id() . '"]' );
			wponion_localize()->css( 'fields', $css, false );
		}
	}

	/**
	 * Returns A Valid WP Pointer Instance.
	 *
	 * @param bool $id
	 *
	 * @return \WPOnion\Modules\Admin\Pointers
	 */
	protected function wp_pointer_instance( $id = false ) {
		$id       = ( empty( $id ) ) ? sanitize_title( $this->unique() ) : $id;
		$instance = wponion_wp_pointers( $id );
		return ( false === $instance ) ? $this->wp_pointer_instance( false ) : $instance;
	}

	/**
	 * Handles WP Pointer.
	 */
	protected function wp_pointer() {
		$pointer = $this->option( 'wp_pointer' );

		if ( is_string( $pointer ) ) {
			$this->wp_pointer_instance()->add( '#' . $this->wrap_id(), $pointer, array(
				'align' => 'right',
				'edge'  => 'right',
			) );
		} elseif ( wponion_is_array( $pointer ) ) {
			if ( isset( $pointer[0] ) ) {
				$title       = false;
				$instance_id = false;
				$text        = false;
				if ( 1 === count( $pointer ) ) {
					$title = $pointer;
				} elseif ( 2 === count( $pointer ) ) {
					$title = $pointer[0];
					$text  = $pointer[1];
				} elseif ( 3 === count( $pointer ) ) {
					$instance_id = $pointer[0];
					$title       = $pointer[1];
					$text        = $pointer[2];
				}

				$this->wp_pointer_instance( $instance_id )->add( '#' . $this->wrap_id(), $title, $text, array(
					'align' => 'right',
					'edge'  => 'right',
				) );
			} elseif ( isset( $pointer['title'] ) || isset( $pointer['pointer_id'] ) || isset( $pointer['id'] ) ) {
				$pointer_id = false;

				if ( isset( $pointer['pointer_id'] ) ) {
					$pointer_id = $pointer['pointer_id'];
				} elseif ( isset( $pointer['id'] ) ) {
					$pointer_id = $pointer['id'];
				}

				unset( $pointer['id'] );
				unset( $pointer['pointer_id'] );
				$this->wp_pointer_instance( $pointer_id )
					->add( '#' . $this->wrap_id() . ' > .wponion-field-title', $pointer );
			}
		}
	}

	/**
	 * Handles Fields Sub Field instances.
	 *
	 * @param      $field
	 * @param      $value
	 * @param      $unqiue
	 * @param bool $is_init
	 *
	 * @return mixed|\WPOnion\Field
	 * @uses wponion_add_element | wponion_field
	 */
	protected function sub_field( $field, $value, $unqiue, $is_init = false ) {
		if ( ! isset( $field['sub'] ) ) {
			$sub          = $this->option( 'sub' );
			$field['sub'] = ( ! empty( $sub ) ) ? $sub . '_' . $this->field_id() : $this->field_id();
		}

		$func                  = ( false === $is_init ) ? 'wponion_add_element' : 'wponion_field';
		$field['builder_path'] = $this->option( 'builder_path' );
		$_instance             = wponion_callback( $func, array(
			$field,
			$value,
			array(
				'unique' => $unqiue,
				'base'   => $this->base_unique,
				'module' => $this->module(),
			),
		) );

		if ( true === $is_init && ( ! isset( $field['__no_instance'] ) || isset( $field['__no_instance'] ) && false === $field['__no_instance'] ) ) {
			$field['__instance'] = $_instance;
			return $field;
		}
		return $_instance;
	}

}
