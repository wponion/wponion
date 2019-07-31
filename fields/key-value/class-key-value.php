<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Key_Value' ) ) {
	/**
	 * Class Key_Value
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
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
			$return .= '<div class="sortable-handler">' . wponion_icon( 'dashicons dashicons-menu' ) . '</div>';
			$return .= $this->sub_field( $this->handle_args( 'placeholder', $this->data( 'key_input' ), array(
				'id'         => 'key',
				'type'       => 'text',
				'prefix'     => __( 'Key', 'wponion' ),
				'only_field' => true,
			) ), $key, $name );

			$return .= $this->sub_field( $this->handle_args( 'placeholder', $this->data( 'value_input' ), array(
				'id'         => 'value',
				'type'       => 'text',
				'prefix'     => __( 'Value', 'wponion' ),
				'only_field' => true,
			) ), $value, $name );

			$return .= $this->sub_field( $this->handle_args( 'label', $this->data( 'remove_button' ), array(
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
		 * Final HTML Output
		 */
		protected function output() {
			echo $this->before();
			$values = ( wponion_is_array( $this->value() ) ) ? $this->value() : array();
			$values = array_filter( $values );
			$_count = ( count( $values ) === 0 ) ? 1 : count( $values );
			echo '<div class="wponion-keyvalue_wrap" data-wponion-clone-count="' . $_count . '">';
			if ( wponion_is_array( $this->value() ) ) {
				foreach ( $values as $i => $value ) {
					if ( isset( $value['key'] ) && isset( $value['value'] ) ) {
						echo $this->key_value( $this->name( $i ), $value['key'], $value['value'] );
					}
				}
			} else {
				echo $this->key_value( $this->name( '[1]' ), '', '' );
			}
			echo '</div>';

			$template = $this->key_value( $this->name( '[{wponionCloneID}]' ) );

			$error_notice = $this->handle_args( 'content', $this->data( 'error_msg' ), array(
				'type' => 'notice_danger',
			), array( 'only_field' => true ) );

			$this->localize_field( array(
				'html_template' => $template,
				'limit'         => $this->data( 'limit' ),
				'error_msg'     => wponion_add_element( $error_notice, false, false ),
			) );

			echo '<div class="wponion-keyvalue-action-container">';
			echo $this->sub_field( $this->handle_args( 'label', $this->data( 'add_button' ), array(
				'type'       => 'button',
				'label'      => __( 'Add +', 'wponion' ),
				'attributes' => array( 'data-wponion-keyvalue-add' => 'yes' ),
				'only_field' => true,
				'class'      => 'button button-primary',
			) ), false, $this->unique() );
			echo '</div>';
			echo $this->after();
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'add_button'    => __( 'Add +', 'wponion' ),
				'remove_button' => __( '-', 'wponion' ),
				'key_input'     => array(),
				'value_input'   => array(),
				'limit'         => false,
				'sort'          => false,
				'error_msg'     => __( 'You Can\'t Add More..', 'wponion' ),
			);
		}

		/**
		 * Loads the required plugins assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			wp_enqueue_script( 'jquery-ui-sortable' );
		}
	}
}
