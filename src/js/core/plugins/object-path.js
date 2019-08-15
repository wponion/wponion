let ObjectPath = {
	isObj: value => value !== null && ( typeof value === 'object' || typeof value === 'function' ),
	getPathSegments: ( path, path_spiltter = '.' ) => {
		const pathArray = path.split( path_spiltter );
		const parts     = [];

		for( let i = 0; i < pathArray.length; i++ ) {
			let p = pathArray[ i ];

			while( p[ p.length - 1 ] === '\\' && pathArray[ i + 1 ] !== undefined ) {
				p = p.slice( 0, -1 ) + path_spiltter;
				p += pathArray[ ++i ];
			}

			parts.push( p );
		}

		return parts;
	},
	get: ( object, path, value, path_spiltter = '/' ) => {
		if( !ObjectPath.isObj( object ) || typeof path !== 'string' ) {
			return value === undefined ? object : value;
		}

		const pathArray = ObjectPath.getPathSegments( path, path_spiltter );

		for( let i = 0; i < pathArray.length; i++ ) {
			if( !Object.prototype.propertyIsEnumerable.call( object, pathArray[ i ] ) ) {
				return value;
			}

			object = object[ pathArray[ i ] ];

			if( object === undefined || object === null ) {
				if( i !== pathArray.length - 1 ) {
					return value;
				}
				break;
			}
		}

		return object;
	},
	set: ( object, path, value, path_spiltter = '/' ) => {
		if( !ObjectPath.isObj( object ) || typeof path !== 'string' ) {
			return object;
		}

		const root      = object;
		const pathArray = ObjectPath.getPathSegments( path, path_spiltter );

		for( let i = 0; i < pathArray.length; i++ ) {
			const p = pathArray[ i ];

			if( !ObjectPath.isObj( object[ p ] ) ) {
				object[ p ] = {};
			}

			if( i === pathArray.length - 1 ) {
				object[ p ] = value;
			}

			object = object[ p ];
		}

		return root;
	},
	delete: ( object, path, path_spiltter = '/' ) => {
		if( !ObjectPath.isObj( object ) || typeof path !== 'string' ) {
			return;
		}

		const pathArray = ObjectPath.getPathSegments( path, path_spiltter );

		for( let i = 0; i < pathArray.length; i++ ) {
			const p = pathArray[ i ];

			if( i === pathArray.length - 1 ) {
				delete object[ p ];
				return;
			}

			object = object[ p ];

			if( !ObjectPath.isObj( object ) ) {
				return;
			}
		}
	},
	has: ( object, path, path_spiltter ) => {
		if( !ObjectPath.isObj( object ) || typeof path !== 'string' ) {
			return false;
		}

		const pathArray = ObjectPath.getPathSegments( path, path_spiltter );

		for( let i = 0; i < pathArray.length; i++ ) {
			if( ObjectPath.isObj( object ) ) {
				if( !( pathArray[ i ] in object ) ) {
					return false;
				}

				object = object[ pathArray[ i ] ];
			} else {
				return false;
			}
		}

		return true;
	}
};

export default ObjectPath;
