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
			$instance = new \WPOnion\WP\WP_List_Table( $this->data( 'settings' ), $this->data( 'data' ) );
			$instance->prepare_items();
			$instance->views();
			$instance->search_box( __( 'Search', 'wponion' ), 'search' );
			$instance->display();
			echo '</div>';
			echo $this->after();
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
