<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\Content' ) ) {
	/**
	 * Class Content
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Content extends Field {

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			$content = $this->data( 'content' );

			if ( ! empty( $this->data( 'content_path' ) ) && file_exists( $this->data( 'content_path' ) ) ) {
				$this->catch_output( 'start' );
				include $this->data( 'content_path' );
				$content = $this->catch_output( 'end' );
			} elseif ( ! empty( $this->data( 'content' ) ) && wponion_is_callable( $this->data( 'content' ) ) ) {
				$this->catch_output( 'start' );
				echo wponion_callback( $this->data( 'content' ) );
				$content = $this->catch_output( 'end' );
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
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'content'      => false,
				'content_path' => false,
				'markdown'     => false,
			);
		}

		/**
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
		}
	}
}
