export default function() {
	/**
	 * Checks if library exists
	 * @param $library
	 * @param $type
	 * @return {boolean}
	 */
	window.wponion_is_library_exists = ( $library = false, $type = 'window' ) => {
		switch( $type ) {
			case 'window':
				return ( !window.wponion._.isUndefined( window[ $library ] ) );
			case 'jquery':
				return ( !window.wponion._.isUndefined( jQuery.fn[ $library ] ) );
		}
		return false;
	};

	/**
	 * Handles WPOnion Notices.
	 * @param $elem
	 * @returns {*}
	 */
	window.wponion_notice = ( $elem ) => {
		if( $elem.length > 1 ) {
			$elem.each( function() {
				window.wponion_notice( jQuery( this ) );
			} );
		} else {
			if( $elem.find( '.wponion-remove' ).length > 0 ) {
				$elem.each( function() {
					let $el = jQuery( this );
					$el.find( '.wponion-remove' ).tippy( { appendTo: () => jQuery( this )[ 0 ] } );
					$el.find( '.wponion-remove' ).on( 'click', () => $el.slideUp( 'slow', () => $el.remove() ) );
				} );
				return $elem;
			}

			let $auto = $elem.attr( 'data-autoclose' );
			if( $auto ) {
				$auto     = parseInt( $auto );
				let $left = $auto / 1000;
				if( $elem.find( '.wpo-counter' ).length === 1 ) {
					let $runner = setInterval( function() {
						$elem.find( '.wpo-counter' ).html( $left );
						$left -= 1;
						if( $left < 0 ) {
							clearInterval( $runner );
							$elem.find( '.wpo-counter' ).html( '0' );
						}
					}, 900 );
				}
				setTimeout( () => $elem.slideUp( 'slow', () => $elem.remove() ), $auto );
			}
		}
	};

	/**
	 * Creates A New instance of Dependency
	 * @param $element
	 * @param $args
	 * @param $config
	 * @return {{}|*}
	 */
	window.wponion_dependency = ( $element = false, $args = false, $config = {} ) => new window.wponion.class.dependency( $element, $args, $config );

	/**
	 * Fetch Files from the given element.
	 * @param $element
	 * @param $find_selector
	 * @param $nested_elements
	 * @return {jQuery}
	 */
	window.wponion_get_fields = ( $element, $find_selector = false, $nested_elements = false ) => {
		$element       = $element || jQuery( '.wponion-framework' );
		$find_selector = $find_selector || '.wponion-element';
		if( true === $nested_elements ) {
			return $element.find( $find_selector );
		} else if( $element.closest( '.wponion-field-group' ).length >= 1 || $element.hasClass( 'wponion-field-group' ) ) {
			return $element.find( $find_selector );
		} else {
			return $element.find( $find_selector ).filter( function( index, element ) {
				return !( jQuery( element ).closest( '.wponion-field-group', jQuery( element ) ) ).length;
			} );
		}
	};
}

