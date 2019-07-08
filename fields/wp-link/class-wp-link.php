<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\WP_Link' ) ) {
	/**
	 * Class WP_Link
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
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
		 * Final HTML Output
		 */
		protected function output() {
			echo $this->before();

			echo '<div class="wponion-wp-links-wrap">';
			$settings   = $this->parse_args( $this->data( 'settings' ), array(
				'url'        => true,
				'title'      => true,
				'target'     => true,
				'show_input' => false,
				'example'    => true,
			) );
			$show_input = ( true === $settings['show_input'] ) ? 'text' : 'hidden';
			$show_value = ( 'text' === $show_input ) ? false : true;

			if ( true === $settings['url'] ) {
				$_value = ( true === $show_value ) ? '<span class="value">' . $this->get_value( 'url' ) . '</span>' : '';
				echo '<span class="url"><strong>' . __( 'URL : ', 'wponion' ) . '</strong> ' . $_value;
				echo '<input style="width:350px" type="' . $show_input . '" name="' . $this->name( '[url]' ) . '" value="' . $this->get_value( 'url' ) . '" id="url"/>';
				echo '</span><br/><br/>';
			}

			if ( true === $settings['title'] ) {
				$_value = ( true === $show_value ) ? '<span class="value">' . $this->get_value( 'title' ) . '</span>' : '';
				echo '<span class="title"><strong>' . __( 'Title : ', 'wponion' ) . '</strong> ' . $_value;
				echo '<input  style="width:350px" type="' . $show_input . '" name="' . $this->name( '[title]' ) . '" value="' . $this->get_value( 'title' ) . '" id="title"/>';
				echo '</span><br/><br/>';

			}

			if ( true === $settings['target'] ) {
				echo '<input type="hidden" name="' . $this->name( '[target]' ) . '" value="' . $this->get_value( 'target' ) . '" id="target"/>';
			}

			if ( true === $settings['example'] ) {
				echo '<span class="example_output"><strong>' . __( 'Example : ', 'wponion' ) . '</strong><span class="value"></span></span><br/><br/>';
			}
			echo '<textarea id="' . $this->js_field_id() . 'wplinks" class="hidden wponion-validation-ignore"></textarea>';

			echo '<div id="wponion-wp-link-picker">';
			echo $this->sub_field( $this->handle_args( 'label', $this->data( 'button' ), array(
				'button_type' => 'button',
				'only_field'  => true,
				'type'        => 'button',
				'class'       => 'button button-primary',
				'label'       => __( 'Select URL', 'wponion' ),
				'attributes'  => array(
					'data-wponion-jsid' => $this->js_field_id(),
				),
			) ), false, $this->unique(), false );
			echo '</div>';
			echo '</div>';

			echo $this->after();
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
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
		 * Loads the required plugins assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			wp_enqueue_script( 'jquery-ui-dialog' );
			wp_enqueue_style( 'editor-buttons' );
			add_thickbox();
			wp_enqueue_script( 'wplink' );
		}
	}
}
