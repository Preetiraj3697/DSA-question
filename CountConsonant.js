function runProgram(input)
{
  input=input.trim();
  var count=0;
  for( var i=0;i<input.length;i++)
  {
    
      if(input[i]!="a"&&input[i]!="e"&&input[i]!="i"&&input[i]!="o"&&input[i]!="u") 
      {
          count++
      }
  }
  console.log(count)
  
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});