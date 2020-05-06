<?php

namespace WPOnion\Modules\Widgets;

use WPO\Builder;
use WPOnion\Bridge\Module;
use WPOnion\DB\Data_Validator_Sanitizer;
use WPonion\Helper;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Modules\Widgets\Widget' ) ) {
	/**
	 * Class Widget
	 *
	 * @package WPOnion\Modules\Widgets
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Widget extends Module {
		/**
		 * module
		 *
		 * @var string
		 */
		protected $module = 'widget';

		/**
		 * @var bool|array
		 * @access protected
		 */
		protected $errors = false;

		/**
		 * Widget constructor.
		 *
		 * @param array             $settings
		 * @param \WPO\Builder|null $fields
		 */
		public function __construct( $settings = array(), Builder $fields = null ) {
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
			wponion_load_core_assets();
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
			$instance = new Data_Validator_Sanitizer( array(
				'module'        => &$this,
				'posted_values' => $new_values,
				'unique'        => $unique,
				'fields'        => $this->fields,
				'db_values'     => $old_values,
			) );

			$instance->run();
			$errors = $instance->get_errors();
			$errors = ( isset( $errors[ $unique ] ) ) ? $errors[ $unique ] : $errors;
			$id     = str_replace( array( '[', ']' ), array( '/', '' ), $unique );
			Helper::array_key_set( $id, $errors, $this->errors );
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
