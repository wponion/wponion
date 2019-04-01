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
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function accordion( $id = false, $title = false, $args = array() ) {
			return $this->field( 'accordion', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function background( $id = false, $title = false, $args = array() ) {
			return $this->field( 'background', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function backup( $id = false, $title = false, $args = array() ) {
			return $this->field( 'backup', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function button( $id = false, $title = false, $args = array() ) {
			return $this->field( 'button', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function button_set( $id = false, $title = false, $args = array() ) {
			return $this->field( 'button_set', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function card( $id = false, $title = false, $args = array() ) {
			return $this->field( 'card', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function change_log( $id = false, $title = false, $args = array() ) {
			return $this->field( 'change_log', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function checkbox( $id = false, $title = false, $args = array() ) {
			return $this->field( 'checkbox', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function color_group( $id = false, $title = false, $args = array() ) {
			return $this->field( 'color_group', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function color_palette( $id = false, $title = false, $args = array() ) {
			return $this->field( 'color_palette', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function color_picker( $id = false, $title = false, $args = array() ) {
			return $this->field( 'color_picker', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function content( $id = false, $title = false, $args = array() ) {
			return $this->field( 'content', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function date_picker( $id = false, $title = false, $args = array() ) {
			return $this->field( 'date_picker', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function dimensions( $id = false, $title = false, $args = array() ) {
			return $this->field( 'dimensions', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function fieldset( $id = false, $title = false, $args = array() ) {
			return $this->field( 'fieldset', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function font_picker( $id = false, $title = false, $args = array() ) {
			return $this->field( 'font_picker', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function gallery( $id = false, $title = false, $args = array() ) {
			return $this->field( 'gallery', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function google_maps( $id = false, $title = false, $args = array() ) {
			return $this->field( 'google_maps', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function group( $id = false, $title = false, $args = array() ) {
			return $this->field( 'group', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function heading( $id = false, $title = false, $args = array() ) {
			return $this->field( 'heading', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function hidden( $id = false, $title = false, $args = array() ) {
			return $this->field( 'hidden', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function icon_picker( $id = false, $title = false, $args = array() ) {
			return $this->field( 'icon_picker', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function iframe( $id = false, $title = false, $args = array() ) {
			return $this->field( 'iframe', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function image( $id = false, $title = false, $args = array() ) {
			return $this->field( 'image', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function image_select( $id = false, $title = false, $args = array() ) {
			return $this->field( 'image_select', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function input_group( $id = false, $title = false, $args = array() ) {
			return $this->field( 'input_group', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function jambo_content( $id = false, $title = false, $args = array() ) {
			return $this->field( 'jambo_content', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function key_value( $id = false, $title = false, $args = array() ) {
			return $this->field( 'key_value', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function link_color( $id = false, $title = false, $args = array() ) {
			return $this->field( 'link_color', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function notice( $id = false, $title = false, $args = array() ) {
			return $this->field( 'notice', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function oembed( $id = false, $title = false, $args = array() ) {
			return $this->field( 'oembed', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function radio( $id = false, $title = false, $args = array() ) {
			return $this->field( 'radio', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function select( $id = false, $title = false, $args = array() ) {
			return $this->field( 'select', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function sorter( $id = false, $title = false, $args = array() ) {
			return $this->field( 'sorter', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function spacing( $id = false, $title = false, $args = array() ) {
			return $this->field( 'spacing', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function subheading( $id = false, $title = false, $args = array() ) {
			return $this->field( 'subheading', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function switcher( $id = false, $title = false, $args = array() ) {
			return $this->field( 'switcher', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function tab( $id = false, $title = false, $args = array() ) {
			return $this->field( 'tab', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function text( $id = false, $title = false, $args = array() ) {
			return $this->field( 'text', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function textarea( $id = false, $title = false, $args = array() ) {
			return $this->field( 'textarea', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function typography( $id = false, $title = false, $args = array() ) {
			return $this->field( 'typography', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function upload( $id = false, $title = false, $args = array() ) {
			return $this->field( 'upload', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function visual_composer( $id = false, $title = false, $args = array() ) {
			return $this->field( 'visual_composer', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function wp_editor( $id = false, $title = false, $args = array() ) {
			return $this->field( 'wp_editor', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function wp_link( $id = false, $title = false, $args = array() ) {
			return $this->field( 'wp_link', $id, $title, $args );
		}

		/**
		 * Creates a new filed instance for and returns it
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @return $this|\WPO\Field
		 */
		public function wp_notice( $id = false, $title = false, $args = array() ) {
			return $this->field( 'wp_notice', $id, $title, $args );
		}
	}
}
