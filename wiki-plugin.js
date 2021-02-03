import { argdown, StdOutPlugin } from "@argdown/node";

argdown.addPlugin(new StdOutPlugin());
argdown.defaultProcesses["wiki-plugin"] = [
    "parse-input", "build-model", "build-map", "export-html"
];

let argument = process.argv[2];
if (!argument) argument = "Error: wiki-plugin.js didn't receive Argdown argument";

const request = {
    input: argument,
    process: "wiki-plugin",
    html: {
        headless: true
    }
};

const response = argdown.run(request);
const html = response.html;
console.log(html);
