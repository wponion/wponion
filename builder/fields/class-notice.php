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

if ( ! class_exists( 'WPO\Fields\Notice' ) ) {
	/**
	 * Class Notice
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Notice extends Heading {
		/**
		 * Notice constructor.
		 *
		 * @param bool  $content
		 * @param bool  $id
		 * @param array $args
		 */
		public function __construct( $content = false, $id = false, $args = array() ) {
			parent::__construct( $content, $id, $args );
			$this['type'] = 'notice';
		}

		/**
		 * @param $notice_type
		 *
		 * @return $this
		 */
		public function notice_type( $notice_type ) {
			$this['notice_type'] = $notice_type;
			return $this;
		}

		/**
		 * @param $autoclose
		 *
		 * @return $this
		 */
		public function autoclose( $autoclose ) {
			$this['autoclose'] = $autoclose;
			return $this;
		}

		/**
		 * @param $close
		 *
		 * @return $this
		 */
		public function close( $close ) {
			$this['close'] = $close;
			return $this;
		}
	}
}
