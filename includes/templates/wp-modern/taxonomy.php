<?php
defined( 'ABSPATH' ) || exit;

/**
 * @var \WPOnion\Theme\WP_Modern  $this
 * @var \WPOnion\Modules\Admin\Taxonomy $taxonomy
 * @var \WPO\Builder              $fields
 */
$taxonomy = $this->module_instance();
$fields   = $taxonomy->fields();
?>

<div <?php echo $taxonomy->wrap_attributes(); ?>>
	<?php
	foreach ( $fields->get() as $field ) {
		echo $taxonomy->render_field( $field );
	}
	?>
</div>
