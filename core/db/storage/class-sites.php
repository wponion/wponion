<?php

namespace WPOnion\DB\Storage;

if ( ! class_exists( '\WPOnion\DB\Storage\Sites' ) ) {
	/**
	 * Class Sites
	 *
	 * @package WPOnion\DB\Storage
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since {NEWVERSION}
	 */
	class Sites extends Base {
		/**
		 * Metadata Type.
		 *
		 * @var string
		 */
		protected $object_type = 'blog';
	}
}
