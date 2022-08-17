function runProgram(input) {
    input = input.trim().split("\n");
    var array = [];
    for (var i = 0; i < input.length; i++) {
      array.push(input[i].trim().split(" ").map(Number))
    } 
   //  console.log(array)
     var [row,col,target]=array[0]
   //  console.log(row, col, target)
     array.shift()
     var count=0;
    for(var i=0;i<row;i++)
    {
     //   console.log(i)
        for(var j=0;j<col-2;j++)
        {
            //console.log(i,j)
            if(array[i][j]+array[i][j+1]+array[i][j+2]==target)
            {
                count++
            }
        }
    }
    for(var i=0;i<row-2;i++)
    {
        for(var j=0;j<col;j++)
        {
          //  console.log(i,j)
            if(array[i][j]+array[i+1][j]+array[i+2][j]==target)
            {
                count++
            }
        }
    }
    for(var i=0;i<row-2;i++)
    {
        for(var j=0;j<col-2;j++)
        {
            console.log(i,j)
            if(array[i][j]+array[i+1][j+1]+array[i+2][j+2]==target)
            {
                count++
       
            }
        }
    }
    for(var i=row-1;i>1;i--)
    {
        for(var j=0;j<col-2;j++)
        {
            //console.log(i,j)
            if(array[i][j]+array[i+1][j-1]+array[i+2][j-2]==target)
            {
                count++
            }
        }
    }
    console.log(count)
  }

if (process.env.USER === "kaustubhmendhe") {
    runProgram(` 3 3 6
    3 2 1
    2 2 2
    1 5 1
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