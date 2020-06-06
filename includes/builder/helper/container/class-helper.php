<?php

namespace WPO\Helper\Container;

defined( 'ABSPATH' ) || exit;

use WPO\Container;
use WPO\Helper\Base;
use WPO\Helper\Interfaces\Field;
use WPO\Helper\Interfaces\Container as I_Container;

/**
 * Class Helper
 *
 * @package WPO\Helper\Container
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Helper extends Base implements I_Container, Field {
	/**
	 * Container Title.
	 *
	 * @var bool
	 */
	protected $title = false;

	/**
	 * Container separator.
	 *
	 * @var bool
	 */
	protected $separator = false;

	/**
	 * Container Slug / Name.
	 *
	 * @var bool
	 */
	protected $slug = false;

	/**
	 * Container Icon.
	 *
	 * @var bool
	 */
	protected $icon = false;

	/**
	 * Container Callback
	 *
	 * @var null
	 */
	protected $callback = false;

	/**
	 * Container Href
	 * Custom Link
	 *
	 * @var bool
	 */
	protected $href = false;

	/**
	 * True / False if container is disabled.
	 *
	 * @var bool
	 */
	protected $disabled = false;

	/**
	 * Fields.
	 *
	 * @var bool|array
	 */
	protected $fields = false;

	/**
	 * Href Query Args.
	 *
	 * @var array
	 */
	protected $query_args = array();

	/**
	 * CSS Class.
	 *
	 * @var array
	 */
	protected $class = array();

	/**
	 * Attributes.
	 *
	 * @var array
	 */
	protected $attributes = array();

	/**
	 * Sub Containers
	 *
	 * @var array
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
		if ( wponion_is_array( $fields ) && ! empty( $fields ) ) {
			foreach ( $fields as $field ) {
				if ( \WPO\Field::is_valid( $field ) ) {
					$this->field( $field );
				}
			}
		}
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
		$this->attributes = wponion_handle_array_merge( $attributes, $this->attributes, $merge );
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

		$this->query_args = wponion_handle_array_merge( $query_args, $this->query_args, $merge );
		return $this;
	}

	/**
	 * @param $key
	 * @param $value
	 *
	 * @return $this|\WPO\Container
	 */
	public function query_arg( $key, $value ) {
		return $this->query_args( array( $key => $value ) );
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
