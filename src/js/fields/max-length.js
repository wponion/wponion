wponion.fields.max_length = function ($elem) {
	if ( $elem.length > 0 ) {
		$elem.each( function () {
			let $settings = wponion.field_js_args( $( this ), {} );
			if ( $settings[ 'max_length' ] !== undefined ) {
				$settings = $settings[ 'max_length' ];
				$settings[ 'appendToParent' ] = true;

				if ( $settings[ 'warningClass' ] === undefined ) {
					$settings[ 'warningClass' ] = 'badge badge-success';
				}

				if ( $settings[ 'limitReachedClass' ] === undefined ) {
					$settings[ 'limitReachedClass' ] = 'badge badge-danger';
				}

				$( this ).maxlength( $settings );
			}

			console.log( wponion.field_js_args( $( this ), {} ) );
		} )
	}
};

/**
 * Hooked To Auto Reload Fields.
 */
wphooks.addAction( 'wponion_reload_fields', function () {
	wponion.fields.max_length( wponion_elem().find( "[data-wponion-maxlength]" ) );
} );