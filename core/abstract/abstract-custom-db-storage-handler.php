<?php

namespace WPOnion\Bridge;

use WPOnion\Traits\Internal\Object_ID;
use WPOnion\Traits\Internal\Unique;
use \WPOnion\Traits\Internal\Module;

/**
 * Class Custom_DB_Storage_Handler
 *
 * @package WPOnion\Bridge
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since {NEWVERSION}
 */
abstract class Custom_DB_Storage_Handler {
	use Unique;
	use Module;
	use Object_ID;


	/**
	 * Custom_DB_Storage_Handler constructor.
	 *
	 * @param string      $unique
	 * @param string      $module
	 * @param bool|string $object_id
	 */
	public function __construct( $unique, $module, $object_id = false ) {
		$this->set_unique( $unique );
		$this->set_module( $module );
		$this->set_object_id( $object_id );
	}

	/**
	 * Called When Needs To Fetch From DB.
	 *
	 * @return mixed
	 */
	abstract public function get();

	/**
	 * Called When Need To Update in DB.
	 *
	 * @param array $values
	 *
	 * @return mixed
	 */
	abstract public function save( $values );
}
