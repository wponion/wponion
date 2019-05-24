<?php
/**
 *
 * Initial version created 18-05-2018 / 06:26 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Shortcodes' ) ) {
	/**
	 * Class Shortcodes
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Shortcodes extends Bridge {
		/**
		 * Shortcodes constructor.
		 */
		public function __construct() {
			add_shortcode( 'wpo_tooltip', array( &$this, 'tooltip' ) );
			add_shortcode( 'logic', array( &$this, 'wp_if_condition' ) );
			add_shortcode( 'wp_logic', array( &$this, 'wp_if_condition' ) );
			add_shortcode( 'wpo_logic', array( &$this, 'wp_if_condition' ) );
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
			if ( isset( $args['content'] ) ) {
				$args['element'] = '<span>' . $content . '</span>';
				return wponion_tooltip( $args, );
			}
			return $content;
		}

		/**
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
						'value'   => isset( $args['value'][ $i ] ) ? wponion_validate_bool_val( $args['value'][ $i ] ) : null,
					);
				}
			}
			var_dump( $content );
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
}
return new Shortcodes;
