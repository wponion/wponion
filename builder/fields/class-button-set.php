<?php

namespace WPO\Fields;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\Button_Set' ) ) {
	/**
	 * Class Button_Set
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Button_Set extends Checkbox_Radio {
		/**
		 * @var string
		 * @access
		 */
		protected $type = 'button_set';

		/**
		 * @param $size
		 *
		 * @return $this
		 */
		public function size( $size ) {
			$this['size'] = $size;
			return $this;
		}

		/**
		 * @param string $active
		 *
		 * @return $this
		 */
		public function active( $active = 'button-primary' ) {
			$this['active'] = $active;
			return $this;
		}

		/**
		 * @param string $inactive
		 *
		 * @return $this
		 */
		public function inactive( $inactive = 'button-secondary' ) {
			$this['inactive'] = $inactive;
			return $this;
		}

		/**
		 * Sets To Small Size Button.
		 *
		 * @return \WPO\Fields\Button_Set
		 */
		public function large() {
			return $this->size( 'large' );
		}

		/**
		 * Sets To Small Size Button.
		 *
		 * @return \WPO\Fields\Button_Set
		 */
		public function small() {
			return $this->size( 'small' );
		}

		/**
		 * Sets To Normal Size Button.
		 *
		 * @return \WPO\Fields\Button_Set
		 */
		public function normal() {
			return $this->size( false );
		}
	}
}
