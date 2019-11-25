<?php

namespace WPOnion\DB\Multi_Save;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}


if ( ! class_exists( '\WPOnion\DB\Multi_Save\Base' ) ) {
	/**
	 * Class Base
	 *
	 * @package WPOnion\DB\Multi_Save
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class Base {
		/**
		 * Save Type
		 * ('combine','container','subcontainer','fields')
		 *
		 * @var string
		 */
		protected $type = '';

		/**
		 * Module Instance
		 *
		 * @var \WPOnion\Bridge\Module
		 */
		protected $instance = false;

		/**
		 * @var array|bool
		 */
		protected $save_types = false;

		/**
		 * Base constructor.
		 *
		 * @param $save_type
		 * @param $instance
		 */
		public function __construct( $save_type, $instance ) {
			$this->type       = $save_type;
			$this->instance   = $instance;
			$this->save_types = array( 'container', 'subcontainer', 'field' );
		}

		/**
		 * Checks if its a valid save type.
		 *
		 * @return bool
		 */
		public function is_valid_save_type() {
			return in_array( $this->type, $this->save_types, true );
		}

		/**
		 * Checks if its to save all.
		 *
		 * @return bool
		 */
		public function is_save_single() {
			return ( ! in_array( $this->type, $this->save_types, true ) );
		}
	}
}
