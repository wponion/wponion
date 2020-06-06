<?php

namespace WPOnion\WP\Pointers;

use JsonSerializable;
use WPOnion\Bridge\Module;
use WPOnion\Traits\Json_Serialize;

defined( 'ABSPATH' ) || exit;

/**
 * Class Pointer
 *
 * @package WPOnion\WP\Pointers
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Pointer extends Module implements JsonSerializable {
	use Json_Serialize;

	/**
	 * @var null
	 */
	private $pointer_instance;

	/**
	 * Pointer constructor.
	 *
	 * @param bool  $selector
	 * @param bool  $title
	 * @param bool  $text
	 * @param array $args
	 * @param bool  $pointer_instance
	 */
	public function __construct( $selector = false, $title = false, $text = false, $args = array(), $pointer_instance = false ) {
		$this->_unset_globals();

		$valid_selector         = ( ! wponion_is_array( $selector ) && false !== $selector );
		$valid_title            = ( ! wponion_is_array( $title ) && false !== $title );
		$valid_text             = ( ! wponion_is_array( $text ) && false !== $text );
		$this->pointer_instance = $pointer_instance;

		if ( wponion_is_array( $selector ) ) {
			$args = $this->parse_args( $selector, $this->default_pointer_args() );
		} elseif ( $valid_selector && wponion_is_array( $title ) ) {
			$args = $this->parse_args( array( 'selector' => $selector ), $this->default_pointer_args() );
			$args = $this->parse_args( $title, $args );
		} elseif ( $valid_selector && $valid_title && wponion_is_array( $text ) ) {
			$args = $this->parse_args( array(
				'selector' => $selector,
				'title'    => $title,
			), $this->default_pointer_args() );
			$args = $this->parse_args( $text, $args );
		} elseif ( $valid_selector && $valid_title && $valid_text && wponion_is_array( $args ) ) {
			$_args = $this->parse_args( array(
				'selector' => $selector,
				'title'    => $title,
				'text'     => $text,
			), $this->default_pointer_args() );
			$args  = $this->parse_args( $args, $_args );
		} else {
			$args = $this->parse_args( array(
				'title'    => $title,
				'selector' => $selector,
				'text'     => $text,
			), $args );
		}

		foreach ( $args as $key => $val ) {
			if ( method_exists( $this, $key ) ) {
				$this->$key( $val );
			}
		}

	}

	/**
	 * Returns A Unique ID.
	 *
	 * @return bool|mixed
	 */
	public function uid() {
		if ( false === $this->option( 'unique_id' ) ) {
			$id = sanitize_title( $this->pointer_instance . '_' . $this->selector() . '_' . $this->parent() );
			$id = str_replace( '-', '_', $id );
			$id = str_replace( '#', '', $id );
			$id = str_replace( '.', '', $id );
			$this->set_option( 'unique_id', wponion_hash_string( $id ) );
		}
		return $this->option( 'unique_id' );
	}

	/**
	 * @return mixed
	 */
	public function add() {
		$instance = wponion_wp_pointers_registry( $this->pointer_instance );
		return wponion_callback( array( $instance, 'nested_add' ), array( $this, func_get_args() ) );
	}

	public function on_init() {
	}

	/**
	 * Converts To Array.
	 *
	 * @return array
	 */
	public function get() {
		$return = array();
		$args   = $this->default_pointer_args();
		foreach ( array_keys( $args ) as $method ) {
			if ( method_exists( $this, $method ) ) {
				$return[ $method ] = $this->$method();
			}
		}
		$return['class'] = $return['css_class'];
		unset( $return['css_class'] );
		return $return;
	}

	/**
	 * @param null $selector
	 *
	 * @return Pointer|bool|mixed
	 */
	public function selector( $selector = null ) {
		if ( null !== $selector ) {
			$this->set_option( 'selector', $selector );
			$temp_next = $this->option( 'temp_next', false );
			if ( false !== $temp_next ) {
				$this->next( $temp_next );
				$this->set_option( 'temp_next', false );
			}
			return $this;
		}
		return $this->option( 'selector', '' );
	}

	/**
	 * @param null $title
	 *
	 * @return Pointer|bool|mixed
	 */
	public function title( $title = null ) {
		if ( null !== $title ) {
			$this->set_option( 'title', $title );
			return $this;
		}
		return $this->option( 'title', '' );
	}

	/**
	 * @param null $text
	 *
	 * @return Pointer|bool|mixed
	 */
	public function text( $text = null ) {
		if ( null !== $text ) {
			$this->set_option( 'text', $text );
			return $this;
		}
		return $this->option( 'text', '' );
	}

	/**
	 * @param null $show
	 *
	 * @return Pointer|bool|mixed
	 */
	public function show( $show = null ) {
		if ( null !== $show ) {
			$this->set_option( 'show', $show );
			return $this;
		}
		return $this->option( 'show', '' );
	}

	/**
	 * @param null $jsnext
	 *
	 * @return Pointer|bool|mixed
	 */
	public function jsnext( $jsnext = null ) {
		if ( null !== $jsnext ) {
			$this->set_option( 'jsnext', $jsnext );
			return $this;
		}
		return $this->option( 'jsnext', '' );
	}

	/**
	 * @param null $phpcode
	 *
	 * @return Pointer|bool|mixed
	 */
	public function phpcode( $phpcode = null ) {
		if ( null !== $phpcode ) {
			$this->set_option( 'phpcode', $phpcode );
			return $this;
		}
		return $this->option( 'phpcode' );
	}

	/**
	 * @param null $next
	 *
	 * @return Pointer|bool|mixed
	 */
	public function next( $next = null ) {
		if ( empty( $this->selector() ) && null !== $next ) {
			$this->set_option( 'temp_next', $next );
		}
		if ( null !== $next && ! empty( $this->selector() ) ) {
			if ( ( is_string( $next ) || $next instanceof Pointer ) && 1 === count( func_get_args() ) ) {
				if ( empty( $next->selector() ) ) {
					$next->selector( $this->selector() );
				}

				if ( $next instanceof Pointer ) {
					$next = $next->uid();
				}

				$this->set_option( 'next', $next );
				return $this;
			} else {
				$instance = wponion_callback( array( $this, 'add' ), func_get_args() );
				$this->set_option( 'next', $instance->uid() );
				return $this;
			}
		}
		return $this->option( 'next' );
	}

	/**
	 * @param null $parent
	 *
	 * @return Pointer|bool|mixed
	 */
	public function parent( $parent = null ) {
		if ( null !== $parent ) {
			if ( ( is_string( $parent ) || $parent instanceof Pointer ) && 1 === count( func_get_args() ) ) {
				if ( $parent instanceof Pointer ) {
					$parent = $parent->uid();
				}

				$this->set_option( 'parent', $parent );
				return $this;
			}
		}
		return $this->option( 'parent' );
	}

	/**
	 * @param null $css_class
	 *
	 * @return Pointer|bool|mixed
	 */
	public function css_class( $css_class = null ) {
		if ( null !== $css_class ) {
			$this->set_option( 'css_class', $css_class );
			return $this;
		}
		return $this->option( 'css_class', '' );
	}

	/**
	 * @param null $width
	 *
	 * @return Pointer|bool|mixed
	 */
	public function width( $width = null ) {
		if ( null !== $width ) {
			$this->set_option( 'width', $width );
			return $this;
		}
		return $this->option( 'width', '' );
	}

	/**
	 * @param null $align
	 *
	 * @return Pointer|bool|mixed
	 */
	public function align( $align = null ) {
		if ( null !== $align ) {
			$this->set_option( 'align', $align );
			return $this;
		}
		return $this->option( 'align', 'right' );
	}

	/**
	 * @param null $edge
	 *
	 * @return Pointer|bool|mixed
	 */
	public function edge( $edge = null ) {
		if ( null !== $edge ) {
			$this->set_option( 'edge', $edge );
			return $this;
		}
		return $this->option( 'edge', 'right' );
	}

	/**
	 * @param null $post_type
	 *
	 * @return Pointer|bool|mixed
	 */
	public function post_type( $post_type = null ) {
		if ( null !== $post_type ) {
			$post_type = ( ! wponion_is_array( $post_type ) ) ? array( $post_type ) : $post_type;
			$this->set_option( 'post_type', array_filter( $post_type ) );
			return $this;
		}
		return $this->option( 'post_type', array() );
	}

	/**
	 * @param null $pages
	 *
	 * @return Pointer|bool|mixed
	 */
	public function pages( $pages = null ) {
		if ( null !== $pages ) {
			$pages = ( ! wponion_is_array( $pages ) ) ? array( $pages ) : $pages;
			$this->set_option( 'pages', array_filter( $pages ) );
			return $this;
		}
		return $this->option( 'pages', array() );
	}

	/**
	 * @param null $icon_class
	 *
	 * @return Pointer|bool|mixed
	 */
	public function icon_class( $icon_class = null ) {
		if ( null !== $icon_class ) {
			$this->set_option( 'icon_class', $icon_class );
			return $this;
		}
		return $this->option( 'icon_class', '' );
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
			'css_class'  => null,
			'width'      => 300,
			'align'      => 'middle',
			'edge'       => 'left',
			'post_type'  => array(),
			'pages'      => array(),
			'icon_class' => '',
			'parent'     => false,
			'next'       => null,
		);
	}

	/**
	 * Checks If Pointer Is Valid To Display.
	 *
	 * @return bool
	 */
	public function is_valid() {
		global $pagenow;
		$screen   = get_current_screen();
		$post     = isset( $screen->post_type ) ? $screen->post_type : false;
		$types    = $this->post_type();
		$pages    = $this->pages();
		$is_valid = true;

		if ( ! empty( $types ) && is_array( $types ) && ( ! in_array( $post, $types, true ) && ! isset( $types[ $post ] ) ) ) {
			$is_valid = false;
		} elseif ( ! empty( $types ) && is_string( $types ) && $types !== $post ) {
			$is_valid = false;
		}

		if ( $is_valid && ! empty( $pages ) ) {
			if ( is_array( $pages ) && ( ! in_array( $pagenow, $pages, true ) && ! isset( $pages[ $pagenow ] ) ) ) {
				$is_valid = false;
			} elseif ( is_string( $pages ) && $pagenow !== $pages ) {
				$is_valid = false;
			}
		}

		return $is_valid;
	}
}
