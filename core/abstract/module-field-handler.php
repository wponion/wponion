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

		/**
		 * @param string $page_id
		 * @param string $page_title
		 * @param array  $page_args
		 *
		 * @return $this
		 */
		public function add_page( $page_id = '', $page_title = '', $page_args = array() ) {
			if ( ( false === $page_title || empty( $page_title ) ) || ( false === $page_id || empty( $page_id ) ) ) {
				return $this;
			}
			$args = $this->parse_args( $page_args, array(
				'name'  => $page_id,
				'title' => $page_title,
			) );

			$this->fields[ $args['name'] ] = $args;

			return $this;
		}

		/**
		 * @param string $page_id
		 * @param string $section_id
		 * @param string $section_title
		 * @param array  $section_args
		 *
		 * @return $this
		 */
		public function add_section( $page_id = '', $section_id = '', $section_title = '', $section_args = array() ) {
			if ( ( false === $page_id || empty( $page_id ) ) || ( false === $section_title || empty( $section_title ) ) || ( false === $section_id || empty( $section_id ) ) ) {
				return $this;
			}

			$page_slug = ( empty( $section_id ) && ! empty( $section_title ) ) ? sanitize_title( $section_title ) : $section_id;
			$args      = $this->parse_args( $section_args, array(
				'name'  => $page_slug,
				'title' => $section_title,
			) );

			if ( ! isset( $this->fields[ $page_id ]['sections'] ) ) {
				$this->fields[ $page_id ]['sections'] = array();
			}
			$this->fields[ $page_id ]['sections'][ $section_id ] = $args;
			return $this;
		}

		/**
		 * Adds A Field To Field Array.
		 *
		 * @param string $page_id
		 * @param bool   $section_id
		 * @param array  $field
		 *
		 * @return $this
		 */
		public function add_field( $page_id = '', $section_id = false, $field = array() ) {
			if ( false === $page_id || empty( $page_id ) ) {
				return $this;
			}

			if ( false === $section_id ) {
				if ( isset( $this->fields[ $page_id ] ) ) {
					if ( ! isset( $this->fields[ $page_id ]['fields'] ) ) {
						$this->fields[ $page_id ]['fields'] = array();
					}

					if ( isset( $field[0] ) ) {
						$this->fields[ $page_id ]['fields'] = array_merge( $this->fields[ $page_id ]['fields'], $field );
					} else {
						$this->fields[ $page_id ]['fields'][] = $field;
					}
				}
			} else {
				if ( isset( $this->fields[ $page_id ] ) ) {
					if ( ! isset( $this->fields[ $page_id ]['sections'][ $section_id ]['fields'] ) ) {
						$this->fields[ $page_id ]['sections'][ $section_id ]['fields'] = array();
					}

					if ( isset( $field[0] ) ) {
						$this->fields[ $page_id ]['sections'][ $section_id ]['fields'] = array_merge( $this->fields[ $page_id ]['sections'][ $section_id ]['fields'], $field );
					} else {
						$this->fields[ $page_id ]['sections'][ $section_id ]['fields'][] = $field;
					}
				}
			}


			return $this;
		}
	}
}