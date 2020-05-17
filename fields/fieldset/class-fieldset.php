<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\Fieldset' ) ) {
	/**
	 * Class Fieldset
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class Fieldset extends Field {
		/**
		 * Generates Final HTML Output.
		 */
		protected function output() {
			echo $this->before();
			echo ( true !== $this->option( 'only_field' ) ) ? '<div class="wponion-fieldset-wrap wpo-row">' : '';
			if ( $this->has( 'fields' ) ) {
				if ( $this->has( 'heading' ) ) {
					echo $this->sub_field( array(
						'type'    => 'subheading',
						'content' => $this->option( 'heading' ),
					), $this->option( 'heading' ), $this->unique() );
				}

				foreach ( $this->option( 'fields' ) as $field ) {
					echo $this->sub_field( $field, wponion_get_field_value( $field, $this->value() ), $this->name(), false );
				}
			}

			echo ( true !== $this->option( 'only_field' ) ) ? '</div>' : '';
			echo $this->after();
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array(
				'fields'   => array(),
				'heading'  => null,
				'un_array' => false,
			);
		}

		/**
		 * Handles Fields Assets.
		 */
		public function assets() {
		}
	}
}

