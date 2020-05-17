<?php

namespace WPO\Helper\Field;

use WPO\Helper\Dependency\Builder;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPO\Helper\Field\Dependency' ) ) {
	/**
	 * Class Dependency
	 *
	 * @package WPO\Helper\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class Dependency extends Array_Args {
		/**
		 * @param bool|string $element Element ID / Condition if $type is element.
		 * @param bool|string $condition Condition To check with / value to check agains. if $type is element.
		 * @param bool|string $values Value to check against or empty.
		 *
		 * @return \WPO\Helper\Dependency\Builder
		 */
		public function dependency( $element = null, $condition = null, $values = null ) {
			$instance           = new Builder( $element, $condition, $values );
			$data               = ( isset( $this['dependency'] ) && is_array( $this['dependency'] ) ) ? $this['dependency'] : array();
			$data['rules']      = ( isset( $data['rules'] ) ) ? $data['rules'] : array();
			$data['rules'][]    = $instance;
			$this['dependency'] = $data;
			return $instance;
		}

		/**
		 * Sets Dependency Settings.
		 *
		 * @param array $settings
		 *
		 * @return $this
		 */
		public function dependency_settings( $settings = array() ) {
			$data               = ( isset( $this['dependency'] ) && is_array( $this['dependency'] ) ) ? $this['dependency'] : array();
			$data['settings']   = $settings;
			$this['dependency'] = $data;
			return $this;
		}
	}
}
