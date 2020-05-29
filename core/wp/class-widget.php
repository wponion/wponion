<?php

namespace WPOnion\WP;

use WP_Widget;

defined( 'ABSPATH' ) || exit;

/**
 * Class Widget
 *
 * @package WPOnion\WP
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Widget extends WP_Widget {
	/***
	 * widget_instance
	 *
	 * @var null
	 */
	protected $widget_instance = null;

	/**
	 * WP_Widget constructor.
	 *
	 * @param       $id_base
	 * @param       $name
	 * @param array $widget_options
	 * @param array $control_options
	 */
	public function __construct( $id_base, $name, $widget_options = array(), $control_options = array() ) {
		parent::__construct( $id_base, $name, $widget_options, $control_options );
		$this->widget_instance = new \WPOnion\Modules\Widgets\Widget( $this->widget_settings_config(), $this->fields() );
	}

	/**
	 * @return array
	 */
	public function widget_settings_config() {
		return wp_parse_args( $this->settings_config(), array(
			'theme'       => 'wp_modern',
			'option_name' => $this->id_base,
		) );
	}

	/**
	 * Custom Config For Widget Settings.
	 *
	 * @return array
	 */
	public function settings_config() {
		return array();
	}

	/**
	 * @return array|\WPO\Builder|\WPO\Container|\WPO\Field
	 */
	abstract function fields();

	/**
	 * Handles Widget Form Generation.
	 *
	 * @param array $instance
	 *
	 * @return string|void
	 */
	public function form( $instance ) {
		$unique      = $this->get_field_name( '{demo}' );
		$unique      = str_replace( '[{demo}]', '', $unique );
		$is_template = ( ! is_numeric( $this->number ) );

		$this->widget_instance->render( $unique, $instance, $is_template );
		if ( wponion_is_ajax( 'save-widget' ) ) {
			wponion_localize()->render_css_js_args();
		}
	}

	/**
	 * Handles Widget Data Updates.
	 *
	 * @param array $new_instance
	 * @param array $old_instance
	 *
	 * @return array
	 */
	public function update( $new_instance, $old_instance ) {
		$unique = $this->get_field_name( '{demo}' );
		$unique = str_replace( '[{demo}]', '', $unique );
		return $this->widget_instance->save( $old_instance, $new_instance, $unique );
	}

	/**
	 * Function To Render Widget Output.
	 *
	 * @param array $widget_config Basic Widget Configuration.
	 * @param array $widget_settings Options Configured By End User.
	 */
	public function widget( $widget_config, $widget_settings ) {
		echo '<pre>';
		echo print_r( $widget_config, true );
		echo print_r( $widget_settings, true );
		echo '</pre>';
	}
}
