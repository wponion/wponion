<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\Link_Color' ) ) {
	/**
	 * Class Color_Picker
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Link_Color extends Color_Group {

		/**
		 * Field's Custom Wrap Class.
		 *
		 * @return string
		 */
		protected function field_wrap_class() {
			return ' wponion-element-color_group ';
		}

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			$options = array();

			foreach ( $this->get_options() as $key => $title ) {
				if ( false !== $this->data( $key ) ) {
					$options[ $key ] = ( true === $this->data( $key ) ) ? $title : $this->data( $key );
				}
			}

			$this->field['options'] = $options;
			echo parent::output();
		}

		/**
		 * Default Link Color Elements.
		 *
		 * @return array
		 */
		protected function get_options() {
			return array(
				'color'   => __( 'Color', 'wponion' ),
				'hover'   => __( 'Hover', 'wponion' ),
				'active'  => __( 'Active', 'wponion' ),
				'visited' => __( 'Visited', 'wponion' ),
				'foucs'   => __( 'Focus', 'wponion' ),
			);
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return $this->parse_args( array(
				'rgba' => false,
			), $this->get_options() );
		}
	}
}
