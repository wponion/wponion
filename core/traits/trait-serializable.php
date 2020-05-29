<?php

namespace WPOnion\Traits;

defined( 'ABSPATH' ) || exit;

/**
 * Trait Serializable
 *
 * @package WPOnion\Traits
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
trait Serializable {
	/**
	 * serialize the data in $this->variable
	 *
	 * @return string
	 */
	public function serialize() {
		return serialize( $this->get() );
	}

	/**
	 * unserialize and stores the data into $this->variable.
	 *
	 * @param string $content
	 */
	public function unserialize( $content ) {
		$this->set( unserialize( $content ) );
	}
}
