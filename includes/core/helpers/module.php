<?php
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

// Simple Modules Related Functions
require wponion()->inc( 'core/helpers/modules/simple-module.php' );

// admin-bar related functions
require wponion()->inc( 'core/helpers/modules/admin-bar.php' );

// admin-columns related functions
require wponion()->inc( 'core/helpers/modules/admin-columns.php' );

// admin-notice related functions
require wponion()->inc( 'core/helpers/modules/admin-notice.php' );

// admin-page related functions
require wponion()->inc( 'core/helpers/modules/admin-page.php' );

// bulk-quick-edit related functions
require wponion()->inc( 'core/helpers/modules/bulk-quick-edit.php' );

// customizer related functions
require wponion()->inc( 'core/helpers/modules/customizer.php' );

// dashboard-widgets related functions
require wponion()->inc( 'core/helpers/modules/dashboard-widgets.php' );

// help-tabs related functions
require wponion()->inc( 'core/helpers/modules/help-tabs.php' );

// media-fields related functions
require wponion()->inc( 'core/helpers/modules/media-fields.php' );

// metabox related functions
require wponion()->inc( 'core/helpers/modules/metabox.php' );

// nav-menu related functions
require wponion()->inc( 'core/helpers/modules/nav-menu.php' );

// settings related functions
require wponion()->inc( 'core/helpers/modules/settings.php' );

// taxonomy related functions
require wponion()->inc( 'core/helpers/modules/taxonomy.php' );

// user_profile related functions
require wponion()->inc( 'core/helpers/modules/user_profile.php' );

// woocommerce related functions
require wponion()->inc( 'core/helpers/modules/woocommerce.php' );

// wp-pointers related functions
require wponion()->inc( 'core/helpers/modules/wp-pointers.php' );

// cpt related functions
require wponion()->inc( 'core/helpers/modules/cpt.php' );
