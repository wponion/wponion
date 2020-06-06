<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Notice
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Notice extends Heading {
	/**
	 * Checks & Updat fields args based on field config.
	 */
	protected function handle_arguments() {
		if ( $this->has( 'type' ) && 'notice' !== $this->option( 'type' ) ) {
			$this->set_option( 'notice_type', str_replace( 'notice_', '', $this->option( 'type' ) ) );
		}

		$this->set_option( 'type', 'notice' );
		$this->set_option_default( 'wrap_attributes', array() );

		if ( $this->has( 'autoclose' ) ) {
			$this->set_option( 'wrap_attributes/data-autoclose', intval( $this->option( 'autoclose' ) ) );
		}
	}

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		echo $this->before();

		$autoclose   = $this->option( 'autoclose' );
		$auto_close  = ( false === $autoclose ) ? '' : ' data-autoclose="' . intval( $autoclose ) . '" ';
		$notice_type = $this->option( 'notice_type' );

		$this->html( "<div class=\"wpo-alert wpo-alert-${notice_type}\" ${auto_close}>" );

		$this->html( str_replace( array(
			'[count]',
			'[counter]',
		), '<span class="wpo-counter">' . intval( $this->option( 'autoclose' ) / 1000 ) . '</span>', $this->option( 'content' ) ) );

		if ( true === $this->option( 'close' ) && false === $this->option( 'autoclose' ) ) {
			$this->html( '<a class="wponion-remove dashicons" data-tippy="' . __( 'Hide', 'wponion' ) . '"></a>' );
		}
		$this->html( '</div>' );
		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return $this->parse_args( array(
			'notice_type' => $this->option( 'notice_type' ),
			'autoclose'   => false,
			'close'       => true,
		), parent::defaults() );
	}
}
