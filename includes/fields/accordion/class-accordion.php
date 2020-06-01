<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class accordion
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Accordion extends Field {
	/**
	 * Renders Fields HTML.
	 *
	 * @return string
	 */
	protected function render_fields() {
		$open = ( true === $this->option( 'is_open' ) ) ? 'is_open' : '';
		$del  = __( 'Delete', 'wponion' );
		$html = '';
		foreach ( $this->option( 'fields' ) as $field_id => $field ) {
			$html .= $this->render_single_field( $field );
		}
		return <<<HTML
<div class="wponion-accordion-wrap ${open}">
	<h4 class="wponion-accordion-title">
		<span class="heading">{$this->option( 'heading' )}</span> <a title="${del}" class="wponion-remove wponion-group-remove wpoic wpoic-delete"></a>
	</h4>
	<div class="wponion-accordion-content">
		<div class="wponion-row wpo-row">
			${html} {$this->after_accordion()}
		</div>
	</div>
</div>
HTML;
	}

	/**
	 * After Accordion Callback
	 */
	protected function after_accordion() {
		return '';
	}

	/**
	 * Renders Single Sub Field.
	 *
	 * @param $field
	 *
	 * @return string
	 */
	protected function render_single_field( $field ) {
		return $this->sub_field( $field, wponion_get_field_value( $field, $this->value() ), $this->name(), false );
	}

	/**
	 * Generates Final HTML Output.
	 *
	 * @return mixed|void
	 */
	protected function output() {
		return $this->before() . $this->render_fields() . $this->after();
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
		return array(
			'fields'   => array(),
			'heading'  => __( 'Accordion', 'wponion' ),
			'un_array' => false,
			'is_open'  => false,
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
		wp_enqueue_script( 'jquery-ui-accordion' );
	}
}
