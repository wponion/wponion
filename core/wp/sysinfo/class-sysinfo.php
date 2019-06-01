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
			self::render_html( $data, $reports, $args );
			self::js();
		}

		/**
		 * @static
		 */
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
		 * @param                      $data
		 * @param                      $args
		 * @param \WPO\Container|false $container_arg
		 *
		 * @static
		 */
		public static function render_html( $data, $args, $container_arg = false ) {
			$content  = self::render_text_data( $data );
			$_content = '<p>';
			$email    = '<a style="margin-left:10px;" href="javascript:void(0);" class="button button-secondary wponion-system-report-email">' . __( 'Send As Email', 'wponion' ) . '</a>';
			$_content .= __( ' The system information shown below can also be copied and pasted into support requests such as on the WordPress.org forums, or to your theme and plugin developers. ', 'wponion' );
			$_content .= '</p>';
			$_content .= '<div id="sysreport" style="display:none;" ><textarea style="width:100%;min-height:250px;"  >';
			$_content .= $content;
			$_content .= '</textarea></div>';
			$_content .= '<p>' . __( ' Some information may be filtered out from the list you are about to copy, this is information that may be considered private, and is not meant to be shared in a public forum. ', 'wponion' ) . '</p>';
			$_content .= '<a href="javascript:void(0);" data-another-text="' . __( 'Copy Report', 'wponion' ) . '" class="button button-primary wponion-debug-report">' . __( 'Get system report', 'wponion' ) . '</a>';
			$_content .= wponion_tooltip( __( 'Email System Info To The Plugin Developer / Author' ), array(
				//'size'      => 'small',
				'placement' => 'bottom',
				'element'   => $email,
			) );
			echo wponion_add_element( array(
				'type'    => 'wp_notice_info',
				'large'   => true,
				'alt'     => true,
				'close'   => false,
				'content' => $_content,
			) );

			if ( wponion_is_builder( $container_arg, 'container' ) && ! empty( $container_arg->get_var( 'developer' ) ) ) {
				$user    = wp_get_current_user();
				$emailer = wponion_builder();

				$emailer->hidden( 'developer' );

				$emailer->text( 'from_name', __( 'From Name' ) )
					->placeholder( __( 'From Name' ) )
					->style( 'width:100%;padding:10px;' )
					->debug( false )
					->horizontal( true );
				$emailer->text( 'from_email', __( 'From Email' ) )
					->placeholder( __( 'From Email' ) )
					->style( 'width:100%;padding:10px;' )
					->debug( false )
					->horizontal( true );

				$emailer->text( 'subject', __( 'Subject' ) )
					->style( 'width:100%;padding:10px;' )
					->debug( false )
					->horizontal( true );

				$emailer->textarea( 'message', __( 'Message' ) )
					->style( 'width:100%;' )
					->rows( 10 )
					->desc_field( __( 'System Information Will Be Attached With Your Message' ) )
					->debug( false )
					->horizontal( true );
				$html = '<div class="wponion-framework" id="wponion-sysinfo-popup-emailer">';
				/**
				 * @var \WPO\Field $field
				 */
				foreach ( $emailer->fields() as $field ) {
					$value = false;

					if ( 'developer' === $field['id'] ) {
						$value = $container_arg->get_var( 'developer' );
					} elseif ( 'from_name' === $field['id'] ) {
						$value = $user->display_name;
					} elseif ( 'from_email' === $field['id'] ) {
						$value = $user->user_email;
					} elseif ( 'subject' === $field['id'] ) {
						$value = sprintf( __( 'Reg : [%s] System Information ' ), home_url() );
					}
					$html .= $field->render( $value, 'wponion_sysinfo' );
				}
				$html .= '</div>';

				wponion_localize()->add( 'wponionsysinfo', array(
					'title' => __( 'Send Sys Info Via Email' ),
					'html'  => $html,
				) );
			}

			$ins = wpo_field( 'content', $content, true );
			echo '<div class="wponion-sysinfo">' . $ins->render() . '</div>';

			return;

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
		 * @param     $data
		 * @param int $times
		 *
		 * @static
		 * @return string
		 */
		protected static function eol( $data, $times = 2 ) {
			return $data . str_repeat( PHP_EOL, $times );
		}

		/**
		 * @param $data
		 *
		 * @static
		 * @return string
		 */
		public static function render_text_data( $data ) {
			$return = '';
			foreach ( $data as $key => $value ) {
				if ( is_numeric( $key ) ) {
				} else {
					$return .= self::eol( '## ' . $key . ' ##', 1 );
					$return .= ( is_array( $value ) ) ? self::render_text_array( $value, 2 ) : self::render_text_string( $value );
				}
				$return .= self::eol( '' );
			}
			return $return;
		}

		/**
		 * @param      $value
		 * @param      $times
		 * @param bool $incode
		 *
		 * @static
		 * @return string
		 */
		protected static function render_text_array( $value, $times, $incode = false ) {
			$return = '';// self::eol( '', $times );
			if ( ! empty( $value ) && is_array( $value ) ) {
				foreach ( $value as $key => $val ) {
					if ( is_numeric( $key ) ) {
						if ( is_array( $val ) && isset( $val[0] ) ) {
							$return .= implode( ',', $val );
						} elseif ( is_array( $val ) && ! isset( $val[0] ) ) {
							$return .= self::eol( self::render_text_array( $val, $times, $incode ), $times );
						} else {
							$val    = ( is_array( $val ) ) ? json_encode( $val ) : self::render_text_string( $val, $times );
							$return .= self::eol( '* ' . $val, 1 );
						}
					} else {
						if ( is_array( $val ) && ! isset( $val[0] ) ) {
							$return .= self::eol( '<details>', $times );
							$return .= self::eol( '<summary>' . $key . ' </summary>', $times );
							$return .= self::eol( self::render_text_array( $val, $times, true ), $times );
							/*if ( false === $incode ) {
								$return .= self::eol( '``` ', 1 );
								$return .= self::eol( self::render_text_array( $val, 1, true ) . '```', $times );
							} else {
								$return .= self::eol( self::render_text_array( $val, 1, true ), $times );
							}*/
							$return .= '</details>' . self::eol( '' );
						} else {
							if ( is_array( $val ) && isset( $val[0] ) && is_array( $val[0] ) ) {
								$return .= self::eol( '### ' . $key . ' ###', $times );
								$return .= self::render_text_array( $val, $times, $incode );
							} elseif ( is_array( $val ) ) {
								$return .= self::eol( '<details><summary>' . $key . ' : </summary> ', $times );
								$return .= self::render_text_array( $val, $times, $incode ) . ' </details>';
							} else {
								if ( true === $incode ) {
									$return .= ' * ' . $key . ' :  ' . self::render_text_string( $val, 1 );
								} else {
									$return .= '**' . $key . '** :  ' . self::render_text_string( $val, $times );
								}
							}
						}
					}
				}
			}
			return $return;
		}

		/**
		 * @param     $value
		 * @param int $times
		 *
		 * @static
		 * @return string
		 */
		protected static function render_text_string( $value, $times = 1 ) {
			$value = self::render_text_bool( $value );
			if ( ! is_numeric( $value ) ) {
				json_decode( $value );

				if ( JSON_ERROR_NONE === json_last_error() ) {
					return '			
```json
' . $value . '
```
';
				}
			}
			return self::eol( $value, $times );
		}

		/**
		 * @param $data
		 *
		 * @return string|array
		 * @static
		 */
		protected static function render_text_bool( $data ) {
			if ( is_array( $data ) ) {
				return $data;
			}

			if ( true === $data ) {
				return '✔';
			}

			if ( in_array( $data, array( 'yes', 'on', 1, '1' ), true ) ) {
				return '✔';
			}

			if ( false === $data ) {
				return '❌';
			}

			if ( in_array( $data, array( 'off', 'no', 0, '0' ), true ) ) {
				return '✔';
			}
			return $data;
		}

	}
}
