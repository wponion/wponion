<?php

namespace WPOnion\Bridge;

use WPOnion\Traits\Hooks;
use WPOnion\Traits\Internal\Fields_Handler;
use WPOnion\Traits\Internal\Theme_Handler;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Bridge\Module' ) ) {
	/**
	 * Class Module
	 *
	 * @package WPOnion\Bridge
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	abstract class Module extends Module_Utility {
		use Theme_Handler;
		use Fields_Handler;
		use Hooks;

		/**
		 * Module constructor.
		 *
		 * @param array                                $settings
		 * @param string|array|\WPO\Builder|\WPO\Field $fields
		 */
		public function __construct( $settings = array(), $fields = null ) {
			parent::__construct( $settings, $fields );
			$this->init();
		}

		/**
		 * Inits The Class.
		 */
		protected function init() {
			if ( ! empty( $this->settings ) && ! empty( $this->fields ) && false === wponion_is_ajax( 'heartbeat' ) ) {
				$this->on_init();
			}
		}

		/**
		 * Returns a default array.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array(
				'option_name' => false,
				'assets'      => false,
				'save_type'   => 'all', # Options : combine/all / container / section / fields
			);
		}

		/**
		 * Extracts Field Default Values.
		 *
		 * @param $field
		 */
		protected function get_fields_defaults_value( $field ) {
			if ( ! isset( $field['id'] ) || ! isset( $field['default'] ) ) {
				return;
			}

			if ( ! isset( $this->db_values[ $field['id'] ] ) ) {
				$default[ $field['id'] ] = $field['default'];
				if ( wponion_is_unarrayed( $field ) ) {
					$this->db_values = $this->parse_args( $this->db_values, $field['default'] );
				} else {
					$this->db_values[ $field['id'] ] = $field['default'];
				}
			}
		}

		/**
		 * Returns Unique Instance ID.
		 *
		 * @return string
		 */
		protected function instance_id() {
			return sanitize_title( implode( '_', array_filter( array(
				$this->module(),
				$this->unique(),
				$this->get_id(),
			) ) ) );
		}

		/**
		 * Unsets Global Args.
		 */
		protected function _unset_globals() {
			unset( $this->current_theme );
			unset( $this->menus );
			unset( $this->fields );
			unset( $this->raw_fields );
			unset( $this->unique );
			unset( $this->db_values );
			unset( $this->options_cache );
			unset( $this->module );
		}

		/**
		 * Required Callback On Instance Init.
		 *
		 * @return mixed
		 */
		abstract public function on_init();
	}
}
