<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\Color_Group' ) ) {
	/**
	 * Class Color_Picker
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Color_Group extends Field {

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			if ( wponion_is_array( $this->data( 'options' ) ) ) {
				foreach ( $this->data( 'options' ) as $slug => $option ) {
					$field_args = $this->handle_args( 'title', $option, array(
						'settings' => $this->data( 'settings' ),
					), array(
						'id'         => $slug,
						'type'       => 'color_picker',
						'wrap_class' => 'wpo-col-xs-12 wpo-col-md-3',
					) );

					if ( isset( $field_args['label'] ) ) {
						$title               = $field_args['label'];
						$field_args['title'] = $title;
						unset( $field_args['label'] );
					}
					echo $this->sub_field( $field_args, $this->value( $slug ), $this->name() );
				}
			}
			echo $this->after();
		}

		/**
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			wponion_load_asset( 'wponion-pickr' );
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'settings' => array(
					'theme' => 'monolith',
				),
				'options'  => array(),
			);
		}
	}
}
