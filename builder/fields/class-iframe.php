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
		 * @param bool $url
		 *
		 * @return $this
		 */
		public function url( $url = true ) {
			$this['url'] = $url;
			return $this;
		}

		/**
		 * @param bool $heading
		 *
		 * @return $this
		 */
		public function heading( $heading = true ) {
			$this['heading'] = $heading;
			return $this;
		}
	}
}
