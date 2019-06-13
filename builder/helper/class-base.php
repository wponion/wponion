<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPO\Helper;

use WPOnion\Bridge;
use WPOnion\Traits\Json_Serialize;
use WPOnion\Traits\Countable;
use WPOnion\Traits\Serializable;

if ( ! class_exists( 'WPO\Helper\Base' ) ) {
	/**
	 * Class Base
	 *
	 * @package WPO\Helper
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class Base extends Bridge implements \JsonSerializable, \Countable, \Serializable {
		use Json_Serialize;
		use Countable;
		use Serializable;

		/**
		 * Custom Variable Name That Class Uses To Work As Array.
		 *
		 * @uses \ArrayAccess
		 * @var string
		 * @access protected
		 */
		protected $array_var = 'settings';

		/**
		 * Stores Unique value.
		 *
		 * @var string
		 * @access
		 */
		protected $unique = '';

		/**
		 * Returns Array Accessable Variable.
		 *
		 * @return mixed
		 */
		public function get() {
			return $this->{$this->array_var};
		}

		/**
		 * Updates Array Access Variable With New Data.
		 *
		 * @param $args
		 *
		 * @return $this
		 */
		public function set( $args ) {
			$this->{$this->array_var} = $args;
			return $this;
		}

		/**
		 * Returns DB Slug.
		 *
		 * @return string
		 */
		public function unique() {
			return $this->unique;
		}
	}
}
