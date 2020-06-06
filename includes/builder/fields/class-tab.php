<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

use WPO\Helper\Field\Nested_Base;

/**
 * Class Accordion
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
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
	 * @return bool|\WPO\Fields\Fieldset
	 * @since 1.4.6
	 */
	public function section( $slug = false, $title = false, $icon = '', $args = array() ) {
		$args['icon'] = $icon;
		return $this->add_field( 'fieldset', $slug, $title, $args );
	}

	/**
	 * @param bool   $slug
	 * @param bool   $title
	 * @param string $icon
	 * @param array  $args
	 *
	 * @return bool|\WPO\Fields\Fieldset
	 * @deprecated Please Use ->section function to create sub section for tab and it will be removed in V 1.5
	 */
	public function container( $slug = false, $title = false, $icon = '', $args = array() ) {
		return $this->section( $slug, $title, $icon, $args );
	}


	/**
	 * Updated Tab Style.
	 *
	 * @param $style
	 *
	 * @return $this
	 */
	public function tab_style( $style ) {
		return $this->__set( 'tab_style', $style );
	}
}
