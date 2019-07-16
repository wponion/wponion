export default function() {
	jQuery( 'body' ).on( 'click', '.wponion-system-report-email', function() {
		let $arg        = window.wpo_core.js_func( window.wpo_core.windowArgs( 'wponionsysinfo' ) );
		$arg.preConfirm = () => {
			let $json               = jQuery( '#wponion-sysinfo-popup-emailer :input' ).serializeJSON();
			$json.action            = 'wponion-ajax';
			$json[ 'wponion-ajax' ] = 'sysinfo_emailer';
			$json.sysinfo           = jQuery( 'div#sysreport > textarea' ).html();

			return new Promise( ( resolve, reject ) => {
				return window.wponion_ajax( {
					data: $json,
					success: () => {
						window.swal.fire( { type: 'success', text: window.wpo_core.txt( 'email_sent' ) } );
						resolve();
					},
					error: ( res ) => {
						window.wponion_error_swal( res ).fire();
						reject();
					},
				} ).send();
			} ).catch( () => {
				return false;
			} );
		};
		window.swal.fire( $arg );
	} );
}
