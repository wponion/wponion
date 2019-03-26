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

if ( ! class_exists( 'WPO\Date_Picker' ) ) {
	/**
	 * Class Color_Picker
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method range()
	 * @method settings()
	 * @method theme()
	 * @method date()
	 * @method to_date()
	 */
	class Date_Picker extends Field {
		/**
		 * Date_Picker constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'date_picker', $id, $title, $args );
		}

		/**
		 * @param bool $is_range
		 *
		 * @return $this
		 */
		public function set_range( $is_range = false ) {
			$this['range'] = $is_range;
			return $this;
		}

		/**
		 * For more information on settings please refer
		 * https://flatpickr.js.org/
		 *
		 * @param $args
		 *
		 * @return $this
		 */
		public function set_settings( $args ) {
			$this['settings'] = $args;
			return $this;
		}

		/**
		 * Options Are :
		 * - default
		 * - dark
		 * - material_blue
		 * - material_green
		 * - material_red
		 * - material_orange
		 * - airbnb
		 * - confetti
		 *
		 * @param string $theme
		 *
		 * @return $this
		 */
		public function set_theme( $theme = 'default' ) {
			$this['theme'] = $theme;
			return $this;
		}

		/**
		 * @return $this
		 */
		public function theme_default() {
			return $this->set_theme( 'default' );
		}

		/**
		 * @return $this
		 */
		public function theme_dark() {
			return $this->set_theme( 'dark' );
		}

		/**
		 * @return $this
		 */
		public function theme_material_blue() {
			return $this->set_theme( 'material_blue' );
		}

		/**
		 * @return $this
		 */
		public function theme_material_green() {
			return $this->set_theme( 'material_green' );
		}

		/**
		 * @return $this
		 */
		public function theme_material_red() {
			return $this->set_theme( 'material_red' );
		}

		/**
		 * @return $this
		 */
		public function theme_material_orange() {
			return $this->set_theme( 'material_orange' );
		}

		/**
		 * @return $this
		 */
		public function theme_airbnb() {
			return $this->set_theme( 'airbnb' );
		}

		/**
		 * @return $this
		 */
		public function theme_confetti() {
			return $this->set_theme( 'confetti' );
		}

		/**
		 * @param $date
		 *
		 * @return $this
		 */
		public function set_date( $date ) {
			$this['date'] = $date;
			return $this;
		}

		/**
		 * @param $date
		 *
		 * @return $this
		 */
		public function set_to_date( $date ) {
			$this['to_date'] = $date;
			return $this;
		}

		/**
		 * @return array
		 */
		protected function defaults() {
			return array(
				'range'    => false,
				'settings' => array(),
				'theme'    => 'default',
				'date'     => __( 'Date', 'wponion' ),
				'to_date'  => __( 'Till Date', 'wponion' ),
			);
		}
	}
}
