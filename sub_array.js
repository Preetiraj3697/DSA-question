function runProgram(input)
{
  input=input.trim();
  input=input.split(/[\r\n]+/);
  var a=input[0];
  var array=input[1].split(" ")
 // console.log(array)
  var sub=[]
  for(var i=0;i<a;i++)
  {
      var last=[]
      for(var j=i;j<a;j++)
      {
          last.push(array[j])
         
         // console.log(last)
        //  sub.push(last)
      }
     
  }
  console.log(sub) 
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