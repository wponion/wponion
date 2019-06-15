<?php

namespace WPOnion\Field;

use WPOnion\Field;
use WPOnion\Modules\Metabox\Core;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Metabox' ) ) {
	/**
	 * Class Metabox
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Metabox extends Field {
		/**
		 * @var \WPOnion\Modules\Metabox\Core
		 * @access
		 */
		protected $metabox_instance = false;

		/**
		 * Final HTML Output
		 */
		public function output() {
			echo $this->before();
			$fields = $this->data( 'fields' );
			if ( ! $fields instanceof \WPO\Builder ) {
				$fields = wponion_builder()->set_fields( $fields );
			}

			$options                  = array(
				'metabox_title' => $this->data( 'metabox_title' ),
				'metabox_id'    => $this->data( 'metabox_id' ),
				'screens'       => $this->data( 'screens' ),
				'context'       => $this->data( 'context' ),
				'priority'      => $this->data( 'priority' ),
				'theme'         => $this->data( 'theme' ),
				'template_path' => $this->data( 'template_path' ),
				'theme_color'   => $this->data( 'theme_color' ),
				'ajax'          => $this->data( 'ajax' ),
				'set_cache'     => $this->data( 'set_cache' ),
				'get_cache'     => $this->data( 'get_cache' ),
				'get_db_values' => $this->data( 'get_db_values' ),
				'set_db_values' => $this->data( 'set_db_values' ),
				'module'        => $this->module(),
				'option_name'   => $this->name(),
			);
			$options['set_cache']     = function () {
				return array();
			};
			$options['get_cache']     = function () {
				return array();
			};
			$options['get_db_values'] = function () {
				return array();
			};
			$options['set_db_values'] = function () {
				return array();
			};
			if ( false === $options['screens'] ) {
				$screen = get_current_screen();
				if ( $screen && isset( $screen->id ) ) {
					$options['screens'] = $screen->id;
				}
			}

			$this->metabox_instance = new Core( $options, $fields );
			$this->metabox_instance->register_metabox();
			do_meta_boxes( $options['screens'], $options['context'], null );
			echo $this->after();
		}

		public function field_assets() {
			wp_enqueue_script( 'post' );
			wp_enqueue_style( 'post' );
		}

		/**
		 * Final HTML Output;
		 *
		 * @return mixed;
		 */
		protected function field_default() {
			return array(
				'metabox_title' => false,
				'metabox_id'    => false,
				'context'       => 'normal',
				'screens'       => false,
				'priority'      => null,
				'theme'         => 'wp_modern',
				'template_path' => false,
				'theme_color'   => 'false',
				'ajax'          => false,
				'module'        => false,
			);
		}
	}
}
