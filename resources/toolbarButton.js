// from https://www.mediawiki.org/wiki/Extension:WikiEditor/Toolbar_customization

var customizeToolbar = function () {
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        section: 'main',
        group: 'format',
        tools: {
            "Argdown": {
                label: 'Argdown',
                type: 'button',
                icon: "extensions/Argdown/images/argdown-button.svg",
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "<argdown>",
                        post: "</argdown>"
                    }
                }
            }
        }
    });
};

/* Check if view is in edit mode and that the required modules are available. Then, customize the toolbar … */
if ( [ 'edit', 'submit' ].indexOf( mw.config.get( 'wgAction' ) ) !== -1 ) {
	mw.loader.using( 'user.options' ).then( function () {
		// This can be the string "0" if the user disabled the preference ([[phab:T54542#555387]])
		if ( mw.user.options.get( 'usebetatoolbar' ) == 1 ) {
			$.when(
				mw.loader.using( 'ext.wikiEditor' ), $.ready
			).then( customizeToolbar );
		}
	} );
}
