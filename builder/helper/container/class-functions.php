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
			return ( false !== $this->containers && wponion_is_array( $this->containers ) );
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
		 * @param bool $container_slug_or_instance
		 * @param bool $title
		 * @param bool $icon
		 *
		 * @return $this|bool|false|\WPO\Container
		 * @throws \Exception
		 */
		public function container( $container_slug_or_instance = false, $title = false, $icon = false ) {
			if ( $this->has_fields() ) {
				throw new \Exception( 'A Container Cannot Have Both Field & Containers' );
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
				$return             = self::create( $container_slug_or_instance, $title, $icon );
				$this->containers[] = $return;
			}
			return $return;
		}

	}
}
