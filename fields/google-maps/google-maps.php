<?php
/**
 *
 * Project : wponion
 * Date : 01-11-2018
 * Time : 11:17 AM
 * File : google_maps.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\google_maps' ) ) {
	class google_maps extends \WPOnion\Field {

		public function output() {
			echo $this->before();
			$class = ( $this->data( 'show_map' ) ) ? 'with-map' : '';
			echo '<div class="map_container ' . $class . '">';
			echo '<div class="searchbox">';
			echo $this->sub_field( $this->handle_args( 'title', $this->data( 'search_box' ), array(
				'only_field' => true,
				'type'       => 'text',
			) ), null, false );

			/*echo $this->sub_field( $this->handle_args( 'class', $this->data( 'place_types' ), array(
				'id'   => null,
				'type' => 'select',
			), array(
				'only_field' => true,
				'options'    => array(
					''              => __( 'ALL' ),
					'establishment' => __( 'Place' ),
					'address'       => __( 'Address' ),
					'geo'           => __( 'GEO' ),
				),
			) ), array(), $this->name() );*/
			echo '</div>';

			if ( $this->data( 'show_map' ) ) {
				echo '<div class="map_canvas " id="gmap_' . $this->js_field_id() . '"></div>';
			}
			echo '</div>';


			echo '<div  class="map_fields" id="gmap_fields_' . $this->js_field_id() . '">';
			echo $this->_sub_field( 'street_number', 'street_number', __( 'Street Number' ) );
			echo $this->_sub_field( 'route', 'route', __( 'Route' ) );
			echo $this->_sub_field( 'locality', 'locality', __( 'Locality' ) );
			echo $this->_sub_field( 'administrative_area_level_1', 'administrative_area_level_1', __( 'State' ) );
			echo $this->_sub_field( 'postal_code', 'postal_code', __( 'Postal Code' ) );
			echo $this->_sub_field( 'country', 'country', __( 'Country' ) );

			echo $this->_sub_field( 'item_name', 'name', __( 'Name' ) );
			echo $this->_sub_field( 'formatted_address', 'formatted_address', __( 'Formatted Address' ) );

			echo $this->_sub_field( 'url', 'url', __( 'URL' ) );
			echo $this->_sub_field( 'website', 'website', __( 'Website' ) );


			echo $this->_sub_field( 'latitude', 'lat', __( 'Latitude' ) );
			echo $this->_sub_field( 'longitude', 'lng', __( 'Longitude' ) );


			echo $this->_sub_field( 'location', 'location', __( 'Location' ) );
			echo $this->_sub_field( 'location_type', 'location_type', __( 'location_type' ) );
			echo $this->_sub_field( 'poi', 'point_of_interest', __( 'Point Of Interest' ) );


			echo $this->_sub_field( 'bounds', 'bounds', __( 'Bounds' ) );
			echo $this->_sub_field( 'viewport', 'viewport', __( 'Viewport' ) );
			echo $this->_sub_field( 'sublocality', 'sublocality', __( 'Sub Locality' ) );
			echo $this->_sub_field( 'country_short', 'country_short', __( 'Country Short' ) );


			echo '</div>';
			echo $this->after();
		}

		protected function _sub_field( $args_key = '', $name = '', $title = '', $extra_args = array() ) {
			$field = $this->parse_args( $extra_args, array(
				'type'       => ( false !== $this->data( $args_key ) ) ? 'text' : 'hidden',
				'title'      => $title,
				'horizontal' => true,
			) );

			$field = $this->handle_args( 'title', $this->data( $args_key ), $field, array(
				'id'         => $name,
				'attributes' => array(
					'data-map-value' => $name,
				),
			) );
			echo $this->sub_field( $field, $this->value( $name ), $this->name() );
		}

		protected function js_field_args() {
			$default_map = $this->field_default();
			$map         = $this->parse_args( $this->data( 'map' ), $default_map['map'] );

			$lat = ( false !== $this->value( 'lat' ) ) ? $this->value( 'lat' ) : '20.593684';
			$lng = ( false !== $this->value( 'lng' ) ) ? $this->value( 'lng' ) : '78.96288000000004';
			if ( ! isset( $map['location'] ) ) {
				$map['location'] = array( $lat, $lng );
			}
			return array(
				'show_map' => ( true === $this->data( 'show_map' ) ) ? 'yes' : 'no',
				'map'      => $map,
			);
		}

		public function field_assets() {
			$key = $this->data( 'api_key' );
			wp_enqueue_script( 'gmap-api', "//maps.googleapis.com/maps/api/js?key={$key}&libraries=places" );
		}

		protected function field_default() {
			return array(
				'show_map'                    => true,
				'api_key'                     => 'AIzaSyDnL2VWF_uAlxQTnFrIA3y4C_6EZkM2KCg',
				#'AIzaSyALwD4rXMxz3k5BQK5WuJyJ6ialz4eXM8Q',
				'map'                         => array(
					'types' => array(),
				),
				'search_box'                  => '',
				'item_name'                   => false,
				'poi'                         => false,
				'latitude'                    => __( 'Latitude' ),
				'longitude'                   => __( 'Longitude' ),
				'location'                    => false,
				'location_type'               => false,
				'formatted_address'           => false,
				'bounds'                      => false,
				'route'                       => __( 'Route' ),
				'street_number'               => __( 'Street Number' ),
				'viewport'                    => false,
				'postal_code'                 => __( 'Postal Code' ),
				'locality'                    => __( 'Locality' ),
				'sublocality'                 => false,
				'country'                     => __( 'Country' ),
				'country_short'               => false,
				'administrative_area_level_1' => __( 'State' ),
				'url'                         => __( 'Url' ),
				'website'                     => __( 'Website' ),
			);
		}
	}
}
