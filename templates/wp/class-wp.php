<?php

namespace WPOnion\Theme;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Theme\WP' ) ) {
	/**
	 * Class WP
	 *
	 * @package WPOnion\Theme
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP extends \WPOnion\Theme_API {
		/**
		 * WP constructor.
		 *
		 * @param $data
		 */
		public function __construct( $data ) {
			parent::__construct( $data, __FILE__, 'wp' );
		}

		/**
		 * Registers Assets With WP.
		 */
		public function register_assets() {
			wp_enqueue_style( 'wponion-wp', $this->url( 'assets/style.css' ), array( 'wponion-core' ) );
			wp_enqueue_script( 'wponion-wp', $this->url( 'assets/script.js' ), array( 'wponion-core' ) );
		}

		/**
		 * Returns Settings Main Menu HTML.
		 *
		 * @return string
		 */
		public function settings_main_menu() {
			$menus  = $this->settings()
				->settings_menus();
			$return = '<nav class="nav-tab-wrapper">';
			foreach ( $menus as $slug => $menu ) {
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
					'nav-tab',
					( ! empty( $men['icon'] ) ) ? 'nav-with-icon' : '',
					( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? 'nav-internal-href' : '',
					( true === $menu['is_active'] ) ? 'nav-tab-active' : '',
				) );
				$attr          = wponion_array_to_html_attributes( $attr );

				$return .= '<a ' . $attr . '>' . wponion_icon( $menu['icon'] ) . $page_title . '</a>';
			}
			return $return . '</nav>';
		}

		/**
		 * Returns Settings Main Menu HTML.
		 *
		 * @return string
		 */
		public function settings_submenu( $parent_slug ) {
			$menus  = $this->settings()
				->settings_menus();
			$return = '';
			if ( isset( $menus[ $parent_slug ]['submenu'] ) && is_array( $menus[ $parent_slug ]['submenu'] ) && ! empty( $menus[ $parent_slug ]['submenu'] ) ) {
				$return = '<h2 class="wponion-subnav-container hndle"> <ul class="wponion-submenus subsubsub"  id="wponion-tab-' . $parent_slug . '" >';
				foreach ( $menus[ $parent_slug ]['submenu'] as $slug => $menu ) {
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
						( ! empty( $men['icon'] ) ) ? 'nav-with-icon' : '',
						( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? 'nav-internal-href' : '',
						( true === $menu['is_active'] ) ? 'current' : '',
					) );
					$attr          = wponion_array_to_html_attributes( $attr );

					$return .= '<li><a ' . $attr . '>' . wponion_icon( $menu['icon'] ) . $page_title . '</a> | </li>';
				}
				return $return . '</ul></h2>';
			}
		}
	}
}
