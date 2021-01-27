<?php
use MediaWiki\Shell\Shell;
use MediaWiki\MediaWikiServices;
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
        $config = MediaWikiServices::getInstance()->getConfigFactory()->makeConfig( 'Argdown' );
        $nodePath = $config->get( 'NodeJsPath' );
        if (!file_exists($nodePath)) return "<h1 style='color: maroon'>Can't find Node.js path. Please see README.md for your Argdown plugin.</h1>";
        $result = Shell::command( $nodePath, "$IP/extensions/Argdown/wiki-plugin.js", $input )->execute();
        $stdout = $result->getStdout();
        $stderr = $result->getStderr();
        return $stdout;
    }
}