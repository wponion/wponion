<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Icon_Picker
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Icon_Picker extends Field {
	/**
	 * Icon_Picker constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'icon_picker', $id, $title, $args );
	}

	/**
	 * @param $button
	 *
	 * @return $this
	 */
	public function add_button( $button ) {
		return $this->__set( 'add_button', $button );
	}

	/**
	 * @param $button
	 *
	 * @return $this
	 */
	public function remove_button( $button ) {
		return $this->__set( 'remove_button', $button );
	}

	/**
	 * @param bool $show_input
	 *
	 * @return $this
	 */
	public function show_input( $show_input = true ) {
		return $this->__set( 'show_input', $show_input );
	}

	/**
	 * @return \WPO\Fields\Icon_Picker
	 */
	public function hide_input() {
		return $this->show_input( false );
	}

	/**
	 * Default Options :
	 *
	 * array(
	 *    'placement' => 'bottom',
	 *    'arrow'     => true,
	 * ),
	 *
	 * @param array $args
	 *
	 * @return $this
	 */
	public function icon_tooltip( $args = array() ) {
		return $this->__set( 'icon_tooltip', $args );
	}

	/**
	 * If Set to true then all icon frameworks that are registered with WPOnion will load
	 * pass a string / array of icon framework slug to load only them.
	 *
	 * @param bool|string|array $enabled_icon_frameworks
	 *
	 * @return $this
	 */
	public function enabled( $enabled_icon_frameworks = true ) {
		return $this->__set( 'enabled', $enabled_icon_frameworks );
	}

	/**
	 * pass a string / array of icon framework slug to disable loading for this field.
	 *
	 * @param bool|string|array $disabled_icon_frameworks
	 *
	 * @return $this
	 */
	public function disabled( $disabled_icon_frameworks = true ) {
		return $this->__set( 'disabled', $disabled_icon_frameworks );
	}

	/**
	 * @param bool $is_group
	 *
	 * @return $this
	 */
	public function group_icons( $is_group = true ) {
		return $this->__set( 'group_icons', $is_group );
	}
}
