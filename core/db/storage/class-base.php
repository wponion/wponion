<?php

namespace WPOnion\DB\Storage;

/**
 * Class Base
 *
 * @package WPOnion\DB\Storage
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.5
 */
abstract class Base {
	/**
	 * Metadata Type.
	 *
	 * @var string
	 */
	protected $object_type;

	/**
	 * Retrieve metadata for the specified object.
	 *
	 * @param int    $object_id
	 * @param string $meta_key
	 * @param bool   $single
	 *
	 * @return mixed
	 */
	public function get( $object_id, $meta_key, $single = false ) {
		return get_metadata( $this->object_type, $object_id, $meta_key, $single );
	}

	/**
	 * Add metadata
	 *
	 * @param int    $object_id
	 * @param string $meta_key
	 * @param mixed  $meta_value
	 * @param bool   $unique
	 *
	 * @return int|false
	 */
	public function add( $object_id, $meta_key, $meta_value, $unique = false ) {
		return add_metadata( $this->object_type, $object_id, $meta_key, $meta_value, $unique );
	}

	/**
	 * Update metadata.
	 *
	 * @param int    $object_id
	 * @param string $meta_key
	 * @param mixed  $meta_value
	 * @param mixed  $prev_value
	 *
	 * @return int|bool
	 */
	public function update( $object_id, $meta_key, $meta_value, $prev_value = '' ) {
		return update_metadata( $this->object_type, $object_id, $meta_key, $meta_value, $prev_value );
	}

	/**
	 * Delete metadata.
	 *
	 * @param int    $object_id
	 * @param string $meta_key
	 * @param mixed  $meta_value
	 * @param bool   $delete_all
	 *
	 * @return bool
	 */
	public function delete( $object_id, $meta_key, $meta_value = '', $delete_all = false ) {
		return delete_metadata( $this->object_type, $object_id, $meta_key, $meta_value, $delete_all );
	}
}
