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

if ( ! class_exists( 'WPO\Dimensions' ) ) {
	/**
	 * Class Color_Picker
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method width()
	 * @method height()
	 * @method unit()
	 * @method unit_options()
	 * @method icons()
	 */
	class Dimensions extends Field {
		/**
		 * Date_Picker constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'dimensions', $id, $title, $args );
		}

		/**
		 * @param bool $width
		 *
		 * @return $this
		 */
		public function set_width( $width = true ) {
			$this['width'] = $width;
			return $this;
		}

		/**
		 * @param bool $height
		 *
		 * @return $this
		 */
		public function set_height( $height = true ) {
			$this['height'] = $height;
			return $this;
		}

		/**
		 * @param $unit
		 *
		 * @return $this
		 */
		public function set_unit( $unit ) {
			$this['unit'] = $unit;
			return $this;
		}

		/**
		 * Default Options Are :
		 * array(
		 * 'px' => 'px',
		 * '%'  => '%',
		 * 'em' => 'em',
		 * )
		 *
		 * @param $options
		 *
		 * @return $this
		 */
		public function set_unit_options( $options ) {
			$this['unit_options'] = $options;
			return $this;
		}


		/**
		 * Default Icons Are :
		 * array(
		 * 'height' => __( 'Height' ),
		 * 'width'  => __( 'Width' ),
		 * ),
		 *
		 * @param $icons
		 *
		 * @return $this
		 */
		public function set_icons( $icons ) {
			$this['icons'] = $icons;
			return $this;
		}

		/**
		 * @return array
		 */
		protected function defaults() {
			return array(
				'width'        => true,
				'height'       => true,
				'unit'         => true,
				'unit_options' => array(
					'px' => 'px',
					'%'  => '%',
					'em' => 'em',
				),
				'icons'        => array(
					'height' => __( 'Height' ),
					'width'  => __( 'Width' ),
				),
			);
		}
	}
}
