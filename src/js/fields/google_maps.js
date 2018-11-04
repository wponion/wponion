/* global google:true */
import WPOnion_Field from '../core/field';

export default class extends WPOnion_Field {
	init() {
		let $map              = this.option( 'map', {} );
		$map.details          = '#gmap_fields_' + this.id();
		$map.detailsAttribute = 'data-map-value';
		if( 'yes' === this.option( 'show_map' ) ) {
			$map.map = '#gmap_' + this.id();
		}

		let $_instance = this.elem.find( 'div.searchbox > input' );
		$_instance.geocomplete( this.handle_args( $map ) );
		$_instance.bind( 'geocode:dragged', ( event, latLng ) => {
			let geocoder = new google.maps.Geocoder();
			this.elem.find( '.map_fields :input' ).val( '' );
			geocoder.geocode( {
				'location': {
					lat: parseFloat( latLng.lat() ),
					lng: parseFloat( latLng.lng() )
				}
			}, function( results ) {
				$_instance.geocomplete( 'fillDetails', results[ 0 ] );
			} );
		} );
	}
}
