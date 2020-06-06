<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Background
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Background extends Field {

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$this->html( '<div class="wpo-row">' );

		if ( false !== $this->option( 'background-color' ) ) {
			$title = ( true === $this->option( 'background-color' ) ) ? __( 'Background Color', 'wponion' ) : $this->option( 'background-color' );
			$this->html( $this->sub_field( $this->handle_args( 'title', $title, array(
				'type'       => 'color_picker',
				'id'         => 'color',
				'wrap_class' => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'horizontal' => true,
			) ), $this->value( 'color' ), $this->name() ) );
		}

		$parts = array(
			'repeat'     => __( 'Repeat', 'wponion' ),
			'attachment' => __( 'Attachment', 'wponion' ),
			'position'   => __( 'Position', 'wponion' ),
			'clip'       => __( 'Clip', 'wponion' ),
			'origin'     => __( 'Origin', 'wponion' ),
			'size'       => __( 'Size', 'wponion' ),
		);

		foreach ( $parts as $id => $title ) {
			if ( false !== $this->option( 'background-' . $id ) ) {
				$title = ( true === $this->option( 'background-' . $id ) ) ? $title : $this->option( 'background-' . $id );
				$this->html( $this->sub_field( $this->handle_args( 'title', $title, array(
					'type'                  => 'select',
					'options'               => $this->get_options( $id ),
					'id'                    => $title,
					'style'                 => 'width:100%;',
					'wrap_class'            => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
					'horizontal'            => true,
					$this->select_framework => $this->option( $this->select_framework ),
				) ), $this->value( $id ), $this->name() ) );
			}
		}

		if ( false !== $this->option( 'background-image' ) ) {
			$title = ( true === $this->option( 'background-image' ) ) ? __( 'Background Image', 'wponion' ) : $this->option( 'background-image' );
			$this->html( $this->sub_field( $this->handle_args( 'title', $title, array(
				'type'       => 'upload',
				'id'         => 'image',
				'wrap_class' => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'horizontal' => true,
			) ), $this->value( 'image' ), $this->name() ) );
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
		return array(
			'background-repeat'     => true,
			'background-attachment' => true,
			'background-position'   => true,
			'background-clip'       => true,
			'background-origin'     => true,
			'background-size'       => true,
			'background-color'      => true,
			'background-image'      => true,
			//'background-gradient'   => false,
			'preview_media'         => false,
			'preview'               => true,
			'preview_height'        => '200px',
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}

	/**
	 * Checks & Updat fields args based on field config.
	 */
	protected function handle_arguments() {
		$this->select_framework = wponion_validate_select_framework( $this->settings );
	}

	/**
	 * Returns A Major Data.
	 *
	 * @param $type
	 *
	 * @return mixed
	 */
	protected function get_options( $type ) {
		$return = wponion_internal_options_data( 'background_' . $type, array() );
		$return = wponion_apply_deprecated_filters( "wponion_{$this->module()}_background_{$type}", array(
			$return,
			$this->unique(),
			$this,
		), '1.5' );
		return apply_filters( "wponion/field/{$this->module()}/background_{$type}", $return, $this->unique(), $this );
	}
}
