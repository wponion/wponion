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

if ( ! class_exists( 'WPO\Link_Color' ) ) {
	/**
	 * Class Link_Color
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 * @method color()
	 * @method hover()
	 * @method active()
	 * @method visited()
	 * @method foucs()
	 */
	class Link_Color extends Color_Group {
		/**
		 * Link_Color constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( $id, $title, $args );
			$this['type'] = 'link_color';
		}

		/**
		 * Acceptable Arguments :
		 * true / false / string / \WPO\Color_Picker Instance.
		 *
		 * @param bool $field
		 *
		 * @return $this
		 */
		public function set_color( $field = false ) {
			$this['color'] = $field;
			return $this;
		}

		/**
		 * Acceptable Arguments :
		 * true / false / string / \WPO\Color_Picker Instance.
		 *
		 * @param bool $field
		 *
		 * @return $this
		 */
		public function set_hover( $field = false ) {
			$this['hover'] = $field;
			return $this;
		}

		/**
		 * Acceptable Arguments :
		 * true / false / string / \WPO\Color_Picker Instance.
		 *
		 * @param bool $field
		 *
		 * @return $this
		 */
		public function set_active( $field = false ) {
			$this['active'] = $field;
			return $this;
		}

		/**
		 * Acceptable Arguments :
		 * true / false / string / \WPO\Color_Picker Instance.
		 *
		 * @param bool $field
		 *
		 * @return $this
		 */
		public function set_visited( $field = false ) {
			$this['visited'] = $field;
			return $this;
		}

		/**
		 * Acceptable Arguments :
		 * true / false / string / \WPO\Color_Picker Instance.
		 *
		 * @param bool $field
		 *
		 * @return $this
		 */
		public function set_foucs( $field = false ) {
			$this['foucs'] = $field;
			return $this;
		}

	}
}
