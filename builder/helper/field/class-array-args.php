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

namespace WPO\Helper\Field;

if ( ! class_exists( '\WPO\Helper\Field\Array_Args' ) ) {
	/**
	 * Class Array_Args
	 *
	 * @package WPO\Helper\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method mixed sanitize
	 * @method mixed validate
	 * @method mixed attributes
	 * @method mixed dependency
	 * @method mixed wrap_attributes
	 */
	class Array_Args extends Helper {
		/**
		 * Field Sanitize Functions.
		 * It can be either a single function or multiple.
		 * if you want to override all and have only 1 function then add like below
		 * $field->sanitize('yourcallbac',false);
		 *
		 * @param null $sanitize
		 * @param bool $merge
		 *
		 * @return $this
		 */
		public function set_sanitize( $sanitize = null, $merge = true ) {
			if ( null === $sanitize ) {
				return $this['sanitize'];
			}

			if ( true === $merge ) {
				if ( wponion_is_array( $this['sanitize'] ) ) {
					$this['sanitize'][] = $sanitize;
				} else {
					$this['sanitize'] = $sanitize;
				}
			} else {
				$this['sanitize'] = $sanitize;
			}

			return $this;
		}

		/**
		 * Field Validate Functions.
		 * It can be either a single function or multiple.
		 * if you want to override all and have only 1 function then add like below
		 * $field->validate('yourcallbac',false);
		 *
		 * @param null $validate
		 * @param bool $merge
		 *
		 * @return $this
		 */
		public function set_validate( $validate = null, $merge = true ) {
			if ( null === $validate ) {
				return $this['validate'];
			}

			if ( true === $merge ) {
				if ( wponion_is_array( $this['validate'] ) ) {
					$this['validate'][] = $validate;
				} else {
					$this['validate'] = $validate;
				}
			} else {
				$this['validate'] = $validate;
			}
			return $this;
		}

		/**
		 * Adds Field Attributes.
		 *
		 * @param null $attributes
		 * @param bool $merge
		 *
		 * @return $this
		 */
		public function set_attributes( $attributes = null, $merge = true ) {
			if ( null === $attributes ) {
				return $this['attributes'];
			}

			if ( true === $merge ) {
				if ( wponion_is_array( $this['attributes'] ) ) {
					$this['attributes'] = $this->parse_args( $attributes, $this['attributes'] );
				} else {
					$this['attributes'] = $attributes;
				}
			} else {
				$this['attributes'] = $attributes;
			}

			return $this;
		}

		/**
		 * Adds A Single Attribute To Field.
		 *
		 * @param null $key
		 * @param null $value
		 *
		 * @return $this
		 */
		public function attribute( $key = null, $value = null ) {
			return $this->set_attributes( array( $key => $value ) );
		}

		/**
		 * Field Wrap Attribute.
		 *
		 * @param null $attributes
		 * @param bool $merge
		 *
		 * @return $this
		 */
		public function set_wrap_attributes( $attributes = null, $merge = true ) {
			if ( null === $attributes ) {
				return $this['wrap_attributes'];
			}

			if ( true === $merge ) {
				if ( wponion_is_array( $this['wrap_attributes'] ) ) {
					$this['wrap_attributes'] = $this->parse_args( $attributes, $this['wrap_attributes'] );
				} else {
					$this['wrap_attributes'] = $attributes;
				}
			} else {
				$this['wrap_attributes'] = $attributes;
			}

			return $this;
		}

		/**
		 * Adds A Single Attribute To Field.
		 *
		 * @param null $key
		 * @param null $value
		 *
		 * @return $this
		 */
		public function wrap_attribute( $key = null, $value = null ) {
			return $this->set_attributes( array( $key => $value ) );
		}

		/**
		 * Set Field Dependency
		 *
		 * @param null $dependency
		 *
		 * @return $this
		 */
		public function set_dependency( $dependency = null ) {
			$this['dependency'] = $dependency;
			return $this;
		}
	}
}
