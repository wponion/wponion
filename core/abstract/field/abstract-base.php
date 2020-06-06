<?php

namespace WPOnion\Bridge\Field;

use WPOnion\Bridge;
use WPOnion\Traits\Internal\Module;
use WPOnion\Traits\Internal\Unique;

defined( 'ABSPATH' ) || exit;

/**
 * Class Base
 *
 * @package WPOnion\Bridge\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Base extends Bridge {
	use Module {
		module as protected _module;
	}
	use Unique {
		unique as protected _unique;
	}

	/**
	 * Stores Output HTML.
	 *
	 * @var string
	 * @since 1.5
	 */
	protected $output_html = '';

	/**
	 * Total Fields.
	 *
	 * @var int
	 */
	public static $total_fields = 0;

	/**
	 * value
	 *
	 * @var array|string
	 */
	protected $value = array();

	/**
	 * Stores Field Errors.
	 *
	 * @var null
	 */
	protected $errors = null;

	/**
	 * Stores Debug Data.
	 *
	 * @var array
	 */
	protected $debug = array();

	/**
	 * select_framework
	 *
	 * @var bool
	 */
	protected $select_framework = false;

	/**
	 * @var bool
	 */
	protected $base_unique = false;

	/**
	 * Returns Module name or module instance.
	 *
	 * @param bool $instance
	 *
	 * @return string|\WPOnion\Bridge\Module
	 */
	public function module( $instance = false ) {
		$module = $this->_module();
		if ( true === $instance ) {
			$function = 'wponion_' . $module;
			return wponion_callback( $function, array( $this->base_unique() ) );
		}
		return $module;
	}

	/**
	 * Returns Fields Unique ID.
	 *
	 * @param string $extra
	 * @param bool   $unique
	 *
	 * @return string
	 */
	public function unique( $extra = '', $unique = false ) {
		$unique = ( false === $unique ) ? $this->unique : $unique;
		return ( ! empty( $extra ) ) ? $unique . '/' . $extra : $unique;
	}

	/**
	 * Returns A Unique ID
	 *
	 * @return string
	 */
	protected function unid() {
		return $this->module() . '_' . $this->field_id();
	}

	/**
	 * Below Functions Are Used For Internal Hooks.
	 */

	/**
	 * This function is called after array merge with default is done.
	 */
	protected function handle_arguments() {
	}

	/**
	 * Fired after __constructor fired for the current plugin to handle subplugins.
	 */
	protected function init_subfields() {
	}

	/**
	 * This function is used to set any args that requires in javascript for the current field.
	 *
	 * @return array
	 */
	protected function js_args() {
		return array();
	}

	/**
	 * Stors HTML Output.
	 *
	 * @param $content
	 *
	 * @return $this|string
	 * @since 1.5
	 */
	protected function html( $content ) {
		if ( true === $content ) {
			$html              = $this->output_html;
			$this->output_html = '';
			return $html;
		}
		$this->output_html .= $content;
		return $this;
	}

	/**
	 * Function Required To Register / Load current field's assets.
	 *
	 * @return mixed
	 */
	abstract public function assets();

	/**
	 * Custom Function To Return Current Fields Default Args.
	 *
	 * @return array
	 */
	abstract protected function defaults();

	/**
	 * Function Where all field can output their html.
	 *
	 * @return string
	 */
	abstract protected function output();
}
