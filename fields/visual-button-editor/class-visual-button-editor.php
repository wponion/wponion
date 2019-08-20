<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! class_exists( '\WPOnion\Field\Visual_Button_Editor' ) ) {
	/**
	 * Class Visual_Button_Editor
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class Visual_Button_Editor extends Field {
		/**
		 * @param \WPO\Fields\Fieldset $tab
		 */
		protected function basic( $tab ) {
			if ( false !== $this->data( 'label' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'label' ), array(
					'title'       => __( 'Button Label' ),
					'placeholder' => __( 'Click To Learn More' ),
					'style'       => 'min-width:350px',
					'type'        => 'text',
				), array( 'id' => 'label' ) ) )
					->wrap_id( 'button-label' );
			}

			if ( false !== $this->data( 'icon' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'icon' ), array(
					'title' => __( 'Icon' ),
					'type'  => 'icon_picker',
				), array( 'id' => 'icon' ) ) )
					->wrap_id( 'button-icon' );
			}

			if ( false !== $this->data( 'url' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'url' ), array(
					'title'    => __( 'Link' ),
					'type'     => 'wp_link',
					'settings' => array(
						'url'        => true,
						'title'      => false,
						'target'     => false,
						'example'    => false,
						'show_input' => true,
					),
				), array( 'id' => 'link' ) ) );
			}

			if ( false !== $this->data( 'css_id' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'css_id' ), array(
					'title'      => __( 'Element ID' ),
					'style'      => 'min-width:350px',
					'desc_field' => __( 'Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only).' ),
					'type'       => 'text',
				), array( 'id' => 'elem-id' ) ) );
			}

			if ( false !== $this->data( 'css_class' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'css_class' ), array(
					'title'      => __( 'Element CSS Class' ),
					'style'      => 'min-width:350px',
					'desc_field' => __( 'Add an extra class name to the element and refer to it from Custom CSS option.' ),
					'type'       => 'text',
				), array( 'id' => 'elem-css-class' ) ) );
			}
		}

		/**
		 * @param \WPO\Fields\Fieldset $tab
		 */
		protected function spacing( $tab ) {
			if ( false !== $this->data( 'margin' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'margin' ), array(
					'desc_field' => __( 'CSS `margin` properties are used to create space around elements' ),
				), array(
					'id'      => 'margin',
					'type'    => 'spacing',
					'wrap_id' => 'button-margin',
				) ) );
			}

			if ( false !== $this->data( 'padding' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'padding' ), array(
					'desc_field' => __( 'The CSS `padding` properties are used to generate space around an element\'s content, inside of any defined borders' ),
				), array(
					'id'      => 'padding',
					'type'    => 'spacing',
					'wrap_id' => 'button-padding',
				) ) );
			}

			if ( false !== $this->data( 'border-radius' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'border-radius' ), array(), array(
					'id'         => 'border-radius',
					'desc_field' => __( '`border-radius` property defines the radius of the element\'s corners' ),
					'type'       => 'spacing',
					'all'        => array(
						'surfix'      => 'px',
						'placeholder' => '20',
					),
					'unit'       => false,
					'wrap_id'    => 'button-border-radius',
				) ) );
			}
		}

		/**
		 * @param \WPO\Fields\Fieldset $tab
		 */
		protected function typography( $tab ) {
			if ( false !== $this->data( 'typography' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'typography' ), array(
					'title'            => __( 'Text Styling' ),
					'style'            => 'min-width:350px',
					'desc_field'       => __( 'Add an extra class name to the element and refer to it from Custom CSS option.' ),
					'color'            => false,
					'writing_mode'     => false,
					'text_orientation' => false,
				), array(
					'id'         => 'font_style',
					'hide_title' => true,
					'preview'    => false,
					'type'       => 'typography',
				) ) );
			}
		}

		/**
		 * @param \WPO\Fields\Fieldset $tab
		 * @param string               $css_action
		 */
		protected function css_actions( $tab, $css_action ) {
			if ( false !== $this->data( 'background' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'background' ), array(
					'title' => __( 'Background' ),
				), array(
					'id'      => 'background',
					'type'    => 'color_picker',
					'wrap_id' => 'button-' . $css_action . '-background',
				) ) );
			}

			if ( false !== $this->data( 'text_color' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'text_color' ), array(
					'title' => __( 'Text Color' ),
				), array(
					'id'      => 'text_color',
					'type'    => 'color_picker',
					'wrap_id' => 'button-' . $css_action . '-color',
				) ) );
			}

			if ( false !== $this->data( 'text_shadow' ) ) {
				$data      = $this->data( 'text_shadow' );
				$is_single = ( is_array( $data ) && isset( $data['multiple'] ) && false === $data['multiple'] ) ? false : true;
				$tab->field( $this->handle_args( 'title', $this->data( 'text_shadow' ), array(
					'title'      => __( 'Text Shadow' ),
					'desc_field' => $css_action,
				), array(
					'id'         => 'text_shadow',
					'type'       => 'css_shadow',
					'clone'      => $is_single,
					'horizontal' => ( $is_single ) ? true : false,
					'wrap_id'    => 'button-' . $css_action . '-text-shadow',
					'preview'    => false,
				) ) );
			}

			if ( false !== $this->data( 'box_shadow' ) ) {
				$data      = $this->data( 'box_shadow' );
				$is_single = ( is_array( $data ) && isset( $data['multiple'] ) && false === $data['multiple'] ) ? false : true;
				$tab->field( $this->handle_args( 'title', $this->data( 'box_shadow' ), array(
					'title' => __( 'Box Shadow' ),
				), array(
					'id'          => 'box_shadow',
					'shadow_type' => 'box',
					'type'        => 'css_shadow',
					'horizontal'  => ( $is_single ) ? true : false,
					'clone'       => $is_single,
					'wrap_id'     => 'button-' . $css_action . '-box-shadow',
					'preview'     => false,
				) ) );
			}
		}

		/**
		 * @param \WPO\Fields\Fieldset $tab
		 */
		protected function normal( $tab ) {
			$this->css_actions( $tab, 'normal' );
		}

		/**
		 * @param \WPO\Fields\Fieldset $tab
		 */
		protected function hover( $tab ) {
			$this->css_actions( $tab, 'hover' );
		}

		/**
		 * @param \WPO\Fields\Fieldset $tab
		 */
		protected function focus( $tab ) {
			$this->css_actions( $tab, 'focus' );
		}

		protected function field_wrap_class() {
			return 'wponion-has-nested-fields';
		}

		protected function tab_field() {
			/**
			 * @var \WPO\Fields\Tab $field
			 */
			$field = wpo_field( 'tab', 'button_editor' );
			$field->un_array( true )
				->tab_style( 'style2' )
				->horizontal( true );

			$this->basic( $field->container( 'general', __( 'Basic' ) )
				->un_array( true ) );

			if ( false !== $this->data( 'typography' ) ) {
				$this->typography( $field->container( 'font-styler', __( 'Text Styling' ) ) );
			}

			$this->spacing( $field->container( 'spacing', __( 'Spacing' ) )
				->un_array( true ) );

			$this->normal( $field->container( 'normal', __( 'General Style' ) ) );
			$this->hover( $field->container( 'hover', __( 'Hover Style' ) ) );
			$this->focus( $field->container( 'focus', __( 'Focus Style' ) ) );

			return $field;
		}

		protected function output() {
			echo $this->before();
			echo $this->sub_field( $this->tab_field(), $this->value(), $this->unique( $this->field_id() ) );

			echo '<div class="button-editor-preview" id="' . $this->js_field_id() . 'buttonpreview">';
			echo '<button type="button" id="' . $this->js_field_id() . 'buttonpreview"><span class="button-icon"></span><span class="button-label">' . __( 'Preview' ) . '</span></button>';
			echo '<style></style>';
			echo '</div>';
			echo '<style class="hidden hover"></style>
<style class="hidden focus"></style>
<style class="hidden normal">a</style>';
			echo $this->after();
		}

		protected function field_default() {
			return array(
				'label'           => __( 'Button Label' ),
				'icon'            => __( 'Button Icon' ),
				'url'             => __( 'Link' ),
				'css_class'       => __( 'Extra class name' ),
				'css_id'          => __( 'Element ID' ),
				'spacing-heading' => __( 'Button Spacing' ),
				'margin'          => __( 'Margin' ),
				'padding'         => __( 'Padding' ),
				'border-radius'   => __( 'Border Radius' ),
				'typography'      => __( 'Text Styling' ),
				'background'      => __( 'Background' ),
				'text_color'      => __( 'Text Color' ),
				'text_shadow'     => __( 'Text Shadow' ),
				'box_shadow'      => __( 'Box Shadow' ),

			);
		}

		public function field_assets() {
		}
	}
}
