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
class Color_Picker extends Field {
	/**
	 * Color_Group constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'color_picker', $id, $title, $args );
	}

	/**
	 * @param bool|array $settings
	 *
	 * @return $this
	 */
	public function settings( $settings = array() ) {
		return $this->__set( 'settings', $settings );
	}

	/**
	 * @param int $size
	 *
	 * @return $this
	 */
	public function size( $size = 30 ) {
		return $this->__set( 'size', $size );
	}

	/**
	 * round
	 * round box-shadow
	 * round with-margin
	 * round with-margin box-shadow
	 *
	 * square
	 * square box-shadow
	 * square with-margin
	 * square with-margin box-shadow
	 *
	 * @param bool $is_round
	 * @param bool $with_margin
	 * @param bool $box_shadow
	 * @param bool $custom
	 *
	 * @return $this
	 */
	public function layout( $is_round = false, $with_margin = false, $box_shadow = false, $custom = false ) {
		if ( false === $custom ) {
			$custom = '';
			$custom .= ( true === $is_round ) ? ' round ' : '';
			$custom .= ( true === $with_margin ) ? ' with-margin ' : '';
			$custom .= ( true === $box_shadow ) ? ' box-shadow ' : '';
		}
		return $this->__set( 'layout', $custom );
	}
}
