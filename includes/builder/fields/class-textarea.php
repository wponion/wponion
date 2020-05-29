<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

/**
 * Class Textarea
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Textarea extends Text {
	/**
	 * Text constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( $id, $title, $args );
		$this->__set( 'type', 'textarea' );
	}

	/**
	 * @param int $rows
	 *
	 * @return \WPO\Fields\Textarea
	 */
	public function rows( $rows = 5 ) {
		return $this->__set( 'rows', $rows );
	}

	/**
	 * @param int $cols
	 *
	 * @return \WPO\Fields\Textarea
	 */
	public function cols( $cols = 5 ) {
		return $this->__set( 'cols', $cols );
	}
}
