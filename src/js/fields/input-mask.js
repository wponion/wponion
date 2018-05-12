/**
 * Input Mask JS Handler.
 * @param $elem
 */
wponion.fields.input_mask = function ($elem) {
	if ( 1 >= $elem.length ) {
		$elem.each( function () {
			let $settings = wponion.field_js_args( $( this ) );
			if ( $settings[ 'inputmask' ] !== undefined ) {
				$settings = $settings[ 'inputmask' ];
			}
			$( this ).inputmask( $settings );
		} )
	}
};

/**
 * Hooked To Auto Reload Fields.
 */
wphooks.addAction( 'wponion_reload_fields', ( () => {
	wponion.fields.input_mask( wponion_elem().find( ".wponion-inputmask input[data-wponion-inputmask]" ) );
} ) );