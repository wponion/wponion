<?php

namespace WPOnion\Modules\Widgets;

use WPO\Builder;
use WPOnion\Bridge\Module;
use WPOnion\DB\Save_Handler\Base as Save_Handler;

defined( 'ABSPATH' ) || exit;

/**
 * Class Dashboard
 *
 * @package WPOnion\Modules\Widgets
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Dashboard extends Module {
	/**
	 * module
	 *
	 * @var string
	 */
	protected $module = 'dashboard_widgets';

	/**
	 * Inits Class Instance.
	 */
	public function on_init() {
		if ( 'only' === $this->option( 'network' ) || true === $this->option( 'network' ) ) {
			$this->add_action( 'wp_network_dashboard_setup', 'register_dashboard_widgets' );
		}

		if ( false === $this->option( 'network' ) || true === $this->option( 'network' ) ) {
			$this->add_action( 'wp_dashboard_setup', 'register_dashboard_widgets' );
		}

		$this->add_action( 'load-index.php', 'on_page_load' );
		$this->add_action( 'admin_print_scripts-index.php', 'load_assets' );
	}

	/**
	 * Load The Required Assets.
	 */
	public function load_assets() {
		wponion_load_core_assets( $this->option( 'assets' ) );
	}

	/**
	 * Loads Required Assets.
	 */
	public function on_page_load() {
		$this->init_theme();
		$this->get_cache();
		$this->get_db_values();
	}


	/**
	 * Registers Widgets With WP.
	 */
	public function register_dashboard_widgets() {
		$widget_render = array( &$this, 'render_widget' );

		if ( false !== $this->option( 'widget_id' ) && false !== $this->option( 'widget_name' ) ) {
			$wid         = $this->option( 'widget_id' );
			$wname       = $this->option( 'widget_name' );
			$save_widget = ( ! empty( $this->fields() ) ) ? array( &$this, 'save_widget' ) : false;
			wp_add_dashboard_widget( $wid, $wname, $widget_render, $save_widget );
		}
	}

	/**
	 * Loads The Selected Theme.
	 */
	public function render_widget() {
		$this->get_db_values();
		if ( wponion_is_callable( $this->option( 'callback' ) ) ) {
			echo wponion_callback( $this->option( 'callback' ), array( $this->get_db_values(), $this ) );
		}
	}

	/**
	 * Renders Dashboard Edit View.
	 */
	public function save_widget() {
		$this->get_cache();
		$this->get_db_values();
		if ( 'POST' === $_SERVER['REQUEST_METHOD'] && isset( $_POST[ $this->unique() ] ) ) {
			$this->get_db_values();
			$this->get_cache();
			$instance = new Save_Handler( array(
				'module'    => &$this,
				'unique'    => $this->unique(),
				'fields'    => $this->fields(),
				'db_values' => $this->get_db_values(),
			) );
			$instance->run();

			$this->options_cache['field_errors'] = $instance->get_errors();
			$this->set_db_cache( $this->options_cache );
			$this->set_db_values( $instance->get_values() );
			if ( ! empty( $instance->get_errors() ) ) {
				wp_redirect( add_query_arg( 'wponion-save', 'error' ) );
				exit;
			}
		} else {
			$this->init_theme()->render();
		}
	}

	/**
	 * @return array
	 */
	protected function defaults() {
		return $this->parse_args( parent::defaults(), array(
			'widget_id'   => false,
			'widget_name' => false,
			'callback'    => false,
			'network'     => false,
			'assets'      => false,
		) );
	}
}
