<?php

namespace WPOnion\DB\Query_Types;

use WPOnion\Helper;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\DB\Query_Types\Currency_Symbol' ) ) {
	/**
	 * Class Currency_Symbol
	 *
	 * @package WPOnion\DB\Query_Types
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.4.5.4
	 */
	class Currency_Symbol extends WP_Query_Base {
		/**
		 * @var bool
		 */
		protected $is_customizable = false;

		/**
		 * @param array $query_args
		 *
		 * @return array
		 */
		public function setup_query_args( $query_args ) {
			return $query_args;
		}

		/**
		 * Fetches Results From Database.
		 *
		 * @param $query_args
		 *
		 * @return array
		 */
		public function get_results( $query_args ) {
			return Helper::get_currency_symbol();
		}

		/**
		 * @param array|object $values WP Query Result.
		 *
		 * @return string
		 */
		public function default_key( $values ) {
			return false;
		}

		/**
		 * @param array|object $values WP Query Result.
		 *
		 * @return string
		 */
		public function default_label( $values ) {
			return false;
		}
	}
}
