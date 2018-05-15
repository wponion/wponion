<?php
/**
 *
 * Initial version created 09-05-2018 / 11:41 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Field' ) ) {
	/**
	 * Class WPOnion_Field
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class WPOnion_Field extends WPOnion_Abstract {
		/**
		 * columns
		 *
		 * @var int
		 */
		protected static $columns = 0;

		/**
		 * orginal_field
		 *
		 * @var array
		 */
		protected $orginal_field = array();

		/**
		 * orginal_value
		 *
		 * @var array
		 */
		protected $orginal_value = array();

		/**
		 * Database ID
		 *
		 * @var string
		 */
		protected $unique = '';

		/**
		 * field
		 *
		 * @var array
		 */
		protected $field = array();

		/**
		 * value
		 *
		 * @var array
		 */
		protected $value = array();

		/**
		 * Value is set to true if not added value any of the core features in WPOnion.
		 *
		 * @var bool
		 */
		protected $is_external = false;

		/**
		 * Stores Field Errors.
		 *
		 * @var null
		 */
		protected $errors = null;

		/**
		 * WPOnion_Field constructor.
		 *
		 * @param array  $field
		 * @param array  $value
		 * @param string $unique
		 */
		public function __construct( $field = array(), $value = array(), $unique = array() ) {
			$this->orginal_field = $field;
			$this->orginal_value = $value;

			$this->field = $this->handle_field_args( $this->set_args( $field ) );
			$this->value = $value;

			if ( is_string( $unique ) ) {
				$this->unique    = $unique;
				$this->plugin_id = false;
				$this->module    = false;
			} else {
				$this->unique    = ( isset( $unique['unique'] ) ) ? $unique['unique'] : false;
				$this->plugin_id = ( isset( $unique['plugin_id'] ) ) ? $unique['plugin_id'] : false;
				$this->module    = ( isset( $unique['module'] ) ) ? $unique['module'] : false;
			}

			if ( defined( 'WPONION_FIELD_ASSETS' ) && true === WPONION_FIELD_ASSETS || ( did_action( 'admin_enqueue_scripts' ) || did_action( 'wp_enqueue_scripts' ) ) ) {
				$this->field_assets();
			} else {
				$this->add_action( 'admin_enqueue_scripts', 'field_assets', 1 );

				if ( defined( 'WPONION_FRONTEND' ) && true === WPONION_FRONTEND ) {
					$this->add_action( 'wp_enqueue_scripts', 'field_assets', 1 );
				}
			}
			$this->localize_field();
		}

		/**
		 * This function is called after array merge with default is done.
		 *
		 * @param array $data
		 *
		 * @return array
		 */
		public function handle_field_args( $data = array() ) {
			return $data;
		}

		/**
		 * This function Returns Global Default Field Args.
		 *
		 * @return array
		 */
		protected function defaults() {
			$defaults = array(
				'id'              => false, # Unique Database ID For Each And Every Field
				'type'            => false, # Type of the field,
				'title'           => false, # Title For Each Field,
				'desc'            => false, # Field Description to print after title,
				'desc_field'      => false, # Field description to print after field output.
				'help'            => false, # Used for field tooltip
				'class'           => false, # Extra Element Class,
				'style'           => false,
				'wrap_class'      => null, # custom class for the field wrapper,
				'wrap_attributes' => array(),
				'placeholder'     => false,
				'default'         => null, # Stores Default Value,
				'dependency'      => null, # dependency for showing and hiding fields
				'attributes'      => array(), # attributes of field. supporting only html standard attributes
				'sanitize'        => null,    #sanitize of field. can be enabled or disabled
				'validate'        => null,    #validate of field. can be enabled or disabled
				'before'          => null,
				'after'           => null,
				'before_title'    => null,
				'after_title'     => null,
				'debug'           => false,
				'debug_light'     => false,
				'only_field'      => false,
				'name'            => false,
			);
			return $this->parse_args( $this->field_default(), $defaults );
		}

		/**
		 * Check / Returns an element from $this->field.
		 *
		 * @param string $key
		 * @param null   $value
		 *
		 * @return bool|mixed
		 */
		public function data( $key = '', $value = null ) {
			if ( isset( $this->field[ $key ] ) ) {
				if ( null === $value ) {
					return $this->field[ $key ];
				} else {
					return ( $value === $this->field[ $key ] ) ? true : false;
				}
			}
			return false;
		}

		/**
		 * Sets A Given Args To Field Array.
		 *
		 * @param string $key
		 * @param        $value
		 */
		public function set_field( $key = '', $value ) {
			$this->field[ $key ] = $value;
		}

		/**
		 * Generates Final HTML output of the current field.
		 */
		public function final_output() {
			if ( $this->data( 'only_field', true ) ) {

			} else {
				$this->wrapper();
				$this->wrapper( false );
			}
		}

		/**
		 * Checks If current elements key exists.
		 *
		 * @param string $key
		 *
		 * @return bool
		 */
		protected function has( $key = '' ) {
			if ( false == $this->data( $key ) || null === $this->data( $key ) || empty( $this->data( $key ) ) ) {
				return false;
			}
			return true;
		}

		/**
		 * Returns Default Wrap Class.
		 */
		protected function default_wrap_class() {
			$type      = $this->data( 'type' );
			$has_error = ( $this->has_errors() ) ? ' wponion-element-has-error ' : '';
			return 'wponion-element wponion-element-' . $type . ' wponion-field-' . $type . ' ' . $has_error;
		}

		/**
		 * Generates Elements Wrapper.
		 *
		 * @param bool $is_start
		 */
		protected function wrapper( $is_start = true ) {
			if ( true === $is_start ) {
				$is_pseudo       = $this->data( 'pseudo' );
				$wrap_attrs_user = $this->data( 'wrap_attributes' );
				$_wrap_class     = $this->data( 'wrap_class' );
				$has_title       = ( false === $this->has( 'title' ) ) ? 'wponion-element-no-title wponion-field-no-title' : '';
				$is_pseudo       = ( true === $is_pseudo ) ? ' wponion-pseudo-field ' : '';
				$wrap_class      = $this->default_wrap_class() . ' ' . $is_pseudo . ' ' . $has_title . ' ' . $_wrap_class . ' ';

				if ( is_array( $wrap_attrs_user ) ) {
					$wrap_attrs_user['class'] = isset( $wrap_attrs_user['class'] ) ? $wrap_class . $wrap_attrs_user['class'] : $wrap_class;
				}

				if ( false !== $this->data( 'columns' ) ) {
					echo ( 0 === self::$columns ) ? '<div class="row wponion-row">' : '';
					$wrap_attrs_user['class'] .= ' col';
					self::$columns            += $this->data( 'columns' );
				}

				$wrap_attrs_user = wponion_array_to_html_attributes( $wrap_attrs_user );
				echo '<div ' . $wrap_attrs_user . '>';
				echo $this->title();
				echo $this->field_wrapper( true );
				echo $this->output();
			} else {
				echo $this->field_wrapper( false ) . '<div class="clear"></div>';
				echo '</div>';
				if ( 12 === self::$columns ) {
					echo '</div>';
					self::$columns = 0;
				}
			}
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
				$wrap_class = ' wponion-fieldset ';
				if ( ! $this->has( 'title' ) ) {
					$wrap_class .= ' wponion-fieldset-notitle';
				}
				return '<div class="' . $wrap_class . '">';
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
			if ( $this->has( 'title' ) ) {
				$html .= '<div class="wponion-field-title wponion-element-title">';
				$html .= $this->title_before_after( false ) . '<h4>' . $this->data( 'title' ) . '</h4>' . $this->title_before_after( true );
				$html .= $this->field_help();
				$html .= $this->title_desc();
				$html .= '</div>';
			}
			return $html;
		}

		/**
		 * Renders HTML for ToolTip.
		 *
		 * @todo Finish the pending HTML Work.
		 */
		protected function field_help() {
			$html = '';
			if ( $this->has( 'help' ) ) {
				$data      = $this->tooltip_data( $this->data( 'help' ), array( 'icon' => 'dashicons dashicons-editor-help' ) );
				$span_attr = wponion_array_to_html_attributes( $data['attr'] );
				$html      = '<span ' . $span_attr . '><span class="' . $data['data']['icon'] . '"></span></span>';
				if ( true !== $data ) {
					$html .= $data['js_data'];
				}
			}
			return $html;
		}

		/**
		 * @param array $main_data
		 * @param array $extra_args
		 *
		 * @return array
		 */
		protected function tooltip_data( $main_data = array(), $extra_args = array() ) {
			$data                      = $this->handle_data( $main_data, $this->parse_args( $extra_args, array(
				'content'   => false,
				'arrow'     => true,
				'arrowType' => 'round',
			) ), 'content' );
			$attr                      = array(
				'title' => $data['content'],
				'class' => 'wponion-help',
			);
			$object_name               = wponion_localize_object_name( 'wponion', 'tooltip', $this->unid() );
			$attr['data-wponion-jsid'] = $object_name;

			unset( $data['content'] );

			return array(
				'attr'    => $attr,
				'data'    => $data,
				'js_data' => wponion_plugin_localize( $object_name, $data ),
				'jsid'    => $object_name,
			);
		}

		/**
		 * Returns A Unique ID
		 *
		 * @return string
		 */
		protected function unid() {
			return $this->module() . '_' . $this->plugin_id() . '_' . $this->field_id();
		}

		/**
		 * Checks and returns title_before and title_after key & values.
		 *
		 * @param bool $is_after
		 *
		 * @return string
		 */
		protected function title_before_after( $is_after = false ) {
			if ( false === $is_after && false !== $this->has( 'title_before' ) ) {
				return $this->data( 'title_after' );
			} elseif ( true === $is_after && false !== $this->has( 'title_after' ) ) {
				return $this->data( 'title_after' );
			}
			return '';
		}

		/**
		 * Generates Title Description HTML.
		 *
		 * @return string
		 */
		protected function title_desc() {
			$html = '';
			if ( $this->has( 'desc' ) ) {
				$html .= '<p class="wponion-desc wponion-title-desc">' . $this->data( 'desc' ) . '</p>';
			}
			return $html;
		}

		/**
		 * Generates Field Description HTML.
		 *
		 * @return string
		 */
		protected function field_desc() {
			$html = '';
			if ( $this->has( 'desc_field' ) ) {
				$html .= '<p class="wponion-desc wponion-field-desc">' . $this->data( 'desc_field' ) . '</p>';
			}
			return $html;
		}

		/**
		 * Returns Element Before Data.
		 *
		 * @return bool|mixed|string
		 */
		protected function before() {
			if ( false !== $this->has( 'before' ) ) {
				return $this->data( 'before' );
			}
			return '';
		}

		/**
		 * Returns Elements After Data.
		 *
		 * @return string
		 */
		protected function after() {
			$data = ( false !== $this->has( 'after' ) ) ? $this->data( 'after' ) : '';
			$data .= $this->field_desc();
			$data .= $this->field_error();
			return $data;
		}

		/**
		 * Returns Field Errors.
		 *
		 * @return array|false
		 */
		protected function get_errors() {
			if ( null === $this->errors ) {
				$error_instance = wponion_registry( $this->module() . '_' . $this->plugin_id(), 'WPOnion_Field_Error_Registry' );
				if ( $error_instance ) {
					$field_id     = sanitize_key( $this->unique( $this->field_id() ) );
					$this->errors = $error_instance->get( $field_id );
				} else {
					$this->errors = false;
				}
			}
			return $this->errors;
		}

		/**
		 * Returns True if has errors.
		 *
		 * @return bool
		 */
		protected function has_errors() {
			return ( is_array( $this->get_errors() ) );
		}

		/**
		 * Renders Field Errors.
		 *
		 * @return string
		 */
		protected function field_error() {
			$errors = $this->get_errors();
			if ( false !== $errors && isset( $errors['message'] ) ) {
				$html = '<div class="wponion-field-errors invalid-feedback"><ul>';
				foreach ( $errors['message'] as $message ) {
					$html .= '<li>' . $message . '</li>';
				}
				$html .= '</ul></div>';
				return $html;
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
				return $this->data( 'text_type' );
			} elseif ( false !== $this->has( 'attributes' ) ) {
				$data = $this->data( 'attributes' );
				if ( isset( $data['type'] ) ) {
					return $data['type'];
				}
			}
			return $this->data( 'type' );
		}

		/**
		 * Returns Fields ID.
		 *
		 * @return bool|mixed
		 */
		protected function field_id() {
			return ( false !== $this->has( 'id' ) ) ? $this->data( 'id' ) : false;
		}

		/**
		 * Generates Field Attributes HTML.
		 *
		 * @param array $field_attributes
		 *
		 * @return string
		 */
		protected function attributes( $field_attributes = array() ) {
			$user_attrs = ( false !== $this->has( 'attributes' ) ) ? $this->data( 'attributes' ) : array();

			if ( false !== $this->has( 'style' ) ) {
				$user_attrs['style'] = $this->data( 'style' );
			}

			if ( false !== $this->has( 'placeholder' ) ) {
				$user_attrs['placeholder'] = $this->data( 'placeholder' );
			}

			$user_attrs = $this->parse_args( $user_attrs, $field_attributes );
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
			$user_class = ( false !== $this->has( 'class' ) ) ? $this->data( 'class' ) : '';
			return $this->_filter( 'field_html_class', $user_class . ' ' . $field_class );
		}

		/**
		 * Returns Current Elements Value.
		 *
		 * @return array
		 */
		protected function value() {
			return $this->value;
		}

		/**
		 * Returns Elements Name.
		 *
		 * @param string $extra_name
		 *
		 * @return string
		 */
		protected function name( $extra_name = '' ) {
			if ( false !== $this->has( 'name' ) ) {
				return $this->data( 'name' ) . $extra_name;
			} else {
				return $this->unique( $this->field_id() ) . $extra_name;
			}
		}

		/**
		 * @param string $extra
		 * @param bool   $unique
		 *
		 * @return string
		 */
		protected function unique( $extra = '', $unique = false ) {
			if ( false === $unique ) {
				$unique = $this->unique;
			}
			if ( ! empty( $extra ) ) {
				$unique = $unique . '[' . $extra . ']';
			}
			return $unique;
		}

		/***************************************************************************************************************
		 *  Elements Few Abstract Functions.
		 **************************************************************************************************************/

		/**
		 * Function Required To Register / Load current field's assets.
		 *
		 * @return mixed
		 */
		abstract public function field_assets();

		/**
		 * Custom Function To Return Current Fields Default Args.
		 *
		 * @return mixed
		 */
		abstract protected function field_default();

		/**
		 * Function Where all field can output their html.
		 *
		 * @return mixed
		 */
		abstract protected function output();

		/**
		 * Generates A New JS Field ID.
		 */
		protected function js_field_id() {
			if ( ! isset( $this->js_field_id ) ) {
				$key               = $this->unid() . '_' . $this->unique() . '_' . uniqid( time() );
				$key               = wponion_localize_object_name( 'wponion', 'field', $key );
				$key               = str_replace( array( '-', '_' ), '', $key );
				$this->js_field_id = sanitize_key( $key );
			}
			return $this->js_field_id;
		}

		/**
		 * Handles JS Values For A Element.
		 *
		 * @todo check for script is done. if its then add inline to the fileds html.
		 * var_dump( wp_script_is( 'wponion-fields', 'done' ) );
		 */
		public function localize_field() {
			$data = $this->js_field_args();
			if ( ! empty( $data ) ) {
				wponion_asset()->add( $this->js_field_id(), $data, true );
			}
		}

		/**
		 * This function is used to set any args that requires in javascript for the current field.
		 *
		 * @return array
		 */
		protected function js_field_args() {
			return array();
		}

		protected function handle_options( $key, $value, $more_defaults = array() ) {
			$defaults = $this->set_args( $more_defaults, array(
				'label'      => '',
				'key'        => '',
				'attributes' => array(),
				'disabled'   => false,
				'tooltip'    => false,
			) );

			if ( ! is_array( $value ) ) {
				$defaults['key']   = $key;
				$defaults['label'] = $value;
				return $defaults;
			}

			$value = $this->parse_args( $value, $defaults );

			if ( false !== $value['tooltip'] ) {
				$value['tooltip'] = ( true === $value['tooltip'] ) ? $value['label'] : $value['tooltip'];
				$value['tooltip'] = $this->tooltip_data( $value['tooltip'], array( 'position' => 'right' ) );
			}

			if ( true === $value['disabled'] ) {
				$value['attributes']['disabled'] = 'disabled';
			}

			if ( '' === $value['key'] ) {
				$value['key'] = $key;
			}
			return $value;
		}
	}
}
