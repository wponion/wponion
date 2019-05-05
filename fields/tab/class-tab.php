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

if ( ! class_exists( '\WPOnion\Field\Tab' ) ) {
	/**
	 * Class WPOnion_Field_tab
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Tab extends \WPOnion\Field {
		/**
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
			if ( $this->field instanceof \WPO\Tab && ! empty( $this->field->containers() ) ) {

				echo '<div class="wponion-tab-wrap wponion-tabs-' . $this->data( 'tab_style' ) . '">';
				$nav     = '<ul class="wponion-tab-menus">';
				$content = '';

				$first = $this->field->first_container();

				/**
				 * @var \WPO\Container $section
				 * @var \WPO\Field     $field
				 */
				foreach ( $this->field->containers() as $section ) {
					$active = ( $first->name() === $section->name() );
					$menu   = ( $active ) ? 'wponion-tab-current' : '';
					$style  = ( $active ) ? 'style="display:block;"' : '';

					$slug    = ( ! empty( $section->name() ) ) ? $section->name() : sanitize_title( $section->name() );
					$unique  = ( true === $section->get_var( 'un_array' ) ) ? $this->name() : $this->name( '[' . $slug . ']' );
					$icon    = ( filter_var( $section->icon(), FILTER_VALIDATE_URL ) ) ? '<img src="' . $section->icon() . '">' : wponion_icon( $section->icon() );
					$nav     .= '<li class="wponion-tab ' . $menu . '"><a href="" data-tab-name="' . $slug . '">' . $icon . ' ' . $section->title() . '</a></li>';
					$content .= '<div id="wponion-tab-' . $slug . '" class="wponion-tab-page" ' . $style . '>';

					if ( $section->has_fields() ) {
						foreach ( $section->fields() as $field ) {
							$this->catch_output( 'start' );
							echo $this->sub_field( $field, wponion_get_field_value( $field, $this->value( $slug ) ), $unique );
							$content .= $this->catch_output( 'stop' );
						}
					}

					$content .= '</div>';
				}

				$nav .= '</ul>';
				echo $nav;
				echo '<div class="wponion-tab-pages">' . $content . '</div>';
				echo '</div>';
			}
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
