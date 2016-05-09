const readline = require('readline');
const fs = require('fs');

const data = readline.createInterface({
  input: fs.createReadStream('Indicators.csv')
});

var headLine = [];
var JSON_One = [
  {
    "key" : "Rural population (% of total population)",
    "value" : []
  },
  {
    "key" : "Urban population (% of total)",
    "value" : []

  }
];
var JSON_Two = [];
var JSON_Three = [];
var arr = [];
var count = 0;
data.on('line', (line) => {

//printing content of line
// console.log('Line from file:', line);

// header line
if(headLine.length===0)
{
  headLine = line.toString().split(",");
  // console.log(headLine);
}

//reading currentLine
var currentLine = [];
currentLine = line.toString().split(",");
// console.log(currentLine);

//create JSON_One
createJsonOne(currentLine);

//create JSON_Two
createJsonTwo(currentLine);

//create JSON_Three
createJsonThree(currentLine);

}).on('close',function(){

  // JSON_One = JSON.stringify(JSON_One);
  // fs.writeFile('india-urban-rural-population.json',JSON.stringify(JSON_One));
  // console.log(JSON_One);

  // JSON_Two = JSON.stringify(JSON_Two);
  fs.writeFile('india-area.json',JSON.stringify(JSON_Two));
  // console.log(JSON_Two);

  // JSON_Three

});

//Create JSON_One with required filters and then calling createObjOne to create Object and
// the return item is pushed into the JSON_One array in desired format
function createJsonOne(currentLine)
{
  if(currentLine[0]=="India")
  {
    if(currentLine[2]=="Rural population (% of total population)")
    {
      // console.log(currentLine);
        JSON_One[0]["value"].push(createObjOne(currentLine));
        // console.log(typeof(createObjOne(currentLine)));
          }
    else if(currentLine[2]=="Urban population (% of total)")
    {
      JSON_One[1]["value"].push(createObjOne(currentLine));
    }
  }
}

//create object as per JSON_One requirements
function createObjOne(currentLine)
{
  // console.log(currentLine);
  var obj = {
    "Year" : currentLine[4],
    "Value": currentLine[5]
  };
  return obj;
}

//create JSON_Two
function createJsonTwo(currentLine)
{
  if(currentLine[0]==="India")
  {
    if(currentLine[2]==="Urban population growth (annual %)")
    {
      JSON_Two.push(createObjOne(currentLine)); //called createObjOne because the object here also requires same attributes
    }
  }
}

function createJsonThree(currentLine)
{

}
