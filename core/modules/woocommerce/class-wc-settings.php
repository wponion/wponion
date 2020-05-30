<?php

namespace WPOnion\Modules\WooCommerce;

use WC_Settings_Page;
use WPO\Container;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Class WC_Settings
 *
 * @package WPOnion\Modules\WooCommerce
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class WC_Settings extends WC_Settings_Page {
	/**
	 * @var bool|\WPO\Container
	 */
	protected $container = false;

	/**
	 * Stores Settings Instance.
	 *
	 * @var bool|\WPOnion\Modules\WooCommerce\Settings
	 */
	protected $instance = false;

	/**
	 * WC_Settings constructor.
	 *
	 * @param \WPO\Container                        $data
	 * @param \WPOnion\Modules\WooCommerce\Settings $parent_instance
	 */
	public function __construct( Container $data, Settings $parent_instance ) {
		$this->id        = $data->name();
		$this->label     = $data->title();
		$this->container = $data;
		$this->instance  = $parent_instance;
		parent::__construct();
	}

	/**
	 * Returns Settings Sections.
	 *
	 * @return array
	 */
	public function get_sections() {
		global $current_section;
		$sections = array( '' => '' );
		if ( $this->container->has_containers() ) {
			$sections = array();
			/* @var \WPO\Container $container */
			foreach ( $this->container->containers() as $container ) {
				$sections[ $container->name() ] = $container->title();
			}

			if ( empty( $current_section ) ) {
				$current_section = current( array_keys( $sections ) );
			}
		}
		return apply_filters( 'woocommerce_get_sections_' . $this->id, $sections );
	}

	/**
	 * Returns Settings Fields.
	 *
	 * @param null $section
	 *
	 * @return array
	 */
	public function get_settings( $section = null ) {
		global $current_section;
		$section = ( null === $section ) ? $current_section : $section;
		if ( ! empty( $section ) ) {
			$exists = $this->container->container_exists( $section );
			if ( wpo_is_container( $exists ) ) {
				return ( $exists->has_fields() ) ? $exists->fields() : array();
			}
		}

		return ( $this->container->has_fields() ) ? $this->container->fields() : array();
	}

	/**
	 * Output the settings.
	 */
	public function output() {
		wponion_load_core_assets();
		wponion_load_asset( $this->instance->option( 'assets' ) );
		$settings = $this->get_settings();
		echo '<div ' . $this->instance->wrap_attributes() . '><div class="wpo-row">';
		foreach ( $settings as $field ) {
			echo $this->instance->render_field( $field );
		}
		echo '</div></div>';
	}

	/**
	 * Settings Save Handler.
	 */
	public function save() {
		global $current_section, $current_tab;
		$this->instance->save_validate( $current_tab, $current_section );
	}
}
