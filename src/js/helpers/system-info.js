export default ( ( window, document, $, wp ) => {
	$( window ).on( 'load', () => {
		jQuery( 'body' ).on( 'click', '.wponion-system-report-email', function() {
			let $arg        = window.wponion.core.js_func( window.wponion.core.windowArgs( 'wponionsysinfo' ) );
			$arg.preConfirm = () => {
				let $json               = jQuery( '#wponion-sysinfo-popup-emailer :input' ).serializeJSON();
				$json.action            = 'wponion-ajax';
				$json[ 'wponion-ajax' ] = 'sysinfo_emailer';
				$json.sysinfo           = jQuery( 'div#sysreport > textarea' ).html();

				return new Promise( ( resolve, reject ) => {
					return window.wponion_ajax( {
						data: $json,
						success: () => {
							swal.fire( { type: 'success', text: window.wponion.core.txt( 'email_sent' ) } );
							resolve();
						},
						error: ( res ) => {
							wponion_error_swal( res ).fire();
							reject();
						},
					} ).send();
				} ).catch( () => {
					return false;
				} );
			};
			swal.fire( $arg );
		} );
	} );
} )( window, document, jQuery, wp );

