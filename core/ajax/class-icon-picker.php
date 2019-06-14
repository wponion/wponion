<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;
use WPOnion\Icons;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Ajax\icon_picker' ) ) {
	/**
	 * Class Icon_Picker
	 *
	 * @package WPOnion\Ajax
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Icon_Picker extends Ajax {
		/**
		 * Runs.
		 */
		public function run() {
			$module = $this->get_module();
			$fields = $module->fields();
			$field  = $fields->get( $this->field_path() );

			$libs     = Icons::icon_list();
			$enabled  = ( isset( $field['enabled'] ) ) ? $field['enabled'] : true;
			$disabled = ( isset( $field['disabled'] ) ) ? $field['disabled'] : false;

			if ( wponion_is_array( $enabled ) ) {
				foreach ( $libs as $name => $_n ) {
					if ( ! in_array( $name, $enabled, true ) ) {
						unset( $libs[ $name ] );
					}
				}
			} elseif ( is_string( $enabled ) && ( true !== $enabled || false !== $enabled ) && isset( $libs[ $enabled ] ) ) {
				$libs = $libs[ $enabled ];
			}

			if ( wponion_is_array( $disabled ) && wponion_is_array( $libs ) ) {
				foreach ( $libs as $name => $_n ) {
					if ( in_array( $name, $disabled, true ) ) {
						unset( $libs[ $name ] );
					}
				}
			}

			$default_lib  = wponion_is_array( $libs ) ? current( array_keys( $libs ) ) : $libs;
			$selected_lib = $this->request( 'wponion-icon-lib', $default_lib );
			$selected_lib = ( ! isset( $libs[ $selected_lib ] ) ) ? $default_lib : $selected_lib;
			$json         = Icons::get( $selected_lib );
			$html         = '<div class="wponion-icon-picker-model-header">';
			$html         = $html . '<input type="text" placeholder="' . __( 'Search Icon', 'wponion' ) . '"/>';

			if ( wponion_is_array( $libs ) && count( $libs ) > 1 ) {
				$html = $html . '<select>';
				foreach ( $libs as $lib => $ejson ) {
					$is_selected = ( $lib === $selected_lib ) ? ' selected="selected" ' : '';
					$html        = $html . '<option value="' . $lib . '" ' . $is_selected . '>' . $ejson . '</option>';
				}
				$html .= '</select>';
			}
			$html .= '</div>';
			if ( wponion_is_array( $json ) && ! empty( $json ) ) {
				$html .= '<div class="wponion-icon-picker-container-scroll"><div class="wponion-icon-picker-container">';
				foreach ( $json as $json_title => $icons ) {
					if ( wponion_is_array( $icons ) ) {
						foreach ( $icons as $key => $icon ) {
							$_icon = ( is_numeric( $key ) ) ? $icon : $key;
							$title = ( is_numeric( $key ) ) ? $icon : $icon;
							$html  .= '<div class="wponion-icon-preview-wrap">';
							$html  .= '<span data-icon="' . $_icon . '" title="' . $title . '" class="wponion-icon-preview">' . wponion_icon( $_icon ) . '</span>';
							$html  .= '</div>';
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
				$this->error( __( 'Icon Library Not found', 'wponion' ) );
			}
			$html .= '</div>';
			$this->json_success( $html );
		}
	}
}
