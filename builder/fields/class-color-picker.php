<?php

namespace WPO\Fields;

use WPO\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\Color_Picker' ) ) {
	/**
	 * Class Color_Picker
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method get_rgba()
	 * @method get_size()
	 * @method get_layout()
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
			$this['settings'] = $settings;
			return $this;
		}

		/**
		 * @param int $size
		 *
		 * @return $this
		 */
		public function size( $size = 30 ) {
			$this['size'] = $size;
			return $this;
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
			$this['layout'] = $custom;
			return $this;
		}
	}
}
