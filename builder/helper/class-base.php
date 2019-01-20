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

if ( ! class_exists( 'WPO\Helper\Base' ) ) {
	abstract class Base extends \WPOnion\Bridge implements \JsonSerializable, \Countable, \Serializable {
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
		 * Check's and returns class type.
		 *
		 * @param bool $type
		 *
		 * @return bool
		 */
		public function is( $type = false ) {
			switch ( $type ) {
				case 'builder':
					return ( 'WPO\Builder' === get_class( $this ) );
					break;
				case 'container':
					return ( 'WPO\Container' === get_class( $this ) );
					break;
				case 'field':
					return ( 'WPO\Field' === get_class( $this ) );
					break;
			}
			return false;
		}

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
		 * @return int
		 */
		public function count() {
			return count( $this->get() );
		}

		/**
		 * @return mixed
		 */
		public function jsonSerialize() {
			return $this->get();
		}

		/**
		 * serialize the data in $this->variable
		 *
		 * @return string
		 */
		public function serialize() {
			return serialize( $this->get() );
		}

		/**
		 * unserialize and stores the data into $this->variable.
		 *
		 * @param string $content
		 */
		public function unserialize( $content ) {
			$this->set( unserialize( $content ) );
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
