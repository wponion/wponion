<?php
/**
 *
 * Initial version created 12-05-2018 / 07:05 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}


if ( ! class_exists( '\WPOnion\Field\Change_Log' ) ) {
	/**
	 * Class WPOnion_Field_Notice
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Change_Log extends \WPOnion\Field {
		/**
		 * @var bool
		 * @access
		 */
		protected $changelog = false;

		/**
		 * Final HTML Output
		 */
		public function output() {
			echo $this->before();
			$this->render_html();
			echo $this->after();
		}

		/**
		 * Returns A Proper Array of Change Log.
		 *
		 * @return bool|false|mixed|string
		 */
		protected function get_change_log() {
			return wponion_is_callable( $this->data( 'change_log' ) ) ? wponion_callback( $this->data( 'change_log' ) ) : $this->data( 'change_log' );
		}

		public function render_html() {
			if ( empty( $this->data( 'change_log' ) ) ) {
				return;
			}

			echo '<div class="change-logs change-log-' . $this->data( 'style' ) . '">';

			switch ( $this->data( 'style' ) ) {
				case 'style1':
					require_once WPONION_PATH . 'fields/change-log/style1.php';
					break;
			}
			echo '</div>';
		}

		/**
		 * Returns Date In A Proper Format.
		 *
		 * @param $date
		 *
		 * @return false|string
		 */
		public function get_formatted_date( $date ) {
			return date( $this->data( 'date_format' ), strtotime( $date ) );
		}

		/**
		 * Returns Default Group Data.
		 *
		 * @return array
		 */
		protected function groups() {
			return array(
				'added'      => array(
					'title' => __( 'Added' ),
					'bg'    => '#9ac45e',
					'color' => '#fff',
				),
				'fixed'      => array(
					'title' => __( 'Fixed' ),
					'bg'    => '#3498db',
					'color' => '#fff',
				),
				'changed'    => array(
					'title' => __( 'Changed' ),
					'bg'    => '#2c3e50',
					'color' => '#fff',
				),
				'deprecated' => array(
					'title' => __( 'Deprecated' ),
					'bg'    => '#898989',
					'color' => '#fff',
				),
				'removed'    => array(
					'title' => __( 'Removed' ),
					'bg'    => '#d1d1d166',
					'color' => '#666',
				),
				'security'   => array(
					'title' => __( 'Security' ),
					'bg'    => '#b44848',
					'color' => '#fff',
				),
			);
		}

		public function get_group( $slug, $key = false ) {
			$groups = $this->data( 'groups' );

			if ( $groups ) {
				if ( isset( $groups[ $slug ] ) ) {
					if ( false === $key ) {
						return $groups[ $slug ];
					}

					return ( isset( $groups[ $slug ][ $key ] ) ) ? $groups[ $slug ][ $key ] : false;
				}
			}

			return false;
		}

		/**
		 * Handles Group Args And Returns it.
		 *
		 * @param array $data
		 *
		 * @return array
		 */
		public function handle_field_args( $data = array() ) {
			$default_groups = $this->groups();
			if ( isset( $data['groups'] ) ) {
				foreach ( $data['groups'] as $i => $d ) {
					if ( is_array( $d ) ) {
						$data['groups'][ $i ] = wp_parse_args( $d, array(
							'title' => false,
							'bg'    => false,
							'color' => false,
						) );
					} else {
						if ( isset( $default_groups[ $i ] ) ) {
							$data['groups'][ $i ] = $d;
						} else {
							$data['groups'][ $i ] = array(
								'title' => $d,
								'bg'    => false,
								'color' => false,
							);
						}
					}
				}
			}
			return $data;
		}

		/**
		 * Defaults.
		 *
		 * @return array
		 */
		protected function field_default() {
			return array(
				'change_log'  => array(),
				'date_format' => get_option( 'date_format' ),
				'time_format' => get_option( 'time_format' ),
				'show_time'   => false,
				'style'       => 'style1',
				'groups'      => $this->groups(),
				'heading'     => __( 'Change Log' ),
			);
		}


		public function field_assets() {
			// TODO: Implement field_assets() method.
		}
	}
}
