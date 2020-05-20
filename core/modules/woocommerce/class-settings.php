<?php

namespace WPOnion\Modules\WooCommerce;

use WPOnion\Bridge\Module;
use WPOnion\DB\WC_Settings_Save_Handler;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Modules\WooCommerce\Settings' ) ) {
	/**
	 * Class Settings
	 *
	 * @package WPOnion\Modules\WooCommerce
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Settings extends Module {
		/**
		 * @var string
		 * @access
		 */
		protected $module = 'wc_settings';

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
			$this->get_cache();
			/* @var \WPO\Container $data */
			foreach ( $this->fields()->get() as $data ) {
				if ( wpo_is_container( $data ) ) {
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
			$instance = new WC_Settings_Save_Handler( array(
				'module'    => &$this,
				'unique'    => $this->unique,
				'fields'    => $this->fields(),
				'db_values' => $this->get_db_values(),
				'args'      => array(
					'current_tab'     => $current_tab,
					'current_section' => $current_section,
				),
			) );

			$instance->run();

			$this->options_cache['field_errors'] = $instance->get_errors();
			$this->set_db_cache( $this->options_cache );
			$this->set_db_values( $instance->get_values() );
			return $instance->get_values();
		}
	}
}
