"# NodeJS" 

-js files can be run from the NodeJS command prompt like this: node example.js

-console() is a method off of the global object.  so, this would work: global.console.log("test");

-require() is a method that loads and requires modules available with NodeJS.  ex: var path = require("path");
-path.basename() just returns the filename from a path (if path is assigned as it was in the example above)

-__dirname is a global variable that stores the directory name of the current file
-__filename is a global variable that stores the full path of the current file

-template strings are defined by surrounding them with "backtick" symbols (the symbol under tilde on the keyboard).  ex: `Rock on World from ${path.basename(__filename)}`

