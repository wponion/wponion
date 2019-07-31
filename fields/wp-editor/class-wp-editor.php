<?php

namespace WPOnion\Field;

use _WP_Editors;
use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\WP_Editor' ) ) {
	/**
	 * Class WP_Editor
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_Editor extends Field {
		/**
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();

			echo ( wponion_wp_editor_api() ) ? '<div class="wponion-wp-editor">' : '';
			echo '<textarea ' . $this->attributes( array(
					'name'         => $this->name(),
					'autocomplete' => 'off',
					'rows'         => 10,
					'class'        => 'wp-editor-area',
					'id'           => 'wpeditor_' . $this->js_field_id(),
				) ) . '>' . $this->value() . '</textarea>';
			//echo '<div class="clear"></div>';
			echo ( wponion_wp_editor_api() ) ? '</div>' : '';

			echo $this->after();
		}

		/**
		 * @return mixed|void
		 */
		public function field_assets() {
			if ( wponion_wp_editor_api() && function_exists( 'wp_enqueue_editor' ) ) {
				wp_enqueue_editor();
				$this->setup_wp_editor_settings();

				if ( wponion_is_ajax() && class_exists( '\_WP_Editors' ) ) {
					wponion_localize();
					wponion_catch_output( true );
					\_WP_Editors::editor_js();
					$none = wponion_catch_output( false );
				}
			}
		}

		/**
		 * Handles WPEditor Default Args.
		 *
		 * @param array $data
		 *
		 * @return array|void
		 */
		public function handle_field_args( $data = array() ) {
			$defaults = array(
				'wpautop'          => true,
				'media_buttons'    => true,
				'textarea_rows'    => 10,
				'editor_css'       => '',
				'editor_class'     => '',
				'editor_height'    => '',
				'teeny'            => false,
				'dfw'              => false,
				'tinymce'          => true,
				'quicktags'        => true,
				'drag_drop_upload' => false,
			);
			if ( isset( $data['settings'] ) ) {
				$data['settings'] = $this->parse_args( $data['settings'], $defaults );
			} else {
				$data['settings'] = $defaults;
			}
			return $data;
		}

		/**
		 * Generate WPEditor Settings.
		 */
		public function setup_wp_editor_settings() {
			$id = 'wpeditor_' . $this->js_field_id();
			if ( wponion_wp_editor_api() && class_exists( '_WP_Editors' ) ) {
				$settings = ( ! is_array( $this->data( 'settings' ) ) ) ? array() : $this->data( 'settings' );

				if ( isset( $settings['tinymce'] ) && ( is_array( $settings['tinymce'] ) || true === $settings['tinymce'] ) ) {
					$settings['tinymce']                 = ( ! is_array( $settings['tinymce'] ) ) ? array() : $settings['tinymce'];
					$settings['tinymce']['wp_skip_init'] = true;
				}
				$this->field['settings'] = $settings;
				$defaults                = apply_filters( 'wponion_wp_editor', $settings, $this->field_id(), $this );
				$setup                   = _WP_Editors::parse_settings( $id, $defaults );
				_WP_Editors::editor_settings( $id, $setup );
			}
		}

		/**
		 * Fields JS Args.
		 *
		 * @return array
		 */
		protected function js_field_args() {
			$media_buttons = '';
			if ( wponion_wp_editor_api() && function_exists( 'wp_enqueue_editor' ) && isset( $this->field['settings']['media_buttons'] ) && false !== $this->field['settings']['media_buttons'] ) {
				wponion_catch_output( true );
				echo '<div class="wp-media-buttons">';
				do_action( 'media_buttons' );
				echo '</div>';
				$media_buttons = wponion_catch_output( false );
			}
			return array(
				'media_buttons_html' => $media_buttons,
				'tinymce'            => ( isset( $this->field['settings']['tinymce'] ) ) ? $this->field['settings']['tinymce'] : true,
				'quicktags'          => ( isset( $this->field['settings']['quicktags'] ) ) ? $this->field['settings']['quicktags'] : true,
				'media_buttons'      => ( isset( $this->field['settings']['media_buttons'] ) ) ? $this->field['settings']['media_buttons'] : true,
			);
		}

		/**
		 * @return mixed
		 */
		protected function field_default() {
			return array(
				'settings'    => array(),
				'in_group'    => false,
				'group_count' => false,
			);
		}
	}
}
