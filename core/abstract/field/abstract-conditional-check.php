<?php

namespace WPOnion\Bridge\Field;

use WPOnion\Bridge;
use WPOnion\Traits\Internal\Module;
use WPOnion\Traits\Internal\Unique;

defined( 'ABSPATH' ) || exit;

/**
 * Class Conditional_Check
 *
 * @package WPOnion\Bridge\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Conditional_Check extends Base {
	/**
	 * Checks If current elements key exists.
	 *
	 * @param string $key
	 *
	 * @return bool
	 */
	protected function has( $key = '' ) {
		return ( false === $this->option( $key ) || null === $this->option( $key ) || empty( $this->option( $key ) ) ) ? false : true;
	}

	/**
	 * Checks if ajax arg is enabled.
	 *
	 * @return bool
	 */
	protected function is_ajax() {
		return ( $this->has( 'ajax' ) );
	}

	/**
	 * Checks if only field html is requested.
	 *
	 * @return bool
	 */
	protected function is_only_field() {
		return ( $this->has( 'only_field' ) && true === $this->option( 'only_field' ) );
	}
}
