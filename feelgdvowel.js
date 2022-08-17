function runProgram(input)
{
  input=input.trim();
  var a=input.split(/[\r\n]+/);
  var word=a[1];
  var length=Number(a[0]);
  var count=0;
  for ( var i=0;i<length;i++)
  {
      if(word[i]=="a"||word[i]=="e"||word[i]=="i"||word[i]=="o"||word[i]=="u")
      {
          count++;
      }
  }
  if(length/2<=count)
  {
      console.log("Feel good!")
  }
  else
  {
      console.log("Feel bad!")
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