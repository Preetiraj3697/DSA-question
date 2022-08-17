function runProgram(input)
{
  input=input.trim().split(/[\r\n]+/)
  var array=[]
  for(var i=0;i<input.length;i++)
  {
      array.push(input[i].split(" ").map(Number))
  }
  for(var j=0;j<array[0][1];j++)
  {
      var arr=""
    for(var i=1;i<=array[0][0];i++)
    {
  
        arr =arr+(array[i][j])+" "
    }
    console.log(arr)
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