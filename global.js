var hello = "Hello World from Node js";
var justNode = hello.slice(17);

console.log(`Rock on World from ${justNode}`);

var path = require("path");

console.log(__dirname);
console.log(__filename);
console.log(`Rock on World from ${path.basename(__filename)}`);
