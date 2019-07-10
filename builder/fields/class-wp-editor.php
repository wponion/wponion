<?php

namespace WPO\Fields;

use WPO\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\WP_Editor' ) ) {
	/**
	 * Class WP_Editor
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_Editor extends Field {
		/**
		 * Upload constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'wp_editor', $id, $title, $args );
		}

		/**
		 * @param      $args
		 * @param bool $merge
		 *
		 * @return $this
		 */
		public function settings( $args, $merge = true ) {
			$this->_set_array_handler( 'settings', $args, $merge );
			return $this;
		}
	}
}
