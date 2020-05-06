<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

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
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			echo '<input type="hidden" id="image_id" value="' . $this->value() . '" name="' . $this->name() . '"/>';
			$ex_class = ( true === $this->data( 'sort' ) ) ? 'gallery-sortable' : 'gallery-non-sortable';
			echo '<div class="wponion-image-preview ' . $ex_class . '" id="wponion-image-preview' . $this->js_field_id() . '">';
			if ( ! empty( $this->value() ) ) {
				$ids = explode( ',', $this->value() );
				if ( ! empty( $ids ) ) {
					foreach ( $ids as $image ) {
						echo $this->show_image( $image );
					}
				}
			}

			echo '</div>';
			echo '<div class="wponion-gallery-actions">';
			echo $this->button( 'add' );
			echo $this->button( 'edit' );
			echo $this->button( 'clear' );
			echo '</div>';
			echo $this->style();
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
					'label'       => __( 'Add Gallery', 'wponion' ),
					'class'       => 'button button-primary',
				), array(
					'only_field' => true,
					'attributes' => array( 'data-wponion-gallery-add' => 'yes' ),
				) );
			} elseif ( 'edit' === $type ) {
				$button = $this->handle_args( 'label', $this->data( 'edit_button' ), array(
					'button_type' => 'button',
					'type'        => 'button',
					'label'       => __( 'Edit Gallery', 'wponion' ),
					'class'       => 'button button-secondary',
				), array(
					'only_field' => true,
					'attributes' => array( 'data-wponion-gallery-edit' => 'yes' ),
				) );
			} elseif ( 'clear' === $type ) {
				$button = $this->handle_args( 'label', $this->data( 'remove_button' ), array(
					'button_type' => 'button',
					'type'        => 'button',
					'label'       => __( 'Edit Gallery', 'wponion' ),
					'class'       => 'button button-secondary',
				), array(
					'only_field' => true,
					'attributes' => array( 'data-wponion-gallery-clear' => 'yes' ),
				) );
			}

			return $this->sub_field( $button, false, $this->unique(), false );
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'add_button'    => __( 'Create Gallery', 'wponion' ),
				'edit_button'   => __( 'Edit Gallery', 'wponion' ),
				'size'          => 100,
				'sort'          => true,
				'remove_button' => __( 'Clear Gallery', 'wponion' ),
			);
		}

		/**
		 * Returns all required values to use in js.
		 *
		 * @return array
		 */
		protected function js_field_args() {
			return array( 'html_template' => $this->show_image( false, null ) );
		}

		/**
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			wp_enqueue_media();
			if ( $this->has( 'sort' ) && true === $this->data( 'sort' ) ) {
				wp_enqueue_script( 'jquery-ui-sortable' );
			}
		}
	}
}
