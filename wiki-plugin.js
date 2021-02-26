import { argdown } from "@argdown/node";

argdown.defaultProcesses["wiki-plugin"] = [
    "parse-input", "build-model", "build-map", "highlight-source", "export-dot", "export-svg", "export-web-component"
];

const extensionsFolderUrl = process.argv[3];

const request = {
    input: process.argv[2],
    process: "wiki-plugin",
    webComponent: {
        webComponentScriptUrl: extensionsFolderUrl + "/Argdown/resources/argdown-map.js",
        webComponentPolyfillUrl: extensionsFolderUrl + "/Argdown/resources/webcomponents-loader.js",
        globalStylesUrl: extensionsFolderUrl + "/Argdown/resources/argdown-map.css"
    }
};

const response = argdown.run(request);
var webComponent = response.webComponent;

// Clean the webComponent
webComponent = webComponent.replace(/<!--[\s\S]*?-->/g, "") // remove comments
var pieces = webComponent.split("<svg");
pieces[1] = pieces[1].replace(/\r?\n|\r/g,""); // remove linebreaks from <svg> tag
webComponent = pieces.join("<svg");

console.log(webComponent); // output to MediaWiki wikitext via stdout
