<?php
$instance = new \WPOnion\Modules\woocommerce( array(
	'plugin_id'   => 'wcboiler_plate',
	'option_name' => 'wcrbp_data_sample',
) );

$instance->page( false, 'general', false )
	->merge_fields( array(
		array(
			'type'     => 'text',
			'id'       => 'general_text',
			'title'    => 'General Text Field',
			'validate' => 'wponion_required_value',

		),
	) )
	->page( 'Page 1', 'page1', false, array(
		'hide'           => 'grouped',
		'is_variation'   => true,
		'only_variation' => true,
	) )
	->merge_fields( $wpof['color_picker'] );
$instance->init();