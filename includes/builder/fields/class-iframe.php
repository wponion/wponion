<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Iframe' ) ) {
	/**
	 * Class Iframe
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Iframe extends Field {
		/**
		 * Iframe constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'iframe', $id, $title, $args );
		}

		/**
		 * @param bool $width
		 *
		 * @return $this
		 */
		public function width( $width = true ) {
			return $this->_set( 'width', $width );
		}

		/**
		 * @param bool $height
		 *
		 * @return $this
		 */
		public function height( $height = true ) {
			return $this->_set( 'height', $height );
		}

		/**
		 * @param bool $url
		 *
		 * @return $this
		 */
		public function url( $url = true ) {
			return $this->_set( 'url', $url );
		}

		/**
		 * @param bool $heading
		 *
		 * @return $this
		 */
		public function heading( $heading = true ) {
			return $this->_set( 'heading', $heading );
		}
	}
}
