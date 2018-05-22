<?php
/**
 *
 * Initial version created 22-05-2018 / 06:49 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Field_wp_link' ) ) {
	class WPOnion_Field_wp_link extends WPOnion_Field {

		protected function init_subfields() {
			if ( ! class_exists( '_WP_Editors' ) ) {
				require_once ABSPATH . 'wp-includes/class-wp-editor.php';
				add_action( 'admin_footer', array( '_WP_Editors', 'wp_link_dialog' ), 99 );
			}
		}

		protected function output() {
			echo $this->before();

			echo '<div class="wponion-wp-links-wrap">';
			echo '<input type="hidden" name="' . $this->name( '[url]' ) . '" value="' . $this->get_value( 'url' ) . '" id="url"/>';
			echo '<input type="hidden" name="' . $this->name( '[title]' ) . '" value="' . $this->get_value( 'title' ) . '" id="title"/>';
			echo '<input type="hidden" name="' . $this->name( '[target]' ) . '" value="' . $this->get_value( 'target' ) . '" id="target"/>';

			echo '<span class="url"><strong>' . __( 'URL : ' ) . '</strong><span class="value"></span></span><br/>';
			echo '<span class="title"><strong>' . __( 'Title : ' ) . '</strong><span class="value"></span></span><br/>';
			echo '<span class="target"><strong>' . __( 'Target : ' ) . '</strong><span class="value"></span></span><br/><br/>';
			echo '<span class="example_output"><strong>' . __( 'Example : ' ) . '</strong><span class="value"></span></span><br/><br/>';
			echo '<textarea id="' . $this->js_field_id() . '" class="hidden"></textarea>';

			echo '<div id="wponion-wp-link-picker">';
			echo $this->sub_field( $this->handle_args( 'label', $this->data( 'button' ), array(
				'button_type' => 'button',
				'only_field'  => true,
				'type'        => 'button',
				'class'       => 'btn btn-secondary btn-sm',
				'label'       => __( 'Select URL' ),
				'attributes'  => array(
					'data-wponion-jsid' => $this->js_field_id(),
				),
			) ), null, null, false );
			echo '</div>';
			echo '</div>';

			echo $this->after();
		}

		protected function field_default() {
			return array(
				'button' => __( 'Select URL' ),
			);
		}

		public function field_assets() {
			wp_enqueue_script( 'jquery-ui-dialog' );
			wp_enqueue_style( 'editor-buttons' );
			add_thickbox();
			wp_enqueue_script( 'wplink' );
		}
	}
}