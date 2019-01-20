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

use WPO\Helper\Field\Common_Args;

if ( ! class_exists( 'WPO\Field' ) ) {
	/**
	 * Class Field
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Field extends Common_Args {
		/**
		 * Creates A New Field Instance.
		 *
		 * @param bool  $type
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 *
		 * @static
		 * @return bool|$this|\WPO\Field
		 */
		public static function create( $type = false, $id = false, $title = false, $args = array() ) {
			if ( $type ) {
				$class = ( false === class_exists( $type ) ) ? '\WPO\Field' : '\WPO\\' . $type;
				return new $class( $type, $id, $title, $args );
			}
			return false;
		}

		/**
		 * Field constructor.
		 *
		 * @param bool  $type
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $type = false, $id = false, $title = false, $args = array() ) {
			unset( $this->module );
			unset( $this->plugin_id );
			$_args = array();
			switch ( func_num_args() ) {
				case 1:
					$_args = $this->parse_args( array(
						'type' => ( wponion_is_array( $type ) ) ? false : $type,
					), $this->defaults() );
					$type  = ( wponion_is_array( $type ) ) ? $type : array();
					$_args = $this->parse_args( $type, $_args );
					break;
				case 2:
					$_args = $this->parse_args( array(
						'type' => $type,
						'id'   => ( wponion_is_array( $id ) ) ? false : $id,
					), $this->defaults() );
					$id    = ( wponion_is_array( $id ) ) ? $id : array();
					$_args = $this->parse_args( $id, $_args );
					break;
				case 3:
					$_args = $this->parse_args( array(
						'type'  => $type,
						'id'    => $id,
						'title' => ( wponion_is_array( $title ) ) ? false : $title,
					), $this->defaults() );
					$title = ( wponion_is_array( $title ) ) ? $title : array();
					$_args = $this->parse_args( $title, $_args );
					break;
				case 4:
					$_args = $this->parse_args( array(
						'type'  => $type,
						'id'    => $id,
						'title' => $title,
					), $this->defaults() );
					$args  = wponion_is_array( $args ) ? $args : array();
					$_args = $this->parse_args( $args, $_args );
					break;
			}

			foreach ( $_args as $key => $val ) {
				$this[ $key ] = $val;
			}

			$this->unique = null;

			if ( ! isset( $this['id'] ) || isset( $this['id'] ) && empty( $this['id'] ) ) {
				$this->unique = wponion_hash_string( $this->unique . wponion_hash_array( $args ) );
			} elseif ( isset( $this['id'] ) ) {
				$this->unique = $this['id'];
			}
		}

		/**
		 * Returns Field Default Args.
		 *
		 * @return array
		 */
		protected function defaults() {
			return wponion_field_defaults();
		}

	}
}

