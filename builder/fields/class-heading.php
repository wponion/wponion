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

if ( ! class_exists( 'WPO\Heading' ) ) {
	/**
	 * Class Notice
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Heading extends Field {
		/**
		 * Notice constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'heading', $id, $title, $args );
		}

		/**
		 * @param null $content
		 *
		 * @return $this
		 */
		public function set_content( $content = null ) {
			$this['content'] = $content;
			return $this;
		}

		public function defaults() {
			return array(
				'content' => false,
			);
		}

	}
}
