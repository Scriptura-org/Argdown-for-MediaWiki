<?php
class Argdown {
    static function onParserInit( Parser $parser ) {
        $parser->setHook( 'Argdown', array( __CLASS__, 'helloWorldRender' ) );
        return true;
    }
    static function helloWorldRender( $input, array $args, Parser $parser, PPFrame $frame )
    {
        $ret = '<p>Hello, world</p>';
        return $ret;
    }
}