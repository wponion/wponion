<?php

namespace WPO\Helper\Container;

use WPO\Helper\Base;

if ( ! class_exists( '\WPO\Helper\Container\Helper' ) ) {
	abstract class Helper extends Base implements \WPO\Helper\Interfaces\Container, \WPO\Helper\Interfaces\Field {
		/**
		 * Container Title.
		 *
		 * @var bool
		 * @access
		 */
		protected $title = false;

		/**
		 * Container Slug / Name.
		 *
		 * @var bool
		 * @access
		 */
		protected $slug = false;

		/**
		 * Container Icon.
		 *
		 * @var bool
		 * @access
		 */
		protected $icon = false;

		/**
		 * Container Callback
		 *
		 * @var null
		 * @access
		 */
		protected $callback = false;

		/**
		 * Container Href
		 * Custom Link
		 *
		 * @var bool
		 * @access
		 */
		protected $href = false;

		/**
		 * Fields.
		 *
		 * @var bool|array
		 * @access
		 */
		protected $fields = false;

		/**
		 * Href Query Args.
		 *
		 * @var array
		 * @access
		 */
		protected $query_args = array();

		/**
		 * CSS Class.
		 *
		 * @var array
		 * @access
		 */
		protected $class = array();

		/**
		 * Attributes.
		 *
		 * @var array
		 * @access
		 */
		protected $attributes = array();

		/**
		 * Sub Containers
		 *
		 * @var array
		 * @access
		 */
		protected $sub_containers = array();

		/**
		 * Returns Sub Containers.
		 *
		 * @return array|mixed
		 */
		public function containers() {
			return ( $this->has_containers() ) ? $this->sub_containers : array();
		}

		/**
		 * Checks If Current Instance Has Container.
		 *
		 * @return bool
		 */
		public function has_containers() {
			return ( false !== $this->sub_containers && wponion_is_array( $this->sub_containers ) );
		}

		/**
		 * Checks If Current Instance Has Fields.
		 *
		 * @return bool
		 */
		public function has_fields() {
			return ( false !== $this->fields && wponion_is_array( $this->fields ) );
		}

		/**
		 * Returns All Fields.
		 *
		 * @return array
		 */
		public function fields() {
			return ( $this->has_fields() ) ? $this->fields : array();
		}

		/**
		 * Returns First Container Instance.
		 *
		 * @return false|\WPO\Container
		 */
		public function first_container() {
			$first = current( $this->containers() );
			return ( ! empty( $first ) && $first instanceof \WPO\Container ) ? $first : false;
		}

		/**
		 * Checks If Conntainer Exists
		 * and if exists then returns the container instance.
		 *
		 * @param $container_id
		 *
		 * @return \WPO\Container|false
		 */
		public function container_exists( $container_id ) {
			if ( $this->has_containers() ) {
				/* @var $container \WPO\Container */
				foreach ( $this->containers() as $container ) {
					if ( $container->name() === $container_id ) {
						return $container;
					}
				}
			}
			return false;
		}

		/**
		 * Checks If Field Exists.
		 *
		 * @param $field_id
		 *
		 * @return bool|mixed
		 */
		public function field_exists( $field_id ) {
			if ( $this->has_fields() ) {
				/* @var $container \WPO\Field */
				foreach ( $this->fields() as $field ) {
					if ( $field->id() === $field_id ) {
						return $field;
					}
				}
			}
			return false;
		}

		/**
		 * @param $slug
		 *
		 * @return $this|\WPO\Container
		 */
		public function set_slug( $slug ) {
			$this->slug = $slug;
			return $this;
		}

		/**
		 * @param $slug
		 *
		 * @return \WPO\Helper\Container\Helper
		 */
		public function set_name( $slug ) {
			return $this->set_slug( $slug );
		}

		/**
		 * @param $title
		 *
		 * @return $this|\WPO\Container
		 */
		public function set_title( $title ) {
			$this->title = $title;
			return $this;
		}

		/**
		 * @param $icon
		 *
		 * @return $this|\WPO\Container
		 */
		public function set_icon( $icon ) {
			$this->icon = $icon;
			return $this;
		}

		/**
		 * @param $href
		 *
		 * @return $this|\WPO\Container
		 */
		public function set_href( $href ) {
			$this->href = $href;
			return $this;
		}

		/**
		 * @param $callback
		 *
		 * @return $this|\WPO\Container
		 */
		public function set_callback( $callback ) {
			$this->callback = $callback;
			return $this;
		}

		/**
		 * @param $class
		 *
		 * @return $this|\WPO\Container
		 */
		public function set_class( $class ) {
			$this->class = $class;
			return $this;
		}

		/**
		 * @param null $attributes
		 * @param bool $merge
		 *
		 * @return $this|\WPO\Container
		 */
		public function set_attributes( $attributes = null, $merge = true ) {
			if ( true === $merge ) {
				if ( wponion_is_array( $this->attributes ) ) {
					$this->attributes = $this->parse_args( $attributes, $this->attributes );
				} else {
					$this->attributes = $attributes;
				}
			} else {
				$this->attributes = $attributes;
			}

			return $this;
		}

		/**
		 * @param $key
		 * @param $value
		 *
		 * @return \WPO\Helper\Container\Helper
		 */
		public function set_attribute( $key, $value ) {
			return $this->set_attributes( array( $key => $value ), true );
		}

		/**
		 * @param $key
		 * @param $value
		 *
		 * @return \WPO\Helper\Container\Helper
		 */
		public function attribute( $key, $value ) {
			return $this->set_attribute( $key, $value );
		}

		/**
		 * @param null $query_args
		 * @param bool $merge
		 *
		 * @return $this|\WPO\Container
		 */
		public function set_query_args( $query_args = null, $merge = true ) {
			if ( true === $merge ) {
				if ( wponion_is_array( $this->query_args ) ) {
					$this->query_args = $this->parse_args( $query_args, $this->query_args );
				} else {
					$this->query_args = $query_args;
				}
			} else {
				$this->query_args = $query_args;
			}

			return $this;
		}

		/**
		 * @param $key
		 * @param $value
		 *
		 * @return $this|\WPO\Container
		 */
		public function set_query_arg( $key, $value ) {
			return $this->set_query_args( array( $key => $value ), true );
		}

		/**
		 * @param $key
		 * @param $value
		 *
		 * @return $this|\WPO\Container
		 */
		public function query_arg( $key, $value ) {
			return $this->set_query_arg( $key, $value );
		}
	}
}
