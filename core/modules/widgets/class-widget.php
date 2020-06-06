<?php

namespace WPOnion\Modules\Widgets;

use WPO\Builder;
use WPOnion\Bridge\Module;
use WPOnion\DB\Save_Handler\Base as Save_Handler;
use WPonion\Helper;

defined( 'ABSPATH' ) || exit;

/**
 * Class Widget
 *
 * @package WPOnion\Modules\Widgets
 * @author Varun Sridharan <varunsridharan23@gmail.com>
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
	 */
	protected $errors = false;

	public function on_init() {
		add_action( 'admin_print_styles-widgets.php', array( __CLASS__, 'load_assets' ) );
	}

	/**
	 * Loads Required Assets.
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
	public function render( $unique, $values, $is_template ) {
		$this->set_option( 'is_template', $is_template );
		$this->unique    = $unique;
		$this->db_values = $values;
		if ( false !== $this->errors ) {
			$this->init_error_registry( $this->errors );
		}
		echo $this->init_theme()->render();
		$this->remove_option( 'is_template' );
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
		$instance = new Save_Handler( array(
			'module'        => &$this,
			'posted_values' => $new_values,
			'unique'        => $unique,
			'fields'        => $this->fields(),
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
}
