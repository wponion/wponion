<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Icon_Picker
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Icon_Picker extends Field {
	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		return $this->before() . $this->render_input() . ' ' . $this->render_value() . ' ' . $this->render_buttons() . $this->after();
	}

	/**
	 * Renders It Sub Field INPUT.
	 *
	 * @return mixed
	 */
	protected function render_input() {
		return $this->sub_field( array(
			'type'       => 'text',
			'only_field' => true,
			'class'      => ( $this->has( 'show_input' ) ) ? 'wponion-icon-picker-input' : 'wponion-icon-picker-input hidden',
		), $this->value(), $this->name() );
	}

	/**
	 * Renders Icon HTML.
	 *
	 * @return string
	 */
	protected function render_value() {
		return '<span class="wponion-icon-preview">' . wponion_icon( $this->value() ) . '</span>';
	}

	/**
	 * Returns all required values to use in js.
	 *
	 * @return array
	 */
	protected function js_args() {
		return array(
			'popup_tooltip' => ( false === $this->option( 'icon_tooltip' ) ) ? 'false' : $this->option( 'icon_tooltip' ),
			'enabled'       => $this->option( 'enabled' ),
			'disabled'      => $this->option( 'disabled' ),
			'group_icons'   => $this->option( 'group_icons' ),
		);
	}

	/**
	 * Renders IT Subfield buttons.
	 *
	 * @return string
	 */
	protected function render_buttons() {
		/** @var \WPO\Fields\Button $arg */
		$arg        = wpo_field( 'button' )
			->field_class( array( 'button', 'button-primary' ) )
			->attribute( 'data-wponion-jsid', $this->js_field_id() )
			->only_field( true )
			->button_type( 'button' )
			->label( __( 'Add Icon', 'wponion' ) );
		$add_btn    = clone $arg;
		$remove_btn = clone $arg;
		$add_btn->id( 'btnadd' )->attribute( 'data-wponion-iconpicker-add', 'yes' );
		$remove_btn->id( 'btnremove' )->label( __( 'Remove Icon', 'wponion' ) )->field_class( array(
			'button',
			'button-secondary',
		) )->attribute( 'data-wponion-iconpicker-remove', 'yes' );
		$return = $this->sub_field( $this->handle_args( 'label', $this->option( 'add_button' ), $add_btn ), false, $this->unique() );
		$return .= $this->sub_field( $this->handle_args( 'label', $this->option( 'remove_button' ), $remove_btn ), false, $this->unique() );
		return $return;
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'add_button'    => __( 'Add Icon', 'wponion' ),
			'remove_button' => __( 'Remove Icon', 'wponion' ),
			'show_input'    => true,
			'icon_tooltip'  => array(
				'placement' => 'bottom',
				'arrow'     => true,
			),
			'enabled'       => true,
			'disabled'      => false,
			'group_icons'   => false,
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}
}
