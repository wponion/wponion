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

namespace WPO;

if ( ! class_exists( 'WPO\Typography' ) ) {
	/**
	 * Class Typography
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method font_family()
	 * @method backup_font_family()
	 * @method text_align()
	 * @method direction()
	 * @method element_tag()
	 * @method font_style()
	 * @method font_size()
	 * @method line_height()
	 * @method letter_spacing()
	 * @method color()
	 * @method preview()
	 * @method preview_text()
	 */
	class Typography extends Field {
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'typography', $id, $title, $args );
		}

		/**
		 * @param $font_family
		 *
		 * @return $this
		 */
		public function set_font_family( $font_family ) {
			$this['font_family'] = $font_family;
			return $this;
		}

		/**
		 * @param $backup_font_family
		 *
		 * @return $this
		 */
		public function set_backup_font_family( $backup_font_family ) {
			$this['backup_font_family'] = $backup_font_family;
			return $this;
		}

		/**
		 * @param $text_align
		 *
		 * @return $this
		 */
		public function set_text_align( $text_align ) {
			$this['text_align'] = $text_align;
			return $this;
		}

		/**
		 * @param $direction
		 *
		 * @return $this
		 */
		public function set_direction( $direction ) {
			$this['direction'] = $direction;
			return $this;
		}

		/**
		 * @param $element_tag
		 *
		 * @return $this
		 */
		public function set_element_tag( $element_tag ) {
			$this['element_tag'] = $element_tag;
			return $this;
		}

		/**
		 * @param $font_style
		 *
		 * @return $this
		 */
		public function set_font_style( $font_style ) {
			$this['font_style'] = $font_style;
			return $this;
		}

		/**
		 * @param $font_size
		 *
		 * @return $this
		 */
		public function set_font_size( $font_size ) {
			$this['font_size'] = $font_size;
			return $this;
		}

		/**
		 * @param $line_height
		 *
		 * @return $this
		 */
		public function set_line_height( $line_height ) {
			$this['line_height'] = $line_height;
			return $this;
		}

		/**
		 * @param $letter_spacing
		 *
		 * @return $this
		 */
		public function set_letter_spacing( $letter_spacing ) {
			$this['letter_spacing'] = $letter_spacing;
			return $this;
		}

		/**
		 * @param $color
		 *
		 * @return $this
		 */
		public function set_color( $color ) {
			$this['color'] = $color;
			return $this;
		}

		/**
		 * @param $preview
		 *
		 * @return $this
		 */
		public function set_preview( $preview ) {
			$this['preview'] = $preview;
			return $this;
		}

		/**
		 * @param $preview_text
		 *
		 * @return $this
		 */
		public function set_preview_text( $preview_text ) {
			$this['preview_text'] = $preview_text;
			return $this;
		}

		/**
		 * Returns Default Args.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array(
				'font_family'        => __( 'Font Family & Weight', 'wponion' ),
				'backup_font_family' => __( 'Backup Font Family', 'wponion' ),
				'text_align'         => __( 'Text Align', 'wponion' ),
				'direction'          => __( 'Text Direction', 'wponion' ),
				'element_tag'        => __( 'Element Tag', 'wponion' ),
				'font_style'         => __( 'Font Style', 'wponion' ),
				'font_size'          => __( 'Font Size', 'wponion' ),
				'line_height'        => __( 'Line Height', 'wponion' ),
				'letter_spacing'     => __( 'Letter Spacing', 'wponion' ),
				'color'              => __( 'Text Color', 'wponion' ),
				'preview'            => true,
				'preview_text'       => 'Lorem ipsum dolor sit amet, pro ad sanctus admodum, vim at insolens appellantur. Eum veri adipiscing an, probo nonumy an vis.',
			);
		}
	}
}
