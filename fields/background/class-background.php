<?php
/**
 *
 * Initial version created 20-07-2018 / 05:54 AM
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

if ( ! class_exists( '\WPOnion\Field\Background' ) ) {
	/**
	 * Class Background
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Background extends \WPOnion\Field {
		protected function output() {
			echo $this->before();

			echo '<div class="row">';
			if ( false !== $this->data( 'background-color' ) ) {
				$title = ( true === $this->data( 'background-color' ) ) ? __( 'Background Color', 'wponion' ) : $this->data( 'background-color' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'       => 'color_picker',
					'id'         => 'color',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal' => true,
				) ), $this->value( 'color' ), $this->name() );
			}

			if ( false !== $this->data( 'background-repeat' ) ) {
				$title = ( true === $this->data( 'background-repeat' ) ) ? __( 'Repeat', 'wponion' ) : $this->data( 'background-repeat' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'                  => 'select',
					'options'               => $this->get_options( 'repeat' ),
					'id'                    => 'repeat',
					'style'                 => 'width:100%;',
					'wrap_class'            => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal'            => true,
					$this->select_framework => $this->data( $this->select_framework ),
				) ), $this->value( 'repeat' ), $this->name() );
			}

			if ( false !== $this->data( 'background-attachment' ) ) {
				$title = ( true === $this->data( 'background-attachment' ) ) ? __( 'Attachment', 'wponion' ) : $this->data( 'background-attachment' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'                  => 'select',
					'options'               => $this->get_options( 'attachment' ),
					'id'                    => 'attachment',
					'style'                 => 'width:100%;',
					'wrap_class'            => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal'            => true,
					$this->select_framework => $this->data( $this->select_framework ),
				) ), $this->value( 'attachment' ), $this->name() );
			}

			if ( false !== $this->data( 'background-position' ) ) {
				$title = ( true === $this->data( 'background-position' ) ) ? __( 'Position', 'wponion' ) : $this->data( 'background-position' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'                  => 'select',
					'options'               => $this->get_options( 'position' ),
					'id'                    => 'position',
					'style'                 => 'width:100%;',
					'wrap_class'            => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal'            => true,
					$this->select_framework => $this->data( $this->select_framework ),
				) ), $this->value( 'position' ), $this->name() );
			}

			if ( false !== $this->data( 'background-clip' ) ) {
				$title = ( true === $this->data( 'background-clip' ) ) ? __( 'Clip', 'wponion' ) : $this->data( 'background-clip' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'                  => 'select',
					'options'               => $this->get_options( 'clip' ),
					'id'                    => 'clip',
					'style'                 => 'width:100%;',
					'wrap_class'            => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal'            => true,
					$this->select_framework => $this->data( $this->select_framework ),
				) ), $this->value( 'clip' ), $this->name() );
			}

			if ( false !== $this->data( 'background-origin' ) ) {
				$title = ( true === $this->data( 'background-origin' ) ) ? __( 'Origin', 'wponion' ) : $this->data( 'background-origin' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'                  => 'select',
					'options'               => $this->get_options( 'origin' ),
					'id'                    => 'origin',
					'style'                 => 'width:100%;',
					'wrap_class'            => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal'            => true,
					$this->select_framework => $this->data( $this->select_framework ),
				) ), $this->value( 'origin' ), $this->name() );
			}

			if ( false !== $this->data( 'background-size' ) ) {
				$title = ( true === $this->data( 'background-size' ) ) ? __( 'Size', 'wponion' ) : $this->data( 'background-size' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'                  => 'select',
					'options'               => $this->get_options( 'size' ),
					'id'                    => 'size',
					'style'                 => 'width:100%;',
					'wrap_class'            => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal'            => true,
					$this->select_framework => $this->data( $this->select_framework ),
				) ), $this->value( 'size' ), $this->name() );
			}

			if ( false !== $this->data( 'background-image' ) ) {
				$title = ( true === $this->data( 'background-image' ) ) ? __( 'Background Image', 'wponion' ) : $this->data( 'background-image' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'       => 'upload',
					'id'         => 'image',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal' => true,
				) ), $this->value( 'image' ), $this->name() );
			}
			echo '</div>';
			echo $this->after();
		}

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

		public function field_assets() {
		}

		public function handle_field_args( $data = array() ) {
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

			return $this->_filter( 'background_' . $type, $return );
		}
	}
}
