<?php

namespace WPOnion\Traits;

defined( 'ABSPATH' ) || exit;

/**
 * Trait Hooks
 *
 * @package WPOnion\Traits
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
trait Hooks {
	/**
	 * Add a function to a hook with like add_action() function dose.
	 *
	 * @param string         $hook
	 * @param callable|array $function_to_add
	 * @param int            $priority
	 * @param int            $accepted_args
	 *
	 * @uses \add_action()
	 */
	protected function add_action( $hook, $function_to_add, $priority = 30, $accepted_args = 1 ) {
		add_action( $hook, array( &$this, $function_to_add ), $priority, $accepted_args );
	}

	/**
	 * add a function to a hook with like add_filter() function dose.
	 *
	 * @param string         $tag
	 * @param callable|array $function_to_add
	 * @param int            $priority
	 * @param int            $accepted_args
	 *
	 * @uses \add_filter()
	 */
	protected function add_filter( $tag, $function_to_add, $priority = 30, $accepted_args = 1 ) {
		add_filter( $tag, array( &$this, $function_to_add ), $priority, $accepted_args );
	}
}
