<?php

namespace WPOnion\Modules\Admin;

use WPOnion\Bridge\Module;
use WPOnion\DB\Save_Handler\Base as Save_Handler;
use WPOnion\Modules\Metabox\Core;

defined( 'ABSPATH' ) || exit;

/**
 * Class Taxonomy
 *
 * @package WPOnion\Modules\Admin
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Taxonomy extends Module {
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
	 * metabox_instance
	 *
	 * @var \WPOnion\Modules\Metabox\metabox
	 */
	public $metabox_instance = false;

	/**
	 * Runs In Instance Init.
	 */
	public function on_init() {
		$taxes = $this->option( 'taxonomy' );
		if ( ! wponion_is_array( $taxes ) ) {
			$taxes = array( $taxes );
			$this->set_option( 'taxonomy', $taxes );
		}

		$this->init_metabox();

		if ( wponion_is_array( $taxes ) ) {
			foreach ( $taxes as $tax ) {
				$this->add_action( 'load-edit-tags.php', 'on_page_load' );
				$this->add_action( $tax . '_add_form_fields', 'render', $this->option( 'priority' ) );
				$this->add_action( $tax . '_edit_form', 'render', $this->option( 'priority' ), 2 );
				$this->add_action( 'created_' . $tax, 'save_taxonomy', 10 );
				$this->add_action( 'edited_' . $tax, 'save_taxonomy', 10 );
				//@todo Create Delete Handler To Clear WP_OPTIONS Table if any updated.
				//$this->add_action( 'delete_' . $tax, 'delete_taxonomy' );
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
			if ( wponion_is_array( $this->option( 'metabox' ) ) ) {
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
			$metabox['set_cache']     = array( $this, 'set_db_cache' );
			$metabox['get_cache']     = array( $this, 'get_db_cache' );
			$metabox['get_db_values'] = array( $this, 'get_db_values' );
			$metabox['set_db_values'] = array( $this, 'set_db_values' );
			$metabox['module']        = $this->module();
			$this->metabox_instance   = new Core( $metabox, $this->fields );
		}
	}

	/**
	 * Dose Some Major Actions On Page Load.
	 */
	public function on_page_load() {
		global $taxnow;
		if ( in_array( $taxnow, $this->option( 'taxonomy' ), true ) ) {
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
		wponion_load_core_assets( $this->option( 'assets' ) );
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
			'priority' => 20,
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
		$this->set_id( $term_id );
		$this->get_cache();
		$this->get_db_values();
		$screen = get_current_screen();

		if ( false !== $this->option( 'metabox' ) ) {
			echo '<div class="form-field wponion-taxonomy">';
			do_meta_boxes( $screen->id, 'normal', $term );
			echo '</div>';
		} else {
			$this->init_theme()->render();
		}
	}

	/**
	 * @param string $extra_class
	 *
	 * @return array|string
	 */
	public function wrap_class( $extra_class = '' ) {
		global $taxnow;
		$is_edit = ( true === $this->is_new ) ? 'wponion-taxonomy-new-form' : 'wponion-taxonomy-edit-form';

		$custom_class = array(
			'wponion-taxonomy-' . $taxnow,
			'wponion-taxonomy-' . $taxnow . '-' . $this->get_id(),
			$is_edit,
		);
		return parent::wrap_class( wponion_html_class( $extra_class, $custom_class ) );
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
	 * Saves Taxonomy data.
	 *
	 * @param $term_id
	 */
	public function save_taxonomy( $term_id ) {
		$this->set_id( $term_id );
		if ( isset( $_POST[ $this->unique ] ) ) {
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
