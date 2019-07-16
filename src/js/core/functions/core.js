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
		$elem = $elem || jQuery( 'body' ).find( '.wponion-element-wp_notice, .wponion-element-notice' );
		if( $elem.length > 1 ) {
			$elem.each( ( i, e ) => {
				window.wponion_notice( jQuery( e ) );
			} );
		} else {
			window.wponion_init_field( 'global_notice', $elem );
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
		} else if( $element.closest( '.wponion-has-nested-fields' ).length >= 1 || $element.hasClass( 'wponion-has-nested-fields' ) ) {
			return $element.find( $find_selector );
		} else {
			return $element.find( $find_selector ).filter( function( index, element ) {
				element = jQuery( element );


				if( element.hasClass( 'wponion-has-nested-fields' ) && element.parents( '.wponion-element' ).length === 0 ) {
					return true;
				} else if( element.hasClass( 'wponion-has-nested-fields' ) && element.parents( '.wponion-element' ).length >= 1 ) {
					return false;
				}

				return !( element.closest( '.wponion-has-nested-fields', element ) ).length;

			} );
		}
	};

	/**
	 * Triggers All Module instance for current page.
	 * @param $element
	 */
	window.wponion_init_all = ( $element ) => {
		$element = $element || jQuery( 'body' );

		// Reloads Global Fields.
		window.wponion_field_reload_global( $element );

		// Inits Bulk Edit Module.
		window.wponion_module_bulk_edit();

		// Inits Media Fields Module.
		window.wponion_module_media_fields();

		// Inits Quick Edit Module.
		window.wponion_module_quick_edit();

		// Inits WPPointers Module.
		window.wponion_module_wp_pointers();

		// Inits System Info Module.
		window.wponion_module_system_info();

		// Inits Page Actions Module.
		window.wponion_module_page_actions();

		$element.find( 'div.postbox.wponion-metabox' ).each( function() {
			// Inits Metabox Module.
			window.wponion_module_metabox( jQuery( this ) );
		} );

		$element.find( '.wponion-framework' ).each( function() {
			let $elem = jQuery( this );

			// Reloads General Fields.
			window.wponion_field_reload( $elem );

			// Init WPOnion Theme
			window.wponion_init_theme( $elem );

			// Init Settings Module
			window.wponion_module_settings( $elem );

			// Inits Dependency Module.
			window.wponion_dependency( $elem );
		} );
	};
}

