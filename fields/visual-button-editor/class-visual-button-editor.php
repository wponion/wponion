<?php

namespace WPOnion\Field;

if ( ! class_exists( '\WPOnion\Field\Visual_Button_Editor' ) ) {
	class Visual_Button_Editor extends \WPOnion\Field {

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
				), array( 'elem-id' ) ) );
			}

			if ( false !== $this->data( 'css_class' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'css_class' ), array(
					'title'      => __( 'Element CSS Class' ),
					'style'      => 'min-width:350px',
					'desc_field' => __( 'Add an extra class name to the element and refer to it from Custom CSS option.' ),
					'type'       => 'text',
				), array( 'elem-css-class' ) ) );
			}

			if ( ! empty( array_filter( array(
				$this->data( 'margin' ),
				$this->data( 'padding' ),
				$this->data( 'border-radius' ),
			) ) ) ) {
				$tab->subheading( $this->data( 'spacing-heading' ) );
			}

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
					'wrap_id'    => 'button-border-radius',
				) ) );
			}

		}


		protected function field_wrap_class() {
			return 'wponion-has-nested-fields';
		}

		/**
		 * @param \WPO\Fields\Fieldset $tab
		 */
		protected function css_colors( $tab ) {
			$tab->color_group( 'background_color', __( 'Background Color' ) )
				->option( 'normal', __( 'Normal' ) )
				->option( 'hover', __( 'Hover' ) )
				->option( 'focus', __( 'Focus' ) );

			$tab->color_group( 'text_color', __( 'Text Color' ) )
				->option( 'normal', __( 'Normal' ) )
				->option( 'hover', __( 'Hover' ) )
				->option( 'focus', __( 'Focus' ) );

			$tab->subheading( __( 'Text Shadow' ) );
			$tab->css_shadow( 'text_shadow' )
				->text_shadow();

			$tab->subheading( __( 'Box Shadow' ) );
			$tab->css_shadow( 'box_shadow', __( 'WOWOWOWO' ) )
				->box_shadow()
				->_clone( true )
				->clone_settings( array( 'add_button' => __( 'Add Box Shadow (+)' ) ) );
		}

		protected function tab_field() {
			/**
			 * @var \WPO\Fields\Tab $field
			 */
			$field = wpo_field( 'tab', 'button_editor' );
			$field->un_array( true )
				->horizontal( true );

			$this->basic( $field->container( 'general', __( 'Basic' ) )
				->un_array( true ) );
			$this->css_colors( $field->container( 'colors', __( 'Colors' ) )
				->un_array( true ) );
			return $field;
		}

		protected function output() {
			echo $this->before();
			echo $this->sub_field( $this->tab_field(), $this->value(), $this->name() );

			echo '<div class="button-editor-preview" id="' . $this->js_field_id() . 'buttonpreview">';
			echo '<button type="button" id="' . $this->js_field_id() . 'buttonpreview"><span class="button-icon"></span><span class="button-label">' . __( 'Preview' ) . '</span></button>';
			echo '<style></style>';
			echo '</div>';

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
			);
		}

		public function field_assets() {
		}
	}
}
