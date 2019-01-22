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

if ( ! class_exists( 'WPO\Icon_Picker' ) ) {
	/**
	 * Class Icon_Picker
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method add_button()
	 * @method remove_button()
	 * @method icon_tooltip()
	 * @method enabled()
	 * @method disabled()
	 */
	class Icon_Picker extends Field {
		/**
		 * Icon_Picker constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'icon_picker', $id, $title, $args );
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function set_add_button( $button ) {
			$this['add_button'] = $button;
			return $this;
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function set_remove_button( $button ) {
			$this['remove_button'] = $button;
			return $this;
		}

		/**
		 * @param bool $show_input
		 *
		 * @return $this
		 */
		public function set_show_input( $show_input = true ) {
			$this['show_input'] = $show_input;
			return $this;
		}

		/**
		 * @return \WPO\Icon_Picker
		 */
		public function show_input() {
			return $this->set_show_input( true );
		}

		/**
		 * @return \WPO\Icon_Picker
		 */
		public function hide_input() {
			return $this->set_show_input( false );
		}

		/**
		 * Default Options :
		 *
		 * array(
		 *    'placement' => 'bottom',
		 *    'arrow'     => true,
		 * ),
		 *
		 * @param array $args
		 */
		public function set_icon_tooltip( $args = array() ) {
			$this['icon_tooltip'] = $args;
		}

		/**
		 * If Set to true then all icon frameworks that are registered with WPOnion will load
		 * pass a string / array of icon framework slug to load only them.
		 *
		 * @param bool|string|array $enabled_icon_frameworks
		 *
		 * @return $this
		 */
		public function set_enabled( $enabled_icon_frameworks = true ) {
			$this['enabled'] = $enabled_icon_frameworks;
			return $this;
		}

		/**
		 * pass a string / array of icon framework slug to disable loading for this field.
		 *
		 * @param bool|string|array $disabled_icon_frameworks
		 *
		 * @return $this
		 */
		public function set_disabled( $disabled_icon_frameworks = true ) {
			$this['disabled'] = $disabled_icon_frameworks;
			return $this;
		}

		/**
		 * Returns Default Args.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array(
				'add_button'    => __( 'Add Icon' ),
				'remove_button' => __( 'Remove Icon' ),
				'show_input'    => true,
				'icon_tooltip'  => array(
					'placement' => 'bottom',
					'arrow'     => true,
				),
				'enabled'       => true,
				'disabled'      => false,
			);
		}
	}
}
