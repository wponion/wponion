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

namespace WPO\Fields;

use WPO\Helper\Container\Functions as Container_Functions;

if ( ! class_exists( 'WPO\Fields\Tab' ) ) {
	/**
	 * Class Accordion
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Tab extends Nested_Fields {
		/**
		 * Sub Containers
		 *
		 * @var array
		 * @access
		 */
		protected $containers = array();

		/**
		 * Loads Required Container_Functions.
		 *
		 * @see \WPO\Helper\Container\Functions
		 */
		use Container_Functions;

		/**
		 * Accordion constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'tab', $id, $title, $args );
		}

		public function get( $key = false ) {
			if ( ! empty( $key ) ) {
				$key  = explode( '/', $key );
				$_key = array_shift( $key );
				if ( $this->has_containers() ) {
					$field = $this->container_exists( $_key );
					return $field;
				}
			}

			return parent::get( $key );
		}
	}
}
