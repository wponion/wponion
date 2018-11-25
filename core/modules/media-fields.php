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
	class Media_Fields extends \WPOnion\Bridge\Module {
		protected $module = 'media_fields';

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
			if ( empty( $this->db_values ) ) {
				$this->db_values = array();
			}
			return $this->db_values;
		}

		public function on_init() {
			//add_filter( 'attachment_fields_to_save', array( &$this, 'save_data' ), 10, 2 );
			add_filter( 'attachment_fields_to_edit', array( &$this, 'display_fields' ), 99, 2 );
		}

		public function display_fields( $form, $attachment ) {
			foreach ( $this->fields as $field ) {
				$this->catch_output();
				echo $this->render_field( $field );
				$o      = $this->catch_output( 'stop' );
				$form[] = array(
					'input' => 'html',
					'html'  => $o,
				);
			}

			return $form;
		}
	}
}
