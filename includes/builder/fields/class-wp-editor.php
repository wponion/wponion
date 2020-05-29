<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class WP_Editor
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class WP_Editor extends Field {
	/**
	 * Upload constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'wp_editor', $id, $title, $args );
	}

	/**
	 * Set WPEditor wpautop
	 *
	 * @param $wpautop
	 *
	 * @return $this
	 */
	public function wpautop( $wpautop ) {
		$this['settings/wpautop'] = $wpautop;
		return $this;
	}

	/**
	 * Set WPEditor media_buttons
	 *
	 * @param $media_buttons
	 *
	 * @return $this
	 */
	public function media_buttons( $media_buttons ) {
		$this['settings/media_buttons'] = $media_buttons;
		return $this;
	}

	/**
	 * Set WPEditor textarea_rows
	 *
	 * @param $textarea_rows
	 *
	 * @return $this
	 */
	public function textarea_rows( $textarea_rows ) {
		$this['settings/textarea_rows'] = $textarea_rows;
		return $this;
	}

	/**
	 * Set WPEditor editor_css
	 *
	 * @param $editor_css
	 *
	 * @return $this
	 */
	public function editor_css( $editor_css ) {
		$this['settings/editor_css'] = $editor_css;
		return $this;
	}

	/**
	 * Set WPEditor editor_class
	 *
	 * @param $editor_class
	 *
	 * @return $this
	 */
	public function editor_class( $editor_class ) {
		$this['settings/editor_class'] = $editor_class;
		return $this;
	}

	/**
	 * Set WPEditor editor_height
	 *
	 * @param $editor_height
	 *
	 * @return $this
	 */
	public function editor_height( $editor_height ) {
		$this['settings/editor_height'] = $editor_height;
		return $this;
	}

	/**
	 * Set WPEditor teeny
	 *
	 * @param $teeny
	 *
	 * @return $this
	 */
	public function teeny( $teeny ) {
		$this['settings/teeny'] = $teeny;
		return $this;
	}

	/**
	 * Set WPEditor dfw
	 *
	 * @param $dfw
	 *
	 * @return $this
	 */
	public function dfw( $dfw ) {
		$this['settings/dfw'] = $dfw;
		return $this;
	}

	/**
	 * Set WPEditor tinymce
	 *
	 * @param $tinymce
	 *
	 * @return $this
	 */
	public function tinymce( $tinymce ) {
		$this['settings/tinymce'] = $tinymce;
		return $this;
	}

	/**
	 * Set WPEditor quicktags
	 *
	 * @param $quicktags
	 *
	 * @return $this
	 */
	public function quicktags( $quicktags ) {
		$this['settings/quicktags'] = $quicktags;
		return $this;
	}

	/**
	 * Set WPEditor drag_drop_upload
	 *
	 * @param $drag_drop_upload
	 *
	 * @return $this
	 */
	public function drag_drop_upload( $drag_drop_upload ) {
		$this['settings/drag_drop_upload'] = $drag_drop_upload;
		return $this;
	}

	/**
	 * @param      $args
	 * @param bool $merge
	 *
	 * @return $this
	 */
	public function settings( $args, $merge = true ) {
		$this->_set_array_handler( 'settings', $args, $merge );
		return $this;
	}
}
