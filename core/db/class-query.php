<?php
/**
 *
 * Initial version created 02-07-2018 / 10:54 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\DB;

if ( ! class_exists( '\WPOnion\DB\Query' ) ) {
	/**
	 * Class Query
	 *
	 * @package WPOnion\DB
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Query extends \WPOnion\Bridge {

		/**
		 * query
		 *
		 * @var null
		 */
		protected $query = null;

		/**
		 * query_arg
		 *
		 * @var array
		 */
		protected $query_args = array();

		/**
		 * Query constructor.
		 */
		public function __construct() {
		}

		/**
		 * @param string $type
		 * @param array  $args
		 * @param null   $search
		 *
		 * @return array
		 */
		public function query( $type = '', $args = array(), $search = null ) {
			$this->query_args = array();
			$this->query      = null;
			$result           = null;
			$op_key           = 'ID';
			$op_value         = 'name';
			$def_key          = 'ID';
			$def_value        = 'name';
			$is_all           = false;
			$_q_type          = 'cpt';

			if ( ! empty( $search ) ) {
				$this->query_args['s'] = $search;
			}

			if ( ! empty( $args ) ) {
				$op_key   = isset( $args['option_key'] ) ? $args['option_key'] : 'ID';
				$op_value = isset( $args['option_label'] ) ? $args['option_label'] : 'name';
				$is_all   = ( false === $op_key && false === $op_value ) ? true : false;

				unset( $args['option_key'] );
				unset( $args['option_label'] );
				$this->query_args = $this->parse_args( $args, $this->query_args );
			}

			switch ( $type ) {
				case 'pages':
				case 'page':
				case 'posts':
				case 'post':
					$_q_type   = 'cpt';
					$def_key   = 'ID';
					$def_value = 'post_title';
					if ( in_array( $type, array( 'posts', 'post' ) ) ) {
						if ( ! isset( $this->query_args['post_type'] ) ) {
							$this->query_args['post_type'] = 'post';
						}
					} else {
						if ( ! isset( $this->query_args['post_type'] ) ) {
							$this->query_args['post_type'] = 'page';
						}
					}
					break;

				case 'categories':
				case 'category':
				case 'tags':
				case 'tag':
					$_q_type   = 'cat';
					$def_key   = 'term_id';
					$def_value = 'name';
					if ( ! isset( $this->query_args['taxonomies'] ) && ! isset( $this->query_args['taxonomy'] ) ) {
						if ( in_array( $type, array( 'tags', 'tag' ) ) ) {
							$this->query_args ['taxonomies'] = ( isset( $this->query_args ['taxonomies'] ) ) ? $this->query_args['taxonomies'] : 'post_tag';
						} else {
							$this->query_args['taxonomy'] = 'category';
						}
					}
					if ( ! empty( $search ) ) {
						$this->query_args['search'] = $search;
						unset( $this->query_args['s'] );
					}
					break;

				case 'users':
					$def_key   = 'ID';
					$def_value = 'user_login';
					$_q_type   = 'users';
					break;

				case 'menus':
					$def_key   = 'term_id';
					$def_value = 'name';
					$_q_type   = 'menu';
					break;

				case 'post_types':
					return \WPOnion\Helper::get_post_types();
					break;

				case 'sidebars':
					global $wp_registered_sidebars;
					$def_key   = 'id';
					$def_value = 'name';
					$_q_type   = false;
					$result    = $wp_registered_sidebars;
					break;

				case 'menu_location':
					return get_registered_nav_menus();
					break;

				case 'currency':
				case 'currency_symbol':
					return ( 'currency_symbol' === $type ) ? \WPOnion\Helper::get_currency_symbol() : \WPOnion\Helper::get_currency();
					break;

				case 'body_layouts':
				case 'body_layout':
				case 'header_layouts':
				case 'header_layout':
				case 'sidebar_layouts':
				case 'sidebar_layout':
					$layout  = str_replace( array( '_layouts', '_layout' ), '', $type );
					$size    = ( isset( $args['size'] ) ) ? $args['size'] : '200';
					$exclude = ( isset( $args['exclude'] ) ) ? $args['exclude'] : array();
					return wponion_layouts_field_option( $layout, $size, $exclude );
					break;
			}

			$this->handle_query_args();

			switch ( $_q_type ) {
				case 'cpt':
					$this->query = new \WP_Query( $this->query_args );
					$result      = $this->query->posts;
					break;
				case 'cat':
					$result = get_terms( $this->query_args );
					break;
				case 'menu':
					$result = wp_get_nav_menus( $this->query_args );
					break;
				case 'users':
					$result = get_users( $this->query_args );
					break;
			}

			if ( is_wp_error( $result ) || is_null( $result ) || empty( $result ) ) {
				return array();
			}

			if ( false === $is_all ) {
				$result = $this->query_data( $result, array( $op_key, $op_value ), array( $def_key, $def_value ) );
			}
			return $result;
		}

		/**
		 * Handles Query Args By Replacing true/1 and false/0
		 * into actual true/false
		 */
		private function handle_query_args() {
			foreach ( $this->query_args as $id => $value ) {
				switch ( $value ) {
					case 'false':
					case '0':
						$this->query_args[ $id ] = false;
						break;
					case 'true':
					case '1':
						$this->query_args[ $id ] = true;
						break;
				}
			}
		}

		/**
		 * @param array $data
		 * @param array $required
		 * @param array $default
		 *
		 * @return array
		 */
		public function query_data( $data = array(), $required = array(), $default = array() ) {
			$return = array();
			foreach ( $data as $values ) {
				$opk            = $this->option_data( $required[0], $default[0], $values );
				$opv            = $this->option_data( $required[1], $default[1], $values );
				$return[ $opk ] = $opv;
			}
			return $return;
		}

		/**
		 * @param $key
		 * @param $default
		 * @param $data
		 *
		 * @return mixed|bool
		 */
		private function option_data( $key, $default, $data ) {
			preg_match_all( '@\[([^<>&/\[\]\x00-\x20=]++)]@', $key, $matches, PREG_SET_ORDER, 0 );

			if ( ! empty( $matches ) ) {
				foreach ( $matches as $match ) {
					if ( isset( $match[1] ) && ! empty( $match[1] ) ) {
						$_data = $this->_single_option_data( $data, $match[1], $default );
						$key   = str_replace( $match[0], $_data, $key );
					}
				}
				return $key;
			} else {
				return $this->_single_option_data( $data, $key, $default );
			}
		}

		/**
		 * Returns Single data.
		 *
		 * @param $data
		 * @param $key
		 * @param $default
		 *
		 * @return bool|mixed
		 */
		private function _single_option_data( $data, $key, $default ) {
			if ( wponion_is_array( $data ) ) {
				if ( isset( $data[ $key ] ) ) {
					return $data[ $key ];
				} elseif ( isset( $data[ $default ] ) ) {
					return $data[ $default ];
				}
			} elseif ( is_object( $data ) ) {
				if ( isset( $data->{$key} ) ) {
					return $data->{$key};
				} elseif ( isset( $data->{$default} ) ) {
					return $data->{$default};
				}
			}
			return false;
		}
	}
}


