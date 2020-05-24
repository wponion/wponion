<?php

namespace WPOnion\DB\Storage;

if ( ! class_exists( '\WPOnion\DB\Storage\Comment' ) ) {
	/**
	 * Class Comment
	 *
	 * @package WPOnion\DB\Storage
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since {NEWVERSION}
	 */
	class Comment extends Base {
		/**
		 * Metadata Type.
		 *
		 * @var string
		 */
		protected $object_type = 'comment';
	}
}
