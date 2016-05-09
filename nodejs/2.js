var headLine = [];
var LineByLineReader = require('line-by-line');
line = new LineByLineReader('1.csv');

lr.on('line', function (line) {
		// readLine(line);
		console.log(line);
});

lr.on('end', function () {
	// All lines are read, file is closed now.
});
//
// function readLine(line){
//
// 	if(!headLine)
// 	{
// 		headLine = line.toString()
// 	}
//
// }
