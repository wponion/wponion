<?php

namespace WPOnion\libraries;

defined( 'ABSPATH' ) || exit;

/**
 * Class CSS_Parser
 *
 * @package WPOnion\libraries
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class CSS_Parser {
	/**
	 * @param string      $input Nested CSS Code.
	 * @param string|bool $global_id Global Elemnt ID to wrap everything under it.
	 *
	 * @return string
	 */
	public static function parse( $input, $global_id = false ) {
		$input         = preg_replace( '/(^\s*|\s*$)/m', '', $input );
		$input         = preg_replace( '/\/\*(.*)\*\//Uis', '', $input );
		$input         = preg_replace( '/\,\n/m', ',', $input );
		$input         = preg_replace( '/([^\{\}\s\;])$/m', '$1;', $input );
		$input         = str_replace( ';', ';' . PHP_EOL, $input );
		$input         = str_replace( '}', PHP_EOL . '}' . PHP_EOL, $input );
		$input         = str_replace( '{', '{' . PHP_EOL, $input );
		$ret           = [];
		$block         = [];
		$nest_level    = 0;
		$selector_name = '';
		$input         = explode( "\n", $input );

		foreach ( $input as $line ) {
			$line = trim( $line );
			if ( '{' === substr( $line, -1 ) ) {
				$selector_name = trim( rtrim( $line, '{' ) );
				$nest_level++;
				$block[ $nest_level . $selector_name ]['name']       = $selector_name;
				$block[ $nest_level . $selector_name ]['nest_level'] = $nest_level;
			} elseif ( '}' === substr( $line, -1 ) ) {
				$nest_level--;
				continue;
			}

			if ( 0 === $nest_level ) {
				$ret[] = self::block_to_css( $block, $global_id );
				$block = [];
			}

			if ( ';' === substr( $line, -1 ) ) {
				$uid = $nest_level . $selector_name;
				if ( isset( $block[ $uid ]['css'] ) ) {
					$block[ $uid ]['css'] .= $line;
				} else {
					$block[ $uid ]['css'] = $line;
				}
			}
		}

		return implode( PHP_EOL, $ret );
	}

	/**
	 * @param array       $block
	 * @param string|bool $global_id Global Elemnt ID to wrap everything under it.
	 *
	 * @return string
	 */
	protected static function block_to_css( $block, $global_id ) {
		$css = array();
		if ( is_array( $block ) ) {
			foreach ( $block as $selector ) {
				if ( isset( $selector['css'] ) ) {
					$level           = ( isset( $selector['nest_level'] ) ) ? $selector['nest_level'] : 0;
					$parent_selector = self::parent_selectors( $block, $level, $global_id );
					$local_selector  = isset( $selector['name'] ) ? $selector['name'] : '';
					$local_selector  .= ' { ' . $selector['css'] . ' }';
					$css[]           = ( ! empty( $parent_selector ) ) ? $parent_selector . $local_selector : $local_selector;
				}
			}
		}
		return implode( PHP_EOL, $css );
	}

	/**
	 * @param      $block
	 * @param      $nest_level
	 * @param bool $global_id Global Elemnt ID to wrap everything under it.
	 *
	 * @return string
	 */
	protected static function parent_selectors( $block, $nest_level, $global_id ) {
		$all_parents = array( $global_id );
		foreach ( $block as $selector ) {
			if ( isset( $selector['nest_level'] ) && $selector['nest_level'] < $nest_level ) {
				$all_parents[] = $selector['name'];
			}
		}
		return implode( ' ', $all_parents ) . ' ';
	}
}
