<?php

namespace WPOnion\Module_Fields\Customizer;

defined( 'ABSPATH' ) || exit;

use WPOnion\Modules\Customizer\Control as Control;

/**
 * Class Button_Set
 *
 * @package WPOnion\Module_Fields\Customizer
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Button_Set extends Control {
	/**
	 * @var bool
	 */
	protected $link_attr = false;

	/**
	 * Returns Element Value.
	 *
	 * @return mixed
	 */
	protected function el_value() {
		return is_array( $this->value() ) ? array_filter( $this->value() ) : $this->value();
	}

	/**
	 * Fields Arguments.
	 *
	 * @return array
	 */
	protected function field() {
		$this->link_attr = ( false === $this->options['multiple'] ) ? true : false;
		return parent::field();
	}
}
