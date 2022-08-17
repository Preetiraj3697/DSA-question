function runProgram(input) {
    input = input.trim().split("\n");
    var array = [];
    for (var i = 0; i < input.length; i++) {
      array.push(input[i].trim().split(" ").map(Number))
    } 
  //      console.log(array)
    var [row]=array[0]
    array.shift()
    for(var i=row-1;i>=0;i--)
    {
        str=""
        for(var j=0;j<row;j++)
        {
             str=str+array[j][i]+" "
        }
        console.log(str)
    }
 
  }

if (process.env.USER === "kaustubhmendhe") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8
`);
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