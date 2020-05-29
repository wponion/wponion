<?php

namespace WPOnion\Field;

use WPO\Builder;
use WPOnion\Field;
use WPOnion\Modules\Metabox\Core;

defined( 'ABSPATH' ) || exit;

/**
 * Class Metabox
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Metabox extends Field {
	/**
	 * @var \WPOnion\Modules\Metabox\Core
	 */
	protected $metabox_instance = false;

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		echo $this->before();
		$fields = $this->option( 'fields' );
		if ( ! $fields instanceof Builder ) {
			$fields = wponion_builder()->set_fields( $fields );
		}

		$options                  = array(
			'metabox_title' => $this->option( 'metabox_title' ),
			'metabox_id'    => $this->option( 'metabox_id' ),
			'screens'       => $this->option( 'screens' ),
			'context'       => $this->option( 'context' ),
			'priority'      => $this->option( 'priority' ),
			'theme'         => $this->option( 'theme' ),
			'theme_color'   => $this->option( 'theme_color' ),
			'ajax'          => $this->option( 'ajax' ),
			'set_cache'     => $this->option( 'set_cache' ),
			'get_cache'     => $this->option( 'get_cache' ),
			'get_db_values' => $this->option( 'get_db_values' ),
			'set_db_values' => $this->option( 'set_db_values' ),
			'module'        => $this->module(),
			'option_name'   => $this->name(),
		);
		$options['set_cache']     = function () {
			return array();
		};
		$options['get_cache']     = function () {
			return array();
		};
		$options['get_db_values'] = function () {
			return array();
		};
		$options['set_db_values'] = function () {
			return array();
		};
		if ( false === $options['screens'] ) {
			$screen = get_current_screen();
			if ( $screen && isset( $screen->id ) ) {
				$options['screens'] = $screen->id;
			}
		}

		$this->metabox_instance = new Core( $options, $fields );
		$this->metabox_instance->register_metabox();
		do_meta_boxes( $options['screens'], $options['context'], null );
		echo $this->after();
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
		wp_enqueue_script( 'post' );
		wp_enqueue_style( 'post' );
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
		return array(
			'metabox_title' => false,
			'metabox_id'    => false,
			'context'       => 'normal',
			'screens'       => false,
			'priority'      => null,
			'theme'         => 'wp_modern',
			'theme_color'   => 'false',
			'ajax'          => false,
			'module'        => false,
		);
	}
}
