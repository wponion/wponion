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
		 * @param string $config_key
		 * @param bool   $default
		 * @param bool   $field
		 *
		 * @return bool|mixed
		 */
		protected function field_config( $config_key = '', $default = false, $field = false ) {
			return ( isset( $field[ $config_key ] ) ) ? $field[ $config_key ] : $default;
		}

		/**
		 * @param array                              $libs
		 * @param \WPO\Field|\WPO\Fields\Icon_Picker $field
		 *
		 * @return mixed
		 */
		protected function enabled_icons( $libs, $field ) {
			$enabled = $this->field_config( 'enabled', true, $field );
			if ( true === $enabled ) {
				return $libs;
			}
			$enabled = ( ! is_array( $enabled ) ) ? array( $enabled ) : $enabled;
			if ( wponion_is_array( $enabled ) ) {
				foreach ( $libs as $name => $_n ) {
					if ( ! in_array( $name, $enabled, true ) ) {
						unset( $libs[ $name ] );
					}
				}
			}
			return $libs;
		}

		/**
		 * @param array                              $libs
		 * @param \WPO\Fields\Icon_Picker|\WPO\Field $field
		 *
		 * @return array
		 */
		protected function disabled_icons( $libs, $field ) {
			$disabled = $this->field_config( 'disabled', false, $field );
			if ( wponion_is_array( $disabled ) && wponion_is_array( $libs ) ) {
				foreach ( $libs as $name => $_n ) {
					if ( in_array( $name, $disabled, true ) ) {
						unset( $libs[ $name ] );
					}
				}
			}
			return $libs;
		}

		/**
		 * Runs.
		 */
		public function run() {
			$field = $this->get_field();
			$libs  = $this->disabled_icons( $this->enabled_icons( Icons::icon_list(), $field ), $field );
			$libs  = ( ! wponion_is_array( $libs ) ) ? array() : $libs;
			if ( empty( $libs ) ) {
				$this->error( __( 'Icon Library Not found', 'wponion' ) );
			}

			$group_icons      = $this->field_config( 'group_icons', false, $field );
			$default_lib      = wponion_is_array( $libs ) ? current( array_keys( $libs ) ) : $libs;
			$is_first_load    = $this->request( 'first_load', false );
			$selected_lib     = $this->request( 'wponion-icon-lib', $default_lib );
			$selected_lib     = ( ! isset( $libs[ $selected_lib ] ) ) ? $default_lib : $selected_lib;
			$json             = Icons::get( $selected_lib );
			$this->add_assets = $json->assets( false );

			$html = '';

			if ( 'no' !== $is_first_load ) {
				$html = '<div class="wponion-icon-picker-model-header">';
				$html .= '<input type="text" placeholder="' . __( 'Search Icon', 'wponion' ) . '"/>';
				if ( wponion_is_array( $libs ) && count( $libs ) > 1 ) {
					$select = wpo_field( 'select' )
						->options( $libs )
						->only_field( true );
					$html   .= $select->render( $selected_lib );
				}
				$html .= '</div>';
				$html .= '<div class="wponion-icon-picker-container-scroll">';
			}

			if ( wponion_is_array( $json->icons() ) && ! empty( $json->icons() ) ) {
				$html .= '<div id="' . $selected_lib . '" class="wponion-icon-framework"><div class="wponion-icon-picker-container">';
				foreach ( $json->icons() as $json_title => $icons ) {
					if ( ! is_numeric( $json_title ) && wponion_is_array( $icons ) ) {
						$group = '';
						foreach ( $icons as $key => $icon ) {
							$group .= $this->single_icon_html( $key, $icon );
						}

						if ( true === $group_icons ) {
							/* @var \WPO\Fields\Accordion $acc */
							$acc = wpo_field( 'accordion', sanitize_title( $json_title ) );
							$acc->open();
							$acc->heading( $json_title );
							$acc->content( $group );
							$html .= $acc->render( false, false );
						} else {
							$html .= $group;
						}

						/*$html .= '<div id="group-' . sanitize_title( $json_title ) . '">';
						$html .= '<div class="wponion-icon-preview-wrap group_title"><h3>' . $json_title . '</h3></div>';
						$html .= $group;
						$html .= '</div>';*/
					} else {
						$html .= $this->single_icon_html( $json_title, $icons );
					}
				}
				$html .= '</div></div>';
			} else {
				$this->error( __( 'Icon Library Not found', 'wponion' ) );
			}
			$html .= '</div>';
			$html .= '</div>';
			$this->json_success( array( 'html' => $html ) );
		}

		/**
		 * @param $key
		 * @param $icon
		 *
		 * @return string
		 */
		protected function single_icon_html( $key, $icon ) {
			$_icon = ( is_numeric( $key ) ) ? $icon : $key;
			$title = ( is_numeric( $key ) ) ? $icon : $icon;
			$html  = '<div class="wponion-icon-preview-wrap">';
			$html  .= '<span data-icon="' . $_icon . '" title="' . $title . '" class="wponion-icon-preview">' . wponion_icon( $_icon ) . '</span>';
			$html  .= '</div>';
			return $html;
		}
	}
}
