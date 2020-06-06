<?php

namespace WPOnion\Bridge;

use WPOnion\Traits\self_instance;

defined( 'ABSPATH' ) || exit;

/**
 * \WPOnion\Bridge\Deprecated_Hooks class maps old actions and filters to new ones.
 * This is the base class for handling those deprecated hooks.
 *
 * @since 1.5
 */
abstract class Deprecated_Hooks {
	use self_instance;

	/**
	 * Array of deprecated hooks we need to handle.
	 * 'new' => 'old',
	 *
	 * @var array
	 */
	protected $deprecated_hooks = array();

	/**
	 * Array of versions on each hook has been deprecated.
	 *
	 * @var array
	 */
	protected $deprecated_version = array();

	/**
	 * Which Type of Hook is this
	 * action / filter
	 *
	 * @var string
	 */
	protected $type = 'action';

	/**
	 * Hook priority
	 *
	 * @var int
	 */
	protected $priority = -1000;

	/**
	 * Hook accepted_args
	 *
	 * @var int
	 */
	protected $accepted_args = 8;

	/**
	 * Constructor.
	 */
	public function __construct() {
		$new_hooks = array_keys( $this->deprecated_hooks );
		array_walk( $new_hooks, array( $this, 'hook_in' ) );
	}

	/**
	 * Hook into the new hook so we can handle deprecated hooks once fired.
	 *
	 * @param string $hook_name Hook name.
	 *
	 * @uses maybe_handle_deprecated_hook
	 */
	public function hook_in( $hook_name ) {
		$callback = array( $this, 'maybe_handle_deprecated_hook' );

		if ( 'action' === $this->type ) {
			add_action( $hook_name, $callback, $this->priority, $this->accepted_args );
		} else {
			add_filter( $hook_name, $callback, $this->priority, $this->accepted_args );
		}
	}

	/**
	 * Get old hooks to map to new hook.
	 *
	 * @param string $new_hook New hook name.
	 *
	 * @return array
	 */
	protected function get_old_hooks( $new_hook ) {
		$old_hooks = isset( $this->deprecated_hooks[ $new_hook ] ) ? $this->deprecated_hooks[ $new_hook ] : array();
		$old_hooks = is_array( $old_hooks ) ? $old_hooks : array( $old_hooks );
		return $old_hooks;
	}

	/**
	 * If the hook is Deprecated, call the old hooks here.
	 */
	public function maybe_handle_deprecated_hook() {
		$new_hook          = current_filter();
		$old_hooks         = $this->get_old_hooks( $new_hook );
		$new_callback_args = func_get_args();
		$return_value      = $new_callback_args[0];

		foreach ( $old_hooks as $old_hook ) {
			$return_value = $this->handle_deprecated_hook( $new_hook, $old_hook, $new_callback_args, $return_value );
		}

		return $return_value;
	}

	/**
	 * If the old hook is in-use, trigger it.
	 *
	 * @param string $new_hook New hook name.
	 * @param string $old_hook Old hook name.
	 * @param array  $new_callback_args New callback args.
	 * @param mixed  $return_value Returned value.
	 *
	 * @return mixed
	 */
	protected function handle_deprecated_hook( $new_hook, $old_hook, $new_callback_args, $return_value ) {
		if ( ( 'action' === $this->type && has_action( $old_hook ) ) || ( 'filter' === $this->type && has_filter( $old_hook ) ) ) {
			$this->display_notice( $old_hook, $new_hook );
			$return_value = $this->trigger_hook( $old_hook, $new_callback_args );
		}
		return $return_value;
	}

	/**
	 * Get deprecated version.
	 *
	 * @param string $old_hook Old hook name.
	 *
	 * @return string
	 */
	protected function get_deprecated_version( $old_hook ) {
		return ! empty( $this->deprecated_version[ $old_hook ] ) ? $this->deprecated_version[ $old_hook ] : 0;
	}

	/**
	 * Display a deprecated notice for old hooks.
	 *
	 * @param string $old_hook Old hook.
	 * @param string $new_hook New hook.
	 */
	protected function display_notice( $old_hook, $new_hook ) {
		wponion_deprecated_hook( esc_html( $old_hook ), esc_html( $this->get_deprecated_version( $old_hook ) ), esc_html( $new_hook ) );
	}

	/**
	 * Fire off a legacy hook with it's args.
	 *
	 * @param string $old_hook Old hook name.
	 * @param array  $new_callback_args New callback args.
	 *
	 * @return mixed
	 */
	abstract protected function trigger_hook( $old_hook, $new_callback_args );
}
