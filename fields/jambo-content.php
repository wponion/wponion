<?php
/**
 *
 * Initial version created 14-05-2018 / 09:43 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
if ( ! class_exists( 'WPOnion_Field_jambo_content' ) ) {

	class WPOnion_Field_jambo_content extends WPOnion_Field_heading {
		public function output() {
			echo $this->before();
			echo '<div class="jumbotron">' . $this->data( 'content' ) . '</div>';
			echo $this->after();
		}
	}
}