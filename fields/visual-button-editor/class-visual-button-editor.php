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
				) ) );
			}

			if ( false !== $this->data( 'icon' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'icon' ), array(
					'title' => __( 'Icon' ),
					'type'  => 'icon_picker',
				) ) );
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
				) ) );
			}

			if ( false !== $this->data( 'css_id' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'css_id' ), array(
					'title'      => __( 'Element ID' ),
					'desc_field' => __( 'Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only).' ),
					'type'       => 'text',
				) ) );
			}

			if ( false !== $this->data( 'css_class' ) ) {
				$tab->field( $this->handle_args( 'title', $this->data( 'css_class' ), array(
					'title'      => __( 'Element CSS Class' ),
					'desc_field' => __( 'Add an extra class name to the element and refer to it from Custom CSS option.' ),
					'type'       => 'text',
				) ) );
			}
		}


		protected function field_wrap_class() {
			return 'wponion-has-nested-fields';
		}

		/**
		 * @param \WPO\Fields\Fieldset $tab
		 */
		protected function css_editor( $tab ) {
			$tab->field( 'visual_editor', __( 'CSS Editor' ), array(
				'background-color' => false,
				'background-image' => false,
				'background-style' => false,
			) );
		}

		/**
		 * @param \WPO\Fields\Fieldset $tab
		 */
		protected function css_colors( $tab ) {
			$tab->color_group( 'background', __( 'Background Color' ) )
				->option( 'normal', __( 'Normal' ) )
				->option( 'hover', __( 'Hover' ) )
				->option( 'focus', __( 'Focus' ) )
				->option( 'active', __( 'Active' ) );

			$tab->color_group( 'background', __( 'Text Color' ) )
				->option( 'normal', __( 'Normal' ) )
				->option( 'hover', __( 'Hover' ) )
				->option( 'focus', __( 'Focus' ) )
				->option( 'active', __( 'Active' ) );
		}

		protected function tab_field() {
			/**
			 * @var \WPO\Fields\Tab $field
			 */
			$field = wpo_field( 'tab', 'button_editor' );
			$field->un_array( true )
				->horizontal( true );

			$this->basic( $field->container( 'general', __( 'Basic' ) ) );
			$this->css_editor( $field->container( 'css_editor', __( 'CSS Editor' ) ) );
			$this->css_colors( $field->container( 'colors', __( 'Colors' ) ) );
			return $field;
		}

		protected function output() {
			echo $this->before();
			echo $this->sub_field( $this->tab_field(), $this->value(), $this->name() );
			echo $this->after();
		}

		protected function field_default() {
			return array(
				'label'     => __( 'Button Label' ),
				'icon'      => __( 'Button Icon' ),
				'url'       => __( 'Link' ),
				'css_class' => __( 'Extra class name' ),
				'css_id'    => __( 'Element ID' ),
			);
		}

		public function field_assets() {
		}
	}
}
