function runProgram(input)
{
  input=input.trim();
  var a=input.split(/[\r\n]+/);
  var num=a[0].split(" ").map(Number)
  var num1=a[1].split(" ").map(Number)
//   console.log(num[0])
//   console.log(num1[0])
if (num[0]<num1[0] && num[1]<num1[1])
{
    console.log("Upload")
}

else if(num[0]>num1[0])
{
    console.log("Increase Length")
}
else
{
    console.log("Increase Width")
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