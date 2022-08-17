function runProgram(input) {
    input = input.trim().split("\n");
    for( var i=0;i<input.length;i++)
    {
      input[i]=input[i].trim().split(" ").map(Number)
    }
   // console.log(input)
    var test=input[0]
    input.shift()
    //console.log(input)
    for(var i=0;i<test;i++)
    {
      var [el,target]=input[0]
      input.shift()
      var count=0
      for(var j=0;j<el;j++)
      {
         var x=input[0][j]-target
      }

       // console.log(el,target)

      if(count==0)
      {
        console.log(-1)
      }
      else
      {
        console.log(1)
      }
      input.shift()
    }
  }
  if (process.env.USER === "kaustubhmendhe") {
    runProgram(`10
    6 16
    2 0 2 5 -3 0
    9 3
    6 -6 -7 8 -4 8 -6 1 4
    1 -1
    1
    3 -3
    -2 3 0
    5 -9
    4 5 0 -3 3
    7 4
    1 2 1 6 -2 7 0
    7 -10
    2 -5 6 -1 5 -1 6
    4 -12
    1 -2 -3 -4
    6 0
    5 -6 5 5 3 0
    2 3
    -2 -2`);
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