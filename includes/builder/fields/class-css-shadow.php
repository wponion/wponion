<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class CSS_Shadow
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class CSS_Shadow extends Field {
	/**
	 * Color_Group constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'css_shadow', $id, $title, $args );
	}

	/**
	 * Sets Shadow Type
	 *
	 * @param string $shadow_type Possible Options : text/box
	 *
	 * @return $this
	 */
	public function shadow_type( $shadow_type ) {
		return $this->__set( 'shadow_type', $shadow_type );
	}

	/**
	 * @return \WPO\Fields\CSS_Shadow
	 */
	public function text_shadow() {
		return $this->shadow_type( 'text' );
	}

	/**
	 * @return \WPO\Fields\CSS_Shadow
	 */
	public function box_shadow() {
		return $this->shadow_type( 'box' );
	}

	/**
	 * Show or hide Preview
	 *
	 * @param bool|string $show
	 *
	 * @return $this
	 */
	public function preview( $show = true ) {
		return $this->__set( 'preview', $show );
	}

	/**
	 * @return $this
	 */
	public function hide_preview() {
		return $this->__set( 'preview', false );
	}

	/**
	 * @param string $text
	 *
	 * @return $this
	 */
	public function preview_text( $text ) {
		return $this->__set( 'preview', $text );
	}
}
