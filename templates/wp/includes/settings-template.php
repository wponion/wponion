<?php
if ( ! is_array( $ins->fields() ) ) {
	return;
}
foreach ( $ins->fields() as $option ) {
	if ( false === $ins->valid_option( $option ) ) {
		continue;
	}

	$has_submenu = ( isset( $option['sections'] ) ) ? ' wponion-has-sections ' : '';

	$parent_active = ( true === $ins->is_tab_active( $option['name'], false ) ) ? ' wponion-parent-wraps ' : 'wponion-parent-wraps hidden';
	$parent_active = $parent_active . $has_submenu;
	?>
	<div id="wponion-tab-<?php echo $option['name']; ?>" class="<?php echo $parent_active; ?>">
		<?php
		echo $this->submenu_html( $option['name'] );

		if ( isset( $option['sections'] ) ) {
			$first_section = $ins->get_first_section( $option );

			foreach ( $option['sections'] as $section ) {
				if ( false === $ins->valid_option( $section, true ) ) {
					continue;
				}

				$section_active = ( true === $ins->is_tab_active( $option['name'], $section['name'] ) ) ? ' wponion-section-wraps ' : 'wponion-section-wraps hidden';

				echo '<div id="wponion-tab-' . $option['name'] . '-' . $section['name'] . '" class="' . $section_active . '" data-section-id="' . $section['name'] . '">';
				if ( isset( $section['callback'] ) ) {
					echo wponion_callback( $section['callback'], array( $ins ) );
				} elseif ( isset( $section['fields'] ) ) {
					foreach ( $section['fields'] as $field ) {
						echo $ins->render_field( $field, $option['name'], $section['name'] );
					}
				}
				echo '</div>';
			}
		} elseif ( isset( $option['fields'] ) ) {
			foreach ( $option['fields'] as $field ) {
				echo $ins->render_field( $field, $option['name'] );
			}
		} elseif ( isset( $option['callback'] ) && false !== $option['callback'] ) {
			$with_wrap = ( isset( $option['with_wrap'] ) && true === $option['with_wrap'] || ! isset( $option['with_wrap'] ) ) ? true : false;
			echo wponion_callback( $option['callback'], array( $ins ) );
		}
		?>
	</div>
	<?php
}
