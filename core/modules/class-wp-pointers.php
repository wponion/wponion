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

namespace WPOnion\Modules;

if ( ! class_exists( 'WP_Pointers' ) ) {
	/**
	 * Class WP_Pointers
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_Pointers extends \WPOnion\Bridge\Module {
		/**
		 * Stores Printable Pointers.
		 *
		 * @var array
		 * @access
		 */
		private $print_pointers = array();

		/**
		 * Custom Static Var To Check if Assets Are Loaded.
		 *
		 * @var bool
		 * @access
		 * @static
		 */
		private static $load_script = false;

		/**
		 * WP_Pointers constructor.
		 *
		 * @param string $pointer_id
		 */
		public function __construct( $pointer_id = '' ) {
			$this->module = 'wp_pointers';
			if ( ! empty( $pointer_id ) ) {
				$this->unique = $pointer_id;
				$this->on_init();
				$this->fields = array();
				$this->save_instance();
			}
		}

		/**
		 * Registers Hook With WordPress.
		 */
		public function on_init() {
			add_action( 'current_screen', array( $this, 'maybe_add_pointers' ) );
		}

		/**
		 * Adds Pointer To Array.
		 *
		 * @param bool  $selector
		 * @param bool  $title
		 * @param bool  $text
		 * @param array $args
		 *
		 * @return \WPOnion\Modules\WP_Pointers\Pointer
		 */
		public function add( $selector = false, $title = false, $text = false, $args = array() ) {
			$instance                         = new WP_Pointers\Pointer( $selector, $title, $text, $args, $this->unique() );
			$this->fields[ $instance->uid() ] = $instance;
			return $instance;
		}

		/**
		 * Registers Pointer With WordPress.
		 */
		public function maybe_add_pointers() {
			$pointers  = $this->pointers_data();
			$dismissed = explode( ',', get_user_meta( get_current_user_id(), 'dismissed_wp_pointers', true ) );
			$diff      = array_diff_key( $pointers, array_combine( $dismissed, $dismissed ) );

			if ( ! empty( $diff ) ) {
				$this->print_pointers = $diff;
				foreach ( $diff as $key => $pointer ) {
					if ( ! empty( $pointer->phpcode() ) ) {
						add_action( 'admin_notices', $pointer->phpcode() );
					}
					$diff[ $key ] = $pointer->to_array();
				}

				wponion_localize()->add( 'wp_pointers', array(
					$this->unique() => $diff,
				) );
				add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_assets' ), 9999 );
			}
		}

		/**
		 * Print Assets.
		 */
		public function admin_enqueue_assets() {
			if ( ! empty( $this->print_pointers ) ) {
				if ( false === self::$load_script ) {
					wp_enqueue_script( 'wp-pointer' );
					wp_enqueue_style( 'wp-pointer' );
					wponion_load_core_assets();
					self::$load_script = true;
				}
			}
		}

		/**
		 * Process Actual Pointer Array And Returns It Properly.
		 *
		 * @return array
		 */
		protected function pointers_data() {
			foreach ( $this->fields as $selector => $args ) {
				if ( false === $args->is_valid() ) {
					unset( $this->fields[ $selector ] );
				}
			}
			return $this->fields;
		}

		/**
		 * Returns Default Pointer Data.
		 *
		 * @return array
		 */
		protected function default_pointer_args() {
			return array(
				'selector'   => null,
				'title'      => null,
				'text'       => null,
				'show'       => null,
				'jsnext'     => null,
				'phpcode'    => null,
				'next'       => null,
				'class'      => null,
				'width'      => 300,
				'align'      => 'middle',
				'edge'       => 'left',
				'post_type'  => array(),
				'pages'      => array(),
				'icon_class' => '',
			);
		}

		/**
		 * Resets WP Pointer For Given User.
		 *
		 * @param string $user_id
		 *
		 * @internal
		 */
		function _reset( $user_id = 'me' ) {
			if ( in_array( $user_id, array( 'me', 'current', false, null ) ) ) {
				$id = get_current_user_id();
			}
			$pointers = explode( ',', get_user_meta( $id, 'dismissed_wp_pointers', true ) );
			foreach ( $pointers as $key => $pointer ) {
				if ( strpos( $pointer, $this->unique() ) === 0 ) {
					unset( $pointers[ $key ] );
				}
			}
			$meta = implode( ',', $pointers );
			update_user_meta( get_current_user_id(), 'dismissed_wp_pointers', $meta );
		}
	}
}
