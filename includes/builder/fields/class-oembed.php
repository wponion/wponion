<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

/**
 * Class OEmbed
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class OEmbed extends Text {
	/**
	 * OEmbed constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( $id, $title, $args );
		$this->__set( 'type', 'oembed' );
	}
}
