<?php

namespace WPO\Helper\Container;

use WPO\Container;
use WPO\Helper\Base;
use WPO\Helper\Interfaces\Field;

if ( ! class_exists( '\WPO\Helper\Container\Helper' ) ) {
	/**
	 * Class Helper
	 *
	 * @package WPO\Helper\Container
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class Helper extends Base implements \WPO\Helper\Interfaces\Container, Field {
		/**
		 * Container Title.
		 *
		 * @var bool
		 * @access
		 */
		protected $title = false;

		/**
		 * Container separator.
		 *
		 * @var bool
		 * @access
		 */
		protected $separator = false;

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
		 * True / False if container is disabled.
		 *
		 * @var bool
		 * @access
		 */
		protected $disabled = false;

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
		 * @return bool
		 */
		public function is_disabled() {
			return $this->disabled;
		}

		/**
		 * @param array $fields
		 *
		 * @return $this|\WPO\Container
		 */
		public function set_fields( $fields ) {
			$this->fields = $fields;
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
		 * @param null|array|string $attributes
		 * @param bool              $merge
		 *
		 * @return $this|array
		 */
		public function attributes( $attributes = null, $merge = true ) {
			if ( null === $attributes ) {
				return $this->attributes;
			}
			if ( true !== $merge ) {
				$this->attributes = $attributes;
			} else {
				$this->attributes = ( ! wponion_is_array( $this->attributes ) ) ? array() : $this->attributes;
				$this->attributes = $this->parse_args( $attributes, $this->attributes );
			}
			return $this;
		}

		/**
		 * @param $key
		 * @param $value
		 *
		 * @return \WPO\Helper\Container\Helper
		 */
		public function attribute( $key, $value ) {
			return $this->attributes( array( $key => $value ), true );
		}

		/**
		 * @param null $query_args
		 * @param bool $merge
		 *
		 * @return $this|array
		 */
		public function query_args( $query_args = null, $merge = true ) {
			if ( null === $query_args ) {
				return $this->query_args;
			}
			if ( false === $merge ) {
				$this->query_args = $query_args;
			} else {
				$this->query_args = ( ! wponion_is_array( $this->query_args ) ) ? array() : $this->query_args;
				$this->query_args = $this->parse_args( $query_args, $this->query_args );
			}

			return $this;
		}

		/**
		 * @param $key
		 * @param $value
		 *
		 * @return $this|\WPO\Container
		 */
		public function query_arg( $key, $value ) {
			return $this->query_args( $key, $value );
		}

		/**
		 * @return $this
		 */
		public function disable() {
			$this->disabled = true;
			return $this;
		}

		/**
		 * @return $this
		 */
		public function enable() {
			$this->disabled = false;
			return $this;
		}
	}
}
