<?php

namespace WPOnion\Modules\Admin\Notice;

use WPOnion\Bridge;

defined( 'ABSPATH' ) || exit;

/**
 * Class Notice
 *
 * @package WPOnion\Modules
 */
class Notice extends Bridge {
	/**
	 * Notice message to be displayed
	 *
	 * @var string
	 */
	protected $content;

	/**
	 * Title of the notice. This is optional.
	 *
	 * @var string
	 */
	protected $title = '';

	/**
	 * Notice type
	 *
	 * @var string
	 */
	protected $type;

	/**
	 * In which screens the notice to be displayed
	 *
	 * @var array
	 */
	protected $screens;

	/**
	 * Unique identifier for notice
	 *
	 * @var int
	 */
	protected $id;

	/**
	 * Number of times to be displayed
	 *
	 * @var int
	 */
	protected $times = 1;

	/**
	 * Array indexes are the user ids this notice should be displayed, values are
	 * the displayed times for each user.
	 *
	 * @var array
	 */
	protected $users = array( 0 => 0 );

	/**
	 * Array indexes are role ids this notice should be displayed, values are the
	 * displayed times for each role.
	 *
	 * @var array
	 */
	protected $roles = array( 0 => 0 );

	/**
	 * @var bool
	 */
	protected $sticky = false;

	/**
	 * Notice constructor.
	 *
	 * @param array $args
	 */
	public function __construct( $args = array() ) {
		$args           = $this->set_args( $args );
		$this->settings = $args;

		$this->set_content( $args['content'] );
		$this->set_title( $args['title'] );
		$this->set_screens( (array) $args['screens'] );
		$this->set_times( $args['times'] );

		foreach ( (array) $args['users'] as $user_id ) {
			$this->add_user( $user_id );
		}

		if ( ! in_array( $args['type'], array(
			'success',
			'info',
			'warning',
			'error',
			'updated',
			'update-nag',
		) ) ) {
			$args['type'] = 'success';
		}

		if ( isset( $args['id'] ) ) {
			$this->id = $args['id'];
			unset( $args['id'] );
		}

		if ( empty( $this->id ) ) {
			$this->id = sanitize_title( uniqid( $args['type'] . '_' . md5( $args['content'] ), true ) );
		}

		$this->type = $args['type'];
		$this->update();
	}

	/**
	 * Saves Instance To Main Instance Holder.
	 */
	public function update() {
		if ( false !== $this->handler_instance() ) {
			$this->handler_instance()->add( $this );
		}
	}

	/**
	 * @return array
	 */
	protected function defaults() {
		return array(
			'content'         => null,
			'title'           => '',
			'type'            => 'success',
			'times'           => 1,
			'screens'         => array(),
			'users'           => array(),
			'save'            => '_wponion_admin_notices',
			'large'           => false,
			'alt'             => false,
			'inline'          => false,
			'dismissible'     => true,
			'remove_callback' => false,
		);
	}

	/**
	 * @return bool|\WPOnion\Modules\Admin\Notice\Handler
	 */
	protected function handler_instance() {
		$save = $this->option( 'save' );
		if ( false !== $save ) {
			$instance = wponion_admin_notices( $save );
			if ( $instance instanceof Handler ) {
				return $instance;
			}
		}
		return false;
	}

	/**
	 * @return bool|string
	 */
	public function id() {
		return $this->id;
	}

	/**
	 * @return int
	 */
	public function count_users() {
		return count( $this->users ) - 1;
	}

	/**
	 * Get the notice string un-formatted
	 *
	 * @return string
	 */
	public function get_content() {
		return $this->content;
	}

	/**
	 * @param $content
	 *
	 * @return $this
	 */
	public function set_content( $content ) {
		$this->content = (string) $content;
		return $this;
	}

	/**
	 * @param bool $is_large_notice
	 *
	 * @return $this
	 */
	public function set_large( $is_large_notice = true ) {
		return $this->set_option( 'large', $is_large_notice );
	}

