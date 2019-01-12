/* global wponion_init_field:true */
import WPOnion_Field from '../../core/field';

const base64_encode = require( 'vsp-js-helper/index' ).base64_encode;
const rawurlencode  = require( 'vsp-js-helper/index' ).rawurlencode;

/**
 * Custom VC Abstract Field Class.
 */
export default class extends WPOnion_Field {
	/**
	 *
	 * @param $selector
	 * @param $context
	 * @param $config
	 */
	constructor( $selector, $context, $config = {} ) {
		super( $selector, $context, $config );
	}

	/**
	 * Returns Visual Composer Param name.
	 * @returns {*}
	 */
	get param_name() {
		return this.element.data( 'param-name' );
	}

	/**
	 * Checks And Converts Value To Save into VC.
	 * @param $save_data
	 * @param $type
	 */
	save( $save_data, $type ) {
		if( $save_data === null ) {
			return;
		}

		let $value = '';

		if( $save_data !== '' ) {
			if( typeof $save_data === 'object' && $type === 'array' ) {
				$value = this.simple_array( $save_data );
			} else if( typeof $save_data === 'object' && $type === 'key_value_array' ) {
				$value = this.key_value_array( $save_data );
			} else if( typeof $save_data === 'object' && $type === 'key_value_multi_array' ) {
				$value = this.key_value_multi_array( $save_data );
			} else if( typeof $save_data === 'object' && $type === 'sorter_values' ) {
				$value = this.sorter_values( $save_data );
			}
		}
		this.vc_save( $value );
	}

	/**
	 * Saves Given Value To Visual Composer.
	 * @param $param_name
	 * @param $value
	 * @returns {boolean}
	 */
	vc_save( $value, $param_name = this.param_name ) {
		let $key = 'div#wponion-vc-settings';
		if( this.element.find( $key ).length === 0 ) {
			this.element.append( '<div id="wponion-vc-settings" class="hidden" style="display: none;visibility: hidden;" ></div>' );
		}

		if( this.element.find( $key ).length === 1 ) {
			let $parent = this.element.find( $key );
			if( $parent.find( '> #' + $param_name + '.wpb_vc_param_value' ).length === 0 ) {
				$parent.append( jQuery( '<input type="hidden" value="" id="' + $param_name + '" name="' + $param_name + '" class="wpb_vc_param_value" />' ) );
			}

			$parent.find( '> #' + $param_name + '.wpb_vc_param_value' ).val( $value );
			return true;
		}
		return false;
	}

	/**
	 * Converts An Array Into String Using ,
	 * @param $save_data
	 * @returns {*}
	 */
	simple_array( $save_data ) {
		return $save_data.join( ',' );
	}

	/**
	 * Converts An Array Into Keyvalue as below
	 * key:value|key2:value2
	 *
	 * @param $save_data
	 * @returns {string}
	 */
	key_value_array( $save_data ) {
		let $r = [];
		jQuery.each( $save_data, function( $k, $v ) {
			let $s = $k + ':' + $v;
			$r.push( $s );
		} );
		return $r.join( '|' );
	}

	/**
	 * Converts Multiple Array as below
	 * key:value,value2|key2:value3,value4
	 *
	 * @param $save_data
	 * @returns {string}
	 */
	key_value_multi_array( $save_data ) {
		let $r = [];
		jQuery.each( $save_data, function( $k, $v ) {
			if( typeof $v === 'object' ) {
				$v = $v.join( ',' );
			}
			let $s = $k + ':' + $v;
			$r.push( $s );
		} );
		return $r.join( '|' );
	}

	/**
	 *
	 * @param $save_data
	 * @returns {*}
	 */
	sorter_values( $save_data ) {
		return this.encode_content( JSON.stringify( $save_data ) );
	}

	/**
	 * Encodes String Into Base64.
	 * @param $data
	 */
	encode_content( $data ) {
		return base64_encode( rawurlencode( $data ) );
	}

	/**
	 * Checks if given element is hooked To Visual Composer.
	 * @param $parent
	 * @returns {boolean}
	 */
	is_vc_param_elem( $parent = this.element ) {
		if( $parent.data( 'param-name' ) === undefined || $parent.data( 'param-name' ) === '' ) {
			return false;
		}
		return true;
	}

	/**
	 * Inits Single Field.
	 * @param $type
	 * @param $elem
	 */
	init_single_field( $type, $elem ) {
		wponion_init_field( $type, $elem, 'vc', true );
	}
}
