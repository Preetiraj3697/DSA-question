function runProgram(input)
{
  input=input.trim();
  var a=input.split(/[\r\n]+/);
  var num=a[0];

  for( var i=0;i<num;i++)
  {
    var num1=a[i%2==1]
    var num2=a[i%2==0].split(" ").map(Number);
    for(var j=i+1;j<num1;j++)
    { 
      if((num2[i]+num2[j])%2==0) 
      {
          
      } 
    }
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