<?php

namespace WPO;

defined( 'ABSPATH' ) || exit;

use WPO\Helper\Field\Common_Args;

/**
 * Class Field
 *
 * @package WPO
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Field extends Common_Args {
	/**
	 * Renders HTML Output.
	 *
	 * @param $value
	 * @param $unique
	 *
	 * @return string
	 */
	public function render( $value = array(), $unique = array() ) {
		return wponion_add_element( $this, $value, $unique );
	}

	/**
	 * Inits This Field.
	 *
	 * @param $value
	 * @param $unique
	 *
	 * @return bool|\WPOnion\Field
	 */
	public function init_field( $value, $unique ) {
		return wponion_field( $this, $value, $unique );
	}

	/**
	 * Creates A New Field Instance.
	 *
	 * @param bool  $type
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 *
	 * @return false|\WPO\Field
	 */
	public static function create( $type = false, $id = false, $title = false, $args = array() ) {
		if ( $type ) {
			$_type = $type;
			if ( is_array( $type ) ) {
				$_type = wponion_get_field_type( $type, false );
			}
			$class = wponion_field_class_remaps( '\WPO\Fields\\' . $_type, false );
			if ( false === $class ) {
				$class = class_exists( '\WPO\Fields\\' . $_type ) ? '\WPO\Fields\\' . $_type : false;
			}

			if ( is_array( $type ) ) {
				$instance = ( false !== $class ) ? new $class( $type ) : new Field( $type, $id, $title, $args );
			} else {
				$instance = ( false !== $class ) ? new $class( $id, $title, $args ) : new Field( $type, $id, $title, $args );
			}
			return self::_field_after_create( $type, $instance );
		}
		return false;
	}

	/**
	 * @param                                                   $name
	 * @param \WPO\Field|\WPO\Fields\Notice|\WPO\Fields\Content $instance
	 *
	 * @return mixed
	 */
	protected static function _field_after_create( $name, $instance ) {
		switch ( $name ) {
			case 'content_markdown':
			case 'markdown':
				$instance->markdown( true );
				break;
			case 'notice_danger':
			case 'notice_dark':
			case 'notice_info':
			case 'notice_light':
			case 'notice_primary':
			case 'notice_secondary':
			case 'notice_success':
			case 'notice_warning':
				$instance->notice_type( str_replace( 'notice_', '', $name ) );
				break;
			case 'wp_notice_error':
				$instance->notice_type( 'error' );
				break;
			case 'wp_notice_info':
				$instance->notice_type( 'info' );
				break;
			case 'wp_notice_success':
				$instance->notice_type( 'success' );
				break;
			case 'wp_notice_warning':
				$instance->notice_type( 'warning' );
				break;
			case 'hidden':
				$instance->type( 'hidden' );
				break;
			case 'time_picker':
				$instance->type( 'time_picker' );
				break;
		}
		return $instance;
	}

	/**
	 * @param array|\WPO\Field $field
	 *
	 * @return bool|string
	 */
	protected function get_field_id( $field ) {
		if ( isset( $field['id'] ) && ! empty( $field['id'] ) ) {
			return $field['id'];
		}
		return ( wpo_is_field( $field ) ) ? $field->unique() : false;
	}

	/**
	 * Field constructor.
	 *
	 * @param bool  $type
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $type = false, $id = false, $title = false, $args = array() ) {
		unset( $this->module );

		if ( ! is_array( $type ) && ! is_array( $id ) && ! is_array( $title ) && ( is_array( $args ) || ! is_array( $args ) && ! empty( $args ) ) ) {
			$args = wponion_is_array( $args ) ? $args : array();
		} elseif ( ! is_array( $type ) && ! is_array( $id ) && is_array( $title ) && ( is_array( $args ) || ! is_array( $args ) && ! empty( $args ) ) ) {
			$args  = wponion_is_array( $title ) ? $title : array();
			$title = false;
		} elseif ( ! is_array( $type ) && is_array( $id ) && ! is_array( $title ) && ( is_array( $args ) || ! is_array( $args ) && ! empty( $args ) ) ) {
			$args = wponion_is_array( $id ) ? $id : array();
			$id   = false;
		} elseif ( is_array( $type ) && ! is_array( $id ) && ! is_array( $title ) && ( is_array( $args ) || ! is_array( $args ) && ! empty( $args ) ) ) {
			$args = wponion_is_array( $type ) ? $type : array();
			$type = false;
		}

		$args = wponion_parse_args( wponion_cast_array( $args ), array(
			'type'  => $type,
			'id'    => $id,
			'title' => $title,
		) );

		foreach ( $args as $key => $val ) {
			$this->__set( $key, $val );
		}

		$this->unique = null;

		if ( empty( $this->__get( 'id' ) ) ) {
			$this->unique = wponion_hash_string( wponion_hash_array( $args ) . uniqid( 'wponion_' ) );
			$this->__set( 'id', $this->unique );
		} elseif ( ! empty( $this->__get( 'id' ) ) ) {
			$this->unique = $this->__get( 'id' );
		}
	}

	/**
	 * Checks if Given Data is valid field type.
	 *
	 * @param $data
	 *
	 * @return bool
	 */
	public static function is_valid( $data ) {
		return ( isset( $data['type'] ) || ( isset( $data['type'] ) && isset( $data['fields'] ) ) && false === Container::is_valid( $data ) );
	}

	/**
	 * @param $name
	 * @param $value
	 *
	 * @return $this
	 * @since 1.5
	 */
	public function __set( $name, $value ) {
		$this->{$this->array_var}[ $name ] = $value;
		return $this;
	}

	/**
	 * @param $name
	 *
	 * @return bool
	 */
	public function __get( $name ) {
		return ( isset( $this->{$this->array_var}[ $name ] ) ) ? $this->{$this->array_var}[ $name ] : false;
	}

	/**
	 * @param $name
	 *
	 * @return bool
	 */
	public function __isset( $name ) {
		return ( isset( $this->{$this->array_var}[ $name ] ) );
	}

	/**
	 * @param $name
	 */
	public function __unset( $name ) {
		unset( $this->{$this->array_var}[ $name ] );
	}

	/**
	 * @param bool $key
	 *
	 * @return $this
	 */
	public function get_field( $key = false ) {
		return $this;
	}
}
