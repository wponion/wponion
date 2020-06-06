<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Font_Picker
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Font_Picker extends Field {
	/**
	 * Color_Group constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'font_picker', $id, $title, $args );
	}

	/**
	 * Accecpts Only True / False.
	 *
	 * @param bool $show_google_fonts
	 *
	 * @return $this
	 */
	public function google_fonts( $show_google_fonts = true ) {
		return $this->__set( 'google_fonts', $show_google_fonts );
	}

	/**
	 * Accecpts Only True / False.
	 *
	 * @param bool $show_websafe_fonts
	 *
	 * @return $this
	 */
	public function websafe_fonts( $show_websafe_fonts = true ) {
		return $this->__set( 'websafe_fonts', $show_websafe_fonts );
	}

	/**
	 * Accecpts Only True / False.
	 *
	 * @param bool $show_in_group
	 *
	 * @return $this
	 */
	public function group( $show_in_group = true ) {
		return $this->__set( 'group', $show_in_group );
	}
}
