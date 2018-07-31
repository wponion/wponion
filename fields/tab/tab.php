<?php
/**
 *
 * Initial version created 23-05-2018 / 10:12 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\tab' ) ) {
	/**
	 * Class WPOnion_Field_tab
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class tab extends \WPOnion\Field {
		protected function output() {
			echo $this->before();
			echo $this->tab_output();
			echo $this->after();
		}

		protected function tab_output() {
			echo '<div class="wponion-tab-wrap wponion-tabs-' . $this->data( 'tab_style' ) . '">';
			$nav     = '<ul class="wponion-tab-menus">';
			$content = '';

			foreach ( $this->data( 'sections' ) as $section ) {
				$section = $this->parse_args( $section, array(
					'name'     => false,
					'title'    => false,
					'icon'     => false,
					'un_array' => false,
					'fields'   => array(),
				) );
				$slug    = ( ! empty( $section['name'] ) ) ? $section['name'] : sanitize_title( $section['title'] );
				$unique  = ( true === $section['un_array'] ) ? $this->name() : $this->name( '[' . $slug . ']' );
				$icon    = ( filter_var( $section['icon'], FILTER_VALIDATE_URL ) ) ? '<img src="' . $section['icon'] . '">' : wponion_icon( $section['icon'] );

				$nav     .= '<li class="wponion-tab"><a href="" data-tab-name="' . $slug . '">' . $icon . ' ' . $section['title'] . '</a></li>';
				$content .= '<div id="wponion-tab-' . $slug . '" class="wponion-tab-page">';

				foreach ( $section['fields'] as $field ) {
					$content .= $this->sub_field( $field, _wponion_get_field_value( $field, $this->value() ), $unique );
				}

				$content .= '</div>';
			}

			$nav .= '</ul>';
			echo $nav;
			echo '<div class="wponion-tab-pages">' . $content . '</div>';
			echo '</div>';
		}

		public function field_assets() {
		}

		/**
		 * @return array
		 */
		protected function field_default() {
			return array(
				'sections'  => array(),
				'tab_style' => 'box', #box,left
			);
		}
	}
}
