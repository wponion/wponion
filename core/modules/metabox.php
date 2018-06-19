<?php
/**
 *
 * Initial version created 18-06-2018 / 10:54 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Metabox' ) ) {
	/**
	 * Class metabox
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class metabox extends \WPOnion\Bridge\Module {
		/**
		 * Type - Value can be anything like (settings,text_field)
		 *
		 * @var string
		 */
		protected $module = 'metabox';

		/**
		 * Stores List Of Menus.
		 *
		 * @var array
		 */
		protected $menus = array();

		/**
		 * metabox constructor.
		 *
		 * @param array $settings
		 * @param array $fields
		 */
		public function __construct( $settings = array(), $fields = array() ) {
			parent::__construct( $fields, $settings );
			$this->init();
		}

		/**
		 * Inits The Class.
		 */
		public function init() {
			if ( ! empty( $this->settings ) && ! empty( $this->fields ) && false === wponion_is_ajax() ) {
				$this->add_action( 'add_meta_boxes', 'register_metabox', 10, 2 );
				$this->add_action( 'admin_enqueue_scripts', 'load_style_script' );
				$this->add_action( 'load-post.php', 'on_page_load' );
				$this->add_action( 'load-post-new.php', 'on_page_load' );
				wponion_metabox_registry( $this );
			}
		}

		public function on_page_load() {
			$this->init_theme( '-metabox-html.php' );
			$this->init_fields();

			if ( is_array( $this->option( 'post_type' ) ) ) {
				foreach ( $this->option( 'post_type' ) as $ptype ) {
					$this->add_action( 'postbox_classes_' . $ptype . '_' . $this->metabox_id(), 'custom_metabox_class' );
				}
			} else {
				$this->add_action( 'postbox_classes_' . $this->option( 'post_type' ) . '_' . $this->metabox_id(), 'custom_metabox_class' );
			}
		}

		public function custom_metabox_class( $class ) {
			$class[] = 'wponion-metabox';
			return $class;
		}

		public function init_fields() {
			$i = '__instance';
			foreach ( $this->fields as $pid => $page ) {
				if ( false === $this->valid_option( $page ) ) {
					continue;
				}

				if ( isset( $page['callback'] ) && false !== $page['callback'] ) {
					continue;
				}

				if ( isset( $page['sections'] ) ) {
					foreach ( $page['sections'] as $sid => $section ) {
						if ( false === $this->valid_option( $section ) ) {
							continue;
						}

						if ( isset( $section['callback'] ) && false !== $page['callback'] ) {
							continue;
						}

						foreach ( $section['fields'] as $fid => $field ) {
							$this->fields[ $pid ]['sections'][ $sid ]['fields'][ $fid ][ $i ] = $this->render_field( $field, $page['name'], $section['name'], true );
						}
					}
				} elseif ( isset( $page['fields'] ) ) {
					foreach ( $page['fields'] as $fid => $field ) {
						$this->fields[ $pid ]['fields'][ $fid ][ $i ] = $this->render_field( $field, $page['name'], false, true );
					}
				}
			}
		}

		/**
		 * Loads Core Styles and Scripts.
		 */
		public function load_style_script() {
			wponion_load_core_assets( 'wponion-metabox' );
		}

		/**
		 * Registers Metabox With WordPress.
		 */
		public function register_metabox() {
			$metabox_id = $this->metabox_id();
			add_meta_box( $metabox_id, $this->option( 'metabox_title' ), array(
				&$this,
				'render',
			), $this->option( 'post_type' ), $this->option( 'context' ), $this->option( 'priority' ) );
		}

		/**
		 * Returns Unique Metabox ID.
		 *
		 * @return bool|mixed
		 */
		protected function metabox_id() {
			return ( false === $this->option( 'metabox_id' ) ) ? $this->option( 'option_name' ) : $this->option( 'metabox_id' );
		}

		/**
		 * Module Defaults.
		 *
		 * @return array
		 */
		protected function defaults() {
			return $this->parse_args( parent::defaults(), array(
				'metabox_title' => false,
				'metabox_id'    => false,
				'post_types'    => false,
				'context'       => 'normal',
				'priority'      => null,
				'theme'         => 'modern',
				'template_path' => false,
			) );
		}

		/**
		 * Extracts and returns metabox menus.
		 *
		 * @return array
		 */
		public function metabox_menus() {
			if ( empty( $this->menus ) ) {
				$this->menus = $this->extract_fields_menus( $this->fields );
			}
			return $this->menus;
		}

		/**
		 * Handles Single Field args and converts into a menu.
		 *
		 * @param      $menu
		 * @param bool $is_child
		 * @param bool $parent
		 *
		 * @return array
		 */
		protected function handle_single_menu( $menu, $is_child = false, $parent = false ) {
			$title         = isset( $menu['title'] ) ? $menu['title'] : false;
			$name          = isset( $menu['name'] ) ? $menu['name'] : sanitize_title( $title );
			$icon          = isset( $menu['icon'] ) ? $menu['icon'] : false;
			$attributes    = isset( $menu['attributes'] ) ? $menu['attributes'] : array();
			$internal_href = isset( $menu['href'] ) ? false : true;

			if ( false === $parent ) {
				if ( true === $internal_href ) {
					$menu['href']      = add_query_arg( array( 'parent-id' => $name ) );
					$menu['part_href'] = add_query_arg( array( 'parent-id' => $name ) );
				} else {
					$menu['part_href'] = $menu['href'];
				}
			} elseif ( true === $is_child && false !== $parent ) {
				if ( true === $internal_href ) {
					$menu['href']      = add_query_arg( array( 'parent-id' => $parent, 'section-id' => $name ) );
					$menu['part_href'] = add_query_arg( array( 'parent-id' => $parent, 'section-id' => $name ) );
				} else {
					$menu['part_href'] = $menu['href'];
				}
			}

			if ( isset( $menu['query_args'] ) && ! empty( $menu['query_args'] ) ) {
				$menu['href']      = add_query_arg( $menu['query_args'], $menu['href'] );
				$menu['part_href'] = add_query_arg( $menu['query_args'], $menu['part_href'] );
			}

			return array(
				'attributes'       => $attributes,
				'title'            => $title,
				'name'             => $name,
				'icon'             => $icon,
				'is_active'        => false,
				'is_internal_href' => $internal_href,
				'href'             => ( isset( $menu['href'] ) ) ? $menu['href'] : false,
				'part_href'        => ( isset( $menu['part_href'] ) ) ? $menu['part_href'] : false,
				'query_args'       => ( isset( $menu['query_args'] ) ) ? $menu['query_args'] : false,
				'class'            => ( isset( $menu['class'] ) ) ? $menu['class'] : false,
			);
		}

		/**
		 * Renders Metabox Data.
		 */
		public function render() {
			$this->init_theme( '-metabox-html.php' );
		}

		/**
		 * Renders / Creates An First Instance based on the $is_init_field variable value.
		 *
		 * @param array $field
		 * @param bool  $parent_section
		 * @param bool  $section
		 * @param bool  $is_init_field
		 *
		 * @return mixed
		 */
		public function render_field( $field = array(), $parent_section = false, $section = false, $is_init_field = false ) {
			return parent::render_field( $field, sanitize_title( $parent_section . '-' . $section ), $is_init_field );
		}
	}
}
