<?php

namespace WPO\Fields;

use WPO\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\Heading' ) ) {
	/**
	 * Class Notice
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
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
			parent::__construct( 'heading', $id, false, $this->parse_args( array( 'content' => $content ), $args ) );
		}

		/**
		 * @param null $content
		 *
		 * @return $this
		 */
		public function content( $content = null ) {
			$this['content'] = $content;
			return $this;
		}
	}
}
