<?php
/**
 *
 * Project : wponion
 * Date : 13-11-2018
 * Time : 05:09 PM
 * File : widget.php
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

if ( ! class_exists( '\WPOnion\Modules\Widget' ) ) {
	/**
	 * Class Widget
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Widget extends \WPOnion\Bridge\Module {
		/**
		 * module
		 *
		 * @var string
		 */
		protected $module = 'widget';

		/**
		 * @var bool
		 * @access protected
		 */
		protected $errors = false;

		/**
		 * Widget constructor.
		 *
		 * @param array $settings
		 * @param null  $fields
		 */
		public function __construct( $settings = array(), $fields = null ) {
			parent::__construct( null, $settings );
			$this->init();
			add_action( 'admin_print_styles-widgets.php', array( __CLASS__, 'load_assets' ) );
		}

		/**
		 * Loads Required Assets.
		 *
		 * @static
		 */
		public static function load_assets() {
			wponion_load_core_assets( 'wponion-widgets' );
		}

		public function render( $unique, $values ) {
			$instance        = $this->init_theme();
			$this->unique    = $unique;
			$this->db_values = $values;
			$this->fields    = ( $this->fields instanceof \WPOnion\Module_Fields ) ? $this->fields : new \WPOnion\Module_Fields( $this->fields );
			if ( false !== $this->errors ) {
				$this->init_error_registry( $this->errors );
			}
			echo $instance->render_widgets_html();
		}

		/**
		 * Save Handler.
		 *
		 * @param $old_values
		 * @param $new_values
		 * @param $unique
		 *
		 * @return array
		 */
		public function save( $old_values, $new_values, $unique ) {
			$instance = new \WPOnion\DB\Widgets_Save_Handler();
			$instance->init_class( array(
				'module'      => 'dashboard_widgets',
				'user_values' => $new_values,
				'plugin_id'   => $this->plugin_id(),
				'unique'      => $unique,
				'fields'      => $this->fields,
				'db_values'   => $old_values,
				'args'        => array( 'settings' => &$this ),
			) )
				->run();
			$this->errors = $instance->get_errors();
			return $instance->get_values();
		}

		public function on_init() {
		}

		public function set_unique( $unique ) {
			$this->unique = $unique;
		}

		/**
		 * @return array
		 */
		protected function defaults() {
			return $this->parse_args( parent::defaults(), array() );
		}
	}
}
