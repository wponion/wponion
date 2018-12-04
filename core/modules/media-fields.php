<?php
/**
 *
 * Project : wponion
 * Date : 19-11-2018
 * Time : 10:41 AM
 * File : media-fields.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules;

use WPOnion\Bridge\Module;

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
		 * @param array $settings
		 * @param array $fields
		 */
		public function __construct( $settings = array(), $fields = array() ) {
			parent::__construct( $fields, $settings );
			$this->on_init();
		}

		/**
		 * Returns Database Values of the settings.
		 *
		 * @return array|mixed
		 */
		protected function get_db_values() {
			if ( ! isset( $this->db_values[ $this->post_id ] ) || empty( $this->db_values[ $this->post_id ] ) ) {
				$this->db_values[ $this->post_id ] = get_post_meta( $this->post_id, $this->unique(), true );
			}
			return ( ! is_array( $this->db_values[ $this->post_id ] ) ) ? array() : $this->db_values[ $this->post_id ];
		}

		/**
		 * @return null
		 */
		public function on_init() {
			$this->add_action( 'load-upload.php', 'on_page_load' );
			$this->add_filter( 'attachment_fields_to_edit', 'display_fields', 10, 2 );
			$this->add_filter( 'attachment_fields_to_save', 'save_data', 10, 2 );
		}

		/**
		 * @param $data
		 */
		public function set_db_values( $data ) {
			$this->db_values[ $this->post_id ] = $data;
			update_post_meta( $this->post_id, $this->unique(), $data );
		}

		/**
		 * Saves Data In DB.
		 *
		 * @param $post
		 * @param $attachment
		 *
		 * @return mixed
		 */
		public function save_data( $post, $attachment ) {
			if ( isset( $_POST[ $this->unique() ] ) ) {
				$this->post_id = $post['ID'];
				$instance      = new \WPOnion\DB\Media_Fields_Save_Handler();
				$instance->init_class( array(
					'module'    => 'media_fields',
					'plugin_id' => $this->plugin_id(),
					'unique'    => $this->unique(),
					'fields'    => $this->fields,
					'db_values' => $this->get_db_values(),
					'args'      => array( 'settings' => &$this ),
				) )
					->run();
				$this->set_db_values( $instance->get_values() );
			}
			return $post;
		}

		/**
		 * On Page Load Hook.
		 */
		public function on_page_load() {
			$this->add_action( 'admin_enqueue_scripts', 'load_assets' );
		}

		/**
		 * Loads Required Assets.
		 */
		public function load_assets() {
			wponion_load_core_assets();
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
			$this->post_id = $attachment->ID;
			$o             = '<div class="' . $this->wrap_class() . '">';
			foreach ( $this->fields as $field ) {
				$this->catch_output();
				echo $this->render_field( $field, $this->post_id );
				$o .= $this->catch_output( 'stop' );
			}

			$this->catch_output();
			wponion_localize()->render_js_args();
			$script = $this->catch_output( 'stop' );
			$form[] = array(
				'input' => 'html',
				'html'  => $o . '</div>' . $script,
				'label' => 'ddd',
			);
			return $form;
		}
	}
}
