<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\Textarea' ) ) {
	/**
	 * Class Textarea
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class Textarea extends text {
		/**
		 * Renders Element Html.
		 */
		public function element_html() {
			return '<textarea ' . $this->_input_attributes() . '>' . $this->value() . '</textarea>';
		}

		/**
		 * Checks & Update fields args based on field config.
		 */
		protected function handle_arguments() {
			parent::handle_arguments();

			if ( $this->has( 'rows' ) ) {
				$this->set_option( 'attributes/row', $this->option( 'rows' ) );
			}

			if ( $this->has( 'cols' ) ) {
				$this->set_option( 'attributes/cols', $this->option( 'cols' ) );
			}
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function defaults() {
			return $this->parse_args( parent::defaults(), array(
				'rows' => 5,
				'cols' => 5,
			) );
		}
	}
}
