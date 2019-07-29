<?php

namespace WPO\Fields;

use WPO\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\Select' ) ) {
	/**
	 * Class OEmbed
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
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
			$this['ajax'] = $load_via_ajax;
			return $this;
		}

		/**
		 * Options
		 * - select2 [https://select2.org/]
		 * - chosen [https://harvesthq.github.io/chosen/]
		 * - selectize [https://selectize.github.io/selectize.js/]
		 *
		 * -- Note --
		 * - For Selectize https://github.com/wponion/selectize-addon is required to be installed & activated.
		 *
		 * @param string     $framework Select Framework Name.
		 * @param bool|array $options For Options please visit Select Frameworks Website to know more about arguments.
		 *
		 * @return \WPO\Fields\Select
		 */
		public function select_framework( $framework, $options = true ) {
			$this[ $framework ] = $options;
			return $this;
		}

		/**
		 * @param $prefix
		 *
		 * @return $this
		 */
		public function prefix( $prefix ) {
			$this['prefix'] = $prefix;
			return $this;
		}

		/**
		 * @param $surfix
		 *
		 * @return $this
		 */
		public function surfix( $surfix ) {
			$this['surfix'] = $surfix;
			return $this;
		}
	}
}
