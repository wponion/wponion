<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPO\Helper\Field;

if ( ! class_exists( '\WPO\Helper\Field\Common_Args' ) ) {
	/**
	 * Class Common_Args
	 *
	 * @package WPO\Helper\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method mixed id
	 * @method mixed title
	 * @method mixed help
	 * @method mixed default
	 * @method mixed desc
	 * @method mixed desc_field
	 * @method mixed name
	 * @method mixed js_validate
	 * @method mixed type
	 * @method mixed style
	 * @method mixed placeholder
	 * @method mixed disabled
	 * @method mixed class
	 * @method mixed before
	 * @method mixed after
	 * @method mixed horizontal
	 * @method mixed only_field
	 * @method mixed clone
	 * @method mixed clone_settings
	 * @method mixed debug
	 * @method mixed query_args
	 * @method mixed wp_pointer
	 * @method mixed wrap_tooltip
	 * @method mixed wrap_class
	 * @method mixed wrap_id
	 * @method bool multiple()
	 */
	class Common_Args extends Array_Args {
		/**
		 * Updates Field Type.
		 *
		 * @param $type
		 *
		 * @return $this
		 */
		public function set_type( $type ) {
			$this['type'] = $type;
			return $this;
		}

		/**
		 * Sets id.
		 *
		 * @param $id
		 *
		 * @return $this
		 */
		public function set_id( $id ) {
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
		public function set_title( $title ) {
			$this['title'] = $title;
			return $this;
		}

		/**
		 * Set Custom Field Name Attribute.
		 *
		 * @param $name
		 *
		 * @return $this
		 */
		public function set_name( $name ) {
			$this['name'] = $name;
			return $this;
		}

		/**
		 * Sets Field Help Attribute.
		 *
		 * @param $help
		 *
		 * @return $this
		 */
		public function set_help( $help ) {
			$this['help'] = $help;
			return $this;
		}

		/**
		 * Sets Field Default Value.
		 *
		 * @param null $default
		 *
		 * @return $this
		 */
		public function set_default( $default = null ) {
			$this['default'] = $default;
			return $this;
		}

		/**
		 * Sets Field Description.
		 *
		 * @param bool $desc
		 * @param bool $below_title
		 *
		 * @return $this
		 */
		public function set_desc( $desc = false, $below_title = true ) {
			if ( true === $below_title ) {
				$this['desc'] = $desc;
			} else {
				$this['desc_field'] = $desc;
			}
			return $this;
		}

		/**
		 * Set Field Description Below Field.
		 *
		 * @param bool $desc_field
		 *
		 * @return $this
		 */
		public function set_desc_field( $desc_field = true ) {
			if ( true === $desc_field && ! empty( $this['desc'] ) ) {
				$this['desc_field'] = $this['desc'];
				$this->set_desc( false );
			} else {
				$this['desc_field'] = $desc_field;
			}

			return $this;
		}

		/**
		 * Field Inline Style.
		 *
		 * @param null|array|string $style
		 * @param bool              $merge
		 *
		 * @return $this
		 * @example Inline Style As String.
		 * $field->style('color:red');
		 * Inline Style As Array
		 * $field->style(array(
		 *    'height' => '10px',
		 *    'width' => '10px',
		 * ));
		 *
		 * Output Will be 'height:10px;width:10px;'
		 * if $merge is set to true then existing style gets appended to new style.
		 *
		 *
		 */
		public function set_style( $style = null, $merge = true ) {
			if ( null === $style ) {
				return $this['style'];
			}

			if ( wponion_is_array( $style ) ) {
				$_style = $style;
				$style  = '';
				foreach ( $_style as $key => $value ) {
					$key   = rtrim( $key, ':' );
					$value = rtrim( $value, ';' );
					$style = $style . ' ' . $key . ':' . $value . ';';
				}
			}

			$this['style'] = ( true === $merge ) ? $this['style'] . ' ' . $style : $style;
			return $this;
		}

		/**
		 * Field Placeholder.
		 *
		 * @param null $placeholder
		 *
		 * @return $this
		 */
		public function set_placeholder( $placeholder = null ) {
			$this['placeholder'] = $placeholder;
			return $this;
		}

		/**
		 * Mark Field as disabled by passing true as value.
		 * Mark Field as un-disabled by passing false as value.
		 *
		 * @param bool $is_disabled
		 *
		 * @return $this
		 */
		public function set_disabled( $is_disabled = true ) {
			$this['disabled'] = $is_disabled;
			return $this;
		}

		/**
		 * Disable's The Field.
		 *
		 * @return $this
		 */
		public function disable() {
			return $this->set_disabled( true );
		}

		/**
		 * Enable's The Field.
		 *
		 * @return $this
		 */
		public function enable() {
			return $this->set_disabled( false );
		}

		/**
		 * Element Before Content.
		 *
		 * @param $before
		 *
		 * @return $this
		 */
		public function set_before( $before = null ) {
			$this['before'] = $before;
			return $this;
		}

		/**
		 * Element After Content.
		 *
		 * @param $after
		 *
		 * @return $this
		 */
		public function set_after( $after = null ) {
			$this['after'] = $after;
			return $this;
		}

		/**
		 * Set Field Style to horizontal by passing true as value.
		 *
		 * @param bool $horizontal
		 *
		 * @return $this
		 */
		public function set_horizontal( $horizontal = true ) {
			$this['horizontal'] = $horizontal;
			return $this;
		}

		/**
		 * Set True To Get Only Field Output.
		 *
		 * @param bool $only_field
		 *
		 * @return $this
		 */
		public function set_only_field( $only_field = true ) {
			$this['only_field'] = $only_field;
			return $this;
		}

		/**
		 * Set True To Make Field Cloneable.
		 *
		 * @param bool|array $clone
		 *
		 * @return $this
		 */
		public function set_clone( $clone = false ) {
			if ( wponion_is_array( $clone ) ) {
				$this->set_clone_settings( $clone );
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
		public function set_clone_settings( $clone_settings = null ) {
			$this['clone_settings'] = $clone_settings;
			return $this;
		}

		/**
		 * Set True To Get Only Field Output.
		 *
		 * @param bool $debug
		 *
		 * @return $this
		 */
		public function set_debug( $debug = true ) {
			$this['debug'] = $debug;
			return $this;
		}

		/**
		 * Set Field Wrap ToolTip.
		 *
		 * @param $wrap_tooltip
		 *
		 * @return $this
		 */
		public function set_wrap_tooltip( $wrap_tooltip = null ) {
			$this['wrap_tooltip'] = $wrap_tooltip;
			return $this;
		}

		/**
		 * Set Field Wrap Class.
		 *
		 * @param $wrap_class
		 *
		 * @return $this
		 */
		public function set_wrap_class( $wrap_class = null ) {
			$this['wrap_class'] = $wrap_class;
			return $this;
		}

		/**
		 * Set Field Wrap ID.
		 *
		 * @param $wrap_id
		 *
		 * @return $this
		 */
		public function set_wrap_id( $wrap_id = null ) {
			$this['wrap_id'] = $wrap_id;
			return $this;
		}

		/**
		 * Set Field js_validate.
		 *
		 * @param $js_validate
		 *
		 * @return $this
		 */
		public function set_js_validate( $js_validate = null ) {
			$this['js_validate'] = $js_validate;
			return $this;
		}

		/**
		 * Set Field query_args.
		 *
		 * @param $query_args
		 *
		 * @return $this
		 */
		public function set_query_args( $query_args = null ) {
			$this['query_args'] = $query_args;
			return $this;
		}

		/**
		 * Set Field class.
		 *
		 * @param $class
		 *
		 * @return $this
		 */
		public function set_class( $class = null ) {
			$this['class'] = $class;
			return $this;
		}

		/**
		 * Set WP Pointer Data.
		 *
		 * @param $wp_pointer
		 *
		 * @return $this
		 */
		public function set_wp_pointer( $wp_pointer = null ) {
			$this['wp_pointer'] = $wp_pointer;
			return $this;
		}

		/**
		 * Set Field Multiple.
		 *
		 * @param bool $is_multiple
		 *
		 * @return $this
		 */
		public function set_multiple( $is_multiple = true ) {
			$this['multiple'] = $is_multiple;
			return $this;
		}
	}
}
