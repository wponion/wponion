<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPO;

use WPO\Helper\Field\Types;

if ( ! class_exists( 'WPO\Nested_Fields' ) ) {
	/**
	 * Class Nested_Fields
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method heading()
	 * @method un_array()
	 */
	class Nested_Fields extends Field implements \WPO\Helper\Interfaces\Field {
		use Types;

		/**
		 * Returns Default Args.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array(
				'fields'   => array(),
				'un_array' => false,
				'heading'  => false,
			);
		}

		/**
		 * @param $heading
		 *
		 * @return $this
		 */
		public function set_heading( $heading ) {
			$this['heading'] = $heading;
			return $this;
		}

		/**
		 * @param bool $un_array
		 *
		 * @return $this
		 */
		public function set_un_array( $un_array = false ) {
			$this['un_array'] = $un_array;
			return $this;
		}

		/**
		 * Check if Fields Exists.
		 *
		 * @return bool
		 */
		public function has_fields() {
			return ( isset( $this['fields'] ) && wponion_is_array( $this['fields'] ) && ! empty( $this['fields'] ) );
		}

		/**
		 * Returns All Sub Fields.
		 *
		 * @return bool|mixed
		 */
		public function fields() {
			return ( $this->has_fields() ) ? $this['fields'] : false;
		}

		/**
		 * @param $field_id
		 *
		 * @return false|\WPO\Field
		 */
		public function field_exists( $field_id ) {
			if ( $this->has_fields() ) {
				/* @var $field \WPO\Field */
				foreach ( $this->fields() as $field ) {
					if ( $field->id() === $field_id ) {
						return $field;
					}
				}
			}
			return false;
		}

		/**
		 * @param string|\WPO\Field $field_type_or_instance
		 * @param bool              $field_id
		 * @param bool              $title
		 * @param array             $args
		 *
		 * @return $this|bool|false|\WPO\Accordion|\WPO\Background|\WPO\Button|\WPO\Button_Set|\WPO\Change_Log|\WPO\Checkbox|\WPO\Color_Group|\WPO\Color_Palette|\WPO\Color_Picker|\WPO\Content|\WPO\Date_Picker|\WPO\Dimensions|\WPO\Field|\WPO\Fieldset|\WPO\Font_Picker|\WPO\Gallery|\WPO\Google_Maps|\WPO\Group|\WPO\Heading|\WPO\Hidden|\WPO\Icon_Picker|\WPO\Iframe|\WPO\Image|\WPO\Image_Select|\WPO\Input_Group|\WPO\Jambo_Content|\WPO\Key_Value|\WPO\Link_Color|\WPO\Notice|\WPO\Notice_Danger|\WPO\Notice_Dark|\WPO\Notice_Info|\WPO\Notice_Light|\WPO\Notice_Primary|\WPO\Notice_Secondary|\WPO\Notice_Success|\WPO\Notice_Warning|\WPO\Oembed|\WPO\Radio|\WPO\Select|\WPO\Sorter|\WPO\Spacing|\WPO\Subheading|\WPO\Switcher|\WPO\Tab|\WPO\Text|\WPO\Textarea|\WPO\Typography|\WPO\Upload|\WPO\WP_Editor|\WPO\WP_Error_Notice|\WPO\WP_Info_Notice|\WPO\WP_Link|\WPO\WP_List_Table|\WPO\WP_Notice|\WPO\WP_Success_Notice|\WPO\WP_Warning_Notice
		 */
		public function field( $field_type_or_instance, $field_id = false, $title = false, $args = array() ) {
			if ( ! wponion_is_array( $this['fields'] ) ) {
				$this['fields'] = array();
			}

			if ( $field_type_or_instance instanceof \WPO\Field ) {
				$this['fields'][] = $field_type_or_instance;
				return $this;
			}

			$return = false;

			if ( is_string( $field_type_or_instance ) && false === $field_id && false === $title ) {
				$return = $this->field_exists( $field_type_or_instance );
			}

			if ( false === $return ) {
				$return = Field::create( $field_type_or_instance, $field_id, $title, $args );
				if ( $return ) {
					$this['fields'][] = $return;
				} else {
					$return = false;
				}
			}
			return $return;

		}
	}
}
