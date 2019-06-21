<?php

namespace WPOnion\WP;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WP_List_Table' ) ) {
	require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
}

if ( ! class_exists( '\WPOnion\WP\WP_List_Table' ) ) {
	/**
	 * Class WP_List_Table
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_List_Table extends \WP_List_Table {
		/**
		 * items
		 *
		 * @var array|mixed|void
		 */
		public $items = array();

		/**
		 * table_data
		 *
		 * @var bool
		 */
		protected $table_data = false;

		/**
		 * table_settings
		 *
		 * @var array
		 */
		protected $table_settings = array();

		/**
		 * columns_callback
		 *
		 * @var array
		 */
		protected $columns_callback = array();

		/**
		 * registered_columns
		 *
		 * @var array
		 */
		protected $registered_columns = array();

		/**
		 * sortable_columns
		 *
		 * @var array
		 */
		protected $sortable_columns = array();

		/**
		 * WP_List_Table constructor.
		 *
		 * @param array $table_settings
		 * @param array $table_contents
		 */
		public function __construct( $table_settings = array(), $table_contents = array() ) {
			$this->table_settings = wp_parse_args( $table_settings, array(
				// Default Settings
				'plural'           => '',
				'singular'         => '',
				'ajax'             => false,
				'screen'           => 'post',
				//Custom Settings.
				'no_items'         => __( 'No Items Found', 'wponion' ),
				'columns'          => array(),
				'sortable'         => array(),
				'default_callback' => array(),
				'per_page'         => 10,
				'total_items'      => false,
				'bulk_actions'     => array(),
				'filter_menus'     => array(),
				'field'            => false, //Internal Usage Only
			) );
			parent::__construct( array(
				'plural'   => $this->option( 'plural' ),
				'singular' => $this->option( 'singular' ),
				'ajax'     => $this->option( 'ajax' ),
				'screen'   => $this->option( 'screen' ),
			) );
			$this->table_data = $table_contents;
			$this->handle_columns();
		}

		/**
		 * @param string $key
		 * @param bool   $default
		 *
		 * @return bool|mixed
		 */
		protected function option( $key = '', $default = false ) {
			return ( isset( $this->table_settings[ $key ] ) ) ? $this->table_settings[ $key ] : $default;
		}

		/**
		 * Get an associative array ( option_name => option_title ) with the list
		 * of bulk actions available on this table.
		 *
		 * @return array
		 */
		protected function get_bulk_actions() {
			return $this->option( 'bulk_actions' );
		}

		/**
		 * Get an associative array ( id => link ) with the list
		 * of views available on this table.
		 *
		 * @return array
		 */
		protected function get_views() {
			if ( wponion_is_callable( $this->option( 'filter_menus' ) ) ) {
				return wponion_callback( $this->option( 'filter_menus' ), $this );
			}
			return $this->option( 'filter_menus' );
		}

		/**
		 * Message to be displayed when there are no items
		 */
		public function no_items() {
			echo $this->option( 'no_items', __( 'No Items Found', 'wponion' ) );
		}

		/**
		 * Handles Tabls Columns and saves it.
		 */
		protected function handle_columns() {
			$this->columns_callback   = array();
			$this->registered_columns = array();
			$this->sortable_columns   = array();

			if ( ! empty( $this->option( 'columns' ) ) ) {
				foreach ( $this->option( 'columns' ) as $key => $value ) {
					$slug     = false;
					$title    = false;
					$callback = false;
					$sortable = false;
					if ( wponion_is_callable( $value ) ) {
						$title    = $key;
						$callback = $value;
					} elseif ( wponion_is_array( $value ) ) {
						if ( isset( $value['callback'] ) ) {
							$callback = $value['callback'];
							$title    = ( isset( $value['title'] ) ) ? $value['title'] : null;
							$sortable = ( isset( $value['sortable'] ) ) ? $value['sortable'] : false;
						} else {
							$title    = $key;
							$callback = $value;
						}
					} elseif ( is_string( $value ) ) {
						$slug  = $key;
						$title = $value;
					}

					if ( false === $title ) {
						$title = $slug;
						$slug  = sanitize_title( $title );
					} elseif ( false === $slug ) {
						$slug = sanitize_title( $title );
					}

					$this->registered_columns[ $slug ] = $title;
					$this->columns_callback[ $slug ]   = $callback;
					if ( false !== $sortable ) {
						$this->sortable_columns[ $slug ] = $sortable;
					}
				}
			}

			if ( ! empty( $this->option( 'sortable' ) ) && wponion_is_array( $this->option( 'sortable' ) ) ) {
				foreach ( $this->option( 'sortable' ) as $key => $value ) {
					if ( isset( $this->columns_callback[ $key ] ) && isset( $this->registered_columns[ $key ] ) ) {
						$this->sortable_columns[ $key ] = $value;
					}
				}
			}
		}

		/**
		 * Get a list of columns. The format is:
		 * 'internal-name' => 'Title'
		 *
		 * @return array
		 */
		public function get_columns() {
			return $this->registered_columns;
		}

		/**
		 * Get a list of sortable columns. The format is:
		 * 'internal-name' => 'orderby'
		 * or
		 * 'internal-name' => array( 'orderby', true )
		 *
		 * The second format will make the initial sorting order be descending
		 *
		 * @return array
		 */
		public function get_sortable_columns() {
			return $this->sortable_columns;
		}

		/**
		 * Prepares the list of items for displaying.
		 *
		 * @uses WP_List_Table::set_pagination_args()
		 *
		 */
		public function prepare_items() {
			if ( false === $this->option( 'total_items' ) ) {
				$total_items = count( $this->items );
			} elseif ( wponion_is_callable( $this->option( 'total_items' ) ) ) {
				$total_items = wponion_callback( $this->option( 'total_items' ), array( $this->get_pagenum(), $this ) );
			} else {
				$total_items = $this->option( 'total_items' );
			}

			if ( wponion_is_callable( $this->table_data ) ) {
				$this->items = wponion_callback( $this->table_data, array( $this->get_pagenum(), $this ) );
			} else {
				$this->items = $this->table_data;
			}

			$this->set_pagination_args( array(
				'total_items' => $total_items,
				'per_page'    => $this->option( 'per_page' ),
			) );
		}

		/**
		 * Column Rendering.
		 *
		 * @param object $item
		 * @param string $col_name
		 *
		 * @return string
		 */
		public function column_default( $item, $col_name ) {
			if ( isset( $this->registered_columns[ $col_name ] ) && isset( $this->columns_callback[ $col_name ] ) && wponion_is_callable( $this->columns_callback[ $col_name ] ) ) {
				return wponion_callback( $this->columns_callback[ $col_name ], array(
					$item,
					$col_name,
					$this,
					$this->option( 'field' ),
				) );
			} elseif ( isset( $item[ $col_name ] ) ) {
				if ( is_string( $item[ $col_name ] ) ) {
					return $item[ $col_name ];
				}
				return print_r( $item[ $col_name ], true );
			}
			return print_r( $item, true );
		}
	}
}

