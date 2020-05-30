<?php

namespace WPOnion\Modules\Admin;

use WP_Screen;
use WPOnion\Bridge\Module_Utility;
use WPOnion\WP\Pointers\Pointer;

/**
 * Class Pointers
 *
 * @package WPOnion\Modules
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Pointers extends Module_Utility {
	/**
	 * Type - Value can be anything like (settings,text_field)
	 *
	 * @var string
	 */
	protected $module = 'wp_pointers';

	/**
	 * Stores Printable Pointers.
	 *
	 * @var array
	 */
	private $print_pointers = array();

	/**
	 * Custom Static Var To Check if Assets Are Loaded.
	 *
	 * @var bool
	 */
	private static $load_script = false;

	/**
	 * @var bool|array
	 */
	private static $reset = false;

	/**
	 * Stores Pointe Ids.
	 *
	 * @var array
	 */
	private static $pointers_ids = array();

	/**
	 * WP_Pointers constructor.
	 *
	 * @param string $pointer_id
	 */
	public function __construct( $pointer_id = '' ) {
		$this->module = 'wp_pointers';
		if ( ! empty( $pointer_id ) ) {
			parent::__construct( array(
				'option_name' => $pointer_id,
			) );
			self::$pointers_ids[ $this->unique() ] = array();
			$this->init();
		}
	}

	/**
	 * Registers Hook With WordPress.
	 *
	 * @param bool $single_pointer_id
	 *
	 * @return mixed|void
	 */
	protected function init( $single_pointer_id = false ) {
		if ( ! did_action( 'current_screen' ) && false === $this->option( 'is_hooked' ) ) {
			add_action( 'current_screen', array( $this, 'maybe_add_pointers' ) );
			$this->set_option( 'is_hooked', true );
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
		$this->init( $instance->uid() );
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
		if ( false === $single_pointer_id || $single_pointer_id instanceof WP_Screen ) {
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
	 * Resets Pointer Data.
	 */
	public static function _reset() {
		if ( ! empty( self::$reset ) ) {
			static $in_reset = false;
			if ( false === $in_reset ) {
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
