<?php

namespace WPOnion\Modules\CPT;

defined( 'ABSPATH' ) || exit;


if ( ! class_exists( '\WPOnion\Modules\CPT\Post_Type' ) ) {
	/**
	 * Class Post_Type
	 *
	 * @package WPOnion\Modules\CPT
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method Post_Type exclude_from_search( $exclude_from_search )
	 * @method Post_Type publicly_queryable( $publicly_queryable )
	 * @method Post_Type show_in_menu( $show_in_menu )
	 * @method Post_Type show_in_admin_bar( $show_in_admin_bar )
	 * @method Post_Type menu_position( $menu_position )
	 * @method Post_Type menu_icon( $menu_icon )
	 * @method Post_Type capability_type( $capability_type )
	 * @method Post_Type has_archive( $has_archive )
	 * @method Post_Type permalink_epmask( $permalink_epmask )
	 * @method Post_Type can_export( $can_export )
	 * @method Post_Type delete_with_user( $delete_with_user )
	 */
	class Post_Type extends Common {
		/**
		 * Stores Post Type.
		 *
		 * @var bool
		 * @access
		 */
		protected $post_type = false;

		/**
		 * @var \WPOnion\Modules\CPT\Labels\Post_Type
		 * @access
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
				if ( is_array( $post_type_args_or_label ) ) {
					$this->arguments = $post_type_args_or_label;
					$this->post_type = $post_type;
				} elseif ( ! is_array( $post_type ) && ! is_array( $post_type_args_or_label ) ) {
					$this->post_type = $post_type;
					$this->label( $post_type_args_or_label );
				}

				$this->init_labels( '\WPOnion\Modules\CPT\Labels\Post_Type' );
				add_action( 'init', array( &$this, 'on_init' ) );
			}
		}

		/**
		 * Returns Current Post Type.
		 *
		 * @return bool|string
		 */
		public function post_type() {
			return $this->post_type;
		}


		/**
		 * Registers Post Type With WordPress.
		 */
		public function on_init() {
			$this->arguments['labels'] = $this->labels()
				->get_labels();
			register_post_type( $this->post_type, $this->arguments );
		}

		/**
		 * Singular  |   Plural
		 * --------------------
		 * boat      |   boats
		 * house     |   houses
		 * cat       |   cats
		 * river     |   rivers
		 * --------------------
		 *
		 * @param bool $singular Example : boat
		 * @param bool $plural Example : boats
		 *
		 * @return \WPOnion\Modules\CPT\Labels\Post_Type
		 */
		public function labels( $singular = false, $plural = false ) {
			return ( empty( $plural ) && empty( $singular ) ) ? $this->labels : $this->labels->set( $singular, $plural );
		}

		/**
		 * @param      $key
		 * @param      $supports
		 * @param bool $merge
		 *
		 * @return \WPOnion\Modules\CPT\Post_Type
		 */
		public function _merge( $key, $supports, $merge = true ) {
			$supports = ( ! is_array( $supports ) ) ? array( $supports ) : $supports;

			if ( false === $merge ) {
				return $this->set_arg( $key, $supports );
			} elseif ( true === $merge ) {
				$existing = $this->get_arg( 'supports', array() );
				$existing = ( ! is_array( $existing ) ) ? array( $existing ) : $existing;
				return $this->set_arg( $key, array_unique( array_filter( array_merge( $existing, $supports ) ) ) );
			}
			return $this;
		}

		/**
		 * @param      $supports
		 * @param bool $merge
		 *
		 * @return \WPOnion\Modules\CPT\Post_Type
		 */
		public function supports( $supports, $merge = true ) {
			return $this->_merge( 'supports', $supports, $merge );
		}

		/**
		 * @param string|array|\WPOnion\Modules\CPT\Taxonomy $taxonomies
		 * @param bool                                       $merge
		 *
		 * @return \WPOnion\Modules\CPT\Post_Type
		 */
		public function taxonomies( $taxonomies, $merge = true ) {
			$taxonomies = ( $taxonomies instanceof Taxonomy ) ? $taxonomies->taxonomy() : $taxonomies;
			return $this->_merge( 'taxonomies', $taxonomies, $merge );
		}

		/**
		 * @param $name
		 * @param $arguments
		 *
		 * @return null|\WPOnion\Modules\CPT\Post_Type|\WPOnion\Modules\CPT\Common
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
				return $this->set_arg( $name, $arguments[0] );
			}
			return parent::__call( $name, $arguments );
		}
	}
}
