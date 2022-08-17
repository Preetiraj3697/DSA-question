function runProgram(input)
{
  input=input.trim();
  var a=input.split(/[\r\n]+/);
  var one=a[0]
  var two=a[1].split(" ");
  var total=0;
//   console.log(one)
//   console.log(two)
  for( var i=0;i<one;i++)
  {
         total=total+Number(two[i])
  }
//   console.log(total)
  if(total>100)
  {
      console.log("Greater")
  }
  else{
    console.log("Lesser")
  }

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