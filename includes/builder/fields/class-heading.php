<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Notice
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Heading extends Field {
	/**
	 * Subheading constructor.
	 *
	 * @param bool  $content
	 * @param bool  $id
	 * @param array $args
	 */
	public function __construct( $content = false, $id = false, $args = array() ) {
		parent::__construct( 'heading', $id, false, wponion_parse_args( array( 'content' => $content ), $args ) );
	}

	/**
	 * @param null $content
	 *
	 * @return $this
	 */
	public function content( $content = null ) {
		return $this->__set( 'content', $content );
	}
}
