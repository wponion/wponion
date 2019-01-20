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
		 * Stores All Fields.
		 *
		 * @var bool
		 * @access
		 */
		protected $fields = false;

		/**
		 * Stores All Containers.
		 *
		 * @var bool
		 * @access
		 */
		protected $containers = false;

		/**
		 * Builder constructor.
		 */
		public function __construct() {
			unset( $this->plugin_id );
			unset( $this->fields );
			unset( $this->module );
			unset( $this->unique );
			unset( $this->array_var );
			$this->settings = array();
		}

		/**
		 * Returns Args Based on the configs.
		 *
		 * @return array
		 */
		public function get() {
			if ( $this->has_fields() ) {
				return $this->fields();
			}
			if ( $this->has_containers() ) {
				return $this->containers();
			}
			return array();
		}

		/**
		 * @param $instance
		 *
		 * @return bool|false|mixed|\WPO\Builder|\WPO\Container|\WPO\Field
		 * @throws \Exception
		 */
		public function add( $instance ) {
			if ( $instance instanceof \WPO\Container ) {
				return $this->container( $instance );
			}
			if ( $instance instanceof \WPO\Field ) {
				return $this->field( $instance );
			}
		}
	}
}
