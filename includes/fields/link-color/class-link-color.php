<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Color_Picker
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Link_Color extends Color_Group {

	/**
	 * Field's Custom Wrap Class.
	 *
	 * @return string
	 */
	protected function wrap_class() {
		return 'wponion-element-color_group';
	}

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$options = array();

		foreach ( $this->get_options() as $key => $title ) {
			if ( false !== $this->option( $key ) ) {
				$options[ $key ] = ( true === $this->option( $key ) ) ? $title : $this->option( $key );
			}
		}

		$this->set_option( 'options', $options );
		return parent::output();
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
	 * @return array
	 */
	protected function defaults() {
		return $this->parse_args( array( 'rgba' => false ), $this->get_options() );
	}
}
