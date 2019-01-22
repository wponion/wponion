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

if ( ! class_exists( 'WPO\Upload' ) ) {
	/**
	 * Class Upload
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Upload extends Field {
		/**
		 * Upload constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'upload', $id, $title, $args );
		}

		/**
		 * @param $args
		 *
		 * @return $this
		 */
		public function set_settings( $args ) {
			$this->_set_array_handler( 'settings', $args, true );
			return $this;
		}

		/**
		 * @param string $library
		 *
		 * @return $this
		 */
		public function set_library( $library = 'all' ) {
			return $this->set_settings( array( 'upload_type' => $library ) );
		}

		/**
		 * @param string $frame_title
		 *
		 * @return \WPO\Upload
		 */
		public function set_frame_title( $frame_title = 'Upload' ) {
			return $this->set_settings( array( 'frame_title' => $frame_title ) );
		}

		/**
		 * @param string $insert_title
		 *
		 * @return \WPO\Upload
		 */
		public function set_insert_title( $insert_title = 'Insert' ) {
			return $this->set_settings( array( 'insert_title' => $insert_title ) );
		}

		/**
		 * Returns Default Args.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array(
				'settings' => array(),
				'button'   => __( 'Upload' ),
			);
		}
	}
}
