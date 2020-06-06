<?php

namespace WPOnion\Deprecation;

use WPOnion\Bridge\Deprecated_Hooks;

defined( 'ABSPATH' ) || exit;

/**
 * Handles deprecation notices and triggering of legacy filter hooks
 */
class Filters extends Deprecated_Hooks {
	/**
	 * Array of deprecated hooks we need to handle.
	 * Format of 'new' => 'old'.
	 *
	 * @var array
	 */
	protected $deprecated_hooks = array(
		'wponion/field_class/alias'               => 'wponion_field_class_remaps',
		'wponion/sysinfo/datas'                   => 'wponion_sysinfo_final',
		'wponion/sysinfo/data'                    => 'wponion_sysinfo',
		'wponion/js/select_frameworks'            => 'wponion_select_input_frameworks',
		'wponion/js/select_frameworks/html_class' => 'wponion_select_input_frameworks_html_class',
		'wponion/fonts/backup'                    => 'wponion_backup_fonts',
		'wponion/fonts/websafe'                   => 'wponion_websafe_fonts',
		'wponion/fonts/google'                    => 'wponion_google_fonts',
		'wponion/query/modules/alias'             => 'wponion_query_modules_alias',
		'wponion/query/modules'                   => 'wponion_query_modules',
		'wponion/ajax/query/results'              => 'wponion_ajax_wp_query_results',
		'wponion/default/theme'                   => 'wponion_default_theme',
		'wponion/query/args'                      => 'wponion_query_args',
		'wponion/query/results'                   => 'wponion_wp_query_result',
		'wponion/default/field/column/css_class'  => 'wponion_field_column_css_class',
		'wponion/field/wp_editor/args'            => 'wponion_wp_editor',
	);

	/**
	 * Array of versions on each hook has been deprecated.
	 *
	 * @var array
	 */
	protected $deprecated_version = array(
		'wponion_field_class_remaps'                 => '1.5',
		'wponion_sysinfo_final'                      => '1.5',
		'wponion_sysinfo'                            => '1.5',
		'wponion_select_input_frameworks'            => '1.5',
		'wponion_select_input_frameworks_html_class' => '1.5',
		'wponion_backup_fonts'                       => '1.5',
		'wponion_websafe_fonts'                      => '1.5',
		'wponion_google_fonts'                       => '1.5',
		'wponion_query_modules_alias'                => '1.5',
		'wponion_query_modules'                      => '1.5',
		'wponion_ajax_wp_query_results'              => '1.5',
		'wponion_default_theme'                      => '1.5',
		'wponion_query_args'                         => '1.5',
		'wponion_wp_query_result'                    => '1.5',
		'wponion_field_column_css_class'             => '1.5',
		'wponion_wp_editor'                          => '1.5',
	);

	/**
	 * Which Type of Hook is this
	 * action / filter
	 *
	 * @var string
	 */
	protected $type = 'filter';

	/**
	 * Fire off a legacy hook with it's args.
	 *
	 * @param string $old_hook Old hook name.
	 * @param array  $new_callback_args New callback args.
	 *
	 * @return mixed
	 */
	protected function trigger_hook( $old_hook, $new_callback_args ) {
		return apply_filters_ref_array( $old_hook, $new_callback_args );
	}
}
