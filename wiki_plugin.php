<?php
use MediaWiki\Shell\Shell;
// use MediaWiki\Logger\LoggerFactory;

class Argdown {
    public static function onParserFirstCallInit( Parser $parser ) {
        $parser->setHook( 'Argdown', array( __CLASS__, 'argdownRender' ) );
        return true;
    }
    public static function onBeforePageDisplay( OutputPage $out ) {
        $out->addModuleStyles( [ 'ext.Argdown' ]);
    }
    static function argdownRender( $input, array $args, Parser $parser, PPFrame $frame )
    {
        global $IP;
        $result = Shell::command( "/usr/local/bin/node", "$IP/extensions/Argdown/wiki-plugin.js", $input )->execute();
        $stdout = $result->getStdout();
        $stderr = $result->getStderr();
        return $stdout;
    }
}