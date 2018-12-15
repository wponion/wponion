<?php
/**
 *
 * Initial version created 13-11-2018 / 05:01 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;


if ( ! defined( 'ABSPATH' ) ) {
	die;
}


if ( ! class_exists( '\WPOnion\WP_Widget' ) ) {
	/**
	 * Class WP_Widget
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class WP_Widget extends \WP_Widget {
		/***
		 * widget_instance
		 *
		 * @var null
		 */
		protected $widget_instance = null;

		public function __construct( $id_base, $name, $widget_options = array(), $control_options = array() ) {
			parent::__construct( $id_base, $name, $widget_options, $control_options );
			$this->widget_instance = new Modules\Widget( $this->widget_settings_config(), $this->fields() );
		}

		/**
		 * @return array
		 */
		public function widget_settings_config() {
			return wp_parse_args( $this->settings_config(), array(
				'theme'       => 'wp',
				'plugin_id'   => false,
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
		 * @return array
		 */
		abstract function fields();

		public function form( $instance ) {
			$unique = $this->get_field_name( '{demo}' );
			$unique = str_replace( '[{demo}]', '', $unique );
			$this->widget_instance->render( $unique, $instance );
		}

		public function update( $new_instance, $old_instance ) {
			$unique = $this->get_field_name( '{demo}' );
			$unique = str_replace( '[{demo}]', '', $unique );
			return $this->widget_instance->save( $old_instance, $new_instance, $unique );
		}
	}
}
