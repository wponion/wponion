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

if ( ! class_exists( 'WPO\Image' ) ) {
	/**
	 * Class Image
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method frame_title()
	 * @method remove()
	 * @method size()
	 */
	class Image extends Field {
		/**
		 * Image constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'image', $id, $title, $args );
		}

		/**
		 * @param $title
		 *
		 * @return $this
		 */
		public function set_frame_title( $title ) {
			$this['frame_title'] = $title;
			return $this;
		}

		/**
		 * @param $remove_text
		 *
		 * @return $this
		 */
		public function set_remove( $remove_text ) {
			$this['remove'] = $remove_text;
			return $this;
		}

		/**
		 * @param int $size
		 *
		 * @return $this
		 */
		public function set_size( $size = 100 ) {
			$this['size'] = $size;
			return $this;
		}
	}
}
