var htmlcodeblock = document.getElementById("html-codeblock");
var csscodeblock = document.getElementById("css-codeblock");
var jscodeblock = document.getElementById("js-codeblock");

var page = document.getElementById("page");

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

htmlcodeblock.value = "<h1>Wow</h1>";
csscodeblock.value = "body {\n\tbackground-color: aqua;\n}";
jscodeblock.value = "";

function compile() {
    var pageDoc = page.contentDocument;
    console.log(pageDoc);
    pageDoc.open();
    pageDoc.write(htmlcodeblock.value + 
                    "<style>" + 
                    csscodeblock.value + 
                    "</style>" +
                    "<script>" +
                    jscodeblock.value +
                    "</script>"
    );
    pageDoc.close();
}

compile();

