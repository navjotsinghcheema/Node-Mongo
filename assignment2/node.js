const readline = require('readline');
const fs = require('fs');
var currentLine=[];

const data = readline.createInterface({
  input: fs.createReadStream('Crimes_-_2001_to_present.csv')
});

var headLine = [];
var JSON_One = [
  {
    "key" : "Robbery",
    "value" : []
  },
  {
    "key" : "Burglary",
    "value" : []

  }
];
var JSON_Two = [];
var JSON_Three = [];
var flag1 = 0;
var flag2 = 0;

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
//  var currentLine = [];
  // currentLine = line.toString().split(/,(?=(?:(?:[*"]*"){2})*[^"]*$)/);
  currentLine = line.toString().split(',');
  console.log(currentLine[6]);



  //create JSON_One
  // createJsonOne(currentLine);

  //create JSON_Two
  // console.log(currentLine);
  // createJsonTwo(currentLine);

  //create JSON_Three
  // objectCount = createJsonThree(currentLine);
  // console.log(arr["Year"]);
// createJsonThree(currentLine);
}).on('close',function(){

  // JSON_One = JSON.stringify(JSON_One);
  // fs.writeFile('Robbery-Burglary.json',JSON.stringify(JSON_One));
  // console.log(JSON_One);

  // JSON_Two = JSON.stringify(JSON_Two);
  // fs.writeFile('india-area.json',JSON.stringify(JSON_Two));
  console.log(JSON_Two);

  // JSON_Three
  // formatThree();
  // fs.writeFile('asia-urban-rural.json',JSON.stringify(JSON_Three));
  // console.log(JSON_Three);
});

//Create JSON_One with required filters and then calling createObjOne to create Object and
// the return item is pushed into the JSON_One array in desired format
function createJsonOne(currentLine,prevYear)
{

      console.log(currentLine[5]);
      if(currentLine[5]==="ROBBERY")
      {
        var flag1=0;
        // console.log(JSON_One[0].value.length);
        for(var j=0;j<JSON_One[0].value.length;j++)
        {
          // console.log(JSON_One[0].value.length);
          if(currentLine[17]===JSON_One[0]["value"][j]["Year"])
          {
            // console.log(JSON_One[0]["value"][j]["Year"]);
            console.log("ROBBERY updated in "+currentLine[17]);
            JSON_One[0]["value"][j]["Count"] ++;
            flag1++;
            break;
          }
        }
        if(flag1===0)
        {
          JSON_One[0]["value"].push(
            {
                "Year" : currentLine[17],
                "Count": 1
            }
          );
        }
        // console.log(flag1);
        // break;
      }

      if(currentLine[5]==='BURGLARY')
      {
        var flag2=0;
        for(var j=0;j<JSON_One[1]["value"].length;j++)
        {
          if(currentLine[17]===JSON_One[1]["value"][j]["Year"])
          {
            console.log("BURGLARY found in "+ JSON_One[1]["value"][j]["Year"]);
            JSON_One[1]["value"][j]["Count"] ++;
            flag2++;
            break;
          }

        }
        if(flag2===0)
        {
          JSON_One[1]["value"].push(
            {
                "Year" : currentLine[17],
                "Count": 1
            }
          );
        }
        // break;
      }
      else
      {
        return;
      }
    }

// var toState=0;
function createJsonTwo(currentLine)
{
  // console.log("Here");
console.log(currentLine);
  if(currentLine[6]==="TO STATE SUP PROP")
  {
    console.log("Here");
    var flag1=0;
    for(var j=0;j<JSON_Two.count;j++)
    {
      if(currentLine[17] === JSON_Two[j]["Year"])
      {
        JSON_Two[j]["TO STATE SUP PROP"]++;
        // console.log("Year:" + JSON_Two[j]["Year"] + "TO STATE" + JSON_Two[j]["TO STATE SUP PROP"]);
        flag1++;
        break;
      }
      if(flag1===0)
      {
        JSON_Two.push(
          {
            "Year" : currentLine[17],
            "TO STATE SUP PROP" : 1,
            "TO VEHICLE" : 0,
            "TO PROPERTY" : 0
          }
        );
      }
    }
  }

  if(currentLine[6]==="TO VEHICLE")
  {
    var flag2=0;
    for(var j=0;j<JSON_Two.count;j++)
    {
      if(currentLine[17] === JSON_Two[j]["Year"])
      {
        JSON_Two[j]["TO VEHICLE"]++;
        // console.log("Year:" + JSON_Two[j]["Year"] + "TO VEHICLE:" + JSON_Two[j]["TO VEHICLE"]);
        flag2++;
        break;
      }
      if(flag2===0)
      {
        JSON_Two.push(
          {
            "Year" : currentLine[17],
            "TO STATE SUP PROP" : 0,
            "TO VEHICLE" : 1,
            "TO PROPERTY" : 0
          }
        );
      }
    }
  }
  if(currentLine[6]==="TO PROPERTY")
  {
    var flag3=0;
    for(var j=0;j<JSON_Two.count;j++)
    {
      if(currentLine[17] === JSON_Two[j]["Year"])
      {
        JSON_Two[j]["TO PROPERTY"]++;
        // console.log("Year:" + JSON_Two[j]["Year"] + "TO VEHICLE:" + JSON_Two[j]["TO PROPERTY"]);
        flag3++;
        break;
      }
      if(flag3===0)
      {
        JSON_Two.push(
          {
            "Year" : currentLine[17],
            "TO STATE SUP PROP" : 0,
            "TO VEHICLE" : 0,
            "TO PROPERTY" : 1
          }
        );
      }
    }
  }
}
