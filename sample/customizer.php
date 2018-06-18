<?php
/**
 *
 * Initial version created 28-05-2018 / 02:05 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

$ins = new \WPOnion\Modules\customizer( array(
	'option_name' => '_wponion_customizer_demo',
	'plugin_id'   => 'wponion_customizer',
), array(
	array(
		'name'     => 'wponion',
		'title'    => 'WPOnion Fields',
		'sections' => array(
			array( 'name' => 'wponion_text', 'title' => 'text Field', 'fields' => $wponion_text_options->get() ),
			array( 'name' => 'wponion_textarea', 'title' => 'Textarea', 'fields' => $wponion_textarea->get() ),
			array( 'name' => 'wponion_checkbox', 'title' => 'Checkbox', 'fields' => $wponion_checkbox->get() ),
			array( 'name' => 'wponion_radio', 'title' => 'Radio', 'fields' => $wponion_radio->get() ),
			array(
				'name'   => 'wponion_color_palette',
				'title'  => 'Color Palette',
				'fields' => $wponion_color_palette->get(),
			),
			array(
				'name'   => 'wponion_color_picker',
				'title'  => 'Color Picker',
				'fields' => $wponion_color_picker->get(),
			),
			array(
				'name'   => 'wponion_font_picker',
				'title'  => 'Font Picker',
				'fields' => $wponion_font_picker->get(),
			),
			array(
				'name'   => 'wponion_image_picker',
				'title'  => 'WP Images',
				'fields' => $wponion_images->get(),
			),
			array(
				'name'   => 'wponion_keyvalue',
				'title'  => 'Key Value',
				'fields' => $wponion_keyval,
			),
		),
	),
) );

if ( ! is_admin() && ! defined( 'DOING_AJAX' ) && ! defined( 'IFRAME_REQUEST' ) ) {
	//echo '<pre>' . print_r( $ins->values()
	//		->get( 'cpik' ), true ) . ' </pre > ';
	#exit;
}
