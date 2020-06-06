<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Iframe
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Iframe extends Field {
	/**
	 * Iframe constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'iframe', $id, $title, $args );
	}

	/**
	 * @param bool $width
	 *
	 * @return $this
	 */
	public function width( $width = true ) {
		return $this->__set( 'width', $width );
	}

	/**
	 * @param bool $height
	 *
	 * @return $this
	 */
	public function height( $height = true ) {
		return $this->__set( 'height', $height );
	}

	/**
	 * @param bool $url
	 *
	 * @return $this
	 */
	public function url( $url = true ) {
		return $this->__set( 'url', $url );
	}

	/**
	 * @param bool $heading
	 *
	 * @return $this
	 */
	public function heading( $heading = true ) {
		return $this->__set( 'heading', $heading );
	}
}
