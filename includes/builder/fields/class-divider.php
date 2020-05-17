<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Divider' ) ) {
	/**
	 * Class Divider
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Divider extends Field {
		/**
		 * Divider constructor.
		 *
		 * @param $text
		 */
		public function __construct( $text ) {
			parent::__construct( 'divider', false, false, array(
				'text' => $text,
			) );
		}

		/**
		 * @param $text
		 *
		 * @return $this
		 */
		public function text( $text ) {
			$this['text'] = $text;
			return $this;
		}
	}
}
