<?php
/**
 *
 * Initial version created 13-07-2018 / 11:15 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules;

use WPO\Builder;
use WPOnion\Bridge\Module;
use WPOnion\DB\User_Profile_Save_Handler;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\User_Profile' ) ) {
	/**
	 * Class User_Profile
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class User_Profile extends Module {
		/**
		 * module
		 *
		 * @var string
		 */
		protected $module = 'user_profile';

		/**
		 * Stores Current User ID.
		 *
		 * @var bool
		 */
		protected $user_id = false;

		/**
		 * metabox_instance
		 *
		 * @var \WPOnion\Modules\Metabox\Core
		 */
		protected $metabox_instance = false;

		/**
		 * User_Profile constructor.
		 *
		 * @param array             $settings
		 * @param \WPO\Builder|null $fields
		 */
		public function __construct( $settings = array(), Builder $fields = null ) {
			parent::__construct( $fields, $settings );
			$this->init();
		}

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
				$metabox['screens']       = array( 'profile', 'user-edit', 'user-edit-network' );
				$metabox['set_cache']     = array( $this, 'set_cache' );
				$metabox['get_cache']     = array( $this, 'get_db_cache' );
				$metabox['get_db_values'] = array( $this, 'get_db_values' );
				$metabox['set_db_values'] = array( $this, 'set_db_values' );
				$this->metabox_instance   = new Metabox\Core( $metabox, $this->raw_fields );
			}
		}

		/**
		 * @return mixed|void
		 */
		public function on_init() {
			add_action( 'load-profile.php', array( &$this, 'on_user_profile_load' ) );
			add_action( 'load-user-edit.php', array( &$this, 'on_user_profile_load' ) );
			add_action( 'show_user_profile', array( &$this, 'render' ), 10, 1 );
			add_action( 'edit_user_profile', array( &$this, 'render' ), 10, 1 );
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
			return $this->parse_args( parent::defaults(), array(
				'theme'   => 'wp',
				'heading' => false,
				'metabox' => false,
			) );
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
		 * Sets Default Values.
		 */
		public function set_defaults() {
			$this->get_db_values();
			$this->options_cache['fuid']            = $this->fields_md5();
			$this->options_cache['wponion_version'] = WPONION_DB_VERSION;
			$default                                = array();
			$this->get_defaults();
			if ( ! empty( $default ) ) {
				$this->set_db_values( $this->db_values );
			}
			$this->set_cache( $this->options_cache );
		}

		/**
		 * Loads Required Style & Scripts.
		 */
		public function load_style_script() {
			if ( false !== $this->option( 'metabox' ) ) {
				wp_enqueue_script( 'post' );
				wp_enqueue_style( 'post' );
			}
			wponion_load_core_assets( 'wponion-userprofile' );
		}

		/**
		 * Renders Page Output.
		 *
		 * @param $user
		 */
		public function render( $user ) {
			$this->user_id = ( is_object( $user ) ) ? $user->ID : $user;
			$cache         = $this->get_cache();
			if ( ! isset( $cache['fuid'] ) || ( isset( $cache['fuid'] ) && $cache['fuid'] !== $this->fields_md5() ) ) {
				$this->set_defaults();
			}

			if ( false !== $this->option( 'metabox' ) ) {
				$screen = get_current_screen();
				if ( ! empty( $this->option( 'heading' ) ) ) {
					echo '<h2>' . $this->option( 'heading' ) . '</h2>';
				}
				do_meta_boxes( $screen->id, 'normal', $this->user_id );
			} else {
				$instance = $this->init_theme();
				$instance->render_user_profile();
			}
		}

		/**
		 * Returns DB Values.
		 *
		 * @return array|mixed
		 */
		public function get_db_values() {
			if ( empty( $this->db_values ) ) {
				$this->db_values = get_user_meta( $this->user_id, $this->unique(), true );
				if ( ! wponion_is_array( $this->db_values ) ) {
					$this->db_values = array();
				}
			}
			return $this->db_values;
		}

		/**
		 * Returns DB Cache
		 *
		 * @return mixed
		 */
		public function get_db_cache() {
			return get_user_meta( $this->user_id, $this->get_cache_id(), true );
		}

		/**
		 * Updates User Cache.
		 *
		 * @param array $data
		 */
		public function set_cache( $data = array() ) {
			update_user_meta( $this->user_id, $this->get_cache_id(), $data );
			$this->options_cache = $data;
		}

		/**
		 * Updates User Meta.
		 *
		 * @param $values
		 *
		 * @return $this
		 */
		public function set_db_values( $values ) {
			$this->db_values = $values;
			update_user_meta( $this->user_id, $this->unique, $values );
			return $this;
		}

		/**
		 * @param $user_id
		 */
		public function save( $user_id ) {
			$this->user_id = $user_id;
			if ( false !== $this->option( 'metabox' ) ) {
				$this->metabox_instance->save_metabox( $user_id );
			} else {
				if ( isset( $_POST[ $this->unique ] ) ) {
					$this->get_db_values();
					$this->get_cache();
					$instance = new User_Profile_Save_Handler();
					$instance->init_class( array(
						'module'    => 'user_profile',
						'unique'    => $this->unique,
						'fields'    => $this->fields,
						'db_values' => $this->get_db_values(),
						'args'      => array( 'settings' => &$this ),
					) )
						->run();

					$this->options_cache['field_errors'] = $instance->get_errors();
					$this->set_cache( $this->options_cache );
					$this->set_db_values( $instance->get_values() );
				}
			}
		}
	}
}
