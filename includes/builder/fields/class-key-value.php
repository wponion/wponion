<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Color_Picker
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Key_Value extends Field {
	/**
	 * Color_Group constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'key_value', $id, $title, $args );
	}

	/**
	 * @param $button
	 *
	 * @return $this
	 */
	public function add_button( $button ) {
		return $this->__set( 'add_button', $button );
	}

	/**
	 * @param $button
	 *
	 * @return $this
	 */
	public function remove_button( $button ) {
		return $this->__set( 'remove_button', $button );
	}

	/**
	 * @param bool $limit
	 *
	 * @return $this
	 */
	public function limit( $limit = false ) {
		return $this->__set( 'limit', $limit );
	}

	/**
	 * @param $error_msg
	 *
	 * @return $this
	 */
	public function error_msg( $error_msg ) {
		return $this->__set( 'error_msg', $error_msg );
	}

	/**
	 * @param $input
	 *
	 * @return $this
	 */
	public function key_input( $input ) {
		return $this->__set( 'key_input', $input );
	}

	/**
	 * @param $input
	 *
	 * @return $this
	 */
	public function value_input( $input ) {
		return $this->__set( 'value_input', $input );
	}
}
