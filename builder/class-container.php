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

if ( ! class_exists( '\WPO\Container' ) ) {
	/**
	 * Class Container
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Container extends Helper\Base {
		/**
		 * Container constructor.
		 *
		 * @param bool $slug
		 * @param bool $title
		 * @param bool $icon
		 */
		public function __construct( $slug = false, $title = false, $icon = false ) {
			unset( $this->plugin_id );
			unset( $this->settings );
			unset( $this->module );

			$args = array();

			if ( ! wponion_is_array( $slug ) && ! wponion_is_array( $title ) && ! wponion_is_array( $icon ) ) {
				$args = $this->set_args( array(
					'title' => $title,
					'name'  => $slug,
					'icon'  => $icon,
				) );
			} elseif ( wponion_is_array( $slug ) ) {
				$args = $this->set_args( $slug );
			} elseif ( ! wponion_is_array( $slug ) && wponion_is_array( $title ) ) {
				$args = $this->set_args( $this->parse_args( $title, array(
					'name' => $slug,
				) ) );
			} elseif ( ! wponion_is_array( $slug ) && ! wponion_is_array( $title ) && wponion_is_array( $icon ) ) {
				$args = $this->set_args( $this->parse_args( $icon, array(
					'name'  => $slug,
					'title' => $title,
				) ) );
			}

			if ( ! isset( $args['name'] ) || isset( $args['name'] ) && empty( $args['name'] ) ) {
				$args['name'] = wponion_hash_array( $args );
			}

			$this->variable          = 'fields';
			$this->{$this->variable} = $args;
			$this->unique            = $this->name();
		}

		/**
		 * @param bool $slug
		 * @param bool $title
		 * @param bool $icon
		 *
		 * @static
		 * @return \WPO\Container
		 */
		public static function create( $slug = false, $title = false, $icon = false ) {
			$args = func_get_args();
			if ( empty( $args ) ) {
				return new static();
			}
			if ( 3 === count( $args ) ) {
				return new static( $args[0], $args[1], $args[2] );
			} elseif ( 2 === count( $args ) ) {
				return new static( $args[0], $args[1], false );
			}
			return new static( $args[0], false, false );
		}

		/**
		 * @param null $name
		 *
		 * @return mixed|\WPO\Container
		 */
		public function name( $name = null ) {
			if ( null !== $name ) {
				$this->unique = $name;
			}
			return $this->_set_get_args( 'name', $name );
		}

		/**
		 * @param null $title
		 *
		 * @return mixed|\WPO\Container
		 */
		public function title( $title = null ) {
			return $this->_set_get_args( 'title', $title );
		}

		/**
		 * @param null $icon
		 *
		 * @return mixed|\WPO\Container
		 */
		public function icon( $icon = null ) {
			return $this->_set_get_args( 'icon', $icon );
		}

		/**
		 * @param null $callback
		 *
		 * @return mixed|\WPO\Container
		 */
		public function callback( $callback = null ) {
			return $this->_set_get_args( 'callback', $callback );
		}

		/**
		 * @param null $href
		 *
		 * @return mixed|\WPO\Container
		 */
		public function href( $href = null ) {
			return $this->_set_get_args( 'href', $href );
		}

		/**
		 * @param null $fields
		 *
		 * @return mixed|\WPO\Container
		 */
		public function fields( $fields = null ) {
			return $this->_set_get_args( 'fields', $fields );
		}

		/**
		 * @param null $sections
		 *
		 * @return mixed|\WPO\Container
		 */
		public function containers( $sections = null ) {
			return $this->_set_get_args( 'containers', $sections );
		}

		/**
		 * @param null $query_args
		 *
		 * @return mixed|\WPO\Container
		 */
		public function query_args( $query_args = null ) {
			return $this->_set_get_args( 'query_args', $query_args );
		}

		/**
		 * @param null $attributes
		 *
		 * @return mixed|\WPO\Container
		 */
		public function attributes( $attributes = null ) {
			return $this->_set_get_args( 'attributes', $attributes );
		}

		/**
		 * @param null $css_class
		 *
		 * @return mixed|\WPO\Container
		 */
		public function css_class( $css_class = null ) {
			return $this->_set_get_args( 'css_class', $css_class );
		}

		/**
		 * Returns Default Args.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array(
				'title'      => false,
				'slug'       => false,
				'icon'       => false,
				'callback'   => false,
				'href'       => false,
				'fields'     => false,
				'query_args' => array(),
				'css_class'  => array(),
				'attributes' => array(),
				'containers' => false,
			);
		}

		/**
		 * Checks If Containers Exists.
		 *
		 * @return bool
		 */
		public function has_containers() {
			return ( isset( $this->{$this->variable}['containers'] ) && false !== $this->{$this->variable}['containers'] && wponion_is_array( $this->{$this->variable}['containers'] ) );
		}

		/**
		 * Checks if Fields Exists.
		 *
		 * @return bool
		 */
		public function has_fields() {
			return ( isset( $this->{$this->variable}['fields'] ) && false !== $this->{$this->variable}['fields'] && wponion_is_array( $this->{$this->variable}['fields'] ) );
		}

		/**
		 * Checks if Href Exists.
		 *
		 * @return bool
		 */
		public function has_href() {
			return ( isset( $this->{$this->variable}['href'] ) && false !== $this->{$this->variable}['href'] );
		}

		/**
		 * Checks If Callback Exists.
		 *
		 * @return bool
		 */
		public function has_callback() {
			return ( isset( $this->{$this->variable}['callback'] ) && false !== $this->{$this->variable}['callback'] );
		}

		/**
		 * @param      $container_slug_or_instance
		 * @param bool $page_title
		 * @param bool $page_icon
		 *
		 * @return mixed|\WPO\Container|\WPO\Helper\Base
		 */
		public function container( $container_slug_or_instance, $page_title = false, $page_icon = false ) {
			if ( ! isset( $this->{$this->variable}['containers'] ) ) {
				$this->{$this->variable}['containers'] = array();
			}

			$_instance = parent::container( $container_slug_or_instance, $page_title, $page_icon );
			$instance  = $_instance;
			if ( $container_slug_or_instance instanceof Container ) {
				$instance = $container_slug_or_instance;
			}

			if ( $instance instanceof Container ) {
				if ( isset( $this->{$this->variable}[ $instance->unique() ] ) ) {
					$this->{$this->variable}['containers'][ $instance->unique() ] = $instance;
					unset( $this->{$this->variable}[ $instance->unique() ] );
				}
			}

			return $_instance;

		}
	}
}
