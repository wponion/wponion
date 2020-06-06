<?php

namespace WPOnion\Modules\Admin;

use WPOnion\Bridge\Module_Utility;

/**
 * Class Row_Actions
 *
 * @package WPOnion\Modules\Admin
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.5
 */
class Row_Actions extends Module_Utility {
	/**
	 * Inits.
	 */
	protected function init() {
		$hook = false;
		$type = $this->option( 'type' );

		if ( 'sites' === $type ) {
			$hook = 'manage_sites_action_links';
		} else {
			$hook = $type . '_row_actions';
		}

		$this->add_filter( $hook, 'register_row_actions', $this->option( 'priority' ), 99 );
	}

	/**
	 * @param $type
	 * @param $array_object
	 *
	 * @return bool|int|mixed|string
	 * @since 1.5
	 */
	protected function links_data( $type, $array_object ) {
		$key  = "links/${type}";
		$data = $this->option( $key );
		if ( ! empty( $data ) ) {
			foreach ( $data as $key => $value ) {
				$tags = wponion_extract_template_tags( $value );
				if ( ! empty( $tags ) ) {
					foreach ( $tags as $tag ) {
						if ( isset( $tag[1] ) && ! empty( $tag[1] ) ) {
							$val = wponion_extract_data_from_array_object( $array_object, $tag[1] );
							if ( false !== $val ) {
								$data[ $key ] = str_replace( $tag[0], $val, $data[ $key ] );
							}
						}
					}
				}
			}
		}
		return $data;
	}

	/**
	 * Registers Row Actions.
	 *
	 * @param $row_actions
	 * @param $array_object
	 *
	 * @return mixed
	 * @since 1.5
	 */
	public function register_row_actions( $row_actions, $array_object ) {
		return wponion_array_merge( $row_actions, $this->links_data( 'before', $array_object ), $this->links_data( 'center', $array_object ), $this->links_data( 'after', $array_object ) );
	}

	/**
	 * Returns An Valid Element.
	 *
	 * @param      $element_or_title
	 * @param bool $href
	 *
	 * @return string
	 */
	protected function element( $element_or_title, $href = false ) {
		return ( ! empty( $element_or_title ) && empty( $href ) ) ? $element_or_title : sprintf( '<a href="%1$s">%2$s</a>', esc_attr( $href ), $element_or_title );
	}

	/**
	 * @param string      $slug
	 * @param string      $element_or_title
	 * @param string|bool $href
	 *
	 * @return $this
	 */
	public function link( $slug, $element_or_title, $href = false ) {
		return $this->set_option( "links/center/${slug}", $this->element( $element_or_title, $href ) );
	}

	/**
	 * @param string      $slug
	 * @param string      $element_or_title
	 * @param string|bool $href
	 *
	 * @return $this
	 */
	public function link_before( $slug, $element_or_title, $href = false ) {
		return $this->set_option( "links/before/${slug}", $this->element( $element_or_title, $href ) );
	}

	/**
	 * @param string      $slug
	 * @param string      $element_or_title
	 * @param string|bool $href
	 *
	 * @return $this
	 */
	public function link_after( $slug, $element_or_title, $href = false ) {
		return $this->set_option( "links/after/${slug}", $this->element( $element_or_title, $href ) );
	}

	/**
	 * Returns Default Values.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'type'     => '', // It can be a hook / built in type
			'hook'     => false,
			'priority' => 20,
		);
	}
}
