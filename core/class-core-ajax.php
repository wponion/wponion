<?php
/**
 *
 * Initial version created 18-05-2018 / 06:26 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Core_Ajax' ) ) {
	/**
	 * Class Core_Ajax
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Core_Ajax extends \WPOnion\Bridge {
		/**
		 * Core_Ajax constructor.
		 */
		public function __construct() {
			add_action( 'wp_ajax_wponion-ajax', array( &$this, 'handle_ajax_request' ) );
		}

		/**
		 * Handles Ajax Request.
		 */
		public function handle_ajax_request() {
			if ( isset( $_REQUEST['wponion-ajax'] ) && ! empty( $_REQUEST['wponion-ajax'] ) ) {
				if ( ! defined( 'WPONION_DOING_AJAX' ) ) {
					define( 'WPONION_DOING_AJAX', true );
				}
				$function = $_REQUEST['wponion-ajax'];
				$function = str_replace( '-', '_', sanitize_title( $function ) );
				if ( method_exists( $this, $function ) ) {
					$this->$function();
				}
			}
			wp_die();
		}

		/**
		 * Handles Icon Picker Ajax Request.
		 */
		public function icon_picker() {
			$libs         = wponion_icon_libraries();
			$libs_keys    = array_keys( $libs );
			$default_lib  = $libs_keys[0];
			$selected_lib = ( isset( $_REQUEST['wponion-icon-lib'] ) ) ? $_REQUEST['wponion-icon-lib'] : false;
			$selected_lib = ( ! isset( $libs[ $selected_lib ] ) ) ? $default_lib : $selected_lib;
			$json         = false;

			if ( is_string( $libs[ $selected_lib ] ) ) {
				$json = json_decode( file_get_contents( $libs[ $selected_lib ] ), true );
			} elseif ( is_array( $libs[ $selected_lib ] ) ) {
				$json = $libs[ $selected_lib ];
			}

			$html = '';

			if ( is_array( $json ) ) {
				$html .= '<div class="wponion-icon-picker-model-header">';
				$html .= '<input type="text" placeholder="' . __( 'Search Icon' ) . '"/>';
				$html .= '<select>';
				foreach ( $libs as $lib => $ejson ) {
					$is_selected = ( $lib === $selected_lib ) ? ' selected="selected" ' : "";
					$html        .= '<option value="' . $lib . '" ' . $is_selected . '>' . $lib . '</option>';
				}
				$html .= '</select>';
				$html .= '</div>';
				$html .= '<div class="wponion-icon-picker-container-scroll"><div class="wponion-icon-picker-container">';

				foreach ( $json as $json_title => $icons ) {
					if ( is_array( $icons ) ) {
						foreach ( $icons as $icon ) {
							$html .= '<div class="wponion-icon-preview-wrap">';
							$html .= '<span data-icon="' . $icon . '" title="' . $icon . '" class="wponion-icon-preview">' . wponion_icon( $icon ) . '</span>';
							$html .= '</div>';
						}
					} else {
						$html .= '<div class="wponion-icon-preview-wrap">';
						$html .= '<span data-icon="' . $icons . '" title="' . $icons . '" class="wponion-icon-preview">' . wponion_icon( $icons ) . '</span>';
						$html .= '</div>';
					}
				}
				$html .= '</div></div>';
				wp_send_json_success( $html );
			} else {
				wp_send_json_error( __( 'Icon Library Not found' ) );
			}

			wp_die();
		}

		public function save_metabox() {
			if ( isset( $_REQUEST['metabox_id'] ) && isset( $_REQUEST['plugin_id'] ) ) {
				wponion_localize();
				$metabox_id      = $_REQUEST['metabox_id'];
				$plugin_id       = $_REQUEST['plugin_id'];
				$this->plugin_id = $plugin_id;
				$this->module    = 'metabox';
				$instance        = $plugin_id . '_' . $metabox_id;
				$instance        = wponion_metabox_registry( $instance );
				$post_id         = $_REQUEST['wponion_postid'];
				$instance->set_post_id( $post_id );
				$instance->save_metabox( $post_id );
				$this->_action( 'ajax_before_render' );
				$instance->on_page_load();
				$instance->render( $post_id );
				$this->_action( 'ajax_render' );

			}
		}
	}
}
return new Core_Ajax;
