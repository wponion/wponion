<?php

use WPOnion\Modules\Admin\Admin_Bar;
use WPOnion\Modules\Admin\Columns;
use WPOnion\Modules\Admin\Notice\Notice;
use WPOnion\Modules\Admin\Notice\Handler;
use WPOnion\Modules\Admin\Page;
use WPOnion\Modules\Admin\Edits\Bulk;
use WPOnion\Modules\Admin\Edits\Quick;
use WPOnion\Modules\Admin\Row_Actions;
use WPOnion\Modules\CPT\Post_Type;
use WPOnion\Modules\CPT\Taxonomy as Custom_Taxonomy;
use WPOnion\Modules\customizer;
use WPOnion\Modules\Widgets\Dashboard;
use WPOnion\Modules\Admin\Help_Tabs;
use WPOnion\Modules\Admin\Media_Fields;
use WPOnion\Modules\Metabox\metabox;
use WPOnion\Modules\Admin\Nav_Menu;
use WPOnion\Modules\Settings\Network;
use WPOnion\Modules\Settings\Settings;
use WPOnion\Modules\Endpoint;
use WPOnion\Modules\Admin\Page_Actions;
use WPOnion\Modules\Admin\Plugin_Links;
use WPOnion\Modules\Admin\Taxonomy;
use WPOnion\Modules\Admin\User_Profile;
use WPOnion\Modules\WooCommerce\Product;
use WPOnion\Modules\WooCommerce\Settings as WC_Settings;
use WPOnion\Modules\Admin\Pointers;
use WPOnion\WP\Pointers\Pointer;
use WPOnion\WP\Sysinfo\Sysinfo;

/**
 * Module Utilites
 */
if ( ! function_exists( 'wponion_validate_parent_container_ids' ) ) {
	/**
	 * Checks if given section and parent id are valid and none of them has empty values.
	 *
	 * @param array $ids
	 *
	 * @return array|bool
	 */
	function wponion_validate_parent_container_ids( $ids = array() ) {
		if ( ! empty( $ids['sub_container_id'] ) && empty( $ids['container_id'] ) ) {
			return array(
				'sub_container_id' => false,
				'container_id'     => $ids['sub_container_id'],
			);
		}
		return ( empty( array_filter( $ids ) ) ) ? false : $ids;
	}
}

if ( ! function_exists( 'wponion_module_html_class' ) ) {
	/**
	 * @param string $module
	 * @param string $theme
	 *
	 * @return array|string
	 */
	function wponion_module_html_class( $module = '', $theme = '' ) {
		$html_class = array( 'wponion-framework' );
		if ( ! empty( $module ) ) {
			$html_class[] = 'wponion-' . $module;
			$html_class[] = 'wponion-module-' . $module;
			$html_class[] = 'wponion-module-' . $module . '-framework';
		}

		if ( ! empty( $theme ) ) {
			$html_class[] = 'wponion-' . $theme . '-theme';
		}

		return wponion_html_class( $html_class );
	}
}

/**
 * Modules
 */
if ( ! function_exists( 'wponion_sysinfo' ) ) {
	/**
	 * Generates HTML Output for loading SysInfo.
	 *
	 * @param $args
	 */
	function wponion_sysinfo( $args ) {
		Sysinfo::get( $args );
	}
}

if ( ! function_exists( 'wponion_markdown' ) ) {
	/**
	 * Returns A Parsedown Instance or Parsed Content.
	 *
	 * @param null $content
	 *
	 * @return \Parsedown|string
	 */
	function wponion_markdown( $content = null ) {
		static $parse_down_instance = false;
		if ( false === $parse_down_instance ) {
			if ( class_exists( '\Parsedown' ) ) {
				$parse_down_instance = new Parsedown();
			}
		}
		return ( empty( $content ) ) ? $parse_down_instance : $parse_down_instance->text( $content );
	}
}

if ( ! function_exists( 'wponion_admin_page' ) ) {
	/**
	 * @param array|string $arguments
	 *
	 * @return \WPOnion\Modules\Admin\Page
	 */
	function wponion_admin_page( $arguments = array() ) {
		if ( is_string( $arguments ) ) {
			return wponion_admin_page_registry( $arguments );
		}
		return new Page( $arguments );
	}
}

