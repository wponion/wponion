<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Date_Picker
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Date_Picker extends Field {

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$date  = $this->option( 'date' );
		$range = $this->option( 'range' );
		if ( true === $range ) {
			$date = ( false === $date ) ? __( 'From Date', 'wponion' ) : $date;
			$this->html( '<div class="date-range-container wpo-row">' )
				->html( $this->sub_field( $this->handle_args( 'title', $date, array(
					'id'         => 'from',
					'type'       => 'text',
					'title'      => __( 'From Date', 'wponion' ),
					'wrap_class' => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-2',
					'horizontal' => true,
					'attributes' => array( 'data-wponion-datepicker-from-date' => true ),
				) ), $this->value( 'from' ), $this->name() ) )
				->html( $this->sub_field( $this->handle_args( 'title', $this->option( 'to_date' ), array(
					'id'         => 'to',
					'type'       => 'text',
					'title'      => __( 'To Date', 'wponion' ),
					'wrap_class' => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-2',
					'horizontal' => true,
					'attributes' => array( 'data-wponion-datepicker-to-date' => true ),
				) ), $this->value( 'to' ), $this->name() ) )
				->html( '</div>' );
		} else {
			$this->html( $this->sub_field( $this->handle_args( 'placeholder', $date, array(
				'id'         => $this->field_id(),
				'type'       => 'text',
				'prefix'     => wpo_icon( 'wpoic-calendar' ),
				'only_field' => true,
			) ), $this->value(), $this->unique() ) );
		}

		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * Field's Custom Wrap Class.
	 *
	 * @return string
	 */
	protected function wrap_class() {
		return ( true === $this->option( 'range' ) ) ? ' wponion-datepicker-range ' : '';
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
		wponion_load_asset( 'wponion-datepicker' );
	}

	/**
	 * @return array
	 */
	protected function js_args() {
		$settings          = wponion_cast_array( $this->option( 'settings' ) );
		$settings['theme'] = $this->option( 'theme' );
		$settings['range'] = $this->option( 'range' );
		return array( 'settings' => $settings );
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'range'    => false,
			'settings' => array(),
			'theme'    => 'default',
			'date'     => __( 'Date', 'wponion' ),
			'to_date'  => __( 'Till Date', 'wponion' ),
		);
	}
}
