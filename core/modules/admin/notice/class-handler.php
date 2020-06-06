<?php

namespace WPOnion\Modules\Admin\Notice;

use WPOnion\Bridge\Module_Utility;

defined( 'ABSPATH' ) || exit;

/**
 * Class Handler
 *
 * @package WPOnion\Modules\Admin\Notice
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Handler extends Module_Utility {
	/**
	 * @var string
	 */
	protected $module = 'admin_notices';

	/**
	 * @var array
	 */
	protected $db_values = false;

	/**
	 * Handler constructor.
	 */
	public function __construct( $settings = array() ) {
		$settings = ( is_string( $settings ) ) ? array( 'option_name' => $settings ) : $settings;
		parent::__construct( $settings );

		if ( is_admin() || defined( 'DOING_AJAX' ) && true === DOING_AJAX ) {
			$this->get_db_values();
		}

		$this->add_action( 'admin_notices', 'display_notices' );
		$this->add_action( 'shutdown', 'save_notices' );
	}

	/**
	 * Saves Notices On Shutdown.
	 */
	public function save_notices() {
		$this->set_db_option();
	}

	/**
	 * Renders Notice's HTML.
	 */
	public function display_notices() {
		if ( ! empty( $this->db_values ) ) {
			/* @var $notice \WPOnion\Modules\Admin\Notice\Notice */
			foreach ( $this->db_values as $index => $notice ) {
				if ( $this->is_time_to_display_ntc( $notice ) ) {
					echo $notice->get_content_formatted();
					$notice->increment_displayed_times();
				}

				if ( $this->is_time_to_kill_ntc( $notice ) ) {
					$this->remove_notice( $index );
				}
			}

			$this->render_script();
			$this->set_db_option();
		}
	}

	/**
	 * Renders Javascript.
	 */
	protected function render_script() {
		$action         = $this->option( 'ajax_action' );
		$notice_handler = $this->unique();
		$nounce         = wp_create_nonce( 'wpo-admin-notice-sticky-remove' );
		if ( false === $this->option( 'script_renderd' ) ) {
			wponion_load_core_assets();
			echo <<<JAVASCRIPT
<script type="text/javascript">
jQuery(document).ready(function(){
	var data = {action:"wponion-ajax","wponion-ajax":"$action",notice_hander:"$notice_handler",wp_nounce:"$nounce"};
	jQuery('body').on('click','.wpo-stick-dismiss',function(){
		var elem = jQuery(this).parents('.notice');
		data.notice_id =  elem.attr('id');
		wponion_ajax({
			data:data,
			success:function(){
				elem.slideUp(function(){
					elem.remove();
				});
			},
			button_lock:jQuery(this),
		}).send();
	});
});
</script>
JAVASCRIPT;
			$this->set_option( 'script_renderd', true );

		}
	}

	/**
	 * @return array
	 */
	protected function defaults() {
		return array(
			'option_name' => '_wponion_admin_notices',
			'ajax_action' => 'remove-admin-notice',
		);
	}

	/**
	 * Stores Notices in DB.
	 */
	protected function set_db_option() {
		wponion_update_option( $this->unique, $this->db_values );
	}

	/**
	 * Fetches Values From DB.
	 *
	 * @return array|mixed|\WPOnion\DB\Option
	 * @since 1.5
	 */
	protected function get_db_values() {
		$this->db_values = wponion_get_option( $this->unique );
		return $this->db_values;
	}

	/**
	 * Adds A Notice To Array.
	 *
	 * @param \WPOnion\Modules\Admin\Notice\Notice $notice
	 *
	 * @return $this
	 */
	public function add( Notice $notice ) {
		$id                     = md5( $notice->id() );
		$this->db_values[ $id ] = $notice;
		$this->set_db_option();
		return $this;
	}

	/**
	 * Removes A Notice From DB.
	 *
	 * @param $notice_id
	 */
	public function remove( $notice_id ) {
		if ( ! empty( $this->db_values ) && is_array( $this->db_values ) ) {
			foreach ( $this->db_values as $index => $notice ) {
				/* @var $notice \WPOnion\Modules\Admin\Notice\Notice */
				if ( $notice->id() === $notice_id ) {
					$this->remove_notice( $index );
				}
			}
		}
		$this->set_db_option();
	}

	/**
	 * Removes A Single Notice.
	 *
	 * @param $index
	 */
	protected function remove_notice( $index ) {
		if ( isset( $this->db_values[ $index ] ) ) {
			/* @var $notice \WPOnion\Modules\Admin\Notice\Notice */
			$notice = $this->db_values[ $index ];
			unset( $this->db_values[ $index ] );
			if ( false !== $notice->option( 'remove_callback' ) && wponion_is_callable( $notice->option( 'remove_callback' ) ) ) {
				wponion_callback( $notice->option( 'remove_callback' ), array( $notice ) );
			}
		}
	}

	/**
	 * Clears All Notice.
	 *
	 * @return $this
	 */
	public function clear_all() {
		$this->db_values = array();
		$this->set_db_option();
		return $this;
	}

	/**
	 * Checks if is time to display a notice
	 *
	 * @param \WPOnion\Modules\Admin\Notice\Notice $notice
	 *
	 * @return bool
	 */
	protected function is_time_to_display_ntc( Notice $notice ) {
		return $this->is_time_to_display_ntc_for_screen( $notice ) && $this->is_time_to_display_ntc_for_user( $notice ) && ! $notice->exceeded_max_times_to_display();
	}

	/**
	 * @param \WPOnion\Modules\Admin\Notice\Notice $notice
	 *
	 * @return bool
	 */
	protected function is_time_to_kill_ntc( Notice $notice ) {
		if ( $notice->is_sticky() ) {
			return false;
		}
		return $notice->exceeded_max_times_to_display();
	}

	/**
	 * @param \WPOnion\Modules\Admin\Notice\Notice $notice
	 *
	 * @return bool
	 */
	protected function is_time_to_display_ntc_for_screen( Notice $notice ) {
		$screens = $notice->get_screens();
		if ( ! empty( $screens ) ) {
			$current_screen = get_current_screen();
			if ( ! wponion_is_array( $screens ) || ! in_array( $current_screen->id, $screens ) ) {
				return false;
			}
		}
		return true;
	}

	/**
	 * @param \WPOnion\Modules\Admin\Notice\Notice $notice
	 *
	 * @return bool
	 */
	protected function is_time_to_display_ntc_for_user( Notice $notice ) {
		$current_user = get_user_by( 'ID', get_current_user_id() );
		if ( $notice->count_users() !== 0 && ! $notice->has_user( $current_user->ID ) ) {
			return false;
		}
		if ( $notice->count_roles() !== 0 && ! $notice->has_role( $current_user->roles ) ) {
			return false;
		}
		return true;
	}
}
