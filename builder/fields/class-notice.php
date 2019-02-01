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

if ( ! class_exists( 'WPO\Notice' ) ) {
	/**
	 * Class Notice
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Notice extends Heading {
		/**
		 * Notice constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( $id, $title, $args );
			$this['type'] = 'notice';
		}

		/**
		 * @param $notice_type
		 *
		 * @return $this
		 */
		public function set_notice_type( $notice_type ) {
			$this['notice_type'] = $notice_type;
			return $this;
		}

		/**
		 * @param $autoclose
		 *
		 * @return $this
		 */
		public function set_autoclose( $autoclose ) {
			$this['autoclose'] = $autoclose;
			return $this;
		}

		/**
		 * @param $close
		 *
		 * @return $this
		 */
		public function set_close( $close ) {
			$this['close'] = $close;
			return $this;
		}


		/**
		 * @return array
		 */
		public function defaults() {
			return array(
				'autoclose'   => false,
				'close'       => true,
				'notice_type' => 'success',
			);
		}

	}
}
