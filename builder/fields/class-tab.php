<?php

namespace WPO\Fields;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

use WPO\Helper\Field\Nested_Base;

if ( ! class_exists( 'WPO\Fields\Tab' ) ) {
	/**
	 * Class Accordion
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Tab extends Nested_Base {

		/**
		 * Accordion constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'tab', $id, $title, $args );
		}

		/**
		 * @param bool|string $slug
		 * @param bool|string $title
		 * @param bool|string $icon
		 * @param array       $args
		 *
		 * @return bool|false|\WPO\Fields\Fieldset
		 */
		public function container( $slug = false, $title = false, $icon = '', $args = array() ) {
			$args['icon'] = $icon;
			return $this->add_field( 'fieldset', $slug, $title, $args );
		}

		/**
		 * Updated Tab Style.
		 *
		 * @param $style
		 *
		 * @return $this
		 */
		public function tab_style( $style ) {
			$this['tab_style'] = $style;
			return $this;
		}
	}
}
