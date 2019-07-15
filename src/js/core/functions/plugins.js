export default function() {
	/**
	 * Creates A New Instance of Ajaxer and returns it.
	 * @param $args
	 * @returns {*}
	 */
	window.wponion_ajax = ( $args ) => new window.wponion.plugins.ajaxer( $args );

	/**
	 * Creates A Swal With BootStrap Button Class.
	 * @returns {*|Function|Object|void}
	 */
	window.wponion_bs_swal = ( $args = {} ) => window.swal.mixin( window.wponion._.merge( $args, {
		customClass: {
			confirmButton: 'wpo-btn wpo-btn-success',
			cancelButton: 'wpo-btn wpo-btn-danger'
		}, buttonsStyling: false,
	} ) );

	/**
	 * Creates A Swal Toast.
	 * @returns {*|Function|Object|void}
	 */
	window.wponion_swal_toast = ( $args = {} ) => window.swal.mixin( window.wponion._.merge( $args, {
		toast: true,
		type: 'success',
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000
	} ) );

	/**
	 * Creates Swal Error.
	 * @param $title
	 * @param $message
	 * @param $args
	 * @return {*|Function|Object|void}
	 */
	window.wponion_error_swal = ( $title = false, $message = false, $args = {} ) => {
		if( !window.wponion._.isString( $title ) && window.wponion._.isObject( $title ) ) {
			$message = ( window.wponion._.isUndefined( $title.message ) ) ? '' : $title.message;
			$title   = ( window.wponion._.isUndefined( $title.title ) ) ? '' : $title.title;
		}

		if( !$title ) {
			$title = window.wpo_core.txt( 'unknown_ajax_error' );
		}

		return window.swal.mixin( window.wponion._.merge( $args, {
			type: 'error',
			title: ( $title ) ? $title : null,
			text: ( $message ) ? $message : null,
			animation: false,
		} ) );
	};

	/**
	 * WPonion Success Swal.
	 * @param $title
	 * @param $message
	 * @param $args
	 * @return {*}
	 */
	window.wponion_success_swal = ( $title = false, $message = false, $args = {} ) => {
		if( !window.wponion._.isString( $title ) && window.wponion._.isObject( $title ) ) {
			$message = ( window.wponion._.isUndefined( $title.message ) ) ? '' : $title.message;
			$title   = ( window.wponion._.isUndefined( $title.title ) ) ? '' : $title.title;
		}

		if( !$title ) {
			$title = window.wpo_core.txt( 'success' );
		}

		return window.swal.mixin( window.wponion._.merge( $args, {
			type: 'success',
			title: ( $title ) ? $title : null,
			text: ( $message ) ? $message : null,
			animation: false,
		} ) );
	};

	/**
	 * Returns A New Instance of jQuery Validator.
	 * @param $form
	 * @return {WPOnion_Validator}
	 */
	window.wponion_validator = ( $form = false ) => new window.wponion.plugins.validator( $form );
}
