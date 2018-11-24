<?php
/**
 *
 * Initial version created 19-05-2018 / 09:25 AM
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

if ( ! class_exists( '\WPOnion\Field\Cloner' ) ) {
	/**
	 * Class Cloner
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Cloner extends \WPOnion\Field {
		/**
		 * Handles Fields Wrapper.
		 */
		protected function wrapper() {
			$type                = $this->field['type'];
			$this->field['type'] = 'clone';
			parent::wrapper();
			$this->field['type'] = $type;
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
					'label'       => __( 'Add + ' ),
				) ), null, null );

			}

			return '<a href="#" onclick="return false;" class="dashicons wponion-remove "></a>';
		}

		/**
		 * Renders Single Element HTML.
		 *
		 * @param $value
		 * @param $extra_unique
		 */
		protected function clone_single_element( $value, $extra_unique ) {
			$sort = $this->data( 'clone' );
			echo '<div class="wponion-field-clone" data-wponion-jsid="' . $this->js_field_id() . '">';
			if ( false !== $sort['sort'] ) {
				echo '<div class="wponion-field-clone-sorter">' . wponion_icon( $this->data( 'clone' )['sort'] ) . '</div>';
			}
			$args          = $this->get_clone_attrs();
			$args['name']  = $this->name( $extra_unique );
			$args['value'] = $value;
			echo wponion_add_element( $args, $value, $this->unique() );
			echo '<div class="wponion-clone-action">' . $this->clone_btn( 'remove' ) . '</div> ';
			echo '</div>';
		}

		/**
		 * Handles Cloneable Fields.
		 */
		protected function _clone_fields() {
			$values = $this->value();
			$count  = ( empty( $values ) ) ? 0 : count( $values );
			echo '<div class="wponion-clone-wrap" data-wponion-clone-count="' . $count . '" data-wponion-jsid="' . $this->js_field_id() . '">';

			if ( is_array( $values ) ) {
				foreach ( $values as $value_id => $value ) {
					echo $this->clone_single_element( $value, '[' . $value_id . ']' );
				}
			}

			$this->catch_output( 'start' );
			echo $this->clone_single_element( null, '[{wponionCloneID}]' );
			$this->localize_field( array( 'clone_template' => $this->catch_output( 'stop' ) ) );
			echo '</div>';
			echo '<div class="wponion-clone-actions">' . $this->clone_btn() . '</div> ';
		}

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
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
		 * Handles Fields Default args.
		 *
		 * @param array $data
		 *
		 * @return array
		 */
		public function handle_field_args( $data = array() ) {
			$defaults = array(
				'animations'    => array(
					'show' => false,
					'hide' => false,
				),
				'sort'          => true,
				'toast_error'   => false,
				'error_msg'     => null,
				'limit'         => null,
				'add_button'    => __( 'Add +' ),
				'remove_button' => wponion_icon( 'dashicons dashicons-trash' ),
			);

			if ( ! is_array( $data['clone'] ) ) {
				$data['clone'] = array();
			}
			$data['clone'] = $this->parse_args( $data['clone'], $defaults );

			if ( null === $data['clone']['error_msg'] ) {
				$data['clone']['error_msg'] = sprintf( __( 'You Cannot Add More Than %s' ), $data['clone']['limit'] );
			}

			$data['clone']['error_msg'] = $this->handle_args( 'content', $data['clone']['error_msg'], array(
				'type' => 'notice_danger',
			), array( 'only_field' => true ) );
			$data['clone']['error_msg'] = wponion_add_element( $data['clone']['error_msg'], false, false );

			if ( true === $data['clone']['sort'] ) {
				$data['clone']['sort'] = 'dashicons dashicons-menu';
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
			wp_enqueue_script( 'wponion-cloner' );
			if ( false !== $sort['sort'] ) {
				wp_enqueue_script( 'jquery-ui-sortable' );
			}
		}

		/**
		 * Returns Fields Default Value.
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
					//'remove_button' => '<i class="dashicons dashicons-trash"></i>',
					'limit'       => $this->data( 'clone' )['limit'],
					'error_msg'   => $this->data( 'clone' )['error_msg'],
					'toast_error' => $this->data( 'clone' )['toast_error'],
				),
			);
		}
	}
}
