<?php

namespace WPOnion\Modules\WooCommerce;

use WPOnion\Bridge\Module;
use WPOnion\DB\WooCommerce_Settings_Save_Handler;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\WooCommerce\Settings' ) ) {
	/**
	 * Class Settings
	 *
	 * @package WPOnion\Modules\WooCommerce
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 * @todo Rework a bit
	 */
	class Settings extends Module {
		/**
		 * @var string
		 * @access
		 */
		protected $module = 'woocommerce_settings';

		/**
		 * Settings constructor.
		 *
		 * @param array $settings
		 * @param null  $fields
		 */
		public function __construct( $settings = array(), $fields = null ) {
			parent::__construct( $fields, $settings );
			$this->init();
		}

		/**
		 * Registers Tabs With WoCommerce
		 */
		public function on_init() {
			$this->add_filter( 'woocommerce_get_settings_pages', 'register_settings' );
		}

		/**
		 * Registers Tabs With WooCommerce Settings API.
		 *
		 * @param $tabs
		 *
		 * @return mixed
		 */
		public function register_settings( $tabs ) {
			/**
			 * @var \WPO\Container $data
			 */
			foreach ( $this->fields->get() as $data ) {
				if ( wponion_is_builder( $data, 'container' ) ) {
					new WC_Settings( $data, $this );
				}
			}
			return $tabs;
		}

		/**
		 * Handles WP Settings Save.
		 *
		 * @param string $current_tab
		 * @param string $current_section
		 *
		 * @return mixed
		 */
		public function save_validate( $current_tab, $current_section ) {
			$this->get_cache();
			$instance = new WooCommerce_Settings_Save_Handler();

			$instance->init_class( array(
				'module'    => 'settings',
				'unique'    => $this->unique,
				'fields'    => $this->fields,
				'db_values' => $this->get_db_values(),
				'args'      => array(
					'settings'        => &$this,
					'current_tab'     => $current_tab,
					'current_section' => $current_section,
				),
			) )
				->run();

			$this->options_cache['field_errors'] = $instance->get_errors();
			$this->set_cache( $this->options_cache );
			$this->set_db_values( $instance->get_values() );
			return $instance->get_values();
		}
	}
}
