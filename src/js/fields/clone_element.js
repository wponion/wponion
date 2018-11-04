import WPOnion_Field from '../core/field';
/* global setTimeout:true */
/* global wponion_field:true */
export default class extends WPOnion_Field {
	init() {
		let $arg        = this.handle_args( this.option( 'clone', {} ) );
		let $this       = this,
			$elem       = $this.element,
			$clone_wrap = $elem.find( 'div.wponion-clone-wrap' ),
			$add_btn    = $elem.find( 'button[data-wponion-clone-add]' ),
			//$remove_btn = $clone_wrap.find( 'button[data-wponion-clone-remove]' ),
			$limit      = ( $arg.limit !== undefined ) ? $arg.limit : false,
			//$is_toast   = ( $arg.toast_error !== undefined ) ? $arg.toast_error : true,
			$eror_msg   = $arg.error_msg,
			$sort       = ( $arg.sort !== false ) ? {
				items: '.wponion-field-clone',
				handle: '.wponion-field-clone-sorter',
				placeholder: 'wponion-cloner-placeholder',
				start: ( event, ui ) => ui.item.css( 'background-color', '#eeee' ),
				stop: ( event, ui ) => ui.item.removeAttr( 'style' ),
			} : false;

		$clone_wrap.WPOnionCloner( {
			add_btn: $add_btn,
			limit: $limit,
			clone_elem: '.wponion-field-clone',
			remove_btn: 'a.wponion-remove',
			template: $this.option( 'clone_template' ),
			templateAfterRender: ( $e ) => wponion_field( $e.find( '> div.wponion-field-clone:last-child' ) ).reload(),
			sortable: $sort,
			onLimitReached: function() {
				/*if( $is_toast === true ) {
					// @todo Add Toast Option.
					/!*wpo.tost( {
						type: "error",
						title: $eror_msg,
					} );*!/
				} else {*/
				let $html = jQuery( '<div class="alert alert-warning" role="alert">' + $eror_msg + '</div>' )
					.hide();
				$add_btn.parent().prepend( $html );
				$add_btn.parent().find( 'div.alert' ).fadeIn( function() {
					let $__E = jQuery( this );
					setTimeout( () => $__E.fadeOut( 'slow', () => $__E.remove() ), 1000 );
				} );
				//}
			},
			show_animation: $arg.animations.show,
			hide_animation: $arg.animations.hide,
		} );
	}
}

