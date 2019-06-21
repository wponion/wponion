<?php

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\WP_List_Table' ) ) {
	/**
	 * Class WP_List_Table
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_List_Table extends \WPOnion\Field {

		protected function output() {
			echo $this->before();
			echo '<div class="wponion-inner-wp-list-table">';
			$settings          = $this->data( 'settings' );
			$settings          = ( ! is_array( $settings ) ) ? array() : $settings;
			$settings['field'] = &$this;
			$instance          = new \WPOnion\WP\WP_List_Table( $settings, $this->data( 'data' ) );
			$instance->prepare_items();
			$instance->views();
			if ( ( isset( $settings['search'] ) && true === $settings['search'] ) || ! isset( $settings['search'] ) ) {
				$instance->search_box( __( 'Search', 'wponion' ), 'search' );
			}

			$instance->display();
			echo '</div>';
			echo $this->after();
		}

		/**
		 * Returns Fields.
		 *
		 * @return bool|array|\WPO\Builder|\WPO\Field|\WPO\Container
		 */
		public function fields() {
			return $this->data( 'fields' );
		}

		/**
		 * @param      $field
		 * @param      $value
		 * @param      $unqiue
		 * @param bool $is_init
		 *
		 * @return mixed
		 */
		public function sub_field( $field, $value, $unqiue, $is_init = false ) {
			return parent::sub_field( $field, $value, $unqiue, $is_init );
		}

		protected function field_default() {
			return array(
				'settings'   => array(),
				'data'       => array(),
				'query_args' => array(),
			);
		}

		public function field_assets() {
		}
	}
}
