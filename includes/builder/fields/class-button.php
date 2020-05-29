<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Button
 *
 * @package WPO\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Button extends Field {
	/**
	 * Button constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'button', $id, $title, $args );
	}

	/**
	 * @param string $button_type - Possible Values (button,submit,reset)
	 *
	 * @return $this
	 */
	public function button_type( $button_type = 'button' ) {
		return $this->__set( 'button_type', $button_type );
	}

	/**
	 * @param $label
	 *
	 * @return $this
	 */
	public function label( $label ) {
		return $this->__set( 'label', $label );
	}
}
