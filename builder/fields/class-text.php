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

if ( ! class_exists( 'WPO\Text' ) ) {
	/**
	 * Class Text
	 *
	 * @package WPO
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method prefix()
	 * @method surfix()
	 * @method datalist()
	 * @method inputmask()
	 */
	class Text extends Field {
		/**
		 * Text constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'text', $id, $title, $args );
		}

		/**
		 * @param $prefix
		 *
		 * @return $this
		 */
		public function set_prefix( $prefix ) {
			$this['prefix'] = $prefix;
			return $this;
		}

		/**
		 * @param $surfix
		 *
		 * @return $this
		 */
		public function set_surfix( $surfix ) {
			$this['surfix'] = $surfix;
			return $this;
		}

		/**
		 * @param $inputmask
		 *
		 * @return $this
		 */
		public function set_inputmask( $inputmask ) {
			$this['inputmask'] = $inputmask;
			return $this;
		}

		/**
		 * @param $options
		 *
		 * @return mixed
		 */
		public function set_datalist( $options ) {
			return $this->set_options( $options );
		}

		/**
		 * Returns Default Args.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array(
				'inputmask'   => false,
				'placeholder' => false,
				'prefix'      => false,
				'options'     => false,
				'surfix'      => false,
			);
		}
	}
}
