<?php

namespace WPO\Helper\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Common_Args
 *
 * @package WPO\Helper\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Common_Args extends Dependency {
	/**
	 * Updates Field Type.
	 *
	 * @param $type
	 *
	 * @return $this
	 */
	public function type( $type ) {
		return $this->__set( 'type', $type );
	}

	/**
	 * Hides Field Title.
	 *
	 * @param bool $hide_title
	 *
	 * @return $this
	 */
	public function hide_title( $hide_title = false ) {
		return $this->__set( 'hide_title', $hide_title );
	}

	/**
	 * Sets id.
	 *
	 * @param $id
	 *
	 * @return $this
	 */
	public function id( $id ) {
		$this->__set( 'id', $id );
		$this->unique = $id;
		return $this;
	}

	/**
	 * Sets Field Title.
	 *
	 * @param $title
	 *
	 * @return $this
	 */
	public function title( $title ) {
		return $this->__set( 'title', $title );
	}

	/**
	 * Set Custom Field Name Attribute.
	 *
	 * @param $name
	 *
	 * @return $this
	 */
	public function name( $name ) {
		return $this->__set( 'name', $name );
	}

	/**
	 * Sets Field Help Attribute.
	 *
	 * @param $help
	 *
	 * @return $this
	 */
	public function help( $help ) {
		return $this->__set( 'help', $help );
	}

	/**
	 * Sets Field Default Value.
	 *
	 * @param null $default
	 *
	 * @return $this
	 */
	public function field_default( $default = null ) {
		return $this->__set( 'default', $default );
	}

	/**
	 * Sets Field Description.
	 *
	 * @param string|array|bool $desc
	 * @param bool              $below_title
	 *
	 * @return $this
	 */
	public function desc( $desc = false, $below_title = true ) {
		$k = ( $below_title ) ? 'desc' : 'desc_field';
		return $this->__set( $k, $desc );
	}

	/**
	 * Set Field Description Below Field.
	 *
	 * @param string|array|bool $desc_field
	 *
	 * @return $this
	 */
	public function desc_field( $desc_field = true ) {
		if ( true === $desc_field && ! empty( $this->desc ) ) {
			$this->__set( 'desc_field', $this->__get( 'desc' ) );
			$this->desc( false );
		} else {
			$this->__set( 'desc_field', $desc_field );
		}

		return $this;
	}

	/**
	 * Field Inline Style.
	 *
	 * @param array|string $style
	 * @param bool         $merge
	 *
	 * @return $this
	 * @example Inline Style As String : $field->style('color:red');
	 * @example Inline Style As Array :  $field->style(array( 'height' => '10px', 'width' => '10px' ));
	 *
	 * Output Will be 'height:10px;width:10px;'
	 * if $merge is set to true then existing style gets appended to new style.
	 */
	public function style( $style = '', $merge = true ) {
		if ( wponion_is_array( $style ) ) {
			$_style = $style;
			$style  = '';
			foreach ( $_style as $key => $value ) {
				$key   = rtrim( $key, ':' );
				$value = rtrim( $value, ';' );
				$style = $style . ' ' . $key . ':' . $value . ';';
			}
		}

		return $this->__set( 'style', ( true === $merge ) ? $this->__get( 'style' ) . ' ' . $style : $style );
	}

	/**
	 * Field Custom CSS Style.
	 *
	 * @param null $css
	 *
	 * @return $this
	 */
	public function css( $css = null ) {
		return $this->__set( 'css', $css );
	}

	/**
	 * Field Placeholder.
	 *
	 * @param null $placeholder
	 *
	 * @return $this
	 */
	public function placeholder( $placeholder = null ) {
		return $this->__set( 'placeholder', $placeholder );
	}

	/**
	 * Mark Field as disabled by passing true as value.
	 * Mark Field as un-disabled by passing false as value.
	 *
	 * @param bool $is_disabled
	 *
	 * @return $this
	 */
	public function disabled( $is_disabled = true ) {
		return $this->__set( 'disabled', $is_disabled );
	}

	/**
	 * Disable's The Field.
	 *
	 * @return $this
	 */
	public function disable() {
		return $this->disabled( true );
	}

	/**
	 * Enable's The Field.
	 *
	 * @return $this
	 */
	public function enable() {
		return $this->disabled( false );
	}

	/**
	 * Element Before Content.
	 *
	 * @param $before
	 *
	 * @return $this
	 */
	public function before( $before = null ) {
		return $this->__set( 'before', $before );
	}

	/**
	 * Element After Content.
	 *
	 * @param $after
	 *
	 * @return $this
	 */
	public function after( $after = null ) {
		return $this->__set( 'after', $after );
	}

	/**
	 * Set Field Style to horizontal by passing true as value.
	 *
	 * @param bool $horizontal
	 *
	 * @return $this
	 */
	public function horizontal( $horizontal = true ) {
		return $this->__set( 'horizontal', $horizontal );
	}

	/**
	 * Set True To Get Only Field Output.
	 *
	 * @param bool $only_field
	 *
	 * @return $this
	 */
	public function only_field( $only_field = true ) {
		return $this->__set( 'only_field', $only_field );
	}

	/**
	 * Set True To Make Field Cloneable.
	 *
	 * @param bool|array $clone
	 *
	 * @return $this
	 */
	public function _clone( $clone = false ) {
		$args  = ( wponion_is_array( $clone ) ) ? $clone : null;
		$clone = ( wponion_is_array( $clone ) ) ? true : $clone;
		$this->clone_settings( $args );
		$this->__set( 'clone', $clone );
		return $this;
	}

	/**
	 * Field Clone Settings .
	 *
	 * @param null $clone_settings
	 *
	 * @return $this
	 */
	public function clone_settings( $clone_settings = null ) {
		return $this->__set( 'clone_settings', $clone_settings );
	}

	/**
	 * Set True To Get Only Field Output.
	 *
	 * @param bool $debug
	 *
	 * @return $this
	 */
	public function debug( $debug = true ) {
		return $this->__set( 'debug', $debug );
	}

	/**
	 * Set Field Wrap ToolTip.
	 *
	 * @param $wrap_tooltip
	 *
	 * @return $this
	 */
	public function wrap_tooltip( $wrap_tooltip = null ) {
		return $this->__set( 'wrap_tooltip', $wrap_tooltip );
	}

	/**
	 * Set Field Wrap Class.
	 *
	 * @param $wrap_class
	 *
	 * @return $this
	 */
	public function wrap_class( $wrap_class = null ) {
		return $this->__set( 'wrap_class', $wrap_class );
	}

	/**
	 * @param null $title_column
	 *
	 * @return $this
	 */
	public function title_column( $title_column = null ) {
		return $this->__set( 'title_column', $title_column );
	}

	/**
	 * @param null $fieldset_column
	 *
	 * @return $this
	 */
	public function fieldset_column( $fieldset_column = null ) {
		return $this->__set( 'fieldset_column', $fieldset_column );
	}

	/**
	 * Set Field Wrap ID.
	 *
	 * @param $wrap_id
	 *
	 * @return $this
	 */
	public function wrap_id( $wrap_id = null ) {
		return $this->__set( 'wrap_id', $wrap_id );
	}

	/**
	 * Set Field js_validate.
	 *
	 * @param $js_validate
	 *
	 * @return $this
	 */
	public function js_validate( $js_validate = null ) {
		return $this->__set( 'js_validate', $js_validate );
	}

	/**
	 * Set Field query_args.
	 *
	 * @param $query_args
	 *
	 * @return $this
	 */
	public function query_args( $query_args = null ) {
		return $this->__set( 'query_args', $query_args );
	}

	/**
	 * Set Field class.
	 *
	 * @param $class
	 *
	 * @return $this
	 */
	public function field_class( $class = null ) {
		return $this->__set( 'class', $class );
	}

	/**
	 * Set WP Pointer Data.
	 *
	 * @param $wp_pointer
	 *
	 * @return $this
	 */
	public function wp_pointer( $wp_pointer = null ) {
		return $this->__set( 'wp_pointer', $wp_pointer );
	}

	/**
	 * Set Field Multiple.
	 *
	 * @param bool $is_multiple
	 *
	 * @return $this
	 */
	public function multiple( $is_multiple = true ) {
		return $this->__set( 'multiple', $is_multiple );
	}

	/**
	 * @param callable|string|array $callback
	 *
	 * @return $this
	 */
	public function before_render( $callback ) {
		return $this->__set( 'before_render', $callback );
	}

	/**
	 * @param callable|string|array $callback
	 *
	 * @return $this
	 */
	public function after_render( $callback ) {
		return $this->__set( 'after_render', $callback );
	}

	/**
	 * @param string|array $badge
	 *
	 * @return $this
	 */
	public function badge( $badge ) {
		return $this->__set( 'badge', $badge );
	}
}
