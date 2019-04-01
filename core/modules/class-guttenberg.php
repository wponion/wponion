<?php
/**
 *
 * Project : wponion
 * Date : 22-11-2018
 * Time : 03:04 PM
 * File : guttenberg.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\GuttenBerg' ) ) {
	/**
	 * Class GuttenBerg
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class GuttenBerg extends \WPOnion\Bridge\Module {
		public $block_slug   = false;
		public $block_fields = array();
		public $js_settings  = array();

		public function __construct( $block_slug = '', $php_settings = array(), $js_settings = array(), $fields = array() ) {
			if ( function_exists( 'register_block_type' ) ) {
				parent::__construct( $fields, $php_settings );
				$this->block_slug  = $block_slug;
				$this->js_settings = $this->parse_args( $js_settings, array(
					'title'       => false,
					'description' => false,
					'icon'        => 'feedback',
					'category'    => 'widgets',
					'supports'    => array(
						'html' => false,
					),
				) );
				$this->on_init();
				wponion_localize();
			}
		}

		public function on_init() {
			$this->add_action( 'init', 'wp_init' );
			$this->add_action( 'admin_enqueue_scripts', 'load_assets' );
		}

		public function load_assets() {
			wponion_load_core_assets();
		}

		public function wp_init() {
			$settings                    = $this->settings;
			$settings['attributes']      = $this->parse_args( array(
				'post_id'    => array(
					'type'    => 'number',
					'default' => 0,
				),
				'block_id'   => array(
					'type'    => 'string',
					'default' => '',
				),
				'block_name' => array(
					'type'    => 'string',
					'default' => $this->option( 'name' ),
				),
			), $settings['attributes'] );
			$settings['render_callback'] = array( &$this, 'render_callback' );
			if ( isset( $settings['fields'] ) ) {
				$this->block_fields = $settings['fields'];
				unset( $settings['fields'] );
			}

			register_block_type( $this->block_slug, $settings );
			$this->js_args();
		}

		public function render_callback( $attributes ) {
			global $post;
			$post_id = false;
			$output  = print_r( $_GET, true );

			if ( $post instanceof \WP_Post && $post->ID ) {
				$post_id               = $post->ID;
				$attributes['post_id'] = $post->ID;
			} elseif ( $attributes['post_id'] ) {
				$post_id = intval( $attributes['post_id'] );
				$post    = get_post( $post_id );
				setup_postdata( $post );
			}

			$attributes['block_meta'] = get_post_meta( $post_id, '__block_' . $attributes['block_id'], true );
			if ( ! wponion_is_array( $attributes['block_meta'] ) ) {
				$attributes['block_meta'] = [];
			}

			if ( 'edit' === $_GET['context'] ) {
				$this->catch_output( 'start' );
				foreach ( $this->block_fields as $field ) {
					echo $this->render_field( $field );
				}
				echo wponion_localize()->render_js_args();
				$output = $this->catch_output( 'stop' );
			}
			return $output;

		}

		public function js_args() {
			if ( false === $this->js_settings['title'] || empty( $this->js_settings['title'] ) ) {
				$this->js_settings['title'] = $this->option( 'name' );
			}
			wponion_localize()->add( 'wponion_guttenberg_blocks', array( $this->block_slug => $this->js_settings ) );
		}

		/**
		 * @return array
		 */
		protected function defaults() {
			return $this->parse_args( array(
				'name'       => false,
				'attributes' => array(),
			), parent::defaults() );
		}
	}
}
