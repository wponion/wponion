<?php

namespace WPO\Helper\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPO\Helper\Field\Common_Args' ) ) {
	/**
	 * Class Common_Args
	 *
	 * @package WPO\Helper\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method mixed get_id
	 * @method mixed get_title
	 * @method mixed get_help
	 * @method mixed get_default
	 * @method mixed get_desc
	 * @method mixed get_desc_field
	 * @method mixed get_name
	 * @method mixed get_js_validate
	 * @method mixed get_type
	 * @method mixed get_style
	 * @method mixed get_placeholder
	 * @method mixed get_disabled
	 * @method mixed get_class
	 * @method mixed get_before
	 * @method mixed get_after
	 * @method mixed get_horizontal
	 * @method mixed get_only_field
	 * @method mixed get_clone
	 * @method mixed get_clone_settings
	 * @method mixed get_debug
	 * @method mixed get_query_args
	 * @method mixed get_wp_pointer
	 * @method mixed get_wrap_tooltip
	 * @method mixed get_wrap_class
	 * @method mixed get_wrap_id
	 * @method bool get_multiple
	 * @method mixed get_sanitize
	 * @method mixed get_validate
	 * @method mixed get_attributes
	 * @method mixed get_dependency
	 * @method mixed get_wrap_attributes
	 */
	class Common_Args extends Array_Args {
		/**
		 * Updates Field Type.
		 *
		 * @param $type
		 *
		 * @return $this
		 */
		public function type( $type ) {
			return $this->_set( 'type', $type );
		}

		/**
		 * Hides Field Title.
		 *
		 * @param bool $hide_title
		 *
		 * @return $this
		 */
		public function hide_title( $hide_title = false ) {
			return $this->_set( 'hide_title', $hide_title );
		}

		/**
		 * Sets id.
		 *
		 * @param $id
		 *
		 * @return $this
		 */
		public function id( $id ) {
			$this['id']   = $id;
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
			return $this->_set( 'title', $title );
		}

		/**
		 * Set Custom Field Name Attribute.
		 *
		 * @param $name
		 *
		 * @return $this
		 */
		public function name( $name ) {
			return $this->_set( 'name', $name );
		}

		/**
		 * Sets Field Help Attribute.
		 *
		 * @param $help
		 *
		 * @return $this
		 */
		public function help( $help ) {
			return $this->_set( 'help', $help );
		}

		/**
		 * Sets Field Default Value.
		 *
		 * @param null $default
		 *
		 * @return $this
		 */
		public function field_default( $default = null ) {
			return $this->_set( 'default', $default );
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
			return $this->_set( $k, $desc );
		}

		/**
		 * Set Field Description Below Field.
		 *
		 * @param string|array|bool $desc_field
		 *
		 * @return $this
		 */
		public function desc_field( $desc_field = true ) {
			if ( true === $desc_field && ! empty( $this['desc'] ) ) {
				$this['desc_field'] = $this['desc'];
				$this->desc( false );
			} else {
				$this['desc_field'] = $desc_field;
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

			return $this->_set( 'style', ( true === $merge ) ? $this['style'] . ' ' . $style : $style );
		}

		/**
		 * Field Placeholder.
		 *
		 * @param null $placeholder
		 *
		 * @return $this
		 */
		public function placeholder( $placeholder = null ) {
			return $this->_set( 'placeholder', $placeholder );
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
			return $this->_set( 'disabled', $is_disabled );
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
			return $this->_set( 'before', $before );
		}

		/**
		 * Element After Content.
		 *
		 * @param $after
		 *
		 * @return $this
		 */
		public function after( $after = null ) {
			return $this->_set( 'after', $after );
		}

		/**
		 * Set Field Style to horizontal by passing true as value.
		 *
		 * @param bool $horizontal
		 *
		 * @return $this
		 */
		public function horizontal( $horizontal = true ) {
			return $this->_set( 'horizontal', $horizontal );
		}

		/**
		 * Set True To Get Only Field Output.
		 *
		 * @param bool $only_field
		 *
		 * @return $this
		 */
		public function only_field( $only_field = true ) {
			return $this->_set( 'only_field', $only_field );
		}

		/**
		 * Set True To Make Field Cloneable.
		 *
		 * @param bool|array $clone
		 *
		 * @return $this
		 *
		 */
		public function _clone( $clone = false ) {
			if ( wponion_is_array( $clone ) ) {
				$this->clone_settings( $clone );
				$this['clone'] = true;
			}
			$this['clone'] = $clone;
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
			return $this->_set( 'clone_settings', $clone_settings );
		}

		/**
		 * Set True To Get Only Field Output.
		 *
		 * @param bool $debug
		 *
		 * @return $this
		 */
		public function debug( $debug = true ) {
			return $this->_set( 'debug', $debug );
		}

		/**
		 * Set Field Wrap ToolTip.
		 *
		 * @param $wrap_tooltip
		 *
		 * @return $this
		 */
		public function wrap_tooltip( $wrap_tooltip = null ) {
			return $this->_set( 'wrap_tooltip', $wrap_tooltip );
		}

		/**
		 * Set Field Wrap Class.
		 *
		 * @param $wrap_class
		 *
		 * @return $this
		 */
		public function wrap_class( $wrap_class = null ) {
			return $this->_set( 'wrap_class', $wrap_class );
		}

		/**
		 * @param null $title_column
		 *
		 * @return \WPO\Helper\Field\Common_Args
		 */
		public function title_column( $title_column = null ) {
			return $this->_set( 'title_column', $title_column );
		}

		/**
		 * @param null $fieldset_column
		 *
		 * @return \WPO\Helper\Field\Common_Args
		 */
		public function fieldset_column( $fieldset_column = null ) {
			return $this->_set( 'fieldset_column', $fieldset_column );
		}

		/**
		 * Set Field Wrap ID.
		 *
		 * @param $wrap_id
		 *
		 * @return $this
		 */
		public function wrap_id( $wrap_id = null ) {
			return $this->_set( 'wrap_id', $wrap_id );
		}

		/**
		 * Set Field js_validate.
		 *
		 * @param $js_validate
		 *
		 * @return $this
		 */
		public function js_validate( $js_validate = null ) {
			return $this->_set( 'js_validate', $js_validate );
		}

		/**
		 * Set Field query_args.
		 *
		 * @param $query_args
		 *
		 * @return $this
		 */
		public function query_args( $query_args = null ) {
			return $this->_set( 'query_args', $query_args );
		}

		/**
		 * Set Field class.
		 *
		 * @param $class
		 *
		 * @return $this
		 *
		 */
		public function field_class( $class = null ) {
			return $this->_set( 'class', $class );
		}

		/**
		 * Set WP Pointer Data.
		 *
		 * @param $wp_pointer
		 *
		 * @return $this
		 */
		public function wp_pointer( $wp_pointer = null ) {
			return $this->_set( 'wp_pointer', $wp_pointer );
		}

		/**
		 * Set Field Multiple.
		 *
		 * @param bool $is_multiple
		 *
		 * @return $this
		 */
		public function multiple( $is_multiple = true ) {
			return $this->_set( 'multiple', $is_multiple );
		}


		/**
		 * @param callable|string|array $callback
		 *
		 * @return $this
		 */
		public function before_render( $callback ) {
			return $this->_set( 'before_render', $callback );
		}

		/**
		 * @param callable|string|array $callback
		 *
		 * @return $this
		 */
		public function after_render( $callback ) {
			return $this->_set( 'after_render', $callback );
		}

		/**
		 * @param string|array $badge
		 *
		 * @return $this
		 */
		public function badge( $badge ) {
			return $this->_set( 'badge', $badge );
		}
	}
}
