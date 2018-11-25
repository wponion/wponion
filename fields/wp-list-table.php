<?php
/**
 *
 * Initial version created 21-07-2018 / 09:44 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\WP_List_Table' ) ) {
	class WP_List_Table extends \WPOnion\Field {

		protected function output() {
			echo $this->before();
			echo '<div class="wponion-inner-wp-list-table">';
			$instance = new \WPOnion\WP_List_Table( $this->data( 'settings' ), $this->data( 'data' ) );
			$instance->prepare_items();
			$instance->views();
			$instance->search_box( __( 'Search' ), 'search' );
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
			// TODO: Implement field_assets() method.
		}

	}
}
