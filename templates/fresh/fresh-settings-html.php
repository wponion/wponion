<?php
/**
 *
 * Project : bullet-wp
 * Date : 17-08-2018
 * Time : 06:40 AM
 * File : fresh-settings-html.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package bullet-wp
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
/* @var $ins \WPOnion\Modules\Settings */
$ins     = $this->settings();
$loading = __( 'Loading Please Wait...', 'wponion' );

$is_sticky = $ins->option( 'sticky_header', true );
$is_sticky = ( true === $is_sticky ) ? 'wponion-header-sticky' : '';
?>

<div class="wrap">
	<div class="<?php echo $ins->wrap_class( ' wponion-fresh-theme-layouts ' ); ?>">

		<div class="wponion-settings-header <?php echo $is_sticky; ?>">
			<div class="wponion-settings-header-inner">
				<div class="wponion-settings-heading">
					<?php
					if ( ! empty( $ins->option( 'framework_title' ) ) ) {
						echo '<h1>' . $ins->option( 'framework_title' ) . '</h1>';
					}

					if ( ! empty( $ins->option( 'framework_desc' ) ) ) {
						echo '<p>' . $ins->option( 'framework_desc' ) . '</p>';
					}
					?>

				</div>
				<div class="action-holder">
					<?php if ( false !== $ins->is_single_page() ): ?>
						<div class="action-search">
							<div class="wponion-settings-search">
								<input type="text" placeholder="<?php echo __( 'Search Option(s)', 'wponion' ); ?>"/>
							</div>
						</div>
					<?php endif; ?>
					<div class="action-buttons">
						<?php echo $ins->settings_button(); ?>
					</div>
				</div>
			</div>
		</div>
		<div class="wponion-fresh-theme-inside-wrap">
			<div class="menu-wrap">
				<?php echo $this->get_main_menu_html(); ?>
			</div>

			<div class="content-wrap">
				<div class="wponion-content">
					<div class="wponion-sections"><?php include __DIR__ . '/settings-html.php'; ?></div>
				</div>
			</div>
			<div class="menu-bg-wrap"></div>
		</div>

		<div class="wponion-form-actions">
			<div class="action-holder"> <?php echo $ins->settings_button(); ?></div>
		</div>
	</div>
</div>
