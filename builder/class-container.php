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

namespace WPO;

use WPO\Helper\Container\Helper;

if ( ! class_exists( 'WPO\Container' ) ) {
	/**
	 * Class Container
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Container extends Helper {
		/**
		 * Container constructor.
		 *
		 * @param bool $slug
		 * @param bool $title
		 * @param bool $icon
		 */
		public function __construct( $slug = false, $title = false, $icon = false ) {
			$this->slug  = $slug;
			$this->title = $title;
			$this->icon  = $icon;
		}

		/**
		 * @param bool $container_slug
		 * @param bool $title
		 * @param bool $icon
		 *
		 * @static
		 * @return \WPO\Container
		 */
		public static function create( $container_slug = false, $title = false, $icon = false ) {
			return new self( $container_slug, $title, $icon );
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
			if ( $container_slug_or_instance instanceof Container ) {
				$this->sub_containers[] = $container_slug_or_instance;
				return $this;
			}

			$return = false;

			if ( is_string( $container_slug_or_instance ) && false === $title && false === $icon ) {
				$return = $this->container_exists( $container_slug_or_instance );
			}

			if ( false === $return ) {
				$return                 = self::create( $container_slug_or_instance, $title, $icon );
				$this->sub_containers[] = $return;
			}
			return $return;
		}

		/**
		 * @param string|\WPO\Field $field_type_or_instance
		 * @param string            $field_id
		 * @param bool              $title
		 * @param array             $args
		 *
		 * @return $this|bool|mixed|\WPO\Field
		 * @throws \Exception
		 */
		public function field( $field_type_or_instance, $field_id = '', $title = false, $args = array() ) {
			if ( $this->has_containers() ) {
				throw new \Exception( 'A Container Cannot Have Both Field & Containers' );
			}

			if ( $field_type_or_instance instanceof Field ) {
				$this->fields[] = $field_type_or_instance;
				return $this;
			}

			$return = false;

			if ( is_string( $field_type_or_instance ) && false === $field_id && false === $title ) {
				$return = $this->field_exists( $field_type_or_instance );
			}

			if ( false === $return ) {
				$return = Field::create( $field_type_or_instance, $field_id, $title, $args );
				if ( $return ) {
					$this->fields[] = $return;
				} else {
					$return = false;
				}
			}
			return $return;
		}

		/**
		 * @return string|bool
		 */
		public function name() {
			return $this->slug;
		}

		/**
		 * @return string|bool
		 */
		public function slug() {
			return $this->slug;
		}

		/**
		 * @return string|bool
		 */
		public function title() {
			return $this->title;
		}

		/**
		 * @return string|bool
		 */
		public function icon() {
			return $this->icon;
		}

		/**
		 * @return callable|bool
		 */
		public function callback() {
			return $this->callback;
		}

		/**
		 * @return bool|string
		 */
		public function href() {
			return $this->href;
		}

		/**
		 * @return array
		 */
		public function query_args() {
			return $this->query_args;
		}

		/**
		 * @return array|string
		 */
		public function class() {
			return $this->class;
		}
	}
}
