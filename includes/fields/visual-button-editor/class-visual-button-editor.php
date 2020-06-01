<?php

namespace WPOnion\Field;

use WPOnion\Field;

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
		if ( false !== $this->option( 'label' ) ) {
			$tab->add_field( $this->handle_args( 'title', $this->option( 'label' ), array(
				'title'       => __( 'Button Label', 'wponion' ),
				'placeholder' => __( 'Click To Learn More', 'wponion' ),
				'style'       => 'min-width:350px',
				'type'        => 'text',
			), array( 'id' => 'label' ) ) )->wrap_id( 'button-label' );
		}

		if ( false !== $this->option( 'icon' ) ) {
			$tab->add_field( $this->handle_args( 'title', $this->option( 'icon' ), array(
				'title' => __( 'Icon', 'wponion' ),
				'type'  => 'icon_picker',
			), array( 'id' => 'icon' ) ) )->wrap_id( 'button-icon' );
		}

		if ( false !== $this->option( 'url' ) ) {
			$tab->add_field( $this->handle_args( 'title', $this->option( 'url' ), array(
				'title'    => __( 'Link', 'wponion' ),
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

		if ( false !== $this->option( 'css_id' ) ) {
			$tab->add_field( $this->handle_args( 'title', $this->option( 'css_id' ), array(
				'title'      => __( 'Element ID', 'wponion' ),
				'style'      => 'min-width:350px',
				'desc_field' => __( 'Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only).', 'wponion' ),
				'type'       => 'text',
			), array( 'id' => 'elem-id' ) ) );
		}

		if ( false !== $this->option( 'css_class' ) ) {
			$tab->add_field( $this->handle_args( 'title', $this->option( 'css_class' ), array(
				'title'      => __( 'Element CSS Class', 'wponion' ),
				'style'      => 'min-width:350px',
				'desc_field' => __( 'Add an extra class name to the element and refer to it from Custom CSS option.', 'wponion' ),
				'type'       => 'text',
			), array( 'id' => 'elem-css-class' ) ) );
		}
	}

	/**
	 * @param \WPO\Fields\Fieldset $tab
	 */
	protected function spacing( $tab ) {
		if ( false !== $this->option( 'margin' ) ) {
			$tab->add_field( $this->handle_args( 'title', $this->option( 'margin' ), array(
				'desc_field' => __( 'CSS `margin` properties are used to create space around elements', 'wponion' ),
			), array(
				'id'      => 'margin',
				'type'    => 'spacing',
				'wrap_id' => 'button-margin',
			) ) );
		}

		if ( false !== $this->option( 'padding' ) ) {
			$tab->add_field( $this->handle_args( 'title', $this->option( 'padding' ), array(
				'desc_field' => __( 'The CSS `padding` properties are used to generate space around an element\'s content, inside of any defined borders', 'wponion' ),
			), array(
				'id'      => 'padding',
				'type'    => 'spacing',
				'wrap_id' => 'button-padding',
			) ) );
		}

		if ( false !== $this->option( 'border-radius' ) ) {
			$tab->add_field( $this->handle_args( 'title', $this->option( 'border-radius' ), array(), array(
				'id'         => 'border-radius',
				'desc_field' => __( '`border-radius` property defines the radius of the element\'s corners', 'wponion' ),
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
		if ( false !== $this->option( 'typography' ) ) {
			$tab->add_field( $this->handle_args( 'title', $this->option( 'typography' ), array(
				'title'            => __( 'Text Styling', 'wponion' ),
				'style'            => 'min-width:350px',
				'desc_field'       => __( 'Add an extra class name to the element and refer to it from Custom CSS option.', 'wponion' ),
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
		if ( false !== $this->option( 'background' ) ) {
			$tab->add_field( $this->handle_args( 'title', $this->option( 'background' ), array(
				'title' => __( 'Background', 'wponion' ),
			), array(
				'id'      => 'background',
				'type'    => 'color_picker',
				'wrap_id' => 'button-' . $css_action . '-background',
			) ) );
		}

		if ( false !== $this->option( 'text_color' ) ) {
			$tab->add_field( $this->handle_args( 'title', $this->option( 'text_color' ), array(
				'title' => __( 'Text Color', 'wponion' ),
			), array(
				'id'      => 'text_color',
				'type'    => 'color_picker',
				'wrap_id' => 'button-' . $css_action . '-color',
			) ) );
		}

		if ( false !== $this->option( 'text_shadow' ) ) {
			$data      = $this->option( 'text_shadow' );
			$is_single = ( is_array( $data ) && isset( $data['multiple'] ) && false === $data['multiple'] ) ? false : true;
			$tab->add_field( $this->handle_args( 'title', $this->option( 'text_shadow' ), array(
				'title'      => __( 'Text Shadow', 'wponion' ),
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

		if ( false !== $this->option( 'box_shadow' ) ) {
			$data      = $this->option( 'box_shadow' );
			$is_single = ( is_array( $data ) && isset( $data['multiple'] ) && false === $data['multiple'] ) ? false : true;
			$tab->add_field( $this->handle_args( 'title', $this->option( 'box_shadow' ), array(
				'title' => __( 'Box Shadow', 'wponion' ),
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

	/**
	 * Field's Custom Wrap Class.
	 *
	 * @return string
	 */
	protected function wrap_class() {
		return 'wponion-has-nested-fields';
	}

	/**
	 * @return \WPO\Fields\Tab
	 */
	protected function tab_field() {
		/**
		 * @var \WPO\Fields\Tab $field
		 */
		$field = wpo_field( 'tab', 'button_editor' );
		$field->un_array( true )->tab_style( 'style2' )->horizontal( true );

		$this->basic( $field->section( 'general', __( 'Basic', 'wponion' ) )->un_array( true ) );

		if ( false !== $this->option( 'typography' ) ) {
			$this->typography( $field->section( 'font-styler', __( 'Text Styling', 'wponion' ) ) );
		}

		$this->spacing( $field->section( 'spacing', __( 'Spacing', 'wponion' ) )->un_array( true ) );

		$this->normal( $field->section( 'normal', __( 'General Style', 'wponion' ) ) );
		$this->hover( $field->section( 'hover', __( 'Hover Style', 'wponion' ) ) );
		$this->focus( $field->section( 'focus', __( 'Focus Style', 'wponion' ) ) );

		return $field;
	}

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$html = $this->sub_field( $this->tab_field(), $this->value(), $this->unique( $this->field_id() ) );
		$html .= '<div class="button-editor-preview" id="' . $this->js_field_id() . 'buttonpreview">';
		$html .= '<button type="button" id="' . $this->js_field_id() . 'buttonpreview"><span class="button-icon"></span><span class="button-label">' . __( 'Preview', 'wponion' ) . '</span></button>';
		$html .= '<style></style>';
		$html .= '</div>';
		$html .= '<style class="hidden hover"></style>
<style class="hidden focus"></style>
<style class="hidden normal">a</style>';
		return $this->before() . $html . $this->after();
	}

	/**
	 * Returns Field's Default Value.
	 */
	protected function defaults() {
		return array(
			'label'           => __( 'Button Label', 'wponion' ),
			'icon'            => __( 'Button Icon', 'wponion' ),
			'url'             => __( 'Link', 'wponion' ),
			'css_class'       => __( 'Extra class name', 'wponion' ),
			'css_id'          => __( 'Element ID', 'wponion' ),
			'spacing-heading' => __( 'Button Spacing', 'wponion' ),
			'margin'          => __( 'Margin', 'wponion' ),
			'padding'         => __( 'Padding', 'wponion' ),
			'border-radius'   => __( 'Border Radius', 'wponion' ),
			'typography'      => __( 'Text Styling', 'wponion' ),
			'background'      => __( 'Background', 'wponion' ),
			'text_color'      => __( 'Text Color', 'wponion' ),
			'text_shadow'     => __( 'Text Shadow', 'wponion' ),
			'box_shadow'      => __( 'Box Shadow', 'wponion' ),

		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}
}
