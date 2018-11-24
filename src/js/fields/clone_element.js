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
				if( $add_btn.parent().find( 'div.alert' ).length > 0 ) {

				} else {
					$add_btn.parent().prepend( jQuery( $eror_msg ).hide() );
					$add_btn.parent().find( 'div.alert' ).slideDown();
					wponion_notice( $add_btn.parent().find( 'div.alert' ) );
				}
			},
			show_animation: $arg.animations.show,
			hide_animation: $arg.animations.hide,
		} );
	}
}

