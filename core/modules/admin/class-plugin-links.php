<?php

namespace WPOnion\Modules\Admin;

use WPOnion\Traits\Class_Options;
use WPOnion\Traits\Internal\Unique;

defined( 'ABSPATH' ) || exit;

/**
 * Class Plugin_Links
 *
 * @package WPOnion\Modules\Admin
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Plugin_Links {
	use Class_Options;
	use Unique;

	/**
	 * Plugin_Links constructor.
	 *
	 * @param $plugin_file
	 */
	public function __construct( $plugin_file ) {
		if ( is_admin() ) {
			$this->unique = plugin_basename( $plugin_file );
			add_filter( 'plugin_row_meta', array( $this, 'register_row_links' ), 10, 2 );
			add_filter( 'plugin_action_links_' . $this->unique(), array( $this, 'register_action_links' ) );
		}
	}

	/**
	 * @param $type
	 * @param $data
	 *
	 * @return array
	 */
	protected function _merge( $type, $data ) {
		$key = "data/${type}";
		return wponion_array_merge( $data, $this->option( "${key}/before" ), $this->option( "${key}/center" ), $this->option( "${key}/after" ) );
	}

	/**
	 * Merges Row Links And Sends Them.
	 *
	 * @param $links
	 * @param $plugin_file
	 *
	 * @return array
	 */
	public function register_row_links( $links, $plugin_file ) {
		return ( $plugin_file === $this->unique() ) ? $this->_merge( 'row', $links ) : $links;
	}

	/**
	 * Merges Action Links And Sends Them.
	 *
	 * @param $actions
	 *
	 * @return array
	 */
	public function register_action_links( $actions ) {
		return $this->_merge( 'action', $actions );
	}

	/**
	 * @param string $var
	 * @param string $type
	 * @param string $slug
	 * @param string $element
	 *
	 * @return $this
	 */
	protected function _store( $var, $type, $slug, $element ) {
		$key = ( false !== $slug ) ? "data/${var}/${type}/${slug}" : "data/${var}/${type}/";
		return $this->set_option( $key, $element );
	}

	/**
	 * Returns An Valid Element.
	 *
	 * @param      $element_or_title
	 * @param bool $href
	 *
	 * @return string
	 */
	protected function element( $element_or_title, $href = false ) {
		return ( ! empty( $element_or_title ) && empty( $href ) ) ? $element_or_title : sprintf( '<a href="%1$s">%2$s</a>', esc_attr( $href ), $element_or_title );
	}

	/**
	 * @param string      $slug
	 * @param string      $element_or_title
	 * @param string|bool $href
	 *
	 * @return $this
	 */
	public function action_link( $slug, $element_or_title, $href = false ) {
		return $this->_store( 'action', 'center', $slug, $this->element( $element_or_title, $href ) );
	}

	/**
	 * @param string      $slug
	 * @param string      $element_or_title
	 * @param string|bool $href
	 *
	 * @return $this
	 */
	public function action_link_before( $slug, $element_or_title, $href = false ) {
		return $this->_store( 'action', 'before', $slug, $this->element( $element_or_title, $href ) );
	}

	/**
	 * @param string      $slug
	 * @param string      $element_or_title
	 * @param string|bool $href
	 *
	 * @return $this
	 */
	public function action_link_after( $slug, $element_or_title, $href = false ) {
		return $this->_store( 'action', 'after', $slug, $this->element( $element_or_title, $href ) );
	}

	/**
	 * @param string      $element_or_title
	 * @param string|bool $href
	 *
	 * @return $this
	 */
	public function row_link( $element_or_title, $href = false ) {
		return $this->_store( 'row', 'center', false, $this->element( $element_or_title, $href ) );
	}

	/**
	 * @param string      $element_or_title
	 * @param string|bool $href
	 *
	 * @return $this
	 */
	public function row_link_before( $element_or_title, $href = false ) {
		return $this->_store( 'row', 'before', false, $this->element( $element_or_title, $href ) );
	}

	/**
	 * @param string      $element_or_title
	 * @param string|bool $href
	 *
	 * @return $this
	 */
	public function row_link_after( $element_or_title, $href = false ) {
		return $this->_store( 'row', 'after', false, $this->element( $element_or_title, $href ) );
	}
}
