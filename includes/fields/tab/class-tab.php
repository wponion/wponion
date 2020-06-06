<?php

namespace WPOnion\Field;

use WPOnion\Field;
use WPOnion\Util;

defined( 'ABSPATH' ) || exit;

/**
 * Class Tab
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Tab extends Field {

	/**
	 * Generates Final HTML Output.
	 *
	 * @return mixed|void
	 */
	protected function output() {
		return $this->before() . $this->tab_output() . $this->after();
	}

	/**
	 * Tabs HTML Output.
	 */
	protected function tab_output() {
		$return = '';
		$fields = $this->option( 'fields' );
		if ( ! empty( $fields ) && wponion_is_array( $fields ) ) {

			$return  .= '<div class="wponion-tab-wrap wponion-tabs-' . $this->option( 'tab_style' ) . '">';
			$nav     = '<ul class="wponion-tab-menus">';
			$content = '';

			$first = current( $fields );
			/**
			 * @var \WPO\Container $section
			 * @var \WPO\Field     $field
			 */
			foreach ( $fields as $section ) {
				$active       = ( $first['id'] === $section['id'] );
				$menu         = ( $active ) ? 'wponion-tab-current' : '';
				$style        = ( $active ) ? 'style="display:block;"' : '';
				$slug         = ( ! empty( $section['id'] ) ) ? $section['id'] : sanitize_title( $section['id'] );
				$unique       = ( wponion_is_unarrayed( $section ) ) ? $this->name() : $this->name( $slug );
				$icon         = wponion_icon( $section['icon'] );
				$nav_html     = "<li class=\"wponion-tab ${menu}\"><a href=\"\" class=\"wponion-tab-a\" data-tab-name=\"${slug}\">${icon} {$section['title']}</a></li>";
				$content_html = "<div id=\"wponion-tab-${slug}\" class=\"wponion-tab-page\" ${style}> <div class=\"wpo-row wponion-row\">";

				if ( ! empty( $section['dependency'] ) ) {
					$menu_instance = new Util( $nav_html );
					$menu_instance->dependency( $section['dependency'] );
					$nav .= $menu_instance->element();
				} else {
					$nav .= $nav_html;
				}

				$content .= $content_html;

				if ( $section['fields'] ) {
					foreach ( $section['fields'] as $field ) {
						$value = ( false === $this->value( $slug ) ) ? $this->value : $this->value( $slug );
						if ( ! isset( $field['sub'] ) ) {
							$sub          = $this->option( 'sub' );
							$field['sub'] = ( ! empty( $sub ) ) ? $sub . '_' . $this->field_id() . '_' . $section['id'] : $this->field_id() . '_' . $section['id'];
						}
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
	 */
	public function assets() {
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
		return array( 'tab_style' => 'style1' );
	}
}
