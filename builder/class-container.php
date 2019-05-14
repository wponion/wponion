<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPO;

use WPO\Helper\Container\Functions as Container_Functions;
use WPO\Helper\Container\Helper;
use WPO\Helper\Field\Functions as Field_Functions;
use WPO\Helper\Field\Types as Field_Types;

if ( ! class_exists( 'WPO\Container' ) ) {
	/**
	 * Class Container
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Container extends Helper {
		/**
		 * @var array
		 * @access
		 */
		protected $custom_data = array();

		/**
		 * Loads Required Container_Functions.
		 *
		 * @see \WPO\Helper\Container\Functions
		 */
		use Container_Functions;

		/**
		 * Loads Required Field_Functions.
		 *
		 * @see \WPO\Helper\Field\Functions
		 */
		use Field_Functions;

		/**
		 * Loads Required Field_Types.
		 *
		 * @see \WPO\Helper\Field\Types
		 */
		use Field_Types;

		/**
		 * Container constructor.
		 *
		 * @param bool|array $slug
		 * @param bool       $title
		 * @param bool       $icon
		 */
		public function __construct( $slug = false, $title = false, $icon = false ) {
			if ( wponion_is_array( $slug ) && ! empty( $slug ) ) {
				foreach ( $slug as $key => $val ) {
					if ( method_exists( $this, 'set_' . $key ) ) {
						try {
							$this->{'set_' . $key}( $val );
						} catch ( \Exception $exception ) {

						}
					}
				}
			} else {
				$this->slug  = $slug;
				$this->title = $title;
				$this->icon  = $icon;
			}
		}

		/**
		 * @param bool $container_slug
		 * @param bool $title
		 * @param bool $icon
		 *
		 * @static
		 * @return \WPO\Container
		 */
		public static function create( $container_slug = false, $title = false, $icon = false ) {
			return new self( $container_slug, $title, $icon );
		}

		/**
		 * @param $instance
		 *
		 * @return $this|\WPO\Builder|\WPO\Container|\WPO\Field
		 */
		public function add( $instance ) {
			if ( $instance instanceof Container ) {
				return $this->container( $instance );
			}
			if ( $instance instanceof Field ) {
				return $this->field( $instance );
			}
			return $this;
		}

		/**
		 * Gets A Unique Slug
		 *
		 * @return array|bool|string
		 */
		private function get_slug() {
			if ( empty( $this->slug ) ) {
				$this->slug = sanitize_title( 'auto-' . $this->title() );
			}
			return $this->slug;
		}

		/**
		 * @return string|bool
		 */
		public function name() {
			return $this->get_slug();
		}

		/**
		 * @return string|bool
		 */
		public function slug() {
			return $this->get_slug();
		}

		/**
		 * @return string|bool
		 */
		public function title() {
			return $this->title;
		}

		/**
		 * @return string|bool
		 */
		public function icon() {
			return $this->icon;
		}

		/**
		 * @return callable|bool
		 */
		public function callback() {
			return $this->callback;
		}

		/**
		 * @return array
		 */
		public function attributes() {
			return $this->attributes;
		}

		/**
		 * @return bool|string
		 */
		public function href() {
			return $this->href;
		}

		/**
		 * @return array
		 */
		public function query_args() {
			return $this->query_args;
		}

		/**
		 * @return array|string
		 */
		public function container_class() {
			return $this->class;
		}

		/**
		 * @return bool
		 */
		public function is_separator() {
			return ( $this->separator );
		}

		/**
		 * Checks if Given data is valid container data.
		 *
		 * @param $args
		 *
		 * @static
		 * @return bool
		 */
		public static function is_valid( $args ) {
			return ( isset( $args['sections'] ) || isset( $args['fields'] ) || isset( $args['href'] ) || isset( $args['callback'] ) );
		}

		/**
		 * @param $name
		 * @param $value
		 */
		public function __set( $name, $value ) {
			$defined_vars = array_keys( get_class_vars( __CLASS__ ) );
			if ( ! in_array( $name, $defined_vars, true ) ) {
				$this->custom_data[ $name ] = $value;
			} else {
				throw new \Error( 'WPOnion Container\'s Core Variables Cannot Me Modified' );
			}
		}

		/**
		 * @param $name
		 *
		 * @return bool
		 */
		public function __get( $name ) {
			$defined_vars = array_keys( get_class_vars( __CLASS__ ) );
			if ( ! in_array( $name, $defined_vars, true ) ) {
				return ( isset( $this->custom_data[ $name ] ) ) ? $this->custom_data[ $name ] : false;
			}
			return false;
		}

		/**
		 * @param $name
		 *
		 * @return bool
		 */
		public function __isset( $name ) {
			$defined_vars = array_keys( get_class_vars( __CLASS__ ) );
			if ( ! in_array( $name, $defined_vars, true ) ) {
				return ( isset( $this->custom_data[ $name ] ) );
			}
			return false;
		}

		/**
		 * @param $name
		 */
		public function __unset( $name ) {
			unset( $this->custom_data[ $name ] );
		}
	}
}
