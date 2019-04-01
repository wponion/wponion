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

use WPO\Helper\Field\Common_Args;

if ( ! class_exists( 'WPO\Field' ) ) {
	/**
	 * Class Field
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Field extends Common_Args {
		/**
		 * Creates A New Field Instance.
		 *
		 * @param bool  $type
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @static
		 * @return false | $this | \WPO\Field | \WPO\Accordion | \WPO\Background | \WPO\Button | \WPO\Checkbox | \WPO\Color_Palette | \WPO\Color_Picker | \WPO\Date_Picker | \WPO\Fieldset | \WPO\Font_Picker | \WPO\Gallery | \WPO\Google_Maps | \WPO\Group | \WPO\Hidden | \WPO\Icon_Picker | \WPO\Image | \WPO\Image_Select | \WPO\Key_Value | \WPO\Oembed | \WPO\Radio | \WPO\Select | \WPO\Sorter | \WPO\Switcher | \WPO\Tab | \WPO\Text | \WPO\Textarea | \WPO\Typography | \WPO\Upload | \WPO\WP_Editor | \WPO\WP_Link | \WPO\Color_Group | \WPO\Link_Color | \WPO\Input_Group | \WPO\Spacing | \WPO\Dimensions | \WPO\Button_Set | \WPO\Content | \WPO\Heading | \WPO\Iframe | \WPO\Jambo_Content | \WPO\Notice | \WPO\Notice_Danger | \WPO\Notice_Dark | \WPO\Notice_Info | \WPO\Notice_Light | \WPO\Notice_Primary | \WPO\Notice_Secondary | \WPO\Notice_Success | \WPO\Notice_Warning | \WPO\Subheading | \WPO\WP_Error_Notice | \WPO\WP_Info_Notice | \WPO\WP_List_Table | \WPO\WP_Notice | \WPO\WP_Success_Notice | \WPO\WP_Warning_Notice | \WPO\Change_Log
		 */
		public static function create( $type = false, $id = false, $title = false, $args = array() ) {
			if ( $type ) {
				if ( class_exists( '\WPO\\' . $type ) ) {
					$class = '\WPO\\' . $type;
					return new $class( $id, $title, $args );
				} else {
					return new Field( $type, $id, $title, $args );
				}
			}
			return false;
		}

		/**
		 * Field constructor.
		 *
		 * @param bool  $type
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $type = false, $id = false, $title = false, $args = array() ) {
			unset( $this->module );
			unset( $this->plugin_id );
			$_args = array();
			switch ( func_num_args() ) {
				case 1:
					$_args = $this->parse_args( array(
						'type' => ( wponion_is_array( $type ) ) ? false : $type,
					), $this->_defaults() );
					$type  = ( wponion_is_array( $type ) ) ? $type : array();
					$_args = $this->parse_args( $type, $_args );
					break;
				case 2:
					$_args = $this->parse_args( array(
						'type' => $type,
						'id'   => ( wponion_is_array( $id ) ) ? false : $id,
					), $this->_defaults() );
					$id    = ( wponion_is_array( $id ) ) ? $id : array();
					$_args = $this->parse_args( $id, $_args );
					break;
				case 3:
					$_args = $this->parse_args( array(
						'type'  => $type,
						'id'    => $id,
						'title' => ( wponion_is_array( $title ) ) ? false : $title,
					), $this->_defaults() );
					$title = ( wponion_is_array( $title ) ) ? $title : array();
					$_args = $this->parse_args( $title, $_args );
					break;
				case 4:
					$_args = $this->parse_args( array(
						'type'  => $type,
						'id'    => $id,
						'title' => $title,
					), $this->_defaults() );
					$args  = wponion_is_array( $args ) ? $args : array();
					$_args = $this->parse_args( $args, $_args );
					break;
			}

			foreach ( $_args as $key => $val ) {
				$this[ $key ] = $val;
			}

			$this->unique = null;

			if ( ! isset( $this['id'] ) || isset( $this['id'] ) && empty( $this['id'] ) ) {
				$this->unique = wponion_hash_string( $this->unique . wponion_hash_array( $_args ) );
			} elseif ( isset( $this['id'] ) ) {
				$this->unique = $this['id'];
			}
		}

		/**
		 * Returns Field Default Args.
		 *
		 * @return array
		 */
		protected function _defaults() {
			return $this->parse_args( $this->defaults(), wponion_field_defaults() );
		}

		/**
		 * Checks if Given Data is valid field type.
		 *
		 * @param $data
		 *
		 * @static
		 * @return bool
		 */
		public static function is_valid( $data ) {
			return ( false === Container::is_valid( $data ) && isset( $data['type'] ) );
		}


		/**
		 * @param $name
		 * @param $value
		 */
		public function __set( $name, $value ) {
			$this->{$this->array_var}[ $name ] = $value;
		}

		/**
		 * @param $name
		 *
		 * @return bool
		 */
		public function __get( $name ) {
			return ( isset( $this->{$this->array_var}[ $name ] ) ) ? $this->{$this->array_var}[ $name ] : false;
		}

		/**
		 * @param $name
		 *
		 * @return bool
		 */
		public function __isset( $name ) {
			return ( isset( $this->{$this->array_var}[ $name ] ) );
		}

		/**
		 * @param $name
		 */
		public function __unset( $name ) {
			unset( $this->{$this->array_var}[ $name ] );
		}
	}
}
