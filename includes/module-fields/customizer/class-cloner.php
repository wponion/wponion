<?php

namespace WPOnion\Module_Fields\Customizer;

defined( 'ABSPATH' ) || exit;

use WPOnion\Modules\Customizer\Control as Control;

/**
 * Class Cloner
 *
 * @package WPOnion\Module_Fields\Customizer
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Cloner extends Control {
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
		return array_filter( $this->value() );
	}
}
