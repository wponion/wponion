( ( $ ) => {

	$.fn.WPOnionCloner = function ( options ) {
		let $options = $.extend( {
			limit: false,
			add_btn: false,
			remove_btn: false,
			clone_elem: false,
			template: false,
			sortable: false,
			onLimitReached: false,
			templateBeforeRender: false,
			templateAfterRender: false,
			onRemove: false,
		}, options );

		if ( typeof $options[ 'add_btn' ] === 'string' ) {
			$options[ 'add_btn' ] = this.find( $options[ 'add_btn' ] );
		}

		if ( typeof $options[ 'remove_btn' ] === 'string' ) {
			$options[ 'remove_btn_jquery' ] = this.find( $options[ 'remove_btn' ] );
		}

		let $_wrap      = $( this ),
			$add        = $options[ 'add_btn' ],
			$remove     = $options[ 'remove_btn_jquery' ],
			$removeFunc = function () {
				if ( $( this ).hasClass( 'removing' ) ) {
					return;
				}

				$( this ).addClass( 'removing' );

				let $count = parseInt( $_wrap.attr( 'data-wponion-clone-count' ) ) - 1;
				$_wrap.attr( 'data-wponion-clone-count', $count );

				if ( false !== $options[ 'onRemove' ] ) {
					$options[ 'onRemove' ]( $( this ) );
				}
			};

		$remove.on( 'click', $removeFunc );

		$add.on( 'click', function () {
			let $limit    = parseInt( $_wrap.attr( 'data-wponion-clone-count' ) ),
				$template = JSON.parse( JSON.stringify( $options[ 'template' ] ) );

			if ( false !== $options[ 'limit' ] ) {
				if ( $limit === $options[ 'limit' ] ) {
					if ( false !== $options[ 'onLimitReached' ] ) {
						$options[ 'onLimitReached' ]();
					}
					return false;
				}
			}

			$limit = $limit + 1;
			$_wrap.attr( 'data-wponion-clone-count', $limit );
			$template = $template.replace( /{wponionCloneID}/g, $limit );

			if ( false !== $options[ 'templateBeforeRender' ] ) {
				$template = $options[ 'templateBeforeRender' ]( $template, $limit, this );
			}

			$_wrap.append( $( $template ) );

			if ( false !== $options[ 'templateAfterRender' ] ) {
				$template = $options[ 'templateAfterRender' ]( $_wrap );
			}

			let $_remove = $_wrap.find( $options[ 'remove_btn' ] );
			$_remove.on( 'click', $removeFunc );
		} );

		if ( $options[ 'sortable' ] !== false ) {
			$_wrap.sortable( $.extend( {
				cursor: 'move',
				axis: 'y',
				scrollSensitivity: 40,
				forcePlaceholderSize: true,
				helper: 'clone',
				opacity: 0.65,
			}, $options[ 'sortable' ] ) )
		}
	}

} )( jQuery );