<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * @var $this \WPOnion\Theme\WP
 */

$module = $this->settings();
?>
<footer>
	<div class="inner-container row middle-xs">
		<div class="left col-xs-12 col-sm-12 col-md-6">

		</div>
		<div class="right col-xs-12 col-sm-12 col-md-6">
			<div class="action-buttons">
				<?php echo $module->settings_button(); ?>
			</div>
		</div>
	</div>

</footer>
