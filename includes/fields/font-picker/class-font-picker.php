<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Font_Picker
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Font_Picker extends Field {
	/**
	 * font constructor.
	 *
	 * @param array $field
	 * @param array $value
	 * @param array $unique
	 */
	public function __construct( $field = array(), $value = array(), $unique = array() ) {
		wponion_define( 'WPONION_ADD_FONT_DATA', true );
		parent::__construct( $field, $value, $unique );
	}

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$this->select_framework = wponion_validate_select_framework( $this->settings );

		$this->html( '<div class="wponion-font-select-container">' );
		$this->html( $this->sub_field( $this->font_select(), $this->value( 'font' ), $this->name() ) );
		$this->html( '</div>' );

		if ( false !== $this->option( 'variant' ) ) {
			$this->html( '<div class="wponion-font-select-container">' );
			$this->html( $this->sub_field( $this->variant_select(), $this->value( 'variant' ), $this->name() ) );
			$this->html( '</div>' );
		}

		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * Returns Font Select Args.
	 *
	 * @return array
	 */
	protected function font_select() {
		return array_filter( array(
			'type'                  => 'select',
			'id'                    => 'font',
			'only_field'            => true,
			'class'                 => 'wponion-font-selector',
			'options_html'          => wponion_fonts_options_html( $this->option( 'google_fonts' ), $this->option( 'websafe_fonts' ), $this->option( 'group' ), $this->value( 'font' ) ),
			$this->select_framework => $this->option( $this->select_framework ),
		) );
	}

	/**
	 * Returns Font Variant
	 *
	 * @return array
	 */
	protected function variant_select() {
		$websafe = wponion_websafe_fonts();
		return array_filter( array(
			'type'                  => 'select',
			'id'                    => 'variant',
			'only_field'            => true,
			'class'                 => 'wponion-variant-selector',
			'options'               => $websafe['variants'],
			$this->select_framework => $this->option( $this->select_framework ),
		) );
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'google_fonts'  => true,
			'websafe_fonts' => true,
			'group'         => true,
			'variant'       => true,
		);
	}

	/**
	 * Returns all required values to use in js.
	 *
	 * @return array
	 */
	protected function js_args() {
		return array();
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
		$this->select_framework = wponion_validate_select_framework( $this->settings );
		wponion_load_asset( $this->select_framework );
	}
}
