<?php
if ( ! is_array( $this->settings()->fields() ) ) {
	return;
}
foreach ( $this->settings()->fields() as $option ) {
	if ( false === $this->settings()->valid_option( $option ) ) {
		continue;
	}
	$slug             = $option['name'];
	$is_parent_active = $this->settings()->is_tab_active( $option['name'], false );
	$parent_active    = ( true === $is_parent_active ) ? ' wponion-parent-wraps ' : 'wponion-parent-wraps hidden';
	?>
	<div id="wponion-tab-<?php echo $slug; ?>" class="<?php echo $parent_active; ?>">
		<div class="postbox">
			<?php
			echo $this->submenu_html( $slug );

			if ( isset( $option['sections'] ) ) {
				$first_section = $this->settings()->get_first_section( $option );

				?>
				<div class="inside">
					<?php
					foreach ( $option['sections'] as $section ) {
						if ( false === $this->settings()->valid_option( $section, true ) ) {
							continue;
						}
						$child_slug        = $section['name'];
						$is_section_active = $this->settings()->is_tab_active( $option['name'], $section['name'] );
						$section_active    = ( true === $is_section_active ) ? ' wponion-section-wraps ' : 'wponion-section-wraps hidden';
						echo '<div id="wponion-tab-' . $slug . '-' . $child_slug . '" class="' . $section_active . '" data-section-id="' . $child_slug . '">';
						foreach ( $section['fields'] as $field ) {
							echo $this->settings()->render_field( $field, $option['name'], $section['name'] );
						}
						echo '</div>';
					}
					?>
				</div>
				<?php

			} elseif ( isset( $option['fields'] ) ) {
				echo '<div class="inside">';
				foreach ( $option['fields'] as $field ) {
					echo $this->settings()->render_field( $field, $option['name'] );
				}
				echo '</div>';

			} elseif ( isset( $option['callback'] ) && false !== $option['callback'] ) {
				$with_wrap = ( isset( $option['with_wrap'] ) && true === $option['with_wrap'] || ! isset( $option['with_wrap'] ) ) ? true : false;
				if ( $with_wrap ) {
					echo '<div class="inside">';
				}

				if ( $with_wrap ) {
					echo '</div>';
				}
			}

			?>
		</div>
	</div>
	<?php
}
?>

