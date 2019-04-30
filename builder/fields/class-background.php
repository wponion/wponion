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

if ( ! class_exists( 'WPO\Background' ) ) {
	/**
	 * Class Background
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method preview()
	 * @method background_repeat()
	 * @method background_attachment()
	 * @method background_position()
	 * @method background_clip()
	 * @method background_origin()
	 * @method background_size()
	 * @method background_color()
	 * @method background_image()
	 */
	class Background extends Field {
		/**
		 * Background constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'background', $id, $title, $args );
		}

		/**
		 * @param bool $show_preview
		 *
		 * @return $this
		 */
		public function set_preview( $show_preview = true ) {
			$this['preview'] = $show_preview;
			return $this;
		}

		/**
		 * @return \WPO\Background
		 */
		public function show_preview() {
			return $this->set_preview( true );
		}

		/**
		 * @return \WPO\Background
		 */
		public function hide_preview() {
			return $this->set_preview( false );
		}

		/**
		 * @param string $height
		 *
		 * @return $this
		 */
		public function set_preview_height( $height = '200px' ) {
			$this['height'] = $height;
			return $this;
		}

		/**
		 * @param bool|\WPO\Field $background_repeat
		 *
		 * @return $this
		 */
		public function set_background_repeat( $background_repeat = true ) {
			$this['background-repeat'] = $background_repeat;
			return $this;
		}

		/**
		 * @param bool|\WPO\Field $background_attachment
		 *
		 * @return $this
		 */
		public function set_background_attachment( $background_attachment = true ) {
			$this['background-attachment'] = $background_attachment;
			return $this;
		}

		/**
		 * @param bool|\WPO\Field $background_position
		 *
		 * @return $this
		 */
		public function set_background_position( $background_position = true ) {
			$this['background-position'] = $background_position;
			return $this;
		}

		/**
		 * @param bool|\WPO\Field $background_clip
		 *
		 * @return $this
		 */
		public function set_background_clip( $background_clip = true ) {
			$this['background-clip'] = $background_clip;
			return $this;
		}

		/**
		 * @param bool|\WPO\Field $background_origin
		 *
		 * @return $this
		 */
		public function set_background_origin( $background_origin = true ) {
			$this['background-origin'] = $background_origin;
			return $this;
		}

		/**
		 * @param bool|\WPO\Field $background_size
		 *
		 * @return $this
		 */
		public function set_background_size( $background_size = true ) {
			$this['background-size'] = $background_size;
			return $this;
		}

		/**
		 * @param bool|\WPO\Field $background_color
		 *
		 * @return $this
		 */
		public function set_background_color( $background_color = true ) {
			$this['background-color'] = $background_color;
			return $this;
		}

		/**
		 * @param bool|\WPO\Field $background_image
		 *
		 * @return $this
		 */
		public function set_background_image( $background_image = true ) {
			$this['background-image'] = $background_image;
			return $this;
		}
	}
}
