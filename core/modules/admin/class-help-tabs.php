<?php

namespace WPOnion\Modules\Admin;

use WPOnion\Bridge\Module_Utility;
use WPOnion\Traits\Internal\Theme_Handler;

defined( 'ABSPATH' ) || exit;

/**
 * Class Help_Tabs
 *
 * @package WPOnion\Modules\Admin
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Help_Tabs extends Module_Utility {
	use Theme_Handler;

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
			parent::__construct( $settings, $page );
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
			parent::__construct( $this->get_settings( $page ), $help_tabs );
		}

		if ( isset( $this->fields['page'] ) ) {
			$this->fields = array( $this->fields );
		}
		$this->add_action( 'current_screen', 'render_help_tabs' );
	}

	/**
	 * @param $help_tabs
	 *
	 * @return array
	 */
	protected function get_settings( $help_tabs ) {
		$settings = array( 'option_name' => false );
		if ( wponion_is_array( $help_tabs ) && isset( $help_tabs['option_name'] ) ) {
			$settings['option_name'] = $help_tabs['option_name'];
		} else {
			$settings['option_name'] = md5( wp_json_encode( $this->settings ) );
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
	 * @return bool|string
	 */
	protected function get_page_id( $id, $page ) {
		if ( isset( $page['page'] ) ) {
			if ( $page['page'] instanceof Page ) {
				return $page['page']->get_page_slug();
			}
			return is_string( $page['page'] ) ? $page['page'] : false;
		}
		return ( false === is_numeric( $id ) ) ? $id : false;
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
	 * Trigged When admin_enqueue_scripts hook
	 * is triggered so it can load the required assets.
	 */
	public function load_style_script() {
		wponion_load_core_assets( $this->option( 'assets' ) );
	}

	/**
	 * Renders HTML and returns it.
	 *
	 * @param string $id
	 * @param array  $tab
	 *
	 * @return array
	 */
	protected function render_help_tab_contents( $id, $tab ) {
		if ( ! isset( $tab['id'] ) && ! isset( $tab['title'] ) && ! is_numeric( $id ) && isset( $tab['content'] ) || isset( $tab['callback'] ) ) {
			$tab['id']    = sanitize_title( $id );
			$tab['title'] = $id;
			return $tab;
		} elseif ( ! isset( $tab['id'] ) && ! isset( $tab['title'] ) && ! is_numeric( $id ) ) {
			$tab = array(
				'id'     => sanitize_title( $id ),
				'title'  => $id,
				'fields' => ( isset( $tab['fields'] ) ) ? $tab['fields'] : $tab,
			);
		}

		if ( isset( $tab['fields'] ) ) {
			$this->current_tabs = $tab;
			wponion_catch_output();
			$this->init_theme()->render();
			$this->current_tabs['content'] = wponion_catch_output( false );
			unset( $this->current_tabs['fields'] );
			unset( $this->current_tabs['callback'] );
			return $this->current_tabs;
		}
		return $this->current_tabs;
	}

	/**
	 * Returns a wrap class.
	 *
	 * @return array|string
	 */
	protected function wrap_class() {
		$screen = get_current_screen();
		return wponion_html_class( array( 'wponion-help-tabs-' . $screen->id ), $this->default_wrap_class() );
	}

	/**
	 * Renders Field.
	 *
	 * @param array $field
	 * @param bool  $hash
	 * @param bool  $is_init_field
	 *
	 * @return mixed|string
	 * @since 1.5
	 */
	public function render_field( $field = array(), $hash = false, $is_init_field = false ) {
		$html = '';
		if ( ! wpo_is_field( $field ) && isset( $field[0] ) ) {
			foreach ( $field as $single ) {
				$html .= parent::render_field( $single, $hash, $is_init_field );
			}
		}
		return ( isset( $field[0] ) ) ? $html : parent::render_field( $field, $hash, $is_init_field );
	}
}
