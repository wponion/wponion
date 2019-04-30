<?php
/**
 *
 * Initial version created 18-06-2018 / 10:54 AM
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

if ( ! class_exists( '\WPOnion\Modules\Metabox' ) ) {
	/**
	 * Class metabox
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Metabox extends \WPOnion\Bridge\Module {
		/**
		 * Type - Value can be anything like (settings,text_field)
		 *
		 * @var string
		 */
		protected $module = 'metabox';

		/**
		 * Stores List Of Menus.
		 *
		 * @var array
		 */
		protected $menus = array();

		/**
		 * Retrives Post ID.
		 * post_id
		 *
		 * @var null
		 */
		protected $post_id = null;

		/**
		 * Stores Active Section and page names.
		 * active_data
		 *
		 * @var null
		 */
		protected $active_data = null;

		/**
		 * Metabox constructor.
		 *
		 * @param array             $settings
		 * @param \WPO\Builder|null $fields
		 */
		public function __construct( $settings = array(), \WPO\Builder $fields = null ) {
			parent::__construct( $fields, $settings );
			$this->init();
		}

		/**
		 * Inits The Class.
		 */
		public function on_init() {
			$this->add_action( 'load-post.php', 'on_page_load' );
			$this->add_action( 'load-post-new.php', 'on_page_load' );
		}

		/**
		 * Generates Custom Wrap Class.
		 *
		 * @param string $extra_class
		 *
		 * @return string
		 */
		public function wrap_class( $extra_class = '' ) {
			return parent::wrap_class( wponion_html_class( $extra_class, array(
				'wponion-module-metabox-' . $this->option( 'context' ),
				'wponion-module-metabox-' . $this->option( 'context' ) . '-framework',
			) ) );
		}

		/**
		 * Triggers Few Functions On Page Load.
		 */
		public function on_page_load() {
			$this->add_action( 'add_meta_boxes', 'register_metabox', 10, 2 );
			$this->add_action( 'admin_enqueue_scripts', 'load_style_script' );
			$this->add_action( 'save_post', 'save_metabox' );
			$this->init_theme();

			if ( wponion_is_array( $this->option( 'screens' ) ) ) {
				foreach ( $this->option( 'screens' ) as $ptype ) {
					$this->add_action( 'postbox_classes_' . $ptype . '_' . $this->metabox_id(), 'custom_metabox_class' );
				}
			} else {
				$this->add_action( 'postbox_classes_' . $this->option( 'screens' ) . '_' . $this->metabox_id(), 'custom_metabox_class' );
			}
		}

		/**
		 * Adds Custom Metabox Class.
		 *
		 * @param $class
		 *
		 * @return array
		 */
		public function custom_metabox_class( $class ) {
			$class[] = 'wponion-metabox';
			$class[] = 'wponion-metabox-' . $this->option( 'context' );
			$class[] = 'wponion-metabox-' . $this->module();
			$class[] = 'wponion-metabox-' . $this->option( 'context' ) . '-' . $this->module();
			return $class;
		}

		/**
		 * Loads Core Styles and Scripts.
		 */
		public function load_style_script() {
			wponion_load_core_assets( 'wponion-metabox' );
		}

		/**
		 * Registers Metabox With WordPress.
		 */
		public function register_metabox() {
			add_meta_box( $this->metabox_id(), $this->option( 'metabox_title' ), array(
				&$this,
				'render',
			), $this->option( 'screens' ), $this->option( 'context' ), $this->option( 'priority' ) );
		}

		/**
		 * Returns Unique Metabox ID.
		 *
		 * @return bool|mixed
		 */
		public function metabox_id() {
			return ( false === $this->option( 'metabox_id' ) ) ? $this->option( 'option_name' ) : $this->option( 'metabox_id' );
		}

		/**
		 * Module Defaults.
		 *
		 * @return array
		 */
		protected function defaults() {
			return $this->parse_args( parent::defaults(), array(
				'metabox_title' => false,
				'metabox_id'    => false,
				'screens'       => false,
				'context'       => 'normal',
				'priority'      => null,
				'theme'         => 'wp_modern',
				'template_path' => false,
				'theme_color'   => 'false',
				'ajax'          => true,
			) );
		}

		/**
		 * Extracts and returns metabox menus.
		 *
		 * @return array
		 */
		public function metabox_menus() {
			if ( empty( $this->menus ) && false === $this->fields->has_fields() ) {
				$this->menus = $this->extract_fields_menus( $this->fields->get() );
			}
			return $this->menus;
		}

		/**
		 * Returns Null For Current Page URL.
		 *
		 * @param bool $part_url
		 *
		 * @return null
		 */
		public function page_url( $part_url = false ) {
			return null;
		}

		/**
		 * Checks if its active.
		 *
		 * @param $is_parent
		 *
		 * @return bool|string
		 */
		public function active( $is_parent ) {
			$this->active_page();
			return ( true === $is_parent ) ? $this->active_data['container_id'] : $this->active_data['sub_container_id'];
		}

		/**
		 * Returns A Array of callback args for the theme.
		 *
		 * @return array
		 */
		protected function theme_callback_args() {
			return parent::theme_callback_args();
		}

		/**
		 * Renders Post Metabox.
		 *
		 * @param $post
		 */
		public function render( $post ) {
			$this->post_id = ( is_object( $post ) ) ? $post->ID : $post;
			$instance      = $this->init_theme();
			$this->get_db_values();
			$instance->render_metabox();
		}

		/**
		 * Renders / Creates An First Instance based on the $is_init_field variable value.
		 *
		 * @param array $field
		 * @param bool  $container
		 * @param bool  $sub_container
		 * @param bool  $is_init_field
		 *
		 * @return mixed
		 */
		public function render_field( $field = array(), $container = false, $sub_container = false, $is_init_field = false ) {
			return parent::render_field( $field, sanitize_title( $container . '-' . $sub_container ), $is_init_field );
		}

		/**
		 * Returns Unique Cache ID For each instance but only once.
		 *
		 * @return string
		 */
		protected function get_cache_id() {
			return 'wponion_' . wponion_hash_string( $this->metabox_id() . '_' . $this->unique() . '_' . $this->module() ) . '_cache';
		}

		/**
		 * Stores Cache Data.
		 *
		 * @param array $data
		 */
		public function set_cache( $data = array() ) {
			$data['wponion_version'] = WPONION_DB_VERSION;
			update_post_meta( $this->post_id, $this->get_cache_id(), $data );
			$this->options_cache = $data;
		}

		/**
		 * Retrives Stored DB Cache.
		 *
		 * @return mixed
		 */
		protected function get_db_cache() {
			return get_post_meta( $this->post_id, $this->get_cache_id(), true );
		}

		/**
		 * @param $post_id
		 *
		 * @return $this
		 */
		public function set_post_id( $post_id ) {
			$this->post_id = $post_id;
			return $this;
		}

		/**
		 * Retrives Stored DB Values.
		 *
		 * @return array|mixed
		 */
		public function get_db_values() {
			if ( empty( $this->db_values ) ) {
				$this->db_values = get_post_meta( $this->post_id, $this->unique, true );
				if ( ! wponion_is_array( $this->db_values ) ) {
					$this->db_values = array();
				}
			}
			return $this->db_values;
		}

		/**
		 * Stores Values into DB.
		 *
		 * @param $value
		 *
		 * @return $this
		 */
		protected function set_db_values( $value ) {
			$this->db_values = $value;
			update_post_meta( $this->post_id, $this->unique, $value );
			return $this;
		}

		/**
		 * Checks and returns currenty active sub_container and container.
		 *
		 * @return array
		 */
		public function active_page() {
			if ( null === $this->active_data ) {
				$active = wponion_validate_parent_container_ids( array(
					'container_id'     => isset( $this->options_cache['container_id'] ) ? $this->options_cache['container_id'] : false,
					'sub_container_id' => isset( $this->options_cache['sub_container_id'] ) ? $this->options_cache['sub_container_id'] : false,
				) );

				if ( false === $active ) {
					$active = $this->validate_container_sub_container( false, false );
				} elseif ( false !== $active ) {
					$active = $this->validate_container_sub_container( $active['container_id'], $active['sub_container_id'] );
				}

				$this->active_data = $active;
			}
			return $this->active_data;
		}

		/**
		 * Renders Metabox Hidden Data.
		 */
		public function hidden_secure_data() {
			$data = array(
				'metabox_id'     => $this->metabox_id(),
				'unique'         => $this->unique(),
				'wponion_postid' => $this->post_id,
			);

			echo '<div class="hidden wponion-metabox-secure-data">';
			foreach ( $data as $key => $value ) {
				echo '<input type="hidden" value="' . $value . '"  id="' . $key . '"/>';
			}
			echo '</div>';
		}

		/**
		 * Generates HTML Button to print in settings page.
		 *
		 * @return string
		 */
		public function save_button() {
			$user         = $this->option( 'save_button' );
			$default_attr = array(
				'class' => 'button button-success wponion-save',
				'type'  => 'button',
			);
			$user_attr    = ( wponion_is_array( $user ) && isset( $user['attributes'] ) ) ? $user['attributes'] : array();
			$text         = ( wponion_is_array( $user ) && isset( $user['label'] ) ) ? $user['label'] : false;
			$text         = ( false === $text && is_string( $user ) ) ? $user : __( 'Save Settings', 'wponion' );
			return '<button ' . wponion_array_to_html_attributes( $this->parse_args( $user_attr, $default_attr ) ) . ' >' . $text . '</button>';
		}

		/**
		 * checks if given (PAGE/SECTION) is active [CALLED AS TAB]
		 *
		 * @param bool $container
		 * @param bool $sub_container
		 * @param bool $first_container
		 *
		 * @return bool
		 */
		public function is_tab_active( $container = false, $sub_container = false, $first_container = false ) {
			if ( false !== $container && false === $sub_container ) {
				return ( $container === $this->active( true ) ) ? true : false;
			} else {
				if ( $container === $this->active( true ) && $sub_container === $this->active( false ) ) {
					return true;
				} elseif ( $container !== $this->active( true ) && $first_container === $sub_container ) {
					return true;
				}
				return false;
			}
		}

		/**
		 * Saves Given User Data to db
		 *
		 * @param $post_id
		 */
		public function save_metabox( $post_id ) {
			if ( isset( $_POST[ $this->unique ] ) ) {
				$this->set_post_id( $post_id );
				$instance = new \WPOnion\DB\Metabox_Save_Handler();
				$instance->init_class( array(
					'module'    => 'metabox',
					'unique'    => $this->unique,
					'fields'    => $this->fields,
					'db_values' => $this->get_db_values(),
					'args'      => array( 'settings' => &$this ),
				) )
					->run();

				$this->options_cache['field_errors'] = $instance->get_errors();
				$this->set_cache( $this->options_cache );
				$this->set_db_values( $instance->get_values() );
				$this->db_values = null;
			}
		}
	}
}
