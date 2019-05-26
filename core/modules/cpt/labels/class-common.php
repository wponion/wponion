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
		 * Common constructor.
		 *
		 * @param string|array $singular
		 * @param bool         $plural
		 */
		public function __construct( $singular = '', $plural = false ) {
			if ( is_array( $singular ) ) {
				$this->labels = $singular;
			} else {
				$this->set( $singular, $plural );
			}
		}

		/**
		 * @param $singular
		 * @param $plural
		 *
		 * @return $this
		 */
		public function set( $singular, $plural ) {
			if ( ! empty( $singular ) && ! empty( $plural ) ) {
				$this->labels['name']                  = $plural;
				$this->labels['singular_name']         = $singular;
				$this->labels['menu_name']             = $plural;
				$this->labels['add_new_item']          = sprintf( 'Add New %s', $singular );
				$this->labels['edit_item']             = sprintf( 'Edit %s', $singular );
				$this->labels['view_item']             = sprintf( 'View %s', $singular );
				$this->labels['search_items']          = sprintf( 'Search %s', $plural );
				$this->labels['not_found']             = sprintf( 'No %s found.', strtolower( $plural ) );
				$this->labels['parent_item_colon']     = sprintf( 'Parent %s:', $singular );
				$this->labels['all_items']             = sprintf( 'All %s', $plural );
				$this->labels['items_list_navigation'] = sprintf( '%s list navigation', $plural );
				$this->labels['items_list']            = sprintf( '%s list', $plural );
			}
			return $this;
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
			return $this->set_label( $name, $arguments[0] );
		}

		/**
		 * @param $name
		 * @param $value
		 */
		public function __set( $name, $value ) {
			$this->set_label( $name, $value );
		}

		/**
		 * @param $name
		 *
		 * @return bool
		 */
		public function __isset( $name ) {
			return ( isset( $this->labels[ $name ] ) );
		}

		/**
		 * @param $name
		 *
		 * @return bool
		 */
		public function __get( $name ) {
			return ( isset( $this->labels[ $name ] ) );
		}

		/**
		 * @param $name
		 */
		public function __unset( $name ) {
			unset( $this->labels[ $name ] );
		}
	}
}
