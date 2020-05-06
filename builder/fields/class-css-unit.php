<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\CSS_Unit' ) ) {
	/**
	 * Class CSS_Unit
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class CSS_Unit extends Field {
		/**
		 * Faq constructor.
		 *
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $title = false, $args = array() ) {
			parent::__construct( 'css_unit', false, $title, $args );
		}

		/**
		 * @param $css_value
		 *
		 * @return $this
		 */
		public function css_value( $css_value ) {
			$this['css_value'] = $css_value;
			return $this;
		}

		/**
		 * @param $unit
		 *
		 * @return $this
		 */
		public function unit( $unit ) {
			$this['unit'] = $unit;
			return $this;
		}
	}
}
