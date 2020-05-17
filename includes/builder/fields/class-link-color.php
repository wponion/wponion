<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Link_Color' ) ) {
	/**
	 * Class Link_Color
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
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
		public function color( $field = false ) {
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
		public function hover( $field = false ) {
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
		public function active( $field = false ) {
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
		public function visited( $field = false ) {
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
		public function foucs( $field = false ) {
			$this['foucs'] = $field;
			return $this;
		}

	}
}
