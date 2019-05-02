<?php
/**
 * @var $this \WPOnion\Theme\WC
 */
$module = $this->settings();

$title              = $module->option( 'framework_title' );
$desc               = $module->option( 'framework_desc' );
$is_single_page     = $module->is_single_page();
$search_placeholder = __( 'Search Option(s)', 'wponion' );
$is_sticky          = $module->option( 'sticky_header', true );
$is_sticky          = ( true === $is_sticky ) ? 'header-sticky' : '';
?>

<header class="<?php echo $is_sticky; ?>">

	<div class="inner-container row middle-xs">

		<div class="left col-xs-12 col-sm-12 col-md-6">
			<?php
			echo ( ! empty( $title ) ) ? '<h1>' . $title . '</h1>' : '';
			echo ( ! empty( $desc ) ) ? '<p>' . $desc . '</p>' : '';
			?>
		</div>


		<div class="right col-xs-12 col-sm-12 col-md-6">
			<?php if ( false !== $is_single_page ) : ?>
				<div class="action-search">
					<div class="search-input-wrap">
						<input type="text" placeholder="<?php echo $search_placeholder; ?>">
					</div>
				</div>
			<?php endif; ?>
			<div class="action-buttons">
				<?php echo $module->settings_button(); ?>
			</div>
		</div>
	</div>

</header>
