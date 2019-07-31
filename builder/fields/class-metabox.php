<?php

namespace WPO\Fields;

use WPO\Helper\Field\Nested_Fields;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\Metabox' ) ) {
	/**
	 * Class metabox
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Metabox extends Nested_Fields {
		/**
		 * Accordion constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'metabox', $id, $title, $args );
		}


		/**
		 * @param $metabox_title
		 *
		 * @return $this
		 */
		public function metabox_title( $metabox_title ) {
			$this['metabox_title'] = $metabox_title;
			return $this;
		}

		/**
		 * @param $metabox_id
		 *
		 * @return $this
		 */
		public function metabox_id( $metabox_id ) {
			$this['metabox_id'] = $metabox_id;
			return $this;
		}

		/**
		 * @param $context
		 *
		 * @return $this
		 */
		public function context( $context ) {
			$this['context'] = $context;
			return $this;
		}

		/**
		 * @param $screens
		 *
		 * @return $this
		 */
		public function screens( $screens ) {
			$this['screens'] = $screens;
			return $this;
		}

		/**
		 * @param $priority
		 *
		 * @return $this
		 */
		public function priority( $priority ) {
			$this['priority'] = $priority;
			return $this;
		}

		/**
		 * @param $theme
		 *
		 * @return $this
		 */
		public function theme( $theme ) {
			$this['theme'] = $theme;
			return $this;
		}

		/**
		 * @param $theme_color
		 *
		 * @return $this
		 */
		public function theme_color( $theme_color ) {
			$this['theme_color'] = $theme_color;
			return $this;
		}

		/**
		 * @param $ajax
		 *
		 * @return $this
		 */
		public function ajax( $ajax ) {
			$this['ajax'] = $ajax;
			return $this;
		}

		/**
		 * @param $module
		 *
		 * @return $this|string
		 */
		public function metabox_module( $module ) {
			$this['module'] = $module;
			return $this;
		}
	}
}
