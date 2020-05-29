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
class Dimensions extends Field {
	/**
	 * Date_Picker constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'dimensions', $id, $title, $args );
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
	 * @param $unit
	 *
	 * @return $this
	 */
	public function unit( $unit ) {
		return $this->__set( 'unit', $unit );
	}

	/**
	 * Default Options Are :
	 * array(
	 * 'px' => 'px',
	 * '%'  => '%',
	 * 'em' => 'em',
	 * )
	 *
	 * @param $options
	 *
	 * @return $this
	 */
	public function unit_options( $options ) {
		return $this->__set( 'unit_options', $options );
	}


	/**
	 * Default Icons Are :
	 * array(
	 * 'height' => __( 'Height', 'wponion' ),
	 * 'width'  => __( 'Width' , 'wponion'),
	 * ),
	 *
	 * @param $icons
	 *
	 * @return $this
	 */
	public function icons( $icons ) {
		return $this->__set( 'icons', $icons );
	}
}
