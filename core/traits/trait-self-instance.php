<?php

namespace WPOnion\Traits;

defined( 'ABSPATH' ) || exit;

if ( ! trait_exists( '\WPOnion\Traits\Self_Instance' ) ) {
	/**
	 * Trait Self_Instance
	 *
	 * @package WPOnion\Traits
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	trait Self_Instance {
		/**
		 * Stores Self Instance.
		 *
		 * @var
		 * @access
		 * @static
		 */
		protected static $self_instance;

		/**
		 * Creates Instance.
		 *
		 * @static
		 * @return static
		 */
		public static function instance() {
			if ( ! isset( self::$self_instance[ static::class ] ) ) {
				self::$self_instance[ static::class ] = new static();
			}
			return self::$self_instance[ static::class ];
		}
	}
}
