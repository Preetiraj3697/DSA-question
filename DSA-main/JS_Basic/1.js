 var Str = "I am adarsh";
 var patt = "arsh";
// YOUR CODE GOES HEREpatt = //;
//console.log(patt.test(`${Str}`));
// console.log(Str,patt)
//  var z = Str.search(`/${patt}/i`);
//  console.log(z)
//  if(z==patt.length)
//  {
//      console.log("true")
//  }
//  else
//  {
//      console.log("false")
//  }
//var str = "I'm Adarsh!";
var z = Str.search(`${patt}`);
//console.log(z)
console.log(Str.includes(`${patt}`))