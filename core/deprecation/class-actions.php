<?php

namespace WPOnion\Deprecation;

use WPOnion\Bridge\Deprecated_Hooks;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Deprecation\Actions' ) ) {
	/**
	 * Handles deprecation notices and triggering of legacy action hooks.
	 */
	class Actions extends Deprecated_Hooks {
		/**
		 * Array of deprecated hooks we need to handle.
		 * Format of 'new' => 'old'.
		 *
		 * @var array
		 */
		protected $deprecated_hooks = array(
			'wponion/core/loaded'               => 'wponion_core_loaded',
			'wponion/addon/before/load'         => 'wponion_before_addons_load',
			'wponion/addon/after/loaded'        => 'wponion_after_addons_load',
			'wponion/loaded'                    => 'wponion_loaded',
			'wponion/integrations/before/load'  => 'wponion_integrations_before_loaded',
			'wponion/integrations/after/loaded' => 'wponion_integrations_loaded',
			'wponion/init'                      => 'wponion_init',
			'wponion/core/fields/registered'    => 'wponion_core_fields_registered',
		);

		/**
		 * Array of versions on each hook has been deprecated.
		 *
		 * @var array
		 */
		protected $deprecated_version = array(
			'wponion_core_loaded' => '1.4.6.1',
		);

		/**
		 * Fire off a legacy hook with it's args.
		 *
		 * @param string $old_hook Old hook name.
		 * @param array  $new_callback_args New callback args.
		 *
		 * @return mixed
		 */
		protected function trigger_hook( $old_hook, $new_callback_args ) {
			do_action_ref_array( $old_hook, $new_callback_args );
		}
	}

}
