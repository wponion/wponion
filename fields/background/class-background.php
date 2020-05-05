<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\Background' ) ) {
	/**
	 * Class Background
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Background extends Field {

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();

			echo '<div class="wpo-row">';

			if ( false !== $this->data( 'background-color' ) ) {
				$title = ( true === $this->data( 'background-color' ) ) ? __( 'Background Color', 'wponion' ) : $this->data( 'background-color' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'       => 'color_picker',
					'id'         => 'color',
					'wrap_class' => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
					'horizontal' => true,
				) ), $this->value( 'color' ), $this->name() );
			}

			$parts = array(
				'repeat'     => __( 'Repeat', 'wponion' ),
				'attachment' => __( 'Attachment', 'wponion' ),
				'position'   => __( 'Position', 'wponion' ),
				'clip'       => __( 'Clip', 'wponion' ),
				'origin'     => __( 'Origin', 'wponion' ),
				'size'       => __( 'Size', 'wponion' ),
			);

			foreach ( $parts as $id => $title ) {
				if ( false !== $this->data( 'background-' . $id ) ) {
					$title = ( true === $this->data( 'background-' . $id ) ) ? $title : $this->data( 'background-' . $id );
					echo $this->sub_field( $this->handle_args( 'title', $title, array(
						'type'                  => 'select',
						'options'               => $this->get_options( $id ),
						'id'                    => $title,
						'style'                 => 'width:100%;',
						'wrap_class'            => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
						'horizontal'            => true,
						$this->select_framework => $this->data( $this->select_framework ),
					) ), $this->value( $id ), $this->name() );
				}
			}

			if ( false !== $this->data( 'background-image' ) ) {
				$title = ( true === $this->data( 'background-image' ) ) ? __( 'Background Image', 'wponion' ) : $this->data( 'background-image' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'       => 'upload',
					'id'         => 'image',
					'wrap_class' => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
					'horizontal' => true,
				) ), $this->value( 'image' ), $this->name() );
			}
			echo '</div>';
			echo $this->after();
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'background-repeat'     => true,
				'background-attachment' => true,
				'background-position'   => true,
				'background-clip'       => true,
				'background-origin'     => true,
				'background-size'       => true,
				'background-color'      => true,
				'background-image'      => true,
				//'background-gradient'   => false,
				'preview_media'         => false,
				'preview'               => true,
				'preview_height'        => '200px',
			);
		}

		/**
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
		}

		/**
		 * Checks & Updat fields args based on field config.
		 *
		 * @param array $data
		 *
		 * @return array
		 */
		protected function handle_field_args( $data = array() ) {
			$this->select_framework = wponion_validate_select_framework( $data );
			return $data;
		}

		/**
		 * Returns A Major Data.
		 *
		 * @param $type
		 *
		 * @return mixed
		 */
		protected function get_options( $type ) {
			$return = array();
			switch ( $type ) {
				case 'repeat':
					$return = array(
						'no-repeat' => __( 'No Repeat', 'wponion' ),
						'repeat'    => __( 'Repeat All', 'wponion' ),
						'repeat-x'  => __( 'Repeat Horizontally', 'wponion' ),
						'repeat-y'  => __( 'Repeat Vertically', 'wponion' ),
						'inherit'   => __( 'Inherit', 'wponion' ),
					);
					break;
				case 'clip':
				case 'origin':
					$return = array(
						'inherit'     => __( 'Inherit', 'wponion' ),
						'border-box'  => __( 'Border Box', 'wponion' ),
						'content-box' => __( 'Content Box', 'wponion' ),
						'padding-box' => __( 'Padding Box', 'wponion' ),
					);
					break;
				case 'size':
					$return = array(
						'inherit' => __( 'Inherit', 'wponion' ),
						'cover'   => __( 'Cover', 'wponion' ),
						'contain' => __( 'Contain', 'wponion' ),
					);
					break;
				case 'attachment':
					$return = array(
						'fixed'   => __( 'Fixed', 'wponion' ),
						'scroll'  => __( 'Scroll', 'wponion' ),
						'inherit' => __( 'Inherit', 'wponion' ),
					);
					break;
				case 'position':
					$return = array(
						'left top'      => __( 'Left Top', 'wponion' ),
						'left center'   => __( 'Left center', 'wponion' ),
						'left bottom'   => __( 'Left Bottom', 'wponion' ),
						'center top'    => __( 'Center Top', 'wponion' ),
						'center center' => __( 'Center Center', 'wponion' ),
						'center bottom' => __( 'Center Bottom', 'wponion' ),
						'right top'     => __( 'Right Top', 'wponion' ),
						'right center'  => __( 'Right center', 'wponion' ),
						'right bottom'  => __( 'Right Bottom', 'wponion' ),
					);
					break;
			}
			return apply_filters( 'wponion_' . $this->module() . '_background_' . $type, $return, $this->unique(), $this );
		}
	}
}
