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
//   {
//     "Year" : 1960,
//     "Urban": 0,
//     "Rural": 0
//   }
// ];


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
  // createJsonOne(currentLine);

  //create JSON_Two
  // createJsonTwo(currentLine);

  //create JSON_Three
  // objectCount = createJsonThree(currentLine);
  // console.log(arr["Year"]);
createJsonThree(currentLine);
}).on('close',function(){

  // JSON_One = JSON.stringify(JSON_One);
  // fs.writeFile('india-urban-rural-population.json',JSON.stringify(JSON_One));
  // console.log(JSON_One);

  // JSON_Two = JSON.stringify(JSON_Two);
  // fs.writeFile('india-area.json',JSON.stringify(JSON_Two));
  // console.log(JSON_Two);

  // JSON_Three
  // formatThree();
  fs.writeFile('asia-urban-rural.json',JSON.stringify(JSON_Three));
  console.log(JSON_Three);
});

//Create JSON_One with required filters and then calling createObjOne to create Object and
// the return item is pushed into the JSON_One array in desired format
function createJsonOne(currentLine)
{
  if(currentLine[0]==="India")
  {
    if(currentLine[2]==="Rural population (% of total population)")
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

var countries = ["India","Afghanistan","Bangladesh","China","Hong Kong SAR, China","Indonesia","Japan","Malaysia","Maldives","Myanmar",
"Nepal","Pakistan","Singapore","Sri Lanka","Thailand","Vietnam"];

function createJsonThree(currentLine)
{

  if((currentLine[2]==="Rural population"||currentLine[2]==="Urban population") && (countries.indexOf(currentLine[0])!==-1))
  {
    var flag=0;

        for(var j=0;j<JSON_Three.length;j++)
        {
          // console.log(JSON_Three.length);
          if(JSON_Three[j]["Year"]===currentLine[4])
          {

            // console.log("here5");
            if(currentLine[2]==="Rural population")
            {
              // console.log("Here6");
              // console.log(JSON_Three[j]["Rural"]);
              JSON_Three[j]["Rural"] = parseFloat(JSON_Three[j]["Rural"]) + parseFloat(currentLine[5]);//parseFloat
              // flag++;
            }
            else if(currentLine[2]==="Urban population")
             {               //console.log(JSON_Three[j]["Urban"]);

              JSON_Three[j]["Urban"] = parseFloat(JSON_Three[j]["Urban"]) + parseFloat(currentLine[5]);
              // flag++;
            }
            flag++;
            break;
          }
          // else {
          //   flag=0;
          //   break;
          // }

          // flag++;
          // break;
        }
        // console.log(flag);
        if(flag==0)
        {
            // JSON_Three.push(createReqObj(currentLine));
            if(currentLine[2]==="Urban population")
            {
              JSON_Three.push({"Year":currentLine[4],
                                "Urban": currentLine[5],
                                "Rural": 0
                              });
            }
            else
            {
              JSON_Three.push({"Year": currentLine[4],
                                "Urban": 0,
                                "Rural": currentLine[5]
                               });
            }
        }

  }
}
