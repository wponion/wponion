<?php

namespace WPOnion\WP;

use WP_List_Table;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WP_List_Table' ) ) {
	require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
}

/**
 * Class List_Table
 *
 * @package WPOnion
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class List_Table extends WP_List_Table {
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
	 * Stores Pagination Info.
	 *
	 * @var string
	 */
	protected $_pagination = '';

	/**
	 * WP_List_Table constructor.
	 *
	 * @param array $table_settings
	 * @param array $table_contents
	 */
	public function __construct( $table_settings = array(), $table_contents = array() ) {
		$this->table_settings = wp_parse_args( $table_settings, $this->default_args() );
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
	 * Custom Functions.
	 */

	/**
	 * Table's Default Args.
	 *
	 * @return array
	 */
	protected function default_args() {
		return array(
			// Default Settings
			'plural'           => '', // String
			'singular'         => '', // String
			'ajax'             => false, // Boolean
			'screen'           => 'post', // String

			//Custom Settings.
			'no_items'         => __( 'No Items Found', 'wponion' ), // String
			'columns'          => array(), // Array
			'sortable'         => array(), // Array eg array( array('data-key'=>array('url-key',true)) )
			'default_callback' => array(), // Array / String but as a callback function
			'per_page'         => 10, // Numeric
			'total_items'      => false, // Numeric / Callback
			'extra_tablenav'   => false, // HTML / Callback
			'bulk_actions'     => array(), // Array
			'filter_menus'     => array(), // Array
			'field'            => false, //Internal Usage Only
			'table_style'      => 'wordpress', // Possible Values wponion,wordpress

			// Additional Settings
			'search'           => true,
			'html_class'       => array(
				'table'   => '',
				'content' => false, // Callback.
			),
			'tablenav_top'     => true,
			'tablenav_bottom'  => true,
			'table_head'       => true, // true / false or even with array of custom attributes
			'table_foot'       => true, // true / false or even with array of custom attributes
		);
	}

	/**
	 * Checks if current table style is set to wordpress.
	 *
	 * @return bool
	 */
	protected function is_wp_style() {
		return ( 'wordpress' === $this->option( 'table_style' ) );
	}

	/**
	 * checks if current table style is set to wponion
	 *
	 * @return bool
	 */
	protected function is_wpo_style() {
		return ( 'wponion' === $this->option( 'table_style' ) );
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
	 * Fetch And Returns HTML Class.
	 *
	 * @param string      $key Possible Values table,thead,tfoot
	 * @param string|bool $default default value.
	 *
	 * @return bool|mixed
	 */
	protected function get_html_classes( $key = 'table', $default = false ) {
		$data = $this->option( 'html_class' );
		return isset( $data[ $key ] ) ? $data[ $key ] : $default;
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
						$slug     = ( ! is_numeric( $key ) ) ? $key : $slug;
					} else {
						$title    = $key;
						$callback = $value;
					}
				} elseif ( is_string( $value ) ) {
					$slug  = $key;
					$title = $value;
				}

				if ( false === $slug ) {
					if ( false === $title ) {
						$title = $slug;
						$slug  = sanitize_title( $title );
					} elseif ( false === $slug ) {
						$slug = sanitize_title( $title );
					}
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
	 * Basic Override Functions.
	 * Below Functions are required to run.
	 */

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
		$total_items = $this->option( 'total_items' );
		$this->items = $this->table_data;

		if ( wponion_is_callable( $this->table_data ) ) {
			$this->items = wponion_callback( $this->table_data, array( $this->get_pagenum(), $this ) );
		}

		if ( false === $this->option( 'total_items' ) ) {
			$total_items = count( $this->items );
		} elseif ( wponion_is_callable( $this->option( 'total_items' ) ) ) {
			$total_items = wponion_callback( $this->option( 'total_items' ), array( $this->get_pagenum(), $this ) );
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
		} elseif ( is_array( $item ) && isset( $item[ $col_name ] ) ) {
			return ( is_string( $item[ $col_name ] ) ) ? $item[ $col_name ] : print_r( $item[ $col_name ], true );
		} elseif ( is_object( $item ) ) {
			$data = ( isset( $item->{$col_name} ) ) ? $item->{$col_name} : false;
			if ( false === $data && wponion_is_callable( array( $item, $col_name ) ) ) {
				$data = wponion_callback( array( $item, $col_name ) );
			}
			return ( is_string( $data ) ) ? $data : print_r( $data, true );
		}
		return print_r( $item, true );
	}

	/**
	 * Renders Column Checkbox.
	 *
	 * @param object $item
	 *
	 * @return string
	 */
	public function column_cb( $item ) {
		$col_name = 'cb';
		if ( isset( $this->registered_columns[ $col_name ] ) && isset( $this->columns_callback[ $col_name ] ) && wponion_is_callable( $this->columns_callback[ $col_name ] ) ) {
			return wponion_callback( $this->columns_callback[ $col_name ], array(
				$item,
				$col_name,
				$this,
				$this->option( 'field' ),
			) );
		} else {
			$id = ( is_array( $item ) && isset( $item['id'] ) ) ? $item['id'] : false;
			if ( false === $id && is_object( $item ) && wponion_is_callable( array( $item, 'id' ) ) ) {
				$id = wponion_callback( array( $item, 'id' ) );
			}
			return '<input id="cb-select-' . $id . '" type="checkbox" name="ids[]" value="' . $id . '"/>';
		}
	}

	/**
	 * General Overrides To Make sure it works good.
	 */

	/**
	 * Generates content for a single row of the table
	 *
	 * @param object $item The current item
	 */
	public function single_row( $item ) {
		$class      = $this->get_html_classes( 'content' );
		$html_class = ( wponion_is_callable( $class ) ) ? wponion_callback( $class, array(
			$item,
			&$this,
		) ) : $class;
		echo '<tr class="' . wponion_html_class( $html_class ) . '">';
		$this->single_row_columns( $item );
		echo '</tr>';
	}

	/**
	 * @param bool   $text
	 * @param string $input_id
	 */
	public function search_box( $text = false, $input_id = 'search' ) {
		if ( false !== $this->option( 'search' ) ) {
			$text = ( false === $text ) ? __( 'Search', 'wponion' ) : $text;
			parent::search_box( $text, $input_id );
		}
	}

	/**
	 * Display the pagination.
	 *
	 * @param string $which
	 *
	 */
	protected function pagination( $which ) {
		if ( empty( $this->_pagination_args ) ) {
			return;
		}

		$total_items     = $this->_pagination_args['total_items'];
		$total_pages     = $this->_pagination_args['total_pages'];
		$infinite_scroll = false;
		if ( isset( $this->_pagination_args['infinite_scroll'] ) ) {
			$infinite_scroll = $this->_pagination_args['infinite_scroll'];
		}

		if ( 'top' === $which && $total_pages > 1 ) {
			$this->screen->render_screen_reader_content( 'heading_pagination' );
		}

		/* translators: added Total Items Count */
		$output = '<span class="displaying-num">' . sprintf( _n( '%s item', '%s items', $total_items, 'wponion' ), number_format_i18n( $total_items ) ) . '</span>';

		$current              = $this->get_pagenum();
		$removable_query_args = wp_removable_query_args();
		$current_url          = set_url_scheme( 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] );
		$current_url          = remove_query_arg( $removable_query_args, $current_url );
		$page_links           = array();
		$total_pages_before   = '<span class="paging-input">';
		$total_pages_after    = '</span></span>';
		$disable_first        = false;
		$disable_last         = false;
		$disable_prev         = false;
		$disable_next         = false;

		if ( 1 === $current ) {
			$disable_first = true;
			$disable_prev  = true;
		}
		if ( 2 === $current ) {
			$disable_first = true;
		}
		if ( $current === $total_pages ) {
			$disable_last = true;
			$disable_next = true;
		}
		if ( $current === $total_pages - 1 ) {
			$disable_last = true;
		}

		if ( $disable_first ) {
			$page_links[] = '<span class="tablenav-pages-navspan button disabled" aria-hidden="true">&laquo;</span>';
		} else {
			$page_links[] = sprintf( "<a class='first-page button' href='%s'><span class='screen-reader-text'>%s</span><span aria-hidden='true'>%s</span></a>", esc_url( remove_query_arg( 'paged', $current_url ) ), __( 'First page', 'wponion' ), '&laquo;' );
		}

		if ( $disable_prev ) {
			$page_links[] = '<span class="tablenav-pages-navspan button disabled" aria-hidden="true">&lsaquo;</span>';
		} else {
			$page_links[] = sprintf( "<a class='prev-page button' href='%s'><span class='screen-reader-text'>%s</span><span aria-hidden='true'>%s</span></a>", esc_url( add_query_arg( 'paged', max( 1, $current - 1 ), $current_url ) ), __( 'Previous page', 'wponion' ), '&lsaquo;' );
		}

		if ( 'bottom' === $which ) {
			$html_current_page  = $current;
			$total_pages_before = '<span class="screen-reader-text">' . __( 'Current Page', 'wponion' ) . '</span><span id="table-paging" class="paging-input"><span class="tablenav-paging-text">';
		} else {
			$html_current_page = sprintf( "%s<input class='current-page' id='current-page-selector' type='text' name='paged' value='%s' size='%d' aria-describedby='table-paging' /><span class='tablenav-paging-text'>", '<label for="current-page-selector" class="screen-reader-text">' . __( 'Current Page', 'wponion' ) . '</label>', $current, strlen( $total_pages ) );
		}
		$html_total_pages = sprintf( "<span class='total-pages'>%s</span>", number_format_i18n( $total_pages ) );
		/* translators: 1. Current Page Number 2. Total Pages */
		$page_links[] = $total_pages_before . sprintf( _x( '%1$s of %2$s', 'paging', 'wponion' ), $html_current_page, $html_total_pages ) . $total_pages_after;

		if ( $disable_next ) {
			$page_links[] = '<span class="tablenav-pages-navspan button disabled" aria-hidden="true">&rsaquo;</span>';
		} else {
			$page_links[] = sprintf( "<a class='next-page button' href='%s'><span class='screen-reader-text'>%s</span><span aria-hidden='true'>%s</span></a>", esc_url( add_query_arg( 'paged', min( $total_pages, $current + 1 ), $current_url ) ), __( 'Next page', 'wponion' ), '&rsaquo;' );
		}

		if ( $disable_last ) {
			$page_links[] = '<span class="tablenav-pages-navspan button disabled" aria-hidden="true">&raquo;</span>';
		} else {
			$page_links[] = sprintf( "<a class='last-page button' href='%s'><span class='screen-reader-text'>%s</span><span aria-hidden='true'>%s</span></a>", esc_url( add_query_arg( 'paged', $total_pages, $current_url ) ), __( 'Last page', 'wponion' ), '&raquo;' );
		}

		$pagination_links_class = 'pagination-links';
		if ( ! empty( $infinite_scroll ) ) {
			$pagination_links_class .= ' hide-if-js';
		}
		$output .= "\n<span class='$pagination_links_class'>" . join( "\n", $page_links ) . '</span>';

		if ( $total_pages ) {
			$page_class = $total_pages < 2 ? ' one-page' : '';
		} else {
			$page_class = ' no-pages';
		}
		$this->_pagination = "<div class='tablenav-pages{$page_class}'>$output</div>";

		echo $this->_pagination;
	}

	/**
	 * Extra controls to be displayed between bulk actions and pagination
	 *
	 * @param string $which
	 *
	 */
	protected function extra_tablenav( $which ) {
		if ( wponion_is_callable( $this->option( 'extra_tablenav' ) ) ) {
			echo wponion_callback( $this->option( 'extra_tablenav' ), array( $which, $this ) );
		}
	}

	/**
	 * Generate the table navigation above or below the table
	 *
	 * @param string $which
	 */
	protected function display_tablenav( $which ) {
		$nounce = '';

		wponion_catch_output( true );
		$this->bulk_actions( $which );
		$action_html = wponion_catch_output( false );

		if ( $this->has_items() && ! empty( $action_html ) ) {
			$action_html = '<div class="alignleft actions bulkactions">' . $action_html . '</div>';
		}

		wponion_catch_output( true );
		$this->extra_tablenav( $which );
		$extra_tablenav = wponion_catch_output( false );

		wponion_catch_output( true );
		$this->pagination( $which );
		$pagination = wponion_catch_output( false );

		if ( 'top' === $which && ( false !== $this->option( 'search' ) || ! empty( $action_html ) ) ) {
			wponion_catch_output( true );
			if ( isset( $_REQUEST['page'] ) && ! empty( $_REQUEST['page'] ) ) {
				echo '<input type="hidden" name="page" value="' . $_REQUEST['page'] . '"/>';
			}
			wp_nonce_field( 'bulk-' . $this->_args['plural'] );
			$nounce = wponion_catch_output( false );
		}

		if ( ! empty( $action_html ) || ! empty( $extra_tablenav ) || ! empty( $pagination ) ) {
			$which = esc_attr( $which );
			echo <<<HTML
{$nounce} <div class="tablenav {$which}"> {$action_html} {$extra_tablenav} {$pagination} <br class="clear"/> </div>
HTML;
		}
	}

	/**
	 * Print column headers, accounting for hidden and sortable columns.
	 *
	 * @param bool $with_id Whether to set the id attribute or not
	 *
	 * @staticvar int $cb_counter
	 */
	public function print_column_headers( $with_id = true ) {
		list( $columns, $hidden, $sortable, $primary ) = $this->get_column_info();
		$current_url     = remove_query_arg( 'paged', set_url_scheme( 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] ) );
		$current_orderby = ( isset( $_GET['orderby'] ) ) ? $_GET['orderby'] : '';
		$current_order   = ( isset( $_GET['order'] ) && 'desc' === $_GET['order'] ) ? 'desc' : 'asc';

		if ( ! empty( $columns['cb'] ) ) {
			static $cb_counter = 1;
			$columns['cb'] = '<label class="screen-reader-text" for="cb-select-all-' . $cb_counter . '">' . __( 'Select All', 'wponion' ) . '</label>' . '<input id="cb-select-all-' . $cb_counter . '" type="checkbox" />';
			$cb_counter++;
		}

		foreach ( $columns as $column_key => $column_display_name ) {
			$attr = array(
				'class' => array(
					'manage-column',
					"column-$column_key",
					( in_array( $column_key, $hidden, true ) ) ? 'hidden' : '',
					( 'cb' === $column_key ) ? 'check-column' : '',
					( in_array( $column_key, array( 'posts', 'comments', 'links' ), true ) ) ? 'num' : '',
					( $column_key === $primary ) ? 'column-primary' : '',
				),
			);

			if ( isset( $sortable[ $column_key ] ) ) {
				list( $orderby, $desc_first ) = $sortable[ $column_key ];
				$order           = $desc_first ? 'desc' : 'asc';
				$attr['class'][] = 'sortable';

				if ( $current_orderby === $orderby ) {
					$order           = 'asc' === $current_order ? 'desc' : 'asc';
					$attr['class'][] = $current_order;
				} else {
					$attr['class'][] = $desc_first ? 'asc' : 'desc';
				}

				$column_display_name = '<a href="' . esc_url( add_query_arg( compact( 'orderby', 'order' ), $current_url ) ) . '"><span>' . $column_display_name . '</span><span class="sorting-indicator"></span></a>';
			}

			$tag           = ( 'cb' === $column_key ) ? 'td' : 'th';
			$attr['scope'] = ( 'th' === $tag ) ? 'col' : '';
			$attr['id']    = $with_id ? $column_key : '';
			$attr          = wponion_array_to_html_attributes( $attr );
			echo "<$tag $attr>$column_display_name</$tag>";
		}
	}

	/**
	 * Get a list of CSS classes for the WP_List_Table table tag.
	 *
	 * @return array List of CSS classes for the table tag.
	 */
	protected function get_table_classes() {
		$class = wponion_html_class( $this->get_html_classes( 'table' ), array(), false );

		if ( $this->is_wp_style() ) {
			return wponion_html_class( wp_parse_args( $class, array(
				'wp-list-table',
				'fixed',
				'widefat',
				'striped',
				$this->_args['plural'],
			) ) );
		}

		if ( $this->is_wpo_style() ) {
			return wponion_html_class( wp_parse_args( $class, array(
				'wp-list-table',
				'wpo-table',
				'wpo-table-striped',
				$this->_args['plural'],
			) ) );
		}

		return wponion_html_class( wp_parse_args( $class, array( $this->_args['plural'] ) ) );
	}

	/**
	 * Display the table
	 */
	public function display() {
		if ( true === $this->option( 'tablenav_top' ) ) {
			$this->display_tablenav( 'top' );
		}

		$this->screen->render_screen_reader_content( 'heading_list' );
		$this->render_table_html();
		if ( true === $this->option( 'tablenav_bottom' ) ) {
			$this->display_tablenav( 'bottom' );
		}
	}

	/**
	 * Converts Table Component Arguments into proper html attribute array.
	 *
	 * @param       $user_vals
	 * @param array $default_attr
	 *
	 * @return array|object
	 */
	protected function args_to_table_attr( $user_vals, $default_attr = array() ) {
		$user_vals             = ( true === $user_vals ) ? array() : $user_vals;
		$default_attr['class'] = ( isset( $default_attr['class'] ) ) ? $default_attr['class'] : array();

		if ( isset( $user_vals['class'] ) ) {
			$default_attr['class'] = wponion_html_class( $user_vals['class'], $default_attr['class'], true );
		}

		$attrs          = wponion_parse_args( $user_vals, $default_attr );
		$attrs['class'] = wponion_html_class( $attrs['class'] );
		return $attrs;
	}

	/**
	 * Renders Table's HTML.
	 */
	protected function render_table_html() {
		$singular = $this->_args['singular'];
		$tbody    = ( $singular ) ? ' data-wp-list="list:' . $singular . '"' : '';

		echo '<table class="' . $this->get_table_classes() . '">';

		if ( false !== $this->option( 'table_head' ) ) {
			$this->table_head_foot( 'head' );
		}

		echo '<tbody id="the-list" ' . $tbody . '>';
		$this->display_rows_or_placeholder();
		echo '</tbody>';

		if ( false !== $this->option( 'table_foot' ) ) {
			$this->table_head_foot( 'foot' );
		}

		echo '</table>';
	}

	/**
	 * Generates Table Head / Foot.
	 *
	 * @param $type
	 */
	protected function table_head_foot( $type ) {
		$is_foot = ( 'foot' === $type );
		$args    = $this->args_to_table_attr( $this->option( 'table_' . $type ), array(
			'class' => $this->get_html_classes( 't' . $type ),
		) );
		echo '<t' . $type . ' ' . wponion_array_to_html_attributes( $args ) . '><tr>';
		$this->print_column_headers( $is_foot );
		echo '</tr></t' . $type . '>';
	}
}

