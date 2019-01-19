<?php
/**
 * @var $container \WPO\Container
 * @var $sub_container \WPO\Container
 */
foreach ( $ins->fields() as $container ) {
	if ( false === $ins->valid_option( $container ) ) {
		continue;
	}

	?>
	<div id="<?php echo $ins->output_container_wrap_id( $container ); ?>"
		 class="<?php echo $ins->output_container_wrap_class( $container ); ?>">
		<?php
		if ( $container->has_containers() ) {
			$first_section = $container->first_container()
				->name();
			foreach ( $container->containers() as $sub_container ) {
				if ( false === $ins->valid_option( $sub_container, true ) ) {
					continue;
				}
				$sec_id    = $ins->output_sub_container_wrap_id( $container, $sub_container );
				$sec_class = $ins->output_sub_container_wrap_class( $container, $sub_container, $first_section );
				echo '<div id="' . $sec_id . '" class="' . $sec_class . '" data-section-id="' . $sub_container->name() . '">';
				if ( $sub_container->has_callback() ) {
					echo wponion_callback( $sub_container->callback(), array( $sub_container ) );
				} elseif ( $sub_container->has_fields() ) {
					foreach ( $sub_container->fields() as $field ) {
						echo $ins->render_field( $field, $container->name(), $sub_container->name() );
					}
				}
				echo '</div>';
			}
		} elseif ( $container->has_fields() ) {
			foreach ( $container->fields() as $field ) {
				echo $ins->render_field( $field, $container->name() );
			}
		} elseif ( $container->has_callback() ) {
			echo wponion_callback( $container->callback(), array( $container ) );
		}
		?>
	</div>
	<?php
}
