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
		 * @return \WPO\Accordion
		 */
		public function accordion( $id = false, $title = false, $args = array() ) {
			return $this->field( 'accordion', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Background
		 */
		public function background( $id = false, $title = false, $args = array() ) {
			return $this->field( 'background', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Backup
		 */
		public function backup( $id = false, $title = false, $args = array() ) {
			return $this->field( 'backup', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Button
		 */
		public function button( $id = false, $title = false, $args = array() ) {
			return $this->field( 'button', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Button_Set
		 */
		public function button_set( $id = false, $title = false, $args = array() ) {
			return $this->field( 'button_set', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Card
		 */
		public function card( $id = false, $title = false, $args = array() ) {
			return $this->field( 'card', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Change_Log
		 */
		public function change_log( $id = false, $title = false, $args = array() ) {
			return $this->field( 'change_log', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Checkbox
		 */
		public function checkbox( $id = false, $title = false, $args = array() ) {
			return $this->field( 'checkbox', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Color_Group
		 */
		public function color_group( $id = false, $title = false, $args = array() ) {
			return $this->field( 'color_group', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Color_Palette
		 */
		public function color_palette( $id = false, $title = false, $args = array() ) {
			return $this->field( 'color_palette', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Color_Picker
		 */
		public function color_picker( $id = false, $title = false, $args = array() ) {
			return $this->field( 'color_picker', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Content
		 */
		public function content( $id = false, $title = false, $args = array() ) {
			return $this->field( 'content', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Date_Picker
		 */
		public function date_picker( $id = false, $title = false, $args = array() ) {
			return $this->field( 'date_picker', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Dimensions
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
		 * @return \WPO\Font_Picker
		 */
		public function font_picker( $id = false, $title = false, $args = array() ) {
			return $this->field( 'font_picker', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Gallery
		 */
		public function gallery( $id = false, $title = false, $args = array() ) {
			return $this->field( 'gallery', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Google_Maps
		 */
		public function google_maps( $id = false, $title = false, $args = array() ) {
			return $this->field( 'google_maps', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Group
		 */
		public function group( $id = false, $title = false, $args = array() ) {
			return $this->field( 'group', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Heading
		 */
		public function heading( $id = false, $title = false, $args = array() ) {
			return $this->field( 'heading', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Hidden
		 */
		public function hidden( $id = false, $title = false, $args = array() ) {
			return $this->field( 'hidden', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Icon_Picker
		 */
		public function icon_picker( $id = false, $title = false, $args = array() ) {
			return $this->field( 'icon_picker', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Iframe
		 */
		public function iframe( $id = false, $title = false, $args = array() ) {
			return $this->field( 'iframe', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Image
		 */
		public function image( $id = false, $title = false, $args = array() ) {
			return $this->field( 'image', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Image_Select
		 */
		public function image_select( $id = false, $title = false, $args = array() ) {
			return $this->field( 'image_select', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Input_Group
		 */
		public function input_group( $id = false, $title = false, $args = array() ) {
			return $this->field( 'input_group', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Jambo_Content
		 */
		public function jambo_content( $id = false, $title = false, $args = array() ) {
			return $this->field( 'jambo_content', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Key_Value
		 */
		public function key_value( $id = false, $title = false, $args = array() ) {
			return $this->field( 'key_value', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Link_Color
		 */
		public function link_color( $id = false, $title = false, $args = array() ) {
			return $this->field( 'link_color', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Notice
		 */
		public function notice( $id = false, $title = false, $args = array() ) {
			return $this->field( 'notice', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Notice
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
		 * @return \WPO\Notice
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
		 * @return \WPO\Notice
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
		 * @return \WPO\Notice
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
		 * @return \WPO\Notice
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
		 * @return \WPO\Notice
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
		 * @return \WPO\Notice
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
		 * @return \WPO\Notice
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
		 * @return \WPO\OEmbed
		 */
		public function oembed( $id = false, $title = false, $args = array() ) {
			return $this->field( 'oembed', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Radio
		 */
		public function radio( $id = false, $title = false, $args = array() ) {
			return $this->field( 'radio', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Select
		 */
		public function select( $id = false, $title = false, $args = array() ) {
			return $this->field( 'select', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Sorter
		 */
		public function sorter( $id = false, $title = false, $args = array() ) {
			return $this->field( 'sorter', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Spacing
		 */
		public function spacing( $id = false, $title = false, $args = array() ) {
			return $this->field( 'spacing', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Subheading
		 */
		public function subheading( $id = false, $title = false, $args = array() ) {
			return $this->field( 'subheading', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Switcher
		 */
		public function switcher( $id = false, $title = false, $args = array() ) {
			return $this->field( 'switcher', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Tab
		 */
		public function tab( $id = false, $title = false, $args = array() ) {
			return $this->field( 'tab', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Text
		 */
		public function text( $id = false, $title = false, $args = array() ) {
			return $this->field( 'text', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Textarea
		 */
		public function textarea( $id = false, $title = false, $args = array() ) {
			return $this->field( 'textarea', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Typography
		 */
		public function typography( $id = false, $title = false, $args = array() ) {
			return $this->field( 'typography', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\Upload
		 */
		public function upload( $id = false, $title = false, $args = array() ) {
			return $this->field( 'upload', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\WP_Editor
		 */
		public function wp_editor( $id = false, $title = false, $args = array() ) {
			return $this->field( 'wp_editor', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\WP_Link
		 */
		public function wp_link( $id = false, $title = false, $args = array() ) {
			return $this->field( 'wp_link', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\WP_Notice
		 */
		public function wp_notice( $id = false, $title = false, $args = array() ) {
			return $this->field( 'wp_notice', $id, $title, $args );
		}

		/**
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return \WPO\WP_Notice
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
		 * @return \WPO\WP_Notice
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
		 * @return \WPO\WP_Notice
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
		 * @return \WPO\WP_Notice
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
		 * @return \WPO\Divider
		 */
		public function divider( $id = false, $title = false, $args = array() ) {
			return $this->field( 'divider', $id, $title, $args );
		}
	}
}
