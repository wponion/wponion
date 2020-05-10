<?php

namespace WPOnion\Bridge;

use WPOnion\Bridge;
use WPOnion\Traits\Internal\Fields_Handler;
use WPOnion\Traits\Internal\Module;
use WPOnion\Traits\Internal\Unique;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Bridge\Module_Utility' ) ) {
	/**
	 * Class Module_Utility
	 *
	 * @package WPOnion\Bridge
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since {NEWVERSION}
	 */
	abstract class Module_Utility extends Bridge {
		use Module;
		use Unique;
		use Fields_Handler;

		/**
		 * WPOnion_Settings constructor.
		 *
		 * @param string|array              $settings array of WPOnion Settings Configuration.
		 * @param string|array|\WPO\Builder $fields Array of settings fields.
		 */
		public function __construct( $settings = array(), $fields = null ) {
			//$this->raw_fields = $fields;
			$this->fields   = $fields;
			$this->settings = $this->set_args( $settings );
			$this->unique   = ( wponion_is_array( $this->settings ) && isset( $this->settings['option_name'] ) ) ? $this->settings['option_name'] : false;
			$this->save_instance();
		}

		/**
		 * Stores Instance In Registry.
		 */
		protected function save_instance() {
			wponion_callback( 'wponion_' . $this->module . '_registry', array( &$this ) );
		}
	}
}
