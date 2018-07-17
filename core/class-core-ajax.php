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
			$libs     = \WPOnion\Icons::icon_list();
			$enabled  = ( isset( $_REQUEST['enabled'] ) ) ? $_REQUEST['enabled'] : true;
			$disabled = ( isset( $_REQUEST['disabled'] ) ) ? $_REQUEST['disabled'] : false;

			if ( is_array( $enabled ) ) {
				foreach ( $libs as $name => $_n ) {
					if ( ! in_array( $name, $enabled ) ) {
						unset( $libs[ $name ] );
					}
				}
			} elseif ( is_string( $enabled ) ) {
				if ( isset( $libs[ $enabled ] ) ) {
					$libs = $libs[ $enabled ];
				}
			}

			if ( is_array( $disabled ) && is_array( $libs ) ) {
				foreach ( $libs as $name => $_n ) {
					if ( in_array( $name, $disabled ) ) {
						unset( $libs[ $name ] );
					}
				}
			}

			$default_lib  = is_array( $libs ) ? current( $libs ) : $libs;
			$selected_lib = ( isset( $_REQUEST['wponion-icon-lib'] ) ) ? $_REQUEST['wponion-icon-lib'] : $default_lib;
			$selected_lib = ( ! isset( $libs[ $selected_lib ] ) ) ? $default_lib : $selected_lib;
			$json         = \WPOnion\Icons::get( $selected_lib );
			$html         = '<div class="wponion-icon-picker-model-header">';
			$html         = $html . '<input type="text" placeholder="' . __( 'Search Icon' ) . '"/>';

			if ( is_array( $libs ) && 1 > count( $libs ) ) {
				$html = $html . '<select>';
				foreach ( $libs as $lib => $ejson ) {
					$is_selected = ( $lib === $selected_lib ) ? ' selected="selected" ' : '';
					$html        = $html . '<option value="' . $lib . '" ' . $is_selected . '>' . $lib . '</option>';
				}

				$html .= '</select>';
			}
			$html .= '</div>';
			if ( is_array( $json ) && ! empty( $json ) ) {
				$html .= '<div class="wponion-icon-picker-container-scroll"><div class="wponion-icon-picker-container">';
				foreach ( $json as $json_title => $icons ) {
					if ( is_array( $icons ) ) {
						foreach ( $icons as $key => $icon ) {
							$_icon = ( is_numeric( $key ) ) ? $icon : $key;
							$title = ( is_numeric( $key ) ) ? $icon : $icon;

							$html .= '<div class="wponion-icon-preview-wrap">';
							$html .= '<span data-icon="' . $_icon . '" title="' . $title . '" class="wponion-icon-preview">' . wponion_icon( $_icon ) . '</span>';
							$html .= '</div>';
						}
					} else {
						$_icon = ( is_numeric( $json_title ) ) ? $icons : $json_title;
						$title = ( is_numeric( $json_title ) ) ? $icons : $icons;
						$html  .= '<div class="wponion-icon-preview-wrap">';
						$html  .= '<span data-icon="' . $_icon . '" title="' . $title . '" class="wponion-icon-preview">' . wponion_icon( $_icon ) . '</span>';
						$html  .= '</div>';
					}
				}
				$html .= '</div>';
			} else {
				wp_send_json_error( __( 'Icon Library Not found' ) );
			}
			$html .= '</div>';
			wp_send_json_success( $html );
			wp_die();
		}

		/**
		 * Handles Ajax Metabox Save.
		 */
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
