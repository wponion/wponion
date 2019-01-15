<?php

foreach ( $ins->fields() as $option ) {
	if ( false === $ins->valid_option( $option ) ) {
		continue;
	}

	?>
	<div id="<?php echo $ins->output_parent_wrap_id( $option ); ?>"
		 class="<?php echo $ins->output_parent_wrap_class( $option ); ?>">
		<?php
		if ( $option->has_sections() ) {
			$first_section = $ins->get_first_section( $option );
			foreach ( $option->sections() as $section ) {
				if ( false === $ins->valid_option( $section, true ) ) {
					continue;
				}
				$sec_id    = $ins->output_section_wrap_id( $option, $section );
				$sec_class = $ins->output_section_wrap_class( $option, $section, $first_section );
				echo '<div id="' . $sec_id . '" class="' . $sec_class . '" data-section-id="' . $section->name() . '">';
				if ( $section->has_callback() ) {
					echo wponion_callback( $section->callback(), array( $section ) );
				} elseif ( $section->has_fields() ) {
					foreach ( $section->fields() as $field ) {
						echo $ins->render_field( $field, $option->name(), $section->name() );
					}
				}
				echo '</div>';
			}
		} elseif ( $option->fields() ) {
			foreach ( $option->fields() as $field ) {
				echo $ins->render_field( $field, $option->name() );
			}
		} elseif ( $option->has_callback() ) {
			echo wponion_callback( $option->callback(), array( $option ) );
		}
		?>
	</div>
	<?php
}
