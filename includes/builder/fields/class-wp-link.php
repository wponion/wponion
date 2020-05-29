<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class WP_Link
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class WP_Link extends Field {
	/**
	 * Upload constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'wp_link', $id, $title, $args );
	}

	/**
	 * Options Are :
	 * array(
	 *    'url'        => true,
	 *    'title'      => true,
	 *    'target'     => true,
	 *    'example'    => true,
	 *    'show_input' => false,
	 * )
	 *
	 * @param      $args
	 * @param bool $merge
	 *
	 * @return $this
	 */
	public function settings( $args, $merge = true ) {
		$this->_set_array_handler( 'settings', $args, $merge );
		return $this;
	}

	/**
	 * @param $url
	 *
	 * @return \WPO\Fields\WP_Link
	 */
	public function url( $url ) {
		return $this->settings( array( 'url' => $url ) );
	}

	/**
	 * @param $title
	 *
	 * @return \WPO\Fields\WP_Link
	 */
	public function link_title( $title ) {
		return $this->settings( array( 'title' => $title ) );
	}

	/**
	 * @param $target
	 *
	 * @return \WPO\Fields\WP_Link
	 */
	public function target( $target ) {
		return $this->settings( array( 'target' => $target ) );
	}

	/**
	 * @param $example
	 *
	 * @return \WPO\Fields\WP_Link
	 */
	public function example( $example ) {
		return $this->settings( array( 'example' => $example ) );
	}

	/**
	 * @param $show_input
	 *
	 * @return \WPO\Fields\WP_Link
	 */
	public function show_input( $show_input ) {
		return $this->settings( array( 'show_input' => $show_input ) );
	}

	/**
	 * @param string|mixed $button
	 *
	 * @return $this
	 */
	public function button( $button ) {
		return $this->__set( 'button', $button );
	}
}
