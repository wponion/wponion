<?php

namespace WPO\Fields;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

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
	}
}
