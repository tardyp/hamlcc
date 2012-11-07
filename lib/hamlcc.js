#!/usr/bin/env node
if (process.argv.length != 3) {
    process.stderr.write("usage: hamlcc file.haml\n");
    process.exit(1);
}
var fs = require('fs');
var fname = process.argv[2];
allhaml = fs.readFileSync(fname,'utf-8');
var Haml = require('haml');
js = Haml(allhaml).toString();
js = js.replace(/html_escape/g, "_e");
js = "define([],function(){\n"+js+"\nreturn anonymous;});\n"
try { /* if uglify-js is installed, we run it.. */
    js = require("uglify-js")(js);
} catch(err) {process.stdout.write(err+"\n");}
fs.writeFileSync(fname+".js",js);
