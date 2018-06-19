<?php
global $wponion_modern_theme;
$settings = $wponion_modern_theme->metabox();
?>
<div class="wponion-metabox-inside-wrap">
	<div class="wponion-metabox-menu-wrap">
		<?php
		$menus  = $settings->metabox_menus();
		$return = '';
		if ( is_array( $menus ) ) {
			$return = '<ul class="meta-menu">';
			foreach ( $menus as $slug => $menu ) {
				if ( isset( $menu['is_seperator'] ) && true === $menu['is_seperator'] ) {
					continue;
				}
				$return .= '<li>';

				if ( isset( $menu['submenu'] ) && false !== $menu['submenu'] ) {
					$ex_class                    = ( isset( $menu['attributes']['class'] ) ) ? $menu['attributes']['class'] : '';
					$menu['attributes']['class'] = $ex_class . ' ' . 'dropdown';
					$return                      = $return . ' ' . $wponion_modern_theme->meetabox_menu_html( $menu ) . '<ul class="meta-submenu">';
					foreach ( $menu['submenu'] as $_m ) {
						$return .= '<li>' . $wponion_modern_theme->meetabox_menu_html( $_m ) . '</li>';
					}
					$return .= '</ul>';
				} else {
					$return .= $wponion_modern_theme->meetabox_menu_html( $menu );
				}
				$return .= '</li>';
			}
			$return .= '</ul>';
		}
		echo $return;
		?>
		<div class="wponion-metabox-menu-bg-wrap"></div>
	</div>

	<div class="wponion-metabox-content-wrap">
		<?php
		foreach ( $settings->fields() as $option ) {
			if ( false === $settings->valid_option( $option ) ) {
				continue;
			}
			$slug = $option['name'];
			?>
			<div id="wponion-tab-<?php echo $slug; ?>" class="wponion-parent-wraps hidden">
				<?php
				if ( isset( $option['sections'] ) ) {
					foreach ( $option['sections'] as $section ) {
						if ( false === $settings->valid_option( $section ) ) {
							continue;
						}
						$child_slug = $section['name'];
						echo '<div id="wponion-tab-' . $slug . '-' . $child_slug . '" class="wponion-section-wraps hidden" data-section-id="' . $child_slug . '">';
						foreach ( $section['fields'] as $field ) {
							echo $settings->render_field( $field, $option['name'], $section['name'] );
						}
						echo '</div>';
					}
				} elseif ( isset( $option['fields'] ) ) {
					foreach ( $option['fields'] as $field ) {
						echo $settings->render_field( $field, $option['name'] );
					}
				} elseif ( isset( $option['callback'] ) && false !== $option['callback'] ) {
					$with_wrap = ( isset( $option['with_wrap'] ) && true === $option['with_wrap'] || ! isset( $option['with_wrap'] ) ) ? true : false;
				}
				?>
			</div>
			<?php
		}
		?>
	</div>
</div>
