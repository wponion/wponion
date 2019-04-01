<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPO;

if ( ! class_exists( 'WPO\Select' ) ) {
	/**
	 * Class OEmbed
	 *
	 * @package WPO
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
		public function set_ajax( $load_via_ajax = false ) {
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
		 * @return \WPO\Select
		 */
		public function set_select_framework( $framework, $options = true ) {
			$this[ $framework ] = $options;
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
		 * @return \WPO\Select
		 */
		public function select_framework( $framework, $options = true ) {
			return $this->set_select_framework( $framework, $options );
		}

		/**
		 * @return array
		 */
		public function defaults() {
			return array( 'ajax' => false );
		}
	}
}
