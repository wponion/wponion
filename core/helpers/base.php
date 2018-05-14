<?php
/**
 *
 * Initial version created 05-05-2018 / 04:37 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


if ( ! function_exists( 'wponion_is_ajax' ) ) {
	/**
	 * Checks if current request is ajax.
	 *
	 * @param bool $is_wponion_ajax if set to true then it checks if ajax request from wponion
	 *
	 * @return bool
	 */
	function wponion_is_ajax( $is_wponion_ajax = false ) {
		if ( isset( $_POST ) && isset( $_POST['action'] ) && 'heartbeat' === $_POST['action'] ) {
			return true;
		}
		return false;
	}
}

if ( ! function_exists( 'wponion_get_template' ) ) {
	/**
	 * Get other templates (e.g. product attributes) passing attributes and including the file.
	 *
	 * @access public
	 *
	 * @param string $template_name Template name.
	 * @param array  $args Arguments. (default: array).
	 * @param string $template_path Template path. (default: '').
	 */
	function wponion_get_template( $template_name, $args = array(), $template_path = '' ) {
		if ( ! empty( $args ) && is_array( $args ) ) {
			extract( $args ); // @codingStandardsIgnoreLine
		}

		$located = wponion_locate_template( $template_name, $template_path );

		if ( ! file_exists( $located ) ) {
			return;
		}

		// Allow 3rd party plugin filter template file from their plugin.
		$located = apply_filters( 'wponion_template', $located, $template_name, $args, $template_path );
		do_action( 'wponion_before_template_part', $template_name, $template_path, $located, $args );
		include $located;
		do_action( 'wponion_after_template_part', $template_name, $template_path, $located, $args );
	}
}

if ( ! function_exists( 'wponion_locate_template' ) ) {
	/**
	 * Locate a template and return the path for inclusion.
	 *
	 * This is the load order:
	 *
	 * yourtheme/$template_path/$template_name
	 * yourtheme/$template_name
	 * $default_path/$template_name
	 *
	 * @access public
	 *
	 * @param string $template_name Template name.
	 * @param string $template_path Template path. (default: '').
	 * @param string $default_path Default path. (default: '').
	 *
	 * @return string
	 */
	function wponion_locate_template( $template_name, $template_path = '' ) {
		if ( ! $template_path ) {
			$template_path = 'wponion/';
		}

		$default_path = WPONION_PATH . 'templates/';

		// Look within passed path within the theme - this is priority.
		$template = locate_template( array(
			trailingslashit( $template_path ) . $template_name,
			$template_name,
		) );

		// Get default template/.
		if ( ! $template ) {
			if ( file_exists( trailingslashit( $template_path ) . $template_name ) ) {
				$template = trailingslashit( $template_path ) . $template_name;
			}
		}

		if ( ! $template ) {
			$template = $default_path . $template_name;
		}

		// Return what we found.
		return apply_filters( 'wponion_locate_template', $template, $template_name, $template_path );
	}
}

if ( ! function_exists( 'wponion_get_template_html' ) ) {
	/**
	 * Like wc_get_template, but returns the HTML instead of outputting.
	 *
	 * @see wponion_get_template
	 * @since 2.5.0
	 *
	 * @param string $template_name Template name.
	 * @param array  $args Arguments. (default: array).
	 * @param string $template_path Template path. (default: '').
	 *
	 * @return string
	 */
	function wponion_get_template_html( $template_name, $args = array(), $template_path = '' ) {
		ob_start();
		wponion_get_template( $template_name, $args, $template_path );
		return ob_get_clean();
	}
}

if ( ! function_exists( 'wponion_get_var' ) ) {
	/**
	 * Getting POST Var
	 *
	 * @param        $var
	 * @param string $default
	 *
	 * @return string
	 */
	function wponion_get_var( $var, $default = '' ) {
		if ( isset( $_POST[ $var ] ) ) {
			return $_POST[ $var ];
		}
		if ( isset( $_GET[ $var ] ) ) {
			return $_GET[ $var ];
		}
		return $default;
	}
}

if ( ! function_exists( 'wponion_validate_parent_section_ids' ) ) {
	/**
	 * @param array $ids
	 *
	 * @return array|bool
	 */
	function wponion_validate_parent_section_ids( $ids = array() ) {
		if ( empty( array_filter( $ids ) ) ) {
			return false;
		} elseif ( empty( $ids['section_id'] ) && ! empty( $ids['parent_id'] ) ) {
			return array(
				'section_id' => false,
				'parent_id'  => $ids['parent_id'],
			);
		} elseif ( ! empty( $ids['section_id'] ) && empty( $ids['parent_id'] ) ) {
			return array(
				'section_id' => false,
				'parent_id'  => $ids['section_id'],
			);
		} else {
			return array(
				'section_id' => $ids['section_id'],
				'parent_id'  => $ids['parent_id'],
			);
		}
	}
}

if ( ! function_exists( 'wponion_debug_assets' ) ) {
	/**
	 * @param string $file_name
	 * @param string $ext
	 *
	 * @return string
	 */
	function wponion_debug_assets( $file_name = '', $ext = 'css' ) {
		if ( ( defined( 'WP_DEBUG' ) && true === WP_DEBUG ) || defined( 'SCRIPT_DEBUG' ) && true === SCRIPT_DEBUG ) {
			return $file_name . '.' . $ext;
		}
		return $file_name . '.min.' . $ext;
	}
}


/**
 * WPOnion Assets Related Functions.
 */
require_once WPONION_PATH . 'core/helpers/assets.php';

/**
 * WPOnion Fields Related Functions.
 */
require_once WPONION_PATH . 'core/helpers/field.php';

/**
 * WPOnion Registry Related Functions.
 */
require_once WPONION_PATH . 'core/helpers/registry.php';

/**
 * WPOnion Field Sanitize Related Functions.
 */
require_once WPONION_PATH . 'core/helpers/sanitize.php';

