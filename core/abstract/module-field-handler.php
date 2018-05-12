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
	abstract class WPOnion_Module_Field_Handler extends WPOnion_Abstract {
		/**
		 * Fields
		 *
		 * @var array
		 */
		protected $fields = array();

		protected $current_section = false;
		protected $current_page    = false;

		/**
		 * @param string $page_slug
		 * @param string $page_title
		 * @param array  $page_args
		 *
		 * @return $this
		 */
		public function add_page( $page_slug = '', $page_title = '', $page_args = array() ) {
			if ( ! isset( $this->fields[ $page_slug ] ) ) {
				$args = $this->parse_args( $page_args, array(
					'name'  => $page_slug,
					'title' => $page_title,
					'icon'  => false,
				) );

				$this->fields[ $args['name'] ] = $args;
				$this->current_page            = $args['name'];
				$this->current_section         = false;
			}
			return $this;
		}

		/**
		 * @param bool   $page_id
		 * @param string $section_slug
		 * @param string $section_title
		 * @param array  $section_args
		 *
		 * @return $this
		 */
		public function add_section( $page_id = false, $section_slug = '', $section_title = '', $section_args = array() ) {
			if ( isset( $this->fields[ $page_id ] ) && ! isset( $this->fields[ $page_id ]['sections'][ $section_slug ] ) ) {
				$args = $this->parse_args( $section_args, array(
					'name'  => $section_slug,
					'title' => $section_title,
					'icon'  => false,
				) );

				$this->fields[ $page_id ]['sections'][ $args['name'] ] = $args;
				$this->current_section                                 = $args['name'];
			}
			return $this;
		}

		/**
		 * @param array $new_args
		 * @param       $fields
		 *
		 * @return array
		 */
		protected function __add_fields( $new_args = array(), $fields ) {
			if ( isset( $new_args[0] ) ) {
				return array_merge( $new_args, $fields );
			}
			$fields[] = $new_args;
			return $fields;
		}

		/**
		 * @param bool  $page_id
		 * @param bool  $section_id
		 * @param array $fields
		 *
		 * @return $this
		 */
		public function add_field( $page_id = false, $section_id = false, $fields = array() ) {
			if ( false !== $page_id && false === $section_id && isset( $this->fields[ $page_id ] ) ) {
				if ( ! isset( $this->fields[ $page_id ]['fields'] ) ) {
					$this->fields[ $page_id ]['fields'] = array();
				}
				$this->fields[ $page_id ]['fields'] = $this->__add_fields( $fields, $this->fields[ $page_id ]['fields'] );

			} elseif ( false !== $page_id && false !== $section_id && isset( $this->fields[ $page_id ] ) && isset( $this->fields[ $page_id ] ['sections'] [ $section_id ] ) ) {
				if ( ! isset( $this->fields[ $page_id ]['sections'][ $section_id ]['fields'] ) ) {
					$this->fields[ $page_id ]['sections'][ $section_id ]['fields'] = array();
				}
				$this->fields[ $page_id ]['sections'][ $section_id ]['fields'] = $this->__add_fields( $fields, $this->fields[ $page_id ]['sections'][ $section_id ]['fields'] );
			}

			return $this;
		}

		/**
		 * @param string $page_slug
		 * @param string $page_title
		 * @param array  $page_args
		 *
		 * @return \WPOnion_Module_Field_Handler
		 */
		public function page( $page_slug = '', $page_title = '', $page_args = array() ) {
			return $this->add_page( $page_slug, $page_title, $page_args );
		}

		/**
		 * @param string $section_slug
		 * @param string $section_title
		 * @param array  $section_args
		 *
		 * @return \WPOnion_Module_Field_Handler
		 */
		public function section( $section_slug = '', $section_title = '', $section_args = array() ) {
			return $this->add_section( $this->current_page, $section_slug, $section_title, $section_args );
		}

		/**
		 * @param string $field_type
		 * @param string $field_id
		 * @param string $field_title
		 * @param array  $field_args
		 *
		 * @return \WPOnion_Module_Field_Handler
		 */
		public function field( $field_type = '', $field_id = '', $field_title = '', $field_args = array() ) {
			$field_args = $this->parse_args( $field_args, array(
				'id'    => $field_id,
				'type'  => $field_type,
				'title' => $field_title,
			) );
			return $this->add_field( $this->current_page, $this->current_section, $field_args );
		}
	}
}