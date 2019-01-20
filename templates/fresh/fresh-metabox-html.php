<?php
/**
 * @var $settings \WPOnion\Modules\Metabox
 * @var $container \WPO\Container
 * @var $sub_container \WPO\Container
 *
 */
$settings = $this->metabox();
$menus    = $settings->metabox_menus();
$active   = $settings->active_page();
$return   = '';

if ( ! empty( $settings->option( 'theme_color' ) ) && 'false' !== $settings->option( 'theme_color' ) ) {
	echo '<style>';
	echo '#' . $settings->metabox_id() . ' ';
	echo ' ul.wponion-metabox-parent-menu > li > a.active ';
	echo ' , ';
	echo '#' . $settings->metabox_id() . ' ';
	echo ' ul.wponion-metabox-parent-menu > li:hover > a ';
	echo '{background:' . $settings->option( 'theme_color' ) . '}';
	echo '</style>';
}
?>
<div class="<?php echo $settings->wrap_class( ' wponion-fresh-theme-layouts ' ); ?>">
	<div class="wponion-metabox-inside-wrap">
		<?php
		if ( wponion_is_array( $menus ) && ! empty( $menus ) && count( $menus ) > 1 ) {
			$return = '<div class="menu-wrap"><ul class="meta-menu wponion-metabox-parent-menu">';
			foreach ( $menus as $slug => $menu ) {
				if ( isset( $menu['is_seperator'] ) && true === $menu['is_seperator'] ) {
					continue;
				}
				$return .= '<li>';

				if ( isset( $menu['submenu'] ) && false !== $menu['submenu'] ) {
					$ex_class                    = ( isset( $menu['attributes']['class'] ) ) ? $menu['attributes']['class'] : '';
					$menu['attributes']['class'] = $ex_class . ' ' . 'dropdown';
					$is_active                   = ( $active['container_id'] === $menu['name'] ) ? 'style="display:block;"' : '';
					$return                      = $return . ' ' . $this->metabox_menu_html( $menu ) . '<ul class="meta-submenu" ' . $is_active . '>';
					foreach ( $menu['submenu'] as $_m ) {
						$return .= '<li>' . $this->metabox_menu_html( $_m, $menu['name'] ) . '</li>';
					}
					$return .= '</ul>';
				} else {
					$return .= $this->metabox_menu_html( $menu );
				}
				$return .= '</li>';
			}
			$return .= '</ul> <div class="menu-bg-wrap"></div> </div>';
		}
		echo $return;
		?>
		<div class="wponion-metabox-content-wrap content-wrap">
			<?php
			foreach ( $settings->fields()
						  ->get() as $container ) {
				if ( false === $settings->valid_field( $container ) && true === $settings->valid_option( $container ) ) {
					$class = ( $container->name() === $active['container_id'] ) ? '' : 'hidden';
					$slug  = $container->name();
					?>
					<div id="wponion-tab-<?php echo $slug; ?>" class="wponion-parent-wraps <?php echo $class; ?>">
						<?php
						if ( $container->has_containers() ) {
							foreach ( $container->containers() as $sub_container ) {
								if ( false === $settings->valid_option( $sub_container ) ) {
									continue;
								}

								$child_class = ( $sub_container->name() === $active['sub_container_id'] ) ? '' : 'hidden';
								echo '<div id="wponion-tab-' . $slug . '-' . $sub_container->name() . '" class="wponion-section-wraps ' . $child_class . '" data-section-id="' . $sub_container->name() . '">';
								if ( $sub_container->has_fields() ) {
									foreach ( $sub_container->fields() as $field ) {
										echo $settings->render_field( $field, $container->name(), $sub_container->name() );
									}
								} elseif ( $sub_container->has_callback() ) {
									echo wponion_callback( $sub_container->callback(), array( $sub_container ) );
								}
								echo '</div>';
							}
						} elseif ( $container->has_fields() ) {
							foreach ( $container->fields() as $field ) {
								echo $settings->render_field( $field, $container->name() );
							}
						} elseif ( $container->has_callback() ) {
							echo wponion_callback( $container->callback(), array( $container ) );
						}
						?>
					</div>
					<?php
				} elseif ( $settings->valid_field( $container ) ) {
					echo $settings->render_field( $container, false );
				}
			}
			?>
		</div>
	</div>
	<?php if ( false !== $settings->option( 'ajax' ) ) { ?>
		<h2 class="ajax-container">
			<?php
			echo $settings->hidden_secure_data();
			echo $settings->save_button();
			?>
		</h2>
	<?php } ?>
</div>
