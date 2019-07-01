<?php

namespace WPOnion\Background_Process;

use WPOnion\DB\Cache;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Background_Process\CDN_Validator' ) ) {
	/**
	 * Class CDN_Validator
	 *
	 * @package WPOnion\Background_Process
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	final class CDN_Validator extends \WP_Background_Process {
		/**
		 * @var string
		 * @access
		 */
		protected $action = 'wponion_cdn_validator';

		/**
		 * @param mixed $item
		 *
		 * @return bool|mixed
		 */
		protected function task( $item ) {
			$item = wp_parse_args( $item, array(
				'handle' => false,
				'url'    => false,
				'type'   => false,
			) );

			$cdn_response = @wp_remote_get( $item['url'] );
			$status       = ( is_wp_error( $cdn_response ) || 200 !== wp_remote_retrieve_response_code( $cdn_response ) ) ? false : true;
			Cache::set( 'cdn_cache/' . $item['handle'] . '_' . $item['type'], $status );
			Cache::set( 'cdn_last_checked', time() );
			error_log( $item['handle'] );
			return false;
		}
	}
}
