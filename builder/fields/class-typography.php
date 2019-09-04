<?php

namespace WPO\Fields;

use WPO\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\Typography' ) ) {
	/**
	 * Class Typography
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Typography extends Field {
		/**
		 * Typography constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'typography', $id, $title, $args );
		}

		/**
		 * @param $preview
		 *
		 * @return $this
		 */
		public function preview( $preview ) {
			$this['preview'] = $preview;
			return $this;
		}

		/**
		 * @param $font_family
		 *
		 * @return $this
		 */
		public function font_family( $font_family ) {
			$this['font_family'] = $font_family;
			return $this;
		}

		/**
		 * @param $backup_font
		 *
		 * @return $this
		 */
		public function backup_font( $backup_font ) {
			$this['backup_font'] = $backup_font;
			return $this;
		}

		/**
		 * @param $text_align
		 *
		 * @return $this
		 */
		public function text_align( $text_align ) {
			$this['text_align'] = $text_align;
			return $this;
		}

		/**
		 * @param $writing_mode
		 *
		 * @return $this
		 */
		public function writing_mode( $writing_mode ) {
			$this['writing_mode'] = $writing_mode;
			return $this;
		}

		/**
		 * @param $text_orientation
		 *
		 * @return $this
		 */
		public function text_orientation( $text_orientation ) {
			$this['text_orientation'] = $text_orientation;
			return $this;
		}

		/**
		 * @param $text_direction
		 *
		 * @return $this
		 */
		public function text_direction( $text_direction ) {
			$this['text_direction'] = $text_direction;
			return $this;
		}

		/**
		 * @param $text_transform
		 *
		 * @return $this
		 */
		public function text_transform( $text_transform ) {
			$this['text_transform'] = $text_transform;
			return $this;
		}

		/**
		 * @param $text_decoration_line
		 *
		 * @return $this
		 */
		public function text_decoration_line( $text_decoration_line ) {
			$this['text_decoration_line'] = $text_decoration_line;
			return $this;
		}

		/**
		 * @param $text_decoration_style
		 *
		 * @return $this
		 */
		public function text_decoration_style( $text_decoration_style ) {
			$this['text_decoration_style'] = $text_decoration_style;
			return $this;
		}

		/**
		 * @param $text_decoration_color
		 *
		 * @return $this
		 */
		public function text_decoration_color( $text_decoration_color ) {
			$this['text_decoration_color'] = $text_decoration_color;
			return $this;
		}

		/**
		 * @param $font_weight
		 *
		 * @return $this
		 */
		public function font_weight( $font_weight ) {
			$this['font_weight'] = $font_weight;
			return $this;
		}

		/**
		 * @param $font_size
		 *
		 * @return $this
		 */
		public function font_size( $font_size ) {
			$this['font_size'] = $font_size;
			return $this;
		}

		/**
		 * @param $font_style
		 *
		 * @return $this
		 */
		public function font_style( $font_style ) {
			$this['font_style'] = $font_style;
			return $this;
		}

		/**
		 * @param $line_height
		 *
		 * @return $this
		 */
		public function line_height( $line_height ) {
			$this['line_height'] = $line_height;
			return $this;
		}

		/**
		 * @param $letter_spacing
		 *
		 * @return $this
		 */
		public function letter_spacing( $letter_spacing ) {
			$this['letter_spacing'] = $letter_spacing;
			return $this;
		}

		/**
		 * @param $color
		 *
		 * @return $this
		 */
		public function color( $color ) {
			$this['color'] = $color;
			return $this;
		}
	}
}
