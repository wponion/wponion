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
class Date_Picker extends Field {
	/**
	 * Date_Picker constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'date_picker', $id, $title, $args );
	}

	/**
	 * @param bool $is_range
	 *
	 * @return $this
	 */
	public function range( $is_range = false ) {
		return $this->__set( 'range', $is_range );
	}

	/**
	 * For more information on settings please refer
	 * https://flatpickr.js.org/
	 *
	 * @param $args
	 *
	 * @return $this
	 */
	public function settings( $args ) {
		return $this->__set( 'settings', $args );
	}

	/**
	 * Options Are :
	 * - default
	 * - dark
	 * - material_blue
	 * - material_green
	 * - material_red
	 * - material_orange
	 * - airbnb
	 * - confetti
	 *
	 * @param string $theme
	 *
	 * @return $this
	 */
	public function theme( $theme = 'default' ) {
		return $this->__set( 'theme', $theme );
	}

	/**
	 * @return $this
	 */
	public function theme_default() {
		return $this->theme( 'default' );
	}

	/**
	 * @return $this
	 */
	public function theme_dark() {
		return $this->theme( 'dark' );
	}

	/**
	 * @return $this
	 */
	public function theme_material_blue() {
		return $this->theme( 'material_blue' );
	}

	/**
	 * @return $this
	 */
	public function theme_material_green() {
		return $this->theme( 'material_green' );
	}

	/**
	 * @return $this
	 */
	public function theme_material_red() {
		return $this->theme( 'material_red' );
	}

	/**
	 * @return $this
	 */
	public function theme_material_orange() {
		return $this->theme( 'material_orange' );
	}

	/**
	 * @return $this
	 */
	public function theme_airbnb() {
		return $this->theme( 'airbnb' );
	}

	/**
	 * @return $this
	 */
	public function theme_confetti() {
		return $this->theme( 'confetti' );
	}

	/**
	 * @param $date
	 *
	 * @return $this
	 */
	public function date( $date ) {
		return $this->__set( 'date', $date );
	}

	/**
	 * @param $date
	 *
	 * @return $this
	 */
	public function to_date( $date ) {
		return $this->__set( 'to_date', $date );
	}
}
