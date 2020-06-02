<?php

namespace WPOnion\Theme;

use WPOnion\Theme_API;

defined( 'ABSPATH' ) || exit;

/**
 * Class WP_Modern
 *
 * @package WPOnion\Theme
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class WP_Modern extends Theme_API {
	private static $themes = array();

	/**
	 * WP_Modern constructor.
	 *
	 * @param $data
	 */
	public function __construct( $data ) {
		parent::__construct( $data, __FILE__, 'wp-modern' );
		self::$themes = array(
			'light'     => array(
				'content_background'        => '#fff',
				'header_background'         => '#e5e5e5',
				'header_color'              => '#000',
				'footer_background'         => '#e5e5e5',
				'footer_color'              => '#000',
				'menu_background'           => '#e5e5e5',
				'menu_color'                => '#000',
				'menu_separator_background' => 'transparent',
				'menu_separator_color'      => '#333',
				'menu_active_background'    => '#888',
				'menu_active_color'         => '#fff',
				'menu_hover_background'     => '#888',
				'menu_hover_color'          => '#fff',
				'submenu_background'        => '#f6f6f6',
				'submenu_color'             => '#666',
				'submenu_hover_background'  => '#fff',
				'submenu_hover_color'       => '#04a4cc',
				'subemnu_active_background' => '#fff',
				'submenu_active_color'      => '#333',
			),
			'blue'      => array(
				'content_background'        => '#fff',
				'header_background'         => '#52accc',
				'header_color'              => '#fff',
				'footer_background'         => '#52accc',
				'footer_color'              => '#fff',
				'menu_background'           => '#52accc',
				'menu_color'                => '#fff',
				'submenu_background'        => '#4796b3',
				'submenu_color'             => '#e2ecf1',
				'menu_active_background'    => '#096484',
				'menu_active_color'         => '#fff',
				'menu_hover_background'     => '#096484',
				'menu_hover_color'          => '#fff',
				'submenu_hover_background'  => 'transparent',
				'submenu_hover_color'       => '#fff',
				'subemnu_active_background' => '#39839e',
				'submenu_active_color'      => '#fff',
				'menu_separator_background' => 'transparent',
				'menu_separator_color'      => '#fff',
			),
			'coffee'    => array(
				'content_background'        => '#fff',
				'header_background'         => '#59524c',
				'header_color'              => '#fff',
				'footer_background'         => '#59524c',
				'footer_color'              => '#fff',
				'menu_background'           => '#59524c',
				'menu_color'                => '#fff',
				'submenu_background'        => '#46403c',
				'submenu_color'             => '#cdcbc9',
				'submenu_hover_background'  => 'transparent',
				'submenu_hover_color'       => '#c7a589',
				'subemnu_active_background' => '#c7a589',
				'submenu_active_color'      => '#fff',
				'menu_active_background'    => '#c7a589',
				'menu_active_color'         => '#fff',
				'menu_hover_background'     => '#c7a589',
				'menu_hover_color'          => '#fff',
				'menu_separator_background' => 'transparent',
				'menu_separator_color'      => '#fff',
			),
			'ectoplasm' => array(
				'content_background'        => '#fff',
				'header_background'         => '#523f6d',
				'header_color'              => '#fff',
				'footer_background'         => '#523f6d',
				'footer_color'              => '#fff',
				'menu_background'           => '#523f6d',
				'menu_color'                => '#fff',
				'submenu_background'        => '#413256',
				'submenu_color'             => '#cbc5d3',
				'submenu_hover_background'  => 'transparent',
				'submenu_hover_color'       => '#a3b745',
				'subemnu_active_background' => 'transparent',
				'submenu_active_color'      => '#fff',
				'menu_active_background'    => '#a3b745',
				'menu_active_color'         => '#fff',
				'menu_hover_background'     => '#a3b745',
				'menu_hover_color'          => '#fff',
				'menu_separator_background' => 'transparent',
				'menu_separator_color'      => '#fff',
			),
			'midnight'  => array(
				'content_background'        => '#fff',
				'header_background'         => '#363b3f',
				'header_color'              => '#fff',
				'footer_background'         => '#363b3f',
				'footer_color'              => '#fff',
				'menu_background'           => '#363b3f',
				'menu_color'                => '#fff',
				'submenu_background'        => '#25282b',
				'submenu_color'             => '#c3c4c5',
				'submenu_hover_background'  => 'transparent',
				'submenu_hover_color'       => '#e14d43',
				'subemnu_active_background' => 'transparent',
				'submenu_active_color'      => '#fff',
				'menu_active_background'    => '#e14d43',
				'menu_active_color'         => '#fff',
				'menu_hover_background'     => '#e14d43',
				'menu_hover_color'          => '#fff',
				'menu_separator_background' => 'transparent',
				'menu_separator_color'      => '#fff',
			),
			'ocean'     => array(
				'content_background'        => '#fff',
				'header_background'         => '#738e96',
				'header_color'              => '#fff',
				'footer_background'         => '#738e96',
				'footer_color'              => '#fff',
				'menu_background'           => '#738e96',
				'menu_color'                => '#fff',
				'submenu_background'        => '#627c83',
				'submenu_color'             => '#d5dde0',
				'submenu_hover_background'  => 'transparent',
				'submenu_hover_color'       => '#9ebaa0',
				'subemnu_active_background' => 'transparent',
				'submenu_active_color'      => '#fff',
				'menu_active_background'    => '#9ebaa0',
				'menu_active_color'         => '#fff',
				'menu_hover_background'     => '#9ebaa0',
				'menu_hover_color'          => '#fff',
				'menu_separator_background' => 'transparent',
				'menu_separator_color'      => '#fff',
			),
			'sunrise'   => array(
				'content_background'        => '#fff',
				'header_background'         => '#cf4944',
				'header_color'              => '#fff',
				'footer_background'         => '#cf4944',
				'footer_color'              => '#fff',
				'menu_background'           => '#cf4944',
				'menu_color'                => '#fff',
				'submenu_background'        => '#b43c38',
				'submenu_color'             => '#f1c8c7',
				'submenu_hover_background'  => 'transparent',
				'submenu_hover_color'       => '#f7e3d3',
				'subemnu_active_background' => 'transparent',
				'submenu_active_color'      => '#fff',
				'menu_active_background'    => '#dd823b',
				'menu_active_color'         => '#fff',
				'menu_hover_background'     => '#dd823b',
				'menu_hover_color'          => '#fff',
				'menu_separator_background' => 'transparent',
				'menu_separator_color'      => '#fff',
			),
		);
	}

	/**
	 * Registers Script With WP.
	 *
	 * @return mixed|void
	 */
	public function register_assets() {
	}

	/**
	 * @param string $menu_slug
	 * @param array  $menus
	 *
	 * @return string
	 */
	public function submenu_html( $menu_slug, $menus ) {
		if ( isset( $menus[ $menu_slug ]['submenu'] ) && ! empty( $menus[ $menu_slug ]['submenu'] ) && wponion_is_array( $menus[ $menu_slug ]['submenu'] ) ) {
			if ( count( $menus[ $menu_slug ]['submenu'] ) <= 1 ) {
				return '';
			}
			$return       = array();
			$is_pdisabled = ( true === $menus[ $menu_slug ]['is_disabled'] ) ? ' disabled ' : '';
			foreach ( $menus[ $menu_slug ]['submenu'] as $slug => $menu ) {
				if ( isset( $menu['is_separator'] ) && true === $menu['is_separator'] ) {
					continue;
				}

				$attr          = isset( $menu['attributes'] ) ? $menu['attributes'] : array();
				$attr['title'] = isset( $attr['title'] ) ? $attr['title'] : $menu['title'];
				$page_title    = $menu['title'];
				$attr['href']  = $menu['href'];
				$attr['class'] = isset( $attr['class'] ) ? $attr['class'] : array();
				$attr['class'] = wponion_html_class( $attr['class'], array(
					wponion_html_class( $menu['class'] ),
					( ! empty( $men['icon'] ) ) ? 'menu-with-icon' : '',
					( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? 'wpo-internal-href' : '',
					( true === $menu['is_active'] ) ? 'active' : '',
					( true === $menu['is_disabled'] || true === $menus[ $menu_slug ]['is_disabled'] ) ? 'disabled ' : '',
				) );

				$attr     = wponion_array_to_html_attributes( $attr );
				$return[] = '<li> <a ' . $attr . '>' . wponion_icon( $menu['icon'] ) . ' ' . $page_title . '</a> ';
			}
			$return = implode( '  </li>', $return );
			$return = '<ul class="submenus ' . $is_pdisabled . '"  id="wponion-tab-' . $menus[ $menu_slug ]['name'] . '" >' . $return . '</ul>';
			return $return;
		} else {
			return '';
		}
	}

	/**
	 * Renders Side Menu.
	 *
	 * @param bool $menus
	 *
	 * @return bool|string
	 */
	public function get_main_menu_html( $menus = false ) {
		if ( false === $menus ) {
			$menus = $this->module_instance()->settings_menus();
		}

		if ( wponion_is_array( $menus ) ) {
			$return = '<ul class="wponion-wp-modern-menu">';

			foreach ( $menus as $slug => $menu ) {
				if ( isset( $menu['separator'] ) && true === $menu['separator'] ) {
					$return .= '<li class="separator"><span>' . wponion_icon( $menu['icon'] ) . ' ' . $menu['title'] . '</span></li>';
				} else {
					$sub_menu      = $this->submenu_html( $slug, $menus );
					$attr          = isset( $menu['attributes'] ) ? $menu['attributes'] : array();
					$attr['title'] = isset( $attr['title'] ) ? $attr['title'] : $menu['title'];
					$page_title    = $menu['title'];
					$attr['href']  = $menu['href'];
					$attr['class'] = isset( $attr['class'] ) ? $attr['class'] : array();
					$attr['class'] = wponion_html_class( $attr['class'], array(
						( empty( $sub_menu ) ) ? '' : 'dropdown',
						wponion_html_class( $menu['class'] ),
						'menu-tab',
						( ! empty( $men['icon'] ) ) ? 'menu-with-icon' : '',
						( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? 'wpo-internal-href' : '',
						( true === $menu['is_active'] ) ? 'active menu-show-child open' : '',
						( true === $menu['is_disabled'] ) ? 'disabled ' : '',
					) );
					$attr          = wponion_array_to_html_attributes( $attr );

					$dropdown = '';
					if ( ! empty( $sub_menu ) ) {
						$dropdown = $this->get_submenu_indicator( ( isset( $menu['is_active'] ) && true === $menu['is_active'] ) );
					}

					$return .= '<li><a ' . $attr . '>' . wponion_icon( $menu['icon'] ) . ' ' . $page_title . ' ' . $dropdown . '</a>' . $sub_menu . '</li>';
				}
			}

			$return .= '</ul>';
		} else {
			$return = false;
		}
		return $return;
	}

	/**
	 * @param $colors
	 *
	 * @return array|mixed
	 */
	public function color_scheme( $colors ) {
		$defaults = array(
			'content_background'        => '#fff',
			// Header Colors.
			'header_background'         => '#26292c',
			'header_color'              => '#fff',
			// Footer Colors.
			'footer_background'         => '#26292c',
			'footer_color'              => '#fff',
			// Menu Colors.
			'menu_background'           => '#26292c',
			'menu_color'                => '#fff',
			// Menu separator
			'menu_separator_background' => '#2e2e2e',
			'menu_separator_color'      => '#cdcdcd',
			// Parent Menu Active.
			'menu_active_background'    => '#0073aa',
			'menu_active_color'         => '#fff',
			// Parent Menu Hover.
			'menu_hover_background'     => '#0073aa',
			'menu_hover_color'          => '#fff',
			// Submenu Colors.
			'submenu_background'        => '#32373c',
			'submenu_color'             => '#fff',
			// Submenu Hover
			'submenu_hover_background'  => '#3d434a',
			'submenu_hover_color'       => '#fff',
			// Submenu Active
			'subemnu_active_background' => '#3d434a',
			'submenu_active_color'      => '#fff',
		);

		if ( is_array( $colors ) ) {
			if ( isset( $colors['theme'] ) ) {
				$defaults = ( isset( self::$themes[ $colors['theme'] ] ) ) ? self::$themes[ $colors['theme'] ] : $defaults;
			}

			return wp_parse_args( $colors, $defaults );
		}

		if ( isset( self::$themes[ $colors ] ) ) {
			return self::$themes[ $colors ];
		}

		$defaults['menu_active_background'] = $colors;
		$defaults['menu_hover_background']  = $colors;
		return $defaults;
	}

	public function render_color_scheme_css( $colors, $prefix = '' ) {
		/**
		 * Content.
		 */
		$content_background = $colors['content_background'];

		/**
		 * Header Colors
		 */
		$header_color      = $colors['header_color'];
		$header_background = $colors['header_background'];

		/**
		 * Footer Colors
		 */
		$footer_background = $colors['footer_background'];
		$footer_color      = $colors['footer_color'];

		/**
		 * Main Menu
		 */
		$menu_background           = $colors['menu_background'];
		$menu_color                = $colors['menu_color'];
		$menu_active_background    = $colors['menu_active_background'];
		$menu_active_color         = $colors['menu_active_color'];
		$menu_hover_color          = $colors['menu_hover_color'];
		$menu_hover_background     = $colors['menu_hover_background'];
		$menu_separator_background = $colors['menu_separator_background'];
		$menu_separator_color      = $colors['menu_separator_color'];

		/**
		 * Submenu
		 */
		$submenu_active_background = $colors['subemnu_active_background'];
		$submenu_active_color      = $colors['submenu_active_color'];
		$submenu_hover_color       = $colors['submenu_hover_color'];
		$submenu_hover_background  = $colors['submenu_hover_background'];
		$submenu_background        = $colors['submenu_background'];
		$submenu_color             = $colors['submenu_color'];

		$return = <<<CSS
/* Header Styles */
$prefix .wponion-framework.wponion-wp_modern-theme header, $prefix .wponion-framework.wponion-wp_modern-theme header.header-sticky-in .inner-container {
	color: $header_color;
	background:$header_background ;
}

$prefix .wponion-framework.wponion-wp_modern-theme header .left h1{
	color:$header_color;
}

/* Content Styles */
$prefix .wponion-framework.wponion-wp_modern-theme .content-outer-wrap{
	background: $content_background;
}

/* Footer Styles */
$prefix .wponion-framework.wponion-wp_modern-theme footer{
	background:$footer_background;
	color:$footer_color;
}

/* Menu Style */
$prefix .wponion-framework.wponion-wp_modern-theme .wponion-menu,
$prefix .wponion-framework.wponion-wp_modern-theme .wponion-menu-bg{
	background:$menu_background;
}

$prefix .wponion-framework.wponion-wp_modern-theme .wponion-menu ul a{
	color:$menu_color;
}

/* separator */
$prefix .wponion-framework.wponion-wp_modern-theme .wponion-menu ul li.separator{
	background:$menu_separator_background;
	color:$menu_separator_color;
}
$prefix .wponion-framework.wponion-wp_modern-theme .wponion-menu ul li.separator span{
	color:$menu_separator_color;
}

/* Main Menu Active */
$prefix .wponion-framework.wponion-wp_modern-theme .wponion-menu ul a.active{
	background:$menu_active_background;
	color:$menu_active_color;
}

/* Main Menu Hover */
$prefix .wponion-framework.wponion-wp_modern-theme .wponion-menu ul a:hover,
$prefix .wponion-framework.wponion-wp_modern-theme .wponion-menu ul li:hover > a{
	background:$menu_hover_background;
	color:$menu_hover_color;
}

/* Subemenu Style */
$prefix .wponion-framework.wponion-wp_modern-theme .wponion-menu ul ul.submenus{
	background: $submenu_background;
	color: $submenu_color;
}
$prefix .wponion-framework.wponion-wp_modern-theme .wponion-menu ul ul.submenus a {
	color: $submenu_color;
}

/* Submenu Menu Active */
$prefix .wponion-framework.wponion-wp_modern-theme .wponion-menu ul ul.submenus a.active{
	background:$submenu_active_background;
	color:$submenu_active_color;
}

/* Submenu Menu Hover */
$prefix .wponion-framework.wponion-wp_modern-theme .wponion-menu ul ul.submenus  a:hover{
	background:$submenu_hover_background;
	color:$submenu_hover_color;
}
CSS;

		return $return;
	}
}
