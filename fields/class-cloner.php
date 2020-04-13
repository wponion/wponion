<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Cloner' ) ) {
	/**
	 * Class Cloner
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Cloner extends Field {
		/**
		 * @var null
		 * @access
		 */
		protected $actual_type = null;

		/**
		 * Field's Custom Wrap Class.
		 *
		 * @return string
		 */
		protected function field_wrap_class() {
			return 'wponion-has-nested-fields';
		}

		/**
		 * Handles Fields Wrapper.
		 */
		protected function wrapper() {
			$this->actual_type   = $this->field['type'];
			$this->field['type'] = 'clone';
			parent::wrapper();
			$this->field['type'] = $this->actual_type;
		}

		/**
		 * Renders HTML for clone button.
		 *
		 * @param string $type
		 *
		 * @return string
		 */
		protected function clone_btn( $type = 'add' ) {
			if ( 'add' === $type ) {
				return $this->sub_field( $this->handle_args( 'label', $this->data( 'clone' )['add_button'], array(
					'class'       => array( 'button', 'button-primary' ),
					'type'        => 'button',
					'attributes'  => array(
						'data-wponion-jsid'      => $this->js_field_id(),
						'data-wponion-clone-add' => 'yes',
					),
					'only_field'  => true,
					'button_type' => 'button',
					'label'       => sprintf( __( 'Add %s ', 'wponion' ), wponion_icon( 'wpoic-plus-circle' ) ),
				) ), null, null );

			}

			return wponion_icon( '  wpoic-delete wponion-remove' );
		}

		/**
		 * Renders Single Element HTML.
		 *
		 * @param $value
		 * @param $extra_unique
		 *
		 * @return string
		 */
		protected function clone_single_element( $value, $extra_unique ) {
			$sort   = $this->data( 'clone' );
			$return = '<div class="wponion-field-clone" data-wponion-jsid="' . $this->js_field_id() . '">';
			if ( false !== $sort['sort'] ) {
				//$return .= '<div class="wponion-field-clone-sorter">' . wponion_icon( $this->data( 'clone' )['sort'] ) . '</div>';
			}
			$args                    = $this->get_clone_attrs();
			$args['value']           = $value;
			$args['fieldset_column'] = 'col-xs-12';
			$args['name']            = $this->unique( $this->field_id() . '/' . $extra_unique . '/' );
			$return                  .= '<div class="wponion-clone-action">';
			$return                  .= '<div class="cloner-sort">' . wponion_icon( $this->data( 'clone' )['sort'] ) . '</div>';
			$return                  .= '<div class="cloner-remove">' . $this->clone_btn( 'delete' ) . '</div>';
			$return                  .= '</div>';
			$return                  .= '<div class="wponion-clone-content">';
			$return                  .= $this->sub_field( $args, $value, $this->unique( $this->field_id() . '/' . $extra_unique . '/' ) );
			$return                  .= '</div>';
			$return                  .= '</div>';
			return $return;
		}

		/**
		 * Handles Cloneable Fields.
		 *
		 * @return string
		 */
		protected function _clone_fields() {
			$values = $this->value();
			$count  = ( empty( $values ) ) ? 0 : count( $values );
			$return = '<div class="wponion-clone-wrap" data-wponion-clone-count="' . $count . '" data-wponion-jsid="' . $this->js_field_id() . '">';

			if ( wponion_is_array( $values ) ) {
				foreach ( $values as $value_id => $value ) {
					$return .= $this->clone_single_element( $value, $value_id );
				}
			}
			$this->localize_field( array( 'clone_template' => $this->clone_single_element( null, '{wponionCloneID}' ) ) );
			$return .= '</div>';
			$return .= '<div class="wponion-clone-actions">' . $this->clone_btn() . '</div> ';
			return $return;
		}

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			$this->field['type'] = $this->actual_type;
			echo $this->before();
			echo $this->_clone_fields();
			echo $this->after();
		}

		/**
		 * Returns Cloneable Attrs.
		 *
		 * @return array
		 */
		public function get_clone_attrs() {
			$field             = $this->orginal_field;
			$field['in_clone'] = true;
			$remove            = array(
				'title',
				'help',
				'desc',
				'desc_field',
				'before_title',
				'after_title',
				'before',
				'after',
				'placeholder',
				'default',
				'dependency',
				'wrap_attributes',
				'clone_settings',
			);

			foreach ( $remove as $k ) {
				unset( $field[ $k ] );
			}

			return $field;
		}

		/**
		 * Checks & Updat fields args based on field config.
		 *
		 * @param array $data
		 *
		 * @return array
		 */
		protected function handle_field_args( $data = array() ) {
			$defaults = array(
				'animations'  => array(
					'show' => false,
					'hide' => false,
				),
				'sort'        => true,
				'toast_error' => false,
				'error_msg'   => null,
				'limit'       => null,
				'add_button'  => sprintf( __( 'Add %s ', 'wponion' ), wponion_icon( 'wpoic-plus-circle' ) ),
			);

			if ( ! wponion_is_array( $data['clone'] ) ) {
				$data['clone'] = ( isset( $data['clone_settings'] ) && is_array( $data['clone_settings'] ) ) ? $data['clone_settings'] : array();
			}
			$data['clone'] = $this->parse_args( $data['clone'], $defaults );

			if ( null === $data['clone']['error_msg'] ) {
				/* translators: Adds Max Count */
				$data['clone']['error_msg'] = sprintf( __( 'You Cannot Add More Than %s', 'wponion' ), $data['clone']['limit'] );
			}

			$data['clone']['error_msg'] = $this->handle_args( 'content', $data['clone']['error_msg'], array(
				'type' => 'notice_danger',
			), array( 'only_field' => true ) );
			$data['clone']['error_msg'] = wponion_add_element( $data['clone']['error_msg'], false, false );

			if ( true === $data['clone']['sort'] ) {
				$data['clone']['sort'] = 'wpoic-menu';
			}

			return $data;
		}

		/**
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			$sort = $this->data( 'clone' );
			if ( false !== $sort['sort'] ) {
				wp_enqueue_script( 'jquery-ui-sortable' );
			}
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array();
		}

		/**
		 * Returns A JS Args.
		 *
		 * @return array
		 */
		protected function js_field_args() {
			return array(
				'clone' => array(
					'animations'  => $this->data( 'clone' )['animations'],
					'add_button'  => $this->data( 'clone' )['add_button'],
					'sort'        => $this->data( 'clone' )['sort'],
					'limit'       => $this->data( 'clone' )['limit'],
					'error_msg'   => $this->data( 'clone' )['error_msg'],
					'toast_error' => $this->data( 'clone' )['toast_error'],
				),
			);
		}
	}
}
