<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Jambo_Content' ) ) {
	/**
	 * Class Jambo_Content
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
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
			$this->_set( 'type', 'jambo_content' );
		}
	}
}
