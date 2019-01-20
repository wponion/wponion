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
		use \WPO\Helper\Container\Functions;
		use \WPO\Helper\Field\Functions;
		use \WPO\Helper\Field\Types;

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
		 * @return array
		 */
		public function attributes() {
			return $this->attributes;
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
