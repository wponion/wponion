<?php

namespace WPOnion;

defined( 'ABSPATH' ) || exit;

/**
 * Class Shortcodes
 *
 * @package WPOnion
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Shortcodes extends Bridge {
	/**
	 * @var array
	 */
	protected static $shortcodes = array();

	/**
	 * Shortcodes constructor.
	 */
	public function __construct() {
		self::$shortcodes['wpo_tooltip'] = array( &$this, 'tooltip' );
		self::$shortcodes['logic']       = array( &$this, 'wp_if_condition' );
		self::$shortcodes['logic_1']     = array( &$this, 'wp_if_condition' );
		self::$shortcodes['logic_2']     = array( &$this, 'wp_if_condition' );
		self::$shortcodes['logic_3']     = array( &$this, 'wp_if_condition' );
		self::$shortcodes['wp_logic']    = array( &$this, 'wp_if_condition' );
		self::$shortcodes['wpo_logic']   = array( &$this, 'wp_if_condition' );

		foreach ( self::$shortcodes as $code => $callback ) {
			if ( ! shortcode_exists( $code ) ) {
				add_shortcode( $code, $callback );
			}
		}
	}

	/**
	 * Generates WPOnion ToolTip Via Shortcode
	 *
	 * @param $args
	 * @param $content
	 *
	 * @return array|string
	 */
	public function tooltip( $args, $content ) {
		$args = empty( $args ) ? array() : $args;
		$args = shortcode_atts( array(
			'content' => false,
			'theme'   => false,
		), $args, 'wpo_tooltip' );
		if ( isset( $args['content'] ) ) {
			$args['element'] = '<span>' . $content . '</span>';
			return wponion_tooltip( $args );
		}
		return $content;
	}

	/**
	 * Generates WPOnion if Condition Shortcode.
	 *
	 * @param $args
	 * @param $content
	 *
	 * @return string
	 */
	public function wp_if_condition( $args, $content ) {
		$args = shortcode_atts( array(
			'rule'      => false,
			'value'     => null,
			'condition' => 'and',
			'compare'   => '=',
			'extra'     => '',
			'seperator' => '|',
		), $args, 'wp-logic' );

		$new_rules = array();

		if ( ! empty( $args['rule'] ) ) {
			$args['rule']    = explode( $args['seperator'], $args['rule'] );
			$args['value']   = explode( $args['seperator'], $args['value'] );
			$args['compare'] = explode( $args['seperator'], $args['compare'] );
			$args['extra']   = explode( $args['seperator'], $args['extra'] );
			foreach ( $args['rule'] as $i => $rule ) {
				$new_rules[] = array(
					'rule'    => $rule,
					'compare' => isset( $args['compare'][ $i ] ) ? $args['compare'][ $i ] : '=',
					'extra'   => isset( $args['extra'][ $i ] ) ? $args['extra'][ $i ] : null,
					'value'   => isset( $args['value'][ $i ] ) ? wponion_is_bool_val( $args['value'][ $i ] ) : null,
				);
			}
		}

		if ( ! empty( $new_rules ) ) {
			$builder = wp_conditional_logic_builder( $args['condition'] );
			foreach ( $new_rules as $rule ) {
				$builder->rule( $rule['rule'], $rule['value'], $rule['compare'], $rule['extra'] );
			}
			return ( $builder->run() ) ? do_shortcode( $content, true ) : '';
		}
		return do_shortcode( $content, true );
	}
}

return new Shortcodes;
