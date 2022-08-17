function runProgram(input) {

    input = input.trim().split(/[\r\n]+/);

    var array=[]
    for(var i=0;i<input.length;i++)
    {
        array.push(input[i].trim().split(" ").map(Number))
    }

    var col=array[0];
    array.shift()

    for(var i=0;i<col;i++)
    {
        str=""
        for(var j=col-1;j>=0;j--)
        {
             str=str+array[i][j]+" "
        }
        console.log(str)
    }
  
   
  }
  if (process.env.USER === "kaustubhmendhe") {
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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