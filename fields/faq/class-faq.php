<?php

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
			echo $this->before();
			$options = $this->data( 'options' );
			echo '<ul class="faqs-container">';
			foreach ( $options as $faq ) {
				echo '<li class="faq">';
				echo '<div class="faq-title"><h3><i class="dashicons"></i><span class="title-name">' . $faq['heading'] . '</span></h3></div>';
				echo '<div class="faq-content">';
				echo wpo_field( 'markdown', $faq['content'] )
					->only_field( true )
					->render( null, null );
				echo '</div>';
				echo '</li>';
			}
			echo '</ul>';
			echo $this->after();
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
