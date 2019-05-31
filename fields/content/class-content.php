<?php
/**
 *
 * Initial version created 13-07-2018 / 07:30 AM
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

if ( ! class_exists( '\WPOnion\Field\Content' ) ) {
	/**
	 * Class Content
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Content extends \WPOnion\Field {
		protected function output() {
			echo $this->before();
			$content = $this->data( 'content' );

			if ( ! empty( $this->data( 'content' ) ) ) {
				if ( wponion_is_callable( $this->data( 'content' ) ) ) {
					$this->catch_output( 'start' );
					echo wponion_callback( $this->data( 'content' ) );
					$content = $this->catch_output( 'end' );
				} elseif ( file_exists( $this->data( 'content' ) ) ) {
					$this->catch_output( 'start' );
					include $this->data( 'content' );
					$content = $this->catch_output( 'end' );
				}
			}

			if ( $this->has( 'markdown' ) && true === $this->has( 'markdown' ) && ! empty( $content ) ) {
				$content = '<div class="wponion-markdown-output">' . wponion_markdown( $content ) . '</div>';
			}

			echo $content;

			echo $this->after();
		}

		/**
		 * Fields Default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'content'  => false,
				'markdown' => false,
			);
		}

		public function field_assets() {
		}
	}
}
