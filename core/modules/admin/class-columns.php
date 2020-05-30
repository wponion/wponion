<?php

namespace WPOnion\Modules\Admin;

use WPOnion\Bridge\Module_Utility;

defined( 'ABSPATH' ) || exit;

/**
 * Class Columns
 *
 * @package WPOnion\Modules\Admin
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Columns extends Module_Utility {
	/**
	 * @var string
	 */
	protected $module = 'admin_columns';

	/**
	 * Columns constructor.
	 *
	 * @param array $post_type
	 * @param array $arguments
	 * @param array $render_callback
	 */
	public function __construct( $post_type = array(), $arguments = array(), $render_callback = array() ) {
		if ( ! empty( $post_type ) && isset( $post_type['title'] ) ) {
			parent::__construct( $post_type );
			$this->init();
		} elseif ( ! empty( $post_type ) && ! empty( $arguments ) ) {
			$arguments = ( is_string( $arguments ) ) ? array( 'title' => $arguments ) : $arguments;
			$post_type = ( is_string( $post_type ) ) ? array( 'post_type' => $post_type ) : $post_type;

			if ( isset( $arguments[0] ) ) {
				foreach ( $arguments as $arg ) {
					$arg = ( is_string( $arg ) ) ? array( 'title' => $arg ) : $arg;
					if ( ! empty( $render_callback ) && ! isset( $arg['render'] ) ) {
						$arg['render'] = $render_callback;
					}
					if ( wponion_is_array( $post_type ) && isset( $post_type[0] ) ) {
						$arg = $this->parse_args( array( 'post_type' => $post_type ), $arg );
					} else {
						$arg = $this->parse_args( $post_type, $arg );
					}
					new self( $arg );
				}
			} else {
				if ( ! empty( $render_callback ) && ! isset( $arguments['render'] ) ) {
					$arguments['render'] = $render_callback;
				}
				if ( wponion_is_array( $post_type ) && isset( $post_type[0] ) ) {
					$arguments = $this->parse_args( array( 'post_type' => $post_type ), $arguments );
				} else {
					$arguments = $this->parse_args( $post_type, $arguments );
				}
				parent::__construct( $arguments );
				$this->init();
			}
		} elseif ( ! empty( $post_type ) && empty( $arguments ) ) {
			if ( isset( $post_type[0] ) ) {
				foreach ( $post_type as $types ) {
					new self( $types );
				}
			} else {
				parent::__construct( $post_type );
				$this->init();
			}
		}

	}

	/**
	 * Returns A Proper Hook Name.
	 *
	 * @param string $post_type
	 * @param string $surfix
	 * @param string $prefix
	 * @param string $middle
	 *
	 * @return string
	 */
	protected function get_hook_name( $post_type, $surfix = 'custom_column', $prefix = 'manage_', $middle = '_posts_' ) {
		return $prefix . $post_type . $middle . $surfix;
	}

	/**
	 * Triggers An Instance.
	 */
	protected function init() {
		$this->unique = ( ! empty( $this->option( 'name' ) ) ) ? $this->option( 'name' ) : sanitize_title( $this->option( 'title' ) );
		$post_types   = $this->option( 'post_type' );
		$post_types   = ( ! wponion_is_array( $post_types ) ) ? array( $post_types ) : $post_types;
		foreach ( $post_types as $type ) {
			$this->add_filter( $this->get_hook_name( $type, 'columns' ), 'register_columns' );
			$this->add_filter( $this->get_hook_name( $type ), 'render_column', 30, 2 );
			if ( false !== $this->option( 'sortable' ) ) {
				$this->add_filter( $this->get_hook_name( $type, '_sortable_columns', 'manage_edit-', '' ), 'register_sortable_column' );
			}
		}
	}

	/**
	 * Returns Unique Slug ID.
	 *
	 * @return string
	 */
	public function uid() {
		return $this->unique();
	}

	/**
	 * Enables Sortable Columns.
	 *
	 * @param $sort_cols
	 *
	 * @return mixed
	 */
	public function register_sortable_column( $sort_cols ) {
		if ( true === $this->option( 'already_exists' ) && false === $this->option( 'force_add' ) ) {
			return $sort_cols;
		}

		if ( false !== $this->option( 'sortable' ) && true !== $this->option( 'sortable' ) ) {
			$sort_cols[ $this->unique() ] = $this->option( 'sortable' );
		}
		return $sort_cols;
	}

	/**
	 * Renders Col HTML.
	 *
	 * @param $col_name
	 * @param $post_id
	 */
	public function render_column( $col_name, $post_id ) {
		if ( true === $this->option( 'already_exists' ) && false === $this->option( 'force_add' ) ) {
			return;
		}

		$render = $this->option( 'render' );
		if ( $col_name === $this->unique() ) {
			if ( wponion_is_callable( $render ) ) {
				echo wponion_callback( $render, array( $post_id, $col_name, get_post_type( $post_id ) ) );
			} else {
				echo $render;
			}
		}
	}

	/**
	 * Creates A Custom Column.
	 *
	 * @param $data
	 *
	 * @return mixed
	 */
	public function register_columns( $data ) {
		global $typenow;

		if ( isset( $data[ $this->unique() ] ) ) {
			$this->set_option( 'already_exists', true );
		}

		if ( false !== $this->option( 'reorder' ) ) {
			if ( wponion_is_callable( $this->option( 'reorder' ) ) ) {
				$slug          = $this->unique();
				$data[ $slug ] = $this->option( 'title' );
				$data          = wponion_callback( $this->option( 'reorder' ), array( $data, $slug, $typenow ) );
			} else {
				$new = array();
				foreach ( $data as $key => $val ) {
					$new[ $key ] = $val;
					if ( $key === $this->option( 'reorder' ) ) {
						$new[ $this->unique() ] = $this->option( 'title' );
					}
				}
				$data = $new;
			}
		} else {
			$data[ $this->unique() ] = $this->option( 'title' );
		}
		return $data;
	}

	/**
	 * Returns Default Values.
	 *
	 * @return array
	 */
	protected function defaults() {
		return $this->parse_args( parent::defaults(), array(
			'post_type' => false,
			'name'      => false,
			'title'     => false,
			'reorder'   => false,
			'render'    => false,
			'sortable'  => false,
			'force_add' => false,
		) );
	}

}
