<?php

namespace WPO\Fields;

use WPO\Field;

/**
 * Class Code_Editor
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Code_Editor extends Field {
	/**
	 * Code_Editor constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'code_editor', $id, $title, $args );
	}

	/**
	 * @param $version
	 *
	 * @return $this
	 */
	public function version( $version ) {
		return $this->__set( 'version', $version );
	}

	/**
	 * @param $settings
	 *
	 * @return $this
	 */
	public function settings( $settings ) {
		return $this->__set( 'settings', $settings );
	}
}
