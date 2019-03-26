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

if ( ! class_exists( 'WPO\Key_Value' ) ) {
	/**
	 * Class Color_Picker
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method add_button()
	 * @method remove_button()
	 * @method limit()
	 * @method error_msg()
	 * @method key_input()
	 * @method value_input()
	 */
	class Key_Value extends Field {
		/**
		 * Color_Group constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'key_value', $id, $title, $args );
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

		/**
		 * @param $input
		 *
		 * @return $this
		 */
		public function set_key_input( $input ) {
			$this['key_input'] = $input;
			return $this;
		}

		/**
		 * @param $input
		 *
		 * @return $this
		 */
		public function set_value_input( $input ) {
			$this['value_input'] = $input;
			return $this;
		}

		/**
		 * @return array
		 */
		protected function defaults() {
			return array(
				'add_button'    => __( 'Add +', 'wponion' ),
				'remove_button' => __( '-', 'wponion' ),
				'key_input'     => array(),
				'value_input'   => array(),
				'limit'         => false,
				'error_msg'     => __( 'You Can\'t Add More..', 'wponion' ),
			);
		}
	}
}
