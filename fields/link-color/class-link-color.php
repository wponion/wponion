<?php

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

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
		 * Returns Custom Field Group Class.
		 *
		 * @return string
		 */
		protected function field_wrap_class() {
			return ' wponion-element-color_group ';
		}

		/**
		 * Final HTML Output
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
		 * Returns all fields default.
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
