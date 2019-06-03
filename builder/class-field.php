<?php
/**
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPO;

use WPO\Helper\Field\Common_Args;

if ( ! class_exists( 'WPO\Field' ) ) {
	/**
	 * Class Field
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
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
		 * Creates A New Field Instance.
		 *
		 * @param bool  $type
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return false|\WPO\Field
		 *
		 * @todo \WPO\Fields\Button
		 * @todo \WPO\Fields\WP_List_Table
		 *
		 *
		 * @static
		 */
		public static function create( $type = false, $id = false, $title = false, $args = array() ) {
			if ( $type ) {
				$class    = class_exists( '\WPO\Fields\\' . $type ) ? '\WPO\Fields\\' . $type : wponion_get_field_class_remap( '\WPO\Fields\\' . $type, false );
				$instance = ( false !== $class ) ? new $class( $id, $title, $args ) : new Field( $type, $id, $title, $args );
				return self::_field_after_create( $type, $instance );
			}
			return false;
		}

		/**
		 * @param                                                   $name
		 * @param \WPO\Field|\WPO\Fields\Notice|\WPO\Fields\Content $instance
		 *
		 * @static
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
			}
			return $instance;
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

			$args = wponion_is_array( $args ) ? $args : array();
			$args = $this->parse_args( $args, array(
				'type'  => $type,
				'id'    => $id,
				'title' => $title,
			) );

			foreach ( $args as $key => $val ) {
				$this->_set( $key, $val );
			}

			$this->unique = null;

			if ( ! isset( $this['id'] ) || isset( $this['id'] ) && empty( $this['id'] ) ) {
				$this->unique = wponion_hash_string( $this->unique . wponion_hash_array( $args ) );
			} elseif ( isset( $this['id'] ) ) {
				$this->unique = $this['id'];
			}
		}

		/**
		 * Checks if Given Data is valid field type.
		 *
		 * @param $data
		 *
		 * @static
		 * @return bool
		 */
		public static function is_valid( $data ) {
			return ( false === Container::is_valid( $data ) && isset( $data['type'] ) );
		}

		/**
		 * @param $name
		 * @param $value
		 */
		public function __set( $name, $value ) {
			$this->{$this->array_var}[ $name ] = $value;
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
	}
}
