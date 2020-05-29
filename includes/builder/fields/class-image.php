<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Image' ) ) {
	/**
	 * Class Image
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
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
		public function frame_title( $title ) {
			return $this->_set( 'frame_title', $title );
		}

		/**
		 * @param $remove_text
		 *
		 * @return $this
		 */
		public function remove( $remove_text ) {
			return $this->_set( 'remove', $remove_text );
		}

		/**
		 * @param int $size
		 *
		 * @return $this
		 */
		public function size( $size = 100 ) {
			return $this->_set( 'size', $size );
		}
	}
}
