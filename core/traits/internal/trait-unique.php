<?php

namespace WPOnion\Traits\Internal;

defined( 'ABSPATH' ) || exit;

/**
 * Trait Unique
 *
 * @package WPOnion\Traits\Internal
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.5
 */
trait Unique {
	/**
	 * unique for database.
	 *
	 * @var string
	 */
	protected $unique = '';

	/**
	 * Returns DB Slug.
	 *
	 * @return string
	 */
	public function unique() {
		return $this->unique;
	}

	/**
	 * Returns Base Unique.
	 *
	 * @return string
	 */
	protected function base_unique() {
		return ( isset( $this->base_unique ) ) ? $this->base_unique : $this->unique;
	}

	/**
	 * Returns Unique Value For Fields That Renders.
	 *
	 * @return string
	 * @since 1.5
	 */
	protected function field_unique() {
		return $this->unique();
	}

	/**
	 * Returns Unique Value For Fields That Renders.
	 *
	 * @return string
	 * @since 1.5
	 */
	protected function field_base_unique() {
		return $this->base_unique();
	}
}
