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

namespace WPO\Fields;

if ( ! class_exists( 'WPO\Fields\Upload' ) ) {
	/**
	 * Class Upload
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Upload extends \WPO\Field {
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
		public function settings( $args ) {
			$this->_set_array_handler( 'settings', $args, true );
			return $this;
		}

		/**
		 * @param string $library
		 *
		 * @return $this
		 */
		public function library( $library = 'all' ) {
			return $this->settings( array( 'upload_type' => $library ) );
		}

		/**
		 * @param string $frame_title
		 *
		 * @return \WPO\Fields\Upload
		 */
		public function frame_title( $frame_title = 'Upload' ) {
			return $this->settings( array( 'frame_title' => $frame_title ) );
		}

		/**
		 * @param string $insert_title
		 *
		 * @return \WPO\Fields\Upload
		 */
		public function insert_title( $insert_title = 'Insert' ) {
			return $this->settings( array( 'insert_title' => $insert_title ) );
		}

		/**
		 * @param string|mixed $button
		 *
		 * @return $this
		 */
		public function button( $button ) {
			$this['button'] = $button;
			return $this;
		}
	}
}