if ( ! function_exists( 'wponion_admin_bar' ) ) {
	/**
	 * @param $menus
	 *
	 * @return \WPOnion\Modules\Admin\Admin_Bar
	 */
	function wponion_admin_bar( $menus ) {
		return new Admin_Bar( $menus );
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
	 * @return \WPOnion\Modules\Admin\Columns
	 */
	function wponion_admin_columns( $post_types = array(), $title_or_arguments = array(), $render_callback = array() ) {
		if ( is_string( $post_types ) && empty( $title_or_arguments ) && empty( $render_callback ) ) {
			return wponion_admin_columns_registry( $post_types );
		}
		return new Columns( $post_types, $title_or_arguments, $render_callback );
	}
}

if ( ! function_exists( 'wponion_customizer' ) ) {
	/**
	 * @param string|array       $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return \WPOnion\Modules\customizer
	 */
	function wponion_customizer( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_customizer_registry( $instance_id_or_args );
		}
		return new customizer( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_dashboard_widgets' ) ) {
	/**
	 * Returns a new instance for Dashboard_Widgets page.
	 *
	 * @param array|string       $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return bool|\WPOnion\Modules\Widgets\Dashboard
	 */
	function wponion_dashboard_widgets( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_dashboard_widgets_registry( $instance_id_or_args );
		}
		return new Dashboard( $instance_id_or_args, $fields );
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
	 * @return \WPOnion\Modules\Admin\Help_Tabs
	 */
	function wponion_help_tabs( $page, $help_tabs = array(), $help_sidebar = '' ) {
		return new Help_Tabs( $page, $help_tabs, $help_sidebar );
	}
}

if ( ! function_exists( 'wponion_media_fields' ) ) {
	/**
	 * @param array $instance_id_or_args
	 * @param array $fields
	 *
	 * @return \WPOnion\Modules\Admin\Media_Fields
	 */
	function wponion_media_fields( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_media_fields_registry( $instance_id_or_args );
		}
		return new Media_Fields( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_metabox' ) ) {
	/**
	 * Returns A New Instance for Metabox Module or returns an existing instance.
	 *
	 * @param array              $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return bool|\WPOnion\Modules\Metabox\metabox
	 */
	function wponion_metabox( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_metabox_registry( $instance_id_or_args );
		}
		return new metabox( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_nav_menu' ) ) {
	/**
	 * @param array              $settings
	 * @param array|\WPO\Builder $fields
	 *
	 * @return \WPOnion\Modules\Admin\Nav_Menu
	 */
	function wponion_nav_menu( $settings = array(), $fields = array() ) {
		if ( is_string( $settings ) && empty( $fields ) ) {
			return wponion_nav_menu_registry( $settings );
		}
		return new Nav_Menu( $settings, $fields );
	}
}

if ( ! function_exists( 'wponion_plugin_links' ) ) {
	/**
	 * @param $plugin_file
	 *
	 * @return \WPOnion\Modules\Admin\Plugin_Links
	 */
	function wponion_plugin_links( $plugin_file ) {
		return new Plugin_Links( $plugin_file );
	}
}

if ( ! function_exists( 'wponion_endpoint' ) ) {
	/**
	 * @param $slug
	 *
	 * @return \WPOnion\Modules\Endpoint
	 */
	function wponion_endpoint( $slug ) {
		return new Endpoint( $slug );
	}
}

if ( ! function_exists( 'wponion_page_actions' ) ) {
	/**
	 * @param       $post_type
	 * @param array $buttons
	 */
	function wponion_page_actions( $post_type, $buttons = array() ) {
		Page_Actions::add( $post_type, $buttons );
	}
}

if ( ! function_exists( 'wponion_taxonomy' ) ) {
	/**
	 * Returns A New Instance for taxonomy Module or returns an existing instance.
	 *
	 * @param array              $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return bool|\WPOnion\Modules\Admin\Taxonomy
	 */
	function wponion_taxonomy( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_taxonomy_registry( $instance_id_or_args );
		}
		return new Taxonomy( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_user_profile' ) ) {
	/**
	 * Returns A New Instance for WooCommerce Module or returns an existing instance.
	 *
	 * @param array              $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return bool|\WPOnion\Modules\Admin\User_Profile
	 */
	function wponion_user_profile( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_user_profile_registry( $instance_id_or_args );
		}
		return new User_Profile( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_row_actions' ) ) {
	/**
	 * @param string $type
	 * @param int    $priority
	 * @param bool   $hook
	 *
	 * @return \WPOnion\Modules\Admin\Row_Actions
	 * @since 1.5
	 */
	function wponion_row_actions( $type = 'post', $priority = 20, $hook = false ) {
		return new Row_Actions( array(
			'type'     => $type,
			'priority' => $priority,
			'hook'     => $hook,
		) );
	}
}

/**
 * Admin Notice Module.
 */
if ( ! function_exists( 'wponion_admin_notices' ) ) {
	/**
	 * @param array $instance_id_or_args
	 *
	 * @return bool|\WPOnion\Modules\Admin\Notice\Handler
	 */
	function wponion_admin_notices( $instance_id_or_args = array() ) {
		if ( is_scalar( $instance_id_or_args ) ) {
			return wponion_admin_notices_registry( $instance_id_or_args );
		} elseif ( empty( $instance_id_or_args ) ) {
			$instance_id_or_args = new Handler( '_wponion_admin_notices' );
			$instance            = wponion_admin_notices_registry( $instance_id_or_args );
			if ( $instance ) {
				return $instance;
			}
		}
		return new Handler( $instance_id_or_args );
	}
}

if ( ! function_exists( 'wponion_admin_notice' ) ) {
	/**
	 * Creates a new Instance of WPOnion Admin Notice.
	 *
	 * @param       $type
	 * @param       $content
	 * @param       $title
	 * @param array $args
	 *
	 * @return \WPOnion\Modules\Admin\Notice\Notice
	 */
	function wponion_admin_notice( $type, $content, $title, $args = array() ) {
		$args = wp_parse_args( $args, array(
			'title'   => $title,
			'content' => $content,
			'type'    => $type,
		) );
		return new Notice( $args );
	}
}

if ( ! function_exists( 'wponion_success_admin_notice' ) ) {
	/**
	 * @param string $content
	 * @param string $title
	 * @param array  $args
	 *
	 * @return \WPOnion\Modules\Admin\Notice\Notice
	 */
	function wponion_success_admin_notice( $content = '', $title = '', $args = array() ) {
		return wponion_admin_notice( 'success', $content, $title, $args );
	}
}

if ( ! function_exists( 'wponion_info_admin_notice' ) ) {
	/**
	 * @param string $content
	 * @param string $title
	 * @param array  $args
	 *
	 * @return \WPOnion\Modules\Admin\Notice\Notice
	 */
	function wponion_info_admin_notice( $content = '', $title = '', $args = array() ) {
		return wponion_admin_notice( 'info', $content, $title, $args );
	}
}

if ( ! function_exists( 'wponion_error_admin_notice' ) ) {
	/**
	 * @param string $content
	 * @param string $title
	 * @param array  $args
	 *
	 * @return \WPOnion\Modules\Admin\Notice\Notice
	 */
	function wponion_error_admin_notice( $content = '', $title = '', $args = array() ) {
		return wponion_admin_notice( 'error', $content, $title, $args );
	}
}

if ( ! function_exists( 'wponion_warning_admin_notice' ) ) {
	/**
	 * @param string $content
	 * @param string $title
	 * @param array  $args
	 *
	 * @return \WPOnion\Modules\Admin\Notice\Notice
	 */
	function wponion_warning_admin_notice( $content = '', $title = '', $args = array() ) {
		return wponion_admin_notice( 'warning', $content, $title, $args );
	}
}

if ( ! function_exists( 'wponion_upgrade_admin_notice' ) ) {
	/**
	 * @param string $content
	 * @param string $title
	 * @param array  $args
	 *
	 * @return \WPOnion\Modules\Admin\Notice\Notice
	 */
	function wponion_upgrade_admin_notice( $content = '', $title = '', $args = array() ) {
		return wponion_admin_notice( 'update-nag', $content, $title, $args );
	}
}

/**
 * Bulk & Quick Edit Module.
 */
if ( ! function_exists( 'wponion_quick_edit' ) ) {
	/**
	 * @param array|string       $settings
	 * @param array|\WPO\Builder $fields
	 *
	 * @return \WPOnion\Modules\Admin\Edits\Quick
	 */
	function wponion_quick_edit( $settings = array(), $fields = null ) {
		if ( is_string( $settings ) && empty( $fields ) ) {
			return wponion_quick_edit_registry( $settings );
		}
		return new Quick( $settings, $fields );
	}
}

if ( ! function_exists( 'wponion_bulk_edit' ) ) {
	/**
	 * @param array|string       $settings
	 * @param array|\WPO\Builder $fields
	 *
	 * @return \WPOnion\Modules\Admin\Edits\Quick
	 */
	function wponion_bulk_edit( $settings = array(), $fields = null ) {
		if ( is_string( $settings ) && empty( $fields ) ) {
			return wponion_bulk_edit_registry( $settings );
		}
		return new Bulk( $settings, $fields );
	}
}

/**
 * Custom Post & Taxonomy Types.
 */
if ( ! function_exists( 'wponion_register_post_type' ) ) {
	/**
	 * @param string            $post_type
	 * @param array|string|bool $post_type_args_or_label
	 *
	 * @return \WPOnion\Modules\CPT\Post_Type
	 */
	function wponion_register_post_type( $post_type, $post_type_args_or_label = null ) {
		return new Post_Type( $post_type, $post_type_args_or_label );
	}
}

if ( ! function_exists( 'wponion_register_taxonomy' ) ) {
	/**
	 * @param       $taxonomy
	 * @param array $object_types
	 * @param array $args
	 *
	 * @return \WPOnion\Modules\CPT\Taxonomy
	 */
	function wponion_register_taxonomy( $taxonomy, $object_types = array(), $args = array() ) {
		return new Custom_Taxonomy( $taxonomy, $object_types, $args );
	}
}

/**
 * Settings Module
 */
if ( ! function_exists( 'wponion_settings' ) ) {
	/**
	 * Returns a new instance for settings page.
	 *
	 * @param array              $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return \WPOnion\Modules\Settings\Settings
	 */
	function wponion_settings( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_settings_registry( $instance_id_or_args );
		}
		return new Settings( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_network_settings' ) ) {
	/**
	 * Returns a new instance for network settings page.
	 *
	 * @param array              $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return \WPOnion\Modules\Settings\Network
	 */
	function wponion_network_settings( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_settings_registry( $instance_id_or_args );
		}
		return new Network( $instance_id_or_args, $fields );
	}
}

/**
 * WooCommerce
 */
if ( ! function_exists( 'wponion_wc_product' ) ) {
	/**
	 * Returns A New Instance for WooCommerce Product Module or returns an existing instance.
	 *
	 * @param array             $instance_id_or_args
	 * @param \WPO\Builder|null $fields
	 *
	 * @return bool|\WPOnion\Modules\WooCommerce\Product
	 */
	function wponion_wc_product( $instance_id_or_args = array(), $fields = null ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_wc_product_registry( $instance_id_or_args );
		}
		return new Product( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_wc_settings' ) ) {
	/**
	 * Returns A New Instance for WooCommerce Product Module or returns an existing instance.
	 *
	 * @param array             $instance_id_or_args
	 * @param \WPO\Builder|null $fields
	 *
	 * @return bool|\WPOnion\Modules\WooCommerce\Settings
	 */
	function wponion_wc_settings( $instance_id_or_args = array(), $fields = null ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_wc_settings_registry( $instance_id_or_args );
		}
		return new WC_Settings( $instance_id_or_args, $fields );
	}
}

/**
 * WP Pointers.
 */
if ( ! function_exists( 'wponion_wp_pointers' ) ) {
	/**
	 * @param $pointer_id_or_instance_id
	 *
	 * @return \WPOnion\Modules\Admin\Pointers
	 */
	function wponion_wp_pointers( $pointer_id_or_instance_id ) {
		if ( false !== wponion_wp_pointers_registry( $pointer_id_or_instance_id ) ) {
			return wponion_wp_pointers_registry( $pointer_id_or_instance_id );
		}
		return new Pointers( $pointer_id_or_instance_id );
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
	 * @return \WPOnion\WP\Pointers\Pointer
	 */
	function wponion_wp_pointer( $selector = false, $title = false, $text = false, $args = array(), $pointer_instance = false ) {
		return new Pointer( $selector, $title, $text, $args, $pointer_instance );
	}
}

