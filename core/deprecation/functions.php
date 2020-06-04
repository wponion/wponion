<?php

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_do_deprecated_action' ) ) {
	/**
	 * Runs a deprecated action with notice only if used.
	 *
	 * @param string $tag The name of the action hook.
	 * @param array  $args Array of additional function arguments to be passed to do_action().
	 * @param string $version The version of WooCommerce that deprecated the hook.
	 * @param string $replacement The hook that should have been used.
	 * @param string $message A message regarding the change.
	 *
	 * @since 1.5
	 */
	function wponion_do_deprecated_action( $tag, $args, $version, $replacement = null, $message = null ) {
		if ( ! has_action( $tag ) ) {
			return;
		}

		wponion_deprecated_hook( $tag, $version, $replacement, $message );
		do_action_ref_array( $tag, $args );
	}
}

if ( ! function_exists( 'wponion_apply_deprecated_filters' ) ) {
	/**
	 * Runs a deprecated action with notice only if used.
	 *
	 * @param string $tag The name of the action hook.
	 * @param array  $args Array of additional function arguments to be passed to do_action().
	 * @param string $version The version of WooCommerce that deprecated the hook.
	 * @param string $replacement The hook that should have been used.
	 * @param string $message A message regarding the change.
	 *
	 * @return mixed
	 *
	 * @since 1.5
	 */
	function wponion_apply_deprecated_filters( $tag, $args, $version, $replacement = null, $message = null ) {
		if ( ! has_filter( $tag ) ) {
			return $args[0];
		}

		wponion_deprecated_hook( $tag, $version, $replacement, $message );
		return apply_filters_ref_array( $tag, $args );
	}
}

if ( ! function_exists( 'wponion_deprecated_function' ) ) {
	/**
	 * Wrapper for deprecated functions so we can apply some extra logic.
	 *
	 * @param string $function Function used.
	 * @param string $version Version the message was added in.
	 * @param string $replacement Replacement for the called function.
	 *
	 * @since 1.5
	 */
	function wponion_deprecated_function( $function, $version, $replacement = null ) {
		// @codingStandardsIgnoreStart
		if ( wponion_is_ajax() ) {
			do_action( 'deprecated_function_run', $function, $replacement, $version );
			$log_string = "The {$function} function is deprecated since version {$version}.";
			$log_string .= $replacement ? " Replace with {$replacement}." : '';
			error_log( $log_string );
		} else {
			_deprecated_function( $function, $version, $replacement );
		}
		// @codingStandardsIgnoreEnd
	}
}

if ( ! function_exists( 'wponion_deprecated_hook' ) ) {
	/**
	 * Wrapper for deprecated hook so we can apply some extra logic.
	 *
	 * @param string $hook The hook that was used.
	 * @param string $version The version of WordPress that deprecated the hook.
	 * @param string $replacement The hook that should have been used.
	 * @param string $message A message regarding the change.
	 *
	 * @since 1.5
	 */
	function wponion_deprecated_hook( $hook, $version, $replacement = null, $message = null ) {
		// @codingStandardsIgnoreStart
		if ( wponion_is_ajax() ) {
			do_action( 'deprecated_hook_run', $hook, $replacement, $version, $message );

			$message    = empty( $message ) ? '' : ' ' . $message;
			$log_string = "{$hook} is deprecated since version {$version}";
			$log_string .= $replacement ? "! Use {$replacement} instead." : ' with no alternative available.';

			error_log( $log_string . $message );
		} else {
			_deprecated_hook( $hook, $version, $replacement, $message );
		}
		// @codingStandardsIgnoreEnd
	}
}

if ( ! function_exists( 'wponion_caught_exception' ) ) {
	/**
	 * When catching an exception, this allows us to log it if unexpected.
	 *
	 * @param Exception $exception_object The exception object.
	 * @param string    $function The function which threw exception.
	 * @param array     $args The args passed to the function.
	 *
	 * @since 1.5
	 */
	function wponion_caught_exception( $exception_object, $function = '', $args = array() ) {
		// @codingStandardsIgnoreStart
		$message = $exception_object->getMessage();
		$message .= '. Args: ' . print_r( $args, true ) . '.';

		do_action( 'woocommerce_caught_exception', $exception_object, $function, $args );
		error_log( "Exception caught in {$function}. {$message}." );
		// @codingStandardsIgnoreEnd
	}
}

if ( ! function_exists( 'wponion_doing_it_wrong' ) ) {
	/**
	 * Wrapper for _doing_it_wrong().
	 *
	 * @param string $function Function used.
	 * @param string $message Message to log.
	 * @param string $version Version the message was added in.
	 *
	 * @since 1.5
	 */
	function wponion_doing_it_wrong( $function, $message, $version ) {
		// @codingStandardsIgnoreStart
		$message .= ' Backtrace: ' . wp_debug_backtrace_summary();

		if ( wponion_is_ajax() ) {
			do_action( 'doing_it_wrong_run', $function, $message, $version );
			error_log( "{$function} was called incorrectly. {$message}. This message was added in version {$version}." );
		} else {
			_doing_it_wrong( $function, $message, $version );
		}
		// @codingStandardsIgnoreEnd
	}
}

if ( ! function_exists( 'wponion_deprecated_argument' ) ) {
	/**
	 * Wrapper for deprecated arguments so we can apply some extra logic.
	 *
	 * @param string $argument
	 * @param string $version
	 * @param string $message
	 *
	 * @since 1.5
	 */
	function wponion_deprecated_argument( $argument, $version, $message = null ) {
		if ( wponion_is_ajax() ) {
			do_action( 'deprecated_argument_run', $argument, $message, $version );
			error_log( "The {$argument} argument is deprecated since version {$version}. {$message}" );
		} else {
			_deprecated_argument( $argument, $version, $message );
		}
	}
}
