var htmlcodeblock = document.getElementById("html-codeblock");
var csscodeblock = document.getElementById("css-codeblock");
var jscodeblock = document.getElementById("js-codeblock");

var page = document.getElementById("page").contentWindow.document;

var htmleditor = CodeMirror.fromTextArea(htmlcodeblock,{
    lineNumbers: true,
    mode: "htmlmixed",
    theme: "dracula",
});

var csseditor = CodeMirror.fromTextArea(csscodeblock,{
    lineNumbers: true,
    mode: "css",
    theme: "dracula",
});

var jseditor = CodeMirror.fromTextArea(jscodeblock,{
    lineNumbers: true,
    mode: "javascript",
    theme: "dracula",
});

