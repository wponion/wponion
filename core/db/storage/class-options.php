<?php

namespace WPOnion\DB\Storage;

/**
 * Class Options
 *
 * @package WPOnion\DB\Storage
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.5
 */
class Options {
	/**
	 * @var bool
	 */
	protected $is_network = false;

	/**
	 * Retrieve metadata for the specified object.
	 *
	 * @param      $meta_key
	 * @param bool $default
	 *
	 * @return bool|mixed|void
	 * @since 1.5
	 */
	public function get( $meta_key, $default = false ) {
		return ( $this->is_network ) ? get_site_option( $meta_key, $default ) : get_option( $meta_key, $default );
	}

	/**
	 * Add metadata
	 *
	 * @param string $meta_key
	 * @param mixed  $meta_value
	 * @param bool   $autoload
	 *
	 * @return int|false
	 */
	public function add( $meta_key, $meta_value, $autoload = false ) {
		return ( $this->is_network ) ? add_site_option( $meta_key, $meta_value ) : add_option( $meta_key, $meta_value, $autoload );
	}

	/**
	 * Update metadata.
	 *
	 * @param string $meta_key
	 * @param mixed  $meta_value
	 * @param mixed  $autoload
	 *
	 * @return int|bool
	 */
	public function update( $meta_key, $meta_value, $autoload = false ) {
		return ( $this->is_network ) ? update_site_option( $meta_key, $meta_value ) : update_option( $meta_key, $meta_value, $autoload );
	}

	/**
	 * Delete metadata.
	 *
	 * @param string $meta_key
	 *
	 * @return bool
	 */
	public function delete( $meta_key ) {
		return ( $this->is_network ) ? delete_site_option( $meta_key ) : delete_option( $meta_key );
	}
}
