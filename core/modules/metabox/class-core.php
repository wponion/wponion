<?php

namespace WPOnion\Modules\Metabox;

defined( 'ABSPATH' ) || exit;

/**
 * Class Core
 *
 * @package WPOnion\Modules\Metabox
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Core extends metabox {

	/**
	 * Metabox_Core constructor.
	 *
	 * @param array             $settings
	 * @param null|\WPO\Builder $fields
	 */
	public function __construct( $settings = array(), $fields = null ) {
		parent::__construct( $settings, $fields );
	}

	/**
	 * @param array $field
	 * @param bool  $container
	 * @param bool  $sub_container
	 * @param bool  $is_init_field
	 *
	 * @return mixed
	 */
	public function render_field( $field = array(), $container = false, $sub_container = false, $is_init_field = false ) {
		$m            = $this->module;
		$this->module = $this->option( 'module' );
		$data         = parent::render_field( $field, $container, $sub_container, $is_init_field );
		$this->module = $m;
		return $data;
	}

	/**
	 * @return mixed|void
	 */
	public function on_init() {
		$this->add_action( 'load-edit-tags.php', 'on_page_load' );
		$this->add_action( 'load-profile.php', 'on_page_load' );
		$this->add_action( 'load-user-edit.php', 'on_page_load' );
	}

	/**
	 * On Page Load. Hook
	 */
	public function on_page_load() {
		parent::on_page_load();
		remove_action( 'add_meta_boxes', array( &$this, 'register_metabox' ) );
		remove_action( 'save_post', array( &$this, 'save_metabox' ) );
	}

	/**
	 * Custom metabox Class.
	 *
	 * @param $class
	 *
	 * @return array
	 */
	public function custom_metabox_class( $class ) {
		$class   = parent::custom_metabox_class( $class );
		$class[] = 'wponion-core-custom-metabox';
		return $class;
	}

	/**
	 * @param array $data
	 *
	 * @return bool|false|mixed|string|void
	 */
	public function set_db_cache( $data = array() ) {
		if ( false !== $this->option( 'set_cache' ) && wponion_is_callable( $this->option( 'set_cache' ) ) ) {
			return wponion_callback( $this->option( 'set_cache' ), array( $data, $this->get_id() ) );
		}
		return parent::set_db_cache( $data );
	}

	/**
	 * @return bool|false|mixed|string
	 */
	public function get_db_cache() {
		if ( false !== $this->option( 'get_cache' ) && wponion_is_callable( $this->option( 'get_cache' ) ) ) {
			return wponion_callback( $this->option( 'get_cache' ), array( $this->get_id() ) );
		}
		return parent::get_db_cache();
	}

	/**
	 * @return array|bool|false|mixed|string
	 */
	public function get_db_values() {
		if ( false !== $this->option( 'get_db_values' ) && wponion_is_callable( $this->option( 'get_db_values' ) ) ) {
			return wponion_callback( $this->option( 'get_db_values' ), $this->get_id() );
		}
		return parent::get_db_values();
	}

	/**
	 * @param $value
	 *
	 * @return bool|false|mixed|string|\WPOnion\Modules\Metabox\Metabox
	 */
	public function set_db_values( $value = array() ) {
		if ( false !== $this->option( 'set_db_values' ) && wponion_is_callable( $this->option( 'set_db_values' ) ) ) {
			return wponion_callback( $this->option( 'set_db_values' ), array( $value, $this->get_id() ) );
		}
		return parent::set_db_values( $value );
	}

	/**
	 * Returns module default values.
	 *
	 * @return array|void
	 */
	protected function defaults() {
		$this->parse_args( array(
			'set_cache'     => false,
			'get_cache'     => false,
			'get_db_values' => false,
			'set_db_values' => false,
			'module'        => false,
		), parent::defaults() );
	}
}
