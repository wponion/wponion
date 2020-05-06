<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

use WPO\Field;
use WPO\Helper\Field\Nested_Fields;

if ( ! class_exists( 'WPO\Fields\Modal' ) ) {
	/**
	 * Class Modal
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Modal extends Nested_Fields {
		/**
		 * Modal constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'modal', $id, $title, $args );
		}

		/**
		 * Sets Modal Type.
		 *
		 * @param string $type
		 *
		 * @return $this
		 */
		public function modal_type( $type = 'wp' ) {
			$this['modal_type'] = $type;
			return $this;
		}

		/**
		 * @param array $config
		 *
		 * @return $this
		 */
		public function modal_config( $config = array() ) {
			$this['modal_config'] = $config;
			return $this;
		}

		/**
		 * @param array $config
		 *
		 * @return $this
		 */
		public function wp( $config = array() ) {
			$this->modal_type( 'wp' );
			if ( ! empty( $config ) ) {
				$this->modal_config( $config );
			}
			return $this;
		}

		/**
		 * @param array $config
		 *
		 * @return $this
		 */
		public function swal( $config = array() ) {
			$this->modal_type( 'swal' );
			if ( ! empty( $config ) ) {
				$this->modal_config( $config );
			}
			return $this;
		}

		/**
		 * @param $button_label_or_args
		 *
		 * @return $this
		 */
		public function modal_button( $button_label_or_args ) {
			$this['modal_button'] = $button_label_or_args;
			return $this;
		}


		/**
		 * @param $ajax_args
		 *
		 * @return $this
		 */
		public function ajax_args( $ajax_args ) {
			$this['ajax_args'] = $ajax_args;
			return $this;
		}

		/**
		 * @param $overview_html
		 *
		 * @return $this
		 */
		public function overview_html( $overview_html ) {
			$this['overview_html'] = $overview_html;
			return $this;
		}
	}
}
