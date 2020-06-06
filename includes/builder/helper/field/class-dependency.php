<?php

namespace WPO\Helper\Field;

use WPO\Helper\Dependency\Builder;

defined( 'ABSPATH' ) || exit;

/**
 * Class Dependency
 *
 * @package WPO\Helper\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Dependency extends Array_Args {
	/**
	 * @param bool|string $element Element ID / Condition if $type is element.
	 * @param bool|string $condition Condition To check with / value to check agains. if $type is element.
	 * @param bool|string $values Value to check against or empty.
	 *
	 * @return \WPO\Helper\Dependency\Builder
	 */
	public function dependency( $element = null, $condition = null, $values = null ) {
		$instance       = new Builder( $element, $condition, $values );
		$dep            = wponion_cast_array( $this->__get( 'dependency' ) );
		$dep['rules']   = ( isset( $dep['rules'] ) ) ? $dep['rules'] : array();
		$dep['rules'][] = $instance;
		$this->__set( 'dependency', $dep );
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
		$data             = wponion_cast_array( $this->__get( 'dependency' ) );
		$data['settings'] = $settings;
		return $this->__set( 'dependency', $data );
	}
}
