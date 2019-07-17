export default function( options ) {
	let $elem       = jQuery( this ),
		$args       = jQuery.extend( {
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
			onRemoveBefore: false,
			onRemoveAfter: false,
			show_animation: false,
			hide_animation: false,
		}, options ),
		$removeFunc = function() {
			if( jQuery( this ).hasClass( 'removing' ) ) {
				return;
			}

			jQuery( this ).addClass( 'removing' );

			let $count = parseInt( $elem.attr( 'data-wponion-clone-count' ) ) - 1;
			$elem.attr( 'data-wponion-clone-count', $count );

			if( false !== $args.onRemoveBefore ) {
				$args.onRemoveBefore( jQuery( this ) );
			}

			if( false !== $args.onRemove ) {
				$args.onRemove( jQuery( this ) );
			} else {
				if( false !== $args.hide_animation ) {
					jQuery( this ).parent().parent().animateCss( $args.hide_animation, function( $elem ) {
						$elem.remove();
					} );
				} else {
					jQuery( this ).parent().parent().remove();
				}
			}
			if( false !== $args.onRemoveAfter ) {
				$args.onRemoveAfter( jQuery( this ) );
			}
		};

	$args.add_btn = ( window.wponion._.isString( $args.add_btn ) ) ? $elem.find( $args.add_btn ) : $args.add_btn;

	$args.remove_btn_jquery = ( window.wponion._.isString( $args.remove_btn ) ) ? $elem.find( $args.remove_btn ) : $args.remove_btn_jquery;

	$args.remove_btn_jquery.on( 'click', $removeFunc );

	$args.add_btn.on( 'click', function() {
		let $limit    = parseInt( $elem.attr( 'data-wponion-clone-count' ) ),
			$template = JSON.parse( JSON.stringify( $args.template ) );

		if( $args.limit > 0 ) {
			if( $limit === $args.limit || $limit >= $args.limit ) {
				if( false !== $args.onLimitReached ) {
					$args.onLimitReached();
				}
				return false;
			}
		}

		$limit = $limit + 1;
		$elem.attr( 'data-wponion-clone-count', $limit );
		$template = $template.replace( /{wponionCloneID}/g, $limit );

		if( false !== $args.templateBeforeRender ) {
			$template = $args.templateBeforeRender( $template, $limit, this );
		}

		$template = jQuery( $template );

		if( false !== $args.show_animation ) {
			$template.animateCss( $args.show_animation );
		}

		$elem.append( $template );

		if( false !== $args.templateAfterRender ) {
			$args.templateAfterRender( $elem, $limit, this );
		}

		$elem.find( $args.remove_btn ).on( 'click', $removeFunc );
	} );

	if( $args.sortable !== false && window.wponion_is_library_exists( 'sortable', 'jquery' ) ) {
		$elem.sortable( jQuery.extend( {
			cursor: 'move',
			axis: 'y',
			scrollSensitivity: 40,
			forcePlaceholderSize: true,
			helper: 'clone',
			opacity: 0.65,
		}, $args.sortable ) );
	}
}
