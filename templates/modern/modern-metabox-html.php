<?php
$settings = $this->metabox();
$menus    = $settings->metabox_menus();
$active   = $settings->active_page();
$return   = '';
?>
<div class="<?php echo $settings->wrap_class( '', true ); ?>">
	<div class="wponion-modern-metabox-container">
		<div class="wponion-modern-metabox-tabs">
			<ul>
				<?php
				foreach ( $menus as $slug => $menu ) {
					if ( isset( $menu['is_seperator'] ) && true === $menu['is_seperator'] ) {
						continue;
					}


					if ( isset( $menu['submenu'] ) && false !== $menu['submenu'] ) {
						echo '<li>' . $this->metabox_menu_html( $menu ) . '<ul>';

						foreach ( $menu['submenu'] as $submenu ) {
							echo '<li>';
							echo $this->metabox_menu_html( $submenu, $menu['name'] );
							echo '</li>';
						}
						echo '</ul></li>';
					} else {
						echo '<li>' . $this->metabox_menu_html( $menu ) . '</li>';
					}
				}

				?>
			</ul>
		</div>
		<div class="wponion-metabox-content-wrap">
			<?php
			foreach ( $settings->fields() as $option ) {
				if ( false === $settings->valid_field( $option ) && true === $settings->valid_option( $option ) ) {
					$class = ( $option->name() === $active['parent_id'] ) ? '' : 'hidden';
					$slug  = $option->name();
					?>
					<div id="wponion-tab-<?php echo $slug; ?>" class="wponion-parent-wraps <?php echo $class; ?>">
						<?php
						if ( $option->has_sections() ) {
							foreach ( $option->sections() as $section ) {
								if ( false === $settings->valid_option( $section ) ) {
									continue;
								}

								$child_class = ( $section->name() === $active['section_id'] ) ? '' : 'hidden';
								echo '<div id="wponion-tab-' . $slug . '-' . $section->name() . '" class="wponion-section-wraps ' . $child_class . '" data-section-id="' . $section->name() . '">';
								if ( $section->has_fields() ) {
									foreach ( $section->fields() as $field ) {
										echo $settings->render_field( $field, $option['name'], $section['name'] );
									}
								} elseif ( $section->has_callback() ) {
									echo wponion_callback( $section->callback() );
								}
								echo '</div>';
							}
						} elseif ( $option->has_fields() ) {
							foreach ( $option->fields() as $field ) {
								echo $settings->render_field( $field, $option['name'] );
							}
						} elseif ( $option->has_callback() ) {
							echo wponion_callback( $option->callback() );
						}
						?>
					</div>
					<?php
				} elseif ( $settings->valid_field( $option ) ) {
					echo $settings->render_field( $option, false );
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
