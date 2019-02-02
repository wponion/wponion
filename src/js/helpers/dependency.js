import WPOnion_Field from '../core/field';
import $wponion from '../core/core';
import $wponion_debug from '../core/debug';

/**
 * WPOnion Dependency Helper Class.
 */
export default class extends WPOnion_Field {
	/**
	 * WPOnion Dependency Helper Class.
	 * @param $selector
	 * @param $contxt
	 * @param $config
	 */
	constructor( $selector, $contxt, $config ) {
		super( $selector, $contxt, $config );
	}

	/**
	 * Inits Dependency Worker.
	 */
	init() {
		let $dep = this.option( 'dependency' );
		for( let $key in $dep.controller ) {
			if( $dep.controller.hasOwnProperty( $key ) && $dep.condition.hasOwnProperty( $key ) && $dep.value.hasOwnProperty( $key ) ) {
				let $controller = $dep.controller [ $key ],
					$condition  = $dep.condition [ $key ],
					$value      = $dep.value [ $key ],
					$field      = '[data-depend-id="' + $controller + '"]';
				if( false !== this.config.nestable ) {
					let $INPUT = this.config.parent.find( '[data-depend-id=' + $controller + ']' );
					if( $INPUT.length > 0 ) {
						$field = '[data-wponion-jsid="' + $wponion.fieldID( $INPUT ) + '"]:input';
					}
				}
				let $a = this.contxt.createRule( $field, $condition, $value );
				$a.include( this.element );
				this.set_contxt( $a );
			}
		}
		$wponion_debug.add( this.id(), { 'Dependency': $dep, 'Nestable Dependency': this.config.nestable } );
	}

	field_debug() {
	}
}

