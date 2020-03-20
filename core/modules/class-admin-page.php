<?php

namespace WPOnion\Modules;

use WPOnion\Bridge\Module;
use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Admin_Page' ) ) {
	/**
	 * Admin Page Class to handle custom admin page creation in wp-admin.
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Admin_Page extends Module {
		/**
		 * option
		 *
		 * @var array
		 */
		protected $option = array();

		/**
		 * active_tab
		 *
		 * @var bool
		 */
		protected $active_tab = false;
		/**
		 * active_tab
		 *
		 * @var bool
		 */
		protected $menu_url = false;

		/**
		 * module
		 *
		 * @var string
		 */
		protected $module = 'admin_page';

		/**
		 * page_slug
		 *
		 * @var null
		 */
		protected $page_slug = null;

		/**
		 * Admin_Page constructor.
		 *
		 * @param array $options
		 */
		public function __construct( $options = array() ) {
			if ( false === $this->is_multiple( $options ) ) {
				foreach ( $options as $option ) {
					new Admin_Page( $option );
				}
			} else {
				$this->settings = $this->parse_args( $options, $this->defaults() );
				$this->init();
			}

			$this->save_instance();
		}

		/**
		 * Checks if given menu args is multiple or not.
		 *
		 * @param $args
		 *
		 * @return bool
		 */
		protected function is_multiple( $args ) {
			foreach ( $this->defaults() as $key => $val ) {
				if ( isset( $args[ $key ] ) ) {
					return true;
				}
			}
			return false;
		}

		/**
		 * @return array
		 */
		protected function defaults() {
			return array(
				'network'           => false,
				'submenu'           => false,
				'menu_title'        => false,
				'page_title'        => false,
				'capability'        => 'manage_options',
				'menu_slug'         => false,
				'icon'              => false,
				'position'          => null,
				'help_tab'          => array(),
				'help_sidebar'      => '',
				'on_load'           => false,
				'footer_text'       => '',
				'footer_right_text' => '',
				'assets'            => false,
				'hook_priority'     => 10,
				'tabs'              => false,
				'render'            => false,
			);
		}

		/**
		 * @param null $submenu
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function submenu( $submenu = null ) {
			if ( ! is_null( $submenu ) ) {
				return $this->set_option( 'submenu', $submenu );
			}

			if ( is_object( $this->option( 'submenu', false ) ) ) {
				if ( $this->option( 'submenu', false ) instanceof Admin_Page ) {
					return $this->option( 'submenu', false )
						->menu_slug();
				}
			}

			return $this->option( 'submenu' );
		}

		/**
		 * @param array $help_tab
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function help_tab( $help_tab = null ) {
			return ( ! is_null( $help_tab ) ) ? $this->set_option( 'help_tab', $help_tab ) : $this->option( 'help_tab', $help_tab );
		}

		/**
		 * @param array $help_sidebar
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function help_sidebar( $help_sidebar = null ) {
			return ( ! is_null( $help_sidebar ) ) ? $this->set_option( 'help_sidebar', $help_sidebar ) : $this->option( 'help_sidebar', $help_sidebar );
		}

		/**
		 * Returns A Valid Menu URL.
		 *
		 * @return mixed
		 */
		public function menu_url() {
			return $this->menu_url;
		}

		/**
		 * @param null $menu_title
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function menu_title( $menu_title = null ) {
			return ( ! is_null( $menu_title ) ) ? $this->set_option( 'menu_title', $menu_title ) : $this->option( 'menu_title', false );
		}

		/**
		 * @param null $page_title
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function page_title( $page_title = null ) {
			return ( ! is_null( $page_title ) ) ? $this->set_option( 'page_title', $page_title ) : $this->option( 'page_title', false );
		}

		/**
		 * @param null $capability
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function capability( $capability = null ) {
			return ( ! is_null( $capability ) ) ? $this->set_option( 'capability', $capability ) : $this->option( 'capability', false );
		}

		/**
		 * @param null $menu_slug
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function menu_slug( $menu_slug = null ) {
			return ( ! is_null( $menu_slug ) ) ? $this->set_option( 'menu_slug', $menu_slug ) : $this->option( 'menu_slug', false );
		}

		/**
		 * Returns Default WPOnion Menu Icon.
		 *
		 * @return string
		 */
		private function default_icon() {
			return 'data:image/svg+xml;base64,' . base64_encode( ' <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="700.000000pt" height="882.000000pt" viewBox="0 0 700.000000 882.000000" preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.12, written by Peter Selinger 2001-2015
</metadata>
<g transform="translate(0.000000,882.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M5376 8714 c-9 -24 -2 -26 12 -4 7 11 8 20 3 20 -5 0 -12 -7 -15 -16z"></path>
<path d="M5303 8614 c-60 -82 -185 -246 -222 -291 -50 -62 -94 -119 -153 -198
-71 -96 -161 -213 -205 -269 -18 -23 -41 -52 -50 -66 -38 -53 -117 -157 -147
-192 -31 -36 -84 -105 -121 -158 -17 -24 -123 -161 -230 -299 -29 -37 -56 -74
-128 -169 -17 -24 -46 -60 -63 -80 -17 -21 -35 -44 -40 -53 -5 -9 -24 -34 -42
-55 -18 -22 -80 -102 -138 -179 -58 -77 -124 -164 -147 -193 -67 -86 -135
-175 -154 -202 -23 -34 -164 -216 -200 -259 -15 -19 -41 -53 -58 -76 -16 -24
-50 -69 -75 -100 -70 -90 -90 -116 -160 -210 -36 -48 -79 -104 -96 -124 -17
-20 -45 -56 -62 -81 -18 -25 -47 -63 -65 -86 -61 -78 -122 -157 -162 -209 -22
-29 -60 -79 -85 -110 -25 -32 -59 -77 -76 -102 -18 -24 -42 -55 -54 -68 -13
-13 -28 -33 -34 -44 -6 -10 -33 -47 -59 -80 -27 -34 -45 -61 -40 -61 4 0 121
29 258 65 475 122 745 188 752 182 6 -7 -15 -49 -108 -222 -26 -49 -55 -105
-64 -124 -9 -18 -28 -52 -43 -75 -14 -22 -42 -72 -63 -111 -73 -139 -139 -264
-224 -420 -18 -33 -49 -91 -70 -130 -20 -38 -45 -83 -55 -100 -19 -31 -75
-135 -117 -220 -14 -27 -38 -69 -54 -92 -16 -23 -29 -47 -29 -53 0 -5 -11 -27
-23 -48 -13 -20 -57 -100 -97 -177 -80 -153 -120 -227 -163 -300 -15 -27 -26
-49 -25 -50 5 -5 792 173 931 210 70 18 67 18 67 1 0 -11 -290 -597 -337 -681
-6 -11 -46 -90 -89 -175 -107 -214 -543 -1079 -559 -1110 -8 -14 -26 -50 -40
-80 -53 -108 -86 -175 -97 -195 -6 -11 -38 -74 -71 -140 -32 -66 -64 -129 -70
-140 -41 -76 -136 -269 -133 -272 4 -4 38 35 106 122 25 32 57 71 71 89 14 17
85 105 157 196 207 260 215 270 252 315 19 23 71 88 115 145 79 101 105 133
198 247 73 89 165 204 195 243 14 19 40 51 57 71 51 60 99 121 118 148 9 14
36 49 60 78 57 69 228 282 252 314 26 35 229 288 280 350 22 27 58 72 80 99
22 28 56 70 75 93 20 23 42 52 50 63 8 12 42 55 75 95 33 40 69 85 80 100 11
15 47 59 80 99 33 40 87 107 120 150 33 42 107 136 165 207 181 225 405 507
450 566 24 31 23 31 -51 17 -30 -6 -202 -38 -384 -72 -181 -33 -364 -67 -405
-74 -118 -22 -160 -27 -160 -20 0 12 31 69 68 126 20 30 50 78 68 105 17 28
67 104 110 170 44 66 81 124 83 130 2 5 22 39 45 75 23 36 46 72 51 81 14 23
62 95 106 161 22 31 39 60 39 63 0 4 17 32 38 63 66 97 109 166 122 192 7 14
27 43 45 65 17 22 35 48 38 59 4 10 24 43 45 75 55 81 115 173 127 196 6 11
27 43 46 71 19 28 42 64 52 80 42 70 63 103 106 169 44 69 81 126 150 235 19
30 43 68 54 83 10 16 17 30 15 32 -4 4 -81 -25 -383 -140 -33 -12 -143 -54
-245 -93 -102 -39 -268 -103 -370 -143 -102 -39 -195 -74 -207 -76 -32 -7 -30
16 10 96 19 36 52 104 74 151 22 47 58 124 81 171 23 48 42 89 42 93 0 4 21
51 47 104 25 53 62 131 81 172 19 41 52 111 73 155 21 44 59 127 85 185 25 58
57 128 72 155 38 74 36 71 92 195 71 155 115 251 155 335 18 39 51 108 73 155
22 47 55 119 75 160 19 41 74 161 122 265 48 105 102 222 120 260 18 39 53
113 77 165 25 52 64 136 88 186 23 50 41 97 38 104 -2 8 -26 -17 -55 -56z"></path>
<path d="M3340 8045 c-8 -2 -87 -9 -175 -15 -149 -10 -190 -15 -335 -42 -236
-43 -389 -87 -605 -175 -509 -206 -940 -542 -1254 -978 -156 -215 -278 -434
-376 -675 -26 -63 -51 -124 -55 -135 -26 -62 -89 -264 -110 -355 -29 -119 -63
-285 -80 -390 -57 -348 -57 -958 0 -1310 17 -102 55 -292 69 -345 5 -16 14
-50 21 -75 16 -59 89 -289 99 -315 5 -11 16 -36 25 -57 9 -20 16 -39 16 -42 0
-16 131 -288 186 -386 109 -194 282 -425 444 -594 97 -102 236 -226 252 -226
5 0 13 12 18 28 6 15 15 36 20 47 5 11 19 52 31 90 12 39 27 84 34 100 7 17
16 39 20 50 8 21 57 157 95 260 12 33 36 98 55 145 18 47 42 112 53 145 11 33
39 112 62 175 23 63 55 153 72 200 16 47 38 102 48 123 l19 38 -33 72 c-19 40
-41 88 -49 107 -22 51 -76 217 -88 270 -6 25 -14 61 -19 80 -13 57 -41 206
-62 335 -9 54 -13 190 -13 420 0 373 4 413 64 720 128 655 460 1132 951 1366
36 17 72 34 80 38 8 4 42 16 75 25 33 10 71 22 85 26 44 15 168 40 197 40 15
0 44 5 64 10 35 10 38 14 67 98 50 148 89 254 126 342 20 46 36 90 36 97 0 6
12 40 26 75 37 89 39 94 67 178 42 125 103 292 126 344 14 32 18 53 12 59 -10
10 -331 20 -361 12z"></path>
<path d="M5793 7053 c-3 -10 -14 -36 -24 -58 -10 -23 -21 -54 -24 -70 -7 -28
-28 -85 -120 -325 -18 -47 -39 -103 -45 -125 -7 -22 -19 -55 -26 -72 -36 -85
-42 -101 -54 -148 -7 -27 -16 -54 -20 -60 -4 -5 -22 -53 -40 -105 -18 -52 -38
-108 -45 -125 -28 -62 -65 -159 -65 -169 0 -6 -18 -56 -40 -111 -21 -55 -56
-145 -76 -200 -37 -104 -37 -103 -14 -220 5 -27 14 -88 20 -135 6 -47 15 -112
20 -145 31 -201 14 -734 -29 -945 -5 -25 -15 -72 -21 -105 -64 -311 -165 -563
-323 -802 -82 -124 -110 -158 -217 -263 -113 -111 -246 -206 -397 -281 -115
-58 -122 -63 -136 -103 -8 -22 -36 -99 -62 -171 -27 -71 -62 -170 -79 -220
-18 -49 -44 -117 -58 -150 -14 -33 -31 -78 -37 -100 -7 -22 -16 -49 -21 -60
-5 -11 -20 -46 -34 -78 -14 -32 -26 -66 -26 -76 0 -19 -15 -61 -49 -136 -10
-22 -22 -55 -26 -73 -4 -18 -18 -60 -31 -92 -13 -33 -24 -63 -24 -66 0 -12
282 9 405 31 128 22 204 37 235 45 19 5 64 16 100 25 72 18 125 34 155 46 11
4 49 17 84 29 342 113 747 362 1028 630 308 296 504 586 712 1055 5 11 26 65
46 120 81 220 112 331 160 570 85 422 98 993 34 1415 -13 90 -47 277 -59 325
-40 171 -72 287 -119 420 -17 50 -35 99 -40 110 -14 32 -37 87 -51 125 -21 55
-173 348 -215 415 -79 126 -141 213 -214 304 -42 52 -84 105 -94 117 -22 28
-35 30 -44 7z"></path>
</g>
</svg>' );
			//return 'data:image/svg+xml;base64,IDxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MDAuMDAwMDAwcHQiIGhlaWdodD0iMjkxLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgNzAwLjAwMDAwMCAyOTEuMDAwMDAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4NCjxtZXRhZGF0YT4NCkNyZWF0ZWQgYnkgcG90cmFjZSAxLjEyLCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNQ0KPC9tZXRhZGF0YT4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDI5MS4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+DQo8cGF0aCBkPSJNNjI1NSAyNjg3IGMtMTc1IC0yMzEgLTI1MSAtMzMwIC0zMTEgLTQwNyAtMjQwIC0zMTAgLTU3NSAtNzUyIC01NzINCi03NTUgMiAtMyA3MyAxNCAxNTggMzUgODUgMjIgMTU4IDQwIDE2MyA0MCA0IDAgLTEwIC0zMyAtMzEgLTcyIC0yMiAtNDAgLTgyDQotMTUyIC0xMzQgLTI0OCAtNTMgLTk2IC0xMTcgLTIxNSAtMTQzIC0yNjUgLTI2IC00OSAtNTIgLTk2IC01OCAtMTAyIC0xMyAtMTcNCi0yMSAtMTggMTU4IDIzIDg2IDIwIDE1OSAzMyAxNjIgMzEgMiAtMyAtMTAwIC0yMTEgLTIyNyAtNDY0IC0xMjcgLTI1MiAtMjI1DQotNDUxIC0yMTggLTQ0MyAxNiAxOSA0MDYgNTA2IDczMSA5MTUgMTMyIDE2NSAyNDYgMzA4IDI1NCAzMTcgMTMgMTUgMTMgMTYgLTQNCjEyIC03OCAtMTcgLTI5NyAtNTUgLTMwOCAtNTIgLTEwIDIgNiAzNCA1MCAxMDMgMzUgNTUgOTggMTU0IDE0MCAyMjAgNDIgNjYNCjExOCAxODYgMTcwIDI2NiBsOTMgMTQ2IC0xODIgLTY5IGMtOTkgLTM4IC0xOTEgLTc0IC0yMDMgLTc5IC0yOSAtMTEgLTI5IC0xMQ0KNiA2NCAxNiAzNCA0NSA5NiA2NCAxMzcgMTkgNDEgNjcgMTQ1IDEwNyAyMzAgMTY3IDM1NyAyNzAgNTgzIDI2NyA1ODYgLTEgMQ0KLTYwIC03NSAtMTMyIC0xNjl6Ij48L3BhdGg+DQo8cGF0aCBkPSJNNTU2MyAyNjM1IGMtNDMzIC03OCAtNzM3IC00MDQgLTgxNyAtODc0IC0yMSAtMTI0IC0yMSAtMzQ5IDAgLTQ3MQ0KMzIgLTE4NCAxMDIgLTM1MyAyMDMgLTQ4NyA2OCAtOTAgMTQ5IC0xNjkgMTYwIC0xNTcgNyA4IDYzIDE1NyAxMjggMzM5IDEzIDM5DQoyOCA4MCAzMyA5MSA2IDE2IDEgMzkgLTE2IDgyIC03MSAxNzYgLTgyIDQ0MSAtMjggNjU3IDI4IDExMCA4OSAyMjEgMTYyIDI5NA0KNzYgNzUgMTQ2IDExNCAyNDggMTM4IGw3MCAxNiA3MSAxOTQgNzAgMTkzIC0xMDYgLTEgYy01OCAwIC0xMzggLTcgLTE3OCAtMTR6Ij48L3BhdGg+DQo8cGF0aCBkPSJNMTMgMjQ3OCBjMyAtMTMgMTIwIC00NTYgMjU5IC05ODUgbDI1MyAtOTYzIDIxNyAwIDIxNiAwIDEwMCA0MDgNCmM1NSAyMjQgMTI4IDUyNCAxNjMgNjY3IDM1IDE0MyA2NCAyNjIgNjYgMjY0IDIgMiA1IDIgOCAtMSAzIC0yIDgwIC0zMDUgMTcxDQotNjcxIGwxNjYgLTY2NyAyMTMgMCBjMjEyIDAgMjEzIDAgMjE3IDIyIDMgMTMgNTEgMTk0IDEwOCA0MDMgMjE2IDgwNSA0MTANCjE1MzAgNDEwIDE1MzcgMCA1IC05MyA3IC0yMDcgNiBsLTIwNyAtMyAtMTIyIC01MTUgYy02OCAtMjgzIC0xNDAgLTU4OCAtMTYxDQotNjc3IC0yMSAtOTAgLTQxIC0xNjMgLTQ0IC0xNjMgLTQgMCAtODMgMzA2IC0xNzUgNjgwIGwtMTY4IDY4MCAtMjAwIC0yIC0yMDANCi0zIC0xNjkgLTY2NSBjLTkzIC0zNjYgLTE3MSAtNjY3IC0xNzMgLTY2OSAtMTAgLTExIC0zIC0zOCAtMjU0IDEwNDQgbC02Nw0KMjkwIC0yMTMgMyAtMjEyIDIgNSAtMjJ6Ij48L3BhdGg+DQo8cGF0aCBkPSJNMjc5MCAxNTE2IGwwIC05ODYgMjE1IDAgMjE1IDAgMCAzNTQgMCAzNTQgMzEzIDUgYzI1NiAzIDMyMyA3IDM3Mg0KMjEgMjI1IDY1IDM3MSAyMTAgNDI1IDQyMiAyNCA5NCAyNiAyNDcgNSAzNDggLTM2IDE2OSAtMTQ0IDMwOSAtMjk3IDM4NCAtMTUwDQo3NCAtMTUwIDc0IC03MzAgNzkgbC01MTggNSAwIC05ODZ6IG05NDMgNjM0IGM2NyAtMTYgMTM2IC02NiAxNzIgLTEyNCAyOCAtNDcNCjMwIC01NSAzMCAtMTU1IDAgLTEyMiAtMTUgLTE2MSAtODQgLTIyNCAtNjggLTYxIC0xMTMgLTcwIC0zODggLTc1IGwtMjQzIC00DQowIDMwMiAwIDMwMyAyMzMgLTYgYzEyNyAtMyAyNTMgLTExIDI4MCAtMTd6Ij48L3BhdGg+DQo8cGF0aCBkPSJNNjQ2NSAyMTM4IGMtMTQ2IC00MDAgLTEzNCAtMzYyIC0xMjIgLTQxMCA2IC0yNCAxMSAtMTE1IDExIC0yMDMgMA0KLTEzMiAtNCAtMTc1IC0yMiAtMjUwIC00NyAtMTg3IC0xNTIgLTM0MSAtMjgyIC00MDkgLTMwIC0xNiAtNTYgLTMwIC01OCAtMzINCi03IC01IC0xNTIgLTM5OSAtMTUyIC00MTIgMCAtMTEgMTQ5IDcgMjMwIDI4IDMxOCA4MSA1NjcgMzEyIDY3OCA2MzAgNTkgMTY4DQo2NyAyMjUgNjYgNDU1IDAgMjAyIC0yIDIxNSAtMzIgMzI4IC0xNyA2NyAtNTIgMTYxIC04MCAyMjAgLTQ3IDk3IC0xNDQgMjQ3DQotMTYwIDI0NyAtNCAwIC0zOCAtODcgLTc3IC0xOTJ6Ij48L3BhdGg+DQo8L2c+DQo8L3N2Zz4=';
		}

		/**
		 * Checks if user has set any icon.
		 *
		 * @return bool
		 */
		public function has_icon() {
			return ( ! empty( $this->option( 'icon' ) ) ) ? true : false;
		}


		/**
		 * @param null $icon
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function icon( $icon = null ) {
			if ( ! is_null( $icon ) ) {
				return $this->set_option( 'icon', $icon );
			} elseif ( $this->has_icon() ) {
				return $this->option( 'icon' );
			}
			return $this->default_icon();
		}

		/**
		 * @param null $position
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function position( $position = null ) {
			return ( ! is_null( $position ) ) ? $this->set_option( 'position', $position ) : $this->option( 'position', null );
		}

		/**
		 * @param null $hook_priority
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function hook_priority( $hook_priority = null ) {
			return ( ! is_null( $hook_priority ) ) ? $this->set_option( 'hook_priority', $hook_priority ) : $this->option( 'hook_priority', false );
		}

		/**
		 * @param null $on_load
		 *
		 * @return bool|mixed
		 */
		public function on_load( $on_load = null ) {
			if ( ! is_null( $on_load ) ) {
				if ( ! wponion_is_array( $this->option( 'on_load' ) ) && false !== $this->option( 'on_load' ) ) {
					$this->set_option( 'on_load', array( $this->option( 'on_load' ), $on_load ) );
				} elseif ( wponion_is_array( $this->option( 'on_load' ) ) ) {
					$_on_load   = $this->option( 'on_load' );
					$_on_load[] = $on_load;
					$this->set_option( 'on_load', $_on_load );
				} else {
					$this->set_option( 'on_load', array( $on_load ) );
				}
			}
			return $this->option( 'on_load' );
		}

		/**
		 * @param null $assets
		 *
		 * @return bool|mixed
		 */
		public function assets( $assets = null ) {
			if ( ! is_null( $assets ) ) {
				if ( ! wponion_is_array( $this->option( 'assets' ) ) && false !== $this->option( 'assets' ) ) {
					$this->set_option( 'assets', array( $this->option( 'assets' ), $assets ) );
				} elseif ( wponion_is_array( $this->option( 'assets' ) ) ) {
					$_assets   = $this->option( 'assets' );
					$_assets[] = $assets;
					$this->set_option( 'on_load', $_assets );
				} else {
					$this->set_option( 'assets', array( $assets ) );
				}
			}
			return $this->option( 'assets' );
		}

		/**
		 * Inits Works.
		 */
		public function init() {
			if ( ! empty( $this->option( 'menu_title' ) ) ) {

				if ( false !== $this->option( 'network' ) ) {
					if ( ! did_action( 'network_admin_menu' ) ) {
						$this->add_action( 'network_admin_menu', 'add_menu', $this->hook_priority() );
					} else {
						$this->add_menu();
					}
				}

				if ( 'only' !== $this->option( 'network' ) ) {
					if ( ! did_action( 'admin_menu' ) ) {
						$this->add_action( 'admin_menu', 'add_menu', $this->hook_priority() );
					} else {
						$this->add_menu();
					}
				}
			}
		}

		/**
		 * Checks and returns a valid title.
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function get_menu_title() {
			return $this->menu_title();
		}

		/**
		 * Checks and returns a valid title
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function get_page_title() {
			return $this->page_title();
		}

		/**
		 * Returns A Valid Slug.
		 *
		 * @return bool|mixed|string|\WPOnion\Modules\Admin_Page
		 */
		public function get_slug() {
			if ( empty( $this->menu_slug() ) ) {
				$title = sanitize_title( $this->get_page_title() );
				if ( empty( $title ) ) {
					return 'wponion-' . md5( json_encode( $this->settings ) );
				}
				return $title;
			}
			return $this->menu_slug();
		}

		/**
		 * Retuns Proper Page Slug.
		 *
		 * @return null
		 */
		public function get_page_slug() {
			return $this->page_slug;
		}

		/**
		 * Registers Menu With WP.
		 */
		public function add_menu() {
			$_slug = $this->get_slug();
			$this->menu_slug( $_slug );
			$menu_title = $this->get_menu_title();
			$page_title = $this->get_page_title();

			if ( false === $this->submenu() || wponion_is_array( $this->submenu() ) ) {
				$this->page_slug = add_menu_page( $page_title, $menu_title, $this->capability(), $_slug, array(
					&$this,
					'render',
				), $this->icon(), $this->position() );
			} else {
				switch ( $this->submenu() ) {
					case 'management':
					case 'dashboard':
					case 'options':
					case 'plugins':
					case 'theme':
						if ( function_exists( 'add_' . $this->submenu() . '_page' ) ) {
							$this->page_slug = wponion_callback( 'add_' . $this->submenu() . '_page', array(
								$page_title,
								$menu_title,
								$this->capability(),
								$_slug,
								array(
									&$this,
									'render',
								),
							) );
						}
						break;
					default:
						$this->page_slug = add_submenu_page( $this->submenu(), $page_title, $menu_title, $this->capability(), $_slug, array(
							&$this,
							'render',
						) );
						break;
				}
			}
			$this->add_action( 'load-' . $this->page_slug, 'on_page_load', 1 );
			/**
			 * WordPres `esc_url` changes & to &#038 in url even if single & exists so to over come it.
			 * added a manuall str_replace.
			 * Check Github Issue @ https://github.com/wponion/wponion/issues/161
			 */
			$this->menu_url = menu_page_url( $_slug, false );
			$this->menu_url = str_replace( array( '&#038;' ), array( '&' ), $this->menu_url );

			if ( wponion_is_array( $this->submenu() ) && wponion_is_callable( $this->submenu() ) ) {
				wponion_callback( $this->submenu(), $this );
			} elseif ( wponion_is_array( $this->submenu() ) ) {
				$subemnus = array();
				if ( true === $this->is_multiple( $this->submenu() ) ) {
					$subemnus[] = $this->submenu();
				} else {
					$subemnus = $this->submenu();
				}

				foreach ( $subemnus as $sub_menu ) {
					if ( wponion_is_callable( $sub_menu ) ) {
						wponion_callback( $sub_menu, $this );
					} elseif ( ! is_scalar( $sub_menu ) ) {
						if ( ! isset( $sub_menu['submenu'] ) ) {
							$sub_menu['submenu'] = $this;
						}
						new self( $sub_menu );
					}
				}
			}

			if ( ! empty( $this->help_tab() ) || ! empty( $this->help_sidebar() ) ) {
				wponion_help_tabs( $this, $this->help_tab(), $this->help_sidebar() );
			}
		}

		/**
		 * Renders.
		 */
		public function render() {
			if ( wponion_is_debug() ) {
				wponion_timer( 'wpo-admin-page' );
			}
			echo '<div class="wrap">';
			echo '<h1>' . get_admin_page_title() . '</h1>';

			$_callback = $this->option( 'render' );

			if ( false !== $this->option( 'tabs' ) ) {
				echo '<nav class="nav-tab-wrapper">';
				foreach ( $this->option( 'tabs' ) as $slug => $tab ) {
					$icon      = ( false !== $tab['icon'] ) ? '<i class="' . $tab['icon'] . '"></i>' : '';
					$is_active = ( $this->active_tab === $slug ) ? ' nav-tab-active ' : '';
					$url       = add_query_arg( 'tab', $slug );
					echo '<a href="' . $url . '" class="nav-tab ' . $is_active . '">' . $icon . ' ' . $tab['title'] . '</a>';
					if ( $is_active && ! empty( $tab['render'] ) ) {
						$_callback = $tab['render'];
					}
				}
				echo '</nav>';
			}

			if ( false !== $_callback ) {
				echo wponion_callback( $_callback, $this );
			}

			if ( wponion_is_debug() ) {
				$fields = Field::$total_fields;
				$timer  = get_num_queries() . ' queries in ' . wponion_timer( 'wpo-admin-page', true ) . ' seconds';
				$timer  .= ( ! empty( $fields ) ) ? ' for ' . $fields . ' fields' : '';
				$timer  .= '<br/> WPOnion is currently set to developer mode';
				echo '<div class="wponion-developer-timer">' . $timer . '</div>';
			}
			echo '</div>';
		}

		/**
		 * Triggers Given Callbacks.
		 *
		 * @param $callback
		 */
		protected function handle_on_load_callbacks( $callback ) {
			if ( wponion_is_array( $callback ) ) {
				$is_called = wponion_callback( $callback, $this );
				if ( false === $is_called ) {
					foreach ( $callback as $call ) {
						echo wponion_callback( $call, $this );
					}
				} else {
					echo $is_called;
				}
			} elseif ( false !== $callback ) {
				wponion_callback( $callback, $this );
			}
		}

		/**
		 * Triggers On Page Load.
		 */
		public function on_page_load() {
			$this->add_action( 'admin_enqueue_scripts', 'handle_assets' );
			if ( false !== $this->option( 'footer_text' ) ) {
				$this->add_filter( 'admin_footer_text', 'admin_footer_text', 10 );
			}

			if ( false !== $this->option( 'footer_right_text' ) ) {
				$this->add_filter( 'update_footer', 'admin_footer_right_text', 11 );
			}
			if ( wponion_is_array( $this->option( 'tabs' ) ) ) {
				$new_tabs = array();
				foreach ( $this->option( 'tabs' ) as $id => $_tab ) {
					$_tab = $this->parse_args( $_tab, array(
						'title'   => false,
						'name'    => false,
						'icon'    => false,
						'on_load' => false,
						'render'  => false,
					) );

					if ( false === $_tab['name'] ) {
						$_tab['name'] = sanitize_title( $_tab['title'] );
					}
					$new_tabs[ $_tab['name'] ] = $_tab;
				}
				$this->set_option( 'tabs', $new_tabs );
			}
			if ( isset( $_GET['tab'] ) ) {
				$this->active_tab = sanitize_title( $_GET['tab'] );
			} elseif ( false !== $this->option( 'tabs' ) ) {
				$this->active_tab = $this->option( 'tabs' );
				$this->active_tab = array_keys( $this->active_tab );
				$this->active_tab = $this->active_tab[0];
			}

			$this->handle_on_load_callbacks( $this->on_load() );
			if ( false !== $this->active_tab && isset( $this->settings['tabs'][ $this->active_tab ] ) && isset( $this->settings['tabs'][ $this->active_tab ]['on_load'] ) ) {
				$this->handle_on_load_callbacks( $this->settings['tabs'][ $this->active_tab ]['on_load'] );
			}
		}

		/**
		 * Adds Footer Text.
		 *
		 * @return string
		 */
		public function admin_footer_text() {
			if ( empty( $this->option( 'footer_text' ) ) ) {
				/* translators: Added WPOnion */
				return sprintf( __( 'Proudly Powered By %1$s %2$s %3$s ', 'wponion' ), '<a href="http://wponion.com"><strong>', __( 'WPOnion', 'wponion' ), '</strong></a>' );
			}
			return ( wponion_is_callable( $this->option( 'footer_text' ) ) ) ? wponion_callback( $this->option( 'footer_text' ) ) : $this->option( 'footer_text' );
		}

		/**
		 * Adds Footer Text.
		 *
		 * @return string
		 */
		public function admin_footer_right_text() {
			if ( empty( $this->option( 'footer_right_text' ) ) ) {
				/* translators: Added WPOnionVersion  */
				return sprintf( __( 'WPOnion Version : %s', 'wponion' ), WPONION_VERSION ) . ' | ' . core_update_footer();
			}
			return ( wponion_is_callable( $this->option( 'footer_right_text' ) ) ) ? wponion_callback( $this->option( 'footer_right_text' ) ) : $this->option( 'footer_right_text' );
		}

		/**
		 * Handles Callback.
		 *
		 * @param $callback
		 */
		public function handle_assets_callback( $callback ) {
			if ( wponion_is_array( $callback ) ) {
				foreach ( $callback as $call ) {
					if ( is_string( $call ) ) {
						if ( wp_script_is( $call, 'registered' ) || wp_style_is( $call, 'registered' ) ) {
							wp_enqueue_script( $call );
							wp_enqueue_style( $call );
						} else {
							wponion_callback( $call, $this );
						}
					} else {
						echo wponion_callback( $call, $this );
					}
				}
			} elseif ( false !== $callback ) {
				$status = wponion_callback( $callback, $this );
				if ( false === $status ) {
					if ( wp_script_is( $callback, 'registered' ) || wp_style_is( $callback, 'registered' ) ) {
						wp_enqueue_script( $callback );
						wp_enqueue_style( $callback );
					}
				}
			}
		}

		/**
		 * Handles Page Assets Callback.
		 */
		public function handle_assets() {
			$this->handle_assets_callback( $this->assets() );
			if ( false !== $this->active_tab && isset( $this->settings['tabs'][ $this->active_tab ] ) && isset( $this->settings['tabs'][ $this->active_tab ]['assets'] ) ) {
				$this->handle_assets_callback( $this->settings['tabs'][ $this->active_tab ]['assets'] );
			}
		}

		public function on_init() {
		}

		/**
		 * Returns Unique Page Slug.
		 *
		 * @return string
		 */
		public function uid() {
			return $this->get_slug();
		}

		/**
		 * Returns A Unique Name.
		 *
		 * @return string
		 */
		public function unique() {
			if ( empty( $this->unique ) ) {
				$this->unique = md5( wp_json_encode( $this->settings ) );
			}
			return $this->unique;
		}

		/**
		 * @return bool
		 */
		public function active_tab() {
			return $this->active_tab;
		}

		/**
		 * @return bool
		 */
		public function has_tab() {
			return ( false !== $this->option( 'tabs' ) );
		}
	}
}
