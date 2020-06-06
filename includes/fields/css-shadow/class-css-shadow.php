<?php

namespace WPOnion\Field;

use WPOnion\Field;

/**
 * Class CSS_Shadow
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class CSS_Shadow extends Field {
	/**
	 * Field's Custom Wrap Class.
	 *
	 * @return string
	 */
	protected function wrap_class() {
		return 'wponion-has-nested-fields';
	}

	/**
	 * @param string $id
	 * @param string $title
	 * @param string $type
	 *
	 * @return \WPO\Field
	 */
	protected function sh_field( $id, $title, $type = 'number' ) {
		return wpo_field( $type, $id, $title, array( 'surfix' => 'px' ) )
			->attribute( 'data-css-id', $id )
			->horizontal( true )
			->wrap_class( 'wpo-col-xs-12 wpo-col-md-2' );
	}

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$name = $this->name();

		$this->html( '<div class="wpo-row wponion-row">' )
			->html( $this->sub_field( $this->sh_field( 'h-shadow', __( 'Horizontal Length', 'wponion' ) ), $this->value( 'h-shadow' ), $name ) )
			->html( $this->sub_field( $this->sh_field( 'v-shadow', __( 'Vertical Length', 'wponion' ) ), $this->value( 'v-shadow' ), $name ) )
			->html( $this->sub_field( $this->sh_field( 'blur', __( 'Blur Radius', 'wponion' ) ), $this->value( 'blur' ), $name ) );

		if ( 'box' === $this->option( 'shadow_type' ) ) {
			$this->html( $this->sub_field( $this->sh_field( 'spread', __( 'Spread Radius', 'wponion' ) ), $this->value( 'spread' ), $name ) );
		}

		$this->html( $this->sub_field( $this->sh_field( 'color', __( 'Shadow Color', 'wponion' ), 'color_picker' ), $this->value( 'color' ), $name ) );

		if ( 'box' === $this->option( 'shadow_type' ) ) {
			$this->html( $this->sub_field( $this->sh_field( 'inset', __( 'Inset ?', 'wponion' ), 'switcher' ), $this->value( 'inset' ), $name ) );
		}

		$this->html( '</div>' );

		if ( $this->option( 'preview' ) ) {
			$class = ( 'box' === $this->option( 'shadow_type' ) ) ? 'box-shadow' : '';
			$text  = ( $this->option( 'preview' ) ) ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' : $this->option( 'preview' );
			$this->html( "<div class=\"wpo-row wponion-row\"> <div class=\"wpo-col-xs-12 wpo-col-md-6 css-shadow-preview ${class}\"> <p>${text}</p> </div> </div>" );
		}

		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * @return array
	 */
	protected function js_args() {
		return array( 'shadow_type' => $this->option( 'shadow_type' ) );
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'shadow_type' => 'text',
			'preview'     => true,
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}
}
