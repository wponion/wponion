<?php
/**
 *
 * Initial version created 21-05-2018 / 06:45 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Field_group' ) ) {
	class WPOnion_Field_group extends WPOnion_Field_accordion {
		protected $loop_count   = '{wponionCloneID}';
		protected $is_js_sample = false;
		protected $loop_value   = array();

		protected function init_subfields() {
			return false;
		}

		protected function render_single_field( $field ) {
			$value = ( false === $this->is_js_sample ) ? _wponion_get_field_value( $field, $this->loop_value ) : null;
			echo $this->sub_field( $field, $value, $this->name( '[' . $this->loop_count . ']' ), false );
		}

		protected function output() {
			echo $this->before();

			$this->is_js_sample = true;
			$this->catch_output( 'start' );
			$this->render_fields();
			$template           = $this->catch_output( 'stop' );
			$this->is_js_sample = false;
			$this->loop_count   = 0;
			$default_title      = $this->data( 'accordion_title' );
			echo '<div class="wponion-group-wrap" data-wponion-clone-count="0">';
			if ( is_array( $this->value ) ) {
				foreach ( $this->value as $i => $value ) {
					$this->loop_count               = $this->loop_count + 1;
					$this->loop_value               = $value;
					$this->field['accordion_title'] = ( ! empty( current( $value ) ) ) ? current( $value ) : $default_title;
					$this->render_fields();
				}
			}
			echo '</div>';
			echo '<button type="button" class="button button-primary wponion-add-group" data-wponion-jsid="' . $this->js_field_id() . '">' . $this->data( 'button_title' ) . '</button>';
			echo $this->after();


			$this->localize_field( array( 'group_template' => $template ) );
		}

		protected function after_accordion() {
			echo '<div class="wponion-group-action">';
			echo '<button class="btn btn-danger btn-sm wponion-group-remove" type="button">' . $this->data( 'remove_button_title' ) . '</button>';
			echo '</div>';
		}

		protected function js_field_args() {
			return array(
				'limit'               => $this->data( 'limit' ),
				'error_msg'           => $this->data( 'error_msg' ),
				'remove_button_title' => $this->data( 'remove_button_title' ),
			);
		}

		protected function field_default() {
			return $this->parse_args( array(
				'button_title'        => __( 'Add New' ),
				'remove_button_title' => __( 'Remove' ),
				'limit'               => 4,
				'error_msg'           => __( 'You Can\'t Add More..' ),
			), parent::field_default() );
		}

		public function field_assets() {
			wp_enqueue_script( 'wponion-cloner' );
			wp_enqueue_script( 'jquery-ui-sortable' );
			parent::field_assets();
		}
	}
}