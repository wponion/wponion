<?php

namespace WPOnion\Modules;

use WPOnion\Bridge\Module;
use WPOnion\DB\Data_Validator_Sanitizer;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Media_Fields' ) ) {
	/**
	 * Class Media_Fields
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Media_Fields extends Module {
		/**
		 * module
		 *
		 * @var string
		 */
		protected $module = 'media_fields';

		/**
		 * @var bool
		 */
		protected $post_id = false;

		/**
		 * Media_Fields constructor.
		 *
		 * @param array             $settings
		 * @param null|\WPO\Builder $fields
		 */
		public function __construct( $settings = array(), $fields = null ) {
			parent::__construct( $fields, $settings );
			$this->on_init();
		}

		/**
		 * Instance Class Instance.
		 */
		public function on_init() {
			$this->add_action( 'load-upload.php', 'on_page_load' );
			$this->add_action( 'load-post.php', 'on_page_load' );
			$this->add_filter( 'attachment_fields_to_edit', 'display_fields', 10, 2 );
			$this->add_filter( 'attachment_fields_to_save', 'save_data', 10, 1 );
		}

		/**
		 * Saves Data In DB.
		 *
		 * @param $post
		 *
		 * @return mixed
		 */
		public function save_data( $post ) {
			if ( isset( $_POST[ $this->unique() ] ) ) {
				$this->set_id( $post['ID'] );
				$instance = new Data_Validator_Sanitizer( array(
					'module'    => &$this,
					'unique'    => $this->unique(),
					'fields'    => $this->fields,
					'db_values' => $this->get_db_values(),
				) );
				$instance->run();
				$this->options_cache['field_errors'] = $instance->get_errors();
				$this->set_db_values( $instance->get_values() );
				$this->set_db_cache( $this->options_cache );
				$this->options_cache = false;
			}
			return $post;
		}

		/**
		 * On Page Load Hook.
		 */
		public function on_page_load() {
			global $typenow;
			if ( 'attachment' === $typenow ) {
				$this->add_action( 'admin_enqueue_scripts', 'load_assets' );
			}
		}

		/**
		 * Loads Required Assets.
		 */
		public function load_assets() {
			wponion_load_core_assets();
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
		 * Renders Fields Output.
		 *
		 * @param $form
		 * @param $attachment
		 *
		 * @return array
		 */
		public function display_fields( $form, $attachment ) {
			$this->set_id( $attachment->ID );
			$this->get_cache();
			$o = '<div ' . $this->wrap_attributes() . '>';
			foreach ( $this->fields->fields() as $field ) {
				$this->catch_output();
				echo $this->render_field( $field, $this->get_id() );
				$o .= $this->catch_output( 'stop' );
			}

			$this->catch_output();
			wponion_localize()->render_css_js_args();
			$script = $this->catch_output( 'stop' );
			$form[] = array(
				'input' => 'html',
				'html'  => $o . '</div>' . $script,
				'label' => null,
			);
			return $form;
		}
	}
}
