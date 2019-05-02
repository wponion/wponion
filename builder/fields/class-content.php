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

if ( ! class_exists( 'WPO\Content' ) ) {
	/**
	 * Class Content
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Content extends Field {
		/**
		 * Content constructor.
		 *
		 * @param bool $content
		 * @param bool $markdown
		 */
		public function __construct( $content = false, $markdown = false ) {
			$args = array(
				'markdown' => $markdown,
			);

			if ( file_exists( $content ) ) {
				$args['include'] = $content;
			} else {
				$args['content'] = $content;
			}

			parent::__construct( 'content', false, false, $args );
		}

		/**
		 * @param $content
		 *
		 * @return $this
		 */
		public function set_content( $content ) {
			$this['content'] = $content;
			return $this;
		}

		/**
		 * @param $include
		 *
		 * @return $this
		 */
		public function set_include( $include ) {
			$this['include'] = $include;
			return $this;
		}

		/**
		 * @param $callback
		 *
		 * @return $this
		 */
		public function set_callback_hook( $callback ) {
			$this['callback_hook'] = $callback;
			return $this;
		}

		/**
		 * @param bool $is_markdown
		 *
		 * @return $this
		 */
		public function markdown( $is_markdown = false ) {
			$this['markdown'] = $is_markdown;
			return $this;
		}
	}
}
