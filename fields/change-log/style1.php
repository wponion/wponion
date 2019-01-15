<?php
/* @var $this \WPOnion\Field\Change_Log */

if ( ! function_exists( 'wponion_change_log_single_log' ) ) {
	/**
	 * @param $group
	 * @param $html
	 * @param $ins \WPOnion\Field\Change_Log
	 *
	 * @return string
	 */
	function wponion_change_log_single_log( $group, $html, $ins ) {
		$label_style = 'background-color:' . $ins->get_group( $group, 'bg' ) . ';';
		$label_style = $label_style . 'color:' . $ins->get_group( $group, 'color' ) . ';';
		$label_style = 'style="' . $label_style . '"';
		$title       = $ins->get_group( $group, 'title' );
		return '<div class="changelog-log">
			<div class="changelog-label-container">
				<div ' . $label_style . ' class="changelog-label changelog-label-' . $group . '">' . $title . '</div>
			</div>
			<div class="change-data">' . $html . '</div>
		</div>';
	}
}
?>
<h1><?php echo $this->data( 'heading' ); ?></h1>
<div class="changelog-style1">
	<div class="changelog-releases">
		<?php
		$change_log = $this->get_change_log();
		foreach ( $change_log as $version => $data ) {
			$date = '';
			if ( isset( $data['date'] ) ) {
				$date = $data['date'];
				unset( $data['date'] );
			}
			echo '<div class="changelog-release"> <div class="release-info">';
			if ( ! empty( $version ) ) {
				echo '<div class="release-version">' . $version . '</div>';
			}
			if ( ! empty( $date ) ) {
				echo '<div class="release-date">' . $this->get_formatted_date( $date ) . '</div>';
			}

			echo '</div> <div class="changelog-changes"> <div class="change-data">';
			$before = isset( $data['before'] ) ? $data['before'] : false;
			$after  = isset( $data['after'] ) ? $data['after'] : false;
			unset( $data['before'] );
			unset( $data['after'] );

			if ( $before ) {
				echo '<div class="changelog-before-content"><p>' . $before . '</p></div>';
			}

			foreach ( $data as $group => $code ) {
				if ( is_array( $code ) ) {
					foreach ( $code as $html ) {
						echo wponion_change_log_single_log( $group, $html, $this );
					}
				} else {
					echo wponion_change_log_single_log( $group, $code, $this );
				}
			}

			if ( $after ) {
				echo '<div class="changelog-after-content"><p>' . $after . '</p></div>';
			}
			echo '</div></div></div>';
		}

		?>
	</div>
</div>
