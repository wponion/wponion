<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPO\Fields\Button' ) ) {
	/**
	 * Class Button
	 *
	 * @package WPO\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Button extends Field {
		/**
		 * Button constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'button', $id, $title, $args );
		}

		/**
		 * @param string $button_type - Possible Values (button,submit,reset)
		 *
		 * @return $this
		 */
		public function button_type( $button_type = 'button' ) {
			return $this->_set( 'button_type', $button_type );
		}

		/**
		 * @param $label
		 *
		 * @return $this
		 */
		public function label( $label ) {
			return $this->_set( 'label', $label );
		}
	}
}
