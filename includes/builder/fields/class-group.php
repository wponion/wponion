<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;


/**
 * Class Accordion
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Group extends Accordion {
	/**
	 * Group constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( $id, $title, $args );
		$this->__set( 'type', 'group' );
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
}
