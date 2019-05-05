<?php
if ( ! function_exists( 'wponion_is_container' ) ) {
	/**
	 * Checks if given instance is  a \WPO\Container.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_is_container( $instance ) {
		return wponion_is_builder( $instance, 'container' );
	}
}

if ( ! function_exists( 'wponion_is_builder' ) ) {
	/**
	 * Checks if given builder is a instance of any in below
	 *
	 * @param        $builder
	 * @param string $type
	 *
	 * @return bool
	 * @see \WPO\Builder
	 * @see \WPO\Container
	 * @see \WPO\Field
	 *
	 */
	function wponion_is_builder( $builder, $type = 'builder' ) {
		switch ( strtolower( $type ) ) {
			case 'builder':
			case 'build':
				return ( $builder instanceof WPO\Builder );
				break;
			case 'container':
			case 'page':
			case 'section':
				return ( $builder instanceof WPO\Container );
				break;
			case 'field':
				return ( $builder instanceof WPO\Field );
				break;
		}
		return false;
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

// admin-bar related functions
require WPONION_PATH . 'core/helpers/modules/admin-bar.php';

// admin-columns related functions
require WPONION_PATH . 'core/helpers/modules/admin-columns.php';

// admin-notice related functions
require WPONION_PATH . 'core/helpers/modules/admin-notice.php';

// admin-page related functions
require WPONION_PATH . 'core/helpers/modules/admin-page.php';

// bulk-quick-edit related functions
require WPONION_PATH . 'core/helpers/modules/bulk-quick-edit.php';

// customizer related functions
require WPONION_PATH . 'core/helpers/modules/customizer.php';

// dashboard-widgets related functions
require WPONION_PATH . 'core/helpers/modules/dashboard-widgets.php';

// help-tabs related functions
require WPONION_PATH . 'core/helpers/modules/help-tabs.php';

// media-fields related functions
require WPONION_PATH . 'core/helpers/modules/media-fields.php';

// metabox related functions
require WPONION_PATH . 'core/helpers/modules/metabox.php';

// nav-menu related functions
require WPONION_PATH . 'core/helpers/modules/nav-menu.php';

// settings related functions
require WPONION_PATH . 'core/helpers/modules/settings.php';

// taxonomy related functions
require WPONION_PATH . 'core/helpers/modules/taxonomy.php';

// user_profile related functions
require WPONION_PATH . 'core/helpers/modules/user_profile.php';

// woocommerce related functions
require WPONION_PATH . 'core/helpers/modules/woocommerce.php';

// wp-pointers related functions
require WPONION_PATH . 'core/helpers/modules/wp-pointers.php';
