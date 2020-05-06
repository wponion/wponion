<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Sorter' ) ) {
	/**
	 * Class Sorter
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
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
			$this['options'] = array(
				'enabled'  => array(),
				'disabled' => array(),
			);
		}

		/**
		 * @param      $enabled
		 * @param bool $merge
		 *
		 * @return $this
		 */
		public function enabled( $enabled, $merge = true ) {
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
		public function disabled( $disabled = array(), $merge = true ) {
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
		public function enable( $slug = null, $title = null ) {
			return $this->enabled( array( $slug => $title ) );
		}

		/**
		 * @param null|string $slug
		 * @param null|string $title
		 *
		 * @return $this
		 */
		public function disable( $slug = null, $title = null ) {
			return $this->disabled( array( $slug => $title ) );
		}

		/**
		 * @param null $title
		 *
		 * @return $this
		 */
		public function enabled_title( $title = null ) {
			$this['enabled_title'] = $title;
			return $this;
		}

		/**
		 * @param null $title
		 *
		 * @return $this
		 */
		public function disabled_title( $title = null ) {
			$this['disabled_title'] = $title;
			return $this;
		}
	}
}
