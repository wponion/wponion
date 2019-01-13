<?php /* @var $this \WPOnion\Field\Change_Log */ ?>
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
			?>
			<div class="changelog-release">
				<div class="release-info">
					<?php if ( ! empty( $version ) ) : ?>
						<div class="release-version"><?php echo $version; ?></div>
					<?php endif; ?>

					<?php if ( ! empty( $date ) ) : ?>
						<div class="release-date"><?php echo $this->get_formatted_date( $date ); ?></div>
					<?php endif; ?>
				</div>

				<div class="changelog-changes">
					<div class="change-data">
						<?php
						$before = isset( $data['before'] ) ? $data['before'] : false;
						$after  = isset( $data['after'] ) ? $data['after'] : false;
						unset( $data['before'] );
						unset( $data['after'] );

						if ( $before ) {
							echo '<div class="changelog-before-content"><p>' . $before . '</p></div>';
						}
						foreach ( $data as $group => $code ) {
							$label_style = 'background-color:' . $this->get_group( $group, 'bg' ) . ';';
							$label_style = $label_style . 'color:' . $this->get_group( $group, 'color' ) . ';';
							$label_style = 'style="' . $label_style . '"';
							if ( is_array( $code ) ) :
								foreach ( $code as $html ) {
									?>
									<div class="changelog-log">
										<div class="changelog-label-container">
											<div <?php echo $label_style; ?>
												class="changelog-label changelog-label-<?php echo $group; ?>">
												<?php echo $this->get_group( $group, 'title' ); ?>
											</div>
										</div>
										<div class="change-data"> <?php echo $html; ?></div>
									</div>


									<?php
								}
							else :
								?>
								<div class="changelog-log">
									<div class="changelog-label-container">
										<div <?php echo $label_style; ?>
											class="changelog-label changelog-label-<?php echo $group; ?>">
											<?php echo $this->get_group( $group, 'title' ); ?>
										</div>
									</div>
									<div class="change-data"> <?php echo $code; ?></div>
								</div>
							<?php endif; ?>

							<?php
						}

						if ( $after ) {
							echo '<div class="changelog-after-content"><p>' . $after . '</p></div>';
						}
						?>
					</div>
				</div>
			</div>
			<?php
		}

		?>
	</div>
</div>
