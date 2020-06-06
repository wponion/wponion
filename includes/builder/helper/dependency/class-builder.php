<?php

namespace WPO\Helper\Dependency;

use WPOnion\Traits\Json_Serialize;

defined( 'ABSPATH' ) || exit;

/**
 * Class Builder
 *
 * @package WPO\Helper\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Builder implements \JsonSerializable {
	use Json_Serialize;

	/**
	 * Stores All Rules.
	 *
	 * @var array
	 */
	private $rules = array();

	/**
	 * Stores Last Element Data.
	 *
	 * @var bool
	 */
	private $elem = false;

	/**
	 * Builder constructor.
	 *
	 * @param string $element Element ID / Condition if $type is element.
	 * @param string $condition Condition To check with / value to check agains. if $type is element.
	 * @param string $values Value to check against or empty.
	 */
	public function __construct( $element, $condition = null, $values = null ) {
		$this->element( $element );
		$this->condition( $condition, $values );
	}

	/**
	 * @param string $element_id Element ID
	 * @param string $condition Condition To check with
	 * @param string $values Value to check against.
	 *
	 * @return $this|\WPO\Helper\Dependency\Builder
	 */
	public function rule( $element_id = null, $condition = null, $values = null ) {
		$this->element( $element_id );
		$this->condition( $condition, $values );
		return $this;
	}

	/**
	 * Sets Element ID.
	 *
	 * @param $field_id
	 */
	private function element( $field_id ) {
		if ( ! is_null( $field_id ) ) {
			if ( ! isset( $this->rules[ $field_id ] ) ) {
				$this->rules[ $field_id ] = array();
			}
			$this->elem = $field_id;
		}
	}

	/**
	 * Sets Condition Values.
	 *
	 * @param $qualifier
	 * @param $values
	 */
	private function condition( $qualifier, $values ) {
		if ( ! is_null( $qualifier ) && ! is_null( $values ) ) {
			$this->rules[ $this->elem ][ $qualifier ] = $values;
		}
	}

	/**
	 * Returns All Rules.
	 *
	 * @return array
	 */
	public function get() {
		return $this->rules;
	}
}
