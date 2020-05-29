<?php

namespace WPOnion\Integrations\Page_Builders;

use WPOnion\Integrations\Page_Builders\Elementor\Metabox;
use WPOnion\Integrations\Page_Builders\Elementor\Metabox_Data;
use WPOnion\Integrations\Page_Builders\Elementor\Taxonomy;
use WPOnion\Integrations\Page_Builders\Elementor\Taxonomy_Data;

defined( 'ABSPATH' ) || exit;

/**
 * Class Elementor
 *
 * @package WPOnion\Integrations\Page_Builders
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
final class Elementor {
	/**
	 * Inits Base Class.
	 */
	public static function init() {
		add_action( 'elementor/dynamic_tags/register_tags', array( __CLASS__, 'register_tags' ) );
	}

	/**
	 * @param \Elementor\Core\DynamicTags\Manager $dynamic_tags
	 */
	public static function register_tags( $dynamic_tags ) {
		self::set_metaboxes( $dynamic_tags );
		self::set_taxonomy( $dynamic_tags );
	}

	/**
	 * @param \Elementor\Core\DynamicTags\Manager $dynamic_tags
	 */
	private static function set_taxonomy( $dynamic_tags ) {
		/**
		 * @var \WPOnion\Modules\Admin\Taxonomy                        $mb
		 * @var \WPOnion\Integrations\Page_Builders\Elementor\Taxonomy $new_class
		 */
		$instances = 'all';
		$taxonomy  = wponion_taxonomy_registry( $instances );
		if ( is_array( $taxonomy ) && ! empty( array_filter( $taxonomy ) ) ) {
			foreach ( $taxonomy as $mb ) {
				if ( ! $mb instanceof \WPOnion\Modules\Admin\Taxonomy ) {
					continue;
				}
				if ( false !== $mb->option( 'elementor' ) ) {
					$title     = $mb->option( 'elementor' );
					$slug      = str_replace( '-', '', sanitize_title( $title ) );
					$new_class = 'wpo_' . $slug . '_elementor_taxonomy';
					$class     = new class extends Taxonomy {
					};

					class_alias( get_class( $class ), $new_class );
					$new_class::$wpo_title    = $title;
					$new_class::$wpo_slug     = $slug;
					$new_class::$wpo_instance = $mb;
					$dynamic_tags->register_tag( $new_class );
					$class_data = new class extends Taxonomy_Data {
					};

					$new_class = $new_class . '_data';
					class_alias( get_class( $class_data ), $new_class );
					$new_class::$wpo_title    = $title;
					$new_class::$wpo_slug     = $slug . '-data';
					$new_class::$wpo_instance = $mb;
					$dynamic_tags->register_tag( $new_class );
				}
			}
		}
	}

	/**
	 * @param \Elementor\Core\DynamicTags\Manager $dynamic_tags
	 */
	private static function set_metaboxes( $dynamic_tags ) {
		/**
		 * @var \WPOnion\Modules\Metabox\Metabox                      $mb
		 * @var \WPOnion\Integrations\Page_Builders\Elementor\Metabox $new_class
		 */
		$instances = 'all';
		$metaboxes = wponion_metabox_registry( $instances );
		if ( is_array( $metaboxes ) && ! empty( array_filter( $metaboxes ) ) ) {
			foreach ( $metaboxes as $mb ) {
				if ( ! $mb instanceof \WPOnion\Modules\Metabox\Metabox ) {
					continue;
				}
				if ( false !== $mb->option( 'elementor' ) ) {
					$title     = ( true === $mb->option( 'elementor' ) ) ? $mb->option( 'metabox_title' ) : $mb->option( 'elementor' );
					$slug      = str_replace( '-', '', sanitize_title( $title ) );
					$new_class = 'wpo_' . $slug . '_elementor_metabox';
					$class     = new class extends Metabox {
					};

					class_alias( get_class( $class ), $new_class );
					$new_class::$wpo_title    = $title;
					$new_class::$wpo_slug     = $slug;
					$new_class::$wpo_instance = $mb;
					$dynamic_tags->register_tag( $new_class );
					$class_data = new class extends Metabox_Data {
					};

					$new_class = $new_class . '_data';
					class_alias( get_class( $class_data ), $new_class );
					$new_class::$wpo_title    = $title;
					$new_class::$wpo_slug     = $slug . '-data';
					$new_class::$wpo_instance = $mb;
					$dynamic_tags->register_tag( $new_class );
				}
			}
		}
	}
}
