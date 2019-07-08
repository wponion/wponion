<?php

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Code_Editor' ) ) {
	/**
	 * Class Code_Editor
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Code_Editor extends Textarea {
		/**
		 * Stores CDN Url.
		 *
		 * @var string
		 * @access
		 */
		protected $cdn_url = 'https://cdn.jsdelivr.net/npm/codemirror@';

		protected function output() {
			echo $this->before();
			echo '<textarea ' . $this->_input_attributes() . '>' . $this->value() . '</textarea>';
			echo $this->after();
		}

		protected function js_field_args() {
			$args = ( ! is_array( $this->data( 'settings' ) ) ) ? array() : $this->data( 'settings' );
			return array(
				'settings' => $this->parse_args( $args, array(
					'tabSize'     => 2,
					'lineNumbers' => true,
					'theme'       => 'default',
					'mode'        => 'htmlmixed',
				) ),
				'cdn_url'  => $this->cdn_url . $this->data( 'version' ),
			);
		}

		public function field_assets() {
			// Do not loads CodeMirror in revslider page.
			if ( in_array( wponion_get_var( 'page' ), array( 'revslider' ), true ) ) {
				return;
			}

			$version = $this->data( 'version' );

			if ( ! wp_script_is( 'wpo-codemirror' ) ) {
				wp_register_script( 'wpo-codemirror', $this->cdn_url . $version . '/lib/codemirror.min.js', array(), $version, true );
				wp_register_script( 'wpo-codemirror-loadmode', $this->cdn_url . $version . '/addon/mode/loadmode.min.js', array( 'wpo-codemirror' ), $version, true );
			}

			if ( ! wp_style_is( 'wpo-codemirror' ) ) {
				wp_register_style( 'wpo-codemirror', $this->cdn_url . $version . '/lib/codemirror.min.css', array(), $version );
			}

			wp_enqueue_style( 'wpo-codemirror' );
			wp_enqueue_script( 'wpo-codemirror-loadmode' );
		}

		/**
		 * Stores Field Defaults.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'version'  => '5.41.0',
				'settings' => array(),
			);
		}
	}
}
