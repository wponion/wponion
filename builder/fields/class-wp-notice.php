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

if ( ! class_exists( 'WPO\WP_Notice' ) ) {
	/**
	 * Class WP_Notice
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method get_large()
	 * @method get_alt()
	 */
	class WP_Notice extends Notice {
		/**
		 * WP_Notice constructor.
		 *
		 * @param bool  $content
		 * @param bool  $id
		 * @param array $args
		 */
		public function __construct( $content = false, $id = false, $args = array() ) {
			parent::__construct( $content, $id, $args );
			$this['type'] = 'wp_notice';
		}

		/**
		 * @param bool $large
		 *
		 * @return $this
		 */
		public function large( $large = false ) {
			$this['large'] = $large;
			return $this;
		}

		/**
		 * @param bool $alt
		 *
		 * @return $this
		 */
		public function alt( $alt = false ) {
			$this['alt'] = $alt;
			return $this;
		}
	}
}
