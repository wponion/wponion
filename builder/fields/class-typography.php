<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPO\Fields;

if ( ! class_exists( 'WPO\Fields\Typography' ) ) {
	/**
	 * Class Typography
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method get_font_family()
	 * @method get_backup_font_family()
	 * @method get_text_align()
	 * @method get_direction()
	 * @method get_element_tag()
	 * @method get_font_style()
	 * @method get_font_size()
	 * @method get_line_height()
	 * @method get_letter_spacing()
	 * @method get_color()
	 * @method get_preview()
	 * @method get_preview_text()
	 */
	class Typography extends \WPO\Field {
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'typography', $id, $title, $args );
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
		 * @param $backup_font_family
		 *
		 * @return $this
		 */
		public function backup_font_family( $backup_font_family ) {
			$this['backup_font_family'] = $backup_font_family;
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
		 * @param $direction
		 *
		 * @return $this
		 */
		public function direction( $direction ) {
			$this['direction'] = $direction;
			return $this;
		}

		/**
		 * @param $element_tag
		 *
		 * @return $this
		 */
		public function element_tag( $element_tag ) {
			$this['element_tag'] = $element_tag;
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
		 * @param $font_size
		 *
		 * @return $this
		 */
		public function font_size( $font_size ) {
			$this['font_size'] = $font_size;
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
		 * @param $preview_text
		 *
		 * @return $this
		 */
		public function preview_text( $preview_text ) {
			$this['preview_text'] = $preview_text;
			return $this;
		}
	}
}
