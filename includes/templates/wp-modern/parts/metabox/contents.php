<?php
defined( 'ABSPATH' ) || exit;

/**
 * @var \WPOnion\Theme\WP_Modern  $this
 * @var \WPO\Field|\WPO\Container $container
 * @var \WPO\Container            $sub_container
 * @var \WPO\Field                $field
 */
$metabox     = $this->module_instance();
$fields      = $metabox->fields();
$has_fields  = $fields->has_fields();
$extra_class = ( true === $has_fields ) ? ' wpo-row only-fields ' : '';
?>


<div class="content-wrap <?php echo $extra_class; ?>">
	<?php
	if ( ! empty( $fields->get() ) ) :
		foreach ( $fields->get() as $container ) :
			if ( $metabox->valid_field( $container ) ) {
				echo $metabox->render_field( $container );
			} else {
				if ( false === $metabox->valid_container( $container ) ) {
					continue;
				}
				$container_id    = $metabox->container_wrap_id( $container );
				$container_class = $metabox->container_wrap_class( $container );

				if ( $container->has_containers() ) :
					$first_container = $container->first_container();
					foreach ( $container->containers() as $sub_container ) :
						if ( false === $metabox->valid_container( $sub_container ) ) {
							continue;
						}
						$sub_id    = $metabox->container_wrap_id( $container, $sub_container );
						$sub_class = $metabox->container_wrap_class( $container, $sub_container, $first_container );
						?>
						<div id="<?php echo $sub_id; ?>" class="wponion-container-wraps <?php echo $sub_class; ?>">
							<?php
							if ( $sub_container->has_callback() ) :
								echo wponion_callback( $sub_container->callback(), array( $sub_container ) );
							elseif ( $sub_container->has_fields() ) :
								foreach ( $sub_container->fields() as $field ) :
									echo $metabox->render_field( $field, $container, $sub_container );
								endforeach;
							endif;
							?>
						</div>
					<?php
					endforeach;
				elseif ( $container->has_fields() || $container->has_callback() ) :
					?>
					<div id="<?php echo $container_id; ?>" class="<?php echo $container_class; ?>">
						<?php
						if ( $container->has_callback() ) :
							echo wponion_callback( $container->callback(), array( $container ) );
						elseif ( $container->has_fields() ) :
							foreach ( $container->fields() as $field ) :
								echo $metabox->render_field( $field, $container );
							endforeach;
						endif;
						?>
					</div>
				<?php
				endif;
			}
		endforeach;
	endif;
	?>
</div>
