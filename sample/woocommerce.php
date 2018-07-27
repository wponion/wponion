<?php
$instance = new \WPOnion\Modules\woocommerce( array(
	'plugin_id'   => 'wcboiler_plate',
	'option_name' => 'wcrbp_data_sample',
) );

foreach ( $wpof as $key => $fields ) {
	$instance->page( $key, $key, false, array(
		'is_variation' => true,
	) )
		->merge_fields( $fields );
}

$instance->init();