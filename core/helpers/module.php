<?php
/**
 *
 * Initial version created 25-05-2018 / 03:21 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! function_exists( 'wponion_module_html_class' ) ) {
	/**
	 * @param string $module
	 * @param string $plugin_id
	 * @param string $theme
	 *
	 * @return array|string
	 */
	function wponion_module_html_class( $module = '', $plugin_id = '', $theme = '' ) {
		$html_class = array( 'wponion-framework' );
		if ( ! empty( $module ) ) {
			$html_class[] = 'wponion-' . $module;
			$html_class[] = 'wponion-module-' . $module;
			$html_class[] = 'wponion-module-' . $module . '-framework';
			if ( ! empty( $plugin_id ) ) {
				$html_class[] = 'wponion-' . $plugin_id . '-' . $module;
			}
		}

		if ( ! empty( $theme ) ) {
			$html_class[] = 'wponion-' . $theme . '-theme';
		}

		return wponion_html_class( $html_class );
	}
}

if ( ! function_exists( 'wponion_settings' ) ) {
	/**
	 * Returns a new instance for settings page.
	 *
	 * @param array|string $instance_id_or_args
	 * @param array        $fields
	 *
	 * @return bool|\WPOnion\Modules\Settings
	 */
	function wponion_settings( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_settings_registry( $instance_id_or_args );
		}
		return new \WPOnion\Modules\Settings( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_network_settings' ) ) {
	/**
	 * Returns a new instance for network settings page.
	 *
	 * @param array|string $instance_id_or_args
	 * @param array        $fields
	 *
	 * @return bool|\WPOnion\Modules\Network_Settings
	 */
	function wponion_network_settings( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_settings_registry( $instance_id_or_args );
		}
		return new \WPOnion\Modules\Network_Settings( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_metabox' ) ) {
	/**
	 * Returns A New Instance for Metabox Module or returns an existing instance.
	 *
	 * @param array $instance_id_or_args
	 * @param array $fields
	 *
	 * @return bool|\WPOnion\Modules\metabox
	 */
	function wponion_metabox( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_metabox_registry( $instance_id_or_args );
		}
		return new \WPOnion\Modules\metabox( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_taxonomy' ) ) {
	/**
	 * Returns A New Instance for taxonomy Module or returns an existing instance.
	 *
	 * @param array $instance_id_or_args
	 * @param array $fields
	 *
	 * @return bool|\WPOnion\Modules\taxonomy
	 */
	function wponion_taxonomy( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_metabox_registry( $instance_id_or_args );
		}
		return new \WPOnion\Modules\taxonomy( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_woocommerce' ) ) {
	/**
	 * Returns A New Instance for WooCommerce Module or returns an existing instance.
	 *
	 * @param array $instance_id_or_args
	 * @param array $fields
	 *
	 * @return bool|\WPOnion\Modules\woocommerce
	 */
	function wponion_woocommerce( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_woocommerce_registry( $instance_id_or_args );
		}
		return new \WPOnion\Modules\woocommerce( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_user_profile' ) ) {
	/**
	 * Returns A New Instance for WooCommerce Module or returns an existing instance.
	 *
	 * @param array $instance_id_or_args
	 * @param array $fields
	 *
	 * @return bool|\WPOnion\Modules\User_Profile
	 */
	function wponion_user_profile( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_user_profile_registry( $instance_id_or_args );
		}
		return new \WPOnion\Modules\User_Profile( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_customizer' ) ) {
	/**
	 * @param $settings
	 * @param $fields
	 *
	 * @return \WPOnion\Modules\customizer
	 */
	function wponion_customizer( $settings, $fields ) {
		return new \WPOnion\Modules\customizer( $settings, $fields );
	}
}

if ( ! function_exists( 'wponion_admin_page' ) ) {
	/**
	 * @param array $arguments
	 *
	 * @return \WPOnion\Modules\Admin_Page
	 */
	function wponion_admin_page( $arguments = array() ) {
		return new \WPOnion\Modules\Admin_Page( $arguments );
	}
}

if ( ! function_exists( 'wponion_dashboard_widgets' ) ) {
	/**
	 * Returns a new instance for Dashboard_Widgets page.
	 *
	 * @param array|string $instance_id_or_args
	 * @param array        $fields
	 *
	 * @return bool|\WPOnion\Modules\Dashboard_Widgets
	 */
	function wponion_dashboard_widgets( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_dashboard_widgets_registry( $instance_id_or_args );
		}
		return new \WPOnion\Modules\Dashboard_Widgets( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_help_tabs' ) ) {
	/**
	 * Returns a new instance of Help Tabs.
	 *
	 * @param        $page
	 * @param array  $help_tabs
	 * @param string $help_sidebar
	 *
	 * @return \WPOnion\Modules\Help_Tabs
	 */
	function wponion_help_tabs( $page, $help_tabs = array(), $help_sidebar = '' ) {
		return new \WPOnion\Modules\Help_Tabs( $page, $help_tabs, $help_sidebar );
	}
}

if ( ! function_exists( 'wponion_admin_columns' ) ) {
	/**
	 * Returns a new instance of Admin Columns.
	 *
	 * @param array $post_types
	 * @param array $title_or_arguments
	 * @param array $render_callback
	 *
	 * @return \WPOnion\Modules\Admin_Columns
	 */
	function wponion_admin_columns( $post_types = array(), $title_or_arguments = array(), $render_callback = array() ) {
		return new \WPOnion\Modules\Admin_Columns( $post_types, $title_or_arguments, $render_callback );
	}
}

if ( ! function_exists( 'wponion_quick_edit' ) ) {
	/**
	 * @param array $settings
	 * @param array $fields
	 *
	 * @return \WPOnion\Modules\Quick_Edit
	 */
	function wponion_quick_edit( $settings = array(), $fields = array() ) {
		return new \WPOnion\Modules\Quick_Edit( $settings, $fields );
	}
}

if ( ! function_exists( 'wponion_bulk_edit' ) ) {
	/**
	 * @param array $settings
	 * @param array $fields
	 *
	 * @return \WPOnion\Modules\Quick_Edit
	 */
	function wponion_bulk_edit( $settings = array(), $fields = array() ) {
		return new \WPOnion\Modules\Bulk_Edit( $settings, $fields );
	}
}

if ( ! function_exists( 'wponion_admin_bar' ) ) {
	/**
	 * @param $admin_bar_menus
	 *
	 * @return \WPOnion\Modules\Admin_Bar
	 */
	function wponion_admin_bar( $admin_bar_menus ) {
		return new \WPOnion\Modules\Admin_Bar( $admin_bar_menus );
	}
}

if ( ! function_exists( 'wponion_nav_menu' ) ) {
	/**
	 * @param array $settings
	 * @param array $fields
	 *
	 * @return \WPOnion\Modules\Nav_Menu
	 */
	function wponion_nav_menu( $settings = array(), $fields = array() ) {
		return new \WPOnion\Modules\Nav_Menu( $settings, $fields );
	}
}

if ( ! function_exists( 'wponion_media_fields' ) ) {
	/**
	 * @param array $instance_id_or_args
	 * @param array $fields
	 *
	 * @return \WPOnion\Modules\Media_Fields
	 */
	function wponion_media_fields( $instance_id_or_args = array(), $fields = array() ) {
		return new \WPOnion\Modules\Media_Fields( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_wp_pointers' ) ) {
	/**
	 * @param $pointer_id_or_instance_id
	 *
	 * @return \WPOnion\Modules\WP_Pointers
	 */
	function wponion_wp_pointers( $pointer_id_or_instance_id ) {
		if ( false !== wponion_wp_pointers_registry( $pointer_id_or_instance_id ) ) {
			return wponion_wp_pointers_registry( $pointer_id_or_instance_id );
		}
		return new \WPOnion\Modules\WP_Pointers( $pointer_id_or_instance_id );
	}
}

if ( ! function_exists( 'wponion_wp_pointer' ) ) {
	/**
	 * @param bool  $selector
	 * @param bool  $title
	 * @param bool  $text
	 * @param array $args
	 * @param bool  $pointer_instance
	 *
	 * @return \WPOnion\Modules\WP_Pointers\Pointer
	 */
	function wponion_wp_pointer( $selector = false, $title = false, $text = false, $args = array(), $pointer_instance = false ) {
		return new \WPOnion\Modules\WP_Pointers\Pointer( $selector, $title, $text, $args, $pointer_instance );
	}
}

if ( ! function_exists( 'wponion_admin_notices' ) ) {
	/**
	 * @param array $instance_id_or_args
	 *
	 * @return bool|\WPOnion\Modules\Admin_Notices
	 */
	function wponion_admin_notices( $instance_id_or_args = array() ) {
		if ( is_scalar( $instance_id_or_args ) ) {
			return wponion_admin_notices_registry( $instance_id_or_args );
		} elseif ( empty( $instance_id_or_args ) ) {
			$instance_id_or_args = '_wponion_admin_notices';
			$instance            = wponion_admin_notices_registry( $instance_id_or_args );
			if ( $instance ) {
				return $instance;
			}
		}
		return new \WPOnion\Modules\Admin_Notices( $instance_id_or_args );
	}
}
