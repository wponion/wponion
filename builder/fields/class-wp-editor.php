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
		 * Set tinymce
		 *
		 * @param $tinymce
		 *
		 * @return $this
		 */
		public function tinymce( $tinymce ) {
			$this['tinymce'] = $tinymce;
			return $this;
		}

		/**
		 * Set quicktags
		 *
		 * @param $quicktags
		 *
		 * @return $this
		 */
		public function quicktags( $quicktags ) {
			$this['quicktags'] = $quicktags;
			return $this;
		}

		/**
		 * Set media_buttons
		 *
		 * @param $media_buttons
		 *
		 * @return $this
		 */
		public function media_buttons( $media_buttons ) {
			$this['media_buttons'] = $media_buttons;
			return $this;
		}
	}
}
