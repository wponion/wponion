<?php

namespace WPO\Helper;

defined( 'ABSPATH' ) || exit;

use ArrayAccess;
use Iterator;
use WPOnion\Traits\Array_Access;
use WPOnion\Traits\Array_Iterator;
use WPOnion\Traits\Array_Position;

/**
 * Class Array_Helper
 *
 * @package WPO\Helper
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Array_Helper extends Base implements ArrayAccess, Iterator {
	use Array_Position;
	use Array_Iterator;
	use Array_Access {
		offsetGet as protected offsetGet_parent;
	}

	/**
	 * @param mixed $offset
	 *
	 * @return mixed
	 */
	public function &offsetGet( $offset ) {
		$return = false;
		if ( false !== strpos( $offset, '/' ) ) {
			$return = $this->offsetGet_parent( $offset );
		} else {
			$defaults = $this->defaults();
			if ( $this->offsetExists( $offset ) ) {
				$return = &$this->{$this->array_var}[ $offset ];
			} elseif ( isset( $defaults[ $offset ] ) ) {
				$return = $defaults[ $offset ];
			}
		}
		return $return;
	}
}
