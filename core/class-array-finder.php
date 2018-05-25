<?php
/**
 *
 * Initial version created 25-05-2018 / 06:07 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Class Array_Finder
 *
 * @package VS
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.0
 */
class WPOnion_Array_Finder extends WPOnion_Abstract implements ArrayAccess, Countable, Iterator, Serializable {
	/**
	 * position
	 *
	 * @var int
	 */
	protected $position = 0;

	/**
	 * path_separator
	 *
	 * @var string
	 */
	protected $path_separator = '.';

	/**
	 * contents
	 *
	 * @var array
	 */
	protected $contents = array();

	/**
	 * Array_Finder constructor.
	 *
	 * @param array  $contents
	 * @param string $separator
	 */
	public function __construct( $contents = array(), $separator = '.' ) {
		if ( ! empty( $contents ) ) {
			$this->contents       = $contents;
			$this->path_separator = $separator;
		}
	}

	/**
	 * Checks if offset Exists in a array.
	 *
	 * @param mixed $offset
	 *
	 * @return bool
	 */
	public function offsetExists( $offset ) {
		if ( false !== strpos( $offset, $this->path_separator ) ) {
			$explode_path  = $this->explode( $offset );
			$last_offset   = array_pop( $explode_path );
			$offset_exists = false;

			$this->call_at_path( $this->implode( $explode_path ), function ( $container ) use ( $last_offset, &$offset_exists ) {
				$offset_exists = isset( $container[ $last_offset ] );
			} );
			return $offset_exists;
		}

		return isset( $this->content[ $offset ] );
	}

	/**
	 * @param null $data
	 * @param null $separator
	 *
	 * @return array
	 */
	public function explode( $data = null, $separator = null ) {
		$separator = ( is_null( $separator ) ) ? $this->path_separator : $separator;
		$data      = ( is_null( $data ) ) ? $this->contents : $data;
		return explode( $separator, $data );
	}

	/**
	 * @param          $path
	 * @param callable $callback
	 * @param bool     $create_path
	 * @param null     $current_offset
	 */
	private function call_at_path( $path, callable $callback, $create_path = false, &$current_offset = null ) {
		if ( null === $current_offset ) {
			$current_offset = &$this->contents;
			if ( is_string( $path ) && '' === $path ) {
				$callback( $current_offset );
				return;
			}
		}
		$explode_path = $this->explode( $path );
		$next_path    = array_shift( $explode_path );
		if ( ! isset( $current_offset[ $next_path ] ) ) {
			if ( $create_path ) {
				$current_offset[ $next_path ] = [];
			} else {
				return;
			}
		}
		if ( count( $explode_path ) > 0 ) {
			$this->call_at_path( $this->implode( $explode_path ), $callback, $create_path, $current_offset[ $next_path ] );
		} else {
			$callback( $current_offset[ $next_path ] );
		}
	}

	/**
	 * @param      $data
	 * @param null $separator
	 *
	 * @return string
	 */
	public function implode( $data, $separator = null ) {
		$separator = ( is_null( $separator ) ) ? $this->path_separator : $separator;
		return implode( $separator, $data );
	}

	/**
	 * @param mixed $offset
	 *
	 * @return mixed
	 */
	public function offsetGet( $offset ) {
		return $this->get( $offset );
	}

	/**
	 * Return a value from the array corresponding to the path.
	 * If the path is not set in the array, then $default is returned.
	 *
	 * ex:
	 * $a = ['a' => ['b' => 'yeah']];
	 * echo $this->get('a.b'); // yeah
	 * echo $this->get('a.b.c', 'nope'); // nope
	 *
	 * @param string|int|null $path Path to the value. If null, return all the content.
	 * @param mixed           $default Default value to return when path is not contained in the array.
	 *
	 * @return mixed|null Value on the array corresponding to the path, null if the key does not exist.
	 */
	public function get( $path = null, $default = null ) {
		if ( null === $path ) {
			return $this->contents;
		}

		$value = $default;

		$this->call_at_path( $path, function ( &$offset ) use ( &$value ) {
			$value = $offset;
		} );

		return $value;
	}

	/**
	 * @param mixed $offset
	 * @param mixed $value
	 */
	public function offsetSet( $offset, $value ) {
		if ( is_null( $offset ) ) {
			$this->contents[] = $value;
		} else {
			$this->contents[ $offset ] = $value;
		}
	}

	/**
	 * @param mixed $offset
	 */
	public function offsetUnset( $offset ) {
		$path          = $this->explode( $offset );
		$path_to_unset = array_pop( $path );

		$this->call_at_path( $this->implode( $path ), function ( &$offset ) use ( &$path_to_unset ) {
			unset( $offset[ $path_to_unset ] );
		} );
	}

	/**
	 * @return int
	 */
	public function count() {
		return count( $this->contents );
	}

	/**
	 * @return mixed
	 */
	public function current() {
		$keys = array_keys( $this->contents );
		return $this->contents[ $keys[ $this->position ] ];
	}

	/**
	 * Changes To Next Position.
	 */
	public function next() {
		++$this->position;
	}

	/**
	 * @return mixed
	 */
	public function key() {
		$keys = array_keys( $this->contents );
		return $keys[ $this->position ];
	}

	/**
	 * @return bool
	 */
	public function valid() {
		$keys = array_keys( $this->contents );
		return isset( $keys[ $this->position ] );
	}

	/**
	 * Sets Position to 0
	 */
	public function rewind() {
		$this->position = 0;
	}

	/**
	 * @return string
	 */
	public function serialize() {
		return serialize( $this->contents );
	}

	/**
	 * @param string $content
	 */
	public function unserialize( $content ) {
		$this->contents = unserialize( $content );
	}

	/**
	 * @param $separator
	 */
	public function change_separator( $separator ) {
		$this->path_separator = $separator;
	}

	/**
	 * Insert a value to the array at the specified path.
	 *
	 * ex:
	 * $this->set('a.b', 'yeah); // ['a' => ['b' => 'yeah']]
	 *
	 * @param string $path Path where the values will be insered.
	 * @param mixed  $value Value ti insert.
	 *
	 * @return \WPOnion_Array_Finder Current instance.
	 */
	public function set( $path, $value ) {
		$this->call_at_path( $path, function ( &$offset ) use ( $value ) {
			$offset = $value;
		}, true );
		return $this;
	}
}
