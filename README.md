# Argdown

This extension allows contributors to [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) wikis to write arguments in [Argdown](https://argdown.org/). Arguments will be formatted using [Argdown's official engine for Node.js](https://github.com/christianvoigt/argdown).

## Setup

1. Install [Node.js](https://nodejs.org)
2. [Download the extension](https://github.com/DawnPaladin/Argdown/archive/main.zip) and unzip it into the folder mediawiki/extensions/Argdown
3. `cd` to the extension folder and run `npm install` to install the Argdown engine
4. Run `which node` and put the result in mediawiki/extensions/Argdown/extension.json, under `config/NodeJsPath/value`. (The extension needs to know the path to your Node.js executable and may not be able to get it from your $PATH.)
5. Add the line `wfLoadExtension( 'Argdown' );` to mediawiki/LocalSettings.php

## Usage

On any page, wrap your argument in `<argdown>` `</argdown>` tags and they'll be formatted in Argdown. For more information on composing arguments in Argdown, please see [the official guide](https://argdown.org/guide/creating-argument-maps.html).

## Roadmap

- [x] Argdown to HTML rendering
- [ ] Add Argdown button to editing toolbar
- [ ] Display argument maps

## Feedback

If you'd like to report a bug or provide other feedback, please [open a GitHub issue](https://github.com/DawnPaladin/Argdown/issues).

Last tested with MediaWiki 1.35.1 and Argdown 1.5. 