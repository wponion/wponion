<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class FAQ
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class FAQ extends Field {
	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		echo $this->before();
		echo '<ul class="faqs-container">';
		foreach ( $this->option( 'options', array() ) as $faq ) {
			$content = wpo_field( 'markdown', $faq['content'] )->only_field( true );
			echo <<<HTML
<li class="faq">
	<div class="faq-title">
		<h3><i class="dashicons"></i> <span class="title-name">${faq['heading']}</span></h3>
		<div class="faq-content">{$content->render( null, null )}</div>
	</div>
</li>
HTML;
		}
		echo '</ul>';
		echo $this->after();
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array( 'options' => array() );
	}
}
