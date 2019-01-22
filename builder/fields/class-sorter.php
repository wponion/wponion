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

if ( ! class_exists( 'WPO\Sorter' ) ) {
	/**
	 * Class Sorter
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method disabled()
	 * @method enabled()
	 * @method enabled_title()
	 * @method disabled_title()
	 */
	class Sorter extends Field {
		/**
		 * Select constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'sorter', $id, $title, $args );
		}

		/**
		 * @param      $enabled
		 * @param bool $merge
		 *
		 * @return $this
		 */
		public function set_enabled( $enabled, $merge = true ) {
			$this->_set_array_handler( 'enabled', $enabled, $merge );
			$this['options']['enabled'] = $this['enabled'];
			return $this;
		}

		/**
		 * @param array $disabled
		 * @param bool  $merge
		 *
		 * @return $this
		 */
		public function set_disabled( $disabled = array(), $merge = true ) {
			$this->_set_array_handler( 'disabled', $disabled, $merge );
			$this['options']['disabled'] = $this['disabled'];
			return $this;
		}

		/**
		 * @param null $slug
		 * @param null $title
		 *
		 * @return $this
		 */
		public function set_enable( $slug = null, $title = null ) {
			return $this->set_enabled( array( $slug => $title ) );
		}

		/**
		 * @param null|string $slug
		 * @param null|string $title
		 *
		 * @return $this
		 */
		public function enable( $slug = null, $title = null ) {
			return $this->set_enable( $slug, $title );
		}

		/**
		 * @param null|string $slug
		 * @param null|string $title
		 *
		 * @return $this
		 */
		public function set_disable( $slug = null, $title = null ) {
			return $this->set_disabled( array( $slug => $title ) );
		}

		/**
		 * @param null|string $slug
		 * @param null|string $title
		 *
		 * @return $this
		 */
		public function disable( $slug = null, $title = null ) {
			return $this->set_disable( $slug, $title );
		}

		/**
		 * @param null $title
		 *
		 * @return $this
		 */
		public function set_enabled_title( $title = null ) {
			$this['enabled_title'] = $title;
			return $this;
		}

		/**
		 * @param null $title
		 *
		 * @return $this
		 */
		public function set_disabled_title( $title = null ) {
			$this['disabled_title'] = $title;
			return $this;
		}

		/**
		 * @return array
		 */
		public function defaults() {
			return array(
				'options'        => array(),
				'enabled_title'  => __( 'Enabled Modules' ),
				'disabled_title' => __( 'Disabled Modules' ),
			);
		}
	}
}
