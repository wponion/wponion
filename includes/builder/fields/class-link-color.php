<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

/**
 * Class Link_Color
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Link_Color extends Color_Group {
	/**
	 * Link_Color constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( $id, $title, $args );
		$this->__set( 'type', 'link_color' );
	}

	/**
	 * Acceptable Arguments :
	 * true / false / string / \WPO\Color_Picker Instance.
	 *
	 * @param bool $field
	 *
	 * @return $this
	 */
	public function color( $field = false ) {
		return $this->__set( 'color', $field );
	}

	/**
	 * Acceptable Arguments :
	 * true / false / string / \WPO\Color_Picker Instance.
	 *
	 * @param bool $field
	 *
	 * @return $this
	 */
	public function hover( $field = false ) {
		return $this->__set( 'hover', $field );
	}

	/**
	 * Acceptable Arguments :
	 * true / false / string / \WPO\Color_Picker Instance.
	 *
	 * @param bool $field
	 *
	 * @return $this
	 */
	public function active( $field = false ) {
		return $this->__set( 'active', $field );
	}

	/**
	 * Acceptable Arguments :
	 * true / false / string / \WPO\Color_Picker Instance.
	 *
	 * @param bool $field
	 *
	 * @return $this
	 */
	public function visited( $field = false ) {
		return $this->__set( 'visited', $field );
	}

	/**
	 * Acceptable Arguments :
	 * true / false / string / \WPO\Color_Picker Instance.
	 *
	 * @param bool $field
	 *
	 * @return $this
	 */
	public function foucs( $field = false ) {
		return $this->__set( 'foucs', $field );
	}
}
