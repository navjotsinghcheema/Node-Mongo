// var fs = require('fs');
// var rstream = fs.createReadStream('Indicators.csv');
// var wstream = fs.createWriteStream('newFile.txt');
// rstream.pipe(wstream);

var readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: fs.createReadStream('Indicators.csv')
});

var headLine = [];
var JSON_One = [];
var JSON_One = [];
//   {
//     "key":"Urban population (% of total)",
//     "value":[]
//   },
//   {
//     "key":"Rural population (% of total population)",
//     "value":[]
//   }
// ];
var JSON_Two = [];
rl.on('line', (line) => {

    if(headLine.length===0)
    {
      console.log(line);
      headLine = line.toString().split(',');
    }
    console.log(headLine);
    var currentLine = [];
    currentLine = line.toString().split(',');


    if(currentLine[0]=="India")
    {
      if(currentLine[2]=="Rural population (% of total population)"||currentLine[2]=="Urban population (% of total)")
      {
        // console.log(headLine[0]);
        JSON_One.push(createJson(currentLine));
      }

      else if(currentLine[2]=="Urban population growth (annual %)")
      {
        JSON_Two[1]["value"].push(createJson(currentLine));
      }
    }

    // function to create JSON object for the first JSON file
    function createJson(currentLine){
      // console.log(headLine[0]);
      var newobj = {
        "Year" : currentLine[4],
        "Value" : currentLine[5]
      };
      return newobj;
    }

//    console.log(JSON_One);
  // }

  // console.log('Line from file:', line);
});






// const fs = require('fs');
// var data = fs.createReadStream('Indicators.csv');
// var JSON_One=[{}];
// var JSON_Two=[{}];
// var JSON_Three=[{}];
// var headLine=[];
// var flag = 0;
// data.on('readable', function() {
//   // console.log('readable:', data.read().toString('utf8'));
//   var line = data.read().toString().split("\n");
//   console.log(line.length);
//   if(flag==0)
//   {
//     headLine = line[0].split(",");
//     flag = 1;
//     // console.log(headLine);
//   }
//
//   for(var i=0;i<line.length;i++)
//   {
//     var currentLine = line[i].split(',');
    // if(currentLine[0]=="India")
    // {
    //   if(currentLine[2]=="Rural population (% of total population)"||currentLine[2]=="Urban population (% of total)")
    //   {
    //     JSON_One.push(createJson(currentLine));
    //   }
    //
    //   else if(currentLine[2]=="Urban population growth (annual %)")
    //   {
    //     JSON_Two.push(createJson(currentLine));
    //   }
    // }
//     //else if(currentLine[0]==
//   }
//
// });
//
// var currentLine;
// data.on('end', function() {
//   console.log('end');
// });
// //
// // console.log("\n\n\n\n");
// // console.log(JSON_One);
// //
//
//
// //function to create JSON object for the first JSON file
// function createJson(currentLine){
//   var newobj = {};
//   for(var i=0;i<headLine.length;i++)
//   {
//         newobj[headLine[i]]=currentLine[i];
//   }
//   return newobj;
// }

// //function to create JSON object for 2nd JSON file
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //
// //
// //
// // var line = data.toString().split('\r\n');
// // var allData = [];
// //
// // for(var i=0;i<line.length;i++)
// // {
// //   allData.push(line[i].split(','));
// // }
// //
// //
// //
// // //
// // var data1=[];
// // for(var i=0;i<allData.length;i++)   //allData.length is the number of rows in .csv
// // {
// //   if(allData[i][2]=="Urban population (% of total)"||allData[i][2]=="Rural population (% of total population)")
// //   {
// //     if(allData[i][0]=="India")
// //     {
// //       data1.push(allData[i]);
// //     }
// //   }
// // }
// //
// // console.log(data1);
