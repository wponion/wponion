<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Color_Picker
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Color_Group extends Field {

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		echo $this->before();
		$options = $this->option( 'options' );
		$options = ( ! wponion_is_array( $options ) && wponion_is_callable( $options ) ) ? wponion_callback( $options ) : $options;
		if ( wponion_is_array( $options ) ) {
			foreach ( $options as $slug => $option ) {
				$field_args = $this->handle_args( 'title', $option, array( 'settings' => $this->option( 'settings' ) ), array(
					'id'         => $slug,
					'type'       => 'color_picker',
					'wrap_class' => 'wpo-col-xs-12 wpo-col-md-3',
				) );

				if ( isset( $field_args['label'] ) ) {
					$title               = $field_args['label'];
					$field_args['title'] = $title;
					unset( $field_args['label'] );
				}
				$this->html( $this->sub_field( $field_args, $this->value( $slug ), $this->name() ) );
			}
		}
		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
		wponion_load_asset( 'wponion-pickr' );
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
		return array(
			'settings' => array( 'theme' => 'monolith' ),
			'options'  => array(),
		);
	}
}
