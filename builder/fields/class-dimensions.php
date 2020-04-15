<?php

namespace WPO\Fields;

use WPO\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\Dimensions' ) ) {
	/**
	 * Class Color_Picker
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
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
			$this['width'] = $width;
			return $this;
		}

		/**
		 * @param bool $height
		 *
		 * @return $this
		 */
		public function height( $height = true ) {
			$this['height'] = $height;
			return $this;
		}

		/**
		 * @param $unit
		 *
		 * @return $this
		 */
		public function unit( $unit ) {
			$this['unit'] = $unit;
			return $this;
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
			$this['unit_options'] = $options;
			return $this;
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
			$this['icons'] = $icons;
			return $this;
		}
	}
}
