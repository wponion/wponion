<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Checkbox_Radio
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Checkbox_Radio extends Field {
	/**
	 * @var string
	 */
	protected $checkbox_type = '';

	/**
	 * @var bool
	 */
	protected $option_group = false;

	/**
	 * Checkbox_Radio constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( $this->checkbox_type, $id, $title, $args );
	}

	/**
	 * @param $label
	 *
	 * @return $this
	 */
	public function label( $label ) {
		return $this->__set( 'label', $label );
	}

	/**
	 * @param $is_inline
	 *
	 * @return $this
	 */
	public function inline( $is_inline = false ) {
		return $this->__set( 'inline', $is_inline );
	}

	/**
	 * @param string $option_group
	 *
	 * @return $this
	 */
	public function option_group( $option_group = '' ) {
		$this->option_group = $option_group;
		return $this;
	}

	/**
	 * @param array $options
	 * @param bool  $merge
	 *
	 * @return $this|\WPO\Field
	 */
	public function options( $options = array(), $merge = true ) {
		if ( false !== $this->option_group ) {
			$_options = ( isset( $this[ 'options/' . $this->option_group ] ) ) ? $this[ 'options/' . $this->option_group ] : array();
		} else {
			$_options = $this->options;
		}

		if ( true === $merge ) {
			$_options = ( wponion_is_array( $_options ) ) ? wponion_parse_args( $options, $_options ) : $options;
		} else {
			$_options = $options;
		}

		if ( false !== $this->option_group ) {
			$this[ 'options/' . $this->option_group ] = $_options;
		} else {
			$this->options = $_options;
		}
		return $this;
	}

	/**
	 * @param mixed $offset
	 * @param mixed $value
	 */
	public function offsetSet( $offset, $value ) {
		if ( false !== $this->option_group && 'options' !== $offset ) {
			$this->option_group = false;
		}
		parent::offsetSet( $offset, $value );
	}
}
