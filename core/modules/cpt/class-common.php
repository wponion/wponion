<?php

namespace WPOnion\Modules\CPT;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Modules\CPT\Common' ) ) {
	/**
	 * Class Common
	 *
	 * @package WPOnion\Modules\CPT
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method self|static|$this show_ui( $show_ui )
	 * @method self|static|$this show_in_nav_menus( $show_in_nav_menus )
	 * @method self|static|$this show_in_rest( $show_in_rest )
	 * @method self|static|$this rest_base( $rest_base )
	 * @method self|static|$this rest_controller_class( $rest_controller_class )
	 * @method self|static|$this rewrite( $rewrite )
	 * @method self|static|$this query_var( $query_var )
	 * @method self|static|$this label( $label )
	 * @method self|static|$this description( $description )
	 * @method self|static|$this hierarchical( $hierarchical )
	 * @method self|static|$this capabilities( $capabilities )
	 */
	abstract class Common {
		/**
		 * @var \WPOnion\Modules\CPT\Labels\Post_Type
		 * @access
		 */
		protected $labels = false;

		/**
		 * @var array
		 * @access
		 */
		protected $arguments = array();

		/**
		 * Sets An Argument.
		 *
		 * @param $key
		 * @param $value
		 *
		 * @return self|static|$this
		 */
		protected function set_arg( $key, $value ) {
			$this->arguments[ $key ] = $value;
			return $this;
		}

		/**
		 * Gets An Argument.
		 *
		 * @param $key
		 * @param $default
		 *
		 * @return self|static|$this
		 */
		protected function get_arg( $key, $default ) {
			return ( isset( $this->arguments[ $key ] ) ) ? $this->arguments[ $key ] : $default;
		}

		/**
		 * @param $name
		 * @param $arguments
		 *
		 * @return self|static|$this
		 */
		public function __call( $name, $arguments ) {
			$array = array(
				'show_ui',
				'show_in_nav_menus',
				'show_in_rest',
				'rest_base',
				'rest_controller_class',
				'rewrite',
				'query_var',
				'label',
				'description',
				'hierarchical',
				'capabilities',
			);
			if ( in_array( $name, $array, true ) && isset( $arguments[0] ) ) {
				return $this->set_arg( $name, $arguments[0] );
			}
			return null;
		}

		/**
		 * @return self|static|$this
		 */
		public function is_public() {
			return $this->set_arg( 'public', true );
		}

		/**
		 * @return self|static|$this
		 */
		public function is_private() {
			return $this->set_arg( 'private', true );
		}

		/**
		 * Inits Labels.
		 *
		 * @param $class
		 */
		protected function init_labels( $class ) {
			if ( isset( $this->arguments['labels'] ) ) {
				$this->labels = class_exists( $class ) ? new $class( $this->arguments['labels'] ) : false;
			} else {
				$singular     = ( isset( $this->arguments['singular'] ) ) ? $this->arguments['singular'] : false;
				$plural       = ( isset( $this->arguments['plural'] ) ) ? $this->arguments['plural'] : false;
				$this->labels = class_exists( $class ) ? new $class( $singular, $plural ) : false;
			}
			unset( $this->arguments['singular'] );
			unset( $this->arguments['plural'] );
			unset( $this->arguments['labels'] );
		}

		/**
		 * @param $name
		 * @param $value
		 */
		public function __set( $name, $value ) {
			$this->arguments[ $name ] = $value;
		}

		/**
		 * @param $name
		 *
		 * @return bool
		 */
		public function __isset( $name ) {
			return ( isset( $this->arguments[ $name ] ) );
		}

		/**
		 * @param $name
		 *
		 * @return bool
		 */
		public function __get( $name ) {
			return ( isset( $this->arguments[ $name ] ) );
		}

		/**
		 * @param $name
		 */
		public function __unset( $name ) {
			unset( $this->arguments[ $name ] );
		}
	}
}
