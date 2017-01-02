"# NodeJS" 

-js files can be run from the NodeJS command prompt like this: node example.js
-you can optionally not specify the .js extention

-console.log() is one way to debug by sending strings to the console.
-console is an object off of the global object.  so, this would work: global.console.log("test");
-%s and %j are string replacement and json replacement tokens respectively, and can be used like this: console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);

-require() is a method that loads and requires modules available with NodeJS.  ex: var path = require("path");
-require() returns a value set in a module this way: module.exports = Person; // where person in this case is an object constructor specified in the module
-when requiring a custom module, you have to specify the path
-a group of core modules are available by default.  others may have to be installed to be accessed.
-path.basename() just returns the filename from a path (if path is assigned as it was in the example above)
-path.join() would concatenate a path.  ex: path.join(__dirname, 'subdir', 'sub-subdir'); // would create <path>\subdir\sub-subdir

-there is a module called utilities.  ex: var util = require('util');
-util.log() will log to the console like console.log() does, but it will include a timestamp
-util.inherits() can add an object to the prototype of an existing object: util.inherits(Person, EventEmitter);

-there is a module called v8 that can provide information about memory.  ex: var v8 = require('v8');
-v8.getHeapStatistics() would return all of our memory usage statistics

-there is a module called events that can emit events that can be reacted to. ex: var events = require('events');
-to do this, an even emitter must be instatiated: var emitter = new events.EventEmitter();
-a faster way to instantiate this is: var EventEmitter = require('events').EventEmitter;
-the emitter can be used to create callback functions that respond to an event: emitter.on('customEvent', function(message, status) { console.log(`${status}: ${message}`); });
-the emitter can also emit events: emitter.emit('customEvent', "Hello World", 200);

-there is a module called child_process which allows you to execute external processes in your environment.  ex: var exec = require("child_process").exec; // this actually returns the exec method
-exec() can be executed like this: exec("git version", function(err, stdout) { console.log(stdout); });

-there is a module called readline that allows us to have better control of user input/output. ex: var readline = require('readline');
-readline.createInterface() can create an interface to control input for the specified input/output streams.  ex: var rl = readline.createInterface(process.stdin, process.stdout);
-rl.question() is an interface method that will execute a callback function after promping the user.  ex: rl.question("What is the name of a real person? ", function(answer) { console.log(answer); });
-rl.setPrompt() is a method to set the prompt string.  ex: rl.setPrompt(`What would ${realPerson.name} say? `);
-rl.prompt() will prompt the user and wait for user input;
-rl.on() will fire a callback function when an event happens. the line event fires when the user has entered an input.  ex: rl.on('line', function(saying) { console.log(saying); });
-rl.close() closes the readline instance
-another event is close.  this will fire when the readline instance closes.

-__dirname is a global variable that stores the directory name of the current file
-__filename is a global variable that stores the full path of the current file

-template strings are defined by surrounding them with "backtick" symbols (the symbol under tilde on the keyboard).  ex: `Rock on World from ${path.basename(__filename)}`

-the process object is available globally
-process.argv is an array of arguments passed in at the command line.  the first two elements are automaticaly the path to nodejs.exe and the path to the current file.
-process.argv.indexOf(findMe) will return the index of the element that matches findMe or -1 (standard array functionality)
-process.stdout is how you access standard out.  ex: process.stdout.write("Hello");
-process.stdout.clearLine() clears the current line in the console
-process.stdout.cursorTo() moves the cursor to a point on that line.  ex: process.stdout.cursorTo(0);
-process.stdin is how you access standard in.  ex: process.stdin.on('data', function() { console.log("event executes when data was entered"); });
-process.exit() will cause the process to exit
-process.on('exit', function() { }) will execute the callback function when the process exits.

-setTimeout() will execute a callback function once after a certain delay.  ex: setTimeout(function() { console.log("delay done"); }, delayMillis);
-setInterval() wlll execute a callback function each time a delay time goes by.  ex: var interval = setInterval(function() {console.log("delay hit"); }, delayMillis);
-clearInterval().  if interval is assigned as above, then it can be used to end the interval process.  ex: clearInterval(interval);


