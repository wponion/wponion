<?php

namespace WPOnion\DB\Storage;

if ( ! class_exists( '\WPOnion\DB\Storage\User' ) ) {
	/**
	 * Class Term
	 *
	 * @package WPOnion\DB\Storage
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since {NEWVERSION}
	 */
	class User extends Base {
		/**
		 * Metadata Type.
		 *
		 * @var string
		 */
		protected $object_type = 'user';
	}
}
