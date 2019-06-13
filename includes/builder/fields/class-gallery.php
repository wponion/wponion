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

namespace WPO\Fields;

if ( ! class_exists( 'WPO\Fields\Gallery' ) ) {
	/**
	 * Class Gallery
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Gallery extends \WPO\Field {
		/**
		 * Color_Group constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'gallery', $id, $title, $args );
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function add_button( $button ) {
			$this['add_button'] = $button;
			return $this;
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function edit_button( $button ) {
			$this['edit_button'] = $button;
			return $this;
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function remove_button( $button ) {
			$this['remove_button'] = $button;
			return $this;
		}

		/**
		 * @param int $size
		 *
		 * @return $this
		 */
		public function size( $size = 150 ) {
			$this['size'] = $size;
			return $this;
		}

		/**
		 * @param bool $sort
		 *
		 * @return $this
		 */
		public function sort( $sort = false ) {
			$this['sort'] = $sort;
			return $this;
		}

		/**
		 * @return $this
		 */
		public function enable_sort() {
			return $this->sort( true );
		}

		/**
		 * @return $this
		 */
		public function disable_sort() {
			return $this->sort( false );
		}
	}
}
