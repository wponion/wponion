<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\Input_Group' ) ) {
	/**
	 * Class Input_Group
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class Input_Group extends Field {

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			$fields = $this->option( 'fields' );
			if ( wponion_is_array( $fields ) ) {
				echo '<div class=" wpo-row">';
				foreach ( $fields as $id => $data ) {
					$fid  = ( wpo_is_field( $data ) ) ? wponion_field_id( $data ) : false;
					$fid  = ( true === is_numeric( $id ) && false === $fid ) ? wponion_hash_array( $data ) : $id;
					$args = $this->handle_args( 'title', $data, array(
						'type'       => 'text',
						'horizontal' => true,
						'wrap_class' => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
						'id'         => $fid,
					) );

					if ( empty( $args['id'] ) ) {
						$args['id'] = $fid;
					}
					echo $this->sub_field( $args, $this->value( $args['id'] ), $this->name() );
				}
				echo '</div>';
			}
			echo $this->after();
		}

		/**
		 * Handles Fields Assets.
		 */
		public function assets() {
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array( 'fields' => array() );
		}
	}
}
