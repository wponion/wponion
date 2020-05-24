<?php

namespace WPOnion\DB\Storage;

if ( ! class_exists( '\WPOnion\DB\Storage\Network_Options' ) ) {
	/**
	 * Class Base
	 *
	 * @package WPOnion\DB\Storage
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since {NEWVERSION}
	 */
	class Network_Options extends Options {
		/**
		 * @var bool
		 */
		protected $is_network = false;
	}
}
