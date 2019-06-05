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

namespace WPO\Helper\Interfaces;

if ( ! interface_exists( 'WPO\Helper\Interfaces\Container' ) ) {
	/**
	 * Interface Container
	 *
	 * @package WPO\Helper\Interfaces
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	interface Container {
		/**
		 * Returns First Container Instance.
		 *
		 * @return false|\WPO\Container
		 */
		public function first_container();

		/**
		 * Checks If Conntainer Exists
		 * and if exists then returns the container instance.
		 *
		 * @param $container_id
		 *
		 * @return mixed
		 */
		public function container_exists( $container_id );

		/**
		 * Checks If Current Instance Has Container.
		 *
		 * @return bool
		 */
		public function has_containers();

		/**
		 * Returns All Containers.
		 *
		 * @return mixed
		 */
		public function containers();

		/**
		 * Creates A New Container Instance. or
		 * save an existing into builder. or
		 * returns an existing container.
		 *
		 * @param string|\WPO\Container $container_slug_or_instance
		 * @param bool                  $title
		 * @param bool                  $icon
		 *
		 * @return false|\WPO\Container
		 */
		public function container( $container_slug_or_instance, $title = false, $icon = false );
	}
}
