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
			$this->_set( 'type', 'group' );
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function add_button( $button ) {
			return $this->_set( 'add_button', $button );
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function remove_button( $button ) {
			return $this->_set( 'remove_button', $button );
		}

		/**
		 * @param bool $limit
		 *
		 * @return $this
		 */
		public function limit( $limit = false ) {
			return $this->_set( 'limit', $limit );
		}

		/**
		 * @param $error_msg
		 *
		 * @return $this
		 */
		public function error_msg( $error_msg ) {
			return $this->_set( 'error_msg', $error_msg );
		}
	}
}
