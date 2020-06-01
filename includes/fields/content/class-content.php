<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Content
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Content extends Field {

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$content      = $this->option( 'content' );
		$content_path = $this->option( 'content_path' );
		$mmarkdown    = $this->option( 'markdown' );

		if ( ! empty( $content_path ) && file_exists( $content_path ) ) {
			wponion_catch_output();
			include $content_path;
			$content = wponion_catch_output( false );
		} elseif ( ! empty( $content ) && wponion_is_callable( $content ) ) {
			wponion_catch_output();
			echo wponion_callback( $content );
			$content = wponion_catch_output( false );
		}

		if ( true === $mmarkdown && ! empty( $content ) ) {
			$content = '<div class="wponion-markdown-output">' . wponion_markdown( $content ) . '</div>';
		}
		return $this->before() . do_shortcode( $content ) . $this->after();
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'content'      => false,
			'content_path' => false,
			'markdown'     => false,
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}
}
