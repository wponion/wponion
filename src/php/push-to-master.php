<?php
require __DIR__ . '/function.php';
$base_dir = __DIR__ . '/../../';

$file_header = get_file_meta( $base_dir . 'index.php', array( 'Version' => 'Version' ) );
$version     = $file_header['Version'];

$cmds = array(
	"WPOnion Stable Clone"     => "git clone --branch master --single-branch https://github.com/wponion/wponion ${base_dir}dist/",
	"Copying Assets"           => "rm -rf ${base_dir}dist/assets && cp -r ${base_dir}assets dist/assets",
	"Copying Core"             => "rm -rf ${base_dir}dist/core && cp -r ${base_dir}core ${base_dir}dist",
	"Copying Data"             => "rm -rf ${base_dir}dist/data && cp -r ${base_dir}data ${base_dir}dist",
	"Copying il8n"             => "rm -rf ${base_dir}dist/i18n && cp -r ${base_dir}i18n ${base_dir}dist",
	"Copying Includes"         => "rm -rf ${base_dir}dist/includes && cp -r ${base_dir}includes ${base_dir}dist",
	"Copying Setup"            => "rm -rf ${base_dir}dist/setup && cp -r ${base_dir}setup ${base_dir}dist",
	"Copying Basic Root Files" => "cp ${base_dir}./*.php dist/ && cp ${base_dir}.gitattributes ${base_dir}dist/ && cp ${base_dir}composer.json ${base_dir}dist/ && cp ${base_dir}CHANGELOG.md ${base_dir}dist/",
	"Commiting To Github"      => "cd ${base_dir}dist/ && git add . && git commit -m  \"🆕 V ${version} Source Updated \" ",
	"Pushing To Github"        => "cd ${base_dir}dist/ && git push origin",
	"Removing DIST Folder"     => "rm -rf ${base_dir}dist/",
);

echo PHP_EOL;
foreach ( $cmds as $head => $cmd ) {
	echo $head . PHP_EOL;
	$output    = '';
	$timetotal = microtime( true );
	exec( $cmd, $output );
	echo implode( PHP_EOL, $output ) . PHP_EOL;
	$timetotal = microtime( true ) - $timetotal;
	echo number_format( $timetotal, 6 ) . PHP_EOL . PHP_EOL;
}
