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
		 * @return bool|false|\WPO\Container|\WPO\Field
		 */
		public function add( $instance ) {
			if ( wpo_is_container( $instance ) ) {
				return $this->container( $instance );
			}
			if ( wpo_is_field( $instance ) ) {
				return $this->field( $instance );
			}
			return $instance;
		}

		/**
		 * Generates A Unique Slug.
		 *
		 * @param null $slug
		 *
		 * @return $this|string
		 */
		private function get_slug( $slug = null ) {
			if ( null !== $slug ) {
				$this->slug = $slug;
				return $this;
			}
			if ( empty( $this->slug ) ) {
				$this->slug = sanitize_title( 'auto-' . $this->title() );
			}
			return $this->slug;
		}

		/**
		 * @param null $slug
		 *
		 * @return string|\WPO\Container
		 */
		public function name( $slug = null ) {
			return $this->get_slug( $slug );
		}

		/**
		 * @param null $slug
		 *
		 * @return string|\WPO\Container
		 */
		public function slug( $slug = null ) {
			return $this->get_slug( $slug );
		}

		/**
		 * @param null $title
		 *
		 * @return $this|bool
		 */
		public function title( $title = null ) {
			if ( null !== $title ) {
				$this->title = $title;
				return $this;
			}
			return $this->title;
		}

		/**
		 * @param null $icon
		 *
		 * @return $this|bool|string
		 */
		public function icon( $icon = null ) {
			if ( null !== $icon ) {
				$this->icon = $icon;
				return $this;
			}
			return $this->icon;
		}

		/**
		 * @param null $callback
		 *
		 * @return $this|callable|string|array
		 */
		public function callback( $callback = null ) {
			if ( null !== $callback ) {
				$this->callback = $callback;
				return $this;
			}
			return $this->callback;
		}

		/**
		 * @param null $href
		 *
		 * @return $this|bool
		 */
		public function href( $href = null ) {
			if ( null !== $href ) {
				$this->href = $href;
				return $this;
			}
			return $this->href;
		}

		/**
		 * @param null $class
		 *
		 * @return $this|array
		 */
		public function container_class( $class = null ) {
			if ( null !== $class ) {
				$this->class = $class;
				return $this;
			}
			return $this->class;
		}

		/**
		 * @param null $separator
		 *
		 * @return $this|bool
		 */
		public function is_separator( $separator = null ) {
			if ( null !== $separator ) {
				$this->separator = $separator;
				return $this;
			}
			return ( $this->separator );
		}

		/**
		 * @param bool $is_grouped
		 *
		 * @return \WPO\Container|\WPO\Fields\fieldset
		 */
		public function set_group( $is_grouped = true ) {
			$slug = ( true === $is_grouped ) ? $this->name() : $is_grouped;
			return ( true === $is_grouped ) ? $this->fieldset( $slug, false, array( 'only_field' => true ) ) : $this;
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
