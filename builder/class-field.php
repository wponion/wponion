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

namespace WPO;

use WPO\Helper\Array_Helper;

if ( ! class_exists( 'WPO\Field' ) ) {
	/**
	 * Class Field
	 *
	 * @package WPOnion\Builder\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Field extends Array_Helper {
		/**
		 * @var bool
		 * @access
		 */
		private $parent_id = false;

		/**
		 * @param mixed $offset
		 *
		 * @return mixed
		 */
		public function &offsetGet( $offset ) {
			$return   = false;
			$defaults = $this->defaults();
			if ( $this->offsetExists( $offset ) ) {
				$return = &$this->{$this->variable}[ $offset ];
			} elseif ( isset( $defaults[ $offset ] ) ) {
				$return = $defaults[ $offset ];
			}
			return $return;
		}

		/**
		 * Field constructor.
		 *
		 * @param string $type
		 * @param string $field_id
		 * @param string $title
		 * @param bool   $parent_id
		 */
		public function __construct( $type = '', $field_id = '', $title = '', $parent_id = false ) {
			$args = array();

			if ( ! wponion_is_array( $type ) && ! wponion_is_array( $field_id ) && ! wponion_is_array( $title ) ) {
				$args = $this->set_args( array(
					'id'    => $field_id,
					'title' => $title,
					'type'  => $type,
				) );
			} elseif ( wponion_is_array( $type ) ) {
				$args = $this->set_args( $type );
			} elseif ( ( ! wponion_is_array( $type ) && ! empty( $type ) ) && wponion_is_array( $field_id ) ) {
				$args = $this->set_args( $this->parse_args( $field_id, array(
					'type' => $type,
				) ) );
			} elseif ( ( ! wponion_is_array( $type ) && ! empty( $type ) ) && ( ! wponion_is_array( $field_id ) && ! empty( $field_id ) ) && wponion_is_array( $title ) ) {
				$args = $this->set_args( $this->parse_args( $title, array(
					'type' => $type,
					'id'   => $field_id,
				) ) );
			}

			$this->variable = 'settings';

			foreach ( $args as $key => $val ) {
				$this[ $key ] = $val;
			}

			$this->unique    = null;
			$this->parent_id = $parent_id;

			if ( ! isset( $this['id'] ) || isset( $this['id'] ) && empty( $this['id'] ) ) {
				$args_uid     = wponion_hash_array( $args );
				$this->unique = wponion_hash_string( $this->unique . $args_uid );
			} elseif ( isset( $this['id'] ) ) {
				$this->unique = $this->parent_id . '_' . $this['id'];
			}
			wponion_field_builder_registry( $this );
		}

		/**
		 * Adds A New Field.
		 *
		 * @return \WPO\Field
		 */
		public function add() {
			if ( ! isset( $this->{$this->variable}['fields'] ) ) {
				$this->{$this->variable}['fields'] = array();
			}
			$ins = Field::create( func_get_args(), $this->unique() );

			$this->{$this->variable}['fields'][ $ins->unique() ] = $ins;
			return $ins;
		}

		/**
		 * @param string $type
		 * @param string $field_id
		 * @param string $title
		 * @param bool   $parent_id
		 *
		 * @static
		 * @return \WPO\Field
		 */
		public static function create( $type = '', $field_id = '', $title = '', $parent_id = false ) {
			$args = func_get_args();
			if ( 4 === count( $args ) ) {
				return new static( $args[0], $args[1], $args[2], $args[3] );
			} elseif ( 3 === count( $args ) ) {
				return new static( $args[0], $args[1], $args[2], false );
			} elseif ( 2 === count( $args ) ) {
				return new static( $args[0], $args[1], false, false );
			}
			return new static( $args[0], false, false, false );
		}

		/**
		 * Returns Field Default Args.
		 *
		 * @return array
		 */
		protected function defaults() {
			return wponion_field_defaults();
		}

		/**
		 * Returns Field ID.
		 *
		 * @return mixed|\WPO\Field
		 */
		public function id() {
			return $this->_set_get_args( 'id', null );
		}

		/**
		 * Returns Field ID.
		 *
		 * @param $field_id
		 *
		 * @return mixed|\WPO\Field
		 */
		public function field_id( $field_id ) {
			return $this->_set_get_args( 'id', $field_id );
		}

		/**
		 * Field Title.
		 *
		 * @param null $title
		 *
		 * @return mixed|\WPO\Field
		 */
		public function title( $title = null ) {
			return $this->_set_get_args( 'title', $title );
		}

		/**
		 * Field Help Tooltip.
		 *
		 * @param null $help
		 *
		 * @return mixed|\WPO\Field
		 */
		public function help( $help = null ) {
			return $this->_set_get_args( 'help', $help );
		}

		/**
		 * Field Default Value.
		 *
		 * @param null $default
		 *
		 * @return mixed|\WPO\Field
		 */
		public function default( $default = null ) {
			return $this->_set_get_args( 'default', $default );
		}

		/**
		 * Field Description.
		 * Description will be displayed below field title.
		 *
		 * @param null $desc
		 *
		 * @return mixed|\WPO\Field
		 */
		public function desc( $desc = null ) {
			return $this->_set_get_args( 'desc', $desc );
		}

		/**
		 * Field Description.
		 * Adding Description here will be displayed below the field.
		 *
		 * @param null $desc_field
		 *
		 * @return mixed|\WPO\Field
		 */
		public function desc_field( $desc_field = null ) {
			return $this->_set_get_args( 'desc_field', $desc_field );
		}

		/**
		 * @param bool $name
		 *
		 * @return mixed|\WPO\Field
		 */
		public function name( $name = false ) {
			return $this->_set_get_args( 'name', $name );
		}

		/**
		 * Field Sanitize Functions.
		 * It can be either a single function or multiple.
		 * if you want to override all and have only 1 function then add like below
		 * $field->sanitize('yourcallbac',false);
		 *
		 * @param null $sanitize
		 * @param bool $merge
		 *
		 * @return \WPO\Field|mixed
		 */
		public function sanitize( $sanitize = null, $merge = true ) {
			if ( null === $sanitize ) {
				return $this['sanitize'];
			}

			if ( true === $merge ) {
				if ( wponion_is_array( $this['sanitize'] ) ) {
					$this['sanitize'][] = $sanitize;
				} else {
					$this['sanitize'] = $sanitize;
				}
			} else {
				$this['sanitize'] = $sanitize;
			}

			return $this;
		}

		/**
		 * Field Validate Functions.
		 * It can be either a single function or multiple.
		 * if you want to override all and have only 1 function then add like below
		 * $field->validate('yourcallbac',false);
		 *
		 * @param null $validate
		 * @param bool $merge
		 *
		 * @return \WPO\Field|mixed
		 */
		public function validate( $validate = null, $merge = true ) {
			if ( null === $validate ) {
				return $this['validate'];
			}

			if ( true === $merge ) {
				if ( wponion_is_array( $this['validate'] ) ) {
					$this['validate'][] = $validate;
				} else {
					$this['validate'] = $validate;
				}
			} else {
				$this['validate'] = $validate;
			}
			return $this;
		}

		/**
		 * Javascript Field Validation.
		 *
		 * @param null $js_validate
		 *
		 * @return mixed|\WPO\Field
		 */
		public function js_validate( $js_validate = null ) {
			return $this->_set_get_args( 'js_valdiate', $js_validate );
		}

		/**
		 * Field Inline Style.
		 *
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
		 * @param null $style
		 * @param bool $merge
		 *
		 * @return \WPO\Field|mixed
		 */
		public function style( $style = null, $merge = true ) {
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
		 * @return mixed|\WPO\Field
		 */
		public function placeholder( $placeholder = null ) {
			return $this->_set_get_args( 'placeholder', $placeholder );
		}

		/**
		 * Mark Field as disabled by passing true as value.
		 * Mark Field as un-disabled by passing false as value.
		 *
		 * @param null $is_disabled
		 *
		 * @return mixed|\WPO\Field
		 */
		public function disabled( $is_disabled = null ) {
			return $this->_set_get_args( 'disabled', $is_disabled );
		}

		/**
		 * Disable's The Field.
		 *
		 * @return mixed|\WPO\Field
		 */
		public function disable() {
			return $this->disabled( true );
		}

		/**
		 * Enable's The Field.
		 *
		 * @return mixed|\WPO\Field
		 */
		public function enable() {
			return $this->disabled( false );
		}

		/**
		 * Adds A Single Attribute To Field.
		 *
		 * @param null $key
		 * @param null $value
		 *
		 * @return mixed|\WPO\Field
		 */
		public function attribute( $key = null, $value = null ) {
			return $this->attributes( array( $key => $value ) );
		}

		/**
		 * Adds Field Attributes.
		 *
		 * @param null $attributes
		 * @param bool $merge
		 *
		 * @return \WPO\Field|mixed
		 */
		public function attributes( $attributes = null, $merge = true ) {
			if ( null === $attributes ) {
				return $this['attributes'];
			}

			if ( true === $merge ) {
				if ( wponion_is_array( $this['attributes'] ) ) {
					$this['attributes'] = $this->parse_args( $attributes, $this['attributes'] );
				} else {
					$this['attributes'] = $attributes;
				}
			} else {
				$this['attributes'] = $attributes;
			}

			return $this;
		}

		/**
		 * Field HTML Css Class.
		 *
		 * @param $class
		 *
		 * @return mixed|\WPO\Field
		 */
		public function class( $class = null ) {
			return $this->_set_get_args( 'class', $class );
		}

		/**
		 * Element Before Content.
		 *
		 * @param $before
		 *
		 * @return mixed|\WPO\Field
		 */
		public function before( $before = null ) {
			return $this->_set_get_args( 'before', $before );
		}

		/**
		 * Element After Content.
		 *
		 * @param $after
		 *
		 * @return mixed|\WPO\Field
		 */
		public function after( $after = null ) {
			return $this->_set_get_args( 'after', $after );
		}

		/**
		 * Set Field Style to horizontal by passing true as value.
		 *
		 * @param null $horizontal
		 *
		 * @return mixed|\WPO\Field
		 */
		public function horizontal( $horizontal = null ) {
			return $this->_set_get_args( 'horizontal', $horizontal );
		}

		/**
		 * Set True To Get Only Field Output.
		 *
		 * @param null $only_field
		 *
		 * @return mixed|\WPO\Field
		 */
		public function only_field( $only_field = null ) {
			return $this->_set_get_args( 'only_field', $only_field );
		}

		/**
		 * Set Field Dependency
		 *
		 * @param null $dependency
		 *
		 * @return mixed|\WPO\Field
		 */
		public function dependency( $dependency = null ) {
			return $this->_set_get_args( 'dependency', $dependency );
		}

		/**
		 * Set True To Make Field Cloneable.
		 *
		 * @param null|array $clone
		 *
		 * @return mixed|\WPO\Field
		 */
		public function clone( $clone = null ) {
			if ( wponion_is_array( $clone ) ) {
				$this->clone_settings( $clone );
				return $this->_set_get_args( 'clone', true );
			}
			return $this->_set_get_args( 'clone', $clone );
		}

		/**
		 * Field Clone Settings .
		 *
		 * @param null $clone_settings
		 *
		 * @return mixed|\WPO\Field
		 */
		public function clone_settings( $clone_settings = null ) {
			return $this->_set_get_args( 'clone_settings', $clone_settings );
		}

		/**
		 * Mark Field as Debug enabled.
		 *
		 * @param null $debug_enabled
		 *
		 * @return mixed|\WPO\Field
		 */
		public function debug( $debug_enabled = null ) {
			return $this->_set_get_args( 'debug', $debug_enabled );
		}

		/**
		 * Set Valid Arguments to make field to fetch data from WordPress.
		 *
		 * @param null $query_args
		 *
		 * @return mixed|\WPO\Field
		 */
		public function query_args( $query_args = null ) {
			return $this->_set_get_args( 'query_args', $query_args );
		}

		/**
		 * Creates A Welcome WP Pointer For Field.
		 *
		 * @param null $wp_pointer
		 *
		 * @return mixed|\WPO\Field
		 */
		public function wp_pointer( $wp_pointer = null ) {
			return $this->_set_get_args( 'wp_pointer', $wp_pointer );
		}

		/**
		 * @param $wrap_tooltip
		 *
		 * @return mixed|\WPO\Field
		 */
		public function wrap_tooltip( $wrap_tooltip = null ) {
			return $this->_set_get_args( 'wrap_tooltip', $wrap_tooltip );
		}

		/**
		 * @param $wrap_class
		 *
		 * @return mixed|\WPO\Field
		 */
		public function wrap_class( $wrap_class = null ) {
			return $this->_set_get_args( 'wrap_class', $wrap_class );
		}

		/**
		 * @param $wrap_id
		 *
		 * @return mixed|\WPO\Field
		 */
		public function wrap_id( $wrap_id = null ) {
			return $this->_set_get_args( 'wrap_id', $wrap_id );
		}

		/**
		 * Field Wrap Attribute.
		 *
		 * @param null $attributes
		 * @param bool $merge
		 *
		 * @return $this|mixed
		 */
		public function wrap_attributes( $attributes = null, $merge = true ) {
			if ( null === $attributes ) {
				return $this['wrap_attributes'];
			}

			if ( true === $merge ) {
				if ( wponion_is_array( $this['wrap_attributes'] ) ) {
					$this['wrap_attributes'] = $this->parse_args( $attributes, $this['wrap_attributes'] );
				} else {
					$this['wrap_attributes'] = $attributes;
				}
			} else {
				$this['wrap_attributes'] = $attributes;
			}

			return $this;
		}

		/**
		 * Checks field has sub fields.
		 *
		 * @return bool
		 */
		public function has_fields() {
			return ( isset( $this['fields'] ) && ! empty( $this['fields'] ) );
		}
	}
}
