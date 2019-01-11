<?php
/**
 *
 * Initial version created 23-05-2018 / 04:54 PM
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

if ( ! class_exists( '\WPOnion\Field\Gallery' ) ) {
	/**
	 * Class gallery
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Gallery extends image {
		/**
		 * Final HTML Output
		 */
		protected function output() {
			echo $this->before();
			$add_show = ( ! empty( $this->value() ) ) ? 'style="display:none;"' : false;

			echo '<input type="hidden" id="image_id" value="' . $this->value() . '" name="' . $this->name() . '"/>';
			$ex_class = ( true === $this->data( 'sort' ) ) ? 'gallery-sortable' : 'gallery-non-sortable';
			echo '<div class="wponion-image-preview ' . $ex_class . '" id="wponion-image-preview' . $this->js_field_id() . '">';
			if ( ! empty( $this->value() ) ) {
				$ids = explode( ',', $this->value() );
				if ( ! empty( $ids ) ) {
					foreach ( $ids as $image ) {
						$this->show_image( $image );
					}
				}
			}

			echo '</div>';
			echo '<div class="wponion-gallery-actions">';
			echo $this->button( 'add' );
			echo $this->button( 'edit' );
			echo $this->button( 'clear' );
			echo '</div>';
			$this->style();
			echo $this->after();
		}

		/**
		 * Renders its sub fields (Only Button).
		 *
		 * @param $type
		 *
		 * @return mixed
		 */
		protected function button( $type ) {
			$button = array();
			if ( 'add' === $type ) {
				$button = $this->handle_args( 'label', $this->data( 'add_button' ), array(
					'button_type' => 'button',
					'type'        => 'button',
					'label'       => __( 'Add Gallery' ),
					'class'       => 'button button-primary',
				), array(
					'only_field' => true,
					'attributes' => array(
						'data-wponion-gallery-add' => 'yes',
					),
				) );
			} elseif ( 'edit' === $type ) {
				$button = $this->handle_args( 'label', $this->data( 'edit_button' ), array(
					'button_type' => 'button',
					'type'        => 'button',
					'label'       => __( 'Edit Gallery' ),
					'class'       => 'button button-secondary',
				), array(
					'only_field' => true,
					'attributes' => array(
						'data-wponion-gallery-edit' => 'yes',
					),
				) );
			} elseif ( 'clear' === $type ) {
				$button = $this->handle_args( 'label', $this->data( 'remove_button' ), array(
					'button_type' => 'button',
					'type'        => 'button',
					'label'       => __( 'Edit Gallery' ),
					'class'       => 'button button-secondary',
				), array(
					'only_field' => true,
					'attributes' => array(
						'data-wponion-gallery-clear' => 'yes',
					),
				) );
			}

			return $this->sub_field( $button, false, $this->unique(), false );
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'add_button'    => __( 'Create Gallery' ),
				'edit_button'   => __( 'Edit Gallery' ),
				'size'          => 100,
				'sort'          => true,
				'remove_button' => __( 'Clear Gallery' ),
			);
		}

		/**
		 * Returns all required values to use in js.
		 *
		 * @return array
		 */
		protected function js_field_args() {
			$this->catch_output( 'start' );
			$this->show_image( false, null );
			$html = $this->catch_output( 'stop' );
			return array(
				'html_template' => $html,
			);
		}

		/**
		 * Loads the required plugins assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			wp_enqueue_media();
			if ( $this->has( 'sort' ) && true == $this->data( 'sort' ) ) {
				wp_enqueue_script( 'jquery-ui-sortable' );
			}
		}
	}
}
