<?php
/**
 *
 * Initial version created 29-06-2018 / 10:47 AM
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

if ( ! class_exists( '\WPOnion\Modules\taxonomy' ) ) {
	/**
	 * Class Taxonomy
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class taxonomy extends \WPOnion\Bridge\Module {
		/**
		 * module
		 *
		 * @var string
		 */
		protected $module = 'taxonomy';

		/**
		 * is_new
		 *
		 * @var bool
		 */
		public $is_new = false;

		/**
		 * Stores Current Term ID.
		 *
		 * @var bool
		 */
		public $term_id = false;

		/**
		 * metabox_instance
		 *
		 * @var \WPOnion\Modules\metabox
		 */
		public $metabox_instance = false;

		/**
		 * Taxonomy constructor.
		 *
		 * @param array $settings
		 * @param array $fields
		 */
		public function __construct( array $settings = array(), $fields = array() ) {
			parent::__construct( $fields, $settings );
			$this->init();
		}

		/**
		 * Runs In Instance Init.
		 */
		public function on_init() {
			$taxes = $this->option( 'taxonomy' );
			if ( ! is_array( $taxes ) ) {
				$taxes = array( $taxes );
				$this->set_option( 'taxonomy', $taxes );
			}

			$this->init_metabox();

			if ( is_array( $taxes ) ) {
				foreach ( $taxes as $tax ) {
					$this->add_action( 'load-edit-tags.php', 'on_page_load' );
					$this->add_action( $tax . '_add_form_fields', 'render', 10, 20 );
					$this->add_action( $tax . '_edit_form', 'render', 10, 20 );
					$this->add_action( 'created_' . $tax, 'save_taxonomy', 10, 200 );
					$this->add_action( 'edited_' . $tax, 'save_taxonomy', 10, 200 );
					$this->add_action( 'delete_' . $tax, 'delete_taxonomy' );
				}
			}
		}

		/**
		 * Creates Metabox Instance.
		 */
		public function init_metabox() {
			$taxs = $this->option( 'taxonomy' );
			$taxs = array_map( function ( $string ) {
				return 'edit-' . $string;
			}, $taxs );

			if ( false !== $this->option( 'metabox' ) ) {
				if ( is_array( $this->option( 'metabox' ) ) ) {
					$metabox = $this->parse_args( $this->option( 'metabox' ), array() );
				} else {
					$metabox = array(
						'metabox_title' => $this->option( 'metabox' ),
						'metabox_id'    => sanitize_title( $this->option( 'metabox' ) ),
					);
				}

				$metabox['context']       = 'normal';
				$metabox['option_name']   = $this->unique();
				$metabox['theme']         = $this->option( 'theme' );
				$metabox['screens']       = $taxs;
				$metabox['plugin_id']     = $this->plugin_id();
				$metabox['set_cache']     = array( $this, 'set_cache' );
				$metabox['get_cache']     = array( $this, 'get_db_cache' );
				$metabox['get_db_values'] = array( $this, 'get_db_values' );
				$metabox['set_db_values'] = array( $this, 'set_db_values' );
				$this->metabox_instance   = new \WPOnion\Modules\Metabox_Core( $metabox, $this->raw_fields );
			}
		}

		/**
		 * Dose Some Major Actions On Page Load.
		 */
		public function on_page_load() {
			global $taxnow;
			if ( in_array( $taxnow, $this->option( 'taxonomy' ) ) ) {
				$this->add_action( 'admin_enqueue_scripts', 'load_style_script' );
				if ( false === $this->option( 'metabox' ) ) {
					$this->init_theme();
				} else {
					$this->metabox_instance->register_metabox();
				}
			}
		}

		/**
		 * Loads Required Style & Scripts.
		 */
		public function load_style_script() {
			if ( false !== $this->option( 'metabox' ) ) {
				wp_enqueue_script( 'post' );
				wp_enqueue_style( 'post' );
			}
			wponion_load_core_assets( 'wponion-taxonomy' );
		}

		/**
		 * Module Defaults.
		 *
		 * @return array
		 */
		protected function defaults() {
			return $this->parse_args( parent::defaults(), array(
				'taxonomy' => false,
				'theme'    => 'modern',
				'metabox'  => false,
			) );
		}

		/**
		 * Renders HTML output.
		 *
		 * @param $term
		 */
		public function render( $term ) {
			$this->is_new = ( is_object( $term ) ) ? false : true;
			$term_id      = ( is_object( $term ) ) ? $term->term_id : false;
			$this->set_taxonomy_id( $term_id );
			$this->get_cache();
			$this->get_db_values();
			$screen = get_current_screen();

			if ( false !== $this->option( 'metabox' ) ) {
				echo '<div class="form-field wponion-taxonomy">';
				do_meta_boxes( $screen->id, 'normal', $term );
				echo '</div>';
			} else {

				$theme_instance = $this->init_theme();
				$theme_instance->render_taxonomy_html();
			}
		}

		/**
		 * @param string $extra_class
		 * @param bool   $is_bootstrap
		 *
		 * @return array|string
		 */
		public function wrap_class( $extra_class = '', $is_bootstrap = true ) {
			global $taxnow;
			$is_edit = ( true === $this->is_new ) ? 'wponion-taxonomy-new-form' : 'wponion-taxonomy-edit-form';

			return wponion_html_class( array(
				'wponion-taxonomy-' . $taxnow,
				'wponion-taxonomy-' . $taxnow . '-' . $this->term_id,
				$is_edit,
			), $this->default_wrap_class( $is_bootstrap ) );
		}

		/**
		 * Returns Current DB Values.
		 *
		 * @return array|mixed
		 */
		public function get_db_values() {
			$this->db_values = array();
			if ( false !== $this->term_id ) {
				$this->db_values = wponion_get_term_meta( $this->term_id, $this->unique );
				if ( ! is_array( $this->db_values ) ) {
					$this->db_values = array();
				}
			}
			return $this->db_values;
		}

		/**
		 * Updates Term Meta.
		 */
		public function set_db_values( $values ) {
			$this->db_values = $values;
			wponion_update_term_meta( $this->term_id, $this->unique, $values );
			return $this;
		}

		/**
		 * Updateds Current Term ID.
		 *
		 * @param $term_id
		 *
		 * @return $this
		 */
		protected function set_taxonomy_id( $term_id ) {
			$this->term_id = $term_id;
			return $this;
		}

		/**
		 * Retrives Stored DB Cache.
		 *
		 * @return mixed
		 */
		public function get_db_cache() {
			return wponion_get_term_meta( $this->term_id, $this->get_cache_id() );
		}

		/**
		 * Stores Cache Data.
		 *
		 * @param array $data
		 */
		public function set_cache( $data = array() ) {
			$data['wponion_version'] = WPONION_DB_VERSION;
			wponion_update_term_meta( $this->term_id, $this->get_cache_id(), $data );
			$this->options_cache = $data;
		}

		/**
		 * Saves Taxonomy data.
		 *
		 * @param $term_id
		 */
		public function save_taxonomy( $term_id ) {
			$this->set_taxonomy_id( $term_id );
			if ( false !== $this->option( 'metabox' ) ) {
				$this->metabox_instance->save_metabox( $term_id );
			} else {
				if ( isset( $_POST[ $this->unique ] ) ) {
					$instance = new \WPOnion\DB\Taxonomy_Save_Handler();
					$instance->init_class( array(
						'module'    => 'metabox',
						'plugin_id' => $this->plugin_id(),
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
