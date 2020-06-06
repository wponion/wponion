<?php

namespace WPOnion;

defined( 'ABSPATH' ) || exit;

/**
 * Class Util
 *
 * @package WPOnion\JS
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Util {
	/**
	 * Stores Fields JS id.
	 *
	 * @var bool
	 */
	protected $js_id = false;

	/**
	 * Stores Element HTML.
	 *
	 * @var string
	 */
	protected $element = null;

	/**
	 * Sets To True if js id is added.
	 *
	 * @var bool
	 * @since 1.4.6
	 */
	protected $is_js_id_added = false;

	/**
	 * Util constructor.
	 *
	 * @param bool|string $element
	 * @param bool|string $js_id
	 */
	public function __construct( $element = false, $js_id = false ) {
		$this->element = $element;
		$this->js_id   = $js_id;
	}

	/**
	 * Adds WPOnion JS ID.
	 *
	 * @since 1.4.6
	 */
	protected function add_wponion_js_id() {
		if ( false === $this->is_js_id_added ) {
			$this->append_attributes( array( 'data-wponion-jsid' => $this->js_id() ) );
			$this->is_js_id_added = true;
		}
	}

	/**
	 * Returns Final Element.
	 *
	 * @return string
	 */
	public function element() {
		$this->add_wponion_js_id();
		return $this->element;
	}

	/**
	 * Handles Fields JS ID.
	 *
	 * @param $element
	 * @param $js_id
	 */
	protected function handle_element( $element, $js_id = false ) {
		$js_id = ( $js_id === $this->js_id ) ? false : $js_id;

		if ( $element instanceof Util ) {
			$this->element = $element->element();
			$this->js_id   = $element->js_id();
		} elseif ( is_string( $element ) ) {
			$this->element = $element;
			$re            = '/(?:data-wponion-jsid)="(.+?)"/m';
			preg_match( $re, $element, $matches, PREG_OFFSET_CAPTURE, 0 );
			if ( isset( $matches[1][0] ) && ! empty( $matches[1][0] ) ) {
				$this->js_id = trim( $matches[1][0] );
			}
		}

		if ( ! empty( $js_id ) ) {
			$this->js_id = $js_id;
		}
	}

	/**
	 * Appends Provided Attributes To Element.
	 *
	 * @param      $attrs
	 * @param bool $element
	 *
	 * @return string
	 * @since 1.4.6
	 */
	protected function append_attributes( $attrs, $element = false ) {
		$attrs = wponion_array_to_html_attributes( $attrs );
		$regex = '/(<[a-zA-Z0-9]* )(.*)/';
		if ( false === $element ) {
			$this->element = preg_replace( $regex, '$1 ' . $attrs . ' $2', $this->element );
		} else {
			$element = preg_replace( $regex, '$1 ' . $attrs . ' $2', $element );
		}
		return ( false === $element ) ? $this->element : $element;
	}

	/**
	 * Returns Element String.
	 *
	 * @return bool|string|null
	 */
	public function __toString() {
		$this->add_wponion_js_id();
		return ( ! empty( $this->element ) ) ? $this->element : '';
	}

	/**
	 * Returns JS Id.
	 *
	 * @return bool|string
	 */
	public function js_id() {
		if ( empty( $this->js_id ) ) {
			$this->js_id = 'wpo' . wponion_hash_string( $this->element . microtime( true ) );
		}
		return $this->js_id;
	}

	/**
	 * Handles Element's ToolTip.
	 *
	 * @param string $content
	 * @param array  $args
	 * @param bool   $localize
	 *
	 * @return array|mixed
	 */
	public function tooltip( $content, $args = array(), $localize = true ) {
		$args          = wp_parse_args( $args, array(
			'content'     => $content,
			'image'       => false,
			'arrow'       => true,
			'arrowType'   => 'round',
			'js_field_id' => $this->js_id(),
			'element'     => $this->element,
			'placement'   => 'top',
		) );
		$this->js_id   = $args['js_field_id'];
		$this->element = $args['element'];

		unset( $args['js_field_id'] );
		unset( $args['element'] );

		if ( false === $args['image'] && true === wponion_is_url( $args['content'] ) ) {
			$args['image']   = $args['content'];
			$args['content'] = false;
		}

		$args['content'] = ( ! empty( $args['content'] ) ) ? wponion_markdown()->line( $args['content'] ) : $args['content'];
		$attr            = array( 'wponion-help' => 'wponion-help' );

		if ( false !== $localize ) {
			$localize                        = ( true === $localize ) ? 'wponion-help' : $localize;
			$localize                        = ( false !== $this->element ) ? md5( $this->element . '_' . $localize ) : $localize;
			$attr['data-wponion-tooltip-id'] = $localize;
			wponion_localize()->add( $this->js_id, array( $localize => $args ) );
		} else {
			$attr['data-tippy'] = $args['content'];
		}

		if ( empty( $this->element ) ) {
			return array(
				'attr' => $attr,
				'data' => $args,
			);
		}

		$attr['data-wponion-jsid'] = $this->js_id;
		preg_match_all( '/^(.?)<[a-z][a-z0-9]*?\b/s', $this->element, $matches, PREG_SET_ORDER, 0 );
		if ( isset( $matches[0][0] ) ) {
			$this->element = str_replace( $matches[0][0], $matches[0][0] . ' ' . wponion_array_to_html_attributes( $attr ) . ' ', $this->element );
		}
		return $this;
	}

	/**
	 * Handles Element's Inline Ajax.
	 *
	 * @param $args
	 *
	 * @return $this|bool|string
	 */
	public function inline_ajax( $args = array() ) {
		$args = wp_parse_args( $args, array(
			'method'      => 'post',
			'url'         => admin_url( 'admin-ajax.php' ),
			'part_url'    => false,
			'data'        => array(),
			'success'     => false,
			'error'       => false,
			'always'      => false,
			'js_field_id' => $this->js_id(),
			'element'     => $this->element(),
		) );

		$this->handle_element( $args['element'], $args['js_field_id'] );

		unset( $args['button'] );
		unset( $args['js_field_id'] );
		wponion_localize()->add( $this->js_id(), array( 'inline_ajax' => $args ) );
		if ( ! empty( $this->element ) ) {
			$this->append_attributes( array( 'data-wponion-inline-ajax' => $this->js_id() ) );
			return $this;
		}
		return $this->js_id();
	}

	/**
	 * Handles Element's Image Popup.
	 *
	 * @param string|bool $image_src
	 * @param string|bool $full_size
	 * @param bool        $element
	 *
	 * @return $this
	 */
	public function image_popup( $image_src = false, $full_size = false, $element = false ) {
		if ( false === $element && true !== wponion_is_url( $image_src ) ) {
			$element   = $image_src;
			$image_src = false;
		}

		$full_size = ( ! empty( $full_size ) ) ? "data-fullsize='" . $full_size . "' " : ' ';
		$full_size .= '  wponion-img-popup="wponion-img-popup" ';

		$this->handle_element( $element );

		if ( ! empty( $this->element ) ) {
			$this->append_attributes( $full_size );
		} else {
			$this->element = '<img src="' . $image_src . '" ' . $full_size . ' />';
		}
		return $this;
	}

	/**
	 * Handle's Inline Element Dependency
	 *
	 * @param array $rules
	 *
	 * @since 1.4.6
	 */
	public function dependency( $rules = array() ) {
		if ( ! empty( $rules ) && isset( $rules['rules'] ) && wponion_is_array( $rules['rules'] ) && ! empty( array_filter( $rules ) ) ) {
			wponion_localize()->add( $this->js_id(), array( 'dependency' => $rules ), true, true );
			$this->append_attributes( array( 'wponion-inline-dependency' => true ) );
		}
	}
}
