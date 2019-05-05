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

if ( ! class_exists( 'WPO\Checkbox_Radio' ) ) {
	/**
	 * Class Checkbox_Radio
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method get_label()
	 */
	class Checkbox_Radio extends Field {
		/**
		 * @var string
		 * @access
		 */
		protected $type = '';

		/**
		 * @var bool
		 * @access
		 */
		protected $option_group = false;

		/**
		 * Checkbox_Radio constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( $this->type, $id, $title, $args );
		}

		/**
		 * @param $label
		 *
		 * @return $this
		 */
		public function label( $label ) {
			$this['label'] = $label;
			return $this;
		}

		/**
		 * @param string $option_group
		 *
		 * @return $this
		 */
		public function option_group( $option_group = '' ) {
			$this->option_group = $option_group;
			return $this;
		}

		/**
		 * @param array $options
		 * @param bool  $merge
		 *
		 * @return $this|\WPO\Field
		 */
		public function options( $options = array(), $merge = true ) {
			if ( false !== $this->option_group ) {
				if ( ! isset( $this['options'][ $this->option_group ] ) ) {
					$this['options'][ $this->option_group ] = array();
				}
				$_options = $this['options'][ $this->option_group ];
			} else {
				$_options = $this['options'];
			}

			if ( true === $merge ) {
				if ( wponion_is_array( $_options ) ) {
					$_options = $this->parse_args( $options, $_options );
				} else {
					$_options = $options;
				}
			} else {
				$_options = $options;
			}

			if ( false !== $this->option_group ) {
				$this['options'][ $this->option_group ] = $_options;
			} else {
				$this['options'] = $_options;
			}
			return $this;
		}

		/**
		 * @param mixed $offset
		 * @param mixed $value
		 */
		public function offsetSet( $offset, $value ) {
			if ( false !== $this->option_group && 'options' !== $offset ) {
				$this->option_group = false;
			}
			parent::offsetSet( $offset, $value );
		}
	}
}
