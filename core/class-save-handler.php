<?php
/**
 *
 * Initial version created 14-05-2018 / 03:10 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Save_Handler' ) ) {
	/**
	 * Class WPOnion_Save_Handler
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_Save_Handler extends WPOnion_Abstract {
		/**
		 * Database Key.
		 *
		 * @var string
		 */
		protected $unique = '';

		/**
		 * fields
		 *
		 * @var array
		 */
		protected $fields = array();

		/**
		 * db_values
		 *
		 * @var array
		 */
		protected $db_values = array();

		protected $args = array();

		public function __construct() {
		}

		/**
		 * inits class.
		 *
		 * @param array $args
		 */
		public function init_class( $args = array() ) {
			$args = $this->parse_args( $args, array(
				'module'    => false,
				'plugin_id' => false,
				'unique'    => false,
				'fields'    => false,
				'db_values' => false,
				'args'      => array(),
			) );

			$this->module    = $args['module'];
			$this->plugin_id = $args['plugin_id'];
			$this->unique    = $args['unique'];
			$this->fields    = $args['fields'];
			$this->db_values = $args['db_values'];
			$this->args      = $args['args'];
		}
	}
}