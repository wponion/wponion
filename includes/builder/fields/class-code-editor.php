<?php

namespace WPO\Fields;

use WPO\Field;

if ( ! class_exists( '\WPO\Fields\Code_Editor' ) ) {
	/**
	 * Class Code_Editor
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Code_Editor extends Field {
		/**
		 * Code_Editor constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'code_editor', $id, $title, $args );
		}

		/**
		 * @param $version
		 *
		 * @return $this
		 */
		public function version( $version ) {
			$this['version'] = $version;
			return $this;
		}

		/**
		 * @param $settings
		 *
		 * @return $this
		 */
		public function settings( $settings ) {
			$this['settings'] = $settings;
			return $this;
		}
	}
}
