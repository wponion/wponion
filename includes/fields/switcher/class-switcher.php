<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class switcher
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Switcher extends Checkbox_Radio {
	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
		return $this->parse_args( array(
			'switch_style' => 'style-8',
			'switch_width' => false,
			'switch_size'  => '',
			'on'           => __( 'ON', 'wponion' ),
			'off'          => __( 'OFF', 'wponion' ),
		), parent::defaults() );
	}

	/**
	 * Renders Elements HTML.
	 *
	 * @param array  $label_attr
	 * @param array  $field_attr
	 * @param string $value
	 * @param array  $attr
	 * @param array  $options
	 *
	 * @return string
	 */
	protected function _element_html( $label_attr, $field_attr, $value, $attr, $options ) {
		$width = ( ! empty( $this->option( 'switch_width' ) ) ) ? 'width:' . $this->option( 'switch_width' ) . ';' : '';
		$size  = ( ! empty( $this->option( 'switch_size' ) ) ) ? 'wpock-' . $this->option( 'switch_size' ) : '';
		$ckd   = $this->checked( $value, $attr['value'], 'checked' );
		$id    = $attr['id'];
		$label = $options['label'];
		$on    = $this->option( 'on' );
		$off   = $this->option( 'off' );
		return <<<HTML
<div class="wponion-switcher-labels-container">
	<div data-on="${on}" data-off="${off}" class="wpock-{$this->option( 'switch_style' )} ${size}">
		<input ${field_attr} ${ckd}/>
		<label data-on="${on}" data-off="${off}" for="${id}" style="${width}"></label>
	</div>
	<label for="${id}">${label}</label>
</div>
HTML;
	}
}
