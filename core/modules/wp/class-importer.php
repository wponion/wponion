<?php

namespace WPOnion\Modules\WP;

use WPOnion\Bridge\Module;
use WPOnion\Traits\Self_Instance;

defined( 'ABSPATH' ) || exit;

/**
 * Class Importer
 *
 * @package WPOnion\Modules\WP
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Importer extends Module {
	use Self_Instance;

	/**
	 * Stores File ID.
	 *
	 * @var array
	 */
	protected $errors = array();

	/**
	 * Importer constructor.
	 *
	 * @param array $args
	 */
	public function __construct( $args ) {
		if ( is_admin() ) {
			$this->settings = $this->set_args( $args );
			$this->module   = 'wp_importer';
			$this->unique   = $this->option( 'id' );
			if ( did_action( 'admin_init' ) ) {
				$this->register();
			} else {
				add_action( 'admin_init', array( &$this, 'register' ) );
			}
		}
	}

	/**
	 * Registers With WordPress.
	 */
	public function register() {
		register_importer( $this->option( 'id' ), $this->option( 'name' ), $this->option( 'description' ), array(
			&$this,
			'dispatch',
		) );
		add_action( 'load-importer-' . $this->option( 'id' ), array( &$this, 'on_importer_load' ) );
	}

	/**
	 * On Importer Load.
	 */
	public function on_importer_load() {
		add_action( 'admin_enqueue_scripts', array( &$this, 'load_assets' ) );
	}

	/**
	 * Simple Hook To Load WPOnion Assets.
	 */
	public function load_assets() {
		wponion_load_core_assets();
		wponion_load_asset( $this->option( 'assets' ) );
	}

	/**
	 * Dispatches Importer.
	 */
	public function dispatch() {
		$this->header();
		$step = ( isset( $_GET['step'] ) && ! empty( $_GET['step'] ) ) ? (int) $_GET['step'] : 0;
		$this->run_step( $step );
		$this->footer();
	}

	/**
	 * Checks for given step number and runs it.
	 *
	 * @param $step
	 */
	protected function run_step( $step ) {
		switch ( $step ) {
			case 0:
				$this->greet( $step );
				break;
			case 1:
				$this->process_upload_and_run_import( $step );
				break;
		}
	}

	/**
	 * Greets User.
	 *
	 * @param $step
	 */
	protected function greet( $step ) {
		if ( $this->is_writeable() ) {
			$fields = $this->render_fields( $step );
			$button = $this->submit_button( $step );
			echo $fields . ' ' . $button;
		}
	}

	/**
	 * Runs Importers.
	 *
	 * @param $step
	 */
	protected function process_upload_and_run_import( $step ) {
		check_admin_referer( 'import-upload' );
		if ( $this->handle_upload() ) {
			if ( $this->option( 'file_id' ) && ! empty( $this->option( 'file_id' ) ) ) {
				$file = get_attached_file( $this->option( 'file_id' ) );
			} else {
				$file = ABSPATH . $this->option( 'file_url' );
			}

			add_filter( 'http_request_timeout', array( $this, 'bump_request_timeout' ) );
			$this->start_importer( $file );
		}
	}

	/**
	 * Renders Submit Button.
	 *
	 * @param $step
	 *
	 * @return string
	 */
	protected function submit_button( $step ) {
		return ( 0 === $step ) ? $this->render_field( wpo_field( 'button', 'submitbutton', array(
			'button_type' => 'submit',
			'wrap_id'     => 'wponion-wp-importer-submit-btn',
			'label'       => __( 'Upload File & Import', 'wponion' ),
			'class'       => 'wpo-btn wpo-btn-primary wpo-btn-sm',
		) ), false, false ) : '';
	}

	/**
	 * Import the file if it exists and is valid.
	 *
	 * @param mixed $file
	 */
	public function start_importer( $file ) {
		if ( ! is_file( $file ) ) {
			$this->importer_error( __( 'The file does not exist, please try again.', 'wponion' ) );
		}

		$this->_import_start();
		$loop   = 0;
		$handle = fopen( $file, 'r' );
		if ( false !== $handle ) {
			$header      = fgetcsv( $handle, 0, $this->option( 'delimiter' ) );
			$user_header = $this->option( 'headers', 2 );
			$user_header = ( is_array( $user_header ) ) ? sizeof( $user_header ) : $user_header;
			if ( sizeof( $header ) === (int) $user_header ) {
				// @codingStandardsIgnoreStart
				while ( false !== ( $row = fgetcsv( $handle, 0, $this->option( 'delimiter' ) ) ) ) {
					$this->import( $this->handle_row_data( $row ), $row );
					$loop++;
				}
				// @codingStandardsIgnoreEnd
			} else {
				$this->importer_error( __( 'The CSV is invalid.', 'vsp-framework', 'wponion' ) );
			}
			fclose( $handle );
		}
		$this->_import_end();
	}

	/**
	 * @param $row
	 *
	 * @return array|mixed
	 */
	protected function handle_row_data( $row ) {
		$user_header = $this->option( 'headers', array() );
		if ( is_array( $user_header ) ) {
			$return = array();
			foreach ( $row as $id => $data ) {
				$_id            = ( 0 === $id ) ? current( $user_header ) : next( $user_header );
				$return[ $_id ] = $data;
			}
			$user_header = $return;
		}
		return $user_header;
	}

	/**
	 * Import is starting.
	 */
	private function _import_start() {
		if ( function_exists( 'gc_enable' ) ) {
			gc_enable();
		}

		// @codingStandardsIgnoreStart
		if ( function_exists( 'set_time_limit' ) && false === strpos( ini_get( 'disable_functions' ), 'set_time_limit' ) && ! ini_get( 'safe_mode' ) ) {
			@set_time_limit( 0 );
		}
		@ob_flush();
		@flush();
		@ini_set( 'auto_detect_line_endings', '1' );
		// @codingStandardsIgnoreEnd
		$this->before_import();
	}

	/**
	 * Runs once the import is finished
	 */
	public function _import_end() {
		$this->after_import();
		$this->show_success();
		$this->show_errors();
		do_action( 'import_end' );
	}

	/**
	 * Handles the CSV upload and initial parsing of the file to prepare for.
	 * displaying author import options.
	 *
	 * @return bool False if error uploading or invalid file, true otherwise
	 */
	public function handle_upload() {
		if ( isset( $_POST['local_file'] ) && ! empty( $_POST['local_file'] ) ) {
			if ( file_exists( ABSPATH . $_POST['local_file'] ) ) {
				$this->set_option( 'file_url', esc_attr( $_POST['local_file'] ) );
			} else {
				$this->importer_error( __( 'Given Local File Not Found!', 'wponion' ) );
				return false;
			}
		} else {
			$file = wp_import_handle_upload();
			if ( isset( $file['error'] ) ) {
				$this->importer_error( $file['error'] );
				return false;
			}
			$this->set_option( 'file_id', absint( $file['id'] ) );
		}
		return true;
	}

	/**
	 * Show import error and quit.
	 *
	 * @param string $message .
	 */
	protected function importer_error( $message = '' ) {
		$message = esc_html( $message );
		$title   = __( 'Sorry, there has been an error.', 'wponion' );
		echo "<div class='error settings-error'><p class=\"wpo-text-danger\"><strong>$title</strong> <br/> $message</p></div>";
		$this->footer();
		die();
	}

	/**
	 * Added to http_request_timeout filter to force timeout at 60 seconds during import.
	 *
	 * @return int 60
	 */
	public function bump_request_timeout() {
		return 60;
	}

	/**
	 * @param $step
	 *
	 * @return false|string
	 */
	public function render_fields( $step ) {
		$fields = false;
		$this->get_fields();
		if ( wponion_is_array( $this->fields ) && isset( $this->fields[ $step ] ) ) {
			$fields = $this->fields[ $step ];
		} elseif ( wpo_is( $this->fields ) && $this->fields->container_exists( 'page-' . $step ) ) {
			$fields = $this->fields->container( 'page-' . $step );
			$fields = $fields->fields();
		}

		if ( wpo_is( $fields ) && $fields->has_fields() ) {
			$fields = $fields->fields();
		}

		if ( empty( $fields ) ) {
			return '';
		}

		$html = '';
		foreach ( $fields as $field ) {
			if ( ( wponion_is_array( $field ) && 'import' === wponion_field_id( $field ) ) || 'import' === $field ) {
				$field = ( wponion_is_array( $field ) ) ? $field : array();
				/* translators: Added Max File Size */
				$field['id']         = 'import';
				$field['name']       = 'import';
				$field['type']       = ( ! isset( $field['type'] ) ) ? 'text' : $field['type'];
				$field['text_type']  = 'file';
				$field['desc_field'] = str_replace( '[max_file_size]', $this->upload_size(), $field['desc_field'] );
				$field['desc']       = str_replace( '[max_file_size]', $this->upload_size(), $field['desc'] );
			} elseif ( ( wponion_is_array( $field ) && 'local_file' === wponion_field_id( $field ) ) || 'local_file' === $field ) {
				$field           = ( wponion_is_array( $field ) ) ? $field : array();
				$field['type']   = ( ! isset( $field['type'] ) ) ? 'text' : $field['type'];
				$field['id']     = 'local_file';
				$field['name']   = 'local_file';
				$field['prefix'] = ABSPATH;
			}
			$html .= $this->render_field( $field, false, false );
		}
		return '<div class="wponion-importer-fields"><div class="wponion-row wpo-row">' . $html . '</div></div>';
	}

	/**
	 * Checks if wp-content/uploads is_writeable
	 *
	 * @return bool
	 */
	protected function is_writeable() {
		$upload_dir = wp_upload_dir();
		if ( ! empty( $upload_dir['error'] ) ) {
			$wp_error = esc_html( $upload_dir['error'] );
			$error    = esc_html( __( 'Before you can upload your import file, you will need to fix the following error:', 'wponion' ) );
			echo "<div class=\"error\"><p class=\"wpo-text-danger\">$error</p><p>$wp_error</p></div>";
			return false;
		}
		return true;
	}

	/**
	 * Returns admin url for the current importer
	 *
	 * @param int $step .
	 *
	 * @return string
	 */
	protected function step_url( $step = 0 ) {
		return admin_url( 'admin.php?import=' . $this->option( 'id' ) . '&step=' . $step );
	}

	/**
	 * Returns Server's Upload Size
	 *
	 * @param bool $only_bytes .
	 *
	 * @return false|string
	 */
	protected function upload_size( $only_bytes = false ) {
		$bytes = apply_filters( 'import_upload_size_limit', wp_max_upload_size() );
		return ( $only_bytes ) ? $bytes : size_format( $bytes );
	}

	/**
	 * Renders Header.
	 */
	protected function header() {
		$form_url      = esc_attr( wp_nonce_url( $this->step_url( 1 ), 'import-upload' ) );
		$max_file_size = esc_attr( $this->upload_size( true ) );
		$icon          = ( ! empty( $this->option( 'icon' ) ) ) ? wponion_icon( $this->option( 'icon' ) ) : '';
		$title         = esc_html( $this->option( 'name' ) );
		$wrap          = $this->wrap_attributes();
		echo <<<HTML
<form enctype="multipart/form-data" class="wponion-form" id="import-upload-form" method="post" action="$form_url" >
	<input type="hidden" name="action" value="save" />
	<input type="hidden" name="max_file_size" value="$max_file_size" />

	<div class="wrap wponion-module-importer">
		<h1>$icon<span>$title</span></h1>
		<div $wrap>
HTML;
	}

	/**
	 * Renders Footer.
	 */
	protected function footer() {
		echo '</div></div></form>';
	}

	/**
	 * Renders success message to show after import is finished
	 */
	protected function show_success() {
		echo '<div class="updated settings-error"><p>' . esc_html( __( 'Import completed', 'wponion' ) ) . '</p></div>';
	}

	/**
	 * Renders all errors message into 1 msg and shows once import is finished
	 */
	protected function show_errors() {
		if ( ! empty( array_filter( $this->errors ) ) ) {
			echo '<div class="error settings-error">';
			echo '<p><strong>' . esc_html( __( 'Import Errors - ', 'wponion' ) ) . '</strong> </p > ';
			echo '<p>' . implode( ' <br/> ', $this->errors ) . ' </p > ';
			echo '</div > ';
		}
	}

	/**
	 * Returns Class Defaults.
	 *
	 * @return array
	 */
	public function defaults() {
		return array(
			'id'          => false,
			'name'        => false,
			'icon'        => false,
			'description' => false,
			'headers'     => 2,
			'delimiter'   => ',',
			'assets'      => false,
		);
	}

	/**
	 * Adds Error msg to the error array
	 *
	 * @param string $error .
	 */
	protected function error( $error = '' ) {
		$this->errors[] = $error;
	}

	/**
	 * Runs before import option to hook with the code
	 *
	 * @return mixed
	 */
	abstract protected function before_import();

	/**
	 * @param array $row
	 * @param array $raw_row_data
	 *
	 * @return mixed
	 */
	abstract protected function import( $row = array(), $raw_row_data = array() );

	/**
	 * Runs after import option to hook with the code
	 *
	 * @return mixed
	 */
	abstract protected function after_import();

	/**
	 * Function which returns all importer fields.
	 *
	 * @return \WPO\Builder|array
	 */
	abstract protected function importer_fields();

	/**
	 * Fetches Fields.
	 */
	protected function get_fields() {
		if ( empty( $this->fields ) ) {
			$this->fields = $this->importer_fields();
		}
	}

	public function on_init() {
	}
}
