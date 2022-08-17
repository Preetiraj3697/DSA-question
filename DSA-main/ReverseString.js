function runProgram(input) {
    input = input.trim();
    console.log(input)
    var new1=input
    console.log(input)
    for(var i=0;i<input.length;i++)
    {
        str=input[input.length-1-i]
        //console.log(new1)
        for(var j=0;j<new1.length-1;j++)
        {
            str=str+new1[j]
        }
        new1=str
        console.log(str)
    }

}
if (process.env.USER === "kaustubhmendhe") {
    runProgram(`hifrommeera`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }