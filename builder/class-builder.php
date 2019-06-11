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

namespace WPO;

if ( ! class_exists( 'WPO\Builder' ) ) {
	/**
	 * Class Builder
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Builder extends Helper\Base implements Helper\Interfaces\Container, Helper\Interfaces\Field {
		use Helper\Container\Functions;
		use Helper\Field\Functions;
		use Helper\Field\Types;

		/**
		 * Fields.
		 *
		 * @var bool|array
		 * @access
		 */
		public $fields = false;

		/**
		 * Stores All Containers.
		 *
		 * @var bool
		 * @access
		 */
		public $containers = false;

		/**
		 * Builder constructor.
		 */
		public function __construct() {
			unset( $this->module );
			unset( $this->unique );
			unset( $this->array_var );
			$this->settings = array();
		}

		/**
		 * @param $data
		 */
		public function load_from_existing( $data ) {
			if ( wponion_is_array( $data ) ) {
				if ( isset( $data[0] ) ) {
					foreach ( $data as $_d ) {
						if ( Container::is_valid( $_d ) ) {
							$this->container( new Container( $_d ) );
						} elseif ( Field::is_valid( $_d ) ) {
							$this->set_fields( $_d );
						}
					}
				}
			}
		}

		/**
		 * @param array $fields
		 *
		 * @return $this
		 */
		public function set_fields( $fields = array() ) {
			$this->fields = $fields;
			return $this;
		}

		/**
		 * @param bool $get
		 *
		 * @return array|bool|\WPO\Container|\WPO\Field
		 */
		public function get( $get = false ) {
			$return = false;

			if ( $this->has_fields() ) {
				$return = $this->fields( $get );
			}
			if ( $this->has_containers() ) {
				$return = $this->containers( $get );
			}

			return ( false !== $return ) ? $return : array();
		}

		/**
		 * @param $instance
		 *
		 * @return bool|false|\WPO\Container|\WPO\Field
		 */
		public function add( $instance ) {
			if ( wpo_is_container( $instance ) ) {
				return $this->container( $instance );
			}
			if ( wpo_is_field( $instance ) ) {
				return $this->field( $instance );
			}
			return $instance;
		}
	}
}
