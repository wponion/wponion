<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Tab' ) ) {
	/**
	 * Class WPOnion_Field_tab
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Tab extends Field {

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			echo $this->tab_output();
			echo $this->after();
		}

		/**
		 * Tabs HTML Output.
		 */
		protected function tab_output() {
			$return = '';
			$fields = $this->field['fields'];
			if ( ! empty( $fields ) && wponion_is_array( $fields ) ) {

				$return  .= '<div class="wponion-tab-wrap wponion-tabs-' . $this->data( 'tab_style' ) . '">';
				$nav     = '<ul class="wponion-tab-menus">';
				$content = '';

				$first = current( $fields );
				/**
				 * @var \WPO\Container $section
				 * @var \WPO\Field     $field
				 */
				foreach ( $fields as $section ) {
					$active     = ( $first['id'] === $section['id'] );
					$menu       = ( $active ) ? 'wponion-tab-current' : '';
					$style      = ( $active ) ? 'style="display:block;"' : '';
					$slug       = ( ! empty( $section['id'] ) ) ? $section['id'] : sanitize_title( $section['id'] );
					$unique     = ( wponion_is_unarrayed( $section ) ) ? $this->name() : $this->name( $slug );
					$value_slug = ( ! wponion_is_unarrayed( $section ) ) ? $slug : '';
					$icon       = ( filter_var( $section['icon'], FILTER_VALIDATE_URL ) ) ? '<img src="' . $section['icon'] . '">' : wponion_icon( $section['icon'] );
					$nav        .= '<li class="wponion-tab ' . $menu . '"><a href="" class="wponion-tab-a" data-tab-name="' . $slug . '">' . $icon . ' ' . $section['title'] . '</a></li>';
					$content    .= '<div id="wponion-tab-' . $slug . '" class="wponion-tab-page" ' . $style . '><div class="wpo-row wponion-row">';

					if ( $section['fields'] ) {
						foreach ( $section['fields'] as $field ) {
							$value   = ( false === $this->value( $slug ) ) ? $this->value : $this->value( $slug );
							$content .= $this->sub_field( $field, wponion_get_field_value( $field, $value ), $unique );
						}
					}
					$content .= '</div></div>';
				}
				$nav    .= '</ul>';
				$return .= $nav . $content;
				$return .= '</div>';
			}
			return $return;
		}

		/**
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array( 'tab_style' => 'style1' );
		}
	}
}
