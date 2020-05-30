<?php

namespace WPOnion\Modules\Admin\Edits;

use WPOnion\Bridge\Module;
use WPOnion\DB\Save_Handler\Base as Save_Handler;

defined( 'ABSPATH' ) || exit;

/**
 * Class Quick
 *
 * @package WPOnion\Modules\Admin\Edits
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Quick extends Module {
	/**
	 * module
	 *
	 * @var string
	 */
	protected $module = 'quick_edit';

	/**
	 * Returns A Proper Hook Name.
	 *
	 * @param        $post_type
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
	 * Handles On Init.
	 *
	 * @return mixed|void
	 */
	protected function on_init() {
		if ( wponion_is_array( $this->option( 'column' ) ) ) {
			$col = $this->option( 'column' );
			if ( ! isset( $col['post_type'] ) ) {
				$col['post_type'] = $this->option( 'post_type' );
			}
			$instance = wponion_admin_columns( $col );
			$this->set_option( 'column', $instance->unique() );
		}

		if ( false !== $this->option( 'post_type' ) && ! wponion_is_array( $this->option( 'post_type' ) ) ) {
			$this->set_option( 'post_type', array( $this->option( 'post_type' ) ) );
		}

		if ( wponion_is_array( $this->option( 'post_type' ) ) ) {
			foreach ( $this->option( 'post_type' ) as $post_type ) {
				$this->add_filter( $this->get_hook_name( $post_type ), 'render_hidden_data', 31, 2 );
			}
		}

		$render_hook = ( 'quick_edit' === $this->module() ) ? 'quick_edit_custom_box' : 'bulk_edit_custom_box';
		$save_hook   = ( 'quick_edit' === $this->module() ) ? 'save_post' : 'wponion/bulk_edit/save';
		$this->add_action( $render_hook, 'render_quick_edit' );
		$this->add_action( $save_hook, 'save_data' );
	}

	/**
	 * Saves Data in DB.
	 *
	 * @param $post_id
	 */
	public function save_data( $post_id ) {
		if ( ( isset( $_POST['action'] ) && 'inline-save' === $_POST['action'] ) || 'bulk_edit' === $this->module() ) {
			if ( isset( $_POST[ $this->unique ] ) ) {
				$this->db_values = $this->get_values( $post_id );
				$instance        = new Save_Handler( array(
					'module'       => &$this,
					'unique'       => $this->unique(),
					'fields'       => $this->fields(),
					'user_values'  => $_POST[ $this->unique ],
					'retain_value' => true,
					'db_values'    => $this->db_values,
				) );
				$instance->run();
				$this->db_values = $instance->get_values();
				if ( false === $this->option( 'save' ) ) {
					update_post_meta( $post_id, $this->unique(), $this->db_values );
				} elseif ( wponion_is_callable( $this->option( 'save' ) ) ) {
					wponion_callback( $this->option( 'save' ), array( $this->db_values, $post_id ) );
				}
			}
		}
	}

	/**
	 * Renders Quick Edit.
	 *
	 * @param $column
	 */
	public function render_quick_edit( $column ) {
		$this->db_values = array();
		if ( $column === $this->option( 'column' ) ) {
			wponion_load_core_assets();
			$this->render_quick_edit_html();
		}
	}

	/**
	 * Renders Quick Edit HTML for each row.
	 */
	protected function render_quick_edit_html() {
		echo '<fieldset class="wponion-quick-edit-fieldset ' . $this->option( 'wrap_class' ) . '">';
		echo '<div ' . $this->wrap_attributes( '', array( 'data-wpo-quick-edit-id' => $this->unique ) ) . '>';
		/* @var $field \WPO\Field */
		foreach ( $this->fields()->fields() as $field ) {
			$field['__no_instance'] = true;
			echo $this->render_field( $field );
		}
		echo '</div>';
		echo '</fieldset>';
	}

	/**
	 * Retrives Values And Return's It.
	 *
	 * @param $post_id
	 *
	 * @return array
	 */
	public function get_values( $post_id ) {
		$_values = $this->option( 'values' );
		if ( false === $_values ) {
			$values = get_post_meta( $post_id, $this->unique, true );
		} elseif ( wponion_is_callable( $_values ) ) {
			$values = wponion_callback( $_values, array( $post_id, get_post_type( $post_id ) ) );
		} else {
			$values = $_values;
		}
		$values = ( empty( $values ) ) ? array() : $values;
		return $values;
	}

	/**
	 * Generate Quick Edit Values.
	 *
	 * @param $column
	 * @param $id
	 */
	public function render_hidden_data( $column, $id ) {
		if ( $column === $this->option( 'column' ) ) {
			$this->db_values = $this->get_values( $id );
			wponion_catch_output();
			echo $this->render_quick_edit_html();
			$html = wponion_catch_output( false );

			wponion_localize()->add( $this->unique . '_' . $id, array(
				'html'   => $html,
				'values' => $this->db_values,
			) );

			$this->db_values = array();

			if ( defined( 'DOING_AJAX' ) && true === DOING_AJAX ) {
				wponion_localize()->render_css_js_args();
			}
		}
	}

	/**
	 * @return array
	 */
	protected function defaults() {
		return $this->parse_args( array(
			'post_type'  => false,
			'column'     => false,
			'values'     => false,
			'save'       => false,
			'wrap_class' => '',
		), parent::defaults() );
	}
}
