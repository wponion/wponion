<?php

namespace WPOnion\Integrations\Page_Builders\Elementor;

defined( 'ABSPATH' ) || exit;

if ( ! trait_exists( '\WPOnion\Integrations\Page_Builders\Elementor\Fields' ) ) {
	/**
	 * Trait Fields
	 *
	 * @package WPOnion\Integrations\Page_Builders\Elementor
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	trait Fields {

		/**
		 * @param $image
		 *
		 * @return array
		 */
		protected function field_image( $image ) {
			return array(
				'id'  => $image,
				'url' => wp_get_attachment_image_src( $image )[0],
			);
		}
	}
}
