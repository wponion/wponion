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

if ( ! class_exists( 'WPO\Font_Picker' ) ) {
	/**
	 * Class Font_Picker
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method google_fonts()
	 * @method websafe_fonts()
	 * @method group()
	 */
	class Font_Picker extends Field {
		/**
		 * Color_Group constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'font_picker', $id, $title, $args );
		}

		/**
		 * Accecpts Only True / False.
		 *
		 * @param bool $show_google_fonts
		 *
		 * @return $this
		 */
		public function set_google_fonts( $show_google_fonts = true ) {
			$this['google_fonts'] = $show_google_fonts;
			return $this;
		}

		/**
		 * Accecpts Only True / False.
		 *
		 * @param bool $show_websafe_fonts
		 *
		 * @return $this
		 */
		public function set_websafe_fonts( $show_websafe_fonts = true ) {
			$this['websafe_fonts'] = $show_websafe_fonts;
			return $this;
		}

		/**
		 * Accecpts Only True / False.
		 *
		 * @param bool $show_in_group
		 *
		 * @return $this
		 */
		public function set_group( $show_in_group = true ) {
			$this['group'] = $show_in_group;
			return $this;
		}
	}
}
