<?php

namespace WPOnion\WP\Sysinfo;

defined( 'ABSPATH' ) || exit;

/**
 * Class Sysinfo
 *
 * @package WPOnion\WP\Sysinfo
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Sysinfo {

	/**
	 * @param $args
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
	 * JS
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
	 */
	public static function render_html( $data, $args, $container_arg = false ) {
		$content  = self::render_text_data( $data );
		$_content = '<p>';
		$email    = '<a style="margin-left:10px;" href="javascript:void(0);" class="button button-secondary wponion-system-report-email">' . wpo_icon( 'wpoic-envelope' ) . ' ' . __( 'Send As Email', 'wponion' ) . '</a>';
		$_content .= __( ' The system information shown below can also be copied and pasted into support requests such as on the WordPress.org forums, or to your theme and plugin developers. ', 'wponion' );
		$_content .= '</p>';
		$_content .= '<div id="sysreport" style="display:none;" ><textarea style="width:100%;min-height:250px;"  >';
		$_content .= $content;
		$_content .= '</textarea></div>';
		$_content .= '<p>' . __( ' Some information may be filtered out from the list you are about to copy, this is information that may be considered private, and is not meant to be shared in a public forum. ', 'wponion' ) . '</p>';
		$_content .= '<a href="javascript:void(0);" data-another-text="' . __( 'Copy Report', 'wponion' ) . '" class="button button-primary wponion-debug-report">' . wpo_icon( 'wpoic-file-text' ) . ' ' . __( 'Get system report', 'wponion' ) . '</a>';
		if ( wpo_is_container( $container_arg ) && ! empty( $container_arg->get_var( 'developer' ) ) ) {
			$_content .= wponion_tooltip( __( 'Email System Info To The Plugin Developer / Author', 'wponion' ), array(
				'placement' => 'bottom',
				'element'   => $email,
			) );
		}

		echo wponion_add_element( array(
			'type'    => 'wp_notice_info',
			'large'   => true,
			'alt'     => true,
			'close'   => false,
			'content' => $_content,
		) );

		if ( wpo_is_container( $container_arg ) && ! empty( $container_arg->get_var( 'developer' ) ) ) {
			$user    = wp_get_current_user();
			$emailer = wponion_builder();

			$emailer->hidden( 'developer' );

			$emailer->text( 'from_name', __( 'From Name', 'wponion' ) )
				->placeholder( __( 'From Name', 'wponion' ) )
				->style( 'width:100%;padding:10px;' )
				->debug( false )
				->horizontal( true );
			$emailer->text( 'from_email', __( 'From Email', 'wponion' ) )
				->placeholder( __( 'From Email', 'wponion' ) )
				->style( 'width:100%;padding:10px;' )
				->debug( false )
				->horizontal( true );

			$emailer->text( 'subject', __( 'Subject', 'wponion' ) )
				->style( 'width:100%;padding:10px;' )
				->debug( false )
				->horizontal( true );

			$emailer->textarea( 'message', __( 'Message', 'wponion' ) )
				->style( 'width:100%;' )
				->rows( 10 )
				->desc_field( __( 'System Information Will Be Attached With Your Message', 'wponion' ) )
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
					/* translators: Added Home URL.*/
					$value = sprintf( __( 'Reg : [%s] System Information ', 'wponion' ), home_url() );
				}
				$html .= $field->render( $value, 'wponion_sysinfo' );
			}
			$html .= '</div>';

			wponion_localize()->add( 'wponionsysinfo', array(
				'title' => __( 'Send Sys Info Via Email', 'wponion' ),
				'html'  => $html,
			) );
		}

		$ins = wpo_field( 'content', $content, true );
		echo '<div class="wponion-sysinfo">' . $ins->render() . '</div>';
	}

	/**
	 * @param     $data
	 * @param int $times
	 *
	 * @return string
	 */
	protected static function eol( $data, $times = 2 ) {
		return $data . str_repeat( PHP_EOL, $times );
	}

	/**
	 * @param $data
	 *
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
	 * @return string
	 */
	protected static function render_text_array( $value, $times, $incode = false ) {
		$return = '';
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
	 */
	protected static function render_text_bool( $data ) {
		if ( is_array( $data ) ) {
			return $data;
		}

		if ( true === $data || in_array( $data, array( 'yes', 'on', 1, '1' ), true ) ) {
			return '✔';
		}

		if ( false === $data || in_array( $data, array( 'off', 'no', 0, '0' ), true ) ) {
			return '✔';
		}
		return $data;
	}
}
