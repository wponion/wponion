import WPOnion_Base from './base';

export default class WPOnion_Theme_Base extends WPOnion_Base {
	/**
	 * @param $selector
	 * @param $module
	 * @param $unique
	 * @param $theme
	 */
	constructor( $selector, $module = false, $unique = false, $theme = false ) {
		super( $selector, { module: $module, unique: $unique, theme: $theme } );
		this.init();
	}

	init() {

	}

	/**
	 * Returns Unique ID
	 * @return {boolean|string}
	 */
	get unique() {
		return this.get_arg( 'unique', false );
	}

	/**
	 * Returns Module
	 * @return {boolean|string}
	 */
	get module() {
		return this.get_arg( 'module', false );
	}

	/**
	 * Returns Theme Slug
	 * @return {boolean|string}
	 */
	get theme() {
		return this.get_arg( 'theme', false );
	}

	/**
	 * @param $title
	 * @param $search
	 * @returns {*}
	 */
	is_search_matched( $title, $search ) {
		return $title.text().match( new RegExp( '.*?' + $search + '.*?', 'i' ) );
	}

	/**
	 * @param $container
	 * @return {boolean}
	 */
	static has_only_uifields( $container ) {
		let $element    = $container.find( '.wponion-element' ).length;
		let $ui_element = $container.find( '.wponion-ui-field' ).length;
		return ( $element === $ui_element || $element === 0 && $ui_element > 0 );
	}
}
