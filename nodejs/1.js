var fs = require('fs');
var data = fs.readFileSync('2.csv');
var line = data.toString().split('\r\n');
var array = [];
console.log(line.length);           //why is line number one more than required
for(var i=0;i<line.length;i++)
{
  array.push(line[i].split(','));
}
//
// console.log("before filter");
// for(var i=0;i<array.length;i++){
//   for(var j=0;j<array[i].length;j++){
//     console.log(array[i][j]);
//   }
// }

// console.log("\n"+array);
//filter

//find index
// var reqIndex;
//   for(var j=0;j<array.length;j++)
//   {
//       if(array[0][j]=="taste")
//       {
//       //  reqIndex[0] = i;
//         reqIndex = j;
//       }
//   }
var newarray = [{}];
var newobj{};
var newIndex = 0;
for(var i=0;i<array.length;i++)
{
  // for (var j = 0; j < array[i].length; j++)
  // {
      //
        if(array[i][1]=="sweet")
        {
            //console.log(array[i])
            // newarray.push(array[i]);
            for(j=0;j<array[i].length;j++){
              newobj = createObj(j);
            // newarray.push(array[0][j]);
          }
        }
  // }
}

////
//create jason object
 // var jsn = {};

.

//console.log(array);