	/**
	 * @param bool $is_inline_notice
	 *
	 * @return $this
	 */
	public function set_inline( $is_inline_notice = true ) {
		return $this->set_option( 'inline', $is_inline_notice );
	}

	/**
	 * @param bool $is_alternate_notice
	 *
	 * @return $this
	 */
	public function set_alt( $is_alternate_notice = true ) {
		return $this->set_option( 'alt', $is_alternate_notice );
	}

	/**
	 * @param bool $callback
	 *
	 * @return bool|mixed
	 */
	public function remove_callback( $callback = false ) {
		return $this->option( 'remove_callback', $callback );
	}

	/**
	 * Increment displayed times of the notice
	 *
	 * @return $this
	 */
	public function increment_displayed_times() {
		$this->users[0]++;
		$user = get_user_by( 'ID', get_current_user_id() );
		if ( $this->has_user( $user->ID ) ) {
			$this->users[ $user->ID ]++;
		}
		$this->roles[0]++;
		foreach ( $user->roles as $role ) {
			if ( $this->has_role( $role ) ) {
				$this->roles[ $role ]++;
			}
		}
		return $this;
	}

	/**
	 * @return mixed
	 */
	public function get_displayed_times() {
		return $this->get_displayed_times_for_user( 0 );
	}

	/**
	 * @param $user_id
	 *
	 * @return int|mixed
	 */
	public function get_displayed_times_for_user( $user_id ) {
		return $this->has_user( $user_id ) ? $this->users[ $user_id ] : 0;
	}

	/**
	 * @param $user_id
	 *
	 * @return bool
	 */
	public function exceeded_max_times_to_display_for_user( $user_id ) {
		$user_id = (int) $user_id;
		if ( $this->has_user( $user_id ) && $this->users[ $user_id ] < $this->times ) {
			return false;
		}
		return true;
	}

	/**
	 * @param $role
	 *
	 * @return bool
	 */
	public function exceeded_max_times_for_role( $role ) {
		$role = (string) $role;
		if ( $this->has_role( $role ) && $this->roles[ $role ] < $this->times ) {
			return false;
		}
		return true;
	}

	/**
	 * @return bool
	 */
	public function exceeded_max_times_to_display() {
		if ( $this->is_sticky() ) {
			return false;
		}
		$exc_max_times_for_users = $this->users[0] >= $this->times;
		if ( $this->count_users() > 0 ) {
			$users_counter = 0;
			foreach ( array_keys( $this->get_users() ) as $user_id ) {
				if ( $this->exceeded_max_times_to_display_for_user( $user_id ) ) {
					$users_counter++;
				}
			}
			$exc_max_times_for_users = $users_counter >= $this->count_users();
		}
		$exc_max_times_for_roles = $this->roles[0] >= $this->times;
		if ( $this->count_roles() > 0 ) {
			$roles_counter = 0;
			foreach ( array_keys( $this->get_roles() ) as $role ) {
				if ( $this->exceeded_max_times_for_role( $role ) ) {
					$roles_counter++;
				}
			}
			$exc_max_times_for_roles = $roles_counter >= $this->count_roles();
		}
		return $exc_max_times_for_users && $exc_max_times_for_roles;
	}

	/**
	 * @param $user_id
	 *
	 * @return bool
	 */
	public function has_user( $user_id ) {
		return array_key_exists( (int) $user_id, $this->users );
	}

	/**
	 * @param $user_id
	 *
	 * @return $this
	 */
	public function add_user( $user_id ) {
		$user_id = (int) $user_id;
		if ( ! $this->has_user( $user_id ) ) {
			$this->users[ $user_id ] = 0;
		}
		return $this;
	}

	/**
	 * @param $user_id
	 *
	 * @return $this
	 */
	public function remove_user( $user_id ) {
		$user_id = (int) $user_id;
		if ( $user_id > 0 && $this->has_user( $user_id ) ) {
			unset( $this->users[ $user_id ] );
		}
		return $this;
	}

	/**
	 * Get the screens for the notice to be displayed
	 *
	 * @return array
	 */
	public function get_screens() {
		return $this->screens;
	}

