<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! function_exists( 'wponion_builder' ) ) {
	/**
	 * Returns A New Builder Instance.
	 *
	 * @return \WPO\Builder
	 */
	function wponion_builder() {
		return new WPO\Builder();
	}
}

if ( ! function_exists( 'wponion_field_builder' ) ) {
	/**
	 * Returns A New Field Builder Instance.
	 *
	 * @param string $type
	 * @param bool   $id
	 * @param bool   $title
	 * @param array  $args
	 *
	 * @return false|\WPO\Accordion|\WPO\Background|\WPO\Button|\WPO\Button_Set|\WPO\Change_Log|\WPO\Checkbox|\WPO\Color_Group|\WPO\Color_Palette|\WPO\Color_Picker|\WPO\Content|\WPO\Date_Picker|\WPO\Dimensions|\WPO\Field|\WPO\Fieldset|\WPO\Font_Picker|\WPO\Gallery|\WPO\Google_Maps|\WPO\Group|\WPO\Heading|\WPO\Hidden|\WPO\Icon_Picker|\WPO\Iframe|\WPO\Image|\WPO\Image_Select|\WPO\Input_Group|\WPO\Jambo_Content|\WPO\Key_Value|\WPO\Link_Color|\WPO\Notice|\WPO\Notice_Danger|\WPO\Notice_Dark|\WPO\Notice_Info|\WPO\Notice_Light|\WPO\Notice_Primary|\WPO\Notice_Secondary|\WPO\Notice_Success|\WPO\Notice_Warning|\WPO\Oembed|\WPO\Radio|\WPO\Select|\WPO\Sorter|\WPO\Spacing|\WPO\Subheading|\WPO\Switcher|\WPO\Tab|\WPO\Text|\WPO\Textarea|\WPO\Typography|\WPO\Upload|\WPO\WP_Editor|\WPO\WP_Error_Notice|\WPO\WP_Info_Notice|\WPO\WP_Link|\WPO\WP_List_Table|\WPO\WP_Notice|\WPO\WP_Success_Notice|\WPO\WP_Warning_Notice
	 */
	function wponion_field_builder( $type = '', $id = false, $title = false, $args = array() ) {
		return WPO\Field::create( $type, $id, $title, $args );
	}
}
