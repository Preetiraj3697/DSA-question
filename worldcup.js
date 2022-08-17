function runProgram(input)
{
  input=input.trim();
  var a=input.split(/[\r\n]+/);
  var one=a[0].split(" ");
  var two=a[1].split(" ");
  if(Number(one[0])>Number(two[0]))
  {
      console.log("New Zealand")
  }
  else if(Number(one[0])==Number(two[0]))
  {
      if((Number(one[1])>Number(two[1])))
      {
          console.log("New Zealand")
      }
      else if((Number(one[1])==Number(two[1])))
      {
          if((Number(one[2])>Number(two[2])))
          {
            console.log("New Zealand")
          }
          else
          {
              console.log("England")
          }
      }
      else
      {
        console.log("England")
      }
  }
  else
  {
    console.log("England")
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