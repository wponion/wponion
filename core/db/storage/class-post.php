<?php

namespace WPOnion\DB\Storage;

if ( ! class_exists( '\WPOnion\DB\Storage\Post' ) ) {
	/**
	 * Class Base
	 *
	 * @package WPOnion\DB\Storage
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since {NEWVERSION}
	 */
	class Post extends Base {
		/**
		 * Metadata Type.
		 *
		 * @var string
		 */
		protected $object_type = 'post';
	}
}
