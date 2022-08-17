function runProgram(input) {
    input = input.trim();
    var data="abcdefghijklmnopqrstuvwxyz"
    var num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
    var sum=0;
    for(var i=0;i<input.length;i++)
    {
        for(var j=0;j<data.length;j++)
        {
            if(input[i]==data[j])
            {
                sum=sum+num[j]
            }
        }
    }
    console.log(sum)


}
if (process.env.USER === "kaustubhmendhe") {
    runProgram(`aba`);
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