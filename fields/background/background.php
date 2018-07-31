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

if ( ! class_exists( '\WPOnion\Field\background' ) ) {
	class background extends \WPOnion\Field {
		protected function output() {
			echo $this->before();

			if ( false !== $this->data( 'background-color' ) ) {
				$title = ( true === $this->data( 'background-color' ) ) ? __( 'Background Color' ) : $this->data( 'background-color' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type' => 'color_picker',
					'id'   => 'color',
				) ), $this->value( 'color' ), $this->name() );
			}

			if ( false !== $this->data( 'background-image' ) ) {
				$title = ( true === $this->data( 'background-image' ) ) ? __( 'Background Image' ) : $this->data( 'background-image' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type' => 'upload',
					'id'   => 'image',
				) ), $this->value( 'image' ), $this->name() );
			}

			if ( false !== $this->data( 'background-repeat' ) ) {
				$title = ( true === $this->data( 'background-repeat' ) ) ? __( 'Repeat' ) : $this->data( 'background-repeat' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'                  => 'select',
					'options'               => $this->get_options( 'repeat' ),
					'id'                    => 'repeat',
					'style'                 => 'width:100%;',
					$this->select_framework => $this->data( $this->select_framework ),
				) ), $this->value( 'repeat' ), $this->name() );
			}

			if ( false !== $this->data( 'background-attachment' ) ) {
				$title = ( true === $this->data( 'background-attachment' ) ) ? __( 'Attachment' ) : $this->data( 'background-attachment' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'                  => 'select',
					'options'               => $this->get_options( 'attachment' ),
					'id'                    => 'attachment',
					'style'                 => 'width:100%;',
					$this->select_framework => $this->data( $this->select_framework ),
				) ), $this->value( 'attachment' ), $this->name() );
			}

			if ( false !== $this->data( 'background-position' ) ) {
				$title = ( true === $this->data( 'background-position' ) ) ? __( 'Position' ) : $this->data( 'background-position' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'                  => 'select',
					'options'               => $this->get_options( 'position' ),
					'id'                    => 'position',
					'style'                 => 'width:100%;',
					$this->select_framework => $this->data( $this->select_framework ),
				) ), $this->value( 'position' ), $this->name() );
			}

			if ( false !== $this->data( 'background-clip' ) ) {
				$title = ( true === $this->data( 'background-clip' ) ) ? __( 'Clip' ) : $this->data( 'background-clip' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'                  => 'select',
					'options'               => $this->get_options( 'clip' ),
					'id'                    => 'clip',
					'style'                 => 'width:100%;',
					$this->select_framework => $this->data( $this->select_framework ),
				) ), $this->value( 'clip' ), $this->name() );
			}

			if ( false !== $this->data( 'background-origin' ) ) {
				$title = ( true === $this->data( 'background-origin' ) ) ? __( 'Origin' ) : $this->data( 'background-origin' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'                  => 'select',
					'options'               => $this->get_options( 'origin' ),
					'id'                    => 'origin',
					'style'                 => 'width:100%;',
					$this->select_framework => $this->data( $this->select_framework ),
				) ), $this->value( 'origin' ), $this->name() );
			}

			if ( false !== $this->data( 'background-size' ) ) {
				$title = ( true === $this->data( 'background-size' ) ) ? __( 'Size' ) : $this->data( 'background-size' );
				echo $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'                  => 'select',
					'options'               => $this->get_options( 'size' ),
					'id'                    => 'size',
					'style'                 => 'width:100%;',
					$this->select_framework => $this->data( $this->select_framework ),
				) ), $this->value( 'size' ), $this->name() );
			}

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
			// TODO: Implement field_assets() method.
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
						'no-repeat' => __( 'No Repeat' ),
						'repeat'    => __( 'Repeat All' ),
						'repeat-x'  => __( 'Repeat Horizontally' ),
						'repeat-y'  => __( 'Repeat Vertically' ),
						'inherit'   => __( 'Inherit' ),
					);
					break;
				case 'clip':
				case 'origin':
					$return = array(
						'inherit'     => __( 'Inherit' ),
						'border-box'  => __( 'Border Box' ),
						'content-box' => __( 'Content Box' ),
						'padding-box' => __( 'Padding Box' ),
					);
					break;
				case 'size':
					$return = array(
						'inherit' => __( 'Inherit' ),
						'cover'   => __( 'Cover' ),
						'contain' => __( 'Contain' ),
					);
					break;
				case 'attachment':
					$return = array(
						'fixed'   => __( 'Fixed' ),
						'scroll'  => __( 'Scroll' ),
						'inherit' => __( 'Inherit' ),
					);
					break;
				case 'position':
					$return = array(
						'left top'      => __( 'Left Top' ),
						'left center'   => __( 'Left center' ),
						'left bottom'   => __( 'Left Bottom' ),
						'center top'    => __( 'Center Top' ),
						'center center' => __( 'Center Center' ),
						'center bottom' => __( 'Center Bottom' ),
						'right top'     => __( 'Right Top' ),
						'right center'  => __( 'Right center' ),
						'right bottom'  => __( 'Right Bottom' ),
					);
					break;
			}

			return $this->_filter( 'background_' . $type, $return );
		}
	}
}
