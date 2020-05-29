<?php

namespace WPOnion\Bridge;

use WPOnion\Traits\Hooks;
use WPOnion\Traits\Internal\Fields_Handler;
use WPOnion\Traits\Internal\Theme_Handler;

defined( 'ABSPATH' ) || exit;

/**
 * Class Module
 *
 * @package WPOnion\Bridge
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Module extends Module_DB {
	use Theme_Handler;
	use Fields_Handler;
	use Hooks;

	/**
	 * Inits The Class.
	 */
	protected function init() {
		parent::init();
		if ( ! empty( $this->settings ) && ! empty( $this->fields ) && false === wponion_is_ajax( 'heartbeat' ) ) {
			$this->on_init();
		}
	}

	/**
	 * Returns a default array.
	 *
	 * @return array
	 */
	protected function base_defaults() {
		return array(
			'option_name' => false,
			'assets'      => false,
			'save_type'   => 'all', # Options : combine/all / container / section / fields
		);
	}

	/**
	 * Returns Unique Instance ID.
	 *
	 * @return string
	 */
	protected function instance_id() {
		return sanitize_title( implode( '_', array_filter( array(
			$this->module(),
			$this->unique(),
			$this->get_id(),
		) ) ) );
	}

	/**
	 * Required Callback On Instance Init.
	 *
	 * @return mixed
	 */
	abstract protected function on_init();
}
