<?php

namespace WPOnion\Theme;

defined( 'ABSPATH' ) || exit;

/**
 * Class WP
 *
 * @package WPOnion\Theme
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class WP_Lite extends Global_Theme {
	/**
	 * WP constructor.
	 *
	 * @param $data
	 */
	public function __construct( $data ) {
		parent::__construct( $data, __FILE__, 'wp-lite' );
	}
}
