import { argdown, StdOutPlugin } from "@argdown/node";

argdown.addPlugin(new StdOutPlugin());
argdown.defaultProcesses["wiki-plugin"] = [
    "parse-input", "build-model", "build-map", "highlight-source", "export-dot", "export-svg", "export-web-component"
];

let argument = process.argv[2];
if (!argument) argument = "";

const request = {
    input: argument,
    process: "wiki-plugin",
    html: {
        headless: true
    }
};

const response = argdown.run(request);

console.log(response.webComponent); // output to MediaWiki wikitext via stdout
