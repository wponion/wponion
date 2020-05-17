<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Date_Picker' ) ) {
	/**
	 * Class Color_Picker
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
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
		public function range( $is_range = false ) {
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
		public function settings( $args ) {
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
		public function theme( $theme = 'default' ) {
			$this['theme'] = $theme;
			return $this;
		}

		/**
		 * @return $this
		 */
		public function theme_default() {
			return $this->theme( 'default' );
		}

		/**
		 * @return $this
		 */
		public function theme_dark() {
			return $this->theme( 'dark' );
		}

		/**
		 * @return $this
		 */
		public function theme_material_blue() {
			return $this->theme( 'material_blue' );
		}

		/**
		 * @return $this
		 */
		public function theme_material_green() {
			return $this->theme( 'material_green' );
		}

		/**
		 * @return $this
		 */
		public function theme_material_red() {
			return $this->theme( 'material_red' );
		}

		/**
		 * @return $this
		 */
		public function theme_material_orange() {
			return $this->theme( 'material_orange' );
		}

		/**
		 * @return $this
		 */
		public function theme_airbnb() {
			return $this->theme( 'airbnb' );
		}

		/**
		 * @return $this
		 */
		public function theme_confetti() {
			return $this->theme( 'confetti' );
		}

		/**
		 * @param $date
		 *
		 * @return $this
		 */
		public function date( $date ) {
			$this['date'] = $date;
			return $this;
		}

		/**
		 * @param $date
		 *
		 * @return $this
		 */
		public function to_date( $date ) {
			$this['to_date'] = $date;
			return $this;
		}
	}
}
