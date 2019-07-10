<?php

namespace WPO\Fields;

use WPO\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\Content' ) ) {
	/**
	 * Class Content
	 *
	 * @package WPO\Fields
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
			parent::__construct( 'content', false, false, array(
				'markdown' => $markdown,
				'content'  => $content,
			) );
		}

		/**
		 * @param $content
		 *
		 * @return $this
		 */
		public function content( $content ) {
			$this['content'] = $content;
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
