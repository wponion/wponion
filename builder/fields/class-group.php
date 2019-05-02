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

if ( ! class_exists( 'WPO\Group' ) ) {
	/**
	 * Class Accordion
	 *
	 * @package WPO
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
		public function set_add_button( $button ) {
			$this['add_button'] = $button;
			return $this;
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function set_remove_button( $button ) {
			$this['remove_button'] = $button;
			return $this;
		}

		/**
		 * @param bool $limit
		 *
		 * @return $this
		 */
		public function set_limit( $limit = false ) {
			$this['limit'] = $limit;
			return $this;
		}

		/**
		 * @param $error_msg
		 *
		 * @return $this
		 */
		public function set_error_msg( $error_msg ) {
			$this['error_msg'] = $error_msg;
			return $this;
		}
	}
}
