<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class CSS_Unit
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class CSS_Unit extends Field {
	/**
	 * Faq constructor.
	 *
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $title = false, $args = array() ) {
		parent::__construct( 'css_unit', false, $title, $args );
	}

	/**
	 * @param $css_value
	 *
	 * @return $this
	 */
	public function css_value( $css_value ) {
		return $this->__set( 'css_value', $css_value );
	}

	/**
	 * @param $unit
	 *
	 * @return $this
	 */
	public function unit( $unit ) {
		return $this->__set( 'unit', $unit );
	}
}
