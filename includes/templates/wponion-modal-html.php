<?php
defined( 'ABSPATH' ) || exit;

$title = __( 'Close Panel', 'wponion' );
return <<<HTML
<div class="wponion-wp-modal media-modal wp-core-ui">

	<button type="button" class="media-modal-close">
		<span class="media-modal-icon"><span class="screen-reader-text">{$title}</span></span>
	</button>

	<div class="media-modal-content">
		<div class="media-frame">
			<div class="media-frame-menu"><div class="media-menu"></div></div>
			<div class="wponion-modal-content-container"></div>
			<div class="media-frame-toolbar">
				<div class="media-toolbar">
					<div class="media-toolbar-secondary"></div>
					<div class="media-toolbar-primary search-form">
						<button type="button" class="button media-button button-primary button-large" id="wponion-save-modal">{{data.save_btn_label}}</button>
						<button type="button" class="button media-button button-secondary button-large" id="wponion-close-modal">{{data.close_btn_label}}</button>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>

<div class="wponion-wp-modal-backdrop media-modal-backdrop"></div>
HTML;

