<?php

namespace WPOnion\Traits\Internal;

defined( 'ABSPATH' ) || exit;

/**
 * Trait Unique
 *
 * @package WPOnion\Traits\Internal
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since {NEWVERSION}
 */
trait Module {
	/**
	 * Type - Value can be anything like (settings,text_field)
	 *
	 * @var string
	 */
	protected $module = '';

	/**
	 * Returns Module Slug..
	 *
	 * @return string
	 */
	public function module() {
		return $this->module;
	}
}
