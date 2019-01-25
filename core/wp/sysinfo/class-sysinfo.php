<?php
/**
 *
 * Project : wponion
 * Date : 26-11-2018
 * Time : 11:08 AM
 * File : class-sysinfo.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\WP\Sysinfo;

if ( ! class_exists( '\WPOnion\WP\Sysinfo\Sysinfo' ) ) {
	/**
	 * Class Sysinfo
	 *
	 * @package WPOnion\WP\Sysinfo
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Sysinfo {

		/**
		 * @param $args
		 *
		 * @static
		 */
		public static function get( $args ) {
			$reports = ( isset( $args->reports ) ) ? $args->reports : array();
			$data    = Data::get();
			if ( isset( $args->custom_reports ) ) {
				if ( wponion_is_callable( $args->custom_reports ) ) {
					$_d = wponion_callback( $args->custom_reports );
					if ( wponion_is_array( $_d ) ) {
						$data = wponion_parse_args( $data, $_d );
					}
				} elseif ( wponion_is_array( $args->custom_reports ) ) {
					$data = wponion_parse_args( $data, $args->custom_reports );
				}
			}
			self::render_html( $data, $reports );
			self::js();
		}

		public static function js() {
			echo <<<JAVASCRIPT
			<script>
jQuery(function(){
jQuery(".wponion-debug-report").on("click",function(){
jQuery(this).parent().find('#sysreport').slideDown();
jQuery(this).parent().find( 'textarea' ).focus().select();
jQuery(this).remove();
})
});
</script>
JAVASCRIPT;

		}

		/**
		 * @param $data
		 * @param $args
		 *
		 * @static
		 */
		public static function render_html( $data, $args ) {
			$_content = '<p>';

			$_content .= __( ' The system information shown below can also be copied and pasted into support requests such as on the WordPress.org forums, or to your theme and plugin developers. ' );
			$_content .= '</p>';
			$_content .= '<div id="sysreport" style="display:none;" ><textarea style="width:100%;min-height:250px;"  >';
			$_content .= self::render_text_data( $data, $args );
			$_content .= '</textarea></div>';
			$_content .= '<p>' . __( ' Some information may be filtered out from the list you are about to copy, this is information that may be considered private, and is not meant to be shared in a public forum. ' ) . '</p>';
			$_content .= '<a href="#" data-another-text="' . __( 'Copy Report' ) . '" class="button-primary wponion-debug-report">' . __( 'Get system report' ) . '</a>';
			echo wponion_add_element( array(
				'type'    => 'wp_info_notice',
				'large'   => true,
				'alt'     => true,
				'close'   => false,
				'content' => $_content,
			) );

			foreach ( $data as $key => $_data ) {
				if ( isset( $args[ $key ] ) && false === $args[ $key ] || isset( $args[ $key . '_html' ] ) && false === $args[ $key . '_html' ] ) {
					continue;
				}
				echo wponion_add_element( array(
					'type'    => 'accordion',
					'heading' => $key,
					'is_open' => true,
					'debug'   => false,
					'fields'  => array(
						array(
							'type'    => 'content',
							'debug'   => false,
							'content' => self::render_html_table( $_data ),
						),
					),
				) );
			}
		}

		/**
		 * @param $_data
		 *
		 * @return string
		 * @static
		 */
		protected static function render_html_table( $_data ) {
			$return = '<table class="widefat striped">';
			foreach ( $_data as $title => $data ) {
				$data = self::render_html_ulli( $data );

				$return .= '<tr>';
				if ( ! is_numeric( $title ) ) {
					$return .= '<th style="width:50%">' . $title . '</th>';
				}
				$return .= '<td>' . self::render_html_bool( $data ) . '</td>';
				$return .= '</tr>';
			}

			return $return . '</table>';
		}

		/**
		 * @param $data
		 *
		 * @return string|array
		 * @static
		 */
		protected static function render_html_ulli( $data ) {
			if ( ! wponion_is_array( $data ) ) {
				return $data;
			}

			$return = '<ul style="list-style: inside;">';
			if ( isset( $data[0] ) ) {
				foreach ( $data as $id ) {
					$id     = ( wponion_is_array( $id ) ) ? wp_json_encode( $id ) : self::render_html_bool( $id );
					$return = $return . '<li>' . $id . '</li>';
				}
			} else {
				foreach ( $data as $key => $id ) {
					$id     = ( wponion_is_array( $id ) ) ? wp_json_encode( $id ) : self::render_html_bool( $id );
					$return = $return . '<li>' . $key . ' : ' . $id . '</li>';
				}
			}

			return $return . '</ul>';
		}

		/**
		 * @param $data
		 *
		 * @return string
		 * @static
		 */
		protected static function render_html_bool( $data ) {
			if ( true === $data ) {
				return '<span class="dashicons dashicons-yes"></span>';
			} elseif ( 'yes' === strtolower( $data ) ) {
				return '<span class="dashicons dashicons-yes"></span>';
			} elseif ( 'on' === strtolower( $data ) ) {
				return '<span class="dashicons dashicons-yes"></span>';
			}
			if ( false === $data ) {
				return '<span class="dashicons dashicons-no"></span>';
			} elseif ( 'no' === strtolower( $data ) ) {
				return '<span class="dashicons dashicons-no"></span>';
			} elseif ( 'off' === strtolower( $data ) ) {
				return '<span class="dashicons dashicons-no"></span>';
			}

			return $data;
		}

		/**
		 * @param $data
		 * @param $args
		 *
		 * @return string
		 * @static
		 */
		protected static function render_text_data( $data, $args ) {
			$return = PHP_EOL;
			foreach ( $data as $key => $_data ) {
				if ( isset( $args[ $key ] ) && false === $args[ $key ] || isset( $args[ $key . '_text' ] ) && false === $args[ $key . '_text' ] ) {
					continue;
				}
				$return .= '### ' . $key . ' ###';
				$return .= self::render_text_table( $_data );
			}
			return $return;
		}

		/**
		 * @param $data
		 *
		 * @return string
		 * @static
		 */
		protected static function render_text_table( $data ) {
			$return = PHP_EOL;

			foreach ( $data as $key => $val ) {
				if ( wponion_is_array( $val ) ) {
					if ( isset( $val[0] ) ) {
						$return .= $key . ' : ' . wp_json_encode( $val ) . PHP_EOL;
					} else {
						$return .= '#### ' . $key . ': ####' . PHP_EOL;
						foreach ( $val as $k => $v ) {
							$v = ( wponion_is_array( $v ) ) ? wp_json_encode( $v ) : $v;

							$return .= $k . ' : ' . self::render_text_bool( $v ) . PHP_EOL;
						}
					}
				} else {
					$return .= $key . ' : ' . self::render_text_bool( $val ) . PHP_EOL;
				}
			}
			return $return . PHP_EOL;
		}

		/**
		 * @param $data
		 *
		 * @return string
		 * @static
		 */
		protected static function render_text_bool( $data ) {
			if ( true === $data ) {
				return '✔';
			} elseif ( 'yes' === strtolower( $data ) ) {
				return '✔';
			} elseif ( 'on' === strtolower( $data ) ) {
				return '✔';
			}
			if ( false === $data ) {
				return '❌';
			} elseif ( 'no' === strtolower( $data ) ) {
				return '❌';
			} elseif ( 'off' === strtolower( $data ) ) {
				return '❌';
			}

			return $data;
		}

	}
}
