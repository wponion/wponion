<?php

namespace WPOnion\Integrations\Page_Builders\Elementor {
	defined( 'ABSPATH' ) || exit;

	use \Elementor\Core\DynamicTags\Tag;
	use \Elementor\Modules\DynamicTags\Module;

	/**
	 * Class Taxonomy
	 *
	 * @package WPOnion\Integrations\Page_Builders\Elementor
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class Taxonomy extends Tag {
		use Base;
		use Fields;

		/**
		 * Get Category.
		 *
		 * @return array
		 */
		public function get_categories() {
			return array(
				Module::TEXT_CATEGORY,
				Module::URL_CATEGORY,
			);
		}

		/**
		 * Which Group.
		 *
		 * @return string
		 */
		public function get_group() {
			return 'archive';
		}

		/**
		 * Gets Values.
		 *
		 * @return array
		 */
		public function get_db_value() {
			if ( empty( $this->wpo_values ) ) {
				global $wp_query;
				$term = $wp_query->get_queried_object();
				if ( isset( $term->term_id ) ) {
					$this->wpo_values = wponion_get_term_meta( $term->term_id, self::$wpo_instance->unique() );
					if ( ! is_array( $this->wpo_values ) ) {
						$this->wpo_values = array();
					}
				}
			}
			return $this->wpo_values;
		}
	}
}

namespace WPOnion\Integrations\Page_Builders\Elementor {

	use \Elementor\Core\DynamicTags\Data_Tag;
	use \Elementor\Modules\DynamicTags\Module as EL_MODULE;

	/**
	 * Class Taxonomy_Data
	 *
	 * @package WPOnion\Integrations\Page_Builders\Elementor
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class Taxonomy_Data extends Data_Tag {
		use Base;
		use Fields;

		/**
		 * Which Group.
		 *
		 * @return string
		 */
		public function get_group() {
			return 'archive';
		}

		/**
		 * @param array $options
		 *
		 * @return bool
		 */
		public function get_value( array $options = [] ) {
			return $this->render( true );
		}

		/**
		 * Gets Values.
		 *
		 * @return array
		 */
		public function get_db_value() {
			if ( empty( $this->wpo_values ) ) {
				global $wp_query;
				$term = $wp_query->get_queried_object();
				if ( isset( $term->term_id ) ) {
					$this->wpo_values = wponion_get_term_meta( $term->term_id, self::$wpo_instance->unique() );
					if ( ! is_array( $this->wpo_values ) ) {
						$this->wpo_values = array();
					}
				}
			}
			return $this->wpo_values;
		}


		/**
		 * Get Category.
		 *
		 * @return array
		 */
		public function get_categories() {
			return array(
				EL_Module::IMAGE_CATEGORY,
				EL_Module::GALLERY_CATEGORY,
			);
		}
	}
}
