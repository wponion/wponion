<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;
use WPOnion\Icons;

defined( 'ABSPATH' ) || exit;

/**
 * Class Icon_Picker
 *
 * @package WPOnion\Ajax
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Icon_Picker extends Ajax {
	protected $validate_field_path = false;
	protected $validate_module     = false;

	/**
	 * Returns A List of enabled icons.
	 *
	 * @param array $libs
	 *
	 * @return mixed
	 */
	protected function enabled_icons( $libs ) {
		$enabled = $this->request( 'enabled', true );
		if ( wponion_is_bool_val( $enabled ) ) {
			return $libs;
		}
		$enabled = ( ! is_array( $enabled ) ) ? array( $enabled ) : $enabled;
		if ( wponion_is_array( $enabled ) ) {
			foreach ( $libs as $name => $_n ) {
				if ( ! in_array( $name, $enabled, true ) ) {
					unset( $libs[ $name ] );
				}
			}
		}
		return $libs;
	}

	/**
	 * Returns A List of disabled icons.
	 *
	 * @param array $libs
	 *
	 * @return array
	 */
	protected function disabled_icons( $libs ) {
		$disabled = $this->request( 'disabled', true );
		if ( is_string( $disabled ) ) {
			$disabled = array( $disabled );
		}

		if ( wponion_is_array( $disabled ) && wponion_is_array( $libs ) ) {
			foreach ( $libs as $name => $_n ) {
				if ( in_array( $name, $disabled, true ) ) {
					unset( $libs[ $name ] );
				}
			}
		}
		return $libs;
	}

	/**
	 * Generates Picker Header.
	 *
	 * @param $libs
	 * @param $selected_lib
	 *
	 * @return string
	 */
	protected function picker_header( $libs, $selected_lib ) {
		$html = '<div class="wponion-icon-picker-model-header"> <input type="text" placeholder="' . __( 'Search Icon', 'wponion' ) . '"/>';
		if ( wponion_is_array( $libs ) && count( $libs ) > 1 ) {
			$select = wpo_field( 'select' )->options( $libs )->only_field( true );
			$html   .= $select->render( $selected_lib );
		}
		$html .= '</div>';
		return $html;
	}

	/**
	 * Generates Group.
	 *
	 * @param $title
	 * @param $icons
	 *
	 * @return string
	 */
	protected function create_group( $title, $icons ) {
		/* @var \WPO\Fields\Accordion $acc */
		$acc = wpo_field( 'accordion', sanitize_title( $title ) )->open();
		$acc->heading( $title );
		$acc->content( $icons );
		return $acc->render( false, false );
	}

	/**
	 * Runs Ajax Request.
	 */
	public function run() {
		wponion_timer( 'icon_render' );
		$libs = $this->disabled_icons( $this->enabled_icons( Icons::icon_list() ) );
		$libs = ( ! wponion_is_array( $libs ) ) ? array() : $libs;

		if ( empty( $libs ) ) {
			$this->error( __( 'Icon Library Not found', 'wponion' ) );
		}

		$group_icons   = $this->request( 'group_icons', false );
		$default_lib   = wponion_is_array( $libs ) ? current( array_keys( $libs ) ) : $libs;
		$is_first_load = $this->request( 'first_load', false );
		$selected_lib  = $this->request( 'wponion-icon-lib', $default_lib );
		$selected_lib  = ( ! isset( $libs[ $selected_lib ] ) ) ? $default_lib : $selected_lib;
		$json          = Icons::get( $selected_lib );
		if ( ! wponion_is_array( $json->icons() ) || empty( $json->icons() ) ) {
			$this->error( __( 'Icon Library Not found', 'wponion' ) );
		}
		$this->add_assets = $json->assets( false );
		$html             = '';

		if ( 'no' !== $is_first_load ) {
			$html .= $this->picker_header( $libs, $selected_lib );
			$html .= '<div class="wponion-icon-picker-container-scroll">';
		}

		$html .= '<div id="' . $selected_lib . '" class="wponion-icon-framework"><div class="wponion-icon-picker-container">';

		foreach ( $json->icons() as $key => $data ) {
			/**
			 * Simple Icon Layouts
			 *
			 * @example Array Layout 1 : array(
			 *    array( 'css' => 'ico icon-gear', 'title' => 'Title' )
			 *    array( 'css' => 'ico icon-gear2', 'title' => 'Title2' )
			 * )
			 *
			 * @example Array Layout 2 : array( 'icon icon-gear', 'icon icon-gear-2' )
			 *
			 * @example Array Layout 3 : array(
			 *    'ico icon-gear'   => array( 'title' => 'Title', 'terms' => 'Search1 Search2' )
			 *    'ico icon-gear-2' => array( 'title' => 'Title2', 'terms' => 'Search1 Search2' )
			 * )
			 *
			 * @example Array Layout 4 : array(
			 *    'ico icon-gear' => 'Icon Title',
			 *    'ico icon-gear-2' => 'Icon Title2',
			 * )
			 *
			 * Group Icon Layouts
			 *
			 * @example Group Array Layout 1 : array(
			 *    "Group1"=>array('icon icon-gear','icon icon-gear2'),
			 * );
			 *
			 * Group Icons Layout 2 : all the above options except group layout 1
			 */
			$html .= $this->loop_icons( $key, $data, $group_icons );
		}

		$html .= '</div></div>';
		$html .= ( 'no' !== $is_first_load ) ? '</div>' : '';
		$this->json_success( array(
			'html'  => $html,
			'timer' => wponion_timer( 'icon_render', true ),
		) );
	}

	/**
	 * Loops Each Icon Framework and regenerates HTML.
	 *
	 * @param string|int   $key
	 * @param string|array $data
	 * @param bool         $is_group
	 *
	 * @return string
	 */
	protected function loop_icons( $key, $data, $is_group = false ) {
		$key_num    = ( is_numeric( $key ) );
		$key_string = ( is_string( $key ) );

		// Simple Array Layout 1
		if ( $key_num && ( wponion_is_array( $data ) && isset( $data['css'] ) ) ) {
			return $this->single_icon_html( $data );
		}

		// Simple Array Layout 2
		if ( $key_num && ( ( wponion_is_array( $data ) && isset( $data['css'] ) ) || is_string( $data ) ) ) {
			return $this->single_icon_html( $data );
		}

		// Simple Array Layout 3
		if ( $key_string && wponion_is_array( $data ) && ( isset( $data['title'] ) || isset( $data['terms'] ) ) ) {
			$data['css'] = $key;
			return $this->single_icon_html( $data );
		}

		// Simple Array Layout 4
		if ( $key_string && is_string( $data ) ) {
			return $this->single_icon_html( array(
				'css'   => $key,
				'title' => $data,
			) );
		}

		// Group Array Layout 1
		if ( $key_string && wponion_is_array( $data ) && isset( $data[0] ) ) {
			$r = '';
			foreach ( $data as $icon ) {
				$r .= $this->single_icon_html( $icon );
			}

			return ( true === $is_group ) ? $this->create_group( $key, $r ) : $r;
		}

		// Group Array Layout 2
		if ( $key_string && wponion_is_array( $data ) && ! isset( $data[0] ) ) {
			$r = '';
			foreach ( $data as $_key => $icon ) {
				$r .= $this->loop_icons( $_key, $icon, $is_group );
			}
			return ( true === $is_group ) ? $this->create_group( $key, $r ) : $r;
		}
		return '';
	}

	/**
	 * Generates Single Icon's HTML.
	 *
	 * @param $icon
	 *
	 * @return string
	 */
	protected function single_icon_html( $icon ) {
		$icon      = wponion_parse_args_forced_values( 'css', $icon, Icons::icon_defaults() );
		$title     = ( empty( $icon['title'] ) ) ? $icon['css'] : $icon['title'];
		$search    = ( is_string( $icon['terms'] ) ) ? explode( ',', $icon['terms'] ) : $icon['terms'];
		$search    = ( is_array( $icon['terms'] ) ) ? implode( ' ', $search ) : $search;
		$icon_html = wponion_icon( $icon['css'] );
		return <<<HTML
<div class="wponion-icon-preview-wrap">
	<span data-icon="{$icon['css']}" title="$title" class="wponion-icon-preview">$icon_html</span>
	<span class="hidden wpo-icon-terms" style="display: none !important; visibility: hidden !important;">{$icon['css']} $search</span>
 </div>
HTML;
	}
}
