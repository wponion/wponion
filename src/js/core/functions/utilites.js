export default function() {
	/**
	 * @param data
	 * @param file_name
	 * @param data_type
	 */
	window.wponion_js_file = ( data, file_name = 'file.json', data_type = 'data:text/json;charset=utf-8,' ) => {
		data                   = ( window.wponion._.isObject( data ) ) ? encodeURIComponent( JSON.stringify( data ) ) : data;
		let dataStr            = data_type + data,
			downloadAnchorNode = document.createElement( 'a' );
		downloadAnchorNode.setAttribute( 'href', dataStr );
		downloadAnchorNode.setAttribute( 'download', file_name );
		document.body.appendChild( downloadAnchorNode );
		downloadAnchorNode.click();
		downloadAnchorNode.remove();
	};
}
