<?php

namespace WPOnion\Field;

use _WP_Editors;
use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class WP_Editor
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class WP_Editor extends Field {

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$this->html( ( wponion_wp_editor_api() ) ? '<div class="wponion-wp-editor">' : '' );
		$this->html( '<textarea ' . $this->attributes( array(
				'name'         => $this->name(),
				'autocomplete' => 'off',
				'rows'         => 10,
				'class'        => 'wp-editor-area',
				'id'           => 'wpeditor_' . $this->js_field_id(),
			) ) . '>' . $this->value() . '</textarea>' );
		$this->html( ( wponion_wp_editor_api() ) ? '</div>' : '' );
		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
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
	 * Checks & Updat fields args based on field config.
	 */
	protected function handle_arguments() {
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

		$settings = ( $this->has( 'settings' ) ) ? $this->parse_args( $this->option( 'settings' ), $defaults ) : $defaults;
		$this->set_option( 'settings', $settings );
	}

	/**
	 * Generate WPEditor Settings.
	 */
	public function setup_wp_editor_settings() {
		$id = 'wpeditor_' . $this->js_field_id();
		if ( wponion_wp_editor_api() && class_exists( '_WP_Editors' ) ) {
			$settings = ( ! is_array( $this->option( 'settings' ) ) ) ? array() : $this->option( 'settings' );

			if ( isset( $settings['tinymce'] ) && ( is_array( $settings['tinymce'] ) || true === $settings['tinymce'] ) ) {
				$settings['tinymce']                 = ( ! is_array( $settings['tinymce'] ) ) ? array() : $settings['tinymce'];
				$settings['tinymce']['wp_skip_init'] = true;
			}
			$this->set_option( 'settings', $settings );
			$defaults = apply_filters( 'wponion/field/wp_editor/args', $settings, $this->field_id(), $this );
			$setup    = _WP_Editors::parse_settings( $id, $defaults );
			_WP_Editors::editor_settings( $id, $setup );
		}
	}

	/**
	 * Fields JS Args.
	 *
	 * @return array
	 */
	protected function js_args() {
		$media_buttons = '';
		if ( wponion_wp_editor_api() && function_exists( 'wp_enqueue_editor' ) && $this->has( 'settings/media_buttons' ) && false !== $this->option( 'settings/media_buttons' ) ) {
			wponion_catch_output( true );
			echo '<div class="wp-media-buttons">';
			do_action( 'media_buttons' );
			echo '</div>';
			$media_buttons = wponion_catch_output( false );
		}
		return array(
			'media_buttons_html' => $media_buttons,
			'tinymce'            => ( $this->has( 'settings/tinymce' ) ) ? $this->option( 'settings/tinymce' ) : true,
			'quicktags'          => ( $this->has( 'settings/quicktags' ) ) ? $this->option( 'settings/quicktags' ) : true,
			'media_buttons'      => ( $this->has( 'settings/media_buttons' ) ) ? $this->option( 'settings/media_buttons' ) : true,
		);
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'settings'    => array(),
			'in_group'    => false,
			'group_count' => false,
		);
	}
}
