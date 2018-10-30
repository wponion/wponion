import WPOnion_Field from '../core/field';
import WPOnion_Dependency from "../core/dependency";

export default class extends WPOnion_Field {
	init() {
		let $this       = this,
			$elem       = $this.elem,
			$add        = this.element.find( '> .wponion-fieldset > button[data-wponion-group-add]' ),
			$group_wrap = this.element.find( '> .wponion-fieldset > .wponion-group-wrap' ),
			$limit      = $this.option( 'limit' ),
			$error_msg  = $this.option( 'error_msg' );

		this.init_field( this.element.find( '.wponion-group-wrap' ), 'accordion' );

		$group_wrap.find( "> .wponion-accordion-wrap" ).each( function() {
			new WPOnion_Dependency( jQuery( this ), { nestable: true } );
		} );
		this.element.find( '.wponion-group-remove' ).tippy();
		this.element.on( 'click', '.wponion-group-remove', function() {
			$( this )
				.parent()
				.parent()
				.find( '> .wponion-accordion-content > .wponion-group-action > button' )
				.click();
		} );

		$group_wrap.WPOnionCloner( {
			add_btn: $add,
			limit: parseInt( $limit ),
			clone_elem: '> .wponion-fieldset > .wponion-accordion-wrap',
			remove_btn: ".wponion-group-action > button",
			template: this.option( 'group_template' ),
			onRemove: function( $elem ) {
				$elem.parent().parent().parent().remove();
				if( jQuery( 'body' ).find( 'link#editor-buttons-css' ).length === 0 ) {
					$( 'body' )
						.append( '<link rel="stylesheet" id="editor-buttons-css" href="' + $wponion.settings( 'wpeditor_buttons_css' ) + '" type="text/css" media="all">' );
				}
			},
			templateAfterRender: function( $_wrap ) {
				let $data = $group_wrap.find( "> .wponion-accordion-wrap:last-child" );
				$this.init_field( $group_wrap, 'accordion' );
				$data.find( '.wponion-group-remove' ).tippy();
				new WPOnion_Dependency( $group_wrap.find( "> .wponion-accordion-wrap:last-child" ), { nestable: true } );
				wponion_field( $data ).reload();
				$this.init_field( $data.find( '.wponion-element-wp_editor' ), 'reload_wp_editor' );
			},
			sortable: {
				items: '.wponion-accordion-wrap',
				handle: '.wponion-accordion-title',
				placeholder: 'wponion-accordion-placeholder',
				start: function( event, ui ) {
					ui.item.css( 'background-color', '#eeee' );
				},
				stop: function( event, ui ) {
					ui.item.removeAttr( 'style' );
				}

			},
			onLimitReached: function() {
				let $html = $( '<div class="alert alert-warning" role="alert">' + $error_msg + '</div>' ).hide();
				$add.before( $html );
				$add.parent().find( "div.alert" ).fadeIn( function() {
					let $__E = $( this );
					setTimeout( function() {
						$__E.fadeOut( 'slow', function() {
							$__E.remove();
						} );
					}, 1000 )
				} )
			}
		} );
	}
}
