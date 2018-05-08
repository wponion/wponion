<?php
/**
 *
 * Initial version created 07-05-2018 / 06:13 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
global $wponion_wp_theme;
$wponion_wp_theme = null;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_WP_Theme' ) ) {
	/**
	 * Class WPOnion_Theme_WP
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_WP_Theme extends WPOnion_Theme_Abstract {
		/**
		 * WPOnion_Theme_WP constructor.
		 *
		 * @param \WPOnion_Settings $settings_instance
		 * @param string            $theme_file
		 */
		public function __construct( \WPOnion_Settings $settings_instance, string $theme_file = __FILE__ ) {
			parent::__construct( $settings_instance, $theme_file );
		}

		/**
		 *
		 */
		public function register_assets() {
		}


		public function get_main_menu_html() {
			$return = '<nav class="nav-tab-wrapper">';
			$menus  = $this->settings()
				->settings_menus();
			//

			if ( is_array( $menus ) ) {
				foreach ( $menus as $slug => $menu ) {
					if ( isset( $menu['is_seperator'] ) && true === $menu['is_seperator'] ) {
						continue;
					}

					$attr          = isset( $menu['attributes'] ) ? $menu['attributes'] : array();
					$attr['class'] = isset( $attr['class'] ) ? $attr['class'] . ' nav-tab ' : ' nav-tab ';
					$attr['title'] = isset( $attr['title'] ) ? $attr['title'] : $menu['title'];
					$icon          = ( ! empty( $menu['icon'] ) ) ? '<i class="' . $menu['icon'] . '"></i>' : '';
					$page_title    = $menu['title'];

					$attr['class'] .= ( ! empty( $icon ) ) ? ' nav-with-icon ' : '';
					$attr['class'] .= ( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? ' nav-internal-href ' : '';


					if ( true === $menu['is_active'] ) {
						$attr['class'] .= ' nav-tab-active ';
					}
					$attr['href'] = $menu['href'];

					$attr = wponion_array_to_html_attributes( $attr );

					$return .= '<a ' . $attr . '>' . $icon . $page_title . '</a>';

				}
			} else {
				return false;
			}

			$return .= '</nav>';
			return $return;
		}
	}

}
$wponion_wp_theme = new WPOnion_WP_Theme( $wponion_class );