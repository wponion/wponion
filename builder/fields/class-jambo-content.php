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

if ( ! class_exists( 'WPO\Jambo_Content' ) ) {
	/**
	 * Class Jambo_Content
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Jambo_Content extends Content {
		/**
		 * Jambo_Content constructor.
		 *
		 * @param bool $content
		 * @param bool $markdown
		 */
		public function __construct( $content = false, $markdown = false ) {
			parent::__construct( $content, $markdown );
			$this['type'] = 'jambo_content';
		}
	}
}
