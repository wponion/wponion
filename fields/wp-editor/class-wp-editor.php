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
			}
		}

		/**
		 * Generate WPEditor Settings.
		 */
		public function setup_wp_editor_settings() {
			$id = 'wpeditor_' . $this->js_field_id();
			if ( wponion_wp_editor_api() && class_exists( '_WP_Editors' ) ) {
				$defaults = apply_filters( 'wponion_wp_editor', array(
					'quicktags' => true,
					'tinymce'   => array( 'wp_skip_init' => true ),
				), $this->field_id(), $this );
				$setup    = _WP_Editors::parse_settings( $id, $defaults );
				_WP_Editors::editor_settings( $id, $setup );
			}
		}

		protected function js_field_args() {
			$media_buttons = '';
			if ( wponion_wp_editor_api() && function_exists( 'wp_enqueue_editor' ) ) {
				wponion_catch_output( true );
				echo '<div class="wp-media-buttons">';
				do_action( 'media_buttons' );
				echo '</div>';
				$media_buttons = wponion_catch_output( false );
			}
			return array(
				'media_buttons_html' => $media_buttons,
				'tinymce'            => $this->data( 'tinymce' ),
				'quicktags'          => $this->data( 'quicktags' ),
				'media_buttons'      => $this->data( 'media_buttons' ),
			);
		}

		/**
		 * @return mixed
		 */
		protected function field_default() {
			return array(
				'tinymce'       => true,
				'quicktags'     => true,
				'media_buttons' => true,
				'height'        => '',
				'settings'      => array(),
				'in_group'      => false,
				'group_count'   => false,
			);
		}
	}
}
