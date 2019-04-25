<?php
/**
 * @var \WPO\Builder|\WPO\Container $option
 * @var \WPO\Builder|\WPO\Container $section
 * @var \WPO\Field                  $field
 */

foreach ( $ins->fields()
			  ->get() as $option ) {
	if ( false === $ins->valid_option( $option ) ) {
		continue;
	}

	$has_submenu   = ( $option->has_containers() ) ? ' wponion-has-sections ' : '';
	$parent_active = ( true === $ins->is_tab_active( $option->name(), false ) ) ? ' wponion-parent-wraps ' : 'wponion-parent-wraps hidden';
	$parent_active = $parent_active . $has_submenu;
	?>
	<div id="wponion-tab-<?php echo $option->name(); ?>" class="<?php echo $parent_active; ?>">
		<?php
		echo $this->submenu_html( $option->name() );

		if ( $option->has_containers() ) {
			$first_section = $option->first_container();

			foreach ( $option->containers() as $section ) {
				if ( false === $ins->valid_option( $section, true ) ) {
					continue;
				}

				$section_active = ( true === $ins->is_tab_active( $option->name(), $section->name() ) ) ? ' wponion-section-wraps ' : 'wponion-section-wraps hidden';

				echo '<div id="wponion-tab-' . $option->name() . '-' . $section->name() . '" class="' . $section_active . '" data-section-id="' . $section->name() . '">';
				if ( $section->has_callback() ) {
					echo wponion_callback( $section->callback(), array( $section ) );
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
			echo wponion_callback( $option->callback(), array( $option ) );
		}
		?>
	</div>
	<?php
}
