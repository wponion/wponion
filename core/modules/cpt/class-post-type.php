<?php

namespace WPOnion\Modules\CPT;

defined( 'ABSPATH' ) || exit;


/**
 * Class Post_Type
 *
 * @package WPOnion\Modules\CPT
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 *
 * @method $this exclude_from_search( $exclude_from_search )
 * @method $this publicly_queryable( $publicly_queryable )
 * @method $this show_in_menu( $show_in_menu )
 * @method $this show_in_admin_bar( $show_in_admin_bar )
 * @method $this menu_position( $menu_position )
 * @method $this menu_icon( $menu_icon )
 * @method $this capability_type( $capability_type )
 * @method $this has_archive( $has_archive )
 * @method $this permalink_epmask( $permalink_epmask )
 * @method $this can_export( $can_export )
 * @method $this delete_with_user( $delete_with_user )
 */
class Post_Type extends Common {
	/**
	 * @var \WPOnion\Modules\CPT\Labels\Post_Type
	 */
	protected $labels = false;

	/**
	 * Post_Type constructor.
	 *
	 * @param bool|string       $post_type
	 * @param bool|array|string $post_type_args_or_label
	 */
	public function __construct( $post_type = false, $post_type_args_or_label = null ) {
		if ( ! empty( $post_type ) ) {
			$this->unique = $post_type;

			if ( is_array( $post_type_args_or_label ) ) {
				$this->settings = $post_type_args_or_label;
			} elseif ( ! is_array( $post_type ) && ! is_array( $post_type_args_or_label ) ) {
				$this->label( $post_type_args_or_label );
			}

			$this->init_labels( '\WPOnion\Modules\CPT\Labels\Post_Type' );
			add_action( 'init', array( &$this, 'init' ) );
		}
	}

	/**
	 * Registers Post Type With WordPress.
	 */
	public function init() {
		$args           = $this->option();
		$args['labels'] = $this->labels->option();
		register_post_type( $this->unique(), $args );
	}

	/**
	 * @param string|bool $singular
	 * @param string|bool $plural
	 *
	 * @return \WPOnion\Modules\CPT\Labels\Post_Type
	 *
	 * @example labels('boat','boats')
	 * @example labels('river','rivers')
	 */
	public function labels( $singular = false, $plural = false ) {
		return ( empty( $plural ) && empty( $singular ) ) ? $this->labels : $this->labels->set( $singular, $plural );
	}

	/**
	 * @param      $key
	 * @param      $supports
	 * @param bool $merge
	 *
	 * @return $this
	 */
	protected function _merge( $key, $supports, $merge = true ) {
		$supports = ( ! is_array( $supports ) ) ? array( $supports ) : $supports;
		if ( true === $merge ) {
			$existing = $this->option( 'supports', array() );
			$existing = ( ! is_array( $existing ) ) ? array( $existing ) : $existing;
			return $this->set_option( $key, array_unique( array_filter( array_merge( $existing, $supports ) ) ) );
		}
		return ( false === $merge ) ? $this->set_option( $key, $supports ) : $this;
	}

	/**
	 * @param      $supports
	 * @param bool $merge
	 *
	 * @return $this
	 */
	public function supports( $supports, $merge = true ) {
		return $this->_merge( 'supports', $supports, $merge );
	}

	/**
	 * @param string|array|\WPOnion\Modules\CPT\Taxonomy $taxonomies
	 * @param bool                                       $merge
	 *
	 * @return $this
	 */
	public function taxonomies( $taxonomies, $merge = true ) {
		$taxonomies = ( $taxonomies instanceof Taxonomy ) ? $taxonomies->unique() : $taxonomies;
		return $this->_merge( 'taxonomies', $taxonomies, $merge );
	}

	/**
	 * @param $name
	 * @param $arguments
	 *
	 * @return null|$this
	 */
	public function __call( $name, $arguments ) {
		$array = array(
			'exclude_from_search',
			'publicly_queryable',
			'show_in_menu',
			'show_in_admin_bar',
			'menu_position',
			'menu_icon',
			'capability_type',
			'has_archive',
			'permalink_epmask',
			'can_export',
			'delete_with_user',
		);
		if ( in_array( $name, $array, true ) && isset( $arguments[0] ) ) {
			return $this->set_option( $name, $arguments[0] );
		}
		return parent::__call( $name, $arguments );
	}
}
