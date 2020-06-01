<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Code_Editor
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Code_Editor extends Textarea {
	/**
	 * Stores CDN Url.
	 *
	 * @var string
	 */
	protected $cdn_url = 'https://cdn.jsdelivr.net/npm/codemirror@';

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		return $this->before() . '<textarea ' . $this->_input_attributes() . '>' . $this->value() . '</textarea>' . $this->after();
	}

	protected function js_args() {
		$args = ( ! is_array( $this->option( 'settings' ) ) ) ? array() : $this->option( 'settings' );
		return array(
			'settings' => $this->parse_args( $args, array(
				'tabSize'     => 2,
				'lineNumbers' => true,
				'theme'       => 'default',
				'mode'        => 'htmlmixed',
			) ),
			'cdn_url'  => $this->cdn_url . $this->option( 'version' ),
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
		// Do not loads CodeMirror in revslider page.
		if ( in_array( wponion_get_var( 'page' ), array( 'revslider' ), true ) ) {
			return;
		}

		$version = $this->option( 'version' );

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
	 * Returns Field's Default Value.
	 */
	protected function defaults() {
		return array(
			'version'  => '5.41.0',
			'settings' => array(),
		);
	}
}
