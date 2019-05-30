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
			$content = false;
			if ( $this->has( 'include' ) && false !== $this->data( 'include' ) ) {
				$this->catch_output( 'start' );
				require_once $this->data( 'include' );
				$content = $this->catch_output( 'end' );
			} elseif ( $this->has( 'content' ) && false !== $this->data( 'content' ) ) {
				$content = $this->data( 'content' );
				if ( wponion_is_array( $content ) && is_callable( $content ) ) {
					$content = call_user_func_array( $content, array( $this ) );
				} elseif ( is_callable( $content ) ) {
					$content = call_user_func( $content, $this );
				}
			} elseif ( $this->has( 'callback_hook' ) && false !== $this->data( 'callback_hook' ) ) {
				$this->catch_output( 'start' );
				do_action( $this->data( 'callback_hook' ), $this );
				$content = $this->catch_output( 'end' );
			}

			if ( $this->has( 'markdown' ) && true === $this->has( 'markdown' ) ) {
				echo '<div class="wponion-markdown-output">';
				echo wponion_markdown( $content );
				echo '</div>';
			} else {
				echo $content;
			}
			echo $this->after();
		}

		protected function field_default() {
			return array(
				'content'       => false,
				'callback_hook' => false,
				'include'       => false,
				'markdown'      => false,
			);
		}

		public function field_assets() {
		}
	}
}
