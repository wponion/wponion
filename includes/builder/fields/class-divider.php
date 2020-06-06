<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Divider
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Divider extends Field {
	/**
	 * Divider constructor.
	 *
	 * @param $text
	 */
	public function __construct( $text ) {
		parent::__construct( 'divider', false, false, array( 'text' => $text ) );
	}

	/**
	 * @param $text
	 *
	 * @return $this
	 */
	public function text( $text ) {
		return $this->__set( 'text', $text );
	}
}
