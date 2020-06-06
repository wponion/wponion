<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class group
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Group extends Accordion {
	/**
	 * loop_count
	 *
	 * @var string
	 */
	protected $loop_count = '{wponionCloneID}';

	/**
	 * is_js_sample
	 *
	 * @var bool
	 */
	protected $is_js_sample = false;

	/**
	 * loop_value
	 *
	 * @var array
	 */
	protected $loop_value = array();

	/**
	 * loop_value
	 *
	 * @var array
	 */
	protected $sub_fields_ids = false;


	/**
	 * Renders Single Field HTML.
	 *
	 * @param $field
	 *
	 * @return string
	 */
	protected function render_single_field( $field ) {
		$value = ( false === $this->is_js_sample ) ? wponion_get_field_value( $field, $this->loop_value ) : null;

		if ( 'wp_editor' === $field['type'] ) {
			$field['render_js_template'] = true;
			$field['in_group']           = true;
			$field['group_count']        = is_numeric( $this->loop_count ) ? $this->loop_count : '';
		}

		return $this->sub_field( $field, $value, $this->name( $this->loop_count ), false );
	}

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$this->get_first_field();
		$this->loop_count = 0;
		$default_title    = $this->option( 'heading' );
		$count            = ( empty( $this->value ) ) ? 0 : count( $this->value );

		$this->html( '<div class="wponion-group-wrap" data-wponion-clone-count="' . $count . '">' );
		if ( wponion_is_array( $this->value ) ) {
			$this->value = array_filter( $this->value );
			foreach ( $this->value as $i => $value ) {
				$this->loop_count = $this->loop_count + 1;
				$this->loop_value = $value;
				$this->set_option( 'heading', $this->get_accordion_title( $value, $default_title ) );
				$this->html( $this->render_fields() );
			}
		}
		$this->html( '</div>' );

		$this->html( $this->sub_field( $this->handle_args( 'label', $this->option( 'add_button' ), array(
			'class'       => array( 'button button-primary' ),
			'type'        => 'button',
			'attributes'  => array(
				'data-wponion-jsid'      => $this->js_field_id(),
				'data-wponion-group-add' => 'yes',
			),
			'only_field'  => true,
			'button_type' => 'button',
			'label'       => __( 'Add New', 'wponion' ),
		) ), false, $this->unique() ) );

		$this->is_js_sample = true;
		$this->loop_value   = array();
		$this->loop_count   = '{wponionCloneID}';
		$this->set_option( 'heading', $default_title );
		$template           = $this->render_fields();
		$this->is_js_sample = false;
		$this->localize_field( array( 'group_template' => $template ) );
		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * After Accordion Callback
	 *
	 * @return string
	 */
	protected function after_accordion() {
		$return = '<div class="wponion-group-action wpo-col-xs-12">';
		$return .= $this->sub_field( $this->handle_args( 'label', $this->option( 'remove_button' ), array(
			'class'       => array( 'button button-secondary' ),
			'type'        => 'button',
			'attributes'  => array( 'data-wponion-jsid' => $this->js_field_id() ),
			'only_field'  => true,
			'button_type' => 'button',
			'label'       => sprintf( 'Remove %s', wpo_icon( 'wpoic-delete' ) ),
		) ), false, $this->unique() );
		$return .= '</div>';
		return $return;
	}

	/**
	 * Returns all required values to use in js.
	 *
	 * @return array
	 */
	protected function js_args() {
		$error_notice = $this->handle_args( 'content', $this->option( 'error_msg' ), array(
			'type' => 'notice_danger',
		), array( 'only_field' => true ) );

		return array(
			'default_heading'        => __( 'Group #[count]', 'wponion' ),
			'heading_counter'        => strpos( $this->option( 'heading' ), '[count]' ),
			'heading'                => $this->option( 'heading' ),
			'limit'                  => $this->option( 'limit' ),
			'error_msg'              => wponion_add_element( $error_notice, false, false ),
			'remove_button_title'    => $this->option( 'remove_button_title' ),
			'matched_heading_fields' => $this->get_accordion_title( array(), $this->option( 'heading' ), true ),
		);
	}

	/**
	 * Validates And Returns A Accordion Title.
	 *
	 * @param      $value
	 * @param      $default
	 * @param bool $is_fields
	 *
	 * @return array|mixed
	 */
	protected function get_accordion_title( $value, $default, $is_fields = false ) {
		$accordion_title = ( true === $is_fields ) ? array() : $default;
		$fields_ids      = $this->get_first_field();

		foreach ( $fields_ids as $id => $val ) {
			if ( $is_fields ) {
				$is_matched = preg_match( '/\b(' . $id . ')\b/', $default );
				if ( $is_matched ) {
					$accordion_title[] = $id;
				}
			} else {
				if ( isset( $value[ $id ] ) && is_string( $value[ $id ] ) && is_string( $accordion_title ) ) {
					$is_matched = preg_match( '/\b(' . $id . ')\b/', $accordion_title );
					if ( $is_matched ) {
						$accordion_title = str_replace( $id, $value[ $id ], $accordion_title );
					}
				}
			}
		}

		if ( ! wponion_is_array( $accordion_title ) ) {
			if ( false !== strpos( $accordion_title, '[count]' ) ) {
				$accordion_title = str_replace( '[count]', $this->loop_count, $accordion_title );
			}
		}

		return $accordion_title;
	}

	/**
	 * Gets All First Level Field IDS.
	 *
	 * @return array|bool
	 */
	protected function get_first_field() {
		if ( false === $this->sub_fields_ids ) {
			$this->sub_fields_ids = wponion_extract_all_fields_ids_defaults( $this->option( 'fields' ), false );
		}
		return $this->sub_fields_ids;
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
		return $this->parse_args( array(
			// translators: 1. Added Icon.
			'add_button'    => sprintf( __( 'Add New %s', 'wponion' ), wpo_icon( 'wpoic-plus-circle' ) ),
			// translators: 1. Remove Icon
			'remove_button' => sprintf( 'Remove %s', wpo_icon( 'wpoic-delete' ) ),
			'limit'         => false,
			'heading'       => false,
			'error_msg'     => __( 'You Can\'t Add More..', 'wponion' ),
		), parent::defaults() );
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
		wp_enqueue_script( 'jquery-ui-sortable' );
		parent::assets();
	}
}
