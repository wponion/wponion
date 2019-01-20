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
	class Builder extends Helper\Base {
		/**
		 * Builder constructor.
		 */
		public function __construct() {
			unset( $this->plugin_id );
			unset( $this->fields );
			unset( $this->module );
			$this->settings = array();
		}
	}
}
