<?php

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Dimensions' ) ) {
	/**
	 * Class Dimensions
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Dimensions extends Spacing {
		/**
		 * @return string
		 */
		protected function field_wrap_class() {
			return ' wponion-element-spacing ' . parent::field_wrap_class();
		}

		/**
		 * Returns Default Icons.
		 *
		 * @return array
		 */
		protected function default_icons() {
			return array(
				'height' => __( 'Height', 'wponion' ),
				'width'  => __( 'Width', 'wponion' ),
			);
		}

		/**
		 * Returns Default Title.
		 *
		 * @return array
		 */
		protected function default_title() {
			return array(
				'height' => __( 'Height', 'wponion' ),
				'width'  => __( 'Width', 'wponion' ),
			);
		}

		/**
		 * @return array
		 */
		protected function field_slugs() {
			return array( 'width', 'height' );
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'width'        => true,
				'height'       => true,
				'unit'         => true,
				'unit_options' => array(
					'px' => 'px',
					'%'  => '%',
					'em' => 'em',
				),
				'icons'        => $this->default_icons(),
			);
		}
	}
}
