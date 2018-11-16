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
$ins     = $this->settings();
$loading = __( 'Loading Please Wait...' );
?>

<div class="wrap">
	<div class="<?php echo $ins->wrap_class( '', true ); ?>">
		<div class="wponion-framework-header">
			<?php
			if ( ! empty( $ins->option( 'framework_title' ) ) ) {
				echo '<h1>' . $ins->option( 'framework_title' ) . '</h1>';
			}

			if ( ! empty( $ins->option( 'framework_desc' ) ) ) {
				echo '<p>' . $ins->option( 'framework_desc' ) . '</p>';
			}
			?>
		</div>

		<div class="wponion-fresh-theme-inside-wrap">

			<div class="wponion-fresh-theme-menu-wrap">
				<?php echo $this->get_main_menu_html(); ?>
				<div class="wponion-fresh-theme-menu-bg-wrap"></div>
			</div>

			<div class="wponion-fresh-theme-content-wrap">
				<div class="wponion-content">
					<div class="loader loader-default page-loader is-active" data-text="<?php echo $loading; ?>"></div>
					<div class="wponion-sections"><?php include __DIR__ . '/settings-html.php'; ?></div>
					<div class="wponion-sections wponion-form-actions"> <?php echo $ins->settings_button(); ?> </div>
				</div>
			</div>
		</div>
	</div>
</div>
