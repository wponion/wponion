<?php

namespace WPO;

defined( 'ABSPATH' ) || exit;

use Error;
use WPO\Helper\Container\Functions as Container_Functions;
use WPO\Helper\Container\Helper;
use WPO\Helper\Field\Functions as Field_Functions;
use WPO\Helper\Field\Types as Field_Types;

/**
 * Class Container
 *
 * @package WPO
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Container extends Helper {
	/**
	 * @var array
	 */
	protected $custom_data = array();

	use Container_Functions {
		json_serialize as protected json_serialize_base;
	}
	use Field_Functions;
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
				if ( wponion_is_callable( array( $this, $key ) ) ) {
					wponion_callback( array( $this, $key ), array( $val ) );
				}
			}
		} else {
			$this->slug  = $slug;
			$this->title = $title;
			$this->icon  = $icon;
		}
	}

	/**
	 * @param bool $slug
	 * @param bool $title
	 * @param bool $icon
	 *
	 * @return \WPO\Container
	 */
	public static function create( $slug = false, $title = false, $icon = false ) {
		return new self( $slug, $title, $icon );
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
			return $this->add_field( $instance );
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
		return ( false !== $is_grouped ) ? $this->fieldset( $slug, false, array( 'only_field' => true ) ) : $this;
	}

	/**
	 * Checks if Given data is valid container data.
	 *
	 * @param $args
	 *
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
			throw new Error( 'WPOnion Container\'s Core Variables Cannot Me Modified' );
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

	/**
	 * @param bool|string $key
	 *
	 * @return array|$this
	 */
	public function get( $key = false ) {
		if ( ! empty( $key ) ) {
			if ( $this->has_fields() ) {
				return $this->fields( $key );
			}
			if ( $this->has_containers() ) {
				return $this->containers( $key );
			}
		}
		return $this;
	}

	/**
	 * @param string     $type
	 * @param bool|array $data
	 *
	 * @return array|bool
	 */
	protected function json_serialize( $type, $data = false ) {
		$return = $this->json_serialize_base( $type, $data );

		switch ( $type ) {
			case 'get':
				$defined_vars = array_keys( get_class_vars( static::class ) );
				foreach ( $defined_vars as $var ) {
					if ( ! in_array( $var, array( 'containers', 'fields' ), true ) ) {
						$return[ $var ] = $this->{$var};
					}
				}
				return $return;
				break;
			case 'set':
				$defined_vars = array_keys( get_class_vars( static::class ) );
				foreach ( $data as $var => $value ) {
					if ( ! in_array( $var, array( 'containers', 'fields' ), true ) ) {
						if ( in_array( $var, $defined_vars, true ) ) {
							$this->{$var} = $data[ $var ];
						}
					}
				}
				break;
		}
		return false;
	}
}

