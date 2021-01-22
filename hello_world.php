<?php
use MediaWiki\Shell\Shell;
use MediaWiki\Logger\LoggerFactory;

class Argdown {
    public static function onParserFirstCallInit( Parser $parser ) {
        $parser->setHook( 'Argdown', array( __CLASS__, 'helloWorldRender' ) );
        return true;
    }
    static function helloWorldRender( $input, array $args, Parser $parser, PPFrame $frame )
    {
        global $IP;
        $result = Shell::command( "/usr/local/bin/node", "$IP/extensions/Argdown/helloWorld.js" )->execute();
        $stdout = $result->getStdout();
        $stderr = $result->getStderr();
        $ret = "<p>Stdout: $stdout</p>";
        $ret .= "<p>Stderr: $stderr</p>";
        return $ret;
    }
}