<?php

namespace WPOnion\Bridge\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Utilites
 *
 * @package WPOnion\Bridge\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Utilites extends Submodules {
	/**
	 * Generates Badge HTML.
	 *
	 * @return string
	 */
	protected function badge() {
		$html   = '';
		$badges = $this->option( 'badge' );
		if ( false !== $badges ) {
			$badges = ( ( is_string( $badges ) || is_array( $badges ) && ! isset( $badges[0] ) ) ) ? array( $badges ) : $badges;
			foreach ( $badges as $badge ) {
				$badge     = $this->handle_args( 'content', $badge, array(
					'type'      => 'success',
					'placement' => 'top-left',
					'content'   => null,
					'pointer'   => false,
					'outline'   => false,
				) );
				$container = 'wpo-badge-container wpo-badge-' . $badge['placement'] . ' wpo-badge-type-' . $badge['type'];
				$class     = 'wpo-badge';
				$class     .= ( true === $badge['outline'] ) ? ' wpo-badge-outline wpo-badge-outline-' . $badge['type'] . ' ' : ' wpo-badge-' . $badge['type'] . ' ';
				$class     .= ( true === $badge['pointer'] ) ? ' wpo-badge-pill ' : '';
				$html      .= "<div class=\"${container}\"> <div class=\"${class}\"> ${badge['content']} </div> </div>";
			}
		}
		return $html;
	}

	/**
	 * Returns Default Column CSS Class based on the modules or it returns defaults.
	 *
	 * @return array
	 * @uses \apply_filters('wponion_field_column_css_class')
	 */
	protected function default_column_class() {
		$return = array(
			'title'    => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-4 wpo-col-lg-4 wpo-col-xl-3',
			'fieldset' => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-8 wpo-col-lg-8 wpo-col-xl-9',
		);
		switch ( $this->module() ) {
			case 'user_profile':
				$return = array(
					'title'    => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-12 wpo-col-lg-2 wpo-col-xl-2',
					'fieldset' => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-12 wpo-col-lg-10 wpo-col-xl-10',
				);
				break;
			case 'taxonomy':
				$return = array(
					'title'    => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3 wpo-col-lg-3 wpo-col-xl-3',
					'fieldset' => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-9 wpo-col-lg-9 wpo-col-xl-9',
				);
				break;
			case 'metabox':
				$screen = get_current_screen();
				if ( $screen && in_array( $screen->base, array( 'term', 'edit-tags' ), true ) ) {
					$return = array(
						'title'    => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-4 wpo-col-lg-4 wpo-col-xl-4',
						'fieldset' => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-8 wpo-col-lg-8 wpo-col-xl-8',
					);
				}
				break;
		}

		if ( false === $this->has( 'title' ) || true === $this->option( 'hide_title' ) ) {
			$return['fieldset'] = 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-12 wpo-col-lg-12 wpo-col-xl-12';
		}
		return apply_filters( 'wponion/default/field/column/css_class', $return, $this->module(), $this );
	}

	/**
	 * Validates Column Data.
	 */
	protected function _validate_column_css() {
		$title    = $this->option( 'title_column' );
		$fieldset = $this->option( 'fieldset_column' );

		if ( false === $title && false === $fieldset ) {
			$defaults = $this->default_column_class();
			$this->set_option( 'title_column', $defaults['title'] );
			$this->set_option( 'fieldset_column', $defaults['fieldset'] );
		} else {
			if ( false !== $title && false === $fieldset ) {
				$new_class = wponion_get_possible_column_class( wponion_has_column_class( $title ) );
				if ( ! empty( $new_class ) ) {
					$this->set_option( 'fieldset_column', $new_class );
				}
			}

			if ( false === $title && false !== $fieldset ) {
				$new_class = wponion_get_possible_column_class( wponion_has_column_class( $fieldset ) );
				if ( ! empty( $new_class ) ) {
					$this->set_option( 'title_column', $new_class );
				}
			}
		}
	}

	/**
	 * Check if value is === to given value and returns an html output.
	 *
	 * @param string|array $values All Avaiable Field Values.
	 * @param string       $value Current Field Value
	 * @param string       $type
	 *
	 * @return string
	 */
	protected function checked( $values = '', $value = '', $type = 'checked' ) {
		return ( ( wponion_is_array( $values ) && in_array( $value, $values ) ) || ( wponion_is_bool_val( $values ) === wponion_is_bool_val( $value ) ) ) ? "${type}=\"${type}\"" : '';
	}

	/**
	 * @param array $main_data
	 * @param array $extra_args
	 * @param bool  $localize
	 *
	 * @return array
	 */
	protected function tooltip_data( $main_data = array(), $extra_args = array(), $localize = true ) {
		return wponion_tooltip( wponion_parse_args_mixed( 'content', $main_data, $this->parse_args( $extra_args, array(
			'content'     => false,
			'allowHTML'   => true,
			'js_field_id' => $this->js_field_id(),
		) ) ), false, false, $localize );
	}
}
