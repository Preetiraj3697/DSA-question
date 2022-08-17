function runProgram(input)
{
  input=input.trim();
  var a=input.split(/[\r\n]+/);
  var num=a[0];
  var num1=a[1]
  var num2=a[2].split(" ").map(Number);
  var count=0;
  for( var i=0;i<num1;i++)
  {
    for(var j=i+1;j<num1;j++)
    { 
      if((num2[i]+num2[j])%2==0) 
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