function runProgram(input)
{
  input=input.trim();
  input=input.split(" ");
  var num1=input[0];
  var num2=input[1];
//   console.log(num1)
//   console.log(num2)
  var count=0
  for(var i=0;i<=num1;i++)
  {
      for(var j=0;j<=num2;j++)
      {
          if((i**2+j)==num1&&(j**2+i==num2))
          {
               count++
          }
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