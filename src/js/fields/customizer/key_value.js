import WPOnion_Customizer_Module from '../../modules/customizer';

export default ( ( wp ) => {
	wp.customize.control.extend( {
		ready: function() {
			let $control = this;
			wp.hooks.addAction( 'wponion_key_value_updated', 'wponion_core', ( ( $elem ) => {
				$control.setting.set( WPOnion_Customizer_Module.get_keyval_data( $control ) );
			} ), 11 );
		}
	} )
} )( window.wp );

