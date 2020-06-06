<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class WP_Notice
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class WP_Notice extends Heading {
	/**
	 * Checks & Updat fields args based on field config.
	 */
	protected function handle_arguments() {
		if ( $this->has( 'type' ) && 'wp_notice' !== $this->option( 'type' ) ) {
			$this->set_option( 'notice_type', str_replace( 'wp_notice_', '', $this->option( 'type' ) ) );
		}

		$this->set_option( 'type', 'wp_notice' );
		$this->set_option_default( 'wrap_attributes', array() );

		if ( $this->has( 'autoclose' ) ) {
			$this->set_option( 'wrap_attributes/data-autoclose', intval( $this->option( 'autoclose' ) ) );
		}
	}

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$autoclose   = $this->option( 'autoclose' );
		$notice_type = $this->option( 'notice_type' );
		$auto_close  = ( false === $autoclose ) ? '' : ' data-autoclose="' . intval( $autoclose ) . '" ';

		$notice_class = 'notice inline ';
		$notice_class = $notice_class . ' notice-' . $notice_type;
		$notice_class .= ( true === $this->option( 'large' ) ) ? ' notice-large ' : ' ';
		$notice_class .= ( true === $this->option( 'alt' ) ) ? ' notice-alt ' : ' ';

		$this->html( '<div class="' . $notice_class . '" ' . $auto_close . '>' );
		$content = $this->option( 'content' );
		$content = str_replace( array(
			'[count]',
			'[counter]',
		), '<span class="wpo-counter">' . intval( $autoclose / 1000 ) . '</span>', $content );
		$this->html( $content );

		if ( true === $this->option( 'close' ) && false === $autoclose ) {
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
			'large'       => false,
			'alt'         => false,
		), parent::defaults() );
	}
}
