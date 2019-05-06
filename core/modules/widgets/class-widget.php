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

namespace WPOnion\Modules\Widgets;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Widgets\Widget' ) ) {
	/**
	 * Class Widget
	 *
	 * @package WPOnion\Modules\Widgets
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
		 * @param array             $settings
		 * @param \WPO\Builder|null $fields
		 */
		public function __construct( $settings = array(), \WPO\Builder $fields = null ) {
			parent::__construct( $fields, $settings );
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

		/**
		 * Renders Widgets Form HTML.
		 *
		 * @param $unique
		 * @param $values
		 */
		public function render( $unique, $values ) {
			$instance        = $this->init_theme();
			$this->unique    = $unique;
			$this->db_values = $values;
			if ( false !== $this->errors ) {
				$this->init_error_registry( $this->errors );
			}
			echo $instance->render_widgets();
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
				'unique'      => $unique,
				'fields'      => $this->fields,
				'db_values'   => $old_values,
				'args'        => array( 'settings' => &$this ),
			) )
				->run();
			$this->errors = $instance->get_errors();
			return $instance->get_values();
		}

		/**
		 * Returns Default Args.
		 *
		 * @return array
		 */
		protected function defaults() {
			return $this->parse_args( parent::defaults(), array() );
		}

		public function on_init() {
		}
	}
}
