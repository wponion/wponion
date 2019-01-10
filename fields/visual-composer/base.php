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

namespace WPOnion\Field\Visual_Composer;

if ( ! class_exists( '\WPOnion\Field\Visual_Composer\Base' ) ) {
	/**
	 * Class Base
	 *
	 * @package WPOnion\Field\Visual_Composer
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Base extends \WPOnion\Field {
		/**
		 * Class Used To Integrate Field With Visual Composer.
		 *
		 * @var string
		 * @access
		 */
		protected $vc_extra_class = 'wpb_vc_param_value';

		/**
		 * Stores Default Visual Composer Field Argument Keys.
		 *
		 * @var array
		 * @access
		 */
		protected $vc_default_keys = array(
			'type',
			'holder',
			'class',
			'heading',
			'param_name',
			'value',
			'description',
			'admin_label',
			'dependency',
			'edit_field_class',
			'weight',
			'group',
			'vc_single_param_edit_holder_class',
		);

		/**
		 * Returns Default Visual Composer Keys.
		 *
		 * @return array
		 */
		protected function vc_default_keys() {
			return $this->vc_default_keys;
		}

		/**
		 * Returns Requried Replaceable Keys. To make field array work with WPOnion.
		 *
		 * @return array
		 */
		private function replace_keys() {
			return array(
				'class'      => 'class',
				'id'         => 'param_name',
				'name'       => 'param_name',
				'dependency' => 'dependency',
				'default'    => 'std',
			);
		}

		/**
		 * Filters Unwanted Keys in Field Args and returns It.
		 *
		 * @return array
		 */
		public function filter_vc_args() {
			$r = $this->orginal_field;
			foreach ( $this->vc_default_keys() as $i ) {
				if ( isset( $r[ $i ] ) ) {
					unset( $r[ $i ] );
				}
			}
			return $r;
		}

		/**
		 * Returns $this->extra_class.
		 *
		 * @param mixed $return
		 *
		 * @return string
		 */
		public function extra_class( $return ) {
			return $this->vc_extra_class;
		}

		/**
		 * Returns Extra Wrap Attributes.
		 *
		 * @param mixed $attr
		 * @param mixed $return
		 *
		 * @return mixed
		 */
		public function extra_wrap_attributes( $attr, $return ) {
			return $attr;
		}

		/**
		 * Explodes | values
		 *
		 * @example converts 'a|b|c|e' into array('a','b','c','e')
		 *
		 * @param $value
		 *
		 * @return array
		 */
		public function explode_pipeline( $value ) {
			$return = array();
			$data   = explode( '|', $value );
			if ( ! empty( array_filter( $data ) ) && count( $data ) > 0 ) {
				foreach ( $data as $val ) {
					$_data = array_filter( explode( ':', $val, 2 ) );
					if ( count( $_data ) == 2 ) {
						if ( ! isset( $return[ $_data[0] ] ) ) {
							$return[ $_data[0] ] = array();
						}
						$_data[1] = ( isset( $_data[1] ) ) ? $_data[1] : '';
						$is_array = explode( ',', $_data[1] );
						if ( is_array( $is_array ) && count( $is_array ) > 1 ) {
							$return[ $_data[0] ] = array_merge( $is_array, $return[ $_data[0] ] );
						} else {
							$return[ $_data[0] ] = $_data[1];
						}
					}
				}
			}
			return $return;
		}

		/**
		 * Decodes JSON String.
		 *
		 * @param $value
		 *
		 * @return array|bool|mixed|object
		 */
		public function decode( $value ) {
			$v = $this->is_encoded( $value );
			if ( true === $v && isset( $this->base64_val ) ) {
				return json_decode( urldecode( $this->base64_val ), true );
			}
			return false;
		}

		/**
		 * Checks if string is encoded value.
		 *
		 * @param $value
		 *
		 * @return bool
		 */
		public function is_encoded( $value ) {
			if ( ! isset( $this->base64_val ) ) {
				$value = base64_decode( $value, true );
				if ( false === $value ) {
					return false;
				}
				$this->base64_val = $value;
				return true;
			}
			return true;
		}

		/**
		 * Converts WPSF VC Field Array into WPSF Field Array.
		 *
		 * @return array
		 */
		public function field_array() {
			$replace_fields = $this->replace_keys();
			$return         = array();
			foreach ( $replace_fields as $replace => $base ) {
				if ( isset( $this->orginal_field[ $base ] ) ) {
					$return[ $replace ] = $this->orginal_field[ $base ];
				}
			}
			$return                                       = array_merge( $return, $this->filter_vc_args() );
			$return['type']                               = $this->orginal_field['type'];
			$return['class']                              = isset( $return['class'] ) ? $return['class'] : '';
			$return['class']                              = $return['class'] . ' ' . $this->extra_class( $return );
			$return['wrap_attributes']                    = isset( $return['wrap_attributes'] ) ? $return['wrap_attributes'] : array();
			$return['wrap_attributes']['data-param-name'] = $return['id'];
			$return['wrap_attributes']                    = $this->extra_wrap_attributes( $return['wrap_attributes'], $return );
			$return['id']                                 = strtolower( $return['id'] );
			$return['name']                               = strtolower( $return['name'] );
			return $return;
		}

		/**
		 * Renders HTML Output.
		 *
		 * @return mixed|string
		 */
		public function output() {
			return wponion_add_element( $this->field_array(), $this->value(), array(
				'module'    => 'visual_composer',
				'plugin_id' => false,
				'unique'    => false,
			) );
		}

		/**
		 * @return array|mixed
		 */
		protected function field_default() {
			return array();
		}

		/**
		 * @param $data
		 *
		 * @return array
		 */
		public function _handle_field_args( $data ) {
			return $data;
		}

		/**
		 * @return array
		 */
		protected function defaults() {
			return array();
		}

		/**
		 * @return mixed|void
		 */
		public function field_assets() {
		}
	}
}
