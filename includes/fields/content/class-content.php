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
		echo $this->before();
		$content = $this->option( 'content' );

		if ( ! empty( $this->option( 'content_path' ) ) && file_exists( $this->option( 'content_path' ) ) ) {
			wponion_catch_output();
			include $this->option( 'content_path' );
			$content = wponion_catch_output( false );
		} elseif ( ! empty( $this->option( 'content' ) ) && wponion_is_callable( $this->option( 'content' ) ) ) {
			wponion_catch_output();
			echo wponion_callback( $this->option( 'content' ) );
			$content = wponion_catch_output( false );
		}

		if ( $this->has( 'markdown' ) && true === $this->has( 'markdown' ) && ! empty( $content ) ) {
			$content = '<div class="wponion-markdown-output">' . wponion_markdown( $content ) . '</div>';
		}

		echo do_shortcode( $content );

		echo $this->after();
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
