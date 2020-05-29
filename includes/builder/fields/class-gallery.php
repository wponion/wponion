<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Gallery' ) ) {
	/**
	 * Class Gallery
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Gallery extends Field {
		/**
		 * Color_Group constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'gallery', $id, $title, $args );
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function add_button( $button ) {
			return $this->_set( 'add_button', $button );
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function edit_button( $button ) {
			return $this->_set( 'edit_button', $button );
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function remove_button( $button ) {
			return $this->_set( 'remove_button', $button );
		}

		/**
		 * @param int $size
		 *
		 * @return $this
		 */
		public function size( $size = 150 ) {
			return $this->_set( 'size', $size );
		}

		/**
		 * @param bool $sort
		 *
		 * @return $this
		 */
		public function sort( $sort = false ) {
			return $this->_set( 'sort', $sort );
		}

		/**
		 * @return $this
		 */
		public function enable_sort() {
			return $this->sort( true );
		}

		/**
		 * @return $this
		 */
		public function disable_sort() {
			return $this->sort( false );
		}
	}
}
