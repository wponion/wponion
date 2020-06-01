<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class WP_List_Table
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class WP_List_Table extends Field {

	private function default_class() {
		return '\WPOnion\WP\List_Table';
	}

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$this->html( '<div class="wponion-inner-wp-list-table">' );
		$settings          = $this->option( 'settings' );
		$settings          = ( ! is_array( $settings ) ) ? array() : $settings;
		$settings['field'] = &$this;

		$class = $this->option( 'list_table_class', $this->default_class() );
		$class = ( ! class_exists( $class ) ) ? $this->default_class() : $class;
		wponion_catch_output();
		$instance = new $class( $settings, $this->option( 'data' ) );
		$instance->prepare_items();
		$instance->views();
		$instance->search_box( __( 'Search', 'wponion' ), 'search' );
		$instance->display();
		$this->html( wponion_catch_output( false ) )->html( '</div>' );
		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * Returns Fields.
	 *
	 * @return bool|array|\WPO\Builder|\WPO\Field|\WPO\Container
	 */
	public function fields() {
		return $this->option( 'fields' );
	}

	/**
	 * @param      $field
	 * @param      $value
	 * @param      $unqiue
	 * @param bool $is_init
	 *
	 * @return mixed
	 */
	public function sub_field( $field, $value, $unqiue, $is_init = false ) {
		return parent::sub_field( $field, $value, $unqiue, $is_init );
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'settings'         => array(),
			'data'             => array(),
			'query_args'       => array(),
			'list_table_class' => $this->default_class(),
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}
}
