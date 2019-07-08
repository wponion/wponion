<?php

namespace WPO\Fields;

use WPO\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\Color_Group' ) ) {
	/**
	 * Class Color_Group
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method get_rgba()
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
		public function rgba( $is_rgba = true ) {
			$this['rgba'] = $is_rgba;
			return $this;
		}
	}
}
