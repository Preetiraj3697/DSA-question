function runProgram(input) {
    input = input.trim().split("\n")
    //console.log(input)
  
    for (var i = 0; i < input.length; i++) {
        input[i]=input[i].trim().split(" ").map(Number)
    }
  //  console.log(input)
    var [row, col] = input[0]
    input.shift()
    //console.log(row, col, array)
     var sum1 = 0;
     var sum2 = 0;
   for(var i=Math.floor(row/2);i<=Math.floor(row/2);i++)
   {
    //  console.log(input[i])
    for(var j=0;j<col;j++)
    {
        sum1 +=input[i][j]
    }
   }
   for( var i=0;i<row;i++)
   {
       if(i<Math.floor(row/2))
       {
           sum1 +=input[i][0]
       }
       else if(i>Math.floor(row/2))
       {
        sum1 +=input[i][col-1]
       }
   }
  //  console.log(sum1)

    for(var i=0;i<row;i++)
    {
          sum2  +=input[i][Math.floor(col/2)]
    }
    for( var i=0;i<col;i++)
    {
         if(i>Math.floor(col/2))
         {
             sum2 +=input[0][i]
         }
         else if(i<Math.floor(col/2))
         {
             sum2 +=input[row-1][i]
         }
    }
//console.log(sum2)
console.log(Math.abs(sum1-sum2))
 
}

// 5 5
// 2 6 1 0 9
// 2 3 4 1 0
// 2 7 8 2 1
// 9 2 3 5 0
// 6 1 1 1 1
if (process.env.USER === "kaustubhmendhe") {
    runProgram(`5 5
    2 6 1 0 9
    2 3 4 1 0
    2 7 8 2 1
    9 2 3 5 0
    6 1 1 1 1`);
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