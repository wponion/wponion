<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

/**
 * Class Switcher
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Switcher extends Checkbox_Radio {
	/**
	 * @var string
	 */
	protected $checkbox_type = 'switcher';

	/**
	 * @param null $label
	 *
	 * @return $this
	 */
	public function on( $label = null ) {
		return $this->__set( 'on', $label );
	}

	/**
	 * @param null $label
	 *
	 * @return $this
	 */
	public function off( $label = null ) {
		return $this->__set( 'off', $label );
	}

	/**
	 * For Style List Please Refer
	 * https://hunzaboy.github.io/CSS-Checkbox-Library/
	 *
	 * @see https://hunzaboy.github.io/CSS-Checkbox-Library/
	 *
	 * @param string $style
	 *
	 * @return $this
	 */
	public function switch_style( $style = 'style-8' ) {
		return $this->__set( 'switch_style', $style );
	}

	/**
	 * @param $size
	 *
	 * @return $this
	 */
	public function switch_size( $size ) {
		return $this->__set( 'switch_size', $size );
	}

	/**
	 * @param $size
	 *
	 * @return $this
	 */
	public function switch_width( $size ) {
		return $this->__set( 'switch_width', $size );
	}
}
