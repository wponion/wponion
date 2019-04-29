<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPO\Helper\Container;

if ( ! trait_exists( '\WPO\Helper\Container\Functions' ) ) {
	/**
	 * Trait Functions
	 *
	 * @package WPO\Helper\Container
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	trait Functions {
		/**
		 * Returns Sub Containers.
		 *
		 * @return array|mixed
		 */
		public function containers() {
			return ( $this->has_containers() ) ? $this->containers : array();
		}

		/**
		 * Checks If Current Instance Has Container.
		 *
		 * @return bool
		 */
		public function has_containers() {
			return ( false !== $this->containers && wponion_is_array( $this->containers ) && ! empty( $this->containers ) );
		}

		/**
		 * Returns First Container Instance.
		 *
		 * @return false|\WPO\Container
		 */
		public function first_container() {
			$first = current( $this->containers() );
			return ( ! empty( $first ) && $first instanceof \WPO\Container ) ? $first : false;
		}

		/**
		 * Checks If Conntainer Exists
		 * and if exists then returns the container instance.
		 *
		 * @param $container_id
		 *
		 * @return \WPO\Container|false
		 */
		public function container_exists( $container_id ) {
			if ( $this->has_containers() ) {
				/* @var $container \WPO\Container */
				foreach ( $this->containers() as $container ) {
					if ( $container->name() === $container_id ) {
						return $container;
					}
				}
			}
			return false;
		}

		/**
		 * @param bool $instance_or_slug
		 * @param bool $title
		 * @param bool $icon
		 *
		 * @return $this|bool|false|\WPO\Container
		 */
		public function separator( $instance_or_slug = false, $title = false, $icon = false ) {
			$_container = $this->container( $instance_or_slug, $title, $icon );
			$_container->set_separator( true );
			return $_container;
		}

		/**
		 * @param bool $container_slug_or_instance
		 * @param bool $title
		 * @param bool $icon
		 *
		 * @return $this|bool|false|\WPO\Container
		 */
		public function container( $container_slug_or_instance = false, $title = false, $icon = false ) {
			if ( $this->has_fields() && $this->has_containers() ) {
				wp_die( __( 'A Container Cannot Have Both Field & Containers', 'wponion' ) );
			}
			if ( $container_slug_or_instance instanceof \WPO\Container ) {
				$this->containers[] = $container_slug_or_instance;
				return $this;
			}

			$return = false;

			if ( is_string( $container_slug_or_instance ) && false === $title && false === $icon ) {
				$return = $this->container_exists( $container_slug_or_instance );
			}

			if ( false === $return ) {
				$return             = \WPO\Container::create( $container_slug_or_instance, $title, $icon );
				$this->containers[] = $return;
			}
			return $return;
		}

		/**
		 * @param                $before_container_id
		 * @param \WPO\Container $new_container
		 *
		 * @return $this
		 */
		public function container_before( $before_container_id, \WPO\Container $new_container ) {
			if ( $this->has_fields() ) {
				$new_arr = array();
				/* @var \WPO\Container $container */
				foreach ( $this->containers() as $container ) {
					if ( $container->name() === $before_container_id ) {
						$new_arr[] = $new_container;
						$new_arr[] = $container;
					} elseif ( $container->name() !== $new_container->name() ) {
						$new_arr[] = $container;
					}
				}
				$this->containers = $new_arr;
			}
			return $this;
		}

		/**
		 * @param                $after_container_id
		 * @param \WPO\Container $new_container
		 *
		 * @return $this
		 */
		public function container_after( $after_container_id, \WPO\Container $new_container ) {
			if ( $this->has_fields() ) {
				$new_arr = array();
				/* @var \WPO\Container $container */
				foreach ( $this->containers() as $container ) {
					if ( $container->name() === $after_container_id ) {
						$new_arr[] = $container;
						$new_arr[] = $new_container;
					} elseif ( $container->name() !== $new_container->name() ) {
						$new_arr[] = $container;
					}
				}
				$this->containers = $new_arr;
			}
			return $this;
		}

		/**
		 * @param $name
		 * @param $value
		 *
		 * @return $this
		 */
		public function set_var( $name, $value ) {
			$this->custom_data[ $name ] = $value;
			return $this;
		}

		/**
		 * @param $name
		 *
		 * @return bool
		 */
		public function get_var( $name ) {
			return ( isset( $this->custom_data[ $name ] ) ) ? $this->custom_data[ $name ] : false;
		}

		/**
		 * @param $name
		 *
		 * @return bool
		 */
		public function isset_var( $name ) {
			return ( isset( $this->custom_data[ $name ] ) );
		}

		/**
		 * @param $name
		 */
		public function remove_var( $name ) {
			unset( $this->custom_data[ $name ] );
		}

	}
}