	/**
	 * Set the screens the notice will be displayed
	 *
	 * @param array $screens
	 *
	 * @return $this
	 */
	public function set_screens( $screens ) {
		$this->screens = (array) $screens;
		return $this;
	}

	/**
	 * @return int|string
	 */
	public function get_id() {
		return $this->id;
	}

	/**
	 * @return int
	 */
	public function get_times() {
		return $this->times;
	}

	/**
	 * @param $times
	 *
	 * @return $this
	 */
	public function set_times( $times ) {
		$this->times = (int) $times;
		return $this;
	}

	/**
	 * @return array
	 */
	public function get_users() {
		$users = $this->users;
		unset( $users[0] );
		return $users;
	}

	/**
	 * @return string
	 */
	public function get_title() {
		return $this->title;
	}

	/**
	 * @param $title
	 *
	 * @return $this
	 */
	public function set_title( $title ) {
		$this->title = (string) $title;
		return $this;
	}

	/**
	 * @return string
	 */
	public function get_type() {
		return $this->type;
	}

	/**
	 * @return bool
	 */
	public function is_sticky() {
		return $this->sticky;
	}

	/**
	 * @param $sticky
	 *
	 * @return $this
	 */
	public function set_sticky( $sticky ) {
		$this->sticky = (bool) $sticky;
		$this->set_times( false );
		return $this;
	}

	/**
	 * @param $role
	 *
	 * @return $this
	 */
	public function add_role( $role ) {
		$role = (string) $role;
		if ( ! $this->has_role( $role ) ) {
			$this->roles[ $role ] = 0;
		}
		return $this;
	}

	/**
	 * @param $role
	 *
	 * @return $this
	 */
	public function remove_role( $role ) {
		$role = (string) $role;
		if ( 0 != $role && $this->has_role( $role ) ) {
			unset( $this->roles[ $role ] );
		}
		return $this;
	}

	/**
	 * @param $roles
	 *
	 * @return bool
	 */
	public function has_role( $roles ) {
		$roles = (array) $roles;
		foreach ( $roles as $role ) {
			if ( array_key_exists( $role, $this->roles ) ) {
				return true;
			}
		}
		return false;
	}

	/**
	 * @return int
	 */
	public function count_roles() {
		return count( $this->roles ) - 1;
	}

	/**
	 * @return array
	 */
	public function get_roles() {
		return array_diff_key( $this->roles, array( 0 ) );
	}

	/**
	 * @return string
	 */
	public function get_content_formatted() {
		$large   = $this->option( 'large' );
		$type    = $this->option( 'type' );
		$alt     = $this->option( 'alt' );
		$inline  = $this->option( 'inline' );
		$title   = $this->option( 'title' );
		$content = $this->option( 'content' );
		$class   = $type;

		if ( 'update-nag' !== $type ) {
			$class = wponion_html_class( array(
				'notice',
				( true === $this->option( 'dismissible' ) ) ? 'is-dismissible' : '',
				( true === $large ) ? 'notice-large' : '',
				( false !== $type ) ? 'notice-' . $type : 'notice-success',
				( true === $alt ) ? 'notice-alt' : '',
				( true === $inline ) ? 'notice-inline inline' : '',
			) );
		}

		if ( $this->is_sticky() && false === strpos( $content, 'wpo-stick-dismiss' ) ) {
			$this->set_sticky( false );
		}

		echo '<div id="' . $this->id() . '" class="' . $class . '" style="position:relative">';
		if ( ! empty( $title ) ) {
			echo '<h4 style="margin-top: 4px; margin-bottom: 0;">' . $title . '</h4>';
		}
		echo '<p>' . $content . '</p>';

		if ( true === $this->option( 'dismissible' ) ) {
			echo '<button type="button" class="notice-dismiss wpo-stick-dismiss"><span class="screen-reader-text">' . __( 'Dismiss this notice.', 'wponion' ) . '</span></button>';
		}
		echo '</div>';
		return '';
	}
}
