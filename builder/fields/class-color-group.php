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

if ( ! class_exists( 'WPO\Color_Group' ) ) {
	/**
	 * Class Color_Group
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method rgba()
	 */
	class Color_Group extends Field {
		/**
		 * Color_Group constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'color_group', $id, $title, $args );
		}

		/**
		 * @param bool $is_rgba
		 *
		 * @return $this
		 */
		public function set_rgba( $is_rgba = true ) {
			$this['rgba'] = $is_rgba;
			return $this;
		}
	}
}
