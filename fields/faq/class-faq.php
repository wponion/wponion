<?php
/**
 *
 * Initial version created 12-05-2018 / 07:05 PM
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

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\FAQ' ) ) {
	/**
	 * Class FAQ
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class FAQ extends Field {
		/**
		 * Final HTML Output
		 */
		public function output() {
			$this->before();
			$options = $this->data( 'options' );
			echo '<div class="faqs-container">';
			foreach ( $options as $faq ) {
				echo '<div class="faq">';
				echo '<div class="faq-title"><h3><i class="dashicons dashicons-before"></i> <span class="title-name">' . $faq['heading'] . '</span></h3></div>';
				echo '<div class="faq-content">' . wpautop( $faq['content'] ) . '</div>';
				echo '</div>';
			}
			echo '</div>';
			$this->after();
		}

		public function field_assets() {
		}

		/**
		 * Final HTML Output;
		 *
		 * @return mixed;
		 */
		protected function field_default() {
			return array(
				'options' => array(),
			);
		}
	}
}
