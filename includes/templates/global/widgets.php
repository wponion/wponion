<?php
defined( 'ABSPATH' ) || exit;

/* @var \WPOnion\Theme\WP_Modern $this */
$widget      = $this->widgets();
$fields      = $widget->fields();
$is_template = ( $widget->option( 'is_template' ) ) ? 'wponion-template wponion-module-widget-template' : '';
?>

<div <?php echo $widget->wrap_attributes( $is_template ); ?>>
	<?php
	if ( ! empty( $fields->get() ) ) {
		foreach ( $fields->get() as $field ) {
			echo $widget->render_field( $field );
		}
	}
	?>
</div>
