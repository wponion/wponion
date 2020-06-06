<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Faq
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Faq extends Field {
	/**
	 * Faq constructor.
	 *
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $title = false, $args = array() ) {
		parent::__construct( 'faq', false, $title, $args );
	}

	/**
	 * @param $heading
	 * @param $content
	 *
	 * @return \WPO\Fields\Faq
	 */
	public function faq( $heading, $content ) {
		return $this->option( microtime( true ), array(
			'heading' => $heading,
			'content' => $content,
		) );
	}

	/**
	 * @param $faqs
	 *
	 * @return \WPO\Fields\Faq
	 */
	public function faqs( $faqs ) {
		return $this->options( $faqs );
	}
}
