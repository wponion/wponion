import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		let $this       = this,
			$add        = this.element.find( '> .row > .wponion-fieldset > button[data-wponion-group-add]' ),
			$group_wrap = this.element.find( '> .row > .wponion-fieldset > .wponion-group-wrap' ),
			$limit      = $this.option( 'limit' ),
			$error_msg  = $this.option( 'error_msg' );

		this.init_field( $group_wrap, 'accordion' );

		$group_wrap.find( '> .wponion-accordion-wrap' ).each( function() {
			window.wponion_dependency( jQuery( this ), { nestable: true, parent: jQuery( this ) } );
		} );


		this.bind_events_for_title();
		this.element.find( '.wponion-group-remove' ).tippy( {
			appendTo: () => this.get_field_parent_by_id( this.element )[ 0 ],
		} );
		this.element.on( 'click', '.wponion-group-remove', function() {
			jQuery( this )
				.parent()
				.parent()
				.find( '> .wponion-accordion-content .row > .wponion-group-action > button' )
				.click();
		} );
		this.update_groups_title();

		$group_wrap.WPOnionCloner( {
			add_btn: $add,
			limit: parseInt( $limit ),
			clone_elem: '> .wponion-fieldset > .wponion-accordion-wrap',
			remove_btn: '.wponion-group-action > button',
			template: this.option( 'group_template' ),
			onRemove: ( $elem ) => {
				$elem.parent().parent().parent().parent().slideUp( function() {
					jQuery( this ).remove();
				} );
				this.update_groups_title();
				this.element.trigger( 'change' );
				this.element.trigger( 'wponion_field_updated' );
			},
			templateAfterRender: () => {
				let $data = $group_wrap.find( '> .wponion-accordion-wrap:last-child' );

				$data.hide();

				this.update_groups_title();

				this.bind_events_for_title();

				this.init_field( $group_wrap, 'accordion' );

				window.wponion_field_reload_all( $data );

				window.wponion_dependency( $group_wrap.find( '> .wponion-accordion-wrap:last-child' ), { nestable: true } );

				$data.find( '.wponion-group-remove' ).tippy( {
					appendTo: () => this.get_field_parent_by_id( this.element )[ 0 ],
				} );

				$data.slideDown();

				this.element.trigger( 'change' );

				this.element.trigger( 'wponion_field_updated' );
			},
			sortable: {
				items: '.wponion-accordion-wrap',
				handle: '.wponion-accordion-title',
				placeholder: 'wponion-accordion-placeholder',
				start: function( event, ui ) {
					ui.item.css( 'background-color', '#eeee' );
				},
				stop: ( event, ui ) => {
					ui.item.removeAttr( 'style' );
					this.update_groups_title();
					this.element.trigger( 'change' );
					this.element.trigger( 'wponion_field_updated' );
				}

			},
			onLimitReached: function() {
				if( $add.parent().find( 'div.alert' ).length === 0 ) {
					$add.before( jQuery( $error_msg ).hide() );
					$add.parent().find( 'div.alert' ).slideDown();
					window.wponion_notice( $add.parent().find( 'div.alert, div.notice' ) );
				}
			}
		} );
	}

	/**
	 * Binds Dynamic Group Title Events.
	 * @param $elem
	 */
	bind_events_for_title( $elem = false ) {
		$elem = ( false === $elem ) ? this.element.find( '> .row > .wponion-fieldset > .wponion-group-wrap > .wponion-accordion-wrap' ) : $elem;
		$elem.each( ( i, e ) => {
			let $data = jQuery( e );

			let $mached = this.option( 'matched_heading_fields' );
			for( let $key in $mached ) {
				if( $mached.hasOwnProperty( $key ) ) {
					let $elem = $data.find( ':input[data-depend-id="' + $mached[ $key ] + '"]' );
					if( $elem.length > 0 ) {
						$elem.on( 'change, blur', () => this.update_groups_title() );
					}
				}
			}
		} );
	}

	/**
	 * Updates Group Title
	 * @param $elem
	 */
	update_groups_title( $elem = false ) {
		let $limit = 1;
		$elem      = ( false === $elem ) ? this.element.find( '> .row > .wponion-fieldset > .wponion-group-wrap > .wponion-accordion-wrap' ) : $elem;

		$elem.each( ( i, e ) => {
			let $data    = jQuery( e );
			let $heading = this.option( 'heading' );
			if( false !== this.option( 'heading_counter' ) ) {
				$heading = window.wponion._.replace( $heading, '[count]', $limit );
			}

			let $mached = this.option( 'matched_heading_fields' );
			for( let $key in $mached ) {
				if( $mached.hasOwnProperty( $key ) ) {
					let $elem = $data.find( ':input[data-depend-id="' + $mached[ $key ] + '"]' );
					if( $elem.length > 0 ) {
						$heading = window.wponion._.replace( $heading, $mached[ $key ], $elem.val() );
					}
				}
			}

			if( $heading === '' ) {
				$heading = window.wponion._.replace( this.option( 'default_heading' ), '[count]', $limit );
			}

			$data.find( '> .wponion-accordion-title span.heading' ).html( $heading );
			$limit++;
		} );

	}
}
