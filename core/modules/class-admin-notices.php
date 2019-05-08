<?php
/**
 * Created by PhpStorm.
 * User: varun
 * Date: 28-11-2018
 * Time: 11:05 AM
 */

namespace WPOnion\Modules;

use WPOnion\Bridge\Module;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Admin_Notices' ) ) {
	/**
	 * Class Admin_Notice
	 *
	 * @package WPOnion\Modules
	 */
	class Admin_Notices extends Module {
		/**
		 * @var bool
		 */
		protected $script_renderd = false;

		/**
		 * @var string
		 */
		protected $module = 'admin_notices';

		/**
		 * Admin_Notice constructor.
		 *
		 * @param array $settings
		 */
		public function __construct( $settings = array() ) {
			if ( is_string( $settings ) ) {
				$settings = array( 'option_name' => $settings );
			}
			parent::__construct( null, $settings );
			$this->on_init();
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
		 * @return mixed|void
		 */
		public function on_init() {
			if ( is_admin() || defined( 'DOING_AJAX' ) && true === DOING_AJAX ) {
				$this->get_db_values();
			}
		}

		/**
		 * Renders Notice's HTML.
		 */
		public function display_notices() {
			if ( ! empty( $this->db_values ) ) {
				/* @var $notice \WPOnion\Modules\Admin_Notice */
				foreach ( $this->db_values as $index => $notice ) {
					if ( $this->isTimeToDisplayNtc( $notice ) ) {
						echo $notice->getContentFormatted();
						$notice->incrementDisplayedTimes();
					}

					if ( $this->isTimeToKillNtc( $notice ) ) {
						$this->remove_notice( $index );
					}
				}
			}
			$this->render_script();
			$this->set_db_option();
		}

		/**
		 * Renders Javascript.
		 */
		public function render_script() {
			$action         = $this->option( 'ajax_action' );
			$notice_handler = $this->unique();
			$nounce         = wp_create_nonce( 'wpo-admin-notice-sticky-remove' );
			if ( false === $this->script_renderd ) {
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
				$this->script_renderd = true;

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
		 * Adds A Notice To Array.
		 *
		 * @param \WPOnion\Modules\Admin_Notice $notice
		 *
		 * @return $this
		 */
		public function add( Admin_Notice &$notice ) {
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
			foreach ( $this->db_values as $index => $notice ) {
				/* @var $notice \WPOnion\Modules\Admin_Notice */
				if ( $notice->id() === $notice_id ) {
					$this->remove_notice( $index );
				}
			}
			$this->set_db_option();
		}

		/**
		 * Removes A Single Notice.
		 *
		 * @param $index
		 */
		public function remove_notice( $index ) {
			if ( isset( $this->db_values[ $index ] ) ) {
				/* @var $notice \WPOnion\Modules\Admin_Notice */
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
		 * @param Admin_Notice $notice
		 *
		 * @return bool
		 */
		private function isTimeToDisplayNtc( Admin_Notice $notice ) {
			return $this->isTimeToDisplayNtcForScreen( $notice ) && $this->isTimeToDisplayNtcForUser( $notice ) && ! $notice->exceededMaxTimesToDisplay();
		}

		/**
		 * @param Admin_Notice $notice
		 *
		 * @return bool
		 */
		private function isTimeToKillNtc( Admin_Notice $notice ) {
			if ( $notice->isSticky() ) {
				return false;
			}
			return $notice->exceededMaxTimesToDisplay();
		}

		/**
		 * @param Admin_Notice $notice
		 *
		 * @return bool
		 */
		private function isTimeToDisplayNtcForScreen( Admin_Notice $notice ) {
			$screens = $notice->getScreens();
			if ( ! empty( $screens ) ) {
				$curScreen = get_current_screen();
				if ( ! wponion_is_array( $screens ) || ! in_array( $curScreen->id, $screens ) ) {
					return false;
				}
			}
			return true;
		}

		/**
		 * @param Admin_Notice $notice
		 *
		 * @return bool
		 */
		private function isTimeToDisplayNtcForUser( Admin_Notice $notice ) {
			$curUser = get_user_by( 'ID', get_current_user_id() );
			if ( $notice->countUsers() !== 0 && ! $notice->hasUser( $curUser->ID ) ) {
				return false;
			}
			if ( $notice->countRoles() !== 0 && ! $notice->hasRole( $curUser->roles ) ) {
				return false;
			}
			return true;
		}

	}
}
