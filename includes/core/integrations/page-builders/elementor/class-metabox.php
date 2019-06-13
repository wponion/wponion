<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */


namespace WPOnion\Integrations\Page_Builders\Elementor {
	if ( ! defined( 'ABSPATH' ) ) {
		die;
	}

	use \Elementor\Core\DynamicTags\Tag;
	use \Elementor\Modules\DynamicTags\Module;

	if ( ! class_exists( '\WPOnion\Integrations\Page_Builders\Elementor\Metabox' ) ) {
		/**
		 * Class Metabox
		 *
		 * @package WPOnion\Integrations\Page_Builders\Elementor
		 * @author Varun Sridharan <varunsridharan23@gmail.com>
		 * @since 1.0
		 */
		class Metabox extends Tag {
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
				return 'post';
			}

			/**
			 * Gets Values.
			 *
			 * @return array
			 */
			public function get_db_value() {
				if ( empty( $this->wpo_values ) ) {
					self::$wpo_instance->set_id( get_the_ID() );
					$this->wpo_values = self::$wpo_instance->get_db_values();
				}
				return $this->wpo_values;
			}
		}
	}
}

namespace WPOnion\Integrations\Page_Builders\Elementor {

	use \Elementor\Core\DynamicTags\Data_Tag;
	use \Elementor\Modules\DynamicTags\Module as EL_MODULE;

	if ( ! class_exists( '\WPOnion\Integrations\Page_Builders\Elementor\Metabox_Data' ) ) {
		/**
		 * Class Metabox_Data
		 *
		 * @package WPOnion\Integrations\Page_Builders\Elementor
		 * @author Varun Sridharan <varunsridharan23@gmail.com>
		 * @since 1.0
		 */
		class Metabox_Data extends Data_Tag {
			use Base;
			use Fields;

			/**
			 * Which Group.
			 *
			 * @return string
			 */
			public function get_group() {
				return 'post';
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
					self::$wpo_instance->set_id( get_the_ID() );
					$this->wpo_values = self::$wpo_instance->get_db_values();
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
}
