const moi = require('./information.js');

let cowsay = require("cowsay");

console.log(cowsay.say({
	text:`Hello i'm ${moi.firstname} ${moi.lastname} from ${moi.campus} campus !`,
	e: "oO",
	T: "U"} 
));
