<?php

namespace WPO\Helper\Container;

use WPO\Container;
use WPO\Helper\Base;

if ( ! class_exists( '\WPO\Helper\Container\Helper' ) ) {
	/**
	 * Class Helper
	 *
	 * @package WPO\Helper\Container
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
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
		protected $containers = array();

		/**
		 * Checks if Href Exists.
		 *
		 * @return bool
		 */
		public function has_href() {
			return ( false !== $this->href );
		}

		/**
		 * Checks If Callback Exists.
		 *
		 * @return bool
		 */
		public function has_callback() {
			return ( false !== $this->callback && wponion_is_callable( $this->callback ) );
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
		 * @return $this|\WPO\Container
		 */
		public function set_fields( $slug ) {
			$this->fields = $slug;
			return $this;
		}

		/**
		 * Sets Sections.
		 *
		 * @param $sections
		 *
		 * @return $this
		 */
		public function set_sections( $sections ) {
			if ( wponion_is_array( $sections ) && ! empty( $sections ) ) {
				foreach ( $sections as $section ) {
					if ( Container::is_valid( $section ) ) {
						$this->container( new Container( $section ) );
					}
				}
			}
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
