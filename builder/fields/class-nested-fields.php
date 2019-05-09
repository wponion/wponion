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

namespace WPO\Fields;

use WPO\Helper\Field\Types;

if ( ! class_exists( 'WPO\Fields\Nested_Fields' ) ) {
	/**
	 * Class Nested_Fields
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method get_heading()
	 * @method get_un_array()
	 */
	class Nested_Fields extends \WPO\Field implements \WPO\Helper\Interfaces\Field {
		use Types;

		/**
		 * @param $heading
		 *
		 * @return $this
		 */
		public function heading( $heading ) {
			return $this->_set( 'heading', $heading );
		}

		/**
		 * @param bool $un_array
		 *
		 * @return $this
		 */
		public function un_array( $un_array = false ) {
			return $this->_set( 'un_array', $un_array );
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
					if ( $field->get_id() === $field_id ) {
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
		 * @return $this|false|\WPO\Fields\Accordion|\WPO\Fields\Background|\WPO\Fields\Button_Set|\WPO\Fields\Checkbox|\WPO\Fields\Color_Group|\WPO\Fields\Color_Picker|\WPO\Fields\Content|\WPO\Fields\Date_Picker|\WPO\Fields\Dimensions|\WPO\Field|\WPO\Fields\Fieldset|\WPO\Fields\Font_Picker|\WPO\Fields\Gallery|\WPO\Fields\Group|\WPO\Fields\Heading|\WPO\Fields\Icon_Picker|\WPO\Fields\Iframe|\WPO\Fields\Image|\WPO\Fields\Image_Select|\WPO\Fields\Input_Group|\WPO\Fields\Jambo_Content|\WPO\Fields\Key_Value|\WPO\Fields\Link_Color|\WPO\Fields\Notice|\WPO\Fields\Oembed|\WPO\Fields\Radio|\WPO\Fields\Select|\WPO\Fields\Sorter|\WPO\Fields\Spacing|\WPO\Fields\Subheading|\WPO\Fields\Switcher|\WPO\Fields\Text|\WPO\Fields\Textarea|\WPO\Fields\Typography|\WPO\Fields\Upload|\WPO\Fields\WP_Editor|\WPO\Fields\WP_Link|\WPO\Fields\WP_Notice
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
				$return = \WPO\Field::create( $field_type_or_instance, $field_id, $title, $args );
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
