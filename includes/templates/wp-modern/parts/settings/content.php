<?php
defined( 'ABSPATH' ) || exit;

/**
 * @var $this \WPOnion\Theme\WP_Modern
 * @var $container \WPO\Container
 * @var $sub_container \WPO\Container
 * @var $field \WPO\Field
 *
 */
$module      = $this->module_instance();
$fields      = $module->fields();
$has_fields  = $fields->has_fields();
$extra_class = ( true === $has_fields ) ? ' wpo-row only-fields ' : '';
?>

<div class="content-outer-wrap">
	<?php if ( false === $has_fields ): ?>
		<div class="menu-wrap">
			<div class="wponion-menu">
				<?php echo $this->get_main_menu_html(); ?>
			</div>
			<div class="wponion-menu-bg"></div>
		</div>
	<?php endif; ?>

	<div class="content-wrap <?php echo $extra_class; ?>">
		<?php
		if ( wponion_is_array( $fields->get() ) ) :
			foreach ( $fields->get() as $container ) :
				if ( $module->valid_field( $container ) ) {
					echo $module->render_field( $container );
				} else {
					if ( false === $module->valid_container( $container ) ) {
						continue;
					}
					$container_id    = $module->container_wrap_id( $container );
					$container_class = $module->container_wrap_class( $container );

					if ( $container->has_containers() ) :
						$first_container = $container->first_container();
						foreach ( $container->containers() as $sub_container ) :
							if ( false === $module->valid_container( $sub_container, true ) ) {
								continue;
							}
							$sub_id    = $module->container_wrap_id( $container, $sub_container );
							$sub_class = $module->container_wrap_class( $container, $sub_container, $first_container );
							?>
							<div id="<?php echo $sub_id; ?>" class="wponion-container-wraps <?php echo $sub_class; ?>">
								<?php
								if ( $sub_container->has_callback() ) :
									echo wponion_callback( $sub_container->callback(), array( $sub_container ) );
								elseif ( $sub_container->has_fields() ) :
									foreach ( $sub_container->fields() as $field ) :
										echo $module->render_field( $field, $container, $sub_container );
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
									echo $module->render_field( $field, $container );
								endforeach;
							endif;
							?>
						</div>
					<?php
					endif;
				}
			endforeach;
		endif;
		echo $module->search_no_result();
		?>
	</div>
</div>



