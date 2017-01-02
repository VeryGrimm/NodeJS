"# NodeJS" 

-js files can be run from the NodeJS command prompt like this: node example.js
-you can optionally not specify the .js extention

-console.log() is one way to debug by sending strings to the console.
-console is an object off of the global object.  so, this would work: global.console.log("test");

-require() is a method that loads and requires modules available with NodeJS.  ex: var path = require("path");
-path.basename() just returns the filename from a path (if path is assigned as it was in the example above)

-__dirname is a global variable that stores the directory name of the current file
-__filename is a global variable that stores the full path of the current file

-template strings are defined by surrounding them with "backtick" symbols (the symbol under tilde on the keyboard).  ex: `Rock on World from ${path.basename(__filename)}`

-the process object is available globally
-process.argv is an array of arguments passed in at the command line.  the first two elements are automaticaly the path to nodejs.exe and the path to the current file.
-process.argv.indexOf(findMe) will return the index of the element that matches findMe or -1 (standard array functionality)
-process.stdout is how you access standard out.  ex: process.stdout.write("Hello");
-process.stdin is how you access standard in.  ex: process.stdin.on('data', function() { console.log("event executes when data was entered"); });
-process.exit() will cause the process to exit
-process.on('exit', function() { }) will execute the callback function when the process exits.


