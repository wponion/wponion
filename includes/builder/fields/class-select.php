<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class OEmbed
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Select extends Field {
	/**
	 * Select constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'select', $id, $title, $args );
	}

	/**
	 * If set to true then select options will be loaded via ajax.
	 *
	 * @param bool $load_via_ajax
	 *
	 * @return $this
	 */
	public function ajax( $load_via_ajax = false ) {
		return $this->__set( 'ajax', $load_via_ajax );
	}

	/**
	 * Options
	 * - select2 [https://select2.org/]
	 * - chosen [https://harvesthq.github.io/chosen/]
	 * - selectize [https://selectize.github.io/selectize.js/]
	 *
	 * @param string     $framework Select Framework Name.
	 * @param bool|array $options For Options please visit Select Frameworks Website to know more about arguments.
	 *
	 * @return \WPO\Fields\Select
	 */
	public function select_framework( $framework, $options = true ) {
		return $this->__set( $framework, $options );
	}

	/**
	 * @param $prefix
	 *
	 * @return $this
	 */
	public function prefix( $prefix ) {
		return $this->__set( 'prefix', $prefix );
	}

	/**
	 * @param $surfix
	 *
	 * @return $this
	 */
	public function surfix( $surfix ) {
		return $this->__set( 'surfix', $surfix );
	}
}
