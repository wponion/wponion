export default ( ( window, document, $, wp ) => {
	$( window ).on( 'load', () => {
		jQuery( 'body' ).on( 'click', '.wponion-system-report-email', function() {
			let $arg        = window.wponion.core.js_func( window.wponion.core.windowArgs( 'wponionsysinfo' ) );
			$arg.preConfirm = () => {
				let $json               = jQuery( '#wponion-sysinfo-popup-emailer :input' ).serializeJSON();
				$json.action            = 'wponion-ajax';
				$json[ 'wponion-ajax' ] = 'sysinfo_emailer';
				$json.sysinfo           = jQuery( 'div#sysreport > textarea' ).html();
				return window.wponion_ajax( {
					data: $json,
					success: function() {
						swal.fire( {
							type: 'success',
							text: window.wponion.core.txt( 'email_sent' ),
						} );
					}, error: function() {
						swal.fire( {
							type: 'error',
							text: window.wponion.core.txt( 'unknown_ajax_error' ),
						} );
					},
				} ).send();
			};
			swal.fire( $arg );
		} );
	} );
} )( window, document, jQuery, wp );

