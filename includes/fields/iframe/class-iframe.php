<?php
/**
 *
 * Project : wponion
 * Date : 25-11-2018
 * Time : 03:46 PM
 * File : iframe.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Iframe
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Iframe extends Field {

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		echo $this->before();

		if ( false !== $this->option( 'heading' ) ) {
			printf( '<h3>%s</h3>', $this->option( 'heading' ) );
		}

		if ( false !== $this->option( 'url' ) ) {
			$attrs = $this->attributes( array(
				'height'      => $this->option( 'height' ),
				'width'       => $this->option( 'width' ),
				'src'         => $this->option( 'url' ),
				'frameborder' => '0',
			) );
			echo "<iframe ${attrs}></iframe>";
		}

		echo $this->after();
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}

	/**
	 * Returns Field's Default Value.
	 */
	protected function defaults() {
		return array(
			'heading' => false,
			'url'     => false,
			'height'  => '100%',
			'width'   => '100%',
		);
	}
}
