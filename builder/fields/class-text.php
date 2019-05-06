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
	 * @method get_prefix()
	 * @method get_surfix()
	 * @method get_datalist()
	 * @method get_inputmask()
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
		public function prefix( $prefix ) {
			$this['prefix'] = $prefix;
			return $this;
		}

		/**
		 * @param $surfix
		 *
		 * @return $this
		 */
		public function surfix( $surfix ) {
			$this['surfix'] = $surfix;
			return $this;
		}

		/**
		 * @param $inputmask
		 *
		 * @return $this
		 */
		public function inputmask( $inputmask ) {
			$this['inputmask'] = $inputmask;
			return $this;
		}

		/**
		 * @param $options
		 *
		 * @return mixed
		 */
		public function datalist( $options ) {
			return $this->options( $options );
		}
	}
}
