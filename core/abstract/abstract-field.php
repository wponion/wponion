<?php

namespace WPOnion;

use WPOnion\Bridge\Field\Wrapper;

defined( 'ABSPATH' ) || exit;

/**
 * Class Field
 *
 * @package WPOnion\Bridge
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Field extends Wrapper {
	/**
	 * WPOnion_Field constructor.
	 *
	 * @param array        $field
	 * @param array        $value
	 * @param string|array $unique
	 */
	public function __construct( $field = array(), $value = array(), $unique = array() ) {
		self::$total_fields++;

		$this->value        = $value;
		$this->unique       = $unique;
		$this->base_unique  = $unique;
		$this->module       = false;
		$this->settings     = $field;
		$this->array_helper = ( ! wpo_is_field( $this->settings ) );

		if ( wponion_is_array( $unique ) ) {
			$this->unique      = ( isset( $unique['unique'] ) ) ? $unique['unique'] : false;
			$this->base_unique = ( isset( $unique['base'] ) ) ? $unique['base'] : false;
			$this->module      = ( isset( $unique['module'] ) ) ? $unique['module'] : false;
		}

		$this->set_args( $field );
		$this->_handle_arguments();
		$this->get_errors();

		if ( wponion_is_defined( 'WPONION_FIELD_ASSETS', true ) || true === $this->is_assets_actions_fired() ) {
			$this->assets();
		} else {
			$this->add_action( 'admin_enqueue_scripts', 'assets', 1 );
			$this->add_action( 'customize_controls_enqueue_scripts', 'assets', 99999 );
			$this->add_action( 'wp_enqueue_scripts', 'assets', 1 );
			$this->add_action( 'wponion/ajax/enqueue_assets', 'assets', 10 );
		}

		$this->init_subfields();
	}

	/**
	 * Returns True when any of the actions are fired.
	 *
	 * @return bool
	 * @since 1.5
	 */
	private function is_assets_actions_fired() {
		return ( did_action( 'wponion_ajax_enqueue_scripts' ) || did_action( 'admin_enqueue_scripts' ) || did_action( 'customize_controls_enqueue_scripts' ) || did_action( 'wp_enqueue_scripts' ) || did_action( 'customize_controls_print_scripts' ) || did_action( 'customize_controls_print_footer_scripts' ) || did_action( 'customize_controls_print_styles' ) );
	}

	/**
	 * Handles Defaults Field Args.
	 *
	 * @internal
	 */
	protected function _handle_arguments() {
		if ( $this->has( 'class' ) ) {
			$this->set_option_default( 'attributes/class', array() );
			$this->set_option( 'attributes/class', wponion_html_class( $this->option( 'attributes/class' ), $this->option( 'class' ), false ) );
		}
		$this->handle_arguments();
	}

	/**
	 * Generates Final HTML output of the current field.
	 *
	 * @return string
	 */
	public function final_output() {
		$only_field      = $this->is_only_field();
		$before_render   = $this->option( 'before_render' );
		$after_render    = $this->option( 'after_render' );
		$render_callback = array( &$this, $this->js_field_id(), $only_field );

		if ( wponion_is_callable( $before_render ) ) {
			wponion_callback( $before_render, $render_callback );
		}

		if ( $only_field ) {
			$html = $this->field_html();
		} else {
			$html = $this->wrapper();
		}

		if ( $this->has( 'debug' ) ) {
			$this->debug( __( 'Field Args', 'wponion' ), $this->settings );
			$this->debug( __( 'Field Value', 'wponion' ), $this->value );
			$this->debug( __( 'Unique', 'wponion' ), $this->unique() );
			$this->debug( __( 'Module', 'wponion' ), $this->module() );
		}

		$this->wp_pointer();
		$this->localize_field();
		$this->field_custom_css();

		if ( wponion_is_callable( $after_render ) ) {
			wponion_callback( $after_render, $render_callback );
		}
		return $html;
	}

	/**
	 * Generates Elements Wrapper.
	 */
	protected function wrapper() {
		$this->debug_timer();
		$this->register_dependency();
		$this->_validate_column_css();

		$wrap_attr = wponion_array_to_html_attributes( $this->_wrap_attributes() );

		return <<<HTML
<div ${wrap_attr}>
	{$this->badge()}
	<div class="wpo-row">
		{$this->title()}
		{$this->field_wrapper( true )}
		{$this->field_html()}
		{$this->field_wrapper( false )}
		<div class="clear"></div>
		{$this->debug_timer( false )}
	</div>
</div>
HTML;
	}

	/**
	 * Converts Echo's Into a String
	 * and returns it.
	 *
	 * @return string
	 * @since 1.5
	 */
	protected function field_html() {
		return $this->output();
	}

	/**
	 * Renders Field Wrapper.
	 *
	 * @param bool $is_start
	 *
	 * @return string
	 */
	protected function field_wrapper( $is_start = true ) {
		if ( true === $is_start ) {
			$wrap_class = ( ! $this->option( 'title' ) ) ? ' wponion-fieldset wponion-fieldset-notitle ' : ' wponion-fieldset ';
			return '<div class="' . $wrap_class . ' ' . $this->option( 'fieldset_column' ) . '">';
		}
		return '</div>';
	}

	/**
	 * Renders Element Title HTML.
	 *
	 * @return string
	 */
	protected function title() {
		$html = '';
		if ( $this->has( 'title' ) && false === $this->option( 'hide_title' ) ) {
			$html = <<<HTML
<div class="wponion-field-title wponion-element-title {$this->option( 'title_column' )}">
	{$this->title_before_after( false )}
	<h4>{$this->option( 'title' )}</h4>
	{$this->title_before_after( true )}
	{$this->field_help()}
	{$this->title_desc()}
</div>
HTML;
		}
		return $html;
	}

	/**
	 * Renders HTML for ToolTip.
	 *
	 * @return string
	 */
	protected function field_help() {
		$help = $this->option( 'help' );
		if ( $help ) {
			$data                              = $this->tooltip_data( $help, array( 'icon' => 'wpoic-help' ), 'field_help' );
			$data['attr']['data-wponion-jsid'] = $this->js_field_id();
			$span_attr                         = wponion_array_to_html_attributes( $data['attr'] );
			$icon                              = $data['data']['icon'];
			return "<span ${span_attr}> <span class=\"${icon}\"></span> </span>";
		}
		return '';
	}

	/**
	 * Checks and returns title_before and title_after key & values.
	 *
	 * @param bool $is_after
	 *
	 * @return string
	 */
	protected function title_before_after( $is_after = false ) {
		if ( false === $is_after && false !== $this->option( 'title_before' ) ) {
			return $this->option( 'title_after' );
		} elseif ( true === $is_after && false !== $this->option( 'title_after' ) ) {
			return $this->option( 'title_after' );
		}
		return '';
	}

	/**
	 * Generates Multiple Description.
	 *
	 * @param $desc
	 * @param $css_class
	 *
	 * @return string
	 */
	protected function description_render( $desc, $css_class ) {
		$desc   = ( ! is_array( $desc ) ) ? array( $desc ) : $desc;
		$return = '';
		foreach ( array_filter( $desc ) as $c ) {
			$return .= '<p class="wponion-desc ' . $css_class . '">' . wponion_markdown()->line( $c ) . '</p>';
		}
		return $return;
	}

	/**
	 * Generates Title Description HTML.
	 *
	 * @return string
	 */
	protected function title_desc() {
		return ( $this->has( 'desc' ) ) ? $this->description_render( $this->option( 'desc' ), 'wponion-title-desc' ) : '';
	}

	/**
	 * Generates Field Description HTML.
	 *
	 * @return string
	 */
	protected function field_desc() {
		return ( $this->has( 'desc_field' ) ) ? $this->description_render( $this->option( 'desc_field' ), 'wponion-field-desc' ) : '';
	}

	/**
	 * Returns Element Before Data.
	 *
	 * @return bool|mixed|string
	 */
	protected function before() {
		return ( false !== $this->has( 'before' ) && false === $this->has( 'only_field' ) ) ? wponion_markdown()->line( $this->option( 'before' ) ) : '';
	}

	/**
	 * Returns Elements After Data.
	 *
	 * @return string
	 */
	protected function after() {
		if ( false === $this->has( 'only_field' ) ) {
			$data = ( false !== $this->has( 'after' ) ) ? wponion_markdown()->line( $this->option( 'after' ) ) : '';
			$data = $data . $this->field_desc();
			$data = $data . $this->field_error();
			return $data;
		}
		return '';
	}

	/**
	 * Returns Element Type.
	 *
	 * @return bool|mixed
	 */
	protected function element_type() {
		if ( false !== $this->has( 'text_type' ) ) {
			return $this->option( 'text_type' );
		} elseif ( false !== $this->has( 'attributes' ) ) {
			$data = $this->option( 'attributes' );
			if ( isset( $data['type'] ) ) {
				return $data['type'];
			}
		}
		return $this->option( 'type' );
	}

	/**
	 * Returns Fields ID.
	 *
	 * @return bool|mixed
	 */
	protected function field_id() {
		return ( $this->has( 'id' ) ) ? $this->option( 'id' ) : false;
	}

	/**
	 * Generates Field Attributes HTML.
	 *
	 * @param array $field_attributes
	 *
	 * @return string
	 */
	protected function attributes( $field_attributes = array() ) {
		$user_attrs = ( false !== $this->has( 'attributes' ) ) ? $this->option( 'attributes' ) : array();

		if ( false !== $this->has( 'style' ) ) {
			$user_attrs['style'] = $this->option( 'style' );
		}

		if ( true === $this->has( 'disabled' ) ) {
			$user_attrs['disabled'] = 'disabled';
		}

		if ( false !== $this->has( 'placeholder' ) ) {
			$user_attrs['placeholder'] = $this->option( 'placeholder' );
		}

		$user_attrs['data-depend-id'] = $this->depend_id();
		$user_attrs                   = $this->parse_args( $user_attrs, $field_attributes );
		$user_attrs['class']          = ( isset( $user_attrs['class'] ) ) ? $user_attrs['class'] : array();
		$user_attrs['class']          = wponion_html_class( $user_attrs['class'], isset( $field_attributes['class'] ) ? $field_attributes['class'] : array() );

		if ( ! isset( $user_attrs['data-wponion-jsid'] ) ) {
			$user_attrs['data-wponion-jsid'] = $this->js_field_id();
		}

		if ( ! isset( $user_attrs['data-depend-id'] ) ) {
			$user_attrs['data-depend-id'] = $this->field_id();
		}

		return wponion_array_to_html_attributes( $user_attrs );
	}

	/**
	 * Returns Fields Class.
	 *
	 * @param string $field_class
	 *
	 * @return string
	 */
	protected function element_class( $field_class = '' ) {
		$element_class = wponion_apply_deprecated_filters( 'wponion_' . $this->module() . '_field_html_class', array(
			wponion_html_class( $this->option( 'class' ), $field_class, false ),
		), '1.5' );
		return apply_filters( "wponion/{$this->module()}/field/html/class", $element_class, $this );
	}

	/**
	 * Returns Elements Name.
	 *
	 * @param string $extra_name
	 *
	 * @return string
	 */
	protected function raw_name( $extra_name = '' ) {
		if ( false !== $this->has( 'name' ) ) {
			return $this->option( 'name' ) . $extra_name;
		} elseif ( true === $this->option( 'un_array' ) ) {
			return implode( '/', array_filter( array( $this->unique(), $extra_name ) ) );
		}
		return implode( '/', array_filter( array( $this->unique(), $this->field_id(), $extra_name ) ) );
	}

	/**
	 * Return's Field's Name.
	 *
	 * @param string|bool $extra_name
	 *
	 * @return string
	 */
	public function name( $extra_name = '' ) {
		if ( $this->has( 'fields' ) && $this->option( 'fields' ) || method_exists( $this->option(), 'containers' ) ) {
			return $this->raw_name( $extra_name );
		}
		return wponion_get_field_unique_html( $this->raw_name( $extra_name ) );
	}

	/**
	 * Handles Fields Arguments.
	 *
	 * @param       $save_with
	 * @param       $value
	 * @param array $defaults
	 * @param array $force_defaults
	 *
	 * @return array
	 */
	protected function handle_args( $save_with, $value, $defaults = array(), $force_defaults = array() ) {
		return wponion_parse_args_forced_values( $save_with, $value, $defaults, $force_defaults );
	}

	/**
	 * Handles Options Value.
	 *
	 * @param string $key
	 * @param mixed  $value
	 * @param array  $defaults
	 * @param bool   $tooltip if set to true then it handles tooltip args if not it just returns null
	 *
	 * @return array
	 */
	protected function handle_options( $key, $value, $defaults = array(), $tooltip = true ) {
		$base     = array(
			'label'        => '',
			'key'          => '',
			'attributes'   => array(),
			'disabled'     => false,
			'tooltip'      => false,
			'custom_input' => false,
		);
		$defaults = ( empty( $defaults ) ) ? $base : $this->parse_args( $defaults, $base );

		if ( ! wponion_is_array( $value ) ) {
			$defaults['key']   = $key;
			$defaults['label'] = $value;
			return $defaults;
		}
		$value = $this->parse_args( $value, $defaults );

		if ( true === $tooltip && false !== $value['tooltip'] ) {
			$value['tooltip'] = ( true === $value['tooltip'] ) ? $value['label'] : $value['tooltip'];
			$value['tooltip'] = $this->tooltip_data( $value['tooltip'], array( 'placement' => 'right' ), false );
		}

		if ( true === $value['disabled'] ) {
			$value['attributes']['disabled'] = 'disabled';
		}

		if ( '' === $value['key'] ) {
			$value['key'] = $key;
		}

		$value['custom_input'] = ( true === $value['label'] && false === $value['custom_input'] ) ? true : $value['custom_input'];

		if ( false === $tooltip ) {
			unset( $value['tooltip'] );
		}

		return $value;
	}

	/**
	 * Checks and provides proper data with the help of WPOnion Query & WP_Query
	 *
	 * @param string $type
	 *
	 * @return array
	 * @uses \WPONion\DB\Query
	 * @uses \WP_Query
	 */
	protected function element_data( $type = '' ) {
		if ( $this->is_ajax() && empty( $this->value ) ) {
			return array();
		}

		$query_args = $this->option( 'query_args' );
		$query_args = ( wponion_is_array( $query_args ) && ! empty( $query_args ) ) ? $query_args : array();

		if ( ! empty( $this->value ) ) {
			$query_args['post__in'] = ( ! wponion_is_array( $this->value ) ) ? explode( ',', $this->value ) : $this->value;
		}

		$data = wponion_query( $this->unique(), $this->module() )->query( $type, $query_args, '' );
		return ( ! is_array( $data ) ) ? array() : $data;
	}
}
