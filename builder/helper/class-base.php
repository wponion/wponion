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
	/**
	 * Class Base
	 *
	 * @package WPOnion\Builder
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class Base extends \WPOnion\Bridge implements \JsonSerializable, \Countable, \Serializable {
		/**
		 * @var null
		 * @access
		 */
		protected $variable = 'settings';

		/**
		 * Fields
		 *
		 * @var array
		 */
		public $fields = array();

		/**
		 * Stores Settings Args.
		 *
		 * @var array
		 * @access
		 */
		public $settings = array();

		/**
		 * unique for database.
		 *
		 * @var string
		 */
		protected $unique = '';

		/**
		 * Checks The Type of Class.
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
		 * Returns A Value.
		 *
		 * @return mixed
		 */
		public function get() {
			return $this->{$this->variable};
		}

		/**
		 * Sets A Value To Args.
		 *
		 * @param $data
		 *
		 * @return $this
		 */
		public function set( $data ) {
			$this->{$this->variable} = $data;
			return $this;
		}

		/**
		 * Counts The Array And Returns It.
		 *
		 * @return int
		 */
		public function count() {
			return count( $this->{$this->variable} );
		}

		/**
		 * @return mixed
		 */
		public function jsonSerialize() {
			return $this->{$this->variable};
		}

		/**
		 * serialize the data in $this->variable
		 *
		 * @return string
		 */
		public function serialize() {
			return serialize( $this->{$this->variable} );
		}

		/**
		 * unserialize and stores the data into $this->variable.
		 *
		 * @param string $content
		 */
		public function unserialize( $content ) {
			$this->{$this->variable} = unserialize( $content );
		}

		/**
		 * Returns DB Slug.
		 *
		 * @return string
		 */
		public function unique() {
			return $this->unique;
		}

		/**
		 * Internal Array Set / Get Handler.
		 *
		 * @param      $key
		 * @param null $value
		 *
		 * @return $this|mixed
		 */
		protected function _set_get_args( $key, $value = null ) {
			if ( null === $value ) {
				return $this->{$this->variable}[ $key ];
			}
			$this->{$this->variable}[ $key ] = $value;
			return $this;
		}

		/**
		 * Returns First Container Instance.
		 *
		 * @return bool|mixed|\WPO\Container
		 */
		public function first_container() {
			$first = false;

			if ( $this->is( 'builder' ) ) {
				$first = current( $this->{$this->variable} );
			} elseif ( $this->is( 'container' ) ) {
				if ( isset( $this->{$this->variable}['containers'] ) ) {
					$first = current( $this->{$this->variable}['containers'] );
				} else {
					$first = current( $this->{$this->variable} );
				}
			}

			return ( ! empty( $first ) && $first instanceof \WPO\Container ) ? $first : false;
		}

		/**
		 * Checks if Container Exists.
		 *
		 * @param $container_id
		 *
		 * @return bool|\WPO\Container
		 */
		public function container_exists( $container_id ) {
			$containers = false;
			if ( $this->is( 'builder' ) ) {
				$containers = $this->{$this->variable};
			} elseif ( $this->is( 'container' ) ) {
				$containers = ( isset( $this->{$this->variable}['containers'] ) ) ? $this->{$this->variable}['containers'] : $this->{$this->variable};
			}

			if ( $containers ) {
				/* @var $container \WPO\Container */
				foreach ( $containers as $container ) {
					if ( $container->name() === $container_id ) {
						return $container;
					}
				}
			}
			return false;
		}

		/**
		 * Returns A New Container Instance.
		 *
		 * @param      $container_slug_or_instance
		 * @param bool $page_title
		 * @param bool $page_icon
		 *
		 * @return $this|mixed|\WPO\Container
		 */
		public function container( $container_slug_or_instance, $page_title = false, $page_icon = false ) {
			if ( is_string( $container_slug_or_instance ) && isset( $this->{$this->variable}[ $container_slug_or_instance ] ) && $this->{$this->variable}[ $container_slug_or_instance ] instanceof \WPO\Container ) {
				return $this->{$this->variable}[ $container_slug_or_instance ];
			} else {
				if ( $container_slug_or_instance instanceof \WPO\Container ) {
					$this->{$this->variable}[ $container_slug_or_instance->unique() ] = $container_slug_or_instance;
				} else {
					$args = func_get_args();
					$ins  = wponion_callback( array( '\WPO\Container', 'create' ), $args );

					$this->{$this->variable}[ $ins->unique() ] = $ins;
					return $ins;
				}
			}
			return $this;
		}

		/**
		 * Returns A New Field Instance
		 *
		 * @param string $filed_type_or_instance
		 * @param string $field_id
		 * @param string $field_title
		 *
		 * @return $this|\WPO\Field
		 */
		public function field( $filed_type_or_instance = '', $field_id = '', $field_title = '' ) {
			if ( ! isset( $this->{$this->variable}['fields'] ) ) {
				$this->{$this->variable}['fields'] = array();
			}

			if ( $filed_type_or_instance instanceof \WPO\Field ) {
				$this->{$this->variable}['fields'][ $filed_type_or_instance->unique() ] = $filed_type_or_instance;
			} elseif ( is_string( $filed_type_or_instance ) && isset( $this->{$this->variable}['fields'][ $filed_type_or_instance ] ) && $this->{$this->variable}['fields'][ $filed_type_or_instance ] instanceof \WPO\Field ) {
				return $this->{$this->variable}['fields'][ $filed_type_or_instance ];
			} else {
				$args    = func_get_args();
				$args[3] = $this->unique();
				$ins     = wponion_callback( array( '\WPO\Field', 'create' ), $args );

				$this->{$this->variable}['fields'][ $ins->unique() ] = $ins;
				return $ins;
			}
			return $this;
		}
	}
}
