<?php
/**
 *
 * Initial version created 19-06-2018 / 10:38 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

global $wponion_modern_theme;
$wponion_modern_theme = null;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_modern_Theme' ) ) {
	/**
	 * Class WPOnion_Theme_WP
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_modern_Theme extends \WPOnion\Theme {

		/**
		 * WPOnion_modern_Theme constructor.
		 *
		 * @param array  $data
		 * @param string $theme_file
		 */
		public function __construct( $data, $theme_file = __FILE__ ) {
			parent::__construct( $data, __FILE__, 'modern' );
		}

		/**
		 * Registers Assets.
		 *
		 * @return mixed|void
		 */
		public function register_assets() {
			//wp_enqueue_style( 'wponion-wp-theme', $this->asset( 'assets/wponion-wp-theme' ), array( 'wponion-core' ) );
			//wp_enqueue_script( 'wponion-wp-theme', $this->asset( 'assets/wponion-wp-theme', 'js' ), array( 'wponion-plugins' ) );
		}

		/**
		 * Renders Metabox MENU HTML.
		 *
		 * @param $menu
		 *
		 * @return string
		 */
		public function metabox_menu_html( $menu, $parent_name = '' ) {
			$attr                    = isset( $menu['attributes'] ) ? $menu['attributes'] : array();
			$attr['title']           = isset( $attr['title'] ) ? $attr['title'] : $menu['title'];
			$page_title              = $menu['title'];
			$attr['data-href']       = $menu['href'];
			$attr['href']            = 'javascript:void(0);';
			$attr['class']           = isset( $attr['class'] ) ? $attr['class'] : array();
			$attr['class']           = wponion_html_class( $attr['class'], array(
				wponion_html_class( $menu['class'] ),
				( ! empty( $men['icon'] ) ) ? 'nav-with-icon' : '',
				( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? 'nav-internal-href' : '',
				( isset( $menu['is_active'] ) && true === $menu['is_active'] ) ? 'active' : '',
			) );
			$attr['data-wponion-id'] = ( ! empty( $parent_name ) ) ? 'wponion_menu_' . $parent_name . '_' . $menu['name'] : 'wponion_menu_' . $menu['name'];
			$attr                    = wponion_array_to_html_attributes( $attr );
			return '<a ' . $attr . '>' . wponion_icon( $menu['icon'] ) . $page_title . '</a>';
		}
	}
}

new WPOnion_modern_Theme( $data );
