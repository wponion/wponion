<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

use WPO\Helper\Field\Nested_Fields;

/**
 * Class Modal
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Modal extends Nested_Fields {
	/**
	 * Modal constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'modal', $id, $title, $args );
	}

	/**
	 * Sets Modal Type.
	 *
	 * @param string $type
	 *
	 * @return $this
	 */
	public function modal_type( $type = 'wp' ) {
		return $this->__set( 'modal_type', $type );
	}

	/**
	 * @param array $config
	 *
	 * @return $this
	 */
	public function modal_config( $config = array() ) {
		return $this->__set( 'modal_config', $config );
	}

	/**
	 * @param array $config
	 *
	 * @return $this
	 */
	public function wp( $config = array() ) {
		$this->modal_type( 'wp' );
		if ( ! empty( $config ) ) {
			$this->modal_config( $config );
		}
		return $this;
	}

	/**
	 * @param array $config
	 *
	 * @return $this
	 */
	public function swal( $config = array() ) {
		$this->modal_type( 'swal' );
		if ( ! empty( $config ) ) {
			$this->modal_config( $config );
		}
		return $this;
	}

	/**
	 * @param $button_label_or_args
	 *
	 * @return $this
	 */
	public function modal_button( $button_label_or_args ) {
		return $this->__set( 'modal_button', $button_label_or_args );
	}


	/**
	 * @param $ajax_args
	 *
	 * @return $this
	 */
	public function ajax_args( $ajax_args ) {
		return $this->__set( 'ajax_args', $ajax_args );
	}

	/**
	 * @param $overview_html
	 *
	 * @return $this
	 */
	public function overview_html( $overview_html ) {
		return $this->__set( 'overview_html', $overview_html );
	}
}
