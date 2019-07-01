<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

/**
 * @var \WPOnion\Theme\WP_Modern $this
 */
$widget = $this->widgets();
$fields = $widget->fields();
?>

<div class="<?php echo $widget->wrap_class( '' ); ?>">
	<?php
	if ( ! empty( $fields->get() ) ) {
		foreach ( $fields->get() as $field ) {
			echo $widget->render_field( $field );
		}
	}
	?>
</div>
