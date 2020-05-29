<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Content
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Content extends Field {
	/**
	 * Content constructor.
	 *
	 * @param bool $content
	 * @param bool $markdown
	 * @param bool $content_path
	 */
	public function __construct( $content = false, $markdown = false, $content_path = false ) {
		parent::__construct( 'content', false, false, array(
			'markdown'     => $markdown,
			'content'      => $content,
			'content_path' => $content_path,
		) );
	}

	/**
	 * @param $path
	 *
	 * @return $this
	 * @since 1.4.6
	 */
	public function content_path( $path ) {
		return $this->__set( 'content_path', $path );
	}

	/**
	 * @param $content
	 *
	 * @return $this
	 */
	public function content( $content ) {
		return $this->__set( 'content', $content );
	}

	/**
	 * @param bool $is_markdown
	 *
	 * @return $this
	 */
	public function markdown( $is_markdown = false ) {
		return $this->__set( 'markdown', $is_markdown );
	}
}
