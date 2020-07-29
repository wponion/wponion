<?php

namespace WPOnion\Modules\Metabox;

use WPOnion\Bridge\Module;
use WPOnion\DB\Save_Handler\Base as Save_Handler;

defined( 'ABSPATH' ) || exit;

/**
 * Class Metabox
 *
 * @package WPOnion\Modules\Metabox
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Metabox extends Module {
	/**
	 * Type - Value can be anything like (settings,text_field)
	 *
	 * @var string
	 */
	protected $module = 'metabox';

	/**
	 * Stores List Of Menus.
	 *
	 * @var array
	 */
	protected $menus = array();

	/**
	 * Stores Active Section and page names.
	 * active_data
	 *
	 * @var null
	 */
	protected $active_data = null;

	/**
	 * Inits The Class.
	 */
	public function on_init() {
		$this->add_action( 'load-post.php', 'on_page_load' );
		$this->add_action( 'load-post-new.php', 'on_page_load' );
	}

	/**
	 * Generates Custom Wrap Class.
	 *
	 * @param string $extra_class
	 *
	 * @return string
	 */
	public function wrap_class( $extra_class = '' ) {
		return parent::wrap_class( wponion_html_class( $extra_class, array(
			'wponion-module-metabox-' . $this->option( 'context' ),
			'wponion-module-metabox-' . $this->option( 'context' ) . '-framework',
		) ) );
	}

	/**
	 * Triggers Few Functions On Page Load.
	 */
	public function on_page_load() {
		$this->add_action( 'add_meta_boxes', 'register_metabox', 10, 2 );
		$this->add_action( 'admin_enqueue_scripts', 'load_style_script' );
		$this->add_action( 'save_post', 'save_metabox' );
		$this->init_theme();

		if ( wponion_is_array( $this->option( 'screens' ) ) ) {
			foreach ( $this->option( 'screens' ) as $ptype ) {
				$this->add_action( "postbox_classes_${ptype}_{$this->metabox_id()}", 'custom_metabox_class' );
			}
		} else {
			$this->add_action( "postbox_classes_{$this->option( 'screens' ) }_{$this->metabox_id()}", 'custom_metabox_class' );
		}
	}

	/**
	 * Adds Custom Metabox Class.
	 *
	 * @param $class
	 *
	 * @return array
	 */
	public function custom_metabox_class( $class ) {
		return array(
			'wponion-metabox',
			'wponion-metabox-' . $this->option( 'theme' ),
			'wponion-metabox-' . $this->option( 'context' ),
			'wponion-metabox-' . $this->module(),
			'wponion-metabox-' . $this->option( 'context' ) . '-' . $this->module(),
		);
	}

	/**
	 * Loads Core Styles and Scripts.
	 */
	public function load_style_script() {
		wponion_load_core_assets( $this->option( 'assets' ) );
	}

	/**
	 * Registers Metabox With WordPress.
	 */
	public function register_metabox() {
		add_meta_box( $this->metabox_id(), $this->option( 'metabox_title' ), array(
			&$this,
			'render',
		), $this->option( 'screens' ), $this->option( 'context' ), $this->option( 'priority' ) );
	}

	/**
	 * Returns Unique Metabox ID.
	 *
	 * @return bool|mixed
	 */
	public function metabox_id() {
		return ( false === $this->option( 'metabox_id' ) ) ? $this->option( 'option_name' ) : $this->option( 'metabox_id' );
	}

	/**
	 * Module Defaults.
	 *
	 * @return array
	 */
	protected function defaults() {
		return $this->parse_args( array(
			'metabox_title' => false,
			'metabox_id'    => false,
			'screens'       => false,
			'context'       => 'normal',
			'priority'      => null,
			'theme'         => 'wp_modern',
			'theme_color'   => 'false',
			'ajax'          => true,
		), parent::defaults() );
	}

	/**
	 * Extracts and returns metabox menus.
	 *
	 * @return array
	 */
	public function metabox_menus() {
		if ( empty( $this->menus ) && false === $this->fields()->has_fields() ) {
			$this->menus = $this->extract_fields_menus( $this->fields()->get() );
		}
		return $this->menus;
	}

	/**
	 * Returns Null For Current Page URL.
	 *
	 * @param bool $part_url
	 *
	 * @return null
	 */
	public function page_url( $part_url = false ) {
		return null;
	}

	/**
	 * Checks if its active.
	 *
	 * @param $is_parent
	 *
	 * @return bool|string
	 */
	public function active( $is_parent ) {
		$this->active_page();
		return ( true === $is_parent ) ? $this->active_data['container_id'] : $this->active_data['sub_container_id'];
	}

	/**
	 * Renders Post Metabox.
	 *
	 * @param $post
	 */
	public function render( $post ) {
		$post_id = ( is_object( $post ) ) ? $post->ID : $post;
		$this->set_id( $post_id );
		do_action( 'wponion/metabox/render/before', $post_id, $post, $this );
		do_action( "wponion/metabox/render/{$this->unique()}/before", $post_id, $post, $this );
		$this->get_cache();
		$this->get_db_values();
		$this->init_theme()->render();
		do_action( "wponion/metabox/render/{$this->unique()}/after", $post_id, $post, $this );
		do_action( 'wponion/metabox/render/after', $post_id, $post, $this );
	}

	/**
	 * Renders / Creates An First Instance based on the $is_init_field variable value.
	 *
	 * @param array|\WPO\Field    $field
	 * @param bool|\WPO\Container $container
	 * @param bool|\WPO\Container $sub_container
	 * @param bool                $is_init_field
	 *
	 * @return mixed
	 */
	public function render_field( $field = array(), $container = false, $sub_container = false, $is_init_field = false ) {
		$hash = implode( '/', array_filter( array(
			( wpo_is_container( $container ) ) ? $container->name() : '',
			( wpo_is_container( $sub_container ) ) ? $sub_container->name() : '',
		) ) );
		return parent::render_field( $field, $hash, $is_init_field );
	}

	/**
	 * Returns Unique Cache ID For each instance but only once.
	 *
	 * @return string
	 */
	public function get_cache_id() {
		return wponion_hash_string( "{$this->get_id()}_{$this->metabox_id()}_{$this->unique()}_{$this->module()}" );
	}

	/**
	 * Checks and returns currenty active sub_container and container.
	 *
	 * @return array
	 */
	public function active_page() {
		if ( null === $this->active_data ) {
			$active            = wponion_validate_parent_container_ids( array(
				'container_id'     => isset( $this->options_cache['container_id'] ) ? $this->options_cache['container_id'] : false,
				'sub_container_id' => isset( $this->options_cache['sub_container_id'] ) ? $this->options_cache['sub_container_id'] : false,
			) );
			$active            = ( false === $active ) ? $this->validate_container_sub_container( false, false ) : $this->validate_container_sub_container( $active['container_id'], $active['sub_container_id'] );
			$this->active_data = $active;
		}
		return $this->active_data;
	}

	/**
	 * Renders Metabox Hidden Data.
	 */
	public function hidden_secure_data() {
		echo <<<HTML
<div class="hidden wponion-metabox-secure-data">
	<input type="hidden" value="{$this->metabox_id()}" id="metabox_id">
	<input type="hidden" value="{$this->unique()}" id="unique">
	<input type="hidden" value="{$this->get_id()}" id="wponion_postid">
</div>
HTML;
	}

	/**
	 * Generates HTML Button to print in settings page.
	 *
	 * @return string
	 */
	public function save_button() {
		$user         = $this->option( 'save_button' );
		$default_attr = array(
			'class' => 'button button-success wponion-save',
			'type'  => 'button',
		);
		$user_attr    = ( wponion_is_array( $user ) && isset( $user['attributes'] ) ) ? $user['attributes'] : array();
		$text         = ( wponion_is_array( $user ) && isset( $user['label'] ) ) ? $user['label'] : false;
		$text         = ( false === $text && is_string( $user ) ) ? $user : __( 'Save Settings', 'wponion' );
		return '<button ' . wponion_array_to_html_attributes( $this->parse_args( $user_attr, $default_attr ) ) . ' >' . $text . '</button>';
	}

	/**
	 * checks if given (PAGE/SECTION) is active [CALLED AS TAB]
	 *
	 * @param bool $container
	 * @param bool $sub_container
	 * @param bool $first_container
	 *
	 * @return bool
	 */
	public function is_tab_active( $container = false, $sub_container = false, $first_container = false ) {
		if ( false !== $container && false === $sub_container ) {
			return ( $container === $this->active( true ) );
		} else {
			if ( $container === $this->active( true ) && $sub_container === $this->active( false ) ) {
				return true;
			} elseif ( $container !== $this->active( true ) && $first_container === $sub_container ) {
				return true;
			}
			return false;
		}
	}

	/**
	 * Saves Given User Data to db
	 *
	 * @param $post_id
	 */
	public function save_metabox( $post_id ) {
		if ( isset( $_POST[ $this->unique ] ) ) {
			$this->set_id( $post_id );
			$instance = new Save_Handler( array(
				'module'    => &$this,
				'unique'    => $this->unique,
				'fields'    => $this->fields(),
				'db_values' => $this->get_db_values(),
			) );
			$instance->run();

			$this->options_cache['field_errors'] = $instance->get_errors();
			$this->set_db_cache( $this->options_cache );
			$this->set_db_values( $instance->get_values() );
			$this->options_cache = false;
		}
	}
}
