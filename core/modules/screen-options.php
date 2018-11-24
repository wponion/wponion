<?php
/**
 *
 * Project : wponion
 * Date : 07-11-2018
 * Time : 02:43 PM
 * File : screen-options.php
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

if ( ! class_exists( '\WPOnion\Modules\Screen_Options' ) ) {
	/**
	 * Class Screen_Options
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Screen_Options extends \WPOnion\Bridge\Module {
		/**
		 * module
		 *
		 * @var string
		 */
		protected $module = 'screen_options';
		/**
		 * current_options
		 *
		 * @var array
		 */
		public $current_options = array();

		/**
		 * Screen_Options constructor.
		 *
		 * @param null   $page
		 * @param string $option_name
		 * @param array  $fields
		 */
		public function __construct( $page = null, $option_name = '', $fields = array() ) {
			if ( is_array( $page ) ) {
				$settings = array( 'option_name' => $page['option_name'] );
				unset( $page['option_name'] );
				$fields = array();
				if ( isset( $page['page'] ) ) {
					$_page = $page['page'];
					unset( $page['page'] );
					if ( is_object( $_page ) ) {
						$fields = array(
							'page'   => $page['page'],
							'fields' => $page,
						);
					} else {
						$fields = array( $_page => $page );
					}
				}
			} else {
				$settings = array( 'option_name' => $option_name );
				if ( is_object( $page ) ) {
					$fields = array(
						'page'   => $page,
						'fields' => $fields,
					);
				} else {
					$fields = array( $page => $fields );
				}
			}

			parent::__construct( $fields, $settings );
			$this->add_action( 'screen_settings', 'render_screen_options' );
		}

		/**
		 * Renders HTML Output.
		 *
		 * @param $output
		 *
		 * @return string
		 */
		public function render_screen_options( $output ) {
			$screen = get_current_screen();
			$this->init_theme();
			$this->add_action( 'admin_enqueue_scripts', 'load_style_script' );

			foreach ( $this->fields as $page_id => $fields ) {
				if ( $screen->id === $this->get_page_id( $page_id, $fields ) ) {
					$this->current_options = $fields;
					$theme_instance        = $this->init_theme();
					$this->catch_output( 'start' );
					$theme_instance->render_screen_options();
					$output .= $this->catch_output( 'stop' );
				}
			}
			return $output;
		}

		/**
		 * Loads Required CSS & JS
		 */
		public function load_style_script() {
			wponion_load_core_assets( 'wponion-screen-options' );
		}

		/**
		 * @return array
		 */
		protected function defaults() {
			return $this->parse_args( array(
				'theme' => 'wp',
			), parent::defaults() );
		}

		/**
		 * Validates & Returns a proper page ID.
		 *
		 * @param $id
		 * @param $page
		 *
		 * @return bool|null|string
		 */
		public function get_page_id( $id, $page ) {
			if ( isset( $page['page'] ) ) {
				if ( $page['page'] instanceof \WPOnion\Modules\Admin_Page ) {
					return $page['page']->get_page_slug();
				}
				return is_string( $page['page'] ) ? $page['page'] : false;
			}
			return ( false === is_numeric( $id ) ) ? $id : false;
		}

		/**
		 * @return mixed|void
		 */
		public function on_init() {
			// TODO: Implement on_init() method.
		}

	}
}
