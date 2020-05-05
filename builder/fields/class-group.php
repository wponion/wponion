<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;


if ( ! class_exists( 'WPO\Fields\Group' ) ) {
	/**
	 * Class Accordion
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 */
	class Group extends Accordion {
		/**
		 * Group constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( $id, $title, $args );
			$this['type'] = 'group';
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function add_button( $button ) {
			$this['add_button'] = $button;
			return $this;
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function remove_button( $button ) {
			$this['remove_button'] = $button;
			return $this;
		}

		/**
		 * @param bool $limit
		 *
		 * @return $this
		 */
		public function limit( $limit = false ) {
			$this['limit'] = $limit;
			return $this;
		}

		/**
		 * @param $error_msg
		 *
		 * @return $this
		 */
		public function error_msg( $error_msg ) {
			$this['error_msg'] = $error_msg;
			return $this;
		}
	}
}
