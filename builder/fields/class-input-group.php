<?php

namespace WPO\Fields;

use WPO\Helper\Field\Nested_Fields;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\Input_Group' ) ) {
	/**
	 * Class Input_Group
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Input_Group extends Nested_Fields {
		/**
		 * Input_Group constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'input_group', $id, $title, $args );
		}
	}
}
