<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Integrations\Page_Builders\Elementor;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

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
