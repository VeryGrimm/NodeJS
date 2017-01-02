function grab(flag) {
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

console.log(process.argv);

// these arguments would be specified at the command line
if (!user || !greeting) {
	console.log("You Blew it!");
} else {
	console.log(`Welcome ${user}, ${greeting}`);
}

