<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

/**
 * Class Jambo_Content
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Jambo_Content extends Content {
	/**
	 * Jambo_Content constructor.
	 *
	 * @param bool $content
	 * @param bool $markdown
	 */
	public function __construct( $content = false, $markdown = false ) {
		parent::__construct( $content, $markdown );
		$this->__set( 'type', 'jambo_content' );
	}
}
