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

use WPO\Helper\Array_Helper;

if ( ! class_exists( 'WPO\Builder' ) ) {
	/**
	 * Class Builder
	 *
	 * @package WPOnion\Builder
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Builder extends Array_Helper {
		/**
		 * Builder constructor.
		 */
		public function __construct() {
			unset( $this->plugin_id );
			unset( $this->fields );
			unset( $this->module );
			$this->settings = array();
		}

		/**
		 * @param $data
		 *
		 * @return $this
		 */
		public function add( $data ) {
			if ( $data instanceof Container || $data instanceof Field ) {
				$this[ $data->unique() ] = $data;
			}
			return $this;
		}
	}
}
