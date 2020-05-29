<?php

namespace WPOnion\Traits;

defined( 'ABSPATH' ) || exit;

/**
 * Trait Json_Serialize
 *
 * @package WPOnion\Traits
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
trait Json_Serialize {
	/**
	 * @return mixed
	 * @uses \JsonSerializable
	 */
	public function jsonSerialize() {
		return $this->get();
	}
}
