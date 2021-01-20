<?php
$wgAutoloadClasses['Argdown'] = $IP . '/extensions/Argdown/hello_world.php';
$wgHooks['ParserFirstCallInit'][] = 'Argdown::onParserInit';