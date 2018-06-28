<?php
/**
 *
 * Initial version created 11-05-2018 / 12:44 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Bridge;

use WPOnion\Core\Array_Finder;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Bridge\Field_Builder' ) ) {
	/**
	 * Class Field_Builder
	 *
	 * @package WPOnion\Bridge
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Field_Builder extends Array_Finder {
		/**
		 * Fields
		 *
		 * @var array
		 */
		protected $fields = array();

		/**
		 * variable
		 *
		 * @var string
		 */
		protected $variable = 'fields';

		/**
		 * Stores Current Path.
		 *
		 * @var string
		 */
		protected $current_path = array();

		/**
		 * current_page
		 *
		 * @var null
		 */
		protected $current_page = null;

		/**
		 * current_section
		 *
		 * @var null
		 */
		protected $current_section = null;

		/**
		 * current_field
		 *
		 * @var null
		 */
		protected $current_field = null;

		/**
		 * has_page
		 *
		 * @var bool
		 */
		protected $has_page = false;

		/**
		 * has_section
		 *
		 * @var bool
		 */
		protected $has_section = false;


		/**
		 * @return bool
		 */
		public function has_page() {
			return $this->has_page;
		}

		/**
		 * @return bool
		 */
		public function has_section() {
			return $this->has_section;
		}


		/**
		 * @param      $value
		 * @param bool $force
		 *
		 * @return $this
		 */
		protected function set_current_path( $value, $force = false ) {
			if ( true === $force ) {
				$this->current_path = array();
			}

			if ( is_array( $value ) ) {
				foreach ( $value as $k => $val ) {
					$k                        = ( is_numeric( $k ) ) ? $val : $k;
					$this->current_path[ $k ] = $val;
				}
			} else {
				$this->current_path[ $value ] = $value;
			}

			return $this;
		}

		/**
		 * @param array $extra
		 * @param bool  $is_implode
		 *
		 * @return string|array
		 */
		protected function get_current_path( $extra = array(), $is_fields = false, $is_implode = true ) {
			$_extra = array();

			if ( ! empty( $this->current_page ) && ! empty( $this->current_section ) ) {
				$_extra[ $this->current_page ]    = $this->current_page;
				$_extra['sections']               = 'sections';
				$_extra[ $this->current_section ] = $this->current_section;
				if ( false !== $is_fields ) {
					$_extra['fields'] = 'fields';
				}
			} elseif ( empty( $this->current_section ) && ! empty( $this->current_page ) ) {
				$_extra[ $this->current_page ] = $this->current_page;
				if ( false !== $is_fields ) {
					$_extra['fields'] = 'fields';
				}
			}

			$_path = $this->parse_args( $this->current_path, $_extra );
			if ( ! empty( $extra ) ) {
				$_old               = $this->current_path;
				$this->current_path = $_path;
				$this->set_current_path( $extra );
				$_path              = $this->current_path;
				$this->current_path = $_old;
			}
			return ( $is_implode ) ? $this->implode( $_path ) : $_path;
		}

		/**
		 * End a accordion / fieldset / group nestable field.
		 *
		 * @param bool $close_count Set true to close all nested fields and back to full parent / enter numeric value to get back to few levels Like 4 | 1
		 *
		 * @return $this
		 */
		public function close( $close_count = false ) {
			if ( true === $close_count ) {
				$this->current_path = null;
			} else {
				$count = ( is_numeric( $close_count ) ) ? $close_count * 2 : 2;
				$i     = 1;
				while ( $i <= $count ) {
					array_pop( $this->current_path );
					$i++;
				}
			}
			return $this;
		}

		/**
		 * Generates A Required Array for page / section.
		 *
		 * @param string $page_title
		 * @param bool   $page_slug
		 * @param bool   $page_icon
		 * @param array  $page_args
		 *
		 * @return array
		 */
		public function page_section_args( $page_title = '', $page_slug = false, $page_icon = false, $page_args = array() ) {
			if ( is_array( $page_title ) ) {
				$page         = $this->parse_args( $page_title, array(
					'name'  => false,
					'title' => false,
					'icon'  => false,
				) );
				$page['name'] = ( ! empty( $page['name'] ) ) ? $page['name'] : sanitize_title( $page['title'] );
				return $page;
			} else {
				$page_slug = ( ! empty( $page_slug ) ) ? $page_slug : sanitize_title( $page_title );
				return $this->parse_args( $page_args, array(
					'name'  => $page_slug,
					'title' => $page_title,
					'icon'  => $page_icon,
				) );
			}
		}

		/**
		 * @param string $page_title
		 * @param bool   $page_slug
		 * @param bool   $page_icon
		 * @param array  $page_args
		 *
		 * @return $this
		 */
		public function page( $page_title = '', $page_slug = false, $page_icon = false, $page_args = array() ) {
			$args = $this->page_section_args( $page_title, $page_slug, $page_icon, $page_args );
			if ( ! isset( $this->fields[ $args['name'] ] ) ) {
				$this->fields[ $args['name'] ] = $args;
				$this->current_page            = $args['name'];
				$this->current_section         = false;
				$this->current_field           = false;
				$this->has_page                = true;
			}
			return $this;
		}

		/**
		 * @return array
		 */
		public function __fields() {
			return $this->fields;
		}

		/**
		 * @param string $page_slug
		 * @param string $section_title
		 * @param string $section_slug
		 * @param bool   $section_icon
		 * @param array  $section_args
		 *
		 * @return $this
		 */
		public function add_section( $page_slug = '', $section_title = '', $section_slug = '', $section_icon = false, $section_args = array() ) {
			$args                  = ( is_array( $page_slug ) ) ? $this->page_section_args( $page_slug ) : $this->page_section_args( $section_title, $section_slug, $section_icon, $section_args );
			$this->current_section = $args['name'];
			$this->current_field   = false;
			$_page                 = ( isset( $args['page'] ) && ! empty( $args['page'] ) ) ? $args['page'] : ( ! empty( $page_slug ) ) ? $page_slug : false;
			if ( false !== $_page ) {
				$this->current_page = $_page;
			}

			$this->set( $this->get_current_path( false, false ), $args );
			$this->has_section = true;
			return $this;
		}

		/**
		 * @param string $title
		 * @param string $slug
		 * @param bool   $icon
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function section( $title = '', $slug = '', $icon = false, $args = array() ) {
			return $this->add_section( false, $title, $slug, $icon, $args );
		}

		/**
		 * @param bool  $type
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return array
		 */
		protected function field_args( $type = false, $id = false, $title = false, $args = array() ) {
			$args = $this->parse_args( $args, array(
				'type'  => $type,
				'id'    => $id,
				'title' => $title,
			) );

			if ( false === $args['id'] ) {
				$args['id'] = wponion_hash_array( $args );
			}
			return $args;
		}

		/**
		 * @param bool  $type
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this
		 */
		public function add_field( $type = false, $id = false, $title = false, $args = array() ) {
			$args                = $this->field_args( $type, $id, $title, $args );
			$this->current_field = $args['id'];
			$path                = $this->get_current_path( $args['id'], true );
			return $this->set( $path, $args );
		}

		/**
		 * @param $extra_fields
		 *
		 * @return $this
		 */
		public function merge_fields( $extra_fields ) {
			$path  = ( ! empty( $path ) ) ? $path : $this->get_current_path( array(), true );
			$array = $this->get( $path );
			$array = ( ! is_array( $array ) ) ? array() : $array;

			if ( $extra_fields instanceof \WPOnion\Bridge\Field_Builder ) {
				$extra_fields = $extra_fields->get();
			}

			$fields = array_merge( $array, $extra_fields );

			return $this->set( $path, $fields );
		}

		/**
		 * This returns a sub instance.
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function builder() {
			return new Field_Builder();
		}

		/***************************************************************************************************************
		 * Global Single Field Functions
		 **************************************************************************************************************/

		/**
		 * Internal Helper Function.
		 *
		 * @param $path
		 * @param $args
		 *
		 * @return $this
		 */
		protected function _field_hack( $path, $args ) {
			return $this->set( $this->get_current_path( array( $this->current_field, $path ), true ), $args );
		}

		/**
		 * Sets Field Description.
		 *
		 * @param string $content
		 * @param bool   $field_side
		 *
		 * @return $this
		 */
		public function desc( $content = '', $field_side = false ) {
			return $this->_field_hack( ( true === $field_side ) ? 'desc_field' : 'desc', $content );
		}

		/**
		 * Adds Custom Style.
		 *
		 * @param string $style_attr
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function style( $style_attr = '' ) {
			return $this->_field_hack( 'style', $style_attr );
		}

		/**
		 * @param string $content
		 * @param string $icon
		 * @param array  $args
		 *
		 * @return $this
		 */
		public function help( $content = '', $icon = 'dashicons dashicons-editor-help', $args = array() ) {
			if ( is_array( $content ) ) {
				$args = $this->parse_args( $content, array(
					'content' => false,
					'icon'    => $icon,
				) );
			} elseif ( ! empty( $args ) || ! empty( $icon ) ) {
				$args = $this->parse_args( $args, array(
					'content' => $content,
					'icon'    => $icon,
				) );
			}

			return $this->_field_hack( 'help', $args );

		}

		/**
		 * @return $this
		 */
		public function unarray() {
			return $this->_field_hack( 'un_array', true );
		}

		/**
		 * @param string $type
		 * @param        $content
		 *
		 * @return $this
		 */
		public function before_after( $type = 'before', $content ) {
			return $this->_field_hack( $type, $content );
		}

		/**
		 * @param string $content
		 *
		 * @return $this
		 */
		public function before( $content = '' ) {
			return $this->before_after( 'before', $content );
		}

		/**
		 * @param string $content
		 *
		 * @return $this
		 */
		public function after( $content = '' ) {
			return $this->before_after( 'after', $content );
		}

		/**
		 * @return $this
		 */
		public function multipe() {
			return $this->_field_hack( 'multiple', true );
		}

		/**
		 * @param array $args
		 *
		 * @return $this
		 */
		public function edit_button( $args = array() ) {
			return $this->_field_hack( 'edit_button', $args );
		}

		/**
		 * @param array $args
		 *
		 * @return $this
		 */
		public function add_button( $args = array() ) {
			return $this->_field_hack( 'add_button', $args );
		}

		/**
		 * @param array $args
		 *
		 * @return $this
		 */
		public function clear_button( $args = array() ) {
			return $this->_field_hack( 'clear_button', $args );
		}

		/**
		 * @param null $limit
		 *
		 * @return $this
		 */
		public function limit( $limit = null ) {
			return $this->_field_hack( 'limit', $limit );
		}

		/**
		 * @param bool $msg
		 *
		 * @return $this
		 */
		public function error_msg( $msg = false ) {
			if ( $msg ) {
				return $this->_field_hack( 'error_msg', $msg );
			}
			return $this;
		}

		/***************************************************************************************************************
		 * Global Above Single Field Functions
		 **************************************************************************************************************/

		/**
		 * Nested Fields Handler.
		 *
		 * @param string $type
		 * @param bool   $id
		 * @param bool   $title
		 * @param array  $fields
		 * @param array  $args
		 *
		 * @return $this
		 */
		protected function nested_fields( $type = 'accordion', $id = false, $title = false, $fields = array(), $args = array() ) {
			$args['fields'] = $fields;
			$this->add_field( $type, $id, $title, $args );
			return $this;
		}

		/**
		 * @param string $type
		 * @param bool   $id
		 * @param bool   $title
		 * @param bool   $options
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		protected function checkbox_radio( $type = 'checkbox', $id = false, $title = false, $options = false, $args = array() ) {
			if ( ( 'checkbox' === $type || 'switcher' === $type ) && ! is_array( $options ) ) {
				$args['label'] = $options;
			} else {
				$args['options'] = $options;
			}
			return $this->add_field( $type, $id, $title, $args );
		}

		/**
		 * @param string $type
		 * @param bool   $title
		 * @param string $content
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		protected function content_field( $type = '', $title = false, $content = '', $args = array() ) {
			$args['content'] = $content;
			return $this->add_field( $type, false, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $fields
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function accordion( $id = false, $title = false, $fields = array(), $args = array() ) {
			return $this->nested_fields( 'accordion', $id, $title, $fields, $args );
		}

		/**
		 * @param string $title
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function accordion_title( $title = '' ) {
			return $this->_field_hack( 'accordion_title', $title );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $fields
		 * @param null  $heading
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function fieldset( $id = false, $title = false, $fields = array(), $heading = null, $args = array() ) {
			if ( ! empty( $heading ) ) {
				$args['heading'] = $heading;
			}
			return $this->nested_fields( 'fieldset', $id, $title, $fields, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $fields
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function group( $id = false, $title = false, $fields = array(), $args = array() ) {
			return $this->nested_fields( 'group', $id, $title, $fields, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function text( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'text', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param bool  $options
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function checkbox( $id = false, $title = false, $options = false, $args = array() ) {
			return $this->checkbox_radio( 'checkbox', $id, $title, $options, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param bool  $options
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function radio( $id = false, $title = false, $options = false, $args = array() ) {
			return $this->checkbox_radio( 'radio', $id, $title, $options, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param bool  $options
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function select( $id = false, $title = false, $options = false, $args = array() ) {
			return $this->checkbox_radio( 'select', $id, $title, $options, $args );
		}

		/**
		 * @param bool   $id
		 * @param bool   $title
		 * @param string $label
		 * @param string $button_type
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function button( $id = false, $title = false, $label = '', $button_type = 'button', $args = array() ) {
			$args['label']       = $label;
			$args['button_type'] = $button_type;
			return $this->add_field( 'button', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function font_picker( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'font_picker', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function gallery( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'gallery', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param bool  $show_input
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function icon_picker( $id = false, $title = false, $show_input = true, $args = array() ) {
			$args['show_input'] = $show_input;
			return $this->add_field( 'icon_picker', $id, $title, $args );
		}

		/**
		 * @param bool   $id
		 * @param bool   $title
		 * @param array  $options
		 * @param string $image_pick_type
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function image_select( $id = false, $title = false, $options = array(), $image_pick_type = 'checkbox', $args = array() ) {
			$args['image_type'] = $image_pick_type;
			return $this->checkbox_radio( 'image_select', $id, $title, $options, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $options
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function radio_image( $id = false, $title = false, $options = array(), $args = array() ) {
			return $this->image_select( $id, $title, $options, 'radio', $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $options
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function checkbox_image( $id = false, $title = false, $options = array(), $args = array() ) {
			return $this->image_select( $id, $title, $options, 'checkbox', $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function switcher( $id = false, $title = false, $args = array() ) {
			return $this->checkbox_radio( 'switcher', $id, $title, array(), $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function textarea( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'textarea', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function wp_link( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'wp_link', $id, $title, $args );
		}

		/**
		 * @param bool   $title
		 * @param array  $options
		 * @param string $card_cols
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function card( $title = false, $options = array(), $card_cols = 'col', $args = array() ) {
			$args['options']   = $options;
			$args['card_cols'] = $card_cols;
			return $this->add_field( 'card', false, $title, $args );
		}

		/**
		 * @param string $content
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function heading( $content = '', $args = array() ) {
			return $this->content_field( 'heading', false, $content, $args );
		}

		/**
		 * @param string $content
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function subheading( $content = '', $args = array() ) {
			return $this->content_field( 'subheading', false, $content, $args );
		}

		/**
		 * @param string $content
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function jambo_content( $content = '', $args = array() ) {
			return $this->content_field( 'jambo_content', false, $content, $args );
		}

		/**
		 * @param string $content
		 * @param string $notice_type
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function notice( $content = '', $notice_type = 'success', $args = array() ) {
			$args['notice_type'] = $notice_type;
			return $this->content_field( 'notice', false, $content, $args );
		}

		/**
		 * @param string $content
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function notice_primary( $content = '', $args = array() ) {
			return $this->notice( $content, 'primary', $args );
		}

		/**
		 * @param string $content
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function notice_secondary( $content = '', $args = array() ) {
			return $this->notice( $content, 'secondary', $args );
		}

		/**
		 * @param string $content
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function notice_success( $content = '', $args = array() ) {
			return $this->notice( $content, 'success', $args );
		}

		/**
		 * @param string $content
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function notice_danger( $content = '', $args = array() ) {
			return $this->notice( $content, 'danger', $args );
		}

		/**
		 * @param string $content
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function notice_warning( $content = '', $args = array() ) {
			return $this->notice( $content, 'warning', $args );
		}

		/**
		 * @param string $content
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function notice_info( $content = '', $args = array() ) {
			return $this->notice( $content, 'info', $args );
		}

		/**
		 * @param string $content
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function notice_light( $content = '', $args = array() ) {
			return $this->notice( $content, 'light', $args );
		}

		/**
		 * @param string $content
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function notice_dark( $content = '', $args = array() ) {
			return $this->notice( $content, 'dark', $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function image( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'image', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function key_value( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'key_value', $id, $title, $args );
		}

		/**
		 * @param bool   $id
		 * @param bool   $title
		 * @param array  $options
		 * @param int    $size
		 * @param string $palette_type
		 * @param string $style
		 * @param array  $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function color_palette( $id = false, $title = false, $options = array(), $size = 25, $palette_type = 'checkbox', $style = 'round with-margin', $args = array() ) {
			$args['palette_type'] = $palette_type;
			$args['size']         = $size;
			$args['options']      = $options;
			$args['style']        = $style;
			return $this->add_field( 'color_palette', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param bool  $rgba
		 * @param array $args
		 *
		 * @return \WPOnion\Bridge\Field_Builder
		 */
		public function color_picker( $id = false, $title = false, $rgba = true, $args = array() ) {
			$args['rgba'] = $rgba;
			return $this->add_field( 'color_picker', $id, $title, $args );
		}
	}
}
