<?php
defined( 'ABSPATH' ) || exit;

/**
 * @var $this \WPOnion\Theme\WP
 * @var $container \WPO\Container
 * @var $sub_container \WPO\Container
 * @var $field \WPO\Field
 */
$module  = $this->module_instance();
$menus   = $module->metabox_menus();
$options = $module->fields()
	->get();
echo '<div class="content-wrap wpo-col-xs-12">';
if ( wponion_is_array( $options ) ) {
	foreach ( $options as $container ) {
		if ( $module->valid_field( $container ) ) {
			echo $module->render_field( $container );
		} else {
			if ( false === $module->valid_container( $container ) ) {
				continue;
			}

			$container_id    = $module->container_wrap_id( $container );
			$container_class = $module->container_wrap_class( $container );
			echo '<div id="' . $container_id . '" class="' . $container_class . '">';

			if ( $container->has_containers() ) {
				echo $this->settings_submenu( $container->slug(), $menus );
				$first_container = $container->first_container();
				foreach ( $container->containers() as $sub_container ) {
					if ( false === $module->valid_container( $sub_container ) ) {
						continue;
					}
					$sub_id    = $module->container_wrap_id( $container, $sub_container );
					$sub_class = $module->container_wrap_class( $container, $sub_container, $first_container );
					echo '<div id="' . $sub_id . '" class="wponion-container-wraps ' . str_replace( 'row', '', $sub_class ) . '">';

					if ( $sub_container->has_callback() ) {
						echo wponion_callback( $sub_container->callback(), array( $sub_container ) );
					} elseif ( $sub_container->has_fields() ) {
						foreach ( $sub_container->fields() as $field ) {
							echo $module->render_field( $field, $container, $sub_container );
						}
					}
					echo '</div>';
				}
			} elseif ( $container->has_fields() || $container->has_callback() ) {
				if ( $container->has_callback() ) :
					echo wponion_callback( $container->callback(), array( $container ) );
				elseif ( $container->has_fields() ) :
					foreach ( $container->fields() as $field ) :
						echo $module->render_field( $field, $container );
					endforeach;
				endif;
			}
			echo '</div>';

		}
	}
}
echo '</div>';
