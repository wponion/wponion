<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

/**
 * Class Subheading
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Subheading extends Heading {
	/**
	 * Subheading constructor.
	 *
	 * @param bool  $content
	 * @param bool  $id
	 * @param array $args
	 */
	public function __construct( $content = false, $id = false, $args = array() ) {
		parent::__construct( $content, $id, $args );
		$this->__set( 'type', 'subheading' );
	}
}
