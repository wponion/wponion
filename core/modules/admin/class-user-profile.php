<?php

namespace WPOnion\Modules\Admin;

use WPOnion\Bridge\Module;
use WPOnion\DB\Save_Handler\Base as Save_Handler;
use WPOnion\Modules\Metabox\Core;

defined( 'ABSPATH' ) || exit;

/**
 * Class User_Profile
 *
 * @package WPOnion\Modules
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class User_Profile extends Module {
	/**
	 * module
	 *
	 * @var string
	 */
	protected $module = 'user_profile';

	/**
	 * metabox_instance
	 *
	 * @var \WPOnion\Modules\Metabox\Core
	 */
	protected $metabox_instance = false;

	/**
	 * Creates Metabox Instance.
	 */
	public function init_metabox() {
		if ( false !== $this->option( 'metabox' ) ) {
			$heading = ( true === $this->option( 'metabox' ) && ! empty( $this->option( 'heading' ) ) ) ? $this->option( 'heading' ) : $this->option( 'metabox' );
			if ( wponion_is_array( $this->option( 'metabox' ) ) ) {
				$metabox = $this->parse_args( $this->option( 'metabox' ), array() );
			} else {
				$metabox = array(
					'metabox_title' => $heading,
					'metabox_id'    => sanitize_title( $heading ),
				);
			}

			$metabox['context']       = 'normal';
			$metabox['option_name']   = $this->unique();
			$metabox['theme']         = $this->option( 'theme' );
			$metabox['screens']       = array(
				'profile_' . $this->unique(),
				'user-edit_' . $this->unique(),
				'user-edit-network_' . $this->unique(),
			);
			$metabox['set_cache']     = array( $this, 'set_cache' );
			$metabox['get_cache']     = array( $this, 'get_db_cache' );
			$metabox['get_db_values'] = array( $this, 'get_db_values' );
			$metabox['set_db_values'] = array( $this, 'set_db_values' );
			$metabox['module']        = $this->module();
			$this->metabox_instance   = new Core( $metabox, $this->fields );
		}
	}

	/**
	 * @return mixed|void
	 */
	public function on_init() {
		add_action( 'load-profile.php', array( &$this, 'on_user_profile_load' ) );
		add_action( 'load-user-edit.php', array( &$this, 'on_user_profile_load' ) );
		add_action( 'show_user_profile', array( &$this, 'render' ), $this->option( 'position' ), 1 );
		add_action( 'edit_user_profile', array( &$this, 'render' ), $this->option( 'position' ), 1 );
		add_action( 'personal_options_update', array( $this, 'save' ), 10, 2 );
		add_action( 'edit_user_profile_update', array( $this, 'save' ), 10, 2 );
		$this->init_metabox();
	}

	/**
	 * Module Defaults.
	 *
	 * @return array
	 */
	protected function defaults() {
		return $this->parse_args( array(
			'theme'    => 'wp',
			'heading'  => false,
			'metabox'  => false,
			'position' => 10,
		), parent::defaults() );
	}

	/**
	 * Triggers On User Profile Page Load.
	 */
	public function on_user_profile_load() {
		if ( false === $this->option( 'metabox' ) ) {
			$this->init_theme();
		} else {
			$this->metabox_instance->register_metabox();
		}
		$this->init_theme();
		$this->add_action( 'admin_enqueue_scripts', 'load_style_script' );
	}

	/**
	 * Loads Required Style & Scripts.
	 */
	public function load_style_script() {
		if ( false !== $this->option( 'metabox' ) ) {
			wp_enqueue_script( 'post' );
			wp_enqueue_style( 'post' );
		}
		wponion_load_core_assets( $this->option( 'assets' ) );
	}

	/**
	 * Renders Page Output.
	 *
	 * @param $user
	 */
	public function render( $user ) {
		$id = ( is_object( $user ) ) ? $user->ID : $user;
		$this->set_id( $id );
		$this->get_cache();
		$this->get_db_values();

		if ( false !== $this->option( 'metabox' ) ) {
			$screen = get_current_screen();
			if ( ! empty( $this->option( 'heading' ) ) ) {
				echo '<h2>' . $this->option( 'heading' ) . '</h2>';
			}
			do_meta_boxes( $screen->id . '_' . $this->unique(), 'normal', $this->get_id() );
		} else {
			$this->init_theme()->render();
		}
	}

	/**
	 * Returns Unique Cache ID For each instance but only once.
	 *
	 * @return string
	 */
	protected function get_cache_id() {
		return wponion_hash_string( $this->get_id() . '_' . $this->module() . '_' . $this->unique() );
	}

	/**
	 * @param $user_id
	 */
	public function save( $user_id ) {
		$this->set_id( $user_id );
		if ( isset( $_POST[ $this->unique ] ) ) {
			$this->get_db_values();
			$this->get_cache();
			$instance = new Save_Handler( array(
				'module'    => &$this,
				'unique'    => $this->unique,
				'fields'    => $this->fields(),
				'db_values' => $this->get_db_values(),
			) );
			$instance->run();
			$this->options_cache['field_errors'] = $instance->get_errors();
			$this->set_db_cache( $this->options_cache );
			$this->set_db_values( $instance->get_values() );
		}
	}
}
