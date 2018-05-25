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

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Module_Field_Handler' ) ) {
	/**
	 * Class WPOnion_Module_Field_Handler
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class WPOnion_Module_Field_Handler extends WPOnion_Abstract {
		/**
		 * Fields
		 *
		 * @var array
		 */
		protected $fields = array();

		/**
		 * current_section
		 *
		 * @var bool
		 */
		protected $current_section = false;

		/**
		 * current_page
		 *
		 * @var bool
		 */
		protected $current_page = false;

		/**
		 * Stores Current Field Value.
		 *
		 * @var bool
		 */
		protected $current_field = false;

		/**
		 * Checks if field needs to be returned.
		 * return_field
		 *
		 * @var bool
		 */
		protected $return_field = false;

		public function get() {
			return $this->fields;
		}

		public function __call( $name, $arguments ) {
			$return = null;
			$name   = str_replace( '_', '', $name );
			if ( method_exists( $this, $name ) ) {
				$this->return_field = true;
				$return             = call_user_func_array( array( &$this, $name ), $arguments );
				$this->return_field = false;
			}

			return $return;
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
				$page = $this->parse_args( $page_title, array(
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
		 * Adds Page To Array.
		 *
		 * @param string $page_title
		 * @param string $page_slug
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
			}
			return $this;
		}

		/**
		 * Adds A Section To A Page.
		 *
		 * @param string $section_title
		 * @param string $section_slug
		 * @param bool   $section_icon
		 * @param array  $section_args
		 * @param string $page_slug
		 *
		 * @return $this
		 */
		public function add_section( $page_slug = '', $section_title = '', $section_slug = '', $section_icon = false, $section_args = array() ) {
			if ( is_array( $page_slug ) ) {
				$args = $this->page_section_args( $page_slug );
			} else {
				$args = $this->page_section_args( $section_title, $section_slug, $section_icon, $section_args );
			}

			$args['fields'] = array();
			$page           = ( isset( $args['page'] ) ) ? $args['page'] : ( empty( $page_slug ) ) ? $this->current_page : $page_slug;
			$slug           = $args['name'];

			if ( ! isset( $this->fields[ $page ]['sections'] ) ) {
				$this->fields[ $page ]['sections'] = array();
			}

			$this->fields[ $page ]['sections'][ $slug ] = $args;
			$this->current_section                      = $slug;
			$this->current_field                        = false;
			return $this;
		}

		/**
		 * Adds A Section To Fields Array.
		 *
		 * @param string $section_title
		 * @param string $section_slug
		 * @param bool   $section_icon
		 * @param array  $section_args
		 *
		 * @return $this
		 */
		public function section( $section_title = '', $section_slug = '', $section_icon = false, $section_args = array() ) {
			if ( is_array( $section_title ) ) {
				$this->add_section( $section_title );
			} else {
				$this->add_section( false, $section_title, $section_slug, $section_icon, $section_args );
			}

			return $this;
		}

		/**
		 * Add A Field To Selected Section or page.
		 *
		 * @param bool  $page_id
		 * @param bool  $section_id
		 * @param array $field_array
		 */
		protected function _add_field( $page_id = false, $section_id = false, $field_array = array() ) {
			if ( false !== $page_id && false !== $section_id ) {
				if ( isset( $this->fields[ $page_id ] ) ) {
					if ( isset( $this->fields[ $page_id ]['sections'][ $section_id ] ) ) {
						if ( ! isset( $this->fields[ $page_id ]['sections'][ $section_id ]['fields'] ) ) {
							$this->fields[ $page_id ]['sections'][ $section_id ]['fields'] = array();
						}
						$this->fields[ $page_id ]['sections'][ $section_id ]['fields'][ $field_array['id'] ] = $field_array;
					}
				}
			} elseif ( false !== $page_id ) {
				if ( isset( $this->fields[ $page_id ] ) ) {
					if ( ! isset( $this->fields[ $page_id ]['fields'] ) ) {
						$this->fields[ $page_id ]['fields'] = array();
					}
					$this->fields[ $page_id ]['fields'][ $field_array['id'] ] = $field_array;
				}
			} else {
				$this->fields[ $field_array['id'] ] = $field_array;
			}
			$this->current_field = $field_array['id'];
			return $this;
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
			$page    = ( isset( $args['page'] ) ) ? $args['page'] : $this->current_page;
			$section = ( isset( $args['section'] ) ) ? $args['section'] : $this->current_section;

			$args = $this->parse_args( $args, array(
				'type'  => $type,
				'id'    => $id,
				'title' => $title,
			) );

			if ( isset( $args['page'] ) ) {
				unset( $args['page'] );
			}

			if ( isset( $args['section'] ) ) {
				unset( $args['section'] );
			}

			if ( false === $args['id'] ) {
				$args['id'] = wponion_hash_array( $args );
			}
			return array(
				'page'    => $page,
				'section' => $section,
				'field'   => $args,
			);
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
			$args = $this->field_args( $type, $id, $title, $args );
			if ( $this->return_field ) {
				return $args['field'];
			}
			return $this->_add_field( $args['page'], $args['section'], $args['field'] );
		}

		/**
		 * @param string $type
		 * @param string $content
		 * @param bool   $id
		 * @param bool   $title
		 * @param array  $args
		 *
		 * @return \WPOnion_Module_Field_Handler
		 */
		protected function _content_field( $type = '', $content = '', $id = false, $title = false, $args = array() ) {
			return $this->add_field( $type, $id, $title, $this->parse_args( $args, array( 'content' => $content ) ) );
		}

		/*************************************
		 * Below Are Fields Related Functions
		 ************************************/

		public function text( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'text', $id, $title, $args );
		}

		public function textarea( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'textarea', $id, $title, $args );
		}

		public function checkbox_radio( $type = '', $id = false, $title = false, $options = array(), $args = array() ) {
			$defaults = ( is_string( $options ) ) ? array( 'label' => $options ) : array( 'options' => $options );
			return $this->add_field( $type, $id, $title, $this->parse_args( $args, $defaults ) );
		}

		public function switch( $id = false, $title = false, $label = false, $args = array() ) {
			return $this->checkbox_radio( 'switch', $id, $title, $label, $args );
		}

		public function checkbox( $id = false, $title = false, $options = array(), $args = array() ) {
			return $this->checkbox_radio( 'checkbox', $id, $title, $options, $args );
		}

		public function radio( $id = false, $title = false, $options = array(), $args = array() ) {
			return $this->checkbox_radio( 'radio', $id, $title, $options, $args );
		}

		public function select( $id = false, $title = false, $options = array(), $args = array() ) {
			return $this->checkbox_radio( 'select', $id, $title, $options, $args );
		}

		public function multi_select( $id = false, $title = false, $options = array(), $args = array() ) {
			return $this->select( $id, $title, $options, $this->parse_args( $args, array( 'multiple' => true ) ) );
		}

		public function wp_link( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'wp_link', $id, $title, $args );
		}

		public function key_value( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'key_value', $id, $title, $args );
		}

		public function image_select( $id = false, $title = false, $options = array(), $image_type = 'checkbox', $args = array() ) {
			return $this->checkbox_radio( 'image_select', $id, $title, $options, $this->parse_args( $args, array(
				'image_type' => $image_type,
			) ) );
		}

		public function image( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'image', $id, $title, $args );
		}

		public function gallery( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'gallery', $id, $title, $args );
		}

		public function notice( $content = '', $notice_type = '', $id = false, $title = false, $args = array() ) {
			return $this->_content_field( 'notice', $content, $id, $title, $this->parse_args( $args, array( 'notice_type' => $notice_type ) ) );
		}

		public function heading( $content = '', $id = false, $title = false, $args = array() ) {
			return $this->_content_field( 'heading', $content, $id, $title, $args );
		}

		public function subheading( $content = '', $id = false, $title = false, $args = array() ) {
			return $this->_content_field( 'subheading', $content, $id, $title, $args );
		}

		public function jambo_content( $content = '', $id = false, $title = false, $args = array() ) {
			return $this->_content_field( 'jambo_content', $content, $id, $title, $args );
		}

		public function card( $id = false, $title = false, $options = array(), $args = array() ) {
			return $this->add_field( 'card', $id, $title, $this->parse_args( $args, array( 'options' => $options ) ) );
		}

		public function icon_picker( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'icon_picker', $id, $title, $args );
		}

		public function font( $id = false, $title = false, $args = array() ) {
			return $this->add_field( 'font', $id, $title, $args );
		}

		public function accordion( $id = false, $title = false, $fields = array(), $args = array() ) {
			return $this->add_field( 'accordion', $id, $title, $this->parse_args( $args, array(
				'fields' => $fields,
			) ) );
		}
	}
}