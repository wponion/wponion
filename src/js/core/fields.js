import wpo_accordion from './fields/accordion';
import wpo_button_set from './fields/button_set';
import wpo_checkbox_radio from './fields/checkbox_radio';
import wpo_chosen from './fields/common/chosen';
import wpo_clone from './fields/clone_element';
import wpo_code_editor from './fields/code_editor';
import wpo_color_picker from './fields/color_picker';
import wpo_date_picker from './fields/date_picker';
import wpo_faq from './fields/faq';
import wpo_fieldset from './fields/fieldset';
import wpo_font_selector from './fields/font_selector';
import wpo_gallery from './fields/gallery';
import wpo_icon_picker from './fields/icon_picker';
import wpo_image_select from './fields/image_select';
import wpo_image from './fields/image_upload';
import wpo_import_export from './fields/import_export';
import wpo_inputmask from './fields/common/inputmask';
import wpo_tab from './fields/tab';
import wpo_key_value from './fields/keyvalue_pair';
import wpo_oembed from './fields/oembed';
import wpo_options_object from './fields/options_object';
import wpo_range_slider from './fields/range-slider';
import wpo_select2 from './fields/common/select2';
import wpo_selectize from './fields/common/selectize';
import wpo_sorter from './fields/sorter';
import wpo_spinner from './fields/spinner';
import wpo_time_picker from './fields/time-picker';
import wpo_typography from './fields/typography';
import wpo_upload from './fields/upload';
import wpo_wp_link from './fields/wp_links';
import wpo_image_popup from './fields/common/image_popup';
import wpo_tooltip from './fields/common/tooltip';
import wpo_group from './fields/group';
import wpo_global_notice from './fields/common/global-notice';
import wpo_modal from './fields/modal';
import wpo_editor from './fields/wp-editor';

export function wponion_register_fields() {
	/**
	 * Global Fields.
	 */
	window.wponion_register_field( 'chosen', wpo_chosen );
	window.wponion_register_field( 'select2', wpo_select2 );
	window.wponion_register_field( 'selectize', wpo_selectize );
	window.wponion_register_field( 'inputmask', wpo_inputmask );
	window.wponion_register_field( 'image_popup', wpo_image_popup );
	window.wponion_register_field( 'tooltip', wpo_tooltip );
	window.wponion_register_field( 'global_notice', wpo_global_notice );


	/**
	 * Locked Fileds under div.wponion-framework
	 */
	window.wponion_register_field( 'accordion', wpo_accordion );
	window.wponion_register_field( 'button_set', wpo_button_set );
	window.wponion_register_field( 'checkbox', wpo_checkbox_radio );
	window.wponion_register_field( 'radio', wpo_checkbox_radio );
	window.wponion_register_field( 'clone', wpo_clone );
	window.wponion_register_field( 'code_editor', wpo_code_editor );
	window.wponion_register_field( 'color_picker', wpo_color_picker );
	window.wponion_register_field( 'date_picker', wpo_date_picker );
	window.wponion_register_field( 'faq', wpo_faq );
	window.wponion_register_field( 'fieldset', wpo_fieldset );
	window.wponion_register_field( 'font_picker', wpo_font_selector );
	window.wponion_register_field( 'gallery', wpo_gallery );
	window.wponion_register_field( 'icon_picker', wpo_icon_picker );
	window.wponion_register_field( 'image_select', wpo_image_select );
	window.wponion_register_field( 'image', wpo_image );
	window.wponion_register_field( 'import_export', wpo_import_export );
	window.wponion_register_field( 'tab', wpo_tab );
	window.wponion_register_field( 'key_value', wpo_key_value );
	window.wponion_register_field( 'oembed', wpo_oembed );
	window.wponion_register_field( 'options_object', wpo_options_object );
	window.wponion_register_field( 'range_slider', wpo_range_slider );
	window.wponion_register_field( 'sorter', wpo_sorter );
	window.wponion_register_field( 'spinner', wpo_spinner );
	window.wponion_register_field( 'time_picker', wpo_time_picker );
	window.wponion_register_field( 'typography', wpo_typography );
	window.wponion_register_field( 'upload', wpo_upload );
	window.wponion_register_field( 'wp_link', wpo_wp_link );
	window.wponion_register_field( 'group', wpo_group );
	window.wponion_register_field( 'modal', wpo_modal );
	window.wponion_register_field( 'wp_editor', wpo_editor );
}
