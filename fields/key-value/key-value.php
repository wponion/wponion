<?php
/**
 *
 * Initial version created 23-05-2018 / 06:23 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\key_value' ) ) {
	/**
	 * Class key_value
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class key_value extends \WPOnion\Field {
		/**
		 * Renders Key Value Pair HTML.
		 *
		 * @param string $name
		 * @param string $key
		 * @param string $value
		 */
		protected function key_value( $name = '', $key = '', $value = '' ) {
			echo '<div class="wponion-keyvalue-field">';
			echo $this->sub_field( $this->handle_args( 'placeholder', $this->data( 'key_input' ), array(
				'id'         => 'key',
				'type'       => 'text',
				'prefix'     => __( 'Key' ),
				'only_field' => true,
			) ), $key, $name );

			echo $this->sub_field( $this->handle_args( 'placeholder', $this->data( 'value_input' ), array(
				'id'         => 'value',
				'type'       => 'text',
				'prefix'     => __( 'Value' ),
				'only_field' => true,
			) ), $value, $name );

			echo $this->sub_field( $this->handle_args( 'label', $this->data( 'remove_button' ), array(
				'type'       => 'button',
				'label'      => '-',
				'only_field' => true,
				'attributes' => array( 'data-wponion-keyvalue-remove' => 'yes' ),
				'class'      => 'button button-secondary',
			) ), false, $this->unique() );

			echo '</div>';
		}

		/**
		 * Final HTML Output;
		 *
		 * @return mixed;
		 */
		protected function output() {
			echo $this->before();
			$values = ( is_array( $this->value() ) ) ? $this->value() : array();
			$_count = ( count( $values ) === 0 ) ? 1 : count( $values );
			echo '<div class="wponion-keyvalue_wrap" data-wponion-clone-count="' . $_count . '">';
			if ( is_array( $this->value() ) ) {
				foreach ( $values as $i => $value ) {
					echo $this->key_value( $this->name( '[' . $i . ']' ), $value['key'], $value['value'] );
				}
			} else {
				echo $this->key_value( $this->name( '[0]' ), '', '' );
			}
			echo '</div>';

			$this->catch_output( 'start' );
			echo $this->key_value( $this->name( '[{wponionCloneID}]' ) );
			$template = $this->catch_output( 'stop' );

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
				'label'      => __( 'Add +' ),
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
				'add_button'    => __( 'Add +' ),
				'remove_button' => __( '-' ),
				'key_input'     => array(),
				'value_input'   => array(),
				'limit'         => false,
				'error_msg'     => __( 'You Can\'t Add More..' ),
			);
		}

		/**
		 * Loads the required plugins assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			wp_enqueue_script( 'wponion-cloner' );
		}
	}
}
