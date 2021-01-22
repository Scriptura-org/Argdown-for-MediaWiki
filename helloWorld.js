import { argdown, StdOutPlugin } from "@argdown/node";
// import runArgdown from './runArgdown';

argdown.addPlugin(new StdOutPlugin());
argdown.defaultProcesses["hello-world"] = [
    "parse-input", "build-model", "build-map", "export-html"
];

const sampleArgument = `[Intro]: Argdown is a simple syntax for defining argumentative 
structures, inspired by Markdown.
  + Writing a list of **pros & cons** in Argdown is as 
    simple as writing a twitter message (actually we are 
    right in the middle of one).`;

const request = {
    input: sampleArgument,
    process: "hello-world",
    color: { colorScheme: "iwanthue-red-roses"}
};

const response = argdown.run(request);
const html = response.html;
console.log(html);
