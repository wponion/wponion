<?php

namespace WPOnion\Modules\CPT;

use WPOnion\Traits\Class_Options;
use WPOnion\Traits\Internal\Unique;
use WPOnion\Traits\Magic_Methods\Options;

defined( 'ABSPATH' ) || exit;

/**
 * Class Common
 *
 * @package WPOnion\Modules\CPT
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 *
 * @method $this show_ui( $show_ui )
 * @method $this show_in_nav_menus( $show_in_nav_menus )
 * @method $this show_in_rest( $show_in_rest )
 * @method $this rest_base( $rest_base )
 * @method $this rest_controller_class( $rest_controller_class )
 * @method $this rewrite( $rewrite )
 * @method $this query_var( $query_var )
 * @method $this label( $label )
 * @method $this description( $description )
 * @method $this hierarchical( $hierarchical )
 * @method $this capabilities( $capabilities )
 */
abstract class Common {
	use Class_Options;
	use Options;
	use Unique;

	/**
	 * @var \WPOnion\Modules\CPT\Labels\Post_Type
	 */
	protected $labels = false;

	/**
	 * @param $name
	 * @param $arguments
	 *
	 * @return $this
	 */
	public function __call( $name, $arguments ) {
		$array = array(
			'show_ui',
			'show_in_nav_menus',
			'show_in_rest',
			'rest_base',
			'rest_controller_class',
			'rewrite',
			'query_var',
			'label',
			'description',
			'hierarchical',
			'capabilities',
		);
		if ( in_array( $name, $array, true ) && isset( $arguments[0] ) ) {
			return $this->set_option( $name, $arguments[0] );
		}
		return null;
	}

	/**
	 * Inits Labels.
	 *
	 * @param string $class
	 */
	protected function init_labels( $class ) {
		$labels       = ( $this->has_option( 'labels' ) ) ? $this->option( 'labels' ) : $this->option( 'singular' );
		$this->labels = class_exists( $class ) ? new $class( $labels, $this->option( 'plural' ) ) : false;
		$this->remove_option( array( 'singular', 'plural', 'labels' ) );
	}
}
