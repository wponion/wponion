<?php
foreach ( $ins->fields() as $option ) {
	if ( false === $ins->valid_option( $option ) ) {
		continue;
	}

	$has_submenu   = ( $option->has_sections() ) ? ' wponion-has-sections ' : '';
	$parent_active = ( true === $ins->is_tab_active( $option->name(), false ) ) ? ' wponion-parent-wraps ' : 'wponion-parent-wraps hidden';
	$parent_active = $parent_active . $has_submenu;
	?>
	<div id="wponion-tab-<?php echo $option->name(); ?>" class="<?php echo $parent_active; ?>">
		<?php
		echo $this->submenu_html( $option->name() );

		if ( $option->has_sections() ) {
			$first_section = $ins->get_first_section( $option );

			foreach ( $option->sections() as $section ) {
				if ( false === $ins->valid_option( $section, true ) ) {
					continue;
				}

				$section_active = ' wponion-section-wraps ';

				if ( true === $ins->is_tab_active( $option->name(), $section->name() ) ) {
					$section_active .= '';
				} elseif ( $section->name() === $first_section ) {
					$section_active .= '';
				} else {
					$section_active .= ' hidden ';
				}

				echo '<div id="wponion-tab-' . $option->name() . '-' . $section->name() . '" class="' . $section_active . '" data-section-id="' . $section->name() . '">';
				if ( $section->has_callback() && ! empty( $section->callback() ) ) {
					echo wponion_callback( $section->callback(), array( $ins ) );
				} elseif ( $section->has_fields() ) {
					foreach ( $section->fields() as $field ) {
						echo $ins->render_field( $field, $option->name(), $section->name() );
					}
				}
				echo '</div>';
			}
		} elseif ( $option->has_fields() ) {
			foreach ( $option->fields() as $field ) {
				echo $ins->render_field( $field, $option->name() );
			}
		} elseif ( $option->has_callback() && ! empty( $option->callback() ) ) {
			echo wponion_callback( $option->callback(), array( $ins ) );
		}
		?>
	</div>
	<?php
}
