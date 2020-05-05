<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\Options_Object' ) ) {
	/**
	 * Class Options_Object
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class Options_Object extends Field {

		/**
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
		}

		/**
		 * @return array
		 */
		protected function js_field_args() {
			$module = $this->module( true );
			if ( ! method_exists( $module, 'get_db_values' ) ) {
				$values = array(
					'not_found'       => __( 'Filed\'s Module Not Found', 'wponion' ),
					'module_name'     => $this->module( false ),
					'module_instance' => $module,
				);
			} else {
				$values = $module->get_db_values();
			}
			return array( 'values' => $values );
		}

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo '<div class="json-output">';
			echo '</div>';
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array();
		}
	}
}
