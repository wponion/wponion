<?php
/**
 * This file is used internally in WPOnion
 * and this file should not be removed.
 */

$return                          = array();
$return['css-units']             = array(
	'px'  => 'px',
	'%'   => '%',
	'em'  => 'em',
	'rem' => 'rem',
);
$return['text-align']            = array(
	'start'        => 'start',
	'end'          => 'end',
	'left'         => 'left',
	'right'        => 'right',
	'center'       => 'center',
	'justify'      => 'justify',
	'justify-all'  => 'justify-all',
	'match-parent' => 'match-parent',
	'initial'      => 'initial',
	'unset'        => 'unset',
);
$return['element-tag']           = array(
	'h1'   => 'h1',
	'h2'   => 'h2',
	'h3'   => 'h3',
	'h4'   => 'h4',
	'h5'   => 'h5',
	'h6'   => 'h6',
	'div'  => 'div',
	'span' => 'span',
	'p'    => 'p',
);
$return['writing_mode']          = array(
	'horizontal-tb' => 'horizontal-tb',
	'vertical-rl'   => 'vertical-rl',
	'vertical-lr'   => 'vertical-lr',
	'sideways-rl'   => 'sideways-rl',
	'sideways-lr'   => 'sideways-lr',
	'inherit'       => 'inherit',
	'initial'       => 'initial',
	'unset'         => 'unset',
);
$return['text_orientation']      = array(
	'mixed'                 => 'mixed',
	'upright'               => 'upright',
	'sideways'              => 'sideways',
	'sideways-right'        => 'sideways-right',
	'use-glyph-orientation' => 'use-glyph-orientation',
	'inherit'               => 'inherit',
	'initial'               => 'initial',
	'unset'                 => 'unset',
);
$return['text_direction']        = array(
	'ltr'     => 'ltr',
	'rtl'     => 'rtl',
	'inherit' => 'inherit',
	'initial' => 'initial',
	'unset'   => 'unset',
);
$return['text_transform']        = array(
	'none'           => 'none',
	'capitalize'     => 'capitalize',
	'uppercase'      => 'uppercase',
	'lowercase'      => 'lowercase',
	'inherit'        => 'inherit',
	'full-width'     => 'full-width',
	'full-size-kana' => 'full-size-kana',
	'initial'        => 'initial',
	'unset'          => 'unset',
);
$return['text_decoration_line']  = array(
	'none'                            => 'none',
	'underline'                       => 'underline',
	'overline'                        => 'overline',
	'line-through'                    => 'line-through',
	'underline overline'              => 'underline overline',
	'underline line-through'          => 'underline line-through',
	'overline line-through'           => 'overline line-through',
	'underline overline line-through' => 'underline overline line-through',
	'inherit'                         => 'inherit',
	'initial'                         => 'initial',
	'unset'                           => 'unset',
);
$return['text_decoration_style'] = array(
	'none'    => 'none',
	'solid'   => 'solid',
	'double'  => 'double',
	'dotted'  => 'dotted',
	'dashed'  => 'dashed',
	'wavy'    => 'wavy',
	'inherit' => 'inherit',
	'initial' => 'initial',
	'unset'   => 'unset',
);
$return['font_style']            = array(
	'normal'  => 'normal',
	'italic'  => 'italic',
	'oblique' => 'oblique',
	'inherit' => 'inherit',
	'initial' => 'initial',
	'unset'   => 'unset',
);
$return['backup_font_family']    = array(
	'auto'         => 'auto',
	'serif'        => 'serif',
	'sans-serif'   => 'sans-serif',
	'monospace'    => 'monospace',
	'cursive'      => 'cursive',
	'fantasy'      => 'fantasy',
	'system-ui'    => 'system-ui',
	'justify-all'  => 'justify-all',
	'match-parent' => 'match-parent',
	'initial'      => 'initial',
	'unset'        => 'unset',
	'none'         => 'none',
);
$return['font_weight']           = array(
	'normal'  => 'normal',
	'bold'    => 'bold',
	'bolder'  => 'bolder',
	'lighter' => 'lighter',
	'100'     => '100',
	'200'     => '200',
	'300'     => '300',
	'400'     => '400',
	'500'     => '500',
	'600'     => '600',
	'700'     => '700',
	'800'     => '800',
	'900'     => '900',
	'inherit' => 'inherit',
	'initial' => 'initial',
	'unset'   => 'unset',
);
$return['background_repeat']     = array(
	'no-repeat' => __( 'No Repeat', 'wponion' ),
	'repeat'    => __( 'Repeat All', 'wponion' ),
	'repeat-x'  => __( 'Repeat Horizontally', 'wponion' ),
	'repeat-y'  => __( 'Repeat Vertically', 'wponion' ),
	'inherit'   => __( 'Inherit', 'wponion' ),
);
$return['background_clip']       = array(
	'inherit'     => __( 'Inherit', 'wponion' ),
	'border-box'  => __( 'Border Box', 'wponion' ),
	'content-box' => __( 'Content Box', 'wponion' ),
	'padding-box' => __( 'Padding Box', 'wponion' ),
);
$return['background_origin']     = $return['background_clip'];
$return['background_size']       = array(
	'inherit' => __( 'Inherit', 'wponion' ),
	'cover'   => __( 'Cover', 'wponion' ),
	'contain' => __( 'Contain', 'wponion' ),
);
$return['background_attachment'] = array(
	'fixed'   => __( 'Fixed', 'wponion' ),
	'scroll'  => __( 'Scroll', 'wponion' ),
	'inherit' => __( 'Inherit', 'wponion' ),
);
$return['background_position']   = array(
	'left top'      => __( 'Left Top', 'wponion' ),
	'left center'   => __( 'Left center', 'wponion' ),
	'left bottom'   => __( 'Left Bottom', 'wponion' ),
	'center top'    => __( 'Center Top', 'wponion' ),
	'center center' => __( 'Center Center', 'wponion' ),
	'center bottom' => __( 'Center Bottom', 'wponion' ),
	'right top'     => __( 'Right Top', 'wponion' ),
	'right center'  => __( 'Right center', 'wponion' ),
	'right bottom'  => __( 'Right Bottom', 'wponion' ),
);
$return['border-style']          = array(
	'solid'   => __( 'Solid', 'wponion' ),
	'dotted'  => __( 'Dotted', 'wponion' ),
	'dashed'  => __( 'Dashed', 'wponion' ),
	'none'    => __( 'None', 'wponion' ),
	'hidden'  => __( 'Hidden', 'wponion' ),
	'double'  => __( 'Double', 'wponion' ),
	'groove'  => __( 'Groove', 'wponion' ),
	'ridge'   => __( 'Ridge', 'wponion' ),
	'inset'   => __( 'Inset', 'wponion' ),
	'outset'  => __( 'Outset', 'wponion' ),
	'initial' => __( 'Initial', 'wponion' ),
	'inherit' => __( 'Inherit', 'wponion' ),
);
$return['background_style']      = array(
	'cover'     => __( 'Cover', 'wponion' ),
	'contain'   => __( 'Contain', 'wponion' ),
	'no-repeat' => __( 'No Repeat', 'wponion' ),
	'repeat'    => __( 'Repeat', 'wponion' ),
);
return $return;
