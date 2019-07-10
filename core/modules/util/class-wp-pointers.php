<?php

namespace WPOnion\Modules\Util;

use WPOnion\Bridge\Module;
use WPOnion\WP\Pointers\Pointer;

if ( ! class_exists( '\WPOnion\Modules\Util\WP_Pointers' ) ) {
	/**
	 * Class WP_Pointers
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_Pointers extends Module {
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
		 * @var bool|array
		 * @access
		 */
		private static $reset = false;

		/**
		 * Stores Pointe Ids.
		 *
		 * @var array
		 * @access
		 * @static
		 */
		private static $pointers_ids = array();

		/**
		 * @var bool
		 * @access
		 */
		protected $is_hooked = false;

		/**
		 * WP_Pointers constructor.
		 *
		 * @param string $pointer_id
		 */
		public function __construct( $pointer_id = '' ) {
			$this->module = 'wp_pointers';
			if ( ! empty( $pointer_id ) ) {
				$this->unique                          = $pointer_id;
				$this->fields                          = array();
				$this->is_hooked                       = false;
				self::$pointers_ids[ $this->unique() ] = array();
				$this->on_init();
				$this->save_instance();
			}
		}

		/**
		 * Registers Hook With WordPress.
		 *
		 * @param bool $single_pointer_id
		 *
		 * @return mixed|void
		 */
		public function on_init( $single_pointer_id = false ) {
			if ( ! did_action( 'current_screen' ) && false === $this->is_hooked ) {
				add_action( 'current_screen', array( $this, 'maybe_add_pointers' ) );
				$this->is_hooked = true;
			} elseif ( did_action( 'current_screen' ) ) {
				$this->maybe_add_pointers( $single_pointer_id );
			}
		}

		/**
		 * @param bool  $selector
		 * @param bool  $title
		 * @param bool  $text
		 * @param array $args
		 *
		 * @return Pointer
		 */
		public function create( $selector = false, $title = false, $text = false, $args = array() ) {
			return new Pointer( $selector, $title, $text, $args, $this->unique() );
		}

		/**
		 * Adds Pointer To Array.
		 *
		 * @param bool  $selector
		 * @param bool  $title
		 * @param bool  $text
		 * @param array $args
		 *
		 * @return Pointer
		 */
		public function add( $selector = false, $title = false, $text = false, $args = array() ) {
			if ( $selector instanceof Pointer ) {
				$instance = $selector;
			} else {
				$instance = $this->create( $selector, $title, $text, $args );
			}

			$this->fields[ $instance->uid() ]        = $instance;
			self::$pointers_ids[ $this->unique() ][] = $instance->uid();
			$this->on_init( $instance->uid() );
			return $instance;
		}

		/**
		 * @param \WPOnion\WP\Pointers\Pointer $pointer_instance
		 * @param array                        $args
		 *
		 * @return mixed
		 */
		public function nested_add( $pointer_instance = null, $args = array() ) {
			$instance = call_user_func_array( array( $this, 'create' ), $args );
			if ( empty( $instance->selector() ) ) {
				$instance->parent( $pointer_instance->uid() );
				$instance->selector( $pointer_instance->selector() );
			} elseif ( $pointer_instance->selector() === $instance->selector() ) {
				$instance->parent( $pointer_instance->uid() );
			}
			return $this->add( $instance );
		}

		/**
		 * Registers Pointer With WordPress.
		 *
		 * @param bool $single_pointer_id
		 */
		public function maybe_add_pointers( $single_pointer_id = false ) {
			$dismissed = explode( ',', get_user_meta( get_current_user_id(), 'dismissed_wp_pointers', true ) );
			if ( false === $single_pointer_id || $single_pointer_id instanceof \WP_Screen ) {
				self::_reset();
				$pointers = $this->pointers_data();
				$diff     = array_diff_key( $pointers, array_combine( $dismissed, $dismissed ) );

				if ( ! empty( $diff ) ) {
					$this->print_pointers = $diff;
					foreach ( $diff as $key => $pointer ) {
						if ( ! empty( $pointer->phpcode() ) ) {
							add_action( 'admin_notices', $pointer->phpcode() );
						}
					}
					wponion_localize()->add( 'wp_pointers', array(
						$this->unique() => $diff,
					) );
				}
			} else {
				if ( ! in_array( $single_pointer_id, $dismissed, true ) ) {
					$pointer = $this->fields[ $single_pointer_id ];
					if ( ! empty( $pointer->phpcode() ) ) {
						wponion_callback( $pointer->phpcode() );
					}

					$wp_pointers = wponion_localize()->get( 'wp_pointers', array() );
					if ( ! isset( $wp_pointers[ $this->unique() ] ) ) {
						$wp_pointers[ $this->unique() ] = array();
					}
					$wp_pointers[ $this->unique() ] = $this->parse_args( array( $single_pointer_id => $pointer ), $wp_pointers[ $this->unique() ] );
					wponion_localize()->add( 'wp_pointers', $wp_pointers );
					$this->print_pointers = $pointer;
				}
			}

			if ( ! did_action( 'admin_enqueue_scripts' ) ) {
				add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_assets' ), 9999 );
			} else {
				$this->admin_enqueue_assets();
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
			/**
			 * @var \WPOnion\WP\Pointers\Pointer $args
			 */
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
		 * Resets Pointer Data.
		 *
		 * @static
		 */
		public static function _reset() {
			if ( ! empty( self::$reset ) ) {
				static $in_reset = false;
				if ( true === $in_reset ) {
					return true;
				}

				$in_reset = true;

				foreach ( self::$reset as $unique => $user_id ) {
					$pointers = explode( ',', get_user_meta( $user_id, 'dismissed_wp_pointers', true ) );

					foreach ( $pointers as $key => $pointer ) {
						if ( isset( self::$pointers_ids[ $unique ] ) ) {
							if ( in_array( $pointer, self::$pointers_ids[ $unique ], true ) ) {
								unset( $pointers[ $key ] );
							}
						}
					}
					$meta = implode( ',', $pointers );
					update_user_meta( get_current_user_id(), 'dismissed_wp_pointers', $meta );
				}
				self::$reset = array();
				$in_reset    = false;
			}
		}

		/**
		 * Adds A User To Reset.
		 *
		 * @param string $user
		 *
		 * @return $this
		 */
		public function reset( $user = 'me' ) {
			if ( empty( self::$reset ) ) {
				self::$reset = array();
			}

			if ( ! isset( self::$reset[ $this->unique() ] ) ) {
				self::$reset[ $this->unique() ] = array();
			}

			if ( in_array( $user, array( 'me', 'current', false, null ), true ) ) {
				$user = get_current_user_id();
			}

			self::$reset[ $this->unique() ][] = $user;
			return $this;
		}
	}
}
