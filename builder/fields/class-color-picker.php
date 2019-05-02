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

if ( ! class_exists( 'WPO\Color_Picker' ) ) {
	/**
	 * Class Color_Picker
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method rgba()
	 * @method size()
	 * @method layout()
	 */
	class Color_Picker extends Field {
		/**
		 * Color_Group constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'color_picker', $id, $title, $args );
		}

		/**
		 * @param bool $is_rgba
		 *
		 * @return $this
		 */
		public function set_rgba( $is_rgba = true ) {
			$this['rgba'] = $is_rgba;
			return $this;
		}

		/**
		 * @param int $size
		 *
		 * @return $this
		 */
		public function set_size( $size = 30 ) {
			$this['size'] = $size;
			return $this;
		}

		/**
		 * round
		 * round box-shadow
		 * round with-margin
		 * round with-margin box-shadow
		 *
		 * square
		 * square box-shadow
		 * square with-margin
		 * square with-margin box-shadow
		 *
		 * @param bool $is_round
		 * @param bool $with_margin
		 * @param bool $box_shadow
		 * @param bool $custom
		 *
		 * @return $this
		 */
		public function set_layout( $is_round = false, $with_margin = false, $box_shadow = false, $custom = false ) {
			if ( false === $custom ) {
				$custom = '';
				if ( true === $is_round ) {
					$custom .= ' round ';
				}

				if ( true === $with_margin ) {
					$custom .= ' with-margin ';
				}

				if ( true === $box_shadow ) {
					$custom .= ' box-shadow ';
				}
			}
			$this['layout'] = $custom;
			return $this;
		}
	}
}
