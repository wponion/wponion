<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Key_Value
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Key_Value extends Field {
	/**
	 * Renders Key Value Pair HTML.
	 *
	 * @param string $name
	 * @param string $key
	 * @param string $value
	 *
	 * @return string
	 */
	protected function key_value( $name = '', $key = '', $value = '' ) {
		$return = '<div class="wponion-keyvalue-field">';
		$return .= '<div class="sortable-handler">' . wponion_icon( 'wpoic-menu' ) . '</div>';
		$return .= $this->sub_field( $this->handle_args( 'placeholder', $this->option( 'key_input' ), array(
			'id'         => 'key',
			'type'       => 'text',
			'prefix'     => __( 'Key', 'wponion' ),
			'only_field' => true,
		) ), $key, $name );
		$return .= $this->sub_field( $this->handle_args( 'placeholder', $this->option( 'value_input' ), array(
			'id'         => 'value',
			'type'       => 'text',
			'prefix'     => __( 'Value', 'wponion' ),
			'only_field' => true,
		) ), $value, $name );
		$return .= $this->sub_field( $this->handle_args( 'label', $this->option( 'remove_button' ), array(
			'type'       => 'button',
			'label'      => '-',
			'only_field' => true,
			'attributes' => array( 'data-wponion-keyvalue-remove' => 'yes' ),
			'class'      => 'button button-secondary',
		) ), false, $this->unique() );
		$return .= '</div>';
		return $return;
	}

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$values = ( wponion_is_array( $this->value() ) ) ? $this->value() : array();
		$values = array_filter( $values );
		$_count = ( count( $values ) === 0 ) ? 1 : count( $values );
		$this->html( "<div class=\"wponion-keyvalue_wrap\" data-wponion-clone-count=\"${_count}\">" );
		if ( wponion_is_array( $this->value() ) ) {
			foreach ( $values as $i => $value ) {
				if ( isset( $value['key'] ) && isset( $value['value'] ) ) {
					$this->html( $this->key_value( $this->name( $i ), $value['key'], $value['value'] ) );
				}
			}
		} else {
			$this->html( $this->key_value( $this->name( '1' ), '', '' ) );
		}

		$this->html( '</div>' );
		$this->html( '<div class="wponion-keyvalue-action-container">' );

		$this->html( $this->sub_field( $this->handle_args( 'label', $this->option( 'add_button' ), array(
			'type'       => 'button',
			'label'      => __( 'Add +', 'wponion' ),
			'attributes' => array( 'data-wponion-keyvalue-add' => 'yes' ),
			'only_field' => true,
			'class'      => 'button button-primary',
		) ), false, $this->unique() ) );
		$this->html( '</div>' );
		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * This function is used to set any args that requires in javascript for the current field.
	 *
	 * @return array
	 */
	protected function js_args() {
		$error_notice = $this->handle_args( 'content', $this->option( 'error_msg' ), array(
			'type' => 'notice_danger',
		), array( 'only_field' => true ) );
		return array(
			'html_template' => $this->key_value( $this->name( '{wponionCloneID}' ) ),
			'limit'         => $this->option( 'limit' ),
			'error_msg'     => wponion_add_element( $error_notice, false, false ),
		);
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			// translators: 1. Add Icon
			'add_button'    => sprintf( __( 'Add %s', 'wponion' ), wpo_icon( 'wpoic-plus-circle' ) ),
			'remove_button' => wpo_icon( 'wpoic-delete' ),
			'key_input'     => array(),
			'value_input'   => array(),
			'limit'         => false,
			'sort'          => false,
			'error_msg'     => __( 'You Can\'t Add More..', 'wponion' ),
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
		wp_enqueue_script( 'jquery-ui-sortable' );
	}
}
