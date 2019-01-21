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

if ( ! class_exists( 'WPO\Accordion' ) ) {
	/**
	 * Class Accordion
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method is_open()
	 */
	class Accordion extends Nested_Fields {
		/**
		 * Accordion constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'accordion', $id, $title, $args );
		}

		/**
		 * @param bool $is_open
		 *
		 * @return $this
		 */
		public function set_is_open( $is_open = false ) {
			$this['is_open'] = $is_open;
			return $this;
		}

		/**
		 * @return $this
		 */
		public function open() {
			return $this->set_is_open( true );
		}

		/**
		 * @return $this
		 */
		public function close() {
			return $this->set_is_open( false );
		}

		/**
		 * Returns Default Args.
		 *
		 * @return array
		 */
		protected function defaults() {
			return $this->parse_args( array(
				'is_open' => false,
				'heading' => __( 'Accordion' ),
			), parent::defaults() );
		}
	}
}
