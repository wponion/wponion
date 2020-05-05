<?php

namespace WPO\Fields;

use WPO\Helper\Field\Nested_Fields;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Fieldset' ) ) {
	/**
	 * Class Fieldset
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Fieldset extends Nested_Fields {
		/**
		 * Fieldset constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'fieldset', $id, $title, $args );
		}
	}
}
