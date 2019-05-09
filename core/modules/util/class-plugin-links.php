<?php
/**
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules\Util;

if ( ! class_exists( '\WPOnion\Modules\Util\Plugin_Links' ) ) {
	/**
	 * Class Plugin_Links
	 *
	 * @package WPOnion\Modules\Util
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Plugin_Links {
		/**
		 * @var null
		 * @access
		 */
		protected $file = null;

		/**
		 * Stores All Action Links.
		 *
		 * @var array
		 * @access
		 */
		protected $action_link = array(
			'before' => array(),
			'after'  => array(),
			'center' => array(),
		);

		/**
		 * Stores All Action Links.
		 *
		 * @var array
		 * @access
		 */
		protected $row_links = array(
			'before' => array(),
			'after'  => array(),
			'center' => array(),
		);

		/**
		 * Plugin_Links constructor.
		 *
		 * @param $plugin_file
		 */
		public function __construct( $plugin_file ) {
			if ( is_admin() ) {
				$this->file = plugin_basename( $plugin_file );
				add_filter( 'plugin_row_meta', array( $this, 'row_links' ), 10, 2 );
				add_filter( 'plugin_action_links_' . $this->file, array( $this, 'action_links' ) );
			}
		}

		/**
		 * @param $type
		 * @param $data
		 *
		 * @return array
		 */
		protected function _merge( $type, $data ) {
			if ( ! empty( $this->{$type}['before'] ) ) {
				$data = array_merge( $this->{$type}['before'], $data );
			}

			if ( ! empty( $this->{$type}['center'] ) ) {
				$data = array_merge( $data, $this->{$type}['center'] );
			}

			if ( ! empty( $this->{$type}['after'] ) ) {
				$data = array_merge( $data, $this->{$type}['after'] );
			}
			return $data;
		}

		/**
		 * Merges Row Links And Sends Them.
		 *
		 * @param $links
		 * @param $plugin_file
		 *
		 * @return array
		 */
		public function row_links( $links, $plugin_file ) {
			return ( $plugin_file === $this->file ) ? $this->_merge( 'row_links', $links ) : $links;
		}

		/**
		 * Merges Action Links And Sends Them.
		 *
		 * @param $actions
		 *
		 * @return array
		 */
		public function action_links( $actions ) {
			return $this->_merge( 'action_link', $actions );
		}

		/**
		 * @param string      $var
		 * @param string      $type
		 * @param string|null $slug
		 * @param string      $element
		 *
		 * @return $this
		 */
		protected function _store( $var, $type, $slug, $element ) {
			if ( false !== $slug ) {
				$this->{$var}[ $type ][ $slug ] = $element;
			} else {
				$this->{$var}[ $type ][] = $element;
			}
			return $this;
		}

		/**
		 * @param $slug
		 * @param $element
		 *
		 * @return \WPOnion\Modules\Util\Plugin_Links
		 */
		public function action_link( $slug, $element ) {
			return $this->_store( 'action_link', 'center', $slug, $element );
		}

		/**
		 * @param $slug
		 * @param $element
		 *
		 * @return \WPOnion\Modules\Util\Plugin_Links
		 */
		public function action_link_before( $slug, $element ) {
			return $this->_store( 'action_link', 'before', $slug, $element );
		}

		/**
		 * @param $slug
		 * @param $element
		 *
		 * @return \WPOnion\Modules\Util\Plugin_Links
		 */
		public function action_link_after( $slug, $element ) {
			return $this->_store( 'action_link', 'after', $slug, $element );
		}

		/**
		 * @param $element
		 *
		 * @return \WPOnion\Modules\Util\Plugin_Links
		 */
		public function row_link( $element ) {
			return $this->_store( 'row_links', 'center', false, $element );
		}

		/**
		 * @param $element
		 *
		 * @return \WPOnion\Modules\Util\Plugin_Links
		 */
		public function row_link_before( $element ) {
			return $this->_store( 'row_links', 'before', false, $element );
		}

		/**
		 * @param $element
		 *
		 * @return \WPOnion\Modules\Util\Plugin_Links
		 */
		public function row_link_after( $element ) {
			return $this->_store( 'row_links', 'after', false, $element );
		}
	}
}
