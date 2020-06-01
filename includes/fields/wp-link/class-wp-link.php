<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class WP_Link
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class WP_Link extends Field {
	/**
	 * Creates / inits its sub fields.
	 */
	protected function init_subfields() {
		if ( ! class_exists( '_WP_Editors' ) ) {
			require_once ABSPATH . 'wp-includes/class-wp-editor.php';
			add_action( 'admin_footer', array( '_WP_Editors', 'wp_link_dialog' ), 99 );
		}
	}

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$this->html( '<div class="wponion-wp-links-wrap">' );
		$settings   = $this->parse_args( $this->option( 'settings' ), array(
			'url'        => true,
			'title'      => true,
			'target'     => true,
			'show_input' => false,
			'example'    => true,
		) );
		$show_input = ( true === $settings['show_input'] ) ? 'text' : 'hidden';
		$show_value = ( 'text' === $show_input ) ? false : true;

		if ( true === $settings['url'] ) {
			$_value = ( true === $show_value ) ? '<span class="value">' . $this->value( 'url' ) . '</span>' : '';
			$this->html( '<span class="url"><strong>' . __( 'URL : ', 'wponion' ) . '</strong> ' . $_value )
				->html( "<input style=\"width:350px\" type=\"${show_input}\" name=\"{$this->name( 'url' )}\" value=\"{$this->value( 'url' )}\" id=\"url\"/>" )
				->html( '</span><br/><br/>' );
		}

		if ( true === $settings['title'] ) {
			$_value = ( true === $show_value ) ? '<span class="value">' . $this->value( 'title' ) . '</span>' : '';
			$this->html( '<span class="title"><strong>' . __( 'Title : ', 'wponion' ) . '</strong> ' . $_value )
				->html( "<input  style=\"width:350px\" type=\"${show_input}\" name=\"{$this->name( 'title' )}\" value=\"{$this->value( 'title' )}\" id=\"title\"/>" )
				->html( '</span><br/><br/>' );

		}

		if ( true === $settings['target'] ) {
			$this->html( '<input type="hidden" name="' . $this->name( 'target' ) . '" value="' . $this->value( 'target' ) . '" id="target"/>' );
		}

		if ( true === $settings['example'] ) {
			$example = sprintf( '<a href="%3$s" target="%2$s">%1$s</a>', $this->value( 'title' ), $this->value( 'target' ), $this->value( 'url' ) );
			$this->html( '<span class="example_output"><strong>' . __( 'Example : ', 'wponion' ) . '</strong><span class="value">' . $example . '</span></span><br/><br/>' );
		}
		$this->html( '<textarea id="' . $this->js_field_id() . 'wplinks" class="hidden wponion-validation-ignore"></textarea>' )
			->html( '<div id="wponion-wp-link-picker">' );
		$this->html( $this->sub_field( $this->handle_args( 'label', $this->option( 'button' ), array(
			'button_type' => 'button',
			'only_field'  => true,
			'type'        => 'button',
			'class'       => 'button button-primary',
			'label'       => __( 'Select URL', 'wponion' ),
			'attributes'  => array(
				'data-wponion-jsid' => $this->js_field_id(),
			),
		) ), false, $this->unique(), false ) );
		$this->html( '</div></div>' );

		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'button'   => __( 'Select URL', 'wponion' ),
			'settings' => array(
				'url'        => true,
				'title'      => true,
				'target'     => true,
				'example'    => true,
				'show_input' => false,
			),
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
		wp_enqueue_script( 'jquery-ui-dialog' );
		wp_enqueue_style( 'editor-buttons' );
		add_thickbox();
		wp_enqueue_script( 'wplink' );
	}
}
