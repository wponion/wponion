<?php

namespace WPOnion\Field;

use WPOnion\Field;
use WPOnion\Modules\Metabox\Core;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Modal' ) ) {
	/**
	 * Class Modal
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Modal extends Field {
		/**
		 * Final HTML Output
		 */
		public function output() {
			echo $this->before();

			if ( ! wponion_is_ajax() ) {
				$btn = $this->handle_args( 'label', $this->data( 'button' ), array( 'class' => 'button button-secondary' ), array(
					'type'       => 'button',
					'only_field' => true,
				) );
				echo $this->sub_field( $btn, null, null );
				echo '<div class="wponion-modal-hidden-data"></div>';
			}

			if ( wponion_is_ajax() && wponion_ajax_action( 'modal-fields' ) ) {
				switch ( $this->data( 'modal_type' ) ) {
					case 'swal':
					case 'sweetalert':
						return $this->swal();
						break;
					case 'wp':
						return $this->wp();
						break;
				}
			}
			echo $this->after();
		}

		/**
		 * Renders Swal Data.
		 */
		public function swal() {
			if ( wponion_is_ajax() && wponion_ajax_action( 'modal-fields' ) ) {
				$output = '<div class=" wponion-modal-html wponion-modal-field wponion-on-modal">';
				$this->catch_output( 'start' );
				if ( ! empty( $this->data( 'fields' ) ) && is_array( $this->data( 'fields' ) ) ) {
					foreach ( $this->data( 'fields' ) as $field ) {
						echo $this->sub_field( $field, wponion_get_field_value( $field, $this->value() ), $this->name() );
					}
				}
				$html   = $this->catch_output( 'stop' );
				$output .= $html . '</div>';
				return $output;
			}
			return '';
		}

		/**
		 * Renders WordPress Data.
		 */
		public function wp() {
			$final_output = array();
			/**
			 * @var \WPO\Builder|\WPO\Container|array $builder
			 * @var \WPO\Container|array              $container
			 */
			$builder = $this->data( 'fields' );
			if ( wpo_is_container( $builder ) ) {
				$final_output = $this->wp_render_containers( $builder );
			} elseif ( wpo_is( $builder ) ) {
				foreach ( $builder->containers() as $container ) {
					$final_output[] = $this->wp_render_containers( $container );
				}
			} elseif ( wponion_is_array( $builder ) && ! empty( $builder ) ) {
				$final_output['html'] = $this->wp_render_fields( $builder );
			}
			return $final_output;
		}

		/**
		 * @param \WPO\Container $builder
		 *
		 * @return array
		 */
		protected function wp_render_containers( $builder ) {
			$page = array(
				'id'    => $builder->slug(),
				'title' => $builder->title(),
				'icon'  => $builder->icon(),
			);
			if ( $builder->has_containers() ) {
				$page['sections'] = array();
				/* @var \WPO\Container $container */
				foreach ( $builder->containers() as $container ) {
					$page['sections'][] = array(
						'id'      => $container->slug(),
						'title'   => $container->title(),
						'icon'    => $container->icon(),
						'html'    => ( $container->has_fields() ) ? $this->wp_render_fields( $container->fields() ) : '',
						'sidebar' => $container->get_var( 'sidebar' ),
					);
				}
			} elseif ( $builder->has_fields() ) {
				$page['html'] = $this->wp_render_fields( $builder->fields() );
			}
			return $page;
		}

		/**
		 * Renders WP Modal Fields.
		 *
		 * @param $fields
		 *
		 * @return string
		 */
		protected function wp_render_fields( $fields ) {
			$final_output = '';
			foreach ( $fields as $field ) {
				$final_output .= $this->sub_field( $field, wponion_get_field_value( $field, $this->value() ), $this->name() );
			}
			return $final_output;
		}

		/**
		 * Returns Fields Assets.
		 *
		 * @uses \wponion_localize()
		 */
		public function field_assets() {
			wp_enqueue_script( 'backbone' );
			wp_enqueue_media();
			wp_enqueue_script( 'underscore' );
			wp_enqueue_style( 'media-views' );
		}

		/**
		 * @return array
		 */
		protected function js_field_args() {
			$config = ( empty( $this->data( 'modal_config' ) ) ) ? array() : $this->data( 'modal_config' );
			$config = $this->parse_args( $this->data( 'modal_config' ), $this->default_modal_config() );

			return array(
				'modal_type'   => $this->data( 'modal_type' ),
				'modal_config' => $config,
				'modal_html'   => $this->field['modal_html'],
			);
		}

		/**
		 * Defaults Modal Config.
		 *
		 * @return array
		 */
		protected function default_modal_config() {
			if ( 'wp' === $this->data( 'module_type' ) ) {
				return array(
					'size'            => 'default',
					'save_btn_label'  => __( 'Save' ),
					'close_btn_label' => __( 'Close' ),
				);
			}
			return array(
				'showCloseButton'     => true,
				'reverseButtons'      => true,
				'showLoaderOnConfirm' => true,
				'showCancelButton'    => true,
				'focusConfirm'        => false,
				'focusCancel'         => false,
				'allowEscapeKey'      => false,
				'allowOutsideClick'   => false,
				'confirmButtonText'   => __( 'Save' ),
				'cancelButtonText'    => __( 'Cancel' ),
			);
		}

		/**
		 * Final HTML Output;
		 *
		 * @return mixed;
		 */
		protected function field_default() {
			return array(
				'fields'       => array(),
				'modal_config' => array(),
				'modal_type'   => 'swal', // SWAL / WP.
				'button'       => __( 'Open Modal' ),
			);
		}
	}
}
