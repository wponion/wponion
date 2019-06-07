<?php

namespace WPOnion\Modules\WooCommerce;

use WPO\Builder;
use WPOnion\Bridge\Module;
use WPOnion\DB\WC_Product_Metabox_Save_Handler;
use WPOnion\DB\Data_Validator_Sanitizer;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion\Modules\WooCommerce\Product' ) ) {
	/**
	 * Class Product
	 *
	 * @package WPOnion\Modules\WooCommerce
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Product extends Module {
		/**
		 * Stores Group Slug To Exclude From Global Render.
		 *
		 * @var array
		 * @access
		 */
		protected $exclude_global_render = array();

		/**
		 * @var string
		 * @access protected
		 */
		protected $module = 'woocoomerce_product';

		/**
		 * Stores Product ID.
		 *
		 * @var bool
		 * @access
		 */
		protected $post_id = false;

		/**
		 * Stores Variation ID.
		 *
		 * @var bool
		 * @access
		 */
		protected $variation_id = false;

		/**
		 * variation_fields
		 *
		 * @var array
		 */
		public $variation_fields = array(
			'pricing'    => array(),
			'options'    => array(),
			'inventory'  => array(),
			'dimensions' => array(),
			'tax'        => array(),
			'download'   => array(),
			'default'    => array(),
		);

		/**
		 * Product constructor.
		 *
		 * @param array             $settings
		 * @param \WPO\Builder|null $fields
		 */
		public function __construct( $settings = array(), Builder $fields = null ) {
			parent::__construct( $fields, $settings );
			$this->module_db = 'postmeta';
			$this->init();
		}

		/**
		 * Hooks With WordPress.
		 */
		public function on_init() {
			$this->add_action( 'load-post.php', 'on_page_load' );
			$this->add_action( 'load-post-new.php', 'on_page_load' );
			$this->add_action( 'woocommerce_admin_process_product_object', 'save_product_data' );
			$this->add_action( 'wp_ajax_woocommerce_load_variations', 'handle_variation_options', 1 );
			$this->add_action( 'woocommerce_variation_options', 'variation_options', 10, 3 );
			$this->add_action( 'woocommerce_variation_options_pricing', 'variation_pricing', 10, 3 );
			$this->add_action( 'woocommerce_variation_options_inventory', 'variation_inventory', 10, 3 );
			$this->add_action( 'woocommerce_variation_options_dimensions', 'variation_dimensions', 10, 3 );
			$this->add_action( 'woocommerce_variation_options_tax', 'variation_tax', 10, 3 );
			$this->add_action( 'woocommerce_variation_options_download', 'variation_download', 10, 3 );
			$this->add_action( 'woocommerce_product_after_variable_attributes', 'variation_variable_attributes', 10, 3 );
			$this->add_action( 'woocommerce_save_product_variation', 'save_variation_fields', 10, 2 );
		}

		/**
		 * Registers Hooks With WordPress On Product Edit Page Load.
		 */
		public function on_page_load() {
			global $typenow;
			if ( 'product' === $typenow ) {
				$this->handle_variation_options();
				$this->add_action( 'admin_enqueue_scripts', 'load_style_script', 40 );
				$this->add_filter( 'woocommerce_product_data_tabs', 'add_wc_tabs', 30, 100 );
				$this->add_action( 'woocommerce_product_data_panels', 'add_wc_fields', 99 );
				$this->add_action( 'woocommerce_product_options_advanced', 'advanced_page' );
				$this->add_action( 'woocommerce_product_options_general_product_data', 'general_page' );
				$this->add_action( 'woocommerce_product_options_inventory_product_data', 'stock_page' );
				$this->add_action( 'woocommerce_product_options_related', 'linked_page' );
				$this->add_action( 'woocommerce_product_options_shipping', 'shipping_page' );
			}
		}

		/**
		 * Loads Required Assets.
		 */
		public function load_style_script() {
			wponion_load_core_assets();
		}

		/**
		 * Validates if given container / field is for variation or only for variation.
		 *
		 * @param array|\WPO\Container|\WPO\Field $data
		 *
		 * @return bool|string
		 */
		public function is_variation( $data ) {
			if ( wponion_is_builder( $data, 'container' ) ) {
				if ( isset( $data->variation ) && false !== $data->variation ) {
					return ( 'only' === strtolower( $data->variation ) ) ? 'only' : true;
				}
			} elseif ( wponion_is_builder( $data, 'field' ) || wponion_is_array( $data ) ) {
				if ( isset( $data['variation'] ) && false !== $data['variation'] ) {
					return ( 'only' === strtolower( $data['variation'] ) ) ? 'only' : true;
				}
			}

			return false;
		}

		/**
		 * Retuns Proper Variation Group Data.
		 *
		 * @param $data
		 *
		 * @return string
		 */
		private function variation_group( $data ) {
			if ( wponion_is_builder( $data, 'container' ) ) {
				if ( isset( $data->variation_group ) && false !== $data->variation_group ) {
					return $data->variation_group;
				}
			} elseif ( wponion_is_builder( $data, 'field' ) || wponion_is_array( $data ) ) {
				if ( isset( $data['variation_group'] ) && false !== $data['variation_group'] ) {
					return $data['variation_group'];
				}
			}

			return 'default';
		}

		/**
		 * Converts Into Usable HTML Class.
		 *
		 * @param $classes
		 * @param $prefix
		 *
		 * @return array|mixed
		 */
		protected function _show_hide_html_class( $classes, $prefix ) {
			$return = ( wponion_is_array( $classes ) ) ? array() : $prefix . $classes;
			if ( wponion_is_array( $classes ) ) {
				foreach ( $classes as $k => $v ) {
					$return[ $k ] = $prefix . $v;
				}
			}
			return $return;
		}

		/**
		 * Handles Show / Hide WC HTML Class.
		 *
		 * @param $data
		 *
		 * @return array|string
		 */
		protected function show_hide_class( $data ) {
			$return = array();

			if ( wponion_is_builder( $data, 'container' ) ) {
				if ( isset( $data->show ) ) {
					$return = wponion_html_class( $this->_show_hide_html_class( $data->show, 'show_if_' ) );
				}
				if ( isset( $data->hide ) ) {
					$return = wponion_html_class( $return, $this->_show_hide_html_class( $data->hide, 'hide_if_' ) );
				}
			} elseif ( wponion_is_builder( $data, 'container' ) || wponion_is_array( $data ) ) {
				if ( isset( $data['show'] ) ) {
					$return = wponion_html_class( $this->_show_hide_html_class( $data['show'], 'show_if_' ) );
				}
				if ( isset( $data['hide'] ) ) {
					$return = wponion_html_class( $return, $this->_show_hide_html_class( $data['hide'], 'hide_if_' ) );
				}
			}
			return wponion_html_class( $return, array(), false );
		}

		/**
		 * Registers New Tabs With WooCommerce.
		 *
		 * @param $tabs
		 *
		 * @return mixed
		 */
		public function add_wc_tabs( $tabs ) {
			/**
			 * @var \WPO\Container $data
			 */
			foreach ( $this->fields->get() as $data ) {
				if ( wponion_is_builder( $data, 'container' ) && false === $data->has_containers() ) {
					$is_var = $this->is_variation( $data );
					if ( isset( $tabs[ $data->name() ] ) && 'only' !== $is_var ) {
						$this->exclude_global_render[] = $data->name();
					}

					if ( 'only' !== $is_var && ! isset( $tabs[ $data->name() ] ) ) {
						$args                  = array(
							'label'    => $data->title(),
							'target'   => ! empty( $data->name() ) ? sanitize_title( 'wponion_' . $data->name() ) : false,
							'class'    => ! empty( $data->container_class() ) ? $data->container_class() : false,
							'priority' => ( isset( $data->priority ) && ! empty( $data->priority ) ) ? $data->priority : null,
						);
						$args['class']         = wponion_html_class( $args['class'], $this->show_hide_class( $data ), false );
						$tabs[ $data->name() ] = $args;
					}
				}
			}
			return $tabs;
		}

		/**
		 * Renders WC Tab Fields.
		 *
		 * @param       $fields
		 * @param array $extra_wrap_class
		 */
		protected function render_tab_fields( $fields, $extra_wrap_class = array() ) {
			$wrap_class = $this->wrap_class( wponion_html_class( $extra_wrap_class, array( 'wponion-wc-metabox-fields' ) ) );
			echo '<div class="' . $wrap_class . '"><div class="row">';
			foreach ( $fields as $field ) {
				$is_var = $this->is_variation( $field );
				if ( 'only' === $is_var && false === $this->variation_id ) {
					continue;
				}
				$field = $this->parse_args( $field, array( 'wrap_class' => array() ) );
				if ( ! wponion_is_array( $field['wrap_class'] ) ) {
					$field['wrap_class'] = array( $field['wrap_class'] );
				}
				$field['wrap_class'] = wponion_html_class( $field['wrap_class'], $this->show_hide_class( $field ) );
				echo $this->render_field( $field, false, false );
			}
			echo '</div></div>';
		}

		/**
		 * Renders HTML Output For Wc.
		 */
		public function add_wc_fields() {
			global $post, $thepostid;
			$id = is_object( $post ) ? $post->ID : $thepostid;
			$this->set_id( $id );
			/**
			 * @var \WPO\Container $data
			 */
			foreach ( $this->fields->get() as $data ) {
				if ( wponion_is_builder( $data, 'container' ) && false === $data->has_containers() && ! in_array( $data->name(), $this->exclude_global_render, true ) ) {
					$is_var = $this->is_variation( $data );
					if ( 'only' !== $is_var ) {
						$id = sanitize_title( 'wponion_' . $data->name() );
						echo '<div id="' . $id . '" class="panel woocommerce_options_panel hidden ">';
						$this->render_tab_fields( $data->fields() );
						echo '</div>';
					}
				}
			}
		}

		/**
		 * Renders WC Default Tab Fields.
		 *
		 * @wc_tab advanced
		 * @wc_tab general
		 * @wc_tab stock
		 * @wc_tab linked
		 * @wc_tab shipping
		 *
		 * @param $page
		 */
		protected function render_page_fields( $page ) {
			global $post, $thepostid;
			$id = is_object( $post ) ? $post->ID : $thepostid;
			$this->set_id( $id );
			$container = $this->fields->container_exists( $page );
			if ( wponion_is_builder( $container, 'container' ) ) {
				$is_var = $this->is_variation( $container );
				if ( 'only' !== $is_var ) {
					$this->render_tab_fields( $container->fields() );
				}
			}
		}

		/**
		 * Renders HTML Output for
		 *
		 * @wc_tab : advanced
		 */
		public function advanced_page() {
			$this->render_page_fields( 'advanced' );
		}

		/**
		 * Renders HTML Output for
		 *
		 * @wc_tab : general
		 */
		public function general_page() {
			$this->render_page_fields( 'general' );
		}

		/**
		 * Renders HTML Output for
		 *
		 * @wc_tab : stock
		 */
		public function stock_page() {
			$this->render_page_fields( 'stock' );
		}

		/**
		 * Renders HTML Output for
		 *
		 * @wc_tab : linked
		 */
		public function linked_page() {
			$this->render_page_fields( 'linked' );
		}

		/**
		 * Renders HTML Output for
		 *
		 * @wc_tab : shipping
		 */
		public function shipping_page() {
			$this->render_page_fields( 'shipping' );
		}

		/**
		 * Inits Class on Product Variation Ajax Request.
		 */
		public function handle_variation_options() {
			foreach ( $this->fields->get() as $page ) {
				if ( wponion_is_builder( $page, 'container' ) ) {
					$is_var = $this->is_variation( $page );

					foreach ( $page->fields() as $field ) {
						$final_group = false;
						if ( false !== $is_var ) {
							$parent_group = ( true === $this->variation_group( $page ) ) ? 'default' : $this->variation_group( $page );
							$final_group  = ( true === $this->variation_group( $field ) ) ? $parent_group : $this->variation_group( $field );
						} else {
							if ( false !== $this->is_variation( $field ) ) {
								$final_group = ( true === $this->variation_group( $field ) ) ? 'default' : $this->variation_group( $field );
							}
						}

						if ( false !== $final_group ) {
							if ( ! isset( $this->variation_fields[ $final_group ] ) ) {
								$this->variation_fields[ $final_group ] = array();
							}
							$this->variation_fields[ $final_group ][ $field['id'] ] = $field;
						}
					}
				}
			}
		}

		/**
		 * Renders Fields HTML. For Variation Product.
		 *
		 * @param string            $tab
		 * @param string            $loop
		 * @param array             $variation_data
		 * @param array|\WC_Product $variation
		 *
		 * @return bool
		 */
		public function render_variation_fields_html( $tab = '', $loop = '', $variation_data = array(), $variation = array() ) {
			wponion_localize();
			if ( isset( $this->variation_fields[ $tab ] ) && empty( $this->variation_fields[ $tab ] ) ) {
				return true;
			}

			if ( $variation instanceof \WC_Product || $variation instanceof \WC_Product_Variation ) {
				$id = $variation->get_id();
			} elseif ( $variation instanceof \WP_Post ) {
				$id = $variation->ID;
			}
			$this->set_id( $id );
			$this->variation_id = $loop;
			echo $this->render_tab_fields( $this->variation_fields[ $tab ], array( 'wponion-woocommerce-variation' ) );
			do_action( 'wponion_module_woocommerce_ajax_variation_fields' );
			return true;
		}

		/**
		 * Renders Variation HTML Output Tab For :
		 *
		 * @wc_tab options
		 *
		 * @param $loop
		 * @param $variation_data
		 * @param $variation
		 */
		public function variation_options( $loop, $variation_data, $variation ) {
			$this->render_variation_fields_html( 'options', $loop, $variation_data, $variation );
		}

		/**
		 * Renders Variation HTML Output Tab For :
		 *
		 * @wc_tab pricing
		 *
		 * @param $loop
		 * @param $variation_data
		 * @param $variation
		 */
		public function variation_pricing( $loop, $variation_data, $variation ) {
			$this->render_variation_fields_html( 'pricing', $loop, $variation_data, $variation );
		}

		/**
		 * Renders Variation HTML Output Tab For :
		 *
		 * @wc_tab inventory
		 *
		 * @param $loop
		 * @param $variation_data
		 * @param $variation
		 */
		public function variation_inventory( $loop, $variation_data, $variation ) {
			$this->render_variation_fields_html( 'inventory', $loop, $variation_data, $variation );
		}

		/**
		 * Renders Variation HTML Output Tab For :
		 *
		 * @wc_tab dimensions
		 *
		 * @param $loop
		 * @param $variation_data
		 * @param $variation
		 */
		public function variation_dimensions( $loop, $variation_data, $variation ) {
			$this->render_variation_fields_html( 'dimensions', $loop, $variation_data, $variation );
		}

		/**
		 * Renders Variation HTML Output Tab For :
		 *
		 * @wc_tab tax
		 *
		 * @param $loop
		 * @param $variation_data
		 * @param $variation
		 */
		public function variation_tax( $loop, $variation_data, $variation ) {
			$this->render_variation_fields_html( 'tax', $loop, $variation_data, $variation );
		}

		/**
		 * Renders Variation HTML Output Tab For :
		 *
		 * @wc_tab download
		 *
		 * @param $loop
		 * @param $variation_data
		 * @param $variation
		 */
		public function variation_download( $loop, $variation_data, $variation ) {
			$this->render_variation_fields_html( 'download', $loop, $variation_data, $variation );
		}

		/**
		 * Renders Variation HTML Output Tab For :
		 *
		 * @wc_tab variable_attributes
		 *
		 * @param $loop
		 * @param $variation_data
		 * @param $variation
		 */
		public function variation_variable_attributes( $loop, $variation_data, $variation ) {
			$this->render_variation_fields_html( 'default', $loop, $variation_data, $variation );
		}

		/**
		 * @param $product \WC_Product|integer
		 */
		public function save_product_data( $product ) {
			$values = ( false === $this->variation_id ) ? $_POST[ $this->unique ] : $_POST[ $this->unique ][ $product ];
			$fields = ( false === $this->variation_id ) ? $this->fields : $this->variation_fields;
			$is_var = ( false === $this->variation_id ) ? false : true;
			if ( false === $this->variation_id ) {
				$this->set_id( $product->get_id() );
			}
			$instance = new WC_Product_Metabox_Save_Handler( array(
				'module'        => &$this,
				'unique'        => $this->unique(),
				'fields'        => $fields,
				'posted_values' => $values,
				'db_values'     => $this->get_db_values(),
			) );

			$instance->run( $is_var );
			$values = $instance->get_values();
			$this->set_db_values( $values );
			$this->options_cache['field_errors'] = $instance->get_errors();
			$this->set_db_cache( $this->options_cache );
			$this->options_cache = false;
		}

		/**
		 * Handles Product Data Save For Variation.
		 *
		 * @param $variation_id
		 * @param $loop
		 */
		public function save_variation_fields( $variation_id, $loop ) {
			$this->handle_variation_options();
			$this->set_id( $variation_id );
			$this->variation_id = true;
			$this->save_product_data( $loop );
		}

		/**
		 * Returns Unique data.
		 *
		 * @return string
		 */
		public function unique() {
			if ( false !== $this->variation_id ) {
				return $this->unique . '[' . $this->variation_id . ']';
			}
			return $this->unique;
		}

		/**
		 * Resets Post ID.
		 *
		 * @param $post_id
		 */
		public function set_post_id( $post_id ) {
			parent::set_post_id( $post_id );
			$this->get_db_values();
			$this->options_cache = false;
			$this->get_cache();
		}

		/**
		 * Returns Unique Cache ID For each instance but only once.
		 *
		 * @return string
		 */
		protected function get_cache_id() {
			//return 'wponion_' . wponion_hash_string( $this->post_id() . '_' . $this->unique() . '_' . $this->module() ) . '_cache';
			return wponion_hash_string( $this->get_id() . '_' . $this->unique() . '_' . $this->module() );
		}
	}
}
