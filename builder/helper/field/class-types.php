<?php

namespace WPO\Helper\Field;

if ( ! trait_exists( 'Types' ) ) {
	/**
	 * Trait Types
	 *
	 * @package WPO\Helper\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	trait Types {
		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Accordion
		 */
		public function accordion( $id = false, $title = false, $args = array() ) {
			return $this->field( 'accordion', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Background
		 */
		public function background( $id = false, $title = false, $args = array() ) {
			return $this->field( 'background', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Backup
		 */
		public function backup( $id = false, $title = false, $args = array() ) {
			return $this->field( 'backup', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Button
		 */
		public function button( $id = false, $title = false, $args = array() ) {
			return $this->field( 'button', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Button_Set
		 */
		public function button_set( $id = false, $title = false, $args = array() ) {
			return $this->field( 'button_set', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Card
		 */
		public function card( $id = false, $title = false, $args = array() ) {
			return $this->field( 'card', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Change_Log
		 */
		public function change_log( $id = false, $title = false, $args = array() ) {
			return $this->field( 'change_log', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Checkbox
		 */
		public function checkbox( $id = false, $title = false, $args = array() ) {
			return $this->field( 'checkbox', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Color_Group
		 */
		public function color_group( $id = false, $title = false, $args = array() ) {
			return $this->field( 'color_group', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Color_Palette
		 */
		public function color_palette( $id = false, $title = false, $args = array() ) {
			return $this->field( 'color_palette', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Color_Picker
		 */
		public function color_picker( $id = false, $title = false, $args = array() ) {
			return $this->field( 'color_picker', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Content
		 */
		public function content( $id = false, $title = false, $args = array() ) {
			return $this->field( 'content', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Date_Picker
		 */
		public function date_picker( $id = false, $title = false, $args = array() ) {
			return $this->field( 'date_picker', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Dimensions
		 */
		public function dimensions( $id = false, $title = false, $args = array() ) {
			return $this->field( 'dimensions', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this
		 */
		public function fieldset( $id = false, $title = false, $args = array() ) {
			return $this->field( 'fieldset', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Font_Picker
		 */
		public function font_picker( $id = false, $title = false, $args = array() ) {
			return $this->field( 'font_picker', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Gallery
		 */
		public function gallery( $id = false, $title = false, $args = array() ) {
			return $this->field( 'gallery', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Google_Maps
		 */
		public function google_maps( $id = false, $title = false, $args = array() ) {
			return $this->field( 'google_maps', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Group
		 */
		public function group( $id = false, $title = false, $args = array() ) {
			return $this->field( 'group', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Heading
		 */
		public function heading( $id = false, $title = false, $args = array() ) {
			return $this->field( 'heading', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Hidden
		 */
		public function hidden( $id = false, $title = false, $args = array() ) {
			return $this->field( 'hidden', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Icon_Picker
		 */
		public function icon_picker( $id = false, $title = false, $args = array() ) {
			return $this->field( 'icon_picker', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Iframe
		 */
		public function iframe( $id = false, $title = false, $args = array() ) {
			return $this->field( 'iframe', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Image
		 */
		public function image( $id = false, $title = false, $args = array() ) {
			return $this->field( 'image', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Image_Select
		 */
		public function image_select( $id = false, $title = false, $args = array() ) {
			return $this->field( 'image_select', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Input_Group
		 */
		public function input_group( $id = false, $title = false, $args = array() ) {
			return $this->field( 'input_group', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Jambo_Content
		 */
		public function jambo_content( $id = false, $title = false, $args = array() ) {
			return $this->field( 'jambo_content', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Key_Value
		 */
		public function key_value( $id = false, $title = false, $args = array() ) {
			return $this->field( 'key_value', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Link_Color
		 */
		public function link_color( $id = false, $title = false, $args = array() ) {
			return $this->field( 'link_color', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Notice
		 */
		public function notice( $id = false, $title = false, $args = array() ) {
			return $this->field( 'notice', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Notice
		 */
		public function notice_danger( $id = false, $title = false, $args = array() ) {
			return $this->field( 'notice_danger', $id, $title, $args )
				->notice_type( 'notice_danger' );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Notice
		 */
		public function notice_dark( $id = false, $title = false, $args = array() ) {
			return $this->field( 'notice_dark', $id, $title, $args )
				->notice_type( 'notice_dark' );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Notice
		 */
		public function notice_info( $id = false, $title = false, $args = array() ) {
			return $this->field( 'notice_info', $id, $title, $args )
				->notice_type( 'notice_info' );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Notice
		 */
		public function notice_light( $id = false, $title = false, $args = array() ) {
			return $this->field( 'notice_light', $id, $title, $args )
				->notice_type( 'notice_light' );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Notice
		 */
		public function notice_primary( $id = false, $title = false, $args = array() ) {
			return $this->field( 'notice_primary', $id, $title, $args )
				->notice_type( 'notice_primary' );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Notice
		 */
		public function notice_secondary( $id = false, $title = false, $args = array() ) {
			return $this->field( 'notice_secondary', $id, $title, $args )
				->notice_type( 'notice_secondary' );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Notice
		 */
		public function notice_success( $id = false, $title = false, $args = array() ) {
			return $this->field( 'notice_success', $id, $title, $args )
				->notice_type( 'notice_success' );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Notice
		 */
		public function notice_warning( $id = false, $title = false, $args = array() ) {
			return $this->field( 'notice_warning', $id, $title, $args )
				->notice_type( 'notice_warning' );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\OEmbed
		 */
		public function oembed( $id = false, $title = false, $args = array() ) {
			return $this->field( 'oembed', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Radio
		 */
		public function radio( $id = false, $title = false, $args = array() ) {
			return $this->field( 'radio', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Select
		 */
		public function select( $id = false, $title = false, $args = array() ) {
			return $this->field( 'select', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Sorter
		 */
		public function sorter( $id = false, $title = false, $args = array() ) {
			return $this->field( 'sorter', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Spacing
		 */
		public function spacing( $id = false, $title = false, $args = array() ) {
			return $this->field( 'spacing', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Subheading
		 */
		public function subheading( $id = false, $title = false, $args = array() ) {
			return $this->field( 'subheading', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Switcher
		 */
		public function switcher( $id = false, $title = false, $args = array() ) {
			return $this->field( 'switcher', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Tab
		 */
		public function tab( $id = false, $title = false, $args = array() ) {
			return $this->field( 'tab', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Text
		 */
		public function text( $id = false, $title = false, $args = array() ) {
			return $this->field( 'text', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Textarea
		 */
		public function textarea( $id = false, $title = false, $args = array() ) {
			return $this->field( 'textarea', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Typography
		 */
		public function typography( $id = false, $title = false, $args = array() ) {
			return $this->field( 'typography', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Upload
		 */
		public function upload( $id = false, $title = false, $args = array() ) {
			return $this->field( 'upload', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\WP_Editor
		 */
		public function wp_editor( $id = false, $title = false, $args = array() ) {
			return $this->field( 'wp_editor', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\WP_Link
		 */
		public function wp_link( $id = false, $title = false, $args = array() ) {
			return $this->field( 'wp_link', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\WP_Notice
		 */
		public function wp_notice( $id = false, $title = false, $args = array() ) {
			return $this->field( 'wp_notice', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\WP_Notice
		 */
		public function wp_notice_error( $id = false, $title = false, $args = array() ) {
			return $this->field( 'wp_notice_error', $id, $title, $args )
				->notice_type( 'error' );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\WP_Notice
		 */
		public function wp_notice_info( $id = false, $title = false, $args = array() ) {
			return $this->field( 'wp_notice_info', $id, $title, $args )
				->notice_type( 'info' );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\WP_Notice
		 */
		public function wp_notice_success( $id = false, $title = false, $args = array() ) {
			return $this->field( 'wp_notice_success', $id, $title, $args )
				->notice_type( 'success' );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\WP_Notice
		 */
		public function wp_notice_warning( $id = false, $title = false, $args = array() ) {
			return $this->field( 'wp_notice_warning', $id, $title, $args )
				->notice_type( 'warning' );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Fields\Divider
		 */
		public function divider( $id = false, $title = false, $args = array() ) {
			return $this->field( 'divider', $id, $title, $args );
		}
	}
}
