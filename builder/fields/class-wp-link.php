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

if ( ! class_exists( 'WPO\WP_Link' ) ) {
	/**
	 * Class WP_Link
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_Link extends Field {
		/**
		 * Upload constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'wp_link', $id, $title, $args );
		}

		/**
		 * Options Are :
		 * array(
		 *    'url'        => true,
		 *    'title'      => true,
		 *    'target'     => true,
		 *    'example'    => true,
		 *    'show_input' => false,
		 * )
		 *
		 * @param      $args
		 * @param bool $merge
		 *
		 * @return $this
		 */
		public function set_settings( $args, $merge = true ) {
			$this->_set_array_handler( 'settings', $args, $merge );
			return $this;
		}

		/**
		 * @param $url
		 *
		 * @return \WPO\WP_Link
		 */
		public function set_url( $url ) {
			return $this->set_settings( array( 'url' => $url ) );
		}

		/**
		 * @param $title
		 *
		 * @return \WPO\WP_Link
		 */
		public function set_link_title( $title ) {
			return $this->set_settings( array( 'title' => $title ) );
		}

		/**
		 * @param $target
		 *
		 * @return \WPO\WP_Link
		 */
		public function set_target( $target ) {
			return $this->set_settings( array( 'target' => $target ) );
		}

		/**
		 * @param $example
		 *
		 * @return \WPO\WP_Link
		 */
		public function set_example( $example ) {
			return $this->set_settings( array( 'example' => $example ) );
		}

		/**
		 * @param $show_input
		 *
		 * @return \WPO\WP_Link
		 */
		public function set_show_input( $show_input ) {
			return $this->set_settings( array( 'show_input' => $show_input ) );
		}

		/**
		 * @param string|mixed $button
		 *
		 * @return $this
		 */
		public function set_button( $button ) {
			$this['button'] = $button;
			return $this;
		}

		/**
		 * Returns Default Args.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array(
				'button'   => __( 'Select URL', 'wponion' ),
				'settings' => array(
					'url'        => true,
					'title'      => true,
					'target'     => true,
					'example'    => true,
					'show_input' => false,
				),
			);
		}
	}
}
