import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		var $this     = this.element,
			$enabled  = $this.find( '.wponion-enabled' ),
			$disabled = $this.find( '.wponion-disabled' );

		$enabled.sortable( {
			connectWith: $disabled,
			placeholder: 'ui-sortable-placeholder',
			update: function( event, ui ) {
				let $el = ui.item.find( 'input' );
				if( ui.item.parent().hasClass( 'wponion-enabled' ) ) {
					$el.attr( 'name', $el.attr( 'name' ).replace( 'disabled', 'enabled' ) );
				} else {
					$el.attr( 'name', $el.attr( 'name' ).replace( 'enabled', 'disabled' ) );
				}
				$this.trigger( 'wponion-sorter-updated' );
				$this.trigger( 'wponion_field_updated' );
			}
		} );

		// avoid conflict
		$disabled.sortable( {
			connectWith: $enabled,
			placeholder: 'ui-sortable-placeholder',
		} );
	}
}

export default ( ( w ) => w.wponion_register_field( 'sorter', ( $elem ) => new field( $elem ) ) )( window );
