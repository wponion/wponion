<?php
/**
 *
 * Project : wponion
 * Date : 07-11-2018
 * Time : 06:56 AM
 * File : help-tabs.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules\Util;

use WPOnion\Bridge\Module;
use WPOnion\Modules\Admin_Page;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Util\Help_Tabs' ) ) {
	/**
	 * Class Help_Tabs
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Help_Tabs extends Module {

		/**
		 * module
		 *
		 * @var string
		 */
		protected $module = 'help_tabs';

		/**
		 * current_tabs
		 *
		 * @var null
		 */
		public $current_tabs = null;

		/**
		 * Help_Tabs constructor.
		 *
		 * @param string|array $page
		 * @param array        $help_tabs
		 * @param string       $help_sidebar
		 */
		public function __construct( $page = '', $help_tabs = array(), $help_sidebar = '' ) {
			if ( wponion_is_array( $page ) ) {
				$settings = $this->get_settings( $page );
				unset( $page['option_name'] );
				parent::__construct( null, $settings );
				$this->fields = $page;
			} elseif ( wponion_is_array( $help_tabs ) && false !== $page ) {
				if ( is_string( $page ) ) {
					$help_tabs = array(
						$page => array(
							'tabs'    => $help_tabs,
							'sidebar' => $help_sidebar,
						),
					);
				} elseif ( is_object( $page ) ) {
					$help_tabs = array(
						array(
							'page'    => $page,
							'tabs'    => $help_tabs,
							'sidebar' => $help_sidebar,
						),
					);
				}

				parent::__construct( null, $this->get_settings( $page ) );
				$this->fields = $help_tabs;
			}

			if ( isset( $this->fields['page'] ) ) {
				$this->fields = array( $this->fields );
			}

			$this->add_action( 'current_screen', 'render_help_tabs' );
			//	parent::__construct( $fields, $settings );
		}

		/**
		 * @param $help_tabs
		 *
		 * @return array
		 */
		public function get_settings( $help_tabs ) {
			$settings = array( 'option_name' => false );
			if ( wponion_is_array( $help_tabs ) ) {
				if ( isset( $help_tabs['option_name'] ) ) {
					$settings['option_name'] = $help_tabs['option_name'];
				}
			}
			return $settings;
		}

		/**
		 * Module Defaults.
		 *
		 * @return array
		 */
		protected function defaults() {
			return $this->parse_args( parent::defaults(), array( 'theme' => 'wp' ) );
		}

		/**
		 * Validates & Returns a proper page ID.
		 *
		 * @param $id
		 * @param $page
		 *
		 * @return bool|null|string
		 */
		public function get_page_id( $id, $page ) {
			if ( isset( $page['page'] ) ) {
				if ( $page['page'] instanceof Admin_Page ) {
					return $page['page']->get_page_slug();
				}
				return is_string( $page['page'] ) ? $page['page'] : false;
			}
			return ( false === is_numeric( $id ) ) ? $id : false;
		}

		/**
		 * Registers a Hook with WordPress To Render Help Tabs.
		 */
		public function hook_pages() {
			foreach ( $this->fields as $id => $field ) {
				$hook_id = $this->get_page_id( $id, $field );
				if ( ! is_numeric( $hook_id ) ) {
					$this->add_action( 'load-' . $hook_id, 'render_help_tabs' );
				}
			}
		}

		/**
		 * Renders HTML Output.
		 */
		public function render_help_tabs() {
			$screen = get_current_screen();
			foreach ( $this->fields as $id => $field ) {
				$page_id = $this->get_page_id( $id, $field );
				if ( $page_id === $screen->id ) {
					$this->init_theme();
					$this->add_action( 'admin_enqueue_scripts', 'load_style_script' );

					$help_tabs    = array();
					$help_sidebar = '';

					if ( isset( $field['tabs'] ) && isset( $field['sidebar'] ) ) {
						$help_tabs    = ( wponion_is_array( $field['tabs'] ) ) ? $field['tabs'] : array();
						$help_sidebar = ( ! empty( $field['sidebar'] ) ) ? $field['sidebar'] : '';
					} elseif ( isset( $field['tabs'] ) && ! isset( $field['sidebar'] ) ) {
						$help_tabs = ( wponion_is_array( $field['tabs'] ) ) ? $field['tabs'] : array();
					} elseif ( isset( $field ) && ! isset( $field['sidebar'] ) ) {
						$help_tabs = ( wponion_is_array( $field ) ) ? $field : array();
					}

					if ( wponion_is_callable( $help_sidebar ) ) {
						$help_sidebar = wponion_callback( $help_sidebar );
					}

					if ( wponion_is_callable( $help_tabs ) ) {
						$help_tabs = wponion_callback( $help_tabs );
					}

					foreach ( $help_tabs as $_tab_id => $tab ) {
						$screen->add_help_tab( $this->render_help_tab_contents( $_tab_id, $tab ) );
					}
					if ( ! empty( $help_sidebar ) ) {
						$screen->set_help_sidebar( $help_sidebar );
					}
				}
			}
		}

		/**
		 * Trigged When admin_enqueue_scripts hook is triggered so it can load the required assets.
		 */
		public function load_style_script() {
			wponion_load_core_assets( 'wponion-help-tabs' );
		}

		/**
		 * Renders HTML and returns it.
		 *
		 * @param $id
		 * @param $tab
		 *
		 * @return array
		 */
		public function render_help_tab_contents( $id, $tab ) {
			if ( ! isset( $tab['id'] ) && ! isset( $tab['title'] ) && ! is_numeric( $id ) && isset( $tab['content'] ) || isset( $tab['callback'] ) ) {
				$tab['id']    = sanitize_title( $id );
				$tab['title'] = $id;
				return $tab;
			} elseif ( ! isset( $tab['id'] ) && ! isset( $tab['title'] ) && ! is_numeric( $id ) ) {
				$tab = array(
					'id'     => sanitize_title( $id ),
					'title'  => $id,
					'fields' => $tab,
				);
			}

			if ( isset( $tab['fields'] ) ) {
				$this->current_tabs = $tab;
				$theme_instance     = $this->init_theme();
				$this->catch_output( 'start' );
				$theme_instance->render_help_tabs();
				$this->current_tabs['content'] = $this->catch_output( 'stop' );
				unset( $this->current_tabs['fields'] );
				unset( $this->current_tabs['callback'] );
				return $this->current_tabs;
			}
			return $this->current_tabs;
		}

		/**
		 * Returns a wrap class.
		 *
		 * @param string $extra_class
		 *
		 * @return array|string
		 */
		public function wrap_class( $extra_class = '' ) {
			$screen = get_current_screen();
			return wponion_html_class( array( 'wponion-help-tabs-' . $screen->id ), $this->default_wrap_class() );
		}

		/**
		 * Triggers On Init.
		 *
		 * @return mixed|void
		 */
		public function on_init() {
		}

		/**
		 * Returns A Unique Name.
		 *
		 * @return string
		 */
		public function unique() {
			if ( empty( $this->unique ) ) {
				$this->unique = md5( wp_json_encode( $this->settings ) );
			}
			return $this->unique;
		}
	}
}
