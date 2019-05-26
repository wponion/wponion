<?php

namespace WPOnion\Modules\CPT\Labels;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\CPT\Labels\Common' ) ) {
	/**
	 * Class Common
	 *
	 * @package WPOnion\Modules\CPT\Labels
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method $this name( $label );
	 * @method $this singular_name( $label );
	 * @method $this menu_name( $label );
	 * @method $this all_items( $label );
	 * @method $this parent_item_colon( $label );
	 * @method $this add_new_item( $label );
	 * @method $this edit_item( $label );
	 * @method $this update_item( $label );
	 * @method $this view_item( $label );
	 * @method $this search_items( $label );
	 * @method $this not_found( $label );
	 * @method $this items_list( $label );
	 * @method $this items_list_navigation( $label );
	 */
	abstract class Common {
		/**
		 * Stores All Labels.
		 *
		 * @var array
		 * @access
		 */
		protected $labels = array();

		/**
		 * Stores Common Labels.
		 *
		 * @var array
		 * @access
		 * @static
		 */
		protected static $common_labels = array();

		/**
		 * Returns Common Labels.
		 *
		 * @return array
		 */
		private function common_labels() {
			if ( empty( self::$common_labels ) ) {
				self::$common_labels = array(
					'name',
					'singular_name',
					'menu_name',
					'all_items',
					'parent_item_colon',
					'add_new_item',
					'edit_item',
					'update_item',
					'view_item',
					'search_items',
					'not_found',
					'items_list',
					'items_list_navigation',
				);
			}
			return self::$common_labels;
		}

		/**
		 * Common constructor.
		 *
		 * @param $labels
		 */
		public function __construct( $labels ) {
			$this->labels = $labels;
		}

		/**
		 * Returns Labels.
		 *
		 * @return array
		 */
		public function get_labels() {
			return $this->labels;
		}

		/**
		 * @param $label
		 * @param $content
		 *
		 * @return $this
		 */
		protected function set_label( $label, $content ) {
			$this->labels[ $label ] = $content;
			return $this;
		}

		/**
		 * @param $name
		 * @param $arguments
		 *
		 * @return bool|\WPOnion\Modules\CPT\Labels\Common
		 */
		public function __call( $name, $arguments ) {
			if ( in_array( $name, $this->common_labels(), true ) && isset( $arguments[0] ) ) {
				return $this->set_label( $name, $arguments[0] );
			}
			return null;
		}
	}
}
