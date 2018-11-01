import WPOnion_Field from '../core/field';

export default class extends WPOnion_Field {
	init() {
		let $map                   = this.option( 'map', {} );
		$map[ 'details' ]          = '#gmap_fields_' + this.id();
		$map[ 'detailsAttribute' ] = 'data-map-value';
		if( 'yes' === this.option( 'show_map' ) ) {
			$map[ 'map' ] = '#gmap_' + this.id();
			console.log( this.option( 'show_map' ) );
			console.log( $map );
		}

		this.elem.find( 'div.searchbox > input' ).geocomplete( this.handle_args( $map ) );
	}
}
