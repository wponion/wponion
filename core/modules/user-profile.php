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
	class User_Profile extends \WPOnion\Bridge\Module {
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
		 * User_Profile constructor.
		 *
		 * @param array $fields
		 * @param array $settings
		 */
		public function __construct( $settings = array(), $fields = array() ) {
			parent::__construct( $fields, $settings );
			$this->init();
		}

		/**
		 * @param string $extra_class
		 * @param bool   $bootstrap
		 *
		 * @return array|string
		 */
		public function wrap_class( $extra_class = '', $bootstrap = true ) {
			return wponion_html_class( $extra_class, $this->default_wrap_class( $bootstrap ) );
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
		}

		/**
		 * Module Defaults.
		 *
		 * @return array
		 */
		protected function defaults() {
			return $this->parse_args( parent::defaults(), array(
				'theme'         => 'wp',
				'template_path' => false,
			) );
		}

		/**
		 * Triggers On User Profile Page Load.
		 */
		public function on_user_profile_load() {
			$this->init_theme();
			$this->add_action( 'admin_enqueue_scripts', 'load_style_script' );
		}

		/**
		 * Loads Required Style & Scripts.
		 */
		public function load_style_script() {
			wponion_load_core_assets( 'wponion-userprofile' );
		}

		/**
		 * Renders Page Output.
		 *
		 * @param $user
		 */
		public function render( $user ) {
			$this->user_id = ( is_object( $user ) ) ? $user->ID : $user;
			$instance      = $this->init_theme();
			$instance->render_user_profile_html();
		}

		/**
		 * Returns DB Values.
		 *
		 * @return array|mixed
		 */
		protected function get_db_values() {
			if ( empty( $this->db_values ) ) {
				$this->db_values = get_user_meta( $this->user_id, $this->unique(), true );
				if ( ! is_array( $this->db_values ) ) {
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
		protected function get_db_cache() {
			return get_user_meta( $this->user_id, $this->get_cache_id() );
		}

		/**
		 * Updates User Cache.
		 *
		 * @param array $data
		 */
		protected function set_cache( $data = array() ) {
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
			if ( isset( $_POST[ $this->unique ] ) ) {
				$this->user_id = $user_id;
				$this->get_db_values();
				$this->get_cache();
				$instance = new \WPOnion\DB\User_Profile_Save_Handler();
				$instance->init_class( array(
					'module'      => 'user_profile',
					'plugin_id'   => $this->plugin_id(),
					'unique'      => $this->unique,
					'fields'      => $this->fields,
					'db_values'   => $this->get_db_values(),
					'args'        => array( 'settings' => &$this ),
				) )
					->run();

				$this->options_cache['field_errors'] = $instance->get_errors();
				$this->set_cache( $this->options_cache );
				$this->set_db_values( $instance->get_values() );
			}
		}
	}
}
