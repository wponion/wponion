<?php
/**
 * Created by PhpStorm.
 * User: varun
 * Date: 28-11-2018
 * Time: 12:00 PM
 */

namespace WPOnion\Modules;

use WPOnion\Bridge;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Admin_Notice' ) ) {
	/**
	 * Class Admin_Notice
	 *
	 * @package WPOnion\Modules
	 */
	class Admin_Notice extends Bridge {
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
		 * Admin_Notice constructor.
		 *
		 * @param array $args
		 */
		public function __construct( $args = array() ) {
			$args           = $this->set_args( $args );
			$this->settings = $args;
			$this->id       = sanitize_title( uniqid( $args['type'] . '_' . md5( $args['content'] ), true ) );

			$this->setContent( $args['content'] );
			$this->setTitle( $args['title'] );
			$this->setScreens( (array) $args['screens'] );
			$this->setTimes( $args['times'] );

			foreach ( (array) $args['users'] as $userId ) {
				$this->addUser( $userId );
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

			$this->type = $args['type'];
			$this->update();
		}

		/**
		 * Saves Instance To Main Instance Holder.
		 */
		public function update() {
			if ( false !== $this->handler_instance() ) {
				$this->handler_instance()
					->add( $this );
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
		 * @return bool|\WPOnion\Modules\Admin_Notices
		 */
		protected function handler_instance() {
			$save = $this->option( 'save' );
			if ( false !== $save ) {
				$instance = wponion_admin_notices( $save );
				if ( $instance instanceof Admin_Notices ) {
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
		public function countUsers() {
			return count( $this->users ) - 1;
		}

		/**
		 * Get the notice string un-formatted
		 *
		 * @return string
		 */
		public function getContent() {
			return $this->content;
		}

		/**
		 * @param $content
		 *
		 * @return $this
		 */
		public function setContent( $content ) {
			$this->content = (string) $content;
			return $this;
		}

		/**
		 * @param bool $is_large_notice
		 *
		 * @return \WPOnion\Modules\Admin_Notice
		 */
		public function set_large( $is_large_notice = true ) {
			return $this->set_option( 'large', $is_large_notice );
		}

		/**
		 * @param bool $is_inline_notice
		 *
		 * @return \WPOnion\Modules\Admin_Notice
		 */
		public function set_inline( $is_inline_notice = true ) {
			return $this->set_option( 'inline', $is_inline_notice );
		}

		/**
		 * @param bool $is_alternate_notice
		 *
		 * @return \WPOnion\Modules\Admin_Notice
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
		public function incrementDisplayedTimes() {
			$this->users[0]++;
			$user = get_user_by( 'ID', get_current_user_id() );
			if ( $this->hasUser( $user->ID ) ) {
				$this->users[ $user->ID ]++;
			}
			$this->roles[0]++;
			foreach ( $user->roles as $role ) {
				if ( $this->hasRole( $role ) ) {
					$this->roles[ $role ]++;
				}
			}
			return $this;
		}

		/**
		 * @return mixed
		 */
		public function getDisplayedTimes() {
			return $this->getDisplayedTimesForUser( 0 );
		}

		/**
		 * @param $userId
		 *
		 * @return int|mixed
		 */
		public function getDisplayedTimesForUser( $userId ) {
			return $this->hasUser( $userId ) ? $this->users[ $userId ] : 0;
		}

		/**
		 * @param $userId
		 *
		 * @return bool
		 */
		public function exceededMaxTimesToDisplayForUser( $userId ) {
			$userId = (int) $userId;
			if ( $this->hasUser( $userId ) && $this->users[ $userId ] < $this->times ) {
				return false;
			}
			return true;
		}

		/**
		 * @param $role
		 *
		 * @return bool
		 */
		public function exceededMaxTimesForRole( $role ) {
			$role = (string) $role;
			if ( $this->hasRole( $role ) && $this->roles[ $role ] < $this->times ) {
				return false;
			}
			return true;
		}

		/**
		 * @return bool
		 */
		public function exceededMaxTimesToDisplay() {
			if ( $this->isSticky() ) {
				return false;
			}
			$excMaxTimesForUsers = $this->users[0] >= $this->times;
			if ( $this->countUsers() > 0 ) {
				$usersCounter = 0;
				foreach ( array_keys( $this->getUsers() ) as $userId ) {
					if ( $this->exceededMaxTimesToDisplayForUser( $userId ) ) {
						$usersCounter++;
					}
				}
				$excMaxTimesForUsers = $usersCounter >= $this->countUsers();
			}
			$excMaxTimesForRoles = $this->roles[0] >= $this->times;
			if ( $this->countRoles() > 0 ) {
				$rolesCounter = 0;
				foreach ( array_keys( $this->getRoles() ) as $role ) {
					if ( $this->exceededMaxTimesForRole( $role ) ) {
						$rolesCounter++;
					}
				}
				$excMaxTimesForRoles = $rolesCounter >= $this->countRoles();
			}
			return $excMaxTimesForUsers && $excMaxTimesForRoles;
		}

		/**
		 * @param $userId
		 *
		 * @return bool
		 */
		public function hasUser( $userId ) {
			return array_key_exists( (int) $userId, $this->users );
		}

		/**
		 * @param $userId
		 *
		 * @return $this
		 */
		public function addUser( $userId ) {
			$userId = (int) $userId;
			if ( ! $this->hasUser( $userId ) ) {
				$this->users[ $userId ] = 0;
			}
			return $this;
		}

		/**
		 * @param $userId
		 *
		 * @return $this
		 */
		public function removeUser( $userId ) {
			$userId = (int) $userId;
			if ( $userId > 0 && $this->hasUser( $userId ) ) {
				unset( $this->users[ $userId ] );
			}
			return $this;
		}

		/**
		 * Get the screens for the notice to be displayed
		 *
		 * @return array
		 */
		public function getScreens() {
			return $this->screens;
		}

		/**
		 * Set the screens the notice will be displayed
		 *
		 * @param array $screens
		 *
		 * @return $this
		 */
		public function setScreens( $screens ) {
			$this->screens = (array) $screens;
			return $this;
		}

		/**
		 * @return int|string
		 */
		public function getId() {
			return $this->id;
		}

		/**
		 * @return int
		 */
		public function getTimes() {
			return $this->times;
		}

		/**
		 * @param $times
		 *
		 * @return $this
		 */
		public function setTimes( $times ) {
			$this->times = (int) $times;
			return $this;
		}

		/**
		 * @return array
		 */
		public function getUsers() {
			$users = $this->users;
			unset( $users[0] );
			return $users;
		}

		/**
		 * @return string
		 */
		public function getTitle() {
			return $this->title;
		}

		/**
		 * @param $title
		 *
		 * @return $this
		 */
		public function setTitle( $title ) {
			$this->title = (string) $title;
			return $this;
		}

		/**
		 * @return string
		 */
		public function getType() {
			return $this->type;
		}

		/**
		 * @return bool
		 */
		public function isSticky() {
			return $this->sticky;
		}

		/**
		 * @param $sticky
		 *
		 * @return $this
		 */
		public function setSticky( $sticky ) {
			$this->sticky = (bool) $sticky;
			$this->setTimes( false );
			return $this;
		}

		/**
		 * @param $role
		 *
		 * @return $this
		 */
		public function addRole( $role ) {
			$role = (string) $role;
			if ( ! $this->hasRole( $role ) ) {
				$this->roles[ $role ] = 0;
			}
			return $this;
		}

		/**
		 * @param $role
		 *
		 * @return $this
		 */
		public function removeRole( $role ) {
			$role = (string) $role;
			if ( $role != 0 && $this->hasRole( $role ) ) {
				unset( $this->roles[ $role ] );
			}
			return $this;
		}

		/**
		 * @param $roles
		 *
		 * @return bool
		 */
		public function hasRole( $roles ) {
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
		public function countRoles() {
			return count( $this->roles ) - 1;
		}

		/**
		 * @return array
		 */
		public function getRoles() {
			return array_diff_key( $this->roles, array( 0 ) );
		}

		/**
		 * @return string
		 */
		public function getContentFormatted() {
			$large   = $this->option( 'large' );
			$type    = $this->option( 'type' );
			$alt     = $this->option( 'alt' );
			$inline  = $this->option( 'inline' );
			$title   = $this->option( 'title' );
			$content = $this->option( 'content' );

			if ( 'update-nag' !== $type ) {
				$class = wponion_html_class( array(
					( true === $this->option( 'dismissible' ) ) ? 'is-dismissible' : '',
					'notice',
					( true === $large ) ? 'notice-large' : '',
					( false !== $type ) ? 'notice-' . $type : 'notice-success',
					( true === $alt ) ? 'notice-alt' : '',
					( true === $inline ) ? 'notice-inline inline' : '',
				) );
			} else {
				$class = $type;
			}

			if ( $this->isSticky() && false === strpos( $content, 'wpo-stick-dismiss' ) ) {
				$this->setSticky( false );
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
}
