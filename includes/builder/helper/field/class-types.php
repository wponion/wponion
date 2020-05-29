<?php

namespace WPO\Helper\Field;

defined( 'ABSPATH' ) || exit;

use WPOnion\Registry\Field_Types;

/**
 * Trait Types
 *
 * @package WPO\Helper\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 *
 * @method \WPO\Fields\Accordion accordion( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Background background( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Button button( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Faq faq( $title = false, $args = array() )
 * @method \WPO\Fields\Button_Set button_set( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\checkbox checkbox( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\color_group color_group( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\css_shadow css_shadow( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\color_picker color_picker( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\content content( $content = null, $markdown = false )
 * @method \WPO\Fields\content markdown( $content = null )
 * @method \WPO\Fields\content content_markdown( $content = null )
 * @method \WPO\Fields\date_picker date_picker( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\date_picker time_picker( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\dimensions dimensions( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\fieldset fieldset( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\font_picker font_picker( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\gallery gallery( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\group group( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\heading heading( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Text hidden( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\icon_picker icon_picker( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\iframe iframe( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\image image( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\input_group input_group( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\jambo_content jambo_content( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\image_select image_select( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\key_value key_value( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\link_color link_color( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\notice notice( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\oembed oembed( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\radio radio( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\select select( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\sorter sorter( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\spacing spacing( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\subheading subheading( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\switcher switcher( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\tab tab( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\textarea textarea( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\text text( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\typography typography( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\upload upload( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\wp_editor wp_editor( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\wp_link wp_link( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\wp_notice wp_notice( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\divider divider( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Notice notice_danger( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Notice notice_dark( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Notice notice_info( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Notice notice_light( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Notice notice_primary( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Notice notice_secondary( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Notice notice_success( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Notice notice_warning( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\WP_Notice wp_notice_error( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\WP_Notice wp_notice_info( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\WP_Notice wp_notice_success( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\WP_Notice wp_notice_warning( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Modal modal( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Spinner spinner( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Range_Slider range_slider( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\Code_Editor code_editor( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\WP_List_Table wp_list_table( $id = false, $title = false, $args = array() )
 * @method \WPO\Field import_export( $id = false, $title = false, $args = array() )
 * @method \WPO\Fields\CSS_Unit css_unit( $id = false, $title = false, $args = array() )
 */
trait Types {
	/**
	 * @param $name
	 * @param $arguments
	 *
	 * @return bool|\WPO\Field
	 */
	public function __call( $name, $arguments ) {
		$args = ( in_array( $name, array_keys( Field_Types::$all_fields ), true ) ) ? array_merge( array( $name ), $arguments ) : false;
		if ( ! empty( $args ) ) {
			$instance = wponion_callback( array( $this, 'field' ), $args );
			self::_field_after_create( $name, $instance );
			return $instance;
		}
		return ( method_exists( get_parent_class( $this ), '__call' ) ) ? parent::__call( $name, $arguments ) : false;
	}
}
